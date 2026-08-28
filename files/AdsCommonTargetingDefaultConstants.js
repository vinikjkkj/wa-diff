__d(
  "AdsCommonTargetingDefaultConstants",
  ["AdsValidationConsts"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {},
      s = "US",
      u = { geo_locations: e, excluded_geo_locations: e },
      c = [0];
    ((l.FALLBACK_COUNTRY = s),
      (l.GEO_FIELDS = u),
      (l.DEFAULT_MIN_AGE = r("AdsValidationConsts").minAgeDefault),
      (l.DEFAULT_MAX_AGE = r("AdsValidationConsts").maxAge),
      (l.DEFAULT_GENDER = c));
  },
  98,
);
