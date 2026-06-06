__d(
  "WAWebAuraRingtoneDownloader",
  [
    "WALogger",
    "WAWebAuraGating",
    "WAWebAuraRingtonePrefs",
    "WAWebWaPlusBenefitJourneyLogger",
    "WAWebWamEnumWpbujBenefitType",
    "WAWebWamEnumWpbujSource",
    "WAWebWamEnumWpbujSurface",
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
    async function D() {
      try {
        var e = await caches.open(E),
          t = await e.match(R);
        return t != null ? await t.arrayBuffer() : null;
      } catch (e) {
        return null;
      }
    }
    async function x(e) {
      e === void 0 && (e = E);
      try {
        await caches.delete(e);
      } catch (e) {}
    }
    async function $() {
      var t = await D();
      if (t != null)
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[aura_ringtones] loaded ringtone zip from cache, size: ",
                "",
              ])),
            t.byteLength,
          ),
          t
        );
      var n;
      try {
        n = await window.fetch(R);
      } catch (e) {
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[aura_ringtones] Error fetching ringtone zip",
              ])),
          ),
          null
        );
      }
      if (!n.ok)
        return (
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[aura_ringtones] Failed to fetch ringtone zip: ",
                "",
              ])),
            n.status,
          ),
          null
        );
      try {
        var r = await caches.open(E);
        await r.put(R, n.clone());
      } catch (e) {
        o("WALogger").WARN(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[aura_ringtones] Failed to write ringtone zip to cache: ",
              "",
            ])),
          String(e),
        );
      }
      try {
        return await n.arrayBuffer();
      } catch (e) {
        return (
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[aura_ringtones] Failed to read ringtone zip body: ",
                "",
              ])),
            String(e),
          ),
          null
        );
      }
    }
    function P(e) {
      var t = e.split(/[/\\]/);
      return t[t.length - 1];
    }
    function N(e) {
      var t = e.lastIndexOf(".");
      return t > 0 ? e.substring(0, t) : e;
    }
    var M = new Map([
      [".m4r", "audio/mp4"],
      [".m4a", "audio/mp4"],
      [".ogg", "audio/ogg"],
      [".mp3", "audio/mpeg"],
    ]);
    function w(e) {
      for (var t of M) {
        var n = t[0],
          r = t[1];
        if (e.endsWith(n)) return r;
      }
      return null;
    }
    function A(e, t, n) {
      var r = P(e),
        a = N(r),
        i = r.toLowerCase();
      o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
            "[aura_ringtones] Processing ",
            ": ",
            " bytes",
          ])),
        e,
        t.length,
      );
      var l = k.get(i);
      l != null && URL.revokeObjectURL(l.blobUrl);
      var s = new Blob([t], { type: n }),
        u = URL.createObjectURL(s);
      (k.set(i, { displayName: a, id: i, blobUrl: u }),
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[aura_ringtones] Cached ringtone: ",
              "",
            ])),
          i,
        ));
    }
    function F(e) {
      var t = new Uint8Array(e),
        n = o("fflate").unzipSync(t),
        r = Object.keys(n);
      o("WALogger").LOG(
        _ ||
          (_ = babelHelpers.taggedTemplateLiteralLoose([
            "[aura_ringtones] Extracted ",
            " files from zip",
          ])),
        r.length,
      );
      for (var a of r)
        if (!(a.startsWith("__MACOSX") || a.endsWith("/"))) {
          var i = w(a);
          i != null && A(a, n[a], i);
        }
    }
    async function O() {
      if (!r("WAWebAuraGating").isRingtonesBenefitActive()) {
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
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
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "[aura_ringtones] skip download - v",
              " loaded",
            ])),
          L,
        );
        return;
      }
      I = (async function () {
        var e = new (o(
            "WAWebWaPlusBenefitJourneyLogger",
          ).WaPlusBenefitJourneyLogger)({
            benefitType: o("WAWebWamEnumWpbujBenefitType").WPBUJ_BENEFIT_TYPE
              .RINGTONES,
            surface: o("WAWebWamEnumWpbujSurface").WPBUJ_SURFACE.RINGTONE,
            source: o("WAWebWamEnumWpbujSource").WPBUJ_SOURCE.APP_WIDE,
          }),
          t = "aura-ringtones-v" + String(L),
          r = o("WAWebAuraRingtonePrefs").getStoredPackVersion();
        (r != null && r !== String(L) && (U(), await x("aura-ringtones-v" + r)),
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "[aura_ringtones] Starting premium ringtone download",
              ])),
          ));
        var a = await $();
        if (a == null) {
          (o("WALogger").WARN(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[aura_ringtones] Failed to download ringtone zip",
              ])),
          ),
            e.logDownload({
              success: !1,
              actionTarget: t,
              errorMessage: "fetch_failed",
            }));
          return;
        }
        o("WALogger").LOG(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "[aura_ringtones] Got zip file, size: ",
              "",
            ])),
          a.byteLength,
        );
        try {
          (F(a),
            n("cr:19900") == null || n("cr:19900").cacheRingtonesUrlToNative(R),
            (T = !0),
            o("WAWebAuraRingtonePrefs").savePackVersion(L),
            o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "[aura_ringtones] download done, cached ",
                  "",
                ])),
              k.size,
            ),
            e.logDownload({ success: !0, actionTarget: t }));
        } catch (n) {
          (o("WALogger").WARN(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "[aura_ringtones] Error extracting ringtone zip: ",
                "",
              ])),
            String(n),
          ),
            await x(),
            e.logDownload({
              success: !1,
              actionTarget: t,
              errorMessage: "unzip_failed",
            }));
        }
      })();
      try {
        await I;
      } finally {
        I = null;
      }
    }
    function B() {
      return Array.from(k.values());
    }
    function W(e) {
      var t,
        n = k.get(e.toLowerCase());
      return (t = n == null ? void 0 : n.blobUrl) != null ? t : null;
    }
    function q() {
      return T;
    }
    function U() {
      for (var e of k.values()) URL.revokeObjectURL(e.blobUrl);
      (k.clear(),
        (T = !1),
        o("WAWebAuraRingtonePrefs").clearPackVersion(),
        x(),
        o("WALogger").LOG(
          S ||
            (S = babelHelpers.taggedTemplateLiteralLoose([
              "[aura_ringtones] Ringtone cache cleared",
            ])),
        ));
    }
    ((l.RINGTONE_PACK_VERSION = L),
      (l.downloadPremiumRingtones = O),
      (l.getDownloadedRingtones = B),
      (l.getRingtoneBlobUrl = W),
      (l.arePremiumRingtonesDownloaded = q),
      (l.clearRingtoneCache = U));
  },
  98,
);
