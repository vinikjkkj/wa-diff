__d(
  "useWAWebCountries",
  [
    "WAWebCountriesUtils",
    "WAWebL10N",
    "useWAWebAsync",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.filterType,
        n = r("useWAWebEventTargetValue")(
          r("WAWebL10N"),
          "locale_change",
          function () {
            return r("WAWebL10N").getNormalizedLocale();
          },
        );
      return r("useWAWebAsync")(
        function () {
          return o("WAWebCountriesUtils").getCountries({ filter: t });
        },
        [t, n],
      );
    }
    l.useCountries = e;
  },
  98,
);
