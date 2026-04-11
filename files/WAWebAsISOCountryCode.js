__d(
  "WAWebAsISOCountryCode",
  ["WAWebCountriesNativeCountryNames"],
  function (t, n, r, o, a, i, l) {
    var e = new Map(
      Object.entries(r("WAWebCountriesNativeCountryNames")).map(function (e) {
        var t = e[0];
        return [t, t];
      }),
    );
    function s(t) {
      return e.get(t);
    }
    l.asISOCountryCode = s;
  },
  98,
);
