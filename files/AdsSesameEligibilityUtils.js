__d(
  "AdsSesameEligibilityUtils",
  ["AdsUEditorMessagingDestinationUtils", "BrandedContentAdsUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("BrandedContentAdsUtils").isPartnershipAdPost(
        e,
        (e == null ? void 0 : e.postSource) === "sponsored_post",
      );
    }
    function s(e, t) {
      return (
        t === void 0 && (t = !1),
        !t && o("AdsUEditorMessagingDestinationUtils").isWebsiteAdDestination(e)
      );
    }
    ((l.isSesamePartnershipAdPost = e), (l.isSesameExcludedDestination = s));
  },
  98,
);
