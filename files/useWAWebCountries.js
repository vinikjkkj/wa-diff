__d(
  "useWAWebCountries",
  [
    "WAWebCountriesUtils",
    "WAWebL10N",
    "react-compiler-runtime",
    "useWAWebAsync",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.filterType,
        a = r("useWAWebEventTargetValue")(r("WAWebL10N"), "locale_change", s),
        i;
      t[0] !== n
        ? ((i = function () {
            return o("WAWebCountriesUtils").getCountries({ filter: n });
          }),
          (t[0] = n),
          (t[1] = i))
        : (i = t[1]);
      var l;
      return (
        t[2] !== n || t[3] !== a
          ? ((l = [n, a]), (t[2] = n), (t[3] = a), (t[4] = l))
          : (l = t[4]),
        r("useWAWebAsync")(i, l)
      );
    }
    function s() {
      return r("WAWebL10N").getNormalizedLocale();
    }
    l.useCountries = e;
  },
  98,
);
