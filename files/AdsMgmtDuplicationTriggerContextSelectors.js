__d(
  "AdsMgmtDuplicationTriggerContextSelectors",
  [
    "AdsObjectTypes",
    "AdsPECampaignLiveSelectors",
    "adsCreateSelector",
    "adsMgmtCampaignGroupSelectedIdsSelector",
    "adsMgmtCampaignSelectedIdsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("adsMgmtCampaignGroupSelectedIdsSelector")
            .adsMgmtCampaignGroupSelectedIdsSelector,
        ],
        function (t) {
          var e = t.length === 1 ? t[0] : null;
          return {
            selectedID: e,
            parentCampaignGroupID: null,
            adObjectType: r("AdsObjectTypes").CAMPAIGN_GROUP,
          };
        },
        {
          name:
            i.id + ".adsMgmtCampaignGroupDuplicationDialogEPContextSelector",
        },
      ),
      s = r("adsCreateSelector")(
        [
          o("adsMgmtCampaignSelectedIdsSelector")
            .adsMgmtCampaignSelectedIdsSelector,
          o("AdsPECampaignLiveSelectors").getByFieldsSelector,
        ],
        function (t, n) {
          var e = null,
            o = t.length === 1 ? t[0] : null;
          if (o != null) {
            var a = n(o, { campaign_id: null }).getValue();
            (a == null ? void 0 : a.campaign_id) != null && (e = a.campaign_id);
          }
          return {
            selectedID: o,
            parentCampaignGroupID: e,
            adObjectType: r("AdsObjectTypes").CAMPAIGN,
          };
        },
        { name: i.id + ".adsMgmtCampaignDuplicationDialogEPContextSelector" },
      );
    ((l.adsMgmtCampaignGroupDuplicationDialogEPContextSelector = e),
      (l.adsMgmtCampaignDuplicationDialogEPContextSelector = s));
  },
  98,
);
