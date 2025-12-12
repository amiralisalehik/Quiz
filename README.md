<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Quiz App — README</title>
  <style>
    body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial;line-height:1.5;color:#111;margin:28px;max-width:780px}
    h1{margin-top:0}
    pre{background:#f5f5f5;padding:12px;border-radius:6px;overflow:auto}
    code{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", monospace}
    ul{margin-top:0}
  </style>
</head>
<body>
  <h1>Quiz App</h1>
  <p>A simple quiz application built with <strong>React</strong>, <strong>TypeScript</strong>, and <strong>CSS</strong>.</p>

  <h2>Features</h2>
  <ul>
    <li>Shows questions one by one</li>
    <li>Highlights correct and wrong answers</li>
    <li>Tracks score and final percentage</li>
    <li>Restart option</li>
  </ul>

  <h2>Tech Stack</h2>
  <ul>
    <li>React</li>
    <li>TypeScript</li>
    <li>CSS</li>
  </ul>

  <h2>How to run</h2>
  <pre><code>npm install
npm run dev
# or for CRA
npm start
</code></pre>

  <h2>Structure</h2>
  <pre><code>src/
 ├── components/Quiz.tsx
 ├── questions.ts
 └── App.tsx
</code></pre>

  <footer style="margin-top:18px;color:#555;font-size:13px">
    Place this file in the repo root. Note: GitHub shows raw HTML when viewing the file in the repo; to view the rendered HTML you can open it locally in a browser or publish via GitHub Pages.
  </footer>
</body>
</html>