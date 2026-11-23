__d(
  "WAWebUserPrefsStartupProfilePhoto",
  ["WATimeUtils", "WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = /^[0-9a-f]+$/i;
    function s() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.STARTUP_PROFILE_PHOTO,
      );
      return e == null ||
        typeof e != "object" ||
        typeof e.url != "string" ||
        typeof e.savedAtMs != "number"
        ? null
        : { url: e.url, savedAtMs: e.savedAtMs };
    }
    function u(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.STARTUP_PROFILE_PHOTO,
        e,
      );
    }
    function c() {
      var e = s();
      if (e == null) return null;
      var t = d(e.url);
      return t != null
        ? t > Date.now()
          ? e.url
          : null
        : Date.now() - e.savedAtMs < o("WATimeUtils").WEEK_MILLISECONDS
          ? e.url
          : null;
    }
    function d(t) {
      try {
        var n,
          r,
          a = new URL(t).searchParams.get("oe");
        return a == null || !e.test(a)
          ? null
          : (n =
                (r = o("WATimeUtils").convertHexToDate(a)) == null
                  ? void 0
                  : r.getTime()) != null
            ? n
            : null;
      } catch (e) {
        return null;
      }
    }
    ((l.getStartupProfilePhoto = s),
      (l.setStartupProfilePhoto = u),
      (l.getUsableStartupProfilePhotoUrl = c),
      (l.getUrlExpiryMs = d));
  },
  98,
);
