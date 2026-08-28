__d(
  "AdsCallToActionGeoUtils",
  ["AdsGetDirectionsActionLink", "GeoCoordinates", "GeoPlace"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s(e) != null;
    }
    function s(e) {
      var t = e.match(r("AdsGetDirectionsActionLink").URI_REGEX);
      if (t != null) {
        var n = +t[1],
          o = +t[2];
        if (!isNaN(n) && !isNaN(o) && Math.abs(n) <= 90 && Math.abs(o) <= 180)
          return new (r("GeoPlace"))(new (r("GeoCoordinates"))(n, o), t[3]);
      }
    }
    function u(e) {
      return (
        r("AdsGetDirectionsActionLink").LINK_START +
        (e.coordinates.latitude + "," + e.coordinates.longitude) +
        (e.name != null ? ',"' + e.name + '"' : "")
      );
    }
    function c(e) {
      return (
        r("AdsGetDirectionsActionLink").LINK_START +
        (e.latitude + "," + e.longitude) +
        (',"' + e.full_address + '"')
      );
    }
    ((l.isValidGeoLink = e),
      (l.parseGeoLink = s),
      (l.makeGeoLink = u),
      (l.makeBulkEditGeoLink = c));
  },
  98,
);
