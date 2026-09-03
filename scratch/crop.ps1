Add-Type -AssemblyName System.Drawing

$sourcePath = "C:\Users\SaiPrashanthChavanSh\.gemini\antigravity-ide\brain\eca7703a-3e93-40bf-b935-7f37dfe91516\.user_uploaded\media_1788354407788.png"
$img = [System.Drawing.Bitmap]::FromFile($sourcePath)

$w = $img.Width
$h = $img.Height

Write-Host "Source Image Size: $w x $h"

# Crop Variation 1 - Default (Left Person of Variation 1)
# Coordinates in media_1788354407788.png:
# Default person 1 is around X=20 to X=250, Y=200 to Y=780
$rectDefault = New-Object System.Drawing.Rectangle(
    [int]($w * 0.02),
    [int]($h * 0.22),
    [int]($w * 0.23),
    [int]($h * 0.60)
)
$cropDefault = $img.Clone($rectDefault, $img.PixelFormat)
$cropDefault.Save("public\avatar_default.png", [System.Drawing.Imaging.ImageFormat]::Png)

# Crop Variation 1 - Hover (Smiling Person of Variation 1)
# Hover person 1 is around X=250 to X=480, Y=200 to Y=780
$rectHover = New-Object System.Drawing.Rectangle(
    [int]($w * 0.25),
    [int]($h * 0.22),
    [int]($w * 0.23),
    [int]($h * 0.60)
)
$cropHover = $img.Clone($rectHover, $img.PixelFormat)
$cropHover.Save("public\avatar_hover.png", [System.Drawing.Imaging.ImageFormat]::Png)

$cropDefault.Dispose()
$cropHover.Dispose()
$img.Dispose()

Write-Host "Successfully generated public/avatar_default.png and public/avatar_hover.png!"
