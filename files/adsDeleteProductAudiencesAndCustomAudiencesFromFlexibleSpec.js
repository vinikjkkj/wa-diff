__d(
  "adsDeleteProductAudiencesAndCustomAudiencesFromFlexibleSpec",
  ["AdsAPITargetFields", "AdsCampaignRecordAccessors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("AdsCampaignRecordAccessors").targeting.flexible_spec.get(e);
      if (t == null) return e;
      var n = t
        .map(function (e) {
          return e
            .delete(r("AdsAPITargetFields").PRODUCT_AUDIENCE_SPECS)
            .delete(r("AdsAPITargetFields").CUSTOM_AUDIENCES);
        })
        .filter(function (e) {
          return !e.isEmpty();
        });
      return r("AdsCampaignRecordAccessors").targeting.flexible_spec.set(n)(e);
    }
    l.default = e;
  },
  98,
);
