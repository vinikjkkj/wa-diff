__d(
  "WAWebPremiumMessageCollection",
  ["WAWebBaseCollection", "WAWebPremiumMessageModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebPremiumMessageModel").PremiumMessage;
    var s = new e();
    l.PremiumMessageCollection = s;
  },
  98,
);
