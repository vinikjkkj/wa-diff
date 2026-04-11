__d(
  "WAWebMusicPlaybackUtils",
  ["WAWebAsISOCountryCode", "WAWebL10NCountryCodes", "WAWebUserPrefsMeUser"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = s();
      return n != null && t.has(n) && !e.has(n);
    }
    function s() {
      var e = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      return e == null
        ? null
        : o("WAWebAsISOCountryCode").asISOCountryCode(
            o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e.user),
          );
    }
    function u() {
      var e = s();
      if (e == null) return null;
      switch (e) {
        case "AC":
          return "SH";
        default:
          return e;
      }
    }
    ((l.canPlaybackMusic = e),
      (l.getUserCountryCode = s),
      (l.getUserCountryCodeForSNAPL = u));
  },
  98,
);
