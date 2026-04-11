__d(
  "WAWebFrontendCountriesUtils",
  ["WAWebSyntheticCountryCode", "fbs"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = [].concat(e);
      return (
        t.unshift([
          String(
            o("WAWebSyntheticCountryCode").SyntheticCountryCode.NotApplicable,
          ),
          r("fbs")._(/*BTDS*/ "Not applicable"),
        ]),
        t
      );
    }
    function s(e, t) {
      var n = new Map(e),
        r = [];
      return (
        t.forEach(function (e) {
          var t = n.get(e);
          t != null && (r.push([e, t]), n.delete(e));
        }),
        [].concat(r, Array.from(n))
      );
    }
    function u(t, n) {
      var r = e(t);
      return n.length === 0 ? r : s(r, n);
    }
    ((l.unshiftNotApplicableToListOfCountries = e),
      (l.bubbleCountryOnListOfCountries = s),
      (l.formatCountriesOfOrigin = u));
  },
  226,
);
