__d(
  "GeoPlace",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      return { coordinates: e, name: t, countryKey: n };
    }
    function l(e) {
      return (
        e.name ||
        "(" + e.coordinates.latitude + ", " + e.coordinates.longitude + ")"
      );
    }
    ((i.makeGeoPlace = e), (i.geoPlaceToString = l));
  },
  66,
);
