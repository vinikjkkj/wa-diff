__d(
  "AdsCFCampaignGroupStoreInitialState",
  [
    "AdsAPICampaignGroupRecord",
    "AdsAPIObjectives",
    "AdsAudienceDirectConfig",
    "AdsBuyingTypes",
    "AdsCFConstants",
    "AdsLoadState_LEGACY",
    "LoadObject",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").Map({
        NEW_CAMPAIGN_GROUP_ID: r("LoadObject").withValue(
          new (r("AdsAPICampaignGroupRecord"))({
            buying_type: r("AdsAudienceDirectConfig").isDirectDealsUser
              ? r("AdsBuyingTypes").FIXED_PRICE
              : r("AdsBuyingTypes").AUCTION,
            campaign_group_status: "ACTIVE",
            id: o("AdsCFConstants").NEW_CAMPAIGN_GROUP_ID,
            isNew: !0,
            is_draft_only: !1,
            loadState: r("AdsLoadState_LEGACY").LOADED,
            name: null,
            objective: r("AdsAPIObjectives").NONE,
            updated_time: null,
            spend_cap: null,
            adlabels: null,
          }),
          { creatorModuleID: i.id },
        ),
      }),
      s = e;
    l.default = s;
  },
  98,
);
