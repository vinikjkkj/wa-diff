__d(
  "GeoCoordinates",
  ["GeoCoordinatesRecord", "nearlyEqualNumbers"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        return e.call(this, { latitude: t, longitude: n }) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.nearlyEquals = function (t) {
          return (
            r("nearlyEqualNumbers")(this.latitude, t.latitude) &&
            r("nearlyEqualNumbers")(this.longitude, t.longitude)
          );
        }),
        t
      );
    })(r("GeoCoordinatesRecord"));
    l.default = e;
  },
  98,
);
