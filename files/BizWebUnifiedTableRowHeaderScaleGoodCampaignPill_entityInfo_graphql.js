__d(
  "BizWebUnifiedTableRowHeaderScaleGoodCampaignPill_entityInfo.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "BizWebUnifiedTableRowHeaderScaleGoodCampaignPill_entityInfo",
      selections: [
        {
          fragment: {
            kind: "InlineFragment",
            selections: [
              {
                kind: "Defer",
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "AdsStatusPillScaleGoodCampaign_entityInfo",
                  },
                ],
              },
            ],
            type: "TofuEntityInfo",
            abstractKey: "__isTofuEntityInfo",
          },
          kind: "AliasedInlineFragmentSpread",
          name: "scale_good_campaign_info",
        },
      ],
      type: "TofuEntityInfo",
      abstractKey: "__isTofuEntityInfo",
    };
    a.exports = e;
  },
  null,
);
