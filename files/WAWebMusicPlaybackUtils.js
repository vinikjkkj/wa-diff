__d(
  "WAWebMusicPlaybackUtils",
  [
    "WAWebABProps",
    "WAWebMusicEligibleCountriesProvider",
    "WAWebMusicParsingUtils",
    "WAWebMusicViewerCountry",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("WAWebMusicViewerCountry").getMusicViewerCountry();
      return n != null && t.has(n) && !e.has(n);
    }
    function s(e) {
      var t = e.countryBlocklist,
        n = e.isAvailableForConsumption,
        r = o("WAWebMusicViewerCountry").getMusicViewerCountry();
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
      var e = o("WAWebMusicViewerCountry").getMusicViewerCountry();
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
      (l.getUserCountryCodeForSNAPL = u));
  },
  98,
);
