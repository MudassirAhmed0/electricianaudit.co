<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
<xsl:output method="html" indent="yes" encoding="UTF-8"/>
<xsl:template match="/">
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <meta name="robots" content="noindex,nofollow"/>
  <title>Sitemap — Electrician Audit</title>
  <style>
    *{margin:0;box-sizing:border-box}
    body{font-family:'Geist',system-ui,sans-serif;background:#0a0f1a;color:#fafaf9;padding:3rem 2rem;min-height:100vh}
    .c{max-width:720px;margin:0 auto}
    .b{display:flex;align-items:center;gap:.5rem;margin-bottom:2rem}
    .bd{width:8px;height:8px;border-radius:2px;background:#f59e0b}
    .bn{font-size:.875rem;font-weight:600;letter-spacing:-.02em}
    h1{font-size:1.5rem;font-weight:700;letter-spacing:-.03em;margin-bottom:.5rem}
    .st{font-size:.8125rem;color:#78716c;margin-bottom:2.5rem}
    .ct{color:#f59e0b}
    table{width:100%;border-collapse:collapse}
    th{font-size:.625rem;font-weight:500;text-transform:uppercase;letter-spacing:.1em;color:#78716c;text-align:left;padding:.75rem 1rem;border-bottom:1px solid #1e293b}
    td{padding:.75rem 1rem;border-bottom:1px solid #1e293b;font-size:.875rem}
    tr:hover{background:#111827}
    a{color:#f59e0b;text-decoration:none}
    a:hover{text-decoration:underline;color:#fbbf24}
    .d{color:#78716c}
  </style>
</head>
<body>
  <div class="c">
    <div class="b"><div class="bd"/><span class="bn">Electrician Audit</span></div>
    <h1>Sitemap</h1>
    <p class="st"><span class="ct"><xsl:value-of select="count(s:urlset/s:url)"/></span> URLs</p>
    <table>
      <thead><tr><th>URL</th><th>Modified</th></tr></thead>
      <tbody>
        <xsl:for-each select="s:urlset/s:url">
          <tr>
            <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
            <td><span class="d"><xsl:value-of select="s:lastmod"/></span></td>
          </tr>
        </xsl:for-each>
      </tbody>
    </table>
  </div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
