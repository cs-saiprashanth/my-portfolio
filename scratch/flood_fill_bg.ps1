Add-Type -AssemblyName System.Drawing

function Remove-OuterBackground {
    param (
        [string]$SourcePath,
        [string]$OutputPath
    )

    # Re-crop fresh from media_1788354407788.png
    $sourcePath = "C:\Users\SaiPrashanthChavanSh\.gemini\antigravity-ide\brain\eca7703a-3e93-40bf-b935-7f37dfe91516\.user_uploaded\media_1788354407788.png"
    $orig = [System.Drawing.Bitmap]::FromFile($sourcePath)
    $w = $orig.Width
    $h = $orig.Height

    if ($SourcePath -like "*default*") {
        $rect = New-Object System.Drawing.Rectangle([int]($w * 0.02), [int]($h * 0.22), [int]($w * 0.23), [int]($h * 0.60))
    } else {
        $rect = New-Object System.Drawing.Rectangle([int]($w * 0.25), [int]($h * 0.22), [int]($w * 0.23), [int]($h * 0.60))
    }

    $crop = $orig.Clone($rect, $orig.PixelFormat)
    $orig.Dispose()

    $cw = $crop.Width
    $ch = $crop.Height

    $bmp = New-Object System.Drawing.Bitmap($cw, $ch, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    
    # Copy pixels
    for ($x = 0; $x -lt $cw; $x++) {
        for ($y = 0; $y -lt $ch; $y++) {
            $bmp.SetPixel($x, $y, $crop.GetPixel($x, $y))
        }
    }
    $crop.Dispose()

    # Outer BFS Flood Fill from (0,0) and (cw-1, 0)
    $visited = New-Object 'bool[,]' $cw, $ch
    $queue = New-Object System.Collections.Queue

    # Seed top corners and top border
    for ($x = 0; $x -lt $cw; $x++) {
        $queue.Enqueue((New-Object System.Drawing.Point($x, 0)))
        $visited[$x, 0] = $true
    }
    for ($y = 0; $y -lt $ch; $y++) {
        $queue.Enqueue((New-Object System.Drawing.Point(0, $y)))
        $visited[0, $y] = $true
        $queue.Enqueue((New-Object System.Drawing.Point($cw - 1, $y)))
        $visited[$cw - 1, $y] = $true
    }

    while ($queue.Count -gt 0) {
        $pt = $queue.Dequeue()
        $px = $pt.X
        $py = $pt.Y

        $color = $bmp.GetPixel($px, $py)

        # Check if background dark color (R<35, G<35, B<35)
        if ($color.R -lt 35 -and $color.G -lt 35 -and $color.B -lt 35) {
            $bmp.SetPixel($px, $py, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))

            # Check neighbors
            $neighbors = @(
                (New-Object System.Drawing.Point($px + 1, $py)),
                (New-Object System.Drawing.Point($px - 1, $py)),
                (New-Object System.Drawing.Point($px, $py + 1)),
                (New-Object System.Drawing.Point($px, $py - 1))
            )

            foreach ($n in $neighbors) {
                if ($n.X -ge 0 -and $n.X -lt $cw -and $n.Y -ge 0 -and $n.Y -lt $ch) {
                    if (-not $visited[$n.X, $n.Y]) {
                        $visited[$n.X, $n.Y] = $true
                        $queue.Enqueue($n)
                    }
                }
            }
        }
    }

    $bmp.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Host "Flood fill background removed cleanly for $OutputPath"
}

Remove-OuterBackground -SourcePath "default" -OutputPath "public\avatar_default.png"
Remove-OuterBackground -SourcePath "hover" -OutputPath "public\avatar_hover.png"
