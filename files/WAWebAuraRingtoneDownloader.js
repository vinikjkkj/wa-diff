__d(
  "WAWebAuraRingtoneDownloader",
  [
    "WALogger",
    "WAWebAuraGating",
    "WAWebAuraRingtonePrefs",
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
      C,
      b,
      v,
      S,
      R =
        "https://static.whatsapp.net/wa/static/downloadable?category=ringtone&id=aura-ringtones",
      L = 1,
      E = "aura-ringtones-v" + String(L),
      k = new Map(),
      I = null,
      T = !1;
    function D() {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield caches.open(E),
              t = yield e.match(R);
            return t != null ? yield t.arrayBuffer() : null;
          } catch (e) {
            return null;
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e === void 0 && (e = E);
          try {
            yield caches.delete(e);
          } catch (e) {}
        })),
        P.apply(this, arguments)
      );
    }
    function N() {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield D();
          if (e != null)
            return (
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[aura_ringtones] loaded ringtone zip from cache, size: ",
                    "",
                  ])),
                e.byteLength,
              ),
              e
            );
          var t;
          try {
            t = yield window.fetch(R);
          } catch (e) {
            return (
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[aura_ringtones] Error fetching ringtone zip",
                  ])),
              ),
              null
            );
          }
          if (!t.ok)
            return (
              o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[aura_ringtones] Failed to fetch ringtone zip: ",
                    "",
                  ])),
                t.status,
              ),
              null
            );
          try {
            var n = yield caches.open(E);
            yield n.put(R, t.clone());
          } catch (e) {
            o("WALogger").WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[aura_ringtones] Failed to write ringtone zip to cache: ",
                  "",
                ])),
              String(e),
            );
          }
          try {
            return yield t.arrayBuffer();
          } catch (e) {
            return (
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[aura_ringtones] Failed to read ringtone zip body: ",
                    "",
                  ])),
                String(e),
              ),
              null
            );
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      var t = e.split(/[/\\]/);
      return t[t.length - 1];
    }
    function A(e) {
      var t = e.lastIndexOf(".");
      return t > 0 ? e.substring(0, t) : e;
    }
    var F = new Map([
      [".m4r", "audio/mp4"],
      [".m4a", "audio/mp4"],
      [".ogg", "audio/ogg"],
      [".mp3", "audio/mpeg"],
    ]);
    function O(e) {
      for (var t of F) {
        var n = t[0],
          r = t[1];
        if (e.endsWith(n)) return r;
      }
      return null;
    }
    function B(t, n, r) {
      var a = w(t),
        i = A(a),
        l = a.toLowerCase();
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[aura_ringtones] Processing ",
            ": ",
            " bytes",
          ])),
        t,
        n.length,
      );
      var u = k.get(l);
      u != null && URL.revokeObjectURL(u.blobUrl);
      var c = new Blob([n], { type: r }),
        d = URL.createObjectURL(c);
      (k.set(l, { displayName: i, id: l, blobUrl: d }),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[aura_ringtones] Cached ringtone: ",
              "",
            ])),
          l,
        ));
    }
    function W(e) {
      var t = new Uint8Array(e),
        n = o("fflate").unzipSync(t),
        r = Object.keys(n);
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[aura_ringtones] Extracted ",
            " files from zip",
          ])),
        r.length,
      );
      for (var a of r)
        if (!(a.startsWith("__MACOSX") || a.endsWith("/"))) {
          var i = O(a);
          i != null && B(a, n[a], i);
        }
    }
    function q() {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!r("WAWebAuraGating").isRingtonesBenefitActive()) {
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[aura_ringtones] skip download - not premium",
                ])),
            );
            return;
          }
          if (I != null) return I;
          if (
            T &&
            o("WAWebAuraRingtonePrefs").getStoredPackVersion() === String(L)
          ) {
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[aura_ringtones] skip download - v",
                  " loaded",
                ])),
              L,
            );
            return;
          }
          I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = o("WAWebAuraRingtonePrefs").getStoredPackVersion();
            (e != null &&
              e !== String(L) &&
              (z(), yield $("aura-ringtones-v" + e)),
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[aura_ringtones] Starting premium ringtone download",
                  ])),
              ));
            var t = yield N();
            if (t == null) {
              o("WALogger").WARN(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[aura_ringtones] Failed to download ringtone zip",
                  ])),
              );
              return;
            }
            o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "[aura_ringtones] Got zip file, size: ",
                  "",
                ])),
              t.byteLength,
            );
            try {
              (W(t),
                n("cr:19900") == null ||
                  n("cr:19900").cacheRingtonesUrlToNative(R),
                (T = !0),
                o("WAWebAuraRingtonePrefs").savePackVersion(L),
                o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "[aura_ringtones] download done, cached ",
                      "",
                    ])),
                  k.size,
                ));
            } catch (e) {
              (o("WALogger").WARN(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[aura_ringtones] Error extracting ringtone zip: ",
                    "",
                  ])),
                String(e),
              ),
                yield $());
            }
          })();
          try {
            yield I;
          } finally {
            I = null;
          }
        })),
        U.apply(this, arguments)
      );
    }
    function V() {
      return Array.from(k.values());
    }
    function H(e) {
      var t,
        n = k.get(e.toLowerCase());
      return (t = n == null ? void 0 : n.blobUrl) != null ? t : null;
    }
    function G() {
      return T;
    }
    function z() {
      for (var e of k.values()) URL.revokeObjectURL(e.blobUrl);
      (k.clear(),
        (T = !1),
        o("WAWebAuraRingtonePrefs").clearPackVersion(),
        $(),
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[aura_ringtones] Ringtone cache cleared",
            ])),
        ));
    }
    ((l.RINGTONE_PACK_VERSION = L),
      (l.downloadPremiumRingtones = q),
      (l.getDownloadedRingtones = V),
      (l.getRingtoneBlobUrl = H),
      (l.arePremiumRingtonesDownloaded = G),
      (l.clearRingtoneCache = z));
  },
  98,
);
