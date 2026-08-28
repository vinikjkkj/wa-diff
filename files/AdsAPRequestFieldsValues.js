__d(
  "AdsAPRequestFieldsValues",
  [
    "AdsAccountDataLoaderFields",
    "AdsAdObjectFieldUtil",
    "AdsAdgroupFieldSetMap",
    "AdsAdgroupLiveStoreDataFields.experimental",
    "AdsCampaignGroupLiveFields",
    "AdsInsightsQueryFieldUtil",
    "AdsPageFields",
    "AdsRuleFields",
    "filterValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsInsightsQueryFieldUtil").toAPIFields(
        r("AdsAdgroupLiveStoreDataFields.experimental").cheapFields,
      ),
      s = Object.keys(r("AdsAdgroupFieldSetMap").cheap_tier1).map(function (e) {
        return o("AdsAdObjectFieldUtil").AdgroupFields[e];
      }),
      u = r("filterValues")(e, s),
      c = babelHelpers.extends(
        {
          AdsAccountDataLoaderFields: r("AdsAccountDataLoaderFields").fields,
          "AdsCampaignGroupLiveStoreDataFields.cheapFields": o(
            "AdsInsightsQueryFieldUtil",
          ).toAPIFields(r("AdsCampaignGroupLiveFields").cheapFields),
          "AdsAdgroupLiveStoreDataFields.cheapFields": e,
          "AdsAdgroupFieldSetMap.cheap_tier1": s,
          "DIFF_AdsAdgroupFieldSetMap.cheap_tier1": u,
          "AdsPageFields.getPromotablePageTypeFields":
            o("AdsPageFields").getPromotablePageTypeFields(),
        },
        o("AdsPageFields").getPromotablePageTypeFields().length !==
          o("AdsPageFields").getPromotablePageFields().length
          ? {
              "AdsPageFields.getPromotablePageFields":
                o("AdsPageFields").getPromotablePageFields(),
            }
          : {},
        { AdsRuleFields: r("AdsRuleFields") },
      );
    for (var d of Object.values(c)) d.sort();
    var m = c;
    l.default = m;
  },
  98,
);
