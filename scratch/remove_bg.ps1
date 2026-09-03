Add-Type -AssemblyName System.Drawing

function Remove-Background {
    param (
        [string]$InputPath,
        [string]$OutputPath
    )

    $bmp = [System.Drawing.Bitmap]::FromFile((Resolve-Path $InputPath))
    $w = $bmp.Width
    $h = $bmp.Height

    # Create new bitmap with 32bpp ARGB for transparency
    $newBmp = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

    for ($x = 0; $x -lt $w; $x++) {
        for ($y = 0; $y -lt $h; $y++) {
            $pixel = $bmp.GetPixel($x, $y)
            $r = $pixel.R
            $g = $pixel.G
            $b = $pixel.B

            # Background color check: dark charcoal background (R,G,B all < 38 and low saturation)
            # Or near black border edges
            if ($r -lt 30 -and $g -lt 30 -and $b -lt 30) {
                # Make pixel transparent
                $newBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
            } else {
                $newBmp.SetPixel($x, $y, $pixel)
            }
        }
    }

    $bmp.Dispose()
    $newBmp.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $newBmp.Dispose()
    Write-Host "Processed transparent image: $OutputPath"
}

Remove-Background -InputPath "public\avatar_default.png" -OutputPath "public\avatar_default.png"
Remove-Background -InputPath "public\avatar_hover.png" -OutputPath "public\avatar_hover.png"
