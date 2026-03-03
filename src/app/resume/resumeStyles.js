export default function ResumePrintStyles() {
  return (
    <style>{`
      /* Screen page background */
      .resume-page {
        min-height: 100vh;
        background: radial-gradient(1200px 800px at 20% 10%, rgba(59,130,246,0.20), transparent 60%),
                    radial-gradient(900px 700px at 90% 30%, rgba(168,85,247,0.18), transparent 55%),
                    #07070a;
        padding: 28px 16px 60px;
        color: #0b0b10;
      }

      .resume-topbar { max-width: 940px; margin: 0 auto 14px; }
      .resume-topbar-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
      }
      .resume-topbar-link {
        color: rgba(255,255,255,0.85);
        text-decoration: none;
        font-weight: 600;
      }
      .resume-topbar-actions { display: flex; gap: 10px; }
      .resume-btn {
        border: 1px solid rgba(255,255,255,0.15);
        background: rgba(255,255,255,0.07);
        color: rgba(255,255,255,0.92);
        padding: 10px 12px;
        border-radius: 12px;
        font-weight: 700;
        cursor: pointer;
        text-decoration: none;
      }
      .resume-btn.primary {
        background: linear-gradient(135deg, rgba(59,130,246,0.95), rgba(168,85,247,0.92));
        border-color: rgba(255,255,255,0.18);
      }

      /* Paper */
      .resume-paper {
        max-width: 940px;
        margin: 0 auto;
        background: #ffffff;
        border-radius: 18px;
        box-shadow: 0 30px 80px rgba(0,0,0,0.45);
        padding: 28px;
      }

      .resume-header {
        display: flex;
        justify-content: space-between;
        gap: 18px;
        align-items: flex-start;
      }
      .resume-header-left { display: flex; gap: 16px; align-items: flex-start; }
      .resume-photo-wrap {
        width: 86px; height: 86px;
        border-radius: 16px;
        overflow: hidden;
        border: 1px solid rgba(0,0,0,0.08);
        background: #f4f5f8;
        flex-shrink: 0;
      }
      .resume-photo { width: 100%; height: 100%; object-fit: cover; }

      .resume-h1 { margin: 0; font-size: 28px; letter-spacing: -0.02em; }
      .resume-title { margin: 4px 0 6px; font-weight: 800; color: #1f2a44; }
      .resume-meta { margin: 0; color: #4b5563; font-size: 13px; }

      .resume-links { margin-top: 10px; display: grid; gap: 6px; font-size: 13px; }
      .resume-link-label { color: #6b7280; font-weight: 700; }
      .resume-link {
        color: #0f172a;
        text-decoration: underline;
        word-break: break-all;
      }

      .resume-header-right { text-align: right; }
      .resume-badge {
        display: inline-block;
        padding: 8px 10px;
        border-radius: 999px;
        font-weight: 800;
        font-size: 12px;
        background: rgba(59,130,246,0.10);
        color: #1d4ed8;
        border: 1px solid rgba(59,130,246,0.18);
      }
      .resume-small { margin-top: 8px; color: #6b7280; font-size: 12px; }

      .resume-divider { height: 1px; background: rgba(15,23,42,0.10); margin: 18px 0 14px; }

      .resume-section { margin-top: 16px; }
      .resume-h2 {
        margin: 0 0 10px;
        font-size: 13px;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: #334155;
      }
      .resume-section-body { color: #111827; }

      .resume-bullets { margin: 0; padding-left: 18px; color: #111827; }
      .resume-bullets li { margin: 6px 0; color: #111827; }

      .resume-skill-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 12px;
      }
      .resume-skill-card {
        border: 1px solid rgba(15,23,42,0.10);
        border-radius: 14px;
        padding: 12px;
        background: #fbfbfd;
      }
      .resume-h3 { margin: 0 0 10px; font-size: 15px; }
      .resume-tags { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 8px; }
      .resume-tag {
        font-size: 12px;
        padding: 6px 8px;
        border-radius: 999px;
        background: rgba(2,6,23,0.04);
        border: 1px solid rgba(2,6,23,0.08);
      }

      .resume-projects { display: grid; gap: 14px; }
      .resume-project {
        border: 1px solid rgba(15,23,42,0.10);
        border-radius: 14px;
        padding: 14px;
        background: #ffffff;
      }
      .resume-project-top { display: flex; justify-content: space-between; gap: 12px; align-items: flex-start; }
      .resume-muted { margin: 6px 0 10px; color: #374151; }
      .resume-tags-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
      .resume-pill {
        font-size: 12px;
        padding: 6px 8px;
        border-radius: 999px;
        background: rgba(59,130,246,0.08);
        border: 1px solid rgba(59,130,246,0.18);
        color: #1d4ed8;
        font-weight: 700;
      }

      .resume-footer {
        margin-top: 18px;
        padding-top: 12px;
        border-top: 1px solid rgba(15,23,42,0.10);
        display: flex;
        justify-content: space-between;
        gap: 10px;
        color: #4b5563;
        font-size: 12px;
      }
      .resume-footer-small { color: #6b7280; }

      /* Responsive */
      @media (max-width: 860px) {
        .resume-skill-grid { grid-template-columns: 1fr; }
        .resume-header { flex-direction: column; }
        .resume-header-right { text-align: left; }
        .resume-project-top { flex-direction: column; }
      }

      /* PRINT: make it look like a real resume PDF */
      @media print {
        .no-print { display: none !important; }
        .resume-page { background: #fff !important; padding: 0 !important; }
        .resume-paper {
          box-shadow: none !important;
          border-radius: 0 !important;
          padding: 18mm 16mm !important;
          max-width: none !important;
          margin: 0 !important;
        }
        a { color: #000 !important; text-decoration: underline !important; }
        .resume-project, .resume-skill-card { break-inside: avoid; page-break-inside: avoid; }
      }
    `}</style>
  );
}