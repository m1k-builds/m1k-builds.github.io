# Installing on MacOS
## Steps
Set up homebrew
  ```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```
Add our tap
  ```bash
  brew tap m1k-builds/tap-$(uname -m)
  ```
Install app
  ```bash
  brew install --no-quarantine  --cask m1k-builds/tap-$(uname -m)/pixelpulse2
  ```

## Alternative
>[!WARNING]
> These PKGs are unsigned and hence will not work without bypassing further safety measures on your MacOS

[Go the latest release link](https://github.com/m1k-builds/Pixelpulse2-macOS/releases/latest) and download the PKG for your macOS variant.

## Notes
- Untested/WIP
