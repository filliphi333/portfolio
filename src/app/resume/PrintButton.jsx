"use client";

export default function PrintButton() {
  return (
    <button
      className="resume-btn primary"
      onClick={() => window.print()}
      type="button"
    >
      Save as PDF
    </button>
  );
}