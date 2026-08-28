__d(
  "adsTargetingLocationGetMultiCityCustomLocationKey",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e.country != null
        ? e.country
        : e.country_group != null
          ? e.country_group
          : e.key != null
            ? e.key
            : "";
    }
    i.default = e;
  },
  66,
);
