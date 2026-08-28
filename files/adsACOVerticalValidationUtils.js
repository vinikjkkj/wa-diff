__d(
  "adsACOVerticalValidationUtils",
  ["CatalogVertical", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [(e = r("CatalogVertical")).COMMERCE],
      u = [
        e.COMMERCE,
        e.HOTELS,
        e.FLIGHTS,
        e.DESTINATIONS,
        e.VEHICLES,
        e.VEHICLE_OFFERS,
        e.AUTOMOTIVE_MODELS,
        e.HOME_LISTINGS,
      ];
    function c() {
      return r("gkx")("3544");
    }
    function d(e) {
      return e == null ? !1 : s.includes(e) ? !0 : u.includes(e) && c();
    }
    function m(e) {
      return e === r("CatalogVertical").COMMERCE;
    }
    ((l.isGatedVerticalsEnabled = c),
      (l.isValidCatalogVerticalForDAACO = d),
      (l.isCommerceVertical = m));
  },
  98,
);
