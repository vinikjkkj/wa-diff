__d(
  "WAWebAuraRingtoneDownloader",
  [
    "WALogger",
    "WAWebAuraGating",
    "asyncToGeneratorRuntime",
    "cr:19900",
    "fflate",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C =
        "https://static.whatsapp.net/wa/static/downloadable?category=ringtone&id=aura-ringtones",
      b = new Map(),
      v = null,
      S = !1;
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield window.fetch(C);
            if (!e.ok)
              return (
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[aura_ringtones] Failed to fetch ringtone zip: ",
                      "",
                    ])),
                  e.status,
                ),
                null
              );
            var t = yield e.arrayBuffer();
            return t;
          } catch (e) {
            return (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[aura_ringtones] Error fetching ringtone zip",
                  ])),
              ),
              null
            );
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      var t = e.split(/[/\\]/);
      return t[t.length - 1];
    }
    function k(e) {
      var t = e.lastIndexOf(".");
      return t > 0 ? e.substring(0, t) : e;
    }
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!r("WAWebAuraGating").isRingtonesBenefitActive()) {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[aura_ringtones] skip download - not premium",
                ])),
            );
            return;
          }
          if (v != null) return v;
          if (!S) {
            v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[aura_ringtones] Starting premium ringtone download",
                  ])),
              );
              var e = yield R();
              if (e == null) {
                o("WALogger").WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[aura_ringtones] Failed to download ringtone zip",
                    ])),
                );
                return;
              }
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[aura_ringtones] Downloaded zip file, size: ",
                    "",
                  ])),
                e.byteLength,
              );
              try {
                var t = new Uint8Array(e),
                  r = o("fflate").unzipSync(t),
                  a = Object.keys(r);
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[aura_ringtones] Extracted ",
                      " files from zip",
                    ])),
                  a.length,
                );
                for (var i of a)
                  if (
                    !(i.startsWith("__MACOSX") || i.endsWith("/")) &&
                    !(
                      !i.endsWith(".m4r") &&
                      !i.endsWith(".ogg") &&
                      !i.endsWith(".mp3") &&
                      !i.endsWith(".m4a")
                    )
                  ) {
                    var l = E(i),
                      s = k(l),
                      u = l.toLowerCase(),
                      c = r[i];
                    o("WALogger").LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "[aura_ringtones] Processing ",
                          ": ",
                          " bytes",
                        ])),
                      i,
                      c.length,
                    );
                    var v = "audio/mp4";
                    i.endsWith(".ogg")
                      ? (v = "audio/ogg")
                      : i.endsWith(".mp3") && (v = "audio/mpeg");
                    var L = b.get(u);
                    L != null && URL.revokeObjectURL(L.blobUrl);
                    var I = new Blob([c], { type: v }),
                      T = URL.createObjectURL(I),
                      D = { displayName: s, id: u, blobUrl: T };
                    (b.set(u, D),
                      o("WALogger").LOG(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
                            "[aura_ringtones] Cached ringtone: ",
                            "",
                          ])),
                        u,
                      ));
                  }
                (n("cr:19900") == null ||
                  n("cr:19900").cacheRingtonesUrlToNative(C),
                  (S = !0),
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[aura_ringtones] download done, cached ",
                        "",
                      ])),
                    b.size,
                  ));
              } catch (e) {
                o("WALogger").WARN(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[aura_ringtones] Error extracting ringtone zip: ",
                      "",
                    ])),
                  String(e),
                );
              }
            })();
            try {
              yield v;
            } finally {
              v = null;
            }
          }
        })),
        T.apply(this, arguments)
      );
    }
    function D() {
      return Array.from(b.values());
    }
    function x(e) {
      var t,
        n = b.get(e.toLowerCase());
      return (t = n == null ? void 0 : n.blobUrl) != null ? t : null;
    }
    function $() {
      return S;
    }
    function P() {
      for (var t of b.values()) URL.revokeObjectURL(t.blobUrl);
      (b.clear(),
        (S = !1),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[aura_ringtones] Ringtone cache cleared",
            ])),
        ));
    }
    ((l.downloadPremiumRingtones = I),
      (l.getDownloadedRingtones = D),
      (l.getRingtoneBlobUrl = x),
      (l.arePremiumRingtonesDownloaded = $),
      (l.clearRingtoneCache = P));
  },
  98,
);
