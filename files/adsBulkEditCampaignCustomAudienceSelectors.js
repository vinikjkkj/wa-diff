__d(
  "adsBulkEditCampaignCustomAudienceSelectors",
  [
    "AdsCampaignGoalExpressionUtils",
    "AdsTargetingFilterGoalBasedAudiencesUtils",
    "adsCreateSelector",
    "adsUEditorCampaignTargetingEditorSelector",
    "adsUEditorSelectedCampaignsSelector",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        r("adsUEditorSelectedCampaignsSelector"),
        r("adsUEditorCampaignTargetingEditorSelector"),
      ],
      function (t, n) {
        var e = n.customProperties,
          a = n.extraData,
          i = n.targetingBulkSpec,
          l = n.visibility,
          s =
            r("gkx")("26276") &&
            o("AdsCampaignGoalExpressionUtils").shouldUseGoalExpression({
              isHECEnabled: !1,
            })
              ? o(
                  "AdsTargetingFilterGoalBasedAudiencesUtils",
                ).getGoalAudienceIDsFromCampaigns(t)
              : null;
        return {
          selectedCampaigns: t,
          extraData: babelHelpers.extends({}, a, { bulkTargetingSpec: i }),
          goalAudienceIDs: s,
          visibility: l,
          customProperties: e,
        };
      },
      { name: i.id + ".adsBulkEditCampaignCustomAudienceRowSelector" },
    );
    l.adsBulkEditCampaignCustomAudienceRowSelector = e;
  },
  98,
);
