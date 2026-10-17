"use client";

import { ArrowDownToLine, Check, Download, X } from "lucide-react";
import { useRef, type ReactNode } from "react";

type DownloadDialogProps = {
  trigger: ReactNode;
  variant?: "header" | "primary" | "dark";
};

export default function DownloadDialog({
  trigger,
  variant = "header",
}: DownloadDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        className={`button button--${variant}`}
        type="button"
        onClick={() => dialogRef.current?.showModal()}
      >
        {trigger}
      </button>
      <dialog
        className="download-dialog"
        ref={dialogRef}
        aria-labelledby="download-title"
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            dialogRef.current.close();
          }
        }}
      >
        <div className="dialog-content">
          <button
            className="dialog-close"
            type="button"
            aria-label="Close download dialog"
            onClick={() => dialogRef.current?.close()}
          >
            <X size={19} />
          </button>
          <span className="dialog-eyebrow">YOUR NEXT MOVE STARTS HERE</span>
          <h2 id="download-title">Get the GAWA app.</h2>
          <p className="dialog-description">
            Find people, jobs, and equipment — all in the palm of your hand.
          </p>

          <div className="download-file">
            <span className="file-type-icon">
              <ArrowDownToLine size={20} />
            </span>
            <span className="file-details">
              <strong>gawa.apk</strong>
              <span>Android app · Version 1.0.0</span>
            </span>
            <span className="file-size">123 MB</span>
          </div>

          <a
            className="button button--primary dialog-download"
            href="https://github.com/fangon-m/gawa-website/releases/latest/download/gawa.apk"
            type="application/vnd.android.package-archive"
            onClick={() => dialogRef.current?.close()}
          >
            <Download size={17} />
            Download APK
          </a>
          <p className="dialog-note">
            <Check size={14} /> Free to download. Android APK.
          </p>
          <p className="dialog-install-note">
            After downloading, open the file to install. Your Android device may
            ask you to allow installs from your browser.
          </p>
        </div>
      </dialog>
    </>
  );
}
