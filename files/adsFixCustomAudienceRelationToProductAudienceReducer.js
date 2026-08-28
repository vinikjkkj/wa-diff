__d(
  "adsFixCustomAudienceRelationToProductAudienceReducer",
  [
    "AdsCampaignRecordAccessors",
    "AdsCustomAudienceProductAudienceUnionUtils",
    "AdsMutators",
    "CustomAudienceRelationToProductAudience",
    "adsDeleteProductAudiencesAndCustomAudiencesFromFlexibleSpec",
    "adsGetProductAudienceSpecsFromCampaignRecord",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a,
        i,
        l = r("adsGetProductAudienceSpecsFromCampaignRecord")(e);
      if (l == null || t !== r("CustomAudienceRelationToProductAudience").UNION)
        return e;
      var s =
          (a = r("AdsCampaignRecordAccessors").targeting.custom_audiences.get(
            e,
          )) != null
            ? a
            : o(
                "AdsCustomAudienceProductAudienceUnionUtils",
              ).getCustomAudiencesFromFlexibleSpec(e),
        u =
          (i = r("AdsCampaignRecordAccessors").targeting.custom_audiences.get(
            n,
          )) != null
            ? i
            : o(
                "AdsCustomAudienceProductAudienceUnionUtils",
              ).getCustomAudiencesFromFlexibleSpec(n),
        c = s != null ? s.size : 0,
        d = u != null ? u.size : 0;
      return d === 0 && c > 0
        ? o("AdsCustomAudienceProductAudienceUnionUtils").transformToUnion(e)
        : d > 0 && c === 0
          ? o("AdsMutators").chain(function (e) {
              return r(
                "AdsCampaignRecordAccessors",
              ).targeting.product_audience_specs.set(l, e);
            }, r("adsDeleteProductAudiencesAndCustomAudiencesFromFlexibleSpec"))(
              e,
            )
          : e;
    }
    l.default = e;
  },
  98,
);
