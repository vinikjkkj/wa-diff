__d(
  "AdsLeadGenMCMDUtils",
  ["AdsPromotedObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.find(function (e) {
        var t = e.conversion_location;
        return t === r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL;
      });
      return t;
    }
    l.getDefaultFromFcMdAdsSource = e;
  },
  98,
);
