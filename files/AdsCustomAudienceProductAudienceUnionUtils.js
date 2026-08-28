__d(
  "AdsCustomAudienceProductAudienceUnionUtils",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "FBLogger",
    "adsDeleteProductAudiencesAndCustomAudiencesFromFlexibleSpec",
    "adsGetProductAudienceSpecsFromCampaignRecord",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return (t = r("AdsCampaignRecordAccessors").targeting.flexible_spec.get(
        e,
      )) == null
        ? void 0
        : t
            .map(function (e) {
              var t = e.get("custom_audiences");
              return t == null
                ? null
                : t instanceof r("immutable").List
                  ? t
                  : r("FBLogger")("dpa").mustfix(
                      "expected custom_audiences in flexible spec to be Immutable.List",
                    );
            })
            .filter(Boolean)
            .first();
    }
    function s(t) {
      var n;
      return {
        productAudiences: r("adsGetProductAudienceSpecsFromCampaignRecord")(t),
        customAudiences:
          (n = r("AdsCampaignRecordAccessors").targeting.custom_audiences.get(
            t,
          )) != null
            ? n
            : e(t),
      };
    }
    var u = o("AdsMutators").chain(
      r("AdsCampaignRecordAccessors").targeting.product_audience_specs.delete,
      r("AdsCampaignRecordAccessors").targeting.custom_audiences.delete,
      r("adsDeleteProductAudiencesAndCustomAudiencesFromFlexibleSpec"),
    );
    function c(e) {
      var t = s(e),
        n = t.customAudiences,
        a = t.productAudiences;
      return a == null || n == null
        ? e
        : o("AdsMutators").chain(u, function (e) {
            var t = r("immutable").Map({
                product_audience_specs: a,
                custom_audiences: n,
              }),
              o = r("AdsCampaignRecordAccessors").targeting.flexible_spec.get(
                e,
              ),
              i = (o != null ? o : r("immutable").List()).unshift(t);
            return r("AdsCampaignRecordAccessors").targeting.flexible_spec.set(
              i,
              e,
            );
          })(e);
    }
    function d(e) {
      var t = s(e),
        n = t.customAudiences,
        a = t.productAudiences;
      return a == null || n == null
        ? e
        : o("AdsMutators").chain(
            u,
            r(
              "AdsCampaignRecordAccessors",
            ).targeting.product_audience_specs.set(a),
            r("AdsCampaignRecordAccessors").targeting.custom_audiences.set(n),
          )(e);
    }
    ((l.getCustomAudiencesFromFlexibleSpec = e),
      (l.transformToUnion = c),
      (l.transformToIntersection = d));
  },
  98,
);
