__d(
  "adsGetSourceAdObjectIDsSelector",
  [
    "AdsPEAdgroupSelectors",
    "AdsPECampaignGroupSelectors",
    "AdsPECampaignSelectors",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "emptyFunction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        [],
        r("emptyFunction").thatReturnsArgument,
        { name: i.id + ".adObjectIDAndTypeSelector" },
      ),
      s = r("adsCreateSelector")(
        [
          e,
          o("AdsPEAdgroupSelectors").getCachedByFieldsSelector,
          o("AdsPECampaignSelectors").getCachedByFieldsSelector,
          o("AdsPECampaignGroupSelectors").getCachedByFieldsSelector,
        ],
        function (t, n, r, o) {
          var e = t.id,
            a = t.type;
          switch (a) {
            case "ad": {
              var i = n(e, { source_ad_id: null }).getValue();
              return i == null ? void 0 : i.source_ad_id;
            }
            case "ad_set": {
              var l = r(e, { source_adset_id: null }).getValue();
              return l == null ? void 0 : l.source_adset_id;
            }
            case "campaign": {
              var s = o(e, { source_campaign_id: null }).getValue();
              return s == null ? void 0 : s.source_campaign_id;
            }
            default:
              return null;
          }
        },
        { name: i.id + ".adsGetSourceAdObjectIDsSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
