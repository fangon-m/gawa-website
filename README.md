# GAWA website

The GAWA app website is a Next.js site highlighting hiring, jobs, equipment
rentals, activity tracking, messaging, and GAWA Points. The Android installer
is published as a GitHub Release asset and downloads as `gawa.apk`. The APK
is intentionally kept out of Git because it exceeds GitHub's 100 MB file limit.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Update the Android download

Create a new GitHub Release and attach the latest signed APK using the asset
name `gawa.apk`. The download button links to the latest release asset.

```bash
gh release create v1.0.0 path/to/gawa.apk \
  --repo fangon-m/gawa-website \
  --title "GAWA Android v1.0.0" \
  --notes "GAWA Android app release."
```
