__d(
  "WAWebAndroidTabletVisitId",
  ["WALogger", "WATimeUtils", "WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 30 * o("WATimeUtils").DAY_MILLISECONDS,
      d = null;
    function m() {
      return (d == null && (d = { id: _() }), d.id);
    }
    function p() {
      var e, t;
      return (e = (t = d) == null ? void 0 : t.id) != null
        ? e
        : f(o("WATimeUtils").unixTimeMs());
    }
    function _() {
      var e = o("WATimeUtils").unixTimeMs(),
        t = f(e);
      if (t != null) return t;
      var n = h();
      return (n != null && g(n, e), n);
    }
    function f(t) {
      var n;
      try {
        n = r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").KEYS.WA_WEB_ANDROID_TABLET_VISIT_ID,
        );
      } catch (t) {
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[android-tablet-interstitial] visit ID not read",
              ])),
          ),
          null
        );
      }
      if (n == null || typeof n != "object" || Array.isArray(n)) return null;
      var a = n,
        i = a.createdAtMs,
        l = a.id;
      if (
        typeof l != "number" ||
        !Number.isSafeInteger(l) ||
        l <= 0 ||
        typeof i != "number"
      )
        return null;
      var s = t - i;
      return s >= 0 && s < c ? l : null;
    }
    function g(e, t) {
      try {
        r("WAWebUserPrefsStore").set(
          o("WAWebUserPrefsKeys").KEYS.WA_WEB_ANDROID_TABLET_VISIT_ID,
          { id: e, createdAtMs: t },
          { shouldWriteToIdb: !1 },
        );
      } catch (e) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[android-tablet-interstitial] visit ID not saved",
            ])),
        );
      }
    }
    function h() {
      try {
        var e = new Uint32Array(2);
        return (
          self.crypto.getRandomValues(e),
          Math.max(1, (e[1] % Math.pow(2, 21)) * Math.pow(2, 32) + e[0])
        );
      } catch (e) {
        return (
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[android-tablet-interstitial] visit ID not created",
              ])),
          ),
          null
        );
      }
    }
    ((l.getOrCreateAndroidTabletVisitId = m),
      (l.getExistingAndroidTabletVisitId = p));
  },
  98,
);
