__d(
  "adsIsIGLoginUtils",
  ["AdsAccountUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("AdsAccountUtils").hasCapability(
        e,
        "ENABLE_IG_LOGIN_ADS_MANAGER",
      );
    }
    l.getIsIGLogin = e;
  },
  98,
);
