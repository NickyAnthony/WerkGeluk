"use client";

const htmlContent = `<header class="page-header">
  <h1>WerkGeluk · Logo Designs v3</h1>
  <p>Twee Souls · Check Match · Twin Drops — uitgewerkt in navy + goud</p>
</header>

<main class="page-content">

  <!-- PALETTE SECTION -->
  <section>
    <div class="section-header">
      <div class="section-title">01 — Palet</div>
      <div class="section-heading">Het palet</div>
      <div class="section-sub">Premium navy met warm goud accent op koel off-white</div>
    </div>

    <div class="artboard">
      <div class="artboard-label">Kleurpalet</div>
      <div class="artboard-body white" style="padding: 36px;">
        <div class="palette-grid" style="width: 100%;">
          <div class="palette-card" style="background:#0D1B2A; color:#fff;">
            <div>
              <div class="palette-card-name">Navy</div>
              <div class="palette-card-role">Primary · headlines</div>
            </div>
            <div class="palette-card-hex">#0D1B2A</div>
          </div>
          <div class="palette-card" style="background: linear-gradient(135deg,#8B6A2E 0%,#C9A25B 35%,#F0D89A 55%,#C9A25B 75%,#8B6A2E 100%); color:#0D1B2A;">
            <div>
              <div class="palette-card-name">Gold</div>
              <div class="palette-card-role">Accent · highlights</div>
            </div>
            <div class="palette-card-hex">metallic gradient</div>
          </div>
          <div class="palette-card light" style="background:#F4F6F8; color:#0D1B2A;">
            <div>
              <div class="palette-card-name">Cloud</div>
              <div class="palette-card-role">Surface · backgrounds</div>
            </div>
            <div class="palette-card-hex">#F4F6F8</div>
          </div>
          <div class="palette-card light" style="background:#fff; color:#0D1B2A;">
            <div>
              <div class="palette-card-name">White</div>
              <div class="palette-card-role">Base · cards</div>
            </div>
            <div class="palette-card-hex">#FFFFFF</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TWO SOULS -->
  <section id="twosouls">
    <div class="section-header">
      <div class="section-title">02 — Two Souls</div>
      <div class="section-heading">Two Souls</div>
      <div class="section-sub">Twee mens-vormen die samen één geheel maken — verbinding &amp; match</div>
    </div>

    <!-- Horizontal (white + cloud) -->
    <div class="artboard" style="margin-bottom: 16px;">
      <div class="artboard-label">Horizontaal — wit + cloud</div>
      <div class="artboard-body plain">
        <div class="logo-split">
          <div class="logo-split-panel" style="background:#fff;">
            <!-- Two Souls horizontal -->
            <div class="logo-h">
              <svg viewBox="0 0 64 64" width="60" height="60">
                <defs>
                  <linearGradient id="gTS-h-main" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"  stop-color="#8B6A2E"/>
                    <stop offset="35%" stop-color="#C9A25B"/>
                    <stop offset="55%" stop-color="#F0D89A"/>
                    <stop offset="75%" stop-color="#C9A25B"/>
                    <stop offset="100%" stop-color="#8B6A2E"/>
                  </linearGradient>
                  <linearGradient id="gTS-h-v" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%"  stop-color="#F0D89A"/>
                    <stop offset="50%" stop-color="#C9A25B"/>
                    <stop offset="100%" stop-color="#8B6A2E"/>
                  </linearGradient>
                </defs>
                <circle cx="22" cy="20" r="6" fill="#0D1B2A"/>
                <path d="M 8 50 Q 8 30 22 30 Q 32 30 32 44 L 32 50 Z" fill="#0D1B2A"/>
                <circle cx="42" cy="20" r="6" fill="url(#gTS-h-v)"/>
                <path d="M 56 50 Q 56 30 42 30 Q 32 30 32 44 L 32 50 Z" fill="url(#gTS-h-main)"/>
              </svg>
              <div class="wordmark">
                <div class="wordmark-text" style="font-family:'DM Sans',sans-serif;">WerkGeluk</div>
                <div class="wordmark-sub">RECRUITMENT</div>
              </div>
            </div>
          </div>
          <div class="logo-split-panel" style="background:#F4F6F8;">
            <div class="logo-h">
              <svg viewBox="0 0 64 64" width="60" height="60">
                <defs>
                  <linearGradient id="gTS-h2-main" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"  stop-color="#8B6A2E"/>
                    <stop offset="35%" stop-color="#C9A25B"/>
                    <stop offset="55%" stop-color="#F0D89A"/>
                    <stop offset="75%" stop-color="#C9A25B"/>
                    <stop offset="100%" stop-color="#8B6A2E"/>
                  </linearGradient>
                  <linearGradient id="gTS-h2-v" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%"  stop-color="#F0D89A"/>
                    <stop offset="50%" stop-color="#C9A25B"/>
                    <stop offset="100%" stop-color="#8B6A2E"/>
                  </linearGradient>
                </defs>
                <circle cx="22" cy="20" r="6" fill="#0D1B2A"/>
                <path d="M 8 50 Q 8 30 22 30 Q 32 30 32 44 L 32 50 Z" fill="#0D1B2A"/>
                <circle cx="42" cy="20" r="6" fill="url(#gTS-h2-v)"/>
                <path d="M 56 50 Q 56 30 42 30 Q 32 30 32 44 L 32 50 Z" fill="url(#gTS-h2-main)"/>
              </svg>
              <div class="wordmark">
                <div class="wordmark-text" style="font-family:'DM Sans',sans-serif;">WerkGeluk</div>
                <div class="wordmark-sub">RECRUITMENT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="artboard-grid three" style="margin-bottom: 16px;">
      <!-- Gestapeld -->
      <div class="artboard">
        <div class="artboard-label">Gestapeld</div>
        <div class="artboard-body white">
          <div class="logo-v">
            <svg viewBox="0 0 64 64" width="88" height="88">
              <defs>
                <linearGradient id="gTS-s-main" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"  stop-color="#8B6A2E"/>
                  <stop offset="35%" stop-color="#C9A25B"/>
                  <stop offset="55%" stop-color="#F0D89A"/>
                  <stop offset="75%" stop-color="#C9A25B"/>
                  <stop offset="100%" stop-color="#8B6A2E"/>
                </linearGradient>
                <linearGradient id="gTS-s-v" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%"  stop-color="#F0D89A"/>
                  <stop offset="50%" stop-color="#C9A25B"/>
                  <stop offset="100%" stop-color="#8B6A2E"/>
                </linearGradient>
              </defs>
              <circle cx="22" cy="20" r="6" fill="#0D1B2A"/>
              <path d="M 8 50 Q 8 30 22 30 Q 32 30 32 44 L 32 50 Z" fill="#0D1B2A"/>
              <circle cx="42" cy="20" r="6" fill="url(#gTS-s-v)"/>
              <path d="M 56 50 Q 56 30 42 30 Q 32 30 32 44 L 32 50 Z" fill="url(#gTS-s-main)"/>
            </svg>
            <div class="wordmark" style="text-align:center;">
              <div class="wordmark-text" style="font-family:'DM Sans',sans-serif; font-size:26px;">WerkGeluk</div>
              <div class="wordmark-sub">RECRUITMENT</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Favicon -->
      <div class="artboard">
        <div class="artboard-label">Favicon — getest tot 16px</div>
        <div class="artboard-body plain">
          <div class="favicon-set">
            <div class="favicon-label" style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#5A6470; letter-spacing:1.5px;">FAVICON / APP ICON</div>
            <div class="favicon-row">
              <!-- 64px -->
              <div class="favicon-item">
                <div class="favicon-box" style="width:64px;height:64px;border-radius:14px;">
                  <svg viewBox="0 0 64 64" width="50" height="50">
                    <defs>
                      <linearGradient id="gTS-fav64-m" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%"  stop-color="#8B6A2E"/>
                        <stop offset="35%" stop-color="#C9A25B"/>
                        <stop offset="55%" stop-color="#F0D89A"/>
                        <stop offset="75%" stop-color="#C9A25B"/>
                        <stop offset="100%" stop-color="#8B6A2E"/>
                      </linearGradient>
                      <linearGradient id="gTS-fav64-v" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%"  stop-color="#F0D89A"/>
                        <stop offset="50%" stop-color="#C9A25B"/>
                        <stop offset="100%" stop-color="#8B6A2E"/>
                      </linearGradient>
                    </defs>
                    <circle cx="22" cy="20" r="6" fill="#0D1B2A"/>
                    <path d="M 8 50 Q 8 30 22 30 Q 32 30 32 44 L 32 50 Z" fill="#0D1B2A"/>
                    <circle cx="42" cy="20" r="6" fill="url(#gTS-fav64-v)"/>
                    <path d="M 56 50 Q 56 30 42 30 Q 32 30 32 44 L 32 50 Z" fill="url(#gTS-fav64-m)"/>
                  </svg>
                </div>
                <span class="favicon-label">64px</span>
              </div>
              <!-- 32px -->
              <div class="favicon-item">
                <div class="favicon-box" style="width:32px;height:32px;border-radius:7px;">
                  <svg viewBox="0 0 64 64" width="25" height="25">
                    <defs>
                      <linearGradient id="gTS-fav32-m" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%"  stop-color="#8B6A2E"/>
                        <stop offset="35%" stop-color="#C9A25B"/>
                        <stop offset="55%" stop-color="#F0D89A"/>
                        <stop offset="75%" stop-color="#C9A25B"/>
                        <stop offset="100%" stop-color="#8B6A2E"/>
                      </linearGradient>
                      <linearGradient id="gTS-fav32-v" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%"  stop-color="#F0D89A"/>
                        <stop offset="50%" stop-color="#C9A25B"/>
                        <stop offset="100%" stop-color="#8B6A2E"/>
                      </linearGradient>
                    </defs>
                    <circle cx="22" cy="20" r="6" fill="#0D1B2A"/>
                    <path d="M 8 50 Q 8 30 22 30 Q 32 30 32 44 L 32 50 Z" fill="#0D1B2A"/>
                    <circle cx="42" cy="20" r="6" fill="url(#gTS-fav32-v)"/>
                    <path d="M 56 50 Q 56 30 42 30 Q 32 30 32 44 L 32 50 Z" fill="url(#gTS-fav32-m)"/>
                  </svg>
                </div>
                <span class="favicon-label">32px</span>
              </div>
              <!-- 16px -->
              <div class="favicon-item">
                <div class="favicon-box" style="width:16px;height:16px;border-radius:3px;">
                  <svg viewBox="0 0 64 64" width="12" height="12">
                    <defs>
                      <linearGradient id="gTS-fav16-m" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%"  stop-color="#8B6A2E"/>
                        <stop offset="35%" stop-color="#C9A25B"/>
                        <stop offset="55%" stop-color="#F0D89A"/>
                        <stop offset="75%" stop-color="#C9A25B"/>
                        <stop offset="100%" stop-color="#8B6A2E"/>
                      </linearGradient>
                      <linearGradient id="gTS-fav16-v" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%"  stop-color="#F0D89A"/>
                        <stop offset="50%" stop-color="#C9A25B"/>
                        <stop offset="100%" stop-color="#8B6A2E"/>
                      </linearGradient>
                    </defs>
                    <circle cx="22" cy="20" r="6" fill="#0D1B2A"/>
                    <path d="M 8 50 Q 8 30 22 30 Q 32 30 32 44 L 32 50 Z" fill="#0D1B2A"/>
                    <circle cx="42" cy="20" r="6" fill="url(#gTS-fav16-v)"/>
                    <path d="M 56 50 Q 56 30 42 30 Q 32 30 32 44 L 32 50 Z" fill="url(#gTS-fav16-m)"/>
                  </svg>
                </div>
                <span class="favicon-label">16px</span>
              </div>
            </div>
            <!-- Browser tab mock -->
            <div class="tab-mock">
              <div class="tab-inner">
                <svg viewBox="0 0 64 64" width="14" height="14">
                  <defs>
                    <linearGradient id="gTS-tab-m" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%"  stop-color="#8B6A2E"/>
                      <stop offset="35%" stop-color="#C9A25B"/>
                      <stop offset="55%" stop-color="#F0D89A"/>
                      <stop offset="75%" stop-color="#C9A25B"/>
                      <stop offset="100%" stop-color="#8B6A2E"/>
                    </linearGradient>
                    <linearGradient id="gTS-tab-v" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%"  stop-color="#F0D89A"/>
                      <stop offset="50%" stop-color="#C9A25B"/>
                      <stop offset="100%" stop-color="#8B6A2E"/>
                    </linearGradient>
                  </defs>
                  <circle cx="22" cy="20" r="6" fill="#0D1B2A"/>
                  <path d="M 8 50 Q 8 30 22 30 Q 32 30 32 44 L 32 50 Z" fill="#0D1B2A"/>
                  <circle cx="42" cy="20" r="6" fill="url(#gTS-tab-v)"/>
                  <path d="M 56 50 Q 56 30 42 30 Q 32 30 32 44 L 32 50 Z" fill="url(#gTS-tab-m)"/>
                </svg>
                <span class="tab-title">WerkGeluk Recruitment</span>
                <span class="tab-close">×</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Dark variant -->
      <div class="artboard">
        <div class="artboard-label">Op donker</div>
        <div class="artboard-body navy">
          <div class="logo-h">
            <svg viewBox="0 0 64 64" width="60" height="60">
              <defs>
                <linearGradient id="gTS-dk-main" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"  stop-color="#8B6A2E"/>
                  <stop offset="35%" stop-color="#C9A25B"/>
                  <stop offset="55%" stop-color="#F0D89A"/>
                  <stop offset="75%" stop-color="#C9A25B"/>
                  <stop offset="100%" stop-color="#8B6A2E"/>
                </linearGradient>
                <linearGradient id="gTS-dk-v" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%"  stop-color="#F0D89A"/>
                  <stop offset="50%" stop-color="#C9A25B"/>
                  <stop offset="100%" stop-color="#8B6A2E"/>
                </linearGradient>
              </defs>
              <circle cx="22" cy="20" r="6" fill="#F4F6F8"/>
              <path d="M 8 50 Q 8 30 22 30 Q 32 30 32 44 L 32 50 Z" fill="#F4F6F8"/>
              <circle cx="42" cy="20" r="6" fill="url(#gTS-dk-v)"/>
              <path d="M 56 50 Q 56 30 42 30 Q 32 30 32 44 L 32 50 Z" fill="url(#gTS-dk-main)"/>
            </svg>
            <div class="wordmark">
              <div class="wordmark-text" style="font-family:'DM Sans',sans-serif; color:#fff;">WerkGeluk</div>
              <div class="wordmark-sub" style="color:rgba(255,255,255,0.5);">RECRUITMENT</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Business card -->
    <div class="artboard" style="margin-bottom: 16px;">
      <div class="artboard-label">Visitekaartje</div>
      <div class="artboard-body plain">
        <div class="bizcard-wrap" style="justify-content:center;">
          <!-- Front -->
          <div class="bizcard" style="border-radius:6px;">
            <div class="bizcard-front">
              <div class="bizcard-logo-wrap">
                <div class="logo-h">
                  <svg viewBox="0 0 64 64" width="52" height="52">
                    <defs>
                      <linearGradient id="gTS-bc-main" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%"  stop-color="#8B6A2E"/>
                        <stop offset="35%" stop-color="#C9A25B"/>
                        <stop offset="55%" stop-color="#F0D89A"/>
                        <stop offset="75%" stop-color="#C9A25B"/>
                        <stop offset="100%" stop-color="#8B6A2E"/>
                      </linearGradient>
                      <linearGradient id="gTS-bc-v" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%"  stop-color="#F0D89A"/>
                        <stop offset="50%" stop-color="#C9A25B"/>
                        <stop offset="100%" stop-color="#8B6A2E"/>
                      </linearGradient>
                    </defs>
                    <circle cx="22" cy="20" r="6" fill="#0D1B2A"/>
                    <path d="M 8 50 Q 8 30 22 30 Q 32 30 32 44 L 32 50 Z" fill="#0D1B2A"/>
                    <circle cx="42" cy="20" r="6" fill="url(#gTS-bc-v)"/>
                    <path d="M 56 50 Q 56 30 42 30 Q 32 30 32 44 L 32 50 Z" fill="url(#gTS-bc-main)"/>
                  </svg>
                  <div class="wordmark">
                    <div class="wordmark-text" style="font-family:'DM Sans',sans-serif; font-size:22px;">WerkGeluk</div>
                    <div class="wordmark-sub" style="font-size:7.5px;">RECRUITMENT</div>
                  </div>
                </div>
              </div>
              <div class="bizcard-contact">
                <div class="bizcard-name">Sanne van der Berg</div>
                <div>Senior Recruitment Consultant</div>
                <div class="bizcard-info-row">
                  <span>06 18 23 69 93</span>
                  <span>info@werkgeluk-recruitment.nl</span>
                </div>
              </div>
            </div>
          </div>
          <!-- Back -->
          <div class="bizcard" style="border-radius:6px;">
            <div class="bizcard-back">
              <div class="bizcard-glow" style="background:linear-gradient(135deg,#8B6A2E 0%,#C9A25B 35%,#F0D89A 55%,#C9A25B 75%,#8B6A2E 100%);"></div>
              <svg viewBox="0 0 64 64" width="84" height="84" style="position:relative;z-index:1;">
                <defs>
                  <linearGradient id="gTS-bk-main" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"  stop-color="#8B6A2E"/>
                    <stop offset="35%" stop-color="#C9A25B"/>
                    <stop offset="55%" stop-color="#F0D89A"/>
                    <stop offset="75%" stop-color="#C9A25B"/>
                    <stop offset="100%" stop-color="#8B6A2E"/>
                  </linearGradient>
                  <linearGradient id="gTS-bk-v" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%"  stop-color="#F0D89A"/>
                    <stop offset="50%" stop-color="#C9A25B"/>
                    <stop offset="100%" stop-color="#8B6A2E"/>
                  </linearGradient>
                </defs>
                <circle cx="22" cy="20" r="6" fill="#F4F6F8"/>
                <path d="M 8 50 Q 8 30 22 30 Q 32 30 32 44 L 32 50 Z" fill="#F4F6F8"/>
                <circle cx="42" cy="20" r="6" fill="url(#gTS-bk-v)"/>
                <path d="M 56 50 Q 56 30 42 30 Q 32 30 32 44 L 32 50 Z" fill="url(#gTS-bk-main)"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Letterhead + LinkedIn -->
    <div class="artboard-grid two">
      <div class="artboard">
        <div class="artboard-label">Briefhoofd</div>
        <div class="artboard-body" style="padding: 40px;">
          <div class="letterhead">
            <div class="letterhead-logo-wrap">
              <div class="logo-h">
                <svg viewBox="0 0 64 64" width="52" height="52">
                  <defs>
                    <linearGradient id="gTS-lh-main" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%"  stop-color="#8B6A2E"/>
                      <stop offset="35%" stop-color="#C9A25B"/>
                      <stop offset="55%" stop-color="#F0D89A"/>
                      <stop offset="75%" stop-color="#C9A25B"/>
                      <stop offset="100%" stop-color="#8B6A2E"/>
                    </linearGradient>
                    <linearGradient id="gTS-lh-v" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%"  stop-color="#F0D89A"/>
                      <stop offset="50%" stop-color="#C9A25B"/>
                      <stop offset="100%" stop-color="#8B6A2E"/>
                    </linearGradient>
                  </defs>
                  <circle cx="22" cy="20" r="6" fill="#0D1B2A"/>
                  <path d="M 8 50 Q 8 30 22 30 Q 32 30 32 44 L 32 50 Z" fill="#0D1B2A"/>
                  <circle cx="42" cy="20" r="6" fill="url(#gTS-lh-v)"/>
                  <path d="M 56 50 Q 56 30 42 30 Q 32 30 32 44 L 32 50 Z" fill="url(#gTS-lh-main)"/>
                </svg>
                <div class="wordmark">
                  <div class="wordmark-text" style="font-family:'DM Sans',sans-serif; font-size:22px;">WerkGeluk</div>
                  <div class="wordmark-sub" style="font-size:7px;">RECRUITMENT</div>
                </div>
              </div>
            </div>
            <div class="letterhead-rule">
              <div class="letterhead-rule-navy"></div>
              <div class="letterhead-rule-gold"></div>
            </div>
            <div class="letterhead-address">
              <span>OTTO REUCHLINWEG · 3072 MD ROTTERDAM</span>
              <span>WERKGELUK-RECRUITMENT.NL</span>
            </div>
            <div class="letterhead-body">
              <div class="letterhead-date">Rotterdam, 30 april 2026</div>
              <div class="letterhead-salutation">Beste mevrouw De Vries,</div>
              <div class="letterhead-lines"></div>
              <div>Met vriendelijke groet,</div>
              <div style="font-weight:600; margin-top:16px;">WerkGeluk Recruitment</div>
            </div>
            <div class="letterhead-footer">
              <span>KVK 70841640</span>
              <span>BTW NL001178713B61</span>
              <span>06 18 23 69 93</span>
            </div>
          </div>
        </div>
      </div>

      <div class="artboard">
        <div class="artboard-label">LinkedIn banner</div>
        <div class="artboard-body" style="padding: 40px;">
          <div class="linkedin-banner">
            <div class="linkedin-left">
              <div class="linkedin-glow" style="background:linear-gradient(135deg,#8B6A2E 0%,#C9A25B 35%,#F0D89A 55%,#C9A25B 75%,#8B6A2E 100%);"></div>
              <svg viewBox="0 0 64 64" width="110" height="110" style="position:relative;z-index:1;">
                <defs>
                  <linearGradient id="gTS-li-main" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"  stop-color="#8B6A2E"/>
                    <stop offset="35%" stop-color="#C9A25B"/>
                    <stop offset="55%" stop-color="#F0D89A"/>
                    <stop offset="75%" stop-color="#C9A25B"/>
                    <stop offset="100%" stop-color="#8B6A2E"/>
                  </linearGradient>
                  <linearGradient id="gTS-li-v" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%"  stop-color="#F0D89A"/>
                    <stop offset="50%" stop-color="#C9A25B"/>
                    <stop offset="100%" stop-color="#8B6A2E"/>
                  </linearGradient>
                </defs>
                <circle cx="22" cy="20" r="6" fill="#F4F6F8"/>
                <path d="M 8 50 Q 8 30 22 30 Q 32 30 32 44 L 32 50 Z" fill="#F4F6F8"/>
                <circle cx="42" cy="20" r="6" fill="url(#gTS-li-v)"/>
                <path d="M 56 50 Q 56 30 42 30 Q 32 30 32 44 L 32 50 Z" fill="url(#gTS-li-main)"/>
              </svg>
            </div>
            <div class="linkedin-right">
              <div class="linkedin-headline">Het juiste werk.<br>De juiste mens.</div>
              <div class="linkedin-tags">
                <div class="linkedin-dot" style="background:#0D1B2A;"></div>
                <span class="linkedin-tag">WERVING &amp; SELECTIE</span>
                <div class="linkedin-dot" style="background:linear-gradient(135deg,#8B6A2E,#C9A25B,#F0D89A);"></div>
                <span class="linkedin-tag">ROTTERDAM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CHECK MATCH -->
  <section id="checkmatch">
    <div class="section-header">
      <div class="section-title">03 — Check Match</div>
      <div class="section-heading">Check Match</div>
      <div class="section-sub">Een vinkje uit twee strokes — bevestiging van de juiste match</div>
    </div>

    <!-- Horizontal -->
    <div class="artboard" style="margin-bottom: 16px;">
      <div class="artboard-label">Horizontaal — wit + cloud</div>
      <div class="artboard-body plain">
        <div class="logo-split">
          <div class="logo-split-panel" style="background:#fff;">
            <div class="logo-h">
              <svg viewBox="0 0 64 64" width="60" height="60">
                <defs>
                  <linearGradient id="gCM-h-main" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"  stop-color="#8B6A2E"/>
                    <stop offset="35%" stop-color="#C9A25B"/>
                    <stop offset="55%" stop-color="#F0D89A"/>
                    <stop offset="75%" stop-color="#C9A25B"/>
                    <stop offset="100%" stop-color="#8B6A2E"/>
                  </linearGradient>
                </defs>
                <circle cx="32" cy="32" r="28" fill="none" stroke="#0D1B2A" stroke-width="2" opacity="0.15"/>
                <path d="M 16 34 L 26 44" stroke="#0D1B2A" stroke-width="6" stroke-linecap="round" fill="none"/>
                <path d="M 26 44 L 48 22" stroke="url(#gCM-h-main)" stroke-width="6" stroke-linecap="round" fill="none"/>
              </svg>
              <div class="wordmark">
                <div class="wordmark-text" style="font-family:'Inter',sans-serif; font-weight:600; letter-spacing:-0.6px;">WerkGeluk</div>
                <div class="wordmark-sub">RECRUITMENT</div>
              </div>
            </div>
          </div>
          <div class="logo-split-panel" style="background:#F4F6F8;">
            <div class="logo-h">
              <svg viewBox="0 0 64 64" width="60" height="60">
                <defs>
                  <linearGradient id="gCM-h2-main" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"  stop-color="#8B6A2E"/>
                    <stop offset="35%" stop-color="#C9A25B"/>
                    <stop offset="55%" stop-color="#F0D89A"/>
                    <stop offset="75%" stop-color="#C9A25B"/>
                    <stop offset="100%" stop-color="#8B6A2E"/>
                  </linearGradient>
                </defs>
                <circle cx="32" cy="32" r="28" fill="none" stroke="#0D1B2A" stroke-width="2" opacity="0.15"/>
                <path d="M 16 34 L 26 44" stroke="#0D1B2A" stroke-width="6" stroke-linecap="round" fill="none"/>
                <path d="M 26 44 L 48 22" stroke="url(#gCM-h2-main)" stroke-width="6" stroke-linecap="round" fill="none"/>
              </svg>
              <div class="wordmark">
                <div class="wordmark-text" style="font-family:'Inter',sans-serif; font-weight:600; letter-spacing:-0.6px;">WerkGeluk</div>
                <div class="wordmark-sub">RECRUITMENT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="artboard-grid three" style="margin-bottom: 16px;">
      <!-- Gestapeld -->
      <div class="artboard">
        <div class="artboard-label">Gestapeld</div>
        <div class="artboard-body white">
          <div class="logo-v">
            <svg viewBox="0 0 64 64" width="88" height="88">
              <defs>
                <linearGradient id="gCM-s-main" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"  stop-color="#8B6A2E"/>
                  <stop offset="35%" stop-color="#C9A25B"/>
                  <stop offset="55%" stop-color="#F0D89A"/>
                  <stop offset="75%" stop-color="#C9A25B"/>
                  <stop offset="100%" stop-color="#8B6A2E"/>
                </linearGradient>
              </defs>
              <circle cx="32" cy="32" r="28" fill="none" stroke="#0D1B2A" stroke-width="2" opacity="0.15"/>
              <path d="M 16 34 L 26 44" stroke="#0D1B2A" stroke-width="6" stroke-linecap="round" fill="none"/>
              <path d="M 26 44 L 48 22" stroke="url(#gCM-s-main)" stroke-width="6" stroke-linecap="round" fill="none"/>
            </svg>
            <div class="wordmark" style="text-align:center;">
              <div class="wordmark-text" style="font-family:'Inter',sans-serif; font-weight:600; letter-spacing:-0.6px; font-size:26px;">WerkGeluk</div>
              <div class="wordmark-sub">RECRUITMENT</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Favicon -->
      <div class="artboard">
        <div class="artboard-label">Favicon — getest tot 16px</div>
        <div class="artboard-body plain">
          <div class="favicon-set">
            <div class="favicon-label" style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#5A6470; letter-spacing:1.5px;">FAVICON / APP ICON</div>
            <div class="favicon-row">
              <div class="favicon-item">
                <div class="favicon-box" style="width:64px;height:64px;border-radius:14px;">
                  <svg viewBox="0 0 64 64" width="50" height="50">
                    <defs>
                      <linearGradient id="gCM-fav64" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%"  stop-color="#8B6A2E"/>
                        <stop offset="35%" stop-color="#C9A25B"/>
                        <stop offset="55%" stop-color="#F0D89A"/>
                        <stop offset="75%" stop-color="#C9A25B"/>
                        <stop offset="100%" stop-color="#8B6A2E"/>
                      </linearGradient>
                    </defs>
                    <path d="M 14 34 L 26 46" stroke="#0D1B2A" stroke-width="8" stroke-linecap="round" fill="none"/>
                    <path d="M 26 46 L 50 18" stroke="url(#gCM-fav64)" stroke-width="8" stroke-linecap="round" fill="none"/>
                  </svg>
                </div>
                <span class="favicon-label">64px</span>
              </div>
              <div class="favicon-item">
                <div class="favicon-box" style="width:32px;height:32px;border-radius:7px;">
                  <svg viewBox="0 0 64 64" width="25" height="25">
                    <defs>
                      <linearGradient id="gCM-fav32" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%"  stop-color="#8B6A2E"/>
                        <stop offset="35%" stop-color="#C9A25B"/>
                        <stop offset="55%" stop-color="#F0D89A"/>
                        <stop offset="75%" stop-color="#C9A25B"/>
                        <stop offset="100%" stop-color="#8B6A2E"/>
                      </linearGradient>
                    </defs>
                    <path d="M 14 34 L 26 46" stroke="#0D1B2A" stroke-width="8" stroke-linecap="round" fill="none"/>
                    <path d="M 26 46 L 50 18" stroke="url(#gCM-fav32)" stroke-width="8" stroke-linecap="round" fill="none"/>
                  </svg>
                </div>
                <span class="favicon-label">32px</span>
              </div>
              <div class="favicon-item">
                <div class="favicon-box" style="width:16px;height:16px;border-radius:3px;">
                  <svg viewBox="0 0 64 64" width="12" height="12">
                    <defs>
                      <linearGradient id="gCM-fav16" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%"  stop-color="#8B6A2E"/>
                        <stop offset="35%" stop-color="#C9A25B"/>
                        <stop offset="55%" stop-color="#F0D89A"/>
                        <stop offset="75%" stop-color="#C9A25B"/>
                        <stop offset="100%" stop-color="#8B6A2E"/>
                      </linearGradient>
                    </defs>
                    <path d="M 14 34 L 26 46" stroke="#0D1B2A" stroke-width="8" stroke-linecap="round" fill="none"/>
                    <path d="M 26 46 L 50 18" stroke="url(#gCM-fav16)" stroke-width="8" stroke-linecap="round" fill="none"/>
                  </svg>
                </div>
                <span class="favicon-label">16px</span>
              </div>
            </div>
            <div class="tab-mock">
              <div class="tab-inner">
                <svg viewBox="0 0 64 64" width="14" height="14">
                  <defs>
                    <linearGradient id="gCM-tab" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%"  stop-color="#8B6A2E"/>
                      <stop offset="35%" stop-color="#C9A25B"/>
                      <stop offset="55%" stop-color="#F0D89A"/>
                      <stop offset="75%" stop-color="#C9A25B"/>
                      <stop offset="100%" stop-color="#8B6A2E"/>
                    </linearGradient>
                  </defs>
                  <path d="M 14 34 L 26 46" stroke="#0D1B2A" stroke-width="8" stroke-linecap="round" fill="none"/>
                  <path d="M 26 46 L 50 18" stroke="url(#gCM-tab)" stroke-width="8" stroke-linecap="round" fill="none"/>
                </svg>
                <span class="tab-title">WerkGeluk Recruitment</span>
                <span class="tab-close">×</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Dark -->
      <div class="artboard">
        <div class="artboard-label">Op donker</div>
        <div class="artboard-body navy">
          <div class="logo-h">
            <svg viewBox="0 0 64 64" width="60" height="60">
              <defs>
                <linearGradient id="gCM-dk-main" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"  stop-color="#8B6A2E"/>
                  <stop offset="35%" stop-color="#C9A25B"/>
                  <stop offset="55%" stop-color="#F0D89A"/>
                  <stop offset="75%" stop-color="#C9A25B"/>
                  <stop offset="100%" stop-color="#8B6A2E"/>
                </linearGradient>
              </defs>
              <path d="M 16 34 L 26 44" stroke="#F4F6F8" stroke-width="6" stroke-linecap="round" fill="none"/>
              <path d="M 26 44 L 48 22" stroke="url(#gCM-dk-main)" stroke-width="6" stroke-linecap="round" fill="none"/>
            </svg>
            <div class="wordmark">
              <div class="wordmark-text" style="font-family:'Inter',sans-serif; font-weight:600; letter-spacing:-0.6px; color:#fff;">WerkGeluk</div>
              <div class="wordmark-sub" style="color:rgba(255,255,255,0.5);">RECRUITMENT</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Business card -->
    <div class="artboard" style="margin-bottom: 16px;">
      <div class="artboard-label">Visitekaartje</div>
      <div class="artboard-body plain">
        <div class="bizcard-wrap" style="justify-content:center;">
          <div class="bizcard" style="border-radius:6px;">
            <div class="bizcard-front">
              <div class="bizcard-logo-wrap">
                <div class="logo-h">
                  <svg viewBox="0 0 64 64" width="52" height="52">
                    <defs>
                      <linearGradient id="gCM-bc-main" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%"  stop-color="#8B6A2E"/>
                        <stop offset="35%" stop-color="#C9A25B"/>
                        <stop offset="55%" stop-color="#F0D89A"/>
                        <stop offset="75%" stop-color="#C9A25B"/>
                        <stop offset="100%" stop-color="#8B6A2E"/>
                      </linearGradient>
                    </defs>
                    <circle cx="32" cy="32" r="28" fill="none" stroke="#0D1B2A" stroke-width="2" opacity="0.15"/>
                    <path d="M 16 34 L 26 44" stroke="#0D1B2A" stroke-width="6" stroke-linecap="round" fill="none"/>
                    <path d="M 26 44 L 48 22" stroke="url(#gCM-bc-main)" stroke-width="6" stroke-linecap="round" fill="none"/>
                  </svg>
                  <div class="wordmark">
                    <div class="wordmark-text" style="font-family:'Inter',sans-serif; font-weight:600; letter-spacing:-0.6px; font-size:22px;">WerkGeluk</div>
                    <div class="wordmark-sub" style="font-size:7.5px;">RECRUITMENT</div>
                  </div>
                </div>
              </div>
              <div class="bizcard-contact">
                <div class="bizcard-name">Sanne van der Berg</div>
                <div>Senior Recruitment Consultant</div>
                <div class="bizcard-info-row">
                  <span>06 18 23 69 93</span>
                  <span>info@werkgeluk-recruitment.nl</span>
                </div>
              </div>
            </div>
          </div>
          <div class="bizcard" style="border-radius:6px;">
            <div class="bizcard-back">
              <div class="bizcard-glow" style="background:linear-gradient(135deg,#8B6A2E 0%,#C9A25B 35%,#F0D89A 55%,#C9A25B 75%,#8B6A2E 100%);"></div>
              <svg viewBox="0 0 64 64" width="84" height="84" style="position:relative;z-index:1;">
                <defs>
                  <linearGradient id="gCM-bk-main" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"  stop-color="#8B6A2E"/>
                    <stop offset="35%" stop-color="#C9A25B"/>
                    <stop offset="55%" stop-color="#F0D89A"/>
                    <stop offset="75%" stop-color="#C9A25B"/>
                    <stop offset="100%" stop-color="#8B6A2E"/>
                  </linearGradient>
                </defs>
                <path d="M 14 34 L 26 46" stroke="#F4F6F8" stroke-width="8" stroke-linecap="round" fill="none"/>
                <path d="M 26 46 L 50 18" stroke="url(#gCM-bk-main)" stroke-width="8" stroke-linecap="round" fill="none"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Letterhead + LinkedIn -->
    <div class="artboard-grid two">
      <div class="artboard">
        <div class="artboard-label">Briefhoofd</div>
        <div class="artboard-body" style="padding: 40px;">
          <div class="letterhead">
            <div class="letterhead-logo-wrap">
              <div class="logo-h">
                <svg viewBox="0 0 64 64" width="52" height="52">
                  <defs>
                    <linearGradient id="gCM-lh-main" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%"  stop-color="#8B6A2E"/>
                      <stop offset="35%" stop-color="#C9A25B"/>
                      <stop offset="55%" stop-color="#F0D89A"/>
                      <stop offset="75%" stop-color="#C9A25B"/>
                      <stop offset="100%" stop-color="#8B6A2E"/>
                    </linearGradient>
                  </defs>
                  <circle cx="32" cy="32" r="28" fill="none" stroke="#0D1B2A" stroke-width="2" opacity="0.15"/>
                  <path d="M 16 34 L 26 44" stroke="#0D1B2A" stroke-width="6" stroke-linecap="round" fill="none"/>
                  <path d="M 26 44 L 48 22" stroke="url(#gCM-lh-main)" stroke-width="6" stroke-linecap="round" fill="none"/>
                </svg>
                <div class="wordmark">
                  <div class="wordmark-text" style="font-family:'Inter',sans-serif; font-weight:600; letter-spacing:-0.6px; font-size:22px;">WerkGeluk</div>
                  <div class="wordmark-sub" style="font-size:7px;">RECRUITMENT</div>
                </div>
              </div>
            </div>
            <div class="letterhead-rule">
              <div class="letterhead-rule-navy"></div>
              <div class="letterhead-rule-gold"></div>
            </div>
            <div class="letterhead-address">
              <span>OTTO REUCHLINWEG · 3072 MD ROTTERDAM</span>
              <span>WERKGELUK-RECRUITMENT.NL</span>
            </div>
            <div class="letterhead-body">
              <div class="letterhead-date">Rotterdam, 30 april 2026</div>
              <div class="letterhead-salutation">Beste mevrouw De Vries,</div>
              <div class="letterhead-lines"></div>
              <div>Met vriendelijke groet,</div>
              <div style="font-weight:600; margin-top:16px;">WerkGeluk Recruitment</div>
            </div>
            <div class="letterhead-footer">
              <span>KVK 70841640</span>
              <span>BTW NL001178713B61</span>
              <span>06 18 23 69 93</span>
            </div>
          </div>
        </div>
      </div>

      <div class="artboard">
        <div class="artboard-label">LinkedIn banner</div>
        <div class="artboard-body" style="padding: 40px;">
          <div class="linkedin-banner">
            <div class="linkedin-left">
              <div class="linkedin-glow" style="background:linear-gradient(135deg,#8B6A2E 0%,#C9A25B 35%,#F0D89A 55%,#C9A25B 75%,#8B6A2E 100%);"></div>
              <svg viewBox="0 0 64 64" width="110" height="110" style="position:relative;z-index:1;">
                <defs>
                  <linearGradient id="gCM-li-main" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"  stop-color="#8B6A2E"/>
                    <stop offset="35%" stop-color="#C9A25B"/>
                    <stop offset="55%" stop-color="#F0D89A"/>
                    <stop offset="75%" stop-color="#C9A25B"/>
                    <stop offset="100%" stop-color="#8B6A2E"/>
                  </linearGradient>
                </defs>
                <path d="M 14 34 L 26 46" stroke="#F4F6F8" stroke-width="8" stroke-linecap="round" fill="none"/>
                <path d="M 26 46 L 50 18" stroke="url(#gCM-li-main)" stroke-width="8" stroke-linecap="round" fill="none"/>
              </svg>
            </div>
            <div class="linkedin-right">
              <div class="linkedin-headline">Elke match.<br>Een stap verder.</div>
              <div class="linkedin-tags">
                <div class="linkedin-dot" style="background:#0D1B2A;"></div>
                <span class="linkedin-tag">WERVING &amp; SELECTIE</span>
                <div class="linkedin-dot" style="background:linear-gradient(135deg,#8B6A2E,#C9A25B,#F0D89A);"></div>
                <span class="linkedin-tag">ROTTERDAM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TWIN DROPS -->
  <section id="twindrops">
    <div class="section-header">
      <div class="section-title">05 — Twin Drops</div>
      <div class="section-heading">Twin Drops</div>
      <div class="section-sub">Twee druppels in elkaar — yin/yang van match en verbinding</div>
    </div>

    <!-- Horizontal -->
    <div class="artboard" style="margin-bottom: 16px;">
      <div class="artboard-label">Horizontaal — wit + cloud</div>
      <div class="artboard-body plain">
        <div class="logo-split">
          <div class="logo-split-panel" style="background:#fff;">
            <div class="logo-h">
              <svg viewBox="0 0 64 64" width="60" height="60">
                <defs>
                  <linearGradient id="gTD-h-main" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"  stop-color="#8B6A2E"/>
                    <stop offset="35%" stop-color="#C9A25B"/>
                    <stop offset="55%" stop-color="#F0D89A"/>
                    <stop offset="75%" stop-color="#C9A25B"/>
                    <stop offset="100%" stop-color="#8B6A2E"/>
                  </linearGradient>
                </defs>
                <path d="M 32 8 A 12 12 0 0 1 32 32 A 12 12 0 0 0 32 56 A 24 24 0 0 1 32 8 Z" fill="#0D1B2A"/>
                <path d="M 32 8 A 12 12 0 0 0 32 32 A 12 12 0 0 1 32 56 A 24 24 0 0 0 32 8 Z" fill="url(#gTD-h-main)"/>
                <circle cx="32" cy="20" r="3" fill="#F4F6F8"/>
                <circle cx="32" cy="44" r="3" fill="#F4F6F8"/>
              </svg>
              <div class="wordmark">
                <div class="wordmark-text" style="font-family:'Manrope',sans-serif;">WerkGeluk</div>
                <div class="wordmark-sub">RECRUITMENT</div>
              </div>
            </div>
          </div>
          <div class="logo-split-panel" style="background:#F4F6F8;">
            <div class="logo-h">
              <svg viewBox="0 0 64 64" width="60" height="60">
                <defs>
                  <linearGradient id="gTD-h2-main" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"  stop-color="#8B6A2E"/>
                    <stop offset="35%" stop-color="#C9A25B"/>
                    <stop offset="55%" stop-color="#F0D89A"/>
                    <stop offset="75%" stop-color="#C9A25B"/>
                    <stop offset="100%" stop-color="#8B6A2E"/>
                  </linearGradient>
                </defs>
                <path d="M 32 8 A 12 12 0 0 1 32 32 A 12 12 0 0 0 32 56 A 24 24 0 0 1 32 8 Z" fill="#0D1B2A"/>
                <path d="M 32 8 A 12 12 0 0 0 32 32 A 12 12 0 0 1 32 56 A 24 24 0 0 0 32 8 Z" fill="url(#gTD-h2-main)"/>
                <circle cx="32" cy="20" r="3" fill="#F4F6F8"/>
                <circle cx="32" cy="44" r="3" fill="#F4F6F8"/>
              </svg>
              <div class="wordmark">
                <div class="wordmark-text" style="font-family:'Manrope',sans-serif;">WerkGeluk</div>
                <div class="wordmark-sub">RECRUITMENT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="artboard-grid three" style="margin-bottom: 16px;">
      <!-- Gestapeld -->
      <div class="artboard">
        <div class="artboard-label">Gestapeld</div>
        <div class="artboard-body white">
          <div class="logo-v">
            <svg viewBox="0 0 64 64" width="88" height="88">
              <defs>
                <linearGradient id="gTD-s-main" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"  stop-color="#8B6A2E"/>
                  <stop offset="35%" stop-color="#C9A25B"/>
                  <stop offset="55%" stop-color="#F0D89A"/>
                  <stop offset="75%" stop-color="#C9A25B"/>
                  <stop offset="100%" stop-color="#8B6A2E"/>
                </linearGradient>
              </defs>
              <path d="M 32 8 A 12 12 0 0 1 32 32 A 12 12 0 0 0 32 56 A 24 24 0 0 1 32 8 Z" fill="#0D1B2A"/>
              <path d="M 32 8 A 12 12 0 0 0 32 32 A 12 12 0 0 1 32 56 A 24 24 0 0 0 32 8 Z" fill="url(#gTD-s-main)"/>
              <circle cx="32" cy="20" r="3" fill="#F4F6F8"/>
              <circle cx="32" cy="44" r="3" fill="#F4F6F8"/>
            </svg>
            <div class="wordmark" style="text-align:center;">
              <div class="wordmark-text" style="font-family:'Manrope',sans-serif; font-size:26px;">WerkGeluk</div>
              <div class="wordmark-sub">RECRUITMENT</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Favicon -->
      <div class="artboard">
        <div class="artboard-label">Favicon — getest tot 16px</div>
        <div class="artboard-body plain">
          <div class="favicon-set">
            <div class="favicon-label" style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#5A6470; letter-spacing:1.5px;">FAVICON / APP ICON</div>
            <div class="favicon-row">
              <div class="favicon-item">
                <div class="favicon-box" style="width:64px;height:64px;border-radius:14px;">
                  <svg viewBox="0 0 64 64" width="50" height="50">
                    <defs>
                      <linearGradient id="gTD-fav64" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%"  stop-color="#8B6A2E"/>
                        <stop offset="35%" stop-color="#C9A25B"/>
                        <stop offset="55%" stop-color="#F0D89A"/>
                        <stop offset="75%" stop-color="#C9A25B"/>
                        <stop offset="100%" stop-color="#8B6A2E"/>
                      </linearGradient>
                    </defs>
                    <path d="M 32 8 A 12 12 0 0 1 32 32 A 12 12 0 0 0 32 56 A 24 24 0 0 1 32 8 Z" fill="#0D1B2A"/>
                    <path d="M 32 8 A 12 12 0 0 0 32 32 A 12 12 0 0 1 32 56 A 24 24 0 0 0 32 8 Z" fill="url(#gTD-fav64)"/>
                  </svg>
                </div>
                <span class="favicon-label">64px</span>
              </div>
              <div class="favicon-item">
                <div class="favicon-box" style="width:32px;height:32px;border-radius:7px;">
                  <svg viewBox="0 0 64 64" width="25" height="25">
                    <defs>
                      <linearGradient id="gTD-fav32" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%"  stop-color="#8B6A2E"/>
                        <stop offset="35%" stop-color="#C9A25B"/>
                        <stop offset="55%" stop-color="#F0D89A"/>
                        <stop offset="75%" stop-color="#C9A25B"/>
                        <stop offset="100%" stop-color="#8B6A2E"/>
                      </linearGradient>
                    </defs>
                    <path d="M 32 8 A 12 12 0 0 1 32 32 A 12 12 0 0 0 32 56 A 24 24 0 0 1 32 8 Z" fill="#0D1B2A"/>
                    <path d="M 32 8 A 12 12 0 0 0 32 32 A 12 12 0 0 1 32 56 A 24 24 0 0 0 32 8 Z" fill="url(#gTD-fav32)"/>
                  </svg>
                </div>
                <span class="favicon-label">32px</span>
              </div>
              <div class="favicon-item">
                <div class="favicon-box" style="width:16px;height:16px;border-radius:3px;">
                  <svg viewBox="0 0 64 64" width="12" height="12">
                    <defs>
                      <linearGradient id="gTD-fav16" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%"  stop-color="#8B6A2E"/>
                        <stop offset="35%" stop-color="#C9A25B"/>
                        <stop offset="55%" stop-color="#F0D89A"/>
                        <stop offset="75%" stop-color="#C9A25B"/>
                        <stop offset="100%" stop-color="#8B6A2E"/>
                      </linearGradient>
                    </defs>
                    <path d="M 32 8 A 12 12 0 0 1 32 32 A 12 12 0 0 0 32 56 A 24 24 0 0 1 32 8 Z" fill="#0D1B2A"/>
                    <path d="M 32 8 A 12 12 0 0 0 32 32 A 12 12 0 0 1 32 56 A 24 24 0 0 0 32 8 Z" fill="url(#gTD-fav16)"/>
                  </svg>
                </div>
                <span class="favicon-label">16px</span>
              </div>
            </div>
            <div class="tab-mock">
              <div class="tab-inner">
                <svg viewBox="0 0 64 64" width="14" height="14">
                  <defs>
                    <linearGradient id="gTD-tab" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%"  stop-color="#8B6A2E"/>
                      <stop offset="35%" stop-color="#C9A25B"/>
                      <stop offset="55%" stop-color="#F0D89A"/>
                      <stop offset="75%" stop-color="#C9A25B"/>
                      <stop offset="100%" stop-color="#8B6A2E"/>
                    </linearGradient>
                  </defs>
                  <path d="M 32 8 A 12 12 0 0 1 32 32 A 12 12 0 0 0 32 56 A 24 24 0 0 1 32 8 Z" fill="#0D1B2A"/>
                  <path d="M 32 8 A 12 12 0 0 0 32 32 A 12 12 0 0 1 32 56 A 24 24 0 0 0 32 8 Z" fill="url(#gTD-tab)"/>
                </svg>
                <span class="tab-title">WerkGeluk Recruitment</span>
                <span class="tab-close">×</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Dark -->
      <div class="artboard">
        <div class="artboard-label">Op donker</div>
        <div class="artboard-body navy">
          <div class="logo-h">
            <svg viewBox="0 0 64 64" width="60" height="60">
              <defs>
                <linearGradient id="gTD-dk-main" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"  stop-color="#8B6A2E"/>
                  <stop offset="35%" stop-color="#C9A25B"/>
                  <stop offset="55%" stop-color="#F0D89A"/>
                  <stop offset="75%" stop-color="#C9A25B"/>
                  <stop offset="100%" stop-color="#8B6A2E"/>
                </linearGradient>
              </defs>
              <path d="M 32 8 A 12 12 0 0 1 32 32 A 12 12 0 0 0 32 56 A 24 24 0 0 1 32 8 Z" fill="#F4F6F8"/>
              <path d="M 32 8 A 12 12 0 0 0 32 32 A 12 12 0 0 1 32 56 A 24 24 0 0 0 32 8 Z" fill="url(#gTD-dk-main)"/>
            </svg>
            <div class="wordmark">
              <div class="wordmark-text" style="font-family:'Manrope',sans-serif; color:#fff;">WerkGeluk</div>
              <div class="wordmark-sub" style="color:rgba(255,255,255,0.5);">RECRUITMENT</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Business card -->
    <div class="artboard" style="margin-bottom: 16px;">
      <div class="artboard-label">Visitekaartje</div>
      <div class="artboard-body plain">
        <div class="bizcard-wrap" style="justify-content:center;">
          <div class="bizcard" style="border-radius:6px;">
            <div class="bizcard-front">
              <div class="bizcard-logo-wrap">
                <div class="logo-h">
                  <svg viewBox="0 0 64 64" width="52" height="52">
                    <defs>
                      <linearGradient id="gTD-bc-main" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%"  stop-color="#8B6A2E"/>
                        <stop offset="35%" stop-color="#C9A25B"/>
                        <stop offset="55%" stop-color="#F0D89A"/>
                        <stop offset="75%" stop-color="#C9A25B"/>
                        <stop offset="100%" stop-color="#8B6A2E"/>
                      </linearGradient>
                    </defs>
                    <path d="M 32 8 A 12 12 0 0 1 32 32 A 12 12 0 0 0 32 56 A 24 24 0 0 1 32 8 Z" fill="#0D1B2A"/>
                    <path d="M 32 8 A 12 12 0 0 0 32 32 A 12 12 0 0 1 32 56 A 24 24 0 0 0 32 8 Z" fill="url(#gTD-bc-main)"/>
                    <circle cx="32" cy="20" r="3" fill="#F4F6F8"/>
                    <circle cx="32" cy="44" r="3" fill="#F4F6F8"/>
                  </svg>
                  <div class="wordmark">
                    <div class="wordmark-text" style="font-family:'Manrope',sans-serif; font-size:22px;">WerkGeluk</div>
                    <div class="wordmark-sub" style="font-size:7.5px;">RECRUITMENT</div>
                  </div>
                </div>
              </div>
              <div class="bizcard-contact">
                <div class="bizcard-name">Sanne van der Berg</div>
                <div>Senior Recruitment Consultant</div>
                <div class="bizcard-info-row">
                  <span>06 18 23 69 93</span>
                  <span>info@werkgeluk-recruitment.nl</span>
                </div>
              </div>
            </div>
          </div>
          <div class="bizcard" style="border-radius:6px;">
            <div class="bizcard-back">
              <div class="bizcard-glow" style="background:linear-gradient(135deg,#8B6A2E 0%,#C9A25B 35%,#F0D89A 55%,#C9A25B 75%,#8B6A2E 100%);"></div>
              <svg viewBox="0 0 64 64" width="84" height="84" style="position:relative;z-index:1;">
                <defs>
                  <linearGradient id="gTD-bk-main" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"  stop-color="#8B6A2E"/>
                    <stop offset="35%" stop-color="#C9A25B"/>
                    <stop offset="55%" stop-color="#F0D89A"/>
                    <stop offset="75%" stop-color="#C9A25B"/>
                    <stop offset="100%" stop-color="#8B6A2E"/>
                  </linearGradient>
                </defs>
                <path d="M 32 8 A 12 12 0 0 1 32 32 A 12 12 0 0 0 32 56 A 24 24 0 0 1 32 8 Z" fill="#F4F6F8"/>
                <path d="M 32 8 A 12 12 0 0 0 32 32 A 12 12 0 0 1 32 56 A 24 24 0 0 0 32 8 Z" fill="url(#gTD-bk-main)"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Letterhead + LinkedIn -->
    <div class="artboard-grid two">
      <div class="artboard">
        <div class="artboard-label">Briefhoofd</div>
        <div class="artboard-body" style="padding: 40px;">
          <div class="letterhead">
            <div class="letterhead-logo-wrap">
              <div class="logo-h">
                <svg viewBox="0 0 64 64" width="52" height="52">
                  <defs>
                    <linearGradient id="gTD-lh-main" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%"  stop-color="#8B6A2E"/>
                      <stop offset="35%" stop-color="#C9A25B"/>
                      <stop offset="55%" stop-color="#F0D89A"/>
                      <stop offset="75%" stop-color="#C9A25B"/>
                      <stop offset="100%" stop-color="#8B6A2E"/>
                    </linearGradient>
                  </defs>
                  <path d="M 32 8 A 12 12 0 0 1 32 32 A 12 12 0 0 0 32 56 A 24 24 0 0 1 32 8 Z" fill="#0D1B2A"/>
                  <path d="M 32 8 A 12 12 0 0 0 32 32 A 12 12 0 0 1 32 56 A 24 24 0 0 0 32 8 Z" fill="url(#gTD-lh-main)"/>
                  <circle cx="32" cy="20" r="3" fill="#F4F6F8"/>
                  <circle cx="32" cy="44" r="3" fill="#F4F6F8"/>
                </svg>
                <div class="wordmark">
                  <div class="wordmark-text" style="font-family:'Manrope',sans-serif; font-size:22px;">WerkGeluk</div>
                  <div class="wordmark-sub" style="font-size:7px;">RECRUITMENT</div>
                </div>
              </div>
            </div>
            <div class="letterhead-rule">
              <div class="letterhead-rule-navy"></div>
              <div class="letterhead-rule-gold"></div>
            </div>
            <div class="letterhead-address">
              <span>OTTO REUCHLINWEG · 3072 MD ROTTERDAM</span>
              <span>WERKGELUK-RECRUITMENT.NL</span>
            </div>
            <div class="letterhead-body">
              <div class="letterhead-date">Rotterdam, 30 april 2026</div>
              <div class="letterhead-salutation">Beste mevrouw De Vries,</div>
              <div class="letterhead-lines"></div>
              <div>Met vriendelijke groet,</div>
              <div style="font-weight:600; margin-top:16px;">WerkGeluk Recruitment</div>
            </div>
            <div class="letterhead-footer">
              <span>KVK 70841640</span>
              <span>BTW NL001178713B61</span>
              <span>06 18 23 69 93</span>
            </div>
          </div>
        </div>
      </div>

      <div class="artboard">
        <div class="artboard-label">LinkedIn banner</div>
        <div class="artboard-body" style="padding: 40px;">
          <div class="linkedin-banner">
            <div class="linkedin-left">
              <div class="linkedin-glow" style="background:linear-gradient(135deg,#8B6A2E 0%,#C9A25B 35%,#F0D89A 55%,#C9A25B 75%,#8B6A2E 100%);"></div>
              <svg viewBox="0 0 64 64" width="110" height="110" style="position:relative;z-index:1;">
                <defs>
                  <linearGradient id="gTD-li-main" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"  stop-color="#8B6A2E"/>
                    <stop offset="35%" stop-color="#C9A25B"/>
                    <stop offset="55%" stop-color="#F0D89A"/>
                    <stop offset="75%" stop-color="#C9A25B"/>
                    <stop offset="100%" stop-color="#8B6A2E"/>
                  </linearGradient>
                </defs>
                <path d="M 32 8 A 12 12 0 0 1 32 32 A 12 12 0 0 0 32 56 A 24 24 0 0 1 32 8 Z" fill="#F4F6F8"/>
                <path d="M 32 8 A 12 12 0 0 0 32 32 A 12 12 0 0 1 32 56 A 24 24 0 0 0 32 8 Z" fill="url(#gTD-li-main)"/>
              </svg>
            </div>
            <div class="linkedin-right">
              <div class="linkedin-headline">Jouw groei.<br>Onze passie.</div>
              <div class="linkedin-tags">
                <div class="linkedin-dot" style="background:#0D1B2A;"></div>
                <span class="linkedin-tag">WERVING &amp; SELECTIE</span>
                <div class="linkedin-dot" style="background:linear-gradient(135deg,#8B6A2E,#C9A25B,#F0D89A);"></div>
                <span class="linkedin-tag">ROTTERDAM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SPARK -->
  <section id="spark">
    <div class="section-header">
      <div class="section-title">06 — Spark</div>
      <div class="section-heading">Spark</div>
      <div class="section-sub">Twee strokes die samenkomen op één punt — ambitie en richting</div>
    </div>

    <div class="artboard" style="margin-bottom: 16px;">
      <div class="artboard-label">Horizontaal — wit + cloud</div>
      <div class="artboard-body plain">
        <div class="logo-split">
          <div class="logo-split-panel" style="background:#fff;">
            <div class="logo-h">
              <svg viewBox="0 0 64 64" width="60" height="60">
                <defs><linearGradient id="gSP-h1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs>
                <path d="M 14 50 L 32 14" stroke="#0D1B2A" stroke-width="7" stroke-linecap="round" fill="none"/>
                <path d="M 32 14 L 50 50" stroke="url(#gSP-h1)" stroke-width="7" stroke-linecap="round" fill="none"/>
              </svg>
              <div class="wordmark">
                <div class="wordmark-text" style="font-family:'Manrope',sans-serif;">WerkGeluk</div>
                <div class="wordmark-sub">RECRUITMENT</div>
              </div>
            </div>
          </div>
          <div class="logo-split-panel" style="background:#F4F6F8;">
            <div class="logo-h">
              <svg viewBox="0 0 64 64" width="60" height="60">
                <defs><linearGradient id="gSP-h2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs>
                <path d="M 14 50 L 32 14" stroke="#0D1B2A" stroke-width="7" stroke-linecap="round" fill="none"/>
                <path d="M 32 14 L 50 50" stroke="url(#gSP-h2)" stroke-width="7" stroke-linecap="round" fill="none"/>
              </svg>
              <div class="wordmark">
                <div class="wordmark-text" style="font-family:'Manrope',sans-serif;">WerkGeluk</div>
                <div class="wordmark-sub">RECRUITMENT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="artboard-grid three" style="margin-bottom: 16px;">
      <div class="artboard">
        <div class="artboard-label">Gestapeld</div>
        <div class="artboard-body white">
          <div class="logo-v">
            <svg viewBox="0 0 64 64" width="88" height="88">
              <defs><linearGradient id="gSP-s" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs>
              <path d="M 14 50 L 32 14" stroke="#0D1B2A" stroke-width="7" stroke-linecap="round" fill="none"/>
              <path d="M 32 14 L 50 50" stroke="url(#gSP-s)" stroke-width="7" stroke-linecap="round" fill="none"/>
            </svg>
            <div class="wordmark" style="text-align:center;">
              <div class="wordmark-text" style="font-family:'Manrope',sans-serif; font-size:26px;">WerkGeluk</div>
              <div class="wordmark-sub">RECRUITMENT</div>
            </div>
          </div>
        </div>
      </div>

      <div class="artboard">
        <div class="artboard-label">Favicon — getest tot 16px</div>
        <div class="artboard-body plain">
          <div class="favicon-set">
            <div class="favicon-label" style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#5A6470; letter-spacing:1.5px;">FAVICON / APP ICON</div>
            <div class="favicon-row">
              <div class="favicon-item">
                <div class="favicon-box" style="width:64px;height:64px;border-radius:14px;">
                  <svg viewBox="0 0 64 64" width="50" height="50"><defs><linearGradient id="gSP-f64" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs><path d="M 14 50 L 32 14" stroke="#0D1B2A" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M 32 14 L 50 50" stroke="url(#gSP-f64)" stroke-width="8" stroke-linecap="round" fill="none"/></svg>
                </div>
                <span class="favicon-label">64px</span>
              </div>
              <div class="favicon-item">
                <div class="favicon-box" style="width:32px;height:32px;border-radius:7px;">
                  <svg viewBox="0 0 64 64" width="25" height="25"><defs><linearGradient id="gSP-f32" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs><path d="M 14 50 L 32 14" stroke="#0D1B2A" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M 32 14 L 50 50" stroke="url(#gSP-f32)" stroke-width="8" stroke-linecap="round" fill="none"/></svg>
                </div>
                <span class="favicon-label">32px</span>
              </div>
              <div class="favicon-item">
                <div class="favicon-box" style="width:16px;height:16px;border-radius:3px;">
                  <svg viewBox="0 0 64 64" width="12" height="12"><defs><linearGradient id="gSP-f16" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs><path d="M 14 50 L 32 14" stroke="#0D1B2A" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M 32 14 L 50 50" stroke="url(#gSP-f16)" stroke-width="8" stroke-linecap="round" fill="none"/></svg>
                </div>
                <span class="favicon-label">16px</span>
              </div>
            </div>
            <div class="tab-mock">
              <div class="tab-inner">
                <svg viewBox="0 0 64 64" width="14" height="14"><defs><linearGradient id="gSP-tab" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs><path d="M 14 50 L 32 14" stroke="#0D1B2A" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M 32 14 L 50 50" stroke="url(#gSP-tab)" stroke-width="8" stroke-linecap="round" fill="none"/></svg>
                <span class="tab-title">WerkGeluk Recruitment</span>
                <span class="tab-close">×</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="artboard">
        <div class="artboard-label">Op donker</div>
        <div class="artboard-body navy">
          <div class="logo-h">
            <svg viewBox="0 0 64 64" width="60" height="60">
              <defs><linearGradient id="gSP-dk" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs>
              <path d="M 14 50 L 32 14" stroke="#F4F6F8" stroke-width="7" stroke-linecap="round" fill="none"/>
              <path d="M 32 14 L 50 50" stroke="url(#gSP-dk)" stroke-width="7" stroke-linecap="round" fill="none"/>
            </svg>
            <div class="wordmark">
              <div class="wordmark-text" style="font-family:'Manrope',sans-serif; color:#fff;">WerkGeluk</div>
              <div class="wordmark-sub" style="color:rgba(255,255,255,0.5);">RECRUITMENT</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="artboard" style="margin-bottom: 16px;">
      <div class="artboard-label">Visitekaartje</div>
      <div class="artboard-body plain">
        <div class="bizcard-wrap" style="justify-content:center;">
          <div class="bizcard" style="border-radius:6px;">
            <div class="bizcard-front">
              <div class="bizcard-logo-wrap">
                <div class="logo-h">
                  <svg viewBox="0 0 64 64" width="52" height="52"><defs><linearGradient id="gSP-bc" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs><path d="M 14 50 L 32 14" stroke="#0D1B2A" stroke-width="7" stroke-linecap="round" fill="none"/><path d="M 32 14 L 50 50" stroke="url(#gSP-bc)" stroke-width="7" stroke-linecap="round" fill="none"/></svg>
                  <div class="wordmark"><div class="wordmark-text" style="font-family:'Manrope',sans-serif; font-size:22px;">WerkGeluk</div><div class="wordmark-sub" style="font-size:7.5px;">RECRUITMENT</div></div>
                </div>
              </div>
              <div class="bizcard-contact"><div class="bizcard-name">Sanne van der Berg</div><div>Senior Recruitment Consultant</div><div class="bizcard-info-row"><span>06 18 23 69 93</span><span>info@werkgeluk-recruitment.nl</span></div></div>
            </div>
          </div>
          <div class="bizcard" style="border-radius:6px;">
            <div class="bizcard-back">
              <div class="bizcard-glow" style="background:linear-gradient(135deg,#8B6A2E 0%,#C9A25B 35%,#F0D89A 55%,#C9A25B 75%,#8B6A2E 100%);"></div>
              <svg viewBox="0 0 64 64" width="84" height="84" style="position:relative;z-index:1;"><defs><linearGradient id="gSP-bk" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs><path d="M 14 50 L 32 14" stroke="#F4F6F8" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M 32 14 L 50 50" stroke="url(#gSP-bk)" stroke-width="8" stroke-linecap="round" fill="none"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="artboard-grid two">
      <div class="artboard">
        <div class="artboard-label">Briefhoofd</div>
        <div class="artboard-body" style="padding:40px;">
          <div class="letterhead">
            <div class="letterhead-logo-wrap">
              <div class="logo-h">
                <svg viewBox="0 0 64 64" width="52" height="52"><defs><linearGradient id="gSP-lh" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs><path d="M 14 50 L 32 14" stroke="#0D1B2A" stroke-width="7" stroke-linecap="round" fill="none"/><path d="M 32 14 L 50 50" stroke="url(#gSP-lh)" stroke-width="7" stroke-linecap="round" fill="none"/></svg>
                <div class="wordmark"><div class="wordmark-text" style="font-family:'Manrope',sans-serif; font-size:22px;">WerkGeluk</div><div class="wordmark-sub" style="font-size:7px;">RECRUITMENT</div></div>
              </div>
            </div>
            <div class="letterhead-rule"><div class="letterhead-rule-navy"></div><div class="letterhead-rule-gold"></div></div>
            <div class="letterhead-address"><span>OTTO REUCHLINWEG · 3072 MD ROTTERDAM</span><span>WERKGELUK-RECRUITMENT.NL</span></div>
            <div class="letterhead-body"><div class="letterhead-date">Rotterdam, 30 april 2026</div><div class="letterhead-salutation">Beste mevrouw De Vries,</div><div class="letterhead-lines"></div><div>Met vriendelijke groet,</div><div style="font-weight:600; margin-top:16px;">WerkGeluk Recruitment</div></div>
            <div class="letterhead-footer"><span>KVK 70841640</span><span>BTW NL001178713B61</span><span>06 18 23 69 93</span></div>
          </div>
        </div>
      </div>
      <div class="artboard">
        <div class="artboard-label">LinkedIn banner</div>
        <div class="artboard-body" style="padding:40px;">
          <div class="linkedin-banner">
            <div class="linkedin-left">
              <div class="linkedin-glow" style="background:linear-gradient(135deg,#8B6A2E 0%,#C9A25B 35%,#F0D89A 55%,#C9A25B 75%,#8B6A2E 100%);"></div>
              <svg viewBox="0 0 64 64" width="110" height="110" style="position:relative;z-index:1;"><defs><linearGradient id="gSP-li" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs><path d="M 14 50 L 32 14" stroke="#F4F6F8" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M 32 14 L 50 50" stroke="url(#gSP-li)" stroke-width="8" stroke-linecap="round" fill="none"/></svg>
            </div>
            <div class="linkedin-right">
              <div class="linkedin-headline">Ambitie in beweging.<br>Talent op koers.</div>
              <div class="linkedin-tags"><div class="linkedin-dot" style="background:#0D1B2A;"></div><span class="linkedin-tag">WERVING &amp; SELECTIE</span><div class="linkedin-dot" style="background:linear-gradient(135deg,#8B6A2E,#C9A25B,#F0D89A);"></div><span class="linkedin-tag">ROTTERDAM</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- DUO -->
  <section id="duo">
    <div class="section-header">
      <div class="section-title">07 — Duo</div>
      <div class="section-heading">Duo</div>
      <div class="section-sub">Twee cirkels die overlappen — werkgever en kandidaat die elkaar vinden</div>
    </div>

    <div class="artboard" style="margin-bottom: 16px;">
      <div class="artboard-label">Horizontaal — wit + cloud</div>
      <div class="artboard-body plain">
        <div class="logo-split">
          <div class="logo-split-panel" style="background:#fff;">
            <div class="logo-h">
              <svg viewBox="0 0 64 64" width="60" height="60">
                <defs><linearGradient id="gDU-h1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs>
                <circle cx="24" cy="32" r="16" fill="#0D1B2A"/>
                <circle cx="40" cy="32" r="16" fill="url(#gDU-h1)"/>
              </svg>
              <div class="wordmark">
                <div class="wordmark-text" style="font-family:'DM Sans',sans-serif; font-weight:500;">WerkGeluk</div>
                <div class="wordmark-sub">RECRUITMENT</div>
              </div>
            </div>
          </div>
          <div class="logo-split-panel" style="background:#F4F6F8;">
            <div class="logo-h">
              <svg viewBox="0 0 64 64" width="60" height="60">
                <defs><linearGradient id="gDU-h2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs>
                <circle cx="24" cy="32" r="16" fill="#0D1B2A"/>
                <circle cx="40" cy="32" r="16" fill="url(#gDU-h2)"/>
              </svg>
              <div class="wordmark">
                <div class="wordmark-text" style="font-family:'DM Sans',sans-serif; font-weight:500;">WerkGeluk</div>
                <div class="wordmark-sub">RECRUITMENT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="artboard-grid three" style="margin-bottom: 16px;">
      <div class="artboard">
        <div class="artboard-label">Gestapeld</div>
        <div class="artboard-body white">
          <div class="logo-v">
            <svg viewBox="0 0 64 64" width="88" height="88">
              <defs><linearGradient id="gDU-s" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs>
              <circle cx="24" cy="32" r="16" fill="#0D1B2A"/>
              <circle cx="40" cy="32" r="16" fill="url(#gDU-s)"/>
            </svg>
            <div class="wordmark" style="text-align:center;">
              <div class="wordmark-text" style="font-family:'DM Sans',sans-serif; font-weight:500; font-size:26px;">WerkGeluk</div>
              <div class="wordmark-sub">RECRUITMENT</div>
            </div>
          </div>
        </div>
      </div>

      <div class="artboard">
        <div class="artboard-label">Favicon — getest tot 16px</div>
        <div class="artboard-body plain">
          <div class="favicon-set">
            <div class="favicon-label" style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#5A6470; letter-spacing:1.5px;">FAVICON / APP ICON</div>
            <div class="favicon-row">
              <div class="favicon-item">
                <div class="favicon-box" style="width:64px;height:64px;border-radius:14px;">
                  <svg viewBox="0 0 64 64" width="50" height="50"><defs><linearGradient id="gDU-f64" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs><circle cx="24" cy="32" r="16" fill="#0D1B2A"/><circle cx="40" cy="32" r="16" fill="url(#gDU-f64)"/></svg>
                </div>
                <span class="favicon-label">64px</span>
              </div>
              <div class="favicon-item">
                <div class="favicon-box" style="width:32px;height:32px;border-radius:7px;">
                  <svg viewBox="0 0 64 64" width="25" height="25"><defs><linearGradient id="gDU-f32" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs><circle cx="24" cy="32" r="16" fill="#0D1B2A"/><circle cx="40" cy="32" r="16" fill="url(#gDU-f32)"/></svg>
                </div>
                <span class="favicon-label">32px</span>
              </div>
              <div class="favicon-item">
                <div class="favicon-box" style="width:16px;height:16px;border-radius:3px;">
                  <svg viewBox="0 0 64 64" width="12" height="12"><defs><linearGradient id="gDU-f16" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs><circle cx="24" cy="32" r="16" fill="#0D1B2A"/><circle cx="40" cy="32" r="16" fill="url(#gDU-f16)"/></svg>
                </div>
                <span class="favicon-label">16px</span>
              </div>
            </div>
            <div class="tab-mock">
              <div class="tab-inner">
                <svg viewBox="0 0 64 64" width="14" height="14"><defs><linearGradient id="gDU-tab" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs><circle cx="24" cy="32" r="16" fill="#0D1B2A"/><circle cx="40" cy="32" r="16" fill="url(#gDU-tab)"/></svg>
                <span class="tab-title">WerkGeluk Recruitment</span>
                <span class="tab-close">×</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="artboard">
        <div class="artboard-label">Op donker</div>
        <div class="artboard-body navy">
          <div class="logo-h">
            <svg viewBox="0 0 64 64" width="60" height="60">
              <defs><linearGradient id="gDU-dk" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs>
              <circle cx="24" cy="32" r="16" fill="#F4F6F8"/>
              <circle cx="40" cy="32" r="16" fill="url(#gDU-dk)"/>
            </svg>
            <div class="wordmark">
              <div class="wordmark-text" style="font-family:'DM Sans',sans-serif; font-weight:500; color:#fff;">WerkGeluk</div>
              <div class="wordmark-sub" style="color:rgba(255,255,255,0.5);">RECRUITMENT</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="artboard" style="margin-bottom: 16px;">
      <div class="artboard-label">Visitekaartje</div>
      <div class="artboard-body plain">
        <div class="bizcard-wrap" style="justify-content:center;">
          <div class="bizcard" style="border-radius:6px;">
            <div class="bizcard-front">
              <div class="bizcard-logo-wrap">
                <div class="logo-h">
                  <svg viewBox="0 0 64 64" width="52" height="52"><defs><linearGradient id="gDU-bc" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs><circle cx="24" cy="32" r="16" fill="#0D1B2A"/><circle cx="40" cy="32" r="16" fill="url(#gDU-bc)"/></svg>
                  <div class="wordmark"><div class="wordmark-text" style="font-family:'DM Sans',sans-serif; font-weight:500; font-size:22px;">WerkGeluk</div><div class="wordmark-sub" style="font-size:7.5px;">RECRUITMENT</div></div>
                </div>
              </div>
              <div class="bizcard-contact"><div class="bizcard-name">Sanne van der Berg</div><div>Senior Recruitment Consultant</div><div class="bizcard-info-row"><span>06 18 23 69 93</span><span>info@werkgeluk-recruitment.nl</span></div></div>
            </div>
          </div>
          <div class="bizcard" style="border-radius:6px;">
            <div class="bizcard-back">
              <div class="bizcard-glow" style="background:linear-gradient(135deg,#8B6A2E 0%,#C9A25B 35%,#F0D89A 55%,#C9A25B 75%,#8B6A2E 100%);"></div>
              <svg viewBox="0 0 64 64" width="84" height="84" style="position:relative;z-index:1;"><defs><linearGradient id="gDU-bk" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs><circle cx="24" cy="32" r="16" fill="#F4F6F8"/><circle cx="40" cy="32" r="16" fill="url(#gDU-bk)"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="artboard-grid two">
      <div class="artboard">
        <div class="artboard-label">Briefhoofd</div>
        <div class="artboard-body" style="padding:40px;">
          <div class="letterhead">
            <div class="letterhead-logo-wrap">
              <div class="logo-h">
                <svg viewBox="0 0 64 64" width="52" height="52"><defs><linearGradient id="gDU-lh" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs><circle cx="24" cy="32" r="16" fill="#0D1B2A"/><circle cx="40" cy="32" r="16" fill="url(#gDU-lh)"/></svg>
                <div class="wordmark"><div class="wordmark-text" style="font-family:'DM Sans',sans-serif; font-weight:500; font-size:22px;">WerkGeluk</div><div class="wordmark-sub" style="font-size:7px;">RECRUITMENT</div></div>
              </div>
            </div>
            <div class="letterhead-rule"><div class="letterhead-rule-navy"></div><div class="letterhead-rule-gold"></div></div>
            <div class="letterhead-address"><span>OTTO REUCHLINWEG · 3072 MD ROTTERDAM</span><span>WERKGELUK-RECRUITMENT.NL</span></div>
            <div class="letterhead-body"><div class="letterhead-date">Rotterdam, 30 april 2026</div><div class="letterhead-salutation">Beste mevrouw De Vries,</div><div class="letterhead-lines"></div><div>Met vriendelijke groet,</div><div style="font-weight:600; margin-top:16px;">WerkGeluk Recruitment</div></div>
            <div class="letterhead-footer"><span>KVK 70841640</span><span>BTW NL001178713B61</span><span>06 18 23 69 93</span></div>
          </div>
        </div>
      </div>
      <div class="artboard">
        <div class="artboard-label">LinkedIn banner</div>
        <div class="artboard-body" style="padding:40px;">
          <div class="linkedin-banner">
            <div class="linkedin-left">
              <div class="linkedin-glow" style="background:linear-gradient(135deg,#8B6A2E 0%,#C9A25B 35%,#F0D89A 55%,#C9A25B 75%,#8B6A2E 100%);"></div>
              <svg viewBox="0 0 64 64" width="110" height="110" style="position:relative;z-index:1;"><defs><linearGradient id="gDU-li" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs><circle cx="24" cy="32" r="16" fill="#F4F6F8"/><circle cx="40" cy="32" r="16" fill="url(#gDU-li)"/></svg>
            </div>
            <div class="linkedin-right">
              <div class="linkedin-headline">Twee werelden.<br>Één perfecte match.</div>
              <div class="linkedin-tags"><div class="linkedin-dot" style="background:#0D1B2A;"></div><span class="linkedin-tag">WERVING &amp; SELECTIE</span><div class="linkedin-dot" style="background:linear-gradient(135deg,#8B6A2E,#C9A25B,#F0D89A);"></div><span class="linkedin-tag">ROTTERDAM</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- COMPASS -->
  <section id="compass">
    <div class="section-header">
      <div class="section-title">08 — Compass</div>
      <div class="section-heading">Compass</div>
      <div class="section-sub">Scherpe diamant gespitst in navy en goud — precisie en richting</div>
    </div>

    <div class="artboard" style="margin-bottom: 16px;">
      <div class="artboard-label">Horizontaal — wit + cloud</div>
      <div class="artboard-body plain">
        <div class="logo-split">
          <div class="logo-split-panel" style="background:#fff;">
            <div class="logo-h">
              <svg viewBox="0 0 64 64" width="60" height="60">
                <defs><linearGradient id="gCP-h1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs>
                <polygon points="32,8 8,32 32,56" fill="#0D1B2A"/>
                <polygon points="32,8 56,32 32,56" fill="url(#gCP-h1)"/>
              </svg>
              <div class="wordmark">
                <div class="wordmark-text" style="font-family:'Inter',sans-serif; font-weight:600; letter-spacing:-0.5px;">WerkGeluk</div>
                <div class="wordmark-sub">RECRUITMENT</div>
              </div>
            </div>
          </div>
          <div class="logo-split-panel" style="background:#F4F6F8;">
            <div class="logo-h">
              <svg viewBox="0 0 64 64" width="60" height="60">
                <defs><linearGradient id="gCP-h2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs>
                <polygon points="32,8 8,32 32,56" fill="#0D1B2A"/>
                <polygon points="32,8 56,32 32,56" fill="url(#gCP-h2)"/>
              </svg>
              <div class="wordmark">
                <div class="wordmark-text" style="font-family:'Inter',sans-serif; font-weight:600; letter-spacing:-0.5px;">WerkGeluk</div>
                <div class="wordmark-sub">RECRUITMENT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="artboard-grid three" style="margin-bottom: 16px;">
      <div class="artboard">
        <div class="artboard-label">Gestapeld</div>
        <div class="artboard-body white">
          <div class="logo-v">
            <svg viewBox="0 0 64 64" width="88" height="88">
              <defs><linearGradient id="gCP-s" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs>
              <polygon points="32,8 8,32 32,56" fill="#0D1B2A"/>
              <polygon points="32,8 56,32 32,56" fill="url(#gCP-s)"/>
            </svg>
            <div class="wordmark" style="text-align:center;">
              <div class="wordmark-text" style="font-family:'Inter',sans-serif; font-weight:600; letter-spacing:-0.5px; font-size:26px;">WerkGeluk</div>
              <div class="wordmark-sub">RECRUITMENT</div>
            </div>
          </div>
        </div>
      </div>

      <div class="artboard">
        <div class="artboard-label">Favicon — getest tot 16px</div>
        <div class="artboard-body plain">
          <div class="favicon-set">
            <div class="favicon-label" style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#5A6470; letter-spacing:1.5px;">FAVICON / APP ICON</div>
            <div class="favicon-row">
              <div class="favicon-item">
                <div class="favicon-box" style="width:64px;height:64px;border-radius:14px;">
                  <svg viewBox="0 0 64 64" width="50" height="50"><defs><linearGradient id="gCP-f64" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs><polygon points="32,8 8,32 32,56" fill="#0D1B2A"/><polygon points="32,8 56,32 32,56" fill="url(#gCP-f64)"/></svg>
                </div>
                <span class="favicon-label">64px</span>
              </div>
              <div class="favicon-item">
                <div class="favicon-box" style="width:32px;height:32px;border-radius:7px;">
                  <svg viewBox="0 0 64 64" width="25" height="25"><defs><linearGradient id="gCP-f32" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs><polygon points="32,8 8,32 32,56" fill="#0D1B2A"/><polygon points="32,8 56,32 32,56" fill="url(#gCP-f32)"/></svg>
                </div>
                <span class="favicon-label">32px</span>
              </div>
              <div class="favicon-item">
                <div class="favicon-box" style="width:16px;height:16px;border-radius:3px;">
                  <svg viewBox="0 0 64 64" width="12" height="12"><defs><linearGradient id="gCP-f16" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs><polygon points="32,8 8,32 32,56" fill="#0D1B2A"/><polygon points="32,8 56,32 32,56" fill="url(#gCP-f16)"/></svg>
                </div>
                <span class="favicon-label">16px</span>
              </div>
            </div>
            <div class="tab-mock">
              <div class="tab-inner">
                <svg viewBox="0 0 64 64" width="14" height="14"><defs><linearGradient id="gCP-tab" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs><polygon points="32,8 8,32 32,56" fill="#0D1B2A"/><polygon points="32,8 56,32 32,56" fill="url(#gCP-tab)"/></svg>
                <span class="tab-title">WerkGeluk Recruitment</span>
                <span class="tab-close">×</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="artboard">
        <div class="artboard-label">Op donker</div>
        <div class="artboard-body navy">
          <div class="logo-h">
            <svg viewBox="0 0 64 64" width="60" height="60">
              <defs><linearGradient id="gCP-dk" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs>
              <polygon points="32,8 8,32 32,56" fill="#F4F6F8"/>
              <polygon points="32,8 56,32 32,56" fill="url(#gCP-dk)"/>
            </svg>
            <div class="wordmark">
              <div class="wordmark-text" style="font-family:'Inter',sans-serif; font-weight:600; letter-spacing:-0.5px; color:#fff;">WerkGeluk</div>
              <div class="wordmark-sub" style="color:rgba(255,255,255,0.5);">RECRUITMENT</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="artboard" style="margin-bottom: 16px;">
      <div class="artboard-label">Visitekaartje</div>
      <div class="artboard-body plain">
        <div class="bizcard-wrap" style="justify-content:center;">
          <div class="bizcard" style="border-radius:6px;">
            <div class="bizcard-front">
              <div class="bizcard-logo-wrap">
                <div class="logo-h">
                  <svg viewBox="0 0 64 64" width="52" height="52"><defs><linearGradient id="gCP-bc" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs><polygon points="32,8 8,32 32,56" fill="#0D1B2A"/><polygon points="32,8 56,32 32,56" fill="url(#gCP-bc)"/></svg>
                  <div class="wordmark"><div class="wordmark-text" style="font-family:'Inter',sans-serif; font-weight:600; letter-spacing:-0.5px; font-size:22px;">WerkGeluk</div><div class="wordmark-sub" style="font-size:7.5px;">RECRUITMENT</div></div>
                </div>
              </div>
              <div class="bizcard-contact"><div class="bizcard-name">Sanne van der Berg</div><div>Senior Recruitment Consultant</div><div class="bizcard-info-row"><span>06 18 23 69 93</span><span>info@werkgeluk-recruitment.nl</span></div></div>
            </div>
          </div>
          <div class="bizcard" style="border-radius:6px;">
            <div class="bizcard-back">
              <div class="bizcard-glow" style="background:linear-gradient(135deg,#8B6A2E 0%,#C9A25B 35%,#F0D89A 55%,#C9A25B 75%,#8B6A2E 100%);"></div>
              <svg viewBox="0 0 64 64" width="84" height="84" style="position:relative;z-index:1;"><defs><linearGradient id="gCP-bk" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs><polygon points="32,8 8,32 32,56" fill="#F4F6F8"/><polygon points="32,8 56,32 32,56" fill="url(#gCP-bk)"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="artboard-grid two">
      <div class="artboard">
        <div class="artboard-label">Briefhoofd</div>
        <div class="artboard-body" style="padding:40px;">
          <div class="letterhead">
            <div class="letterhead-logo-wrap">
              <div class="logo-h">
                <svg viewBox="0 0 64 64" width="52" height="52"><defs><linearGradient id="gCP-lh" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs><polygon points="32,8 8,32 32,56" fill="#0D1B2A"/><polygon points="32,8 56,32 32,56" fill="url(#gCP-lh)"/></svg>
                <div class="wordmark"><div class="wordmark-text" style="font-family:'Inter',sans-serif; font-weight:600; letter-spacing:-0.5px; font-size:22px;">WerkGeluk</div><div class="wordmark-sub" style="font-size:7px;">RECRUITMENT</div></div>
              </div>
            </div>
            <div class="letterhead-rule"><div class="letterhead-rule-navy"></div><div class="letterhead-rule-gold"></div></div>
            <div class="letterhead-address"><span>OTTO REUCHLINWEG · 3072 MD ROTTERDAM</span><span>WERKGELUK-RECRUITMENT.NL</span></div>
            <div class="letterhead-body"><div class="letterhead-date">Rotterdam, 30 april 2026</div><div class="letterhead-salutation">Beste mevrouw De Vries,</div><div class="letterhead-lines"></div><div>Met vriendelijke groet,</div><div style="font-weight:600; margin-top:16px;">WerkGeluk Recruitment</div></div>
            <div class="letterhead-footer"><span>KVK 70841640</span><span>BTW NL001178713B61</span><span>06 18 23 69 93</span></div>
          </div>
        </div>
      </div>
      <div class="artboard">
        <div class="artboard-label">LinkedIn banner</div>
        <div class="artboard-body" style="padding:40px;">
          <div class="linkedin-banner">
            <div class="linkedin-left">
              <div class="linkedin-glow" style="background:linear-gradient(135deg,#8B6A2E 0%,#C9A25B 35%,#F0D89A 55%,#C9A25B 75%,#8B6A2E 100%);"></div>
              <svg viewBox="0 0 64 64" width="110" height="110" style="position:relative;z-index:1;"><defs><linearGradient id="gCP-li" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B6A2E"/><stop offset="35%" stop-color="#C9A25B"/><stop offset="55%" stop-color="#F0D89A"/><stop offset="75%" stop-color="#C9A25B"/><stop offset="100%" stop-color="#8B6A2E"/></linearGradient></defs><polygon points="32,8 8,32 32,56" fill="#F4F6F8"/><polygon points="32,8 56,32 32,56" fill="url(#gCP-li)"/></svg>
            </div>
            <div class="linkedin-right">
              <div class="linkedin-headline">Scherp in talent.<br>Precies de juiste richting.</div>
              <div class="linkedin-tags"><div class="linkedin-dot" style="background:#0D1B2A;"></div><span class="linkedin-tag">WERVING &amp; SELECTIE</span><div class="linkedin-dot" style="background:linear-gradient(135deg,#8B6A2E,#C9A25B,#F0D89A);"></div><span class="linkedin-tag">ROTTERDAM</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</main>`;

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
