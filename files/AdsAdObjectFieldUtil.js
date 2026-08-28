__d(
  "AdsAdObjectFieldUtil",
  [
    "AdsAdgroupLiveStoreDataFields.experimental",
    "AdsCampaignGroupLiveFields",
    "AdsCampaignLiveFields",
    "AdsDynamicAdgroupDataManagerFieldsMap.experimental",
    "AdsDynamicCampaignDataManagerFieldsMap",
    "AdsDynamicCampaignGroupDataManagerFieldsMapV2.experimental",
    "AdsInsightsQueryFieldUtil",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        o("AdsInsightsQueryFieldUtil").toAPIFieldsMap(
          r("AdsAdgroupLiveStoreDataFields.experimental").cheapFields,
          !0,
        ),
        r("AdsDynamicAdgroupDataManagerFieldsMap.experimental").fieldsMap,
      ),
      s = babelHelpers.extends(
        {},
        o("AdsInsightsQueryFieldUtil").toAPIFieldsMap(
          r("AdsCampaignGroupLiveFields").cheapFields,
        ),
        r("AdsDynamicCampaignGroupDataManagerFieldsMapV2.experimental")
          .fieldsMap,
      ),
      u = babelHelpers.extends(
        {},
        o("AdsInsightsQueryFieldUtil").toAPIFieldsMap(
          r("AdsCampaignLiveFields").cheapFields,
        ),
        r("AdsDynamicCampaignDataManagerFieldsMap").fieldsMap,
      );
    ((l.AdgroupFields = e),
      (l.CampaignGroupFields = s),
      (l.CampaignFields = u));
  },
  98,
);
