__d(
  "WAWebMusicUserPrefs",
  [
    "WATimeUtils",
    "WAWebAsISOCountryCode",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("WATimeUtils").unixTime();
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").UserPrefs.MusicEligibleCountries,
        { countries: Array.from(e), epoch: t },
      );
    }
    function s() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").UserPrefs.MusicEligibleCountries,
      );
      if (e == null || typeof e != "object") return null;
      var t = e.countries,
        n = e.epoch;
      return !Array.isArray(t) ||
        typeof n != "number" ||
        o("WATimeUtils").unixTime() - n > o("WATimeUtils").WEEK_SECONDS
        ? null
        : t.reduce(function (e, t) {
            if (typeof t != "string") return e;
            var n = o("WAWebAsISOCountryCode").asISOCountryCode(t);
            return (n != null && e.add(n), e);
          }, new Set());
    }
    function u(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").UserPrefs.MusicLastClipDurationMs,
        e,
      );
    }
    function c() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").UserPrefs.MusicLastClipDurationMs,
      );
      return typeof e == "number" ? e : null;
    }
    function d(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").UserPrefs.MusicLastSelectedStyle,
        e,
      );
    }
    function m() {
      var e,
        t = r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").UserPrefs.MusicLastSelectedStyle,
        );
      return typeof t == "number" &&
        (e = o(
          "WAWebProtobufsE2E.pb",
        ).Message$MusicMessage$MusicMessageStyle.cast(t)) != null
        ? e
        : null;
    }
    ((l.setMusicEligibleCountries = e),
      (l.getMusicEligibleCountries = s),
      (l.saveMusicLastClipDurationMs = u),
      (l.getMusicLastClipDurationMs = c),
      (l.saveMusicLastSelectedStyle = d),
      (l.getMusicLastSelectedStyle = m));
  },
  98,
);
