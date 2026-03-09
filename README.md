# 25mb-video-backup

Backups of my videos, resized to be under 25mb

[Access here](https://whalis1504.github.io/25mb-video-backup/main.html)

Command:

```bash
ffmpeg -y ^
-i "%%F" ^
-fs 25000000 ^
-vf "scale=288:162:force_original_aspect_ratio=increase,crop=288:162,fps=24" ^
-c:v libsvtav1 -crf 44 -preset 8 -g 120 ^
-c:a libopus -b:a 8k -compression_level 10 -application voip -ac 1 ^
"downscaled\%%~nF.webm"
```
