__d(
  "WAWebMusicPlaybackUtils",
  [
    "WAWebABProps",
    "WAWebAsISOCountryCode",
    "WAWebL10NCountryCodes",
    "WAWebMusicEligibleCountriesProvider",
    "WAWebMusicParsingUtils",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = u();
      return n != null && t.has(n) && !e.has(n);
    }
    function s(e) {
      var t = e.countryBlocklist,
        n = e.isAvailableForConsumption,
        r = u();
      return !o("WAWebABProps").getABPropConfigValue(
        "music_on_chats_geogating_enabled",
      ) ||
        r == null ||
        !o("WAWebMusicEligibleCountriesProvider")
          .provideMusicEligibleCountries()
          .has(r)
        ? "country"
        : n != null
          ? n
            ? null
            : "song"
          : t != null && o("WAWebMusicParsingUtils").mapToCountryCode(t).has(r)
            ? "song"
            : null;
    }
    function u() {
      var e = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      return e == null
        ? null
        : o("WAWebAsISOCountryCode").asISOCountryCode(
            o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e.user),
          );
    }
    function c() {
      var e = u();
      if (e == null) return null;
      switch (e) {
        case "AC":
          return "SH";
        default:
          return e;
      }
    }
    ((l.canPlaybackMusic = e),
      (l.getMusicMessageUnplayableReason = s),
      (l.getUserCountryCode = u),
      (l.getUserCountryCodeForSNAPL = c));
  },
  98,
);
