__d(
  "GeoCoordinates",
  ["GeoCoordinatesRecord", "nearlyEqualNumbers"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        return e.call(this, { latitude: t, longitude: n }) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var r = t.prototype;
      return (
        (r.nearlyEquals = function (t) {
          return (
            n("nearlyEqualNumbers")(this.latitude, t.latitude) &&
            n("nearlyEqualNumbers")(this.longitude, t.longitude)
          );
        }),
        t
      );
    })(n("GeoCoordinatesRecord"));
    a.exports = e;
  },
  null,
);
