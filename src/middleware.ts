import { NextRequest, NextResponse } from "next/server";

const MAINTENANCE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
<title>Site Undergoing Maintenance | Dunn Behavioral Health</title>
<style>
  * { box-sizing: border-box; }
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: linear-gradient(160deg, #EEF2FF 0%, #FDF2F8 100%);
    font-family: Georgia, "Times New Roman", serif;
    color: #1E293B;
  }
  .card {
    max-width: 520px;
    text-align: center;
    background: #FFFFFF;
    border: 1px solid #E0E7FF;
    border-radius: 20px;
    padding: 3rem 2.5rem;
    box-shadow: 0 10px 40px rgba(37,99,235,0.12);
  }
  h1 {
    font-size: 1.9rem;
    margin: 0 0 0.75rem;
    color: #1E3A8A;
  }
  p {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    color: #64748B;
    margin: 0 0 1rem;
  }
  .badge {
    display: inline-block;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #9333EA;
    background: #F5F3FF;
    border-radius: 999px;
    padding: 0.35rem 0.9rem;
    margin-bottom: 1.25rem;
  }
  .contact {
    margin-top: 1.5rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
    font-size: 0.9rem;
    color: #1E293B;
  }
  .contact a { color: #2563EB; text-decoration: none; font-weight: 700; }
  .contact a:hover { text-decoration: underline; }
</style>
</head>
<body>
  <div class="card">
    <span class="badge">Scheduled Maintenance</span>
    <h1>We&rsquo;ll be right back</h1>
    <p>Dunn Behavioral Health&rsquo;s website is briefly offline for maintenance. Thank you for your patience &mdash; please check back shortly.</p>
    <p class="contact">Need to reach us now? Call <a href="tel:+19122210023">(912) 221-0023</a></p>
  </div>
</body>
</html>`;

export function middleware(request: NextRequest) {
  if (process.env.MAINTENANCE_MODE !== "true") {
    return NextResponse.next();
  }

  return new NextResponse(MAINTENANCE_HTML, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Retry-After": "3600",
    },
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|webp|ico|txt|xml)$).*)",
  ],
};
