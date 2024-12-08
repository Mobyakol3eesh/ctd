# Robflix

## Installation

To install the required packages, run the following command:

```bash
pip install -r requirements.txt
```

This project requires FFmpeg for media processing. Please ensure you have FFmpeg installed and configured on your system before running the project.

## What is FFmpeg?

FFmpeg is a complete, cross-platform solution to record, convert, and stream audio and video. It's a command-line tool that supports a wide range of multimedia formats.

## Installation Guide

Follow the steps below to install FFmpeg:

### Windows Installation
1. **Download FFmpeg**:
   - Visit the official download page: https://github.com/BtbN/FFmpeg-Builds/releases
   - Download the latest "ffmpeg-master-latest-win64-gpl.zip"

2. **Install FFmpeg**:
   a. Extract the downloaded zip file
   b. Choose a permanent location (e.g., `C:\Program Files\FFmpeg`)

3. **Add to System PATH**:
   - Right-click "This PC" or "Computer"
   - Click "Properties"
   - Click "Advanced system settings"
   - Click "Environment Variables"
   - Under "System variables", find "Path" and click "Edit"
   - Click "New"
   - Add the full path to the FFmpeg `bin` folder (e.g., `C:\Program Files\FFmpeg\bin`)
   - Click "OK" on all windows

### macOS Installation
**Using Homebrew** (recommended):
```bash
brew install ffmpeg
```

**Manual Download**:
- Visit https://evermeet.cx/ffmpeg/
- Download the latest version
- Add to PATH manually

### Linux (Ubuntu/Debian) Installation
```bash
sudo apt-get update
sudo apt-get install ffmpeg
```

## Verification
Open a terminal/command prompt and run:
```bash
ffmpeg -version
```
If FFmpeg is installed correctly, you'll see version information.

## Troubleshooting
- Restart your computer after installation
- Ensure you've added the correct path to system PATH
- Verify the path contains the `ffmpeg.exe` (on Windows)

## Common Issues
- Restart your Python IDE/environment after installation
- Make sure you have the latest version of yt-dlp
- Reboot your computer if PATH changes don't take effect immediately

## Support
If you continue to experience issues, please check:
- yt-dlp documentation
- FFmpeg official documentation
- Open an issue in the project repository

   ```cmd
   ffmpeg -version
