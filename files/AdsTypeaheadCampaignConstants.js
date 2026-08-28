__d(
  "AdsTypeaheadCampaignConstants",
  [
    "AdsAPITargetFields",
    "AdsTypeaheadCampaignGroupConstants",
    "GraphAPIFieldUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      "billing_event",
      "id",
      "name",
      "optimization_goal",
      o("GraphAPIFieldUtils").getFieldWithSubfields("targeting", [
        r("AdsAPITargetFields").AGE_MIN,
      ]),
      o("GraphAPIFieldUtils").getFieldWithSubfields(
        "campaign",
        o("AdsTypeaheadCampaignGroupConstants").CAMPAIGN_GROUP_FIELDS,
      ),
      "has_active_aco_autoflow_ad",
      "has_active_da_aco_ad",
      "is_dynamic_creative_format_automation",
      "is_dynamic_creative_optimization",
      "asset_feed_id",
      "destination_type",
      o("GraphAPIFieldUtils").getFieldWithSubfields("promoted_object", [
        "omnichannel_object",
        "product_set_id",
      ]),
    ];
    l.CAMPAIGN_FIELDS = e;
  },
  98,
);
