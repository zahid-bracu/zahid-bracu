<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Professional README Banner</title>
  <style>
    :root {
      --bg-1: #08111f;
      --bg-2: #10243f;
      --accent-1: #38bdf8;
      --accent-2: #a78bfa;
      --accent-3: #34d399;
      --text-main: #f8fafc;
      --text-soft: #cbd5e1;
      --card: rgba(255, 255, 255, 0.08);
      --border: rgba(255, 255, 255, 0.16);
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      padding: 32px;
      background: radial-gradient(circle at top left, #172554, #020617 55%);
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: var(--text-main);
    }

    .page {
      width: min(1180px, 100%);
      display: grid;
      gap: 18px;
    }

    .banner {
      position: relative;
      overflow: hidden;
      min-height: 390px;
      padding: 48px;
      border-radius: 34px;
      background:
        radial-gradient(circle at 12% 18%, rgba(56, 189, 248, 0.35), transparent 30%),
        radial-gradient(circle at 86% 22%, rgba(167, 139, 250, 0.32), transparent 32%),
        linear-gradient(135deg, var(--bg-1), var(--bg-2));
      border: 1px solid var(--border);
      box-shadow: 0 28px 80px rgba(2, 6, 23, 0.65);
      isolation: isolate;
    }

    .banner::before {
      content: "";
      position: absolute;
      inset: -2px;
      background-image:
        linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px);
      background-size: 34px 34px;
      mask-image: linear-gradient(to bottom, rgba(0,0,0,0.75), transparent);
      z-index: -2;
    }

    .orb {
      position: absolute;
      width: 240px;
      height: 240px;
      border-radius: 999px;
      filter: blur(10px);
      opacity: 0.72;
      animation: float 7s ease-in-out infinite;
      z-index: -1;
    }

    .orb.one {
      right: 90px;
      top: 42px;
      background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
    }

    .orb.two {
      right: 290px;
      bottom: -120px;
      width: 190px;
      height: 190px;
      background: linear-gradient(135deg, var(--accent-3), var(--accent-1));
      animation-delay: -2s;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-18px) scale(1.04); }
    }

    .content {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: 1.25fr 0.75fr;
      gap: 36px;
      align-items: center;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      width: fit-content;
      padding: 9px 14px;
      border-radius: 999px;
      background: rgba(56, 189, 248, 0.12);
      color: #bae6fd;
      border: 1px solid rgba(56, 189, 248, 0.28);
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    h1 {
      margin: 22px 0 12px;
      font-size: clamp(38px, 6vw, 72px);
      line-height: 0.96;
      letter-spacing: -0.07em;
    }

    .gradient-text {
      background: linear-gradient(90deg, #f8fafc, #7dd3fc, #c4b5fd);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    .subtitle {
      max-width: 720px;
      margin: 0 0 24px;
      color: var(--text-soft);
      font-size: clamp(17px, 2vw, 21px);
      line-height: 1.6;
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 24px;
    }

    .chip {
      padding: 10px 13px;
      border-radius: 14px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.13);
      color: #e2e8f0;
      font-weight: 700;
      font-size: 14px;
      backdrop-filter: blur(14px);
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
      max-width: 760px;
    }

    .stat {
      min-height: 94px;
      padding: 16px;
      border-radius: 22px;
      background: var(--card);
      border: 1px solid var(--border);
      backdrop-filter: blur(16px);
    }

    .stat strong {
      display: block;
      font-size: 22px;
      margin-bottom: 7px;
    }

    .stat span {
      color: var(--text-soft);
      font-size: 13px;
      line-height: 1.45;
    }

    .profile-card {
      justify-self: end;
      width: min(330px, 100%);
      padding: 22px;
      border-radius: 30px;
      background: linear-gradient(180deg, rgba(255,255,255,0.13), rgba(255,255,255,0.06));
      border: 1px solid rgba(255,255,255,0.18);
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.14);
      backdrop-filter: blur(22px);
    }

    .avatar {
      height: 112px;
      width: 112px;
      display: grid;
      place-items: center;
      margin-bottom: 18px;
      border-radius: 31px;
      background:
        linear-gradient(135deg, rgba(56,189,248,0.35), rgba(167,139,250,0.38)),
        rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.18);
      font-size: 44px;
    }

    .profile-card h2 {
      margin: 0 0 8px;
      font-size: 26px;
      letter-spacing: -0.04em;
    }

    .profile-card p {
      margin: 0 0 18px;
      color: var(--text-soft);
      line-height: 1.55;
      font-size: 15px;
    }

    .timeline {
      display: grid;
      gap: 10px;
    }

    .timeline-item {
      display: grid;
      grid-template-columns: 34px 1fr;
      gap: 10px;
      align-items: start;
      color: #dbeafe;
      font-size: 14px;
    }

    .dot {
      height: 25px;
      width: 25px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
      box-shadow: 0 0 24px rgba(56,189,248,0.55);
      margin-top: 2px;
    }

    .controls {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
      justify-content: space-between;
      color: var(--text-soft);
      font-size: 14px;
    }

    .buttons {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    button {
      cursor: pointer;
      border: 0;
      padding: 12px 16px;
      border-radius: 14px;
      background: #f8fafc;
      color: #020617;
      font-weight: 800;
      box-shadow: 0 10px 28px rgba(15, 23, 42, 0.25);
    }

    button.secondary {
      background: rgba(255,255,255,0.1);
      color: #f8fafc;
      border: 1px solid rgba(255,255,255,0.16);
    }

    .readme-note {
      line-height: 1.6;
    }

    code {
      color: #bae6fd;
    }

    @media (max-width: 860px) {
      .banner { padding: 30px; }
      .content { grid-template-columns: 1fr; }
      .profile-card { justify-self: start; }
      .stats { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <main class="page">
    <section class="banner" id="banner">
      <div class="orb one"></div>
      <div class="orb two"></div>

      <div class="content">
        <div>
          <div class="eyebrow">Computer Science • ICT • Research</div>
          <h1><span class="gradient-text">Academic Tech</span><br />Portfolio</h1>
          <p class="subtitle">
            Computer Science graduate with strong ICT foundation and MSc-level focus in CSE, IoT, Data Science, Cybersecurity, Cryptography, Quantum ML, and research-driven software systems.
          </p>

          <div class="chips">
            <span class="chip">BSc Computer Science</span>
            <span class="chip">PGD in ICT</span>
            <span class="chip">MSc CSE</span>
            <span class="chip">IoT Research</span>
            <span class="chip">Data Science</span>
            <span class="chip">Cryptography</span>
            <span class="chip">Quantum ML</span>
          </div>

          <div class="stats">
            <div class="stat">
              <strong>CS + ICT</strong>
              <span>Programming, algorithms, DBMS, networking, software engineering, and systems fundamentals.</span>
            </div>
            <div class="stat">
              <strong>Research</strong>
              <span>IoT, federated learning, post-quantum cryptography, secure systems, and data mining.</span>
            </div>
            <div class="stat">
              <strong>Builder</strong>
              <span>Projects using Python, web technologies, Node-RED, Arduino simulation, and analytical dashboards.</span>
            </div>
          </div>
        </div>

        <aside class="profile-card">
          <div class="avatar">⚡</div>
          <h2>Your Name Here</h2>
          <p>Computer Science & Engineering learner, researcher, and technology problem-solver.</p>

          <div class="timeline">
            <div class="timeline-item"><span class="dot"></span><span><b>BSc CS</b><br />BRAC University</span></div>
            <div class="timeline-item"><span class="dot"></span><span><b>PGD ICT</b><br />Bangladesh Agricultural University</span></div>
            <div class="timeline-item"><span class="dot"></span><span><b>MSc CSE</b><br />MIST</span></div>
          </div>
        </aside>
      </div>
    </section>

    <section class="controls">
      <p class="readme-note">
        For GitHub README: click <b>Export SVG</b>, upload the SVG/PNG to your repository, then use:<br />
        <code>![README Banner](./assets/readme-banner.svg)</code>
      </p>
      <div class="buttons">
        <button onclick="exportSVG()">Export SVG</button>
        <button class="secondary" onclick="copyReadmeCode()">Copy README Code</button>
      </div>
    </section>
  </main>

  <script>
    function exportSVG() {
      const svg = `
<svg width="1200" height="420" viewBox="0 0 1200 420" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="420" gradientUnits="userSpaceOnUse">
      <stop stop-color="#08111F"/>
      <stop offset="1" stop-color="#10243F"/>
    </linearGradient>
    <linearGradient id="text" x1="60" y1="95" x2="680" y2="250" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F8FAFC"/>
      <stop offset="0.55" stop-color="#7DD3FC"/>
      <stop offset="1" stop-color="#C4B5FD"/>
    </linearGradient>
    <filter id="blur"><feGaussianBlur stdDeviation="42"/></filter>
  </defs>
  <rect width="1200" height="420" rx="34" fill="url(#bg)"/>
  <circle cx="170" cy="75" r="145" fill="#38BDF8" opacity="0.25" filter="url(#blur)"/>
  <circle cx="1010" cy="110" r="155" fill="#A78BFA" opacity="0.28" filter="url(#blur)"/>
  <circle cx="850" cy="405" r="130" fill="#34D399" opacity="0.22" filter="url(#blur)"/>
  <g opacity="0.18">
    ${Array.from({ length: 36 }, (_, i) => `<line x1="${i * 34}" y1="0" x2="${i * 34}" y2="420" stroke="white"/>`).join('')}
    ${Array.from({ length: 13 }, (_, i) => `<line x1="0" y1="${i * 34}" x2="1200" y2="${i * 34}" stroke="white"/>`).join('')}
  </g>
  <rect x="60" y="54" width="330" height="38" rx="19" fill="#38BDF8" opacity="0.14" stroke="#38BDF8" stroke-opacity="0.28"/>
  <text x="78" y="79" fill="#BAE6FD" font-family="Arial, sans-serif" font-size="14" font-weight="700" letter-spacing="2">COMPUTER SCIENCE • ICT • RESEARCH</text>
  <text x="58" y="165" fill="url(#text)" font-family="Arial, sans-serif" font-size="64" font-weight="800" letter-spacing="-4">Academic Tech</text>
  <text x="58" y="232" fill="url(#text)" font-family="Arial, sans-serif" font-size="64" font-weight="800" letter-spacing="-4">Portfolio</text>
  <text x="62" y="275" fill="#CBD5E1" font-family="Arial, sans-serif" font-size="20">CS • ICT • MSc CSE • IoT • Data Science • Cybersecurity • Cryptography • Quantum ML</text>
  <g font-family="Arial, sans-serif" font-size="14" font-weight="700" fill="#E2E8F0">
    <rect x="60" y="310" width="140" height="38" rx="14" fill="white" opacity="0.08" stroke="white" stroke-opacity="0.14"/>
    <text x="78" y="334">BSc CS</text>
    <rect x="212" y="310" width="135" height="38" rx="14" fill="white" opacity="0.08" stroke="white" stroke-opacity="0.14"/>
    <text x="230" y="334">PGD ICT</text>
    <rect x="359" y="310" width="130" height="38" rx="14" fill="white" opacity="0.08" stroke="white" stroke-opacity="0.14"/>
    <text x="377" y="334">MSc CSE</text>
    <rect x="501" y="310" width="160" height="38" rx="14" fill="white" opacity="0.08" stroke="white" stroke-opacity="0.14"/>
    <text x="519" y="334">Researcher</text>
  </g>
  <rect x="830" y="74" width="300" height="272" rx="30" fill="white" opacity="0.1" stroke="white" stroke-opacity="0.2"/>
  <rect x="858" y="104" width="96" height="96" rx="28" fill="#38BDF8" opacity="0.28" stroke="white" stroke-opacity="0.18"/>
  <text x="886" y="165" font-family="Arial, sans-serif" font-size="42">⚡</text>
  <text x="858" y="236" fill="#F8FAFC" font-family="Arial, sans-serif" font-size="27" font-weight="800">Your Name Here</text>
  <text x="858" y="270" fill="#CBD5E1" font-family="Arial, sans-serif" font-size="15">Computer Science & Engineering</text>
  <text x="858" y="294" fill="#CBD5E1" font-family="Arial, sans-serif" font-size="15">Research • Software • Security</text>
</svg>`;

      const blob = new Blob([svg], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "readme-banner.svg";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    }

    async function copyReadmeCode() {
      const code = "![README Banner](./assets/readme-banner.svg)";
      await navigator.clipboard.writeText(code);
      alert("README markdown copied: " + code);
    }
  </script>
</body>
</html>
