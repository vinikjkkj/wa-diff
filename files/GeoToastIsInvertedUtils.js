__d(
  "GeoToastIsInvertedUtils",
  ["geoIPMGatingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("geoIPMGatingUtils").shouldShowNewBrandingColors();
    function s(t) {
      return e ? t === "error" : !0;
    }
    function u(t, n) {
      return e && t === "success" && n;
    }
    ((l.getGeoToastIsInverted = s), (l.getGeoToastIsDefaultInDarkMode = u));
  },
  98,
);
