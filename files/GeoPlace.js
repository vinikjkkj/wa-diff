__d(
  "GeoPlace",
  ["GeoPlaceRecord"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n, r) {
        return e.call(this, { coordinates: t, name: n, countryKey: r }) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.toString = function () {
          return (
            this.name ||
            "(" +
              this.coordinates.latitude +
              ", " +
              this.coordinates.longitude +
              ")"
          );
        }),
        t
      );
    })(r("GeoPlaceRecord"));
    l.default = e;
  },
  98,
);
