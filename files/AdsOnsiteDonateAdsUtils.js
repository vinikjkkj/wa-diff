__d(
  "AdsOnsiteDonateAdsUtils",
  ["AdsPromotedObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "page_create_fundraiser",
      s = "page_direct_donation";
    function u(e) {
      return e === r("AdsPromotedObjectTypes").DONATION;
    }
    function c(t) {
      return t.indexOf(e) >= 0 || t.indexOf(s) >= 0;
    }
    ((l.isOnsiteDonateAdPromotedObjectType = u),
      (l.isFundraiserDonateOrCreateCustomAudienceRule = c));
  },
  98,
);
