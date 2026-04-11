__d(
  "WAWebFeatureFlagCollection",
  ["WAWebBaseCollection", "WAWebFeatureFlagModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.initializeFromCache = function (t) {
          this.add(
            t.map(function (e) {
              return babelHelpers.extends({}, e);
            }),
            { merge: !0 },
          );
        }),
        (n.replaceWith = function (t) {
          this.set(t, { add: !0, remove: !0, merge: !0 });
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebFeatureFlagModel").FeatureFlag;
    var s = new e();
    l.FeatureFlagCollection = s;
  },
  98,
);
