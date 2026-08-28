__d(
  "adsTargetingLocationGetCustomLocationKey",
  [
    "adsTargetingLocationGetKeyFromCoordinates",
    "adsTargetingLocationGetMultiCityCustomLocationKey",
    "adsTargetingLocationIsMultiCityCustomLocation",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (r("adsTargetingLocationIsMultiCityCustomLocation")(e))
        return r("adsTargetingLocationGetMultiCityCustomLocationKey")(e);
      if (!isNaN(e.latitude) && !isNaN(e.longitude)) {
        var t = r("adsTargetingLocationGetKeyFromCoordinates")(
          e.latitude,
          e.longitude,
        );
        return e.address_string ? e.address_string + " " + t : t;
      } else return e.address_string;
    }
    l.default = e;
  },
  98,
);
