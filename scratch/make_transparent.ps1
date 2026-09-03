Add-Type -AssemblyName System.Drawing

function Process-Avatar {
    param (
        [string]$SourceFile,
        [double]$CropXRel,
        [double]$CropWRel,
        [string]$OutFileName
    )

    $bmpOrig = [System.Drawing.Bitmap]::FromFile($SourceFile)
    $w = $bmpOrig.Width
    $h = $bmpOrig.Height

    # Crop rectangle
    $rx = [int]($w * $CropXRel)
    $ry = [int]($h * 0.02)
    $rw = [int]($w * $CropWRel)
    $rh = [int]($h * 0.85)

    $rect = New-Object System.Drawing.Rectangle($rx, $ry, $rw, $rh)
    $cropped = $bmpOrig.Clone($rect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $bmpOrig.Dispose()

    $cw = $cropped.Width
    $ch = $cropped.Height

    # Create transparent output bitmap
    $outBmp = New-Object System.Drawing.Bitmap($cw, $ch, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

    # Perform background removal: Flood-fill outer background pixels
    # Find background color at top-left corner
    $bgR = $cropped.GetPixel(0, 0).R
    $bgG = $cropped.GetPixel(0, 0).G
    $bgB = $cropped.GetPixel(0, 0).B

    Write-Host "BG Color at (0,0): R=$bgR G=$bgG B=$bgB"

    # Copy pixels with transparency check
    for ($x = 0; $x -lt $cw; $x++) {
        for ($y = 0; $y -lt $ch; $y++) {
            $px = $cropped.GetPixel($x, $y)
            
            # Distance from background color
            $distR = [Math]::Abs($px.R - $bgR)
            $distG = [Math]::Abs($px.G - $bgG)
            $distB = [Math]::Abs($px.B - $bgB)

            # If pixel is dark background (near outer bg color and low brightness)
            if ($distR -lt 18 -and $distG -lt 18 -and $distB -lt 18) {
                # Transparent
                $outBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
            } else {
                # Opaque character pixel
                $outBmp.SetPixel($x, $y, $px)
            }
        }
    }

    $cropped.Dispose()
    $outBmp.Save($OutFileName, [System.Drawing.Imaging.ImageFormat]::Png)
    $outBmp.Dispose()

    Write-Host "Saved transparent avatar to $OutFileName"
}

$var1Path = "C:\Users\SaiPrashanthChavanSh\.gemini\antigravity-ide\brain\eca7703a-3e93-40bf-b935-7f37dfe91516\.user_uploaded\media_1788355170961.png"

# Process Left Avatar (Default Calm)
Process-Avatar -SourceFile $var1Path -CropXRel 0.02 -CropWRel 0.46 -OutFileName "public\avatar_default.png"

# Process Right Avatar (Hover Smiling)
Process-Avatar -SourceFile $var1Path -CropXRel 0.50 -CropWRel 0.46 -OutFileName "public\avatar_hover.png"
