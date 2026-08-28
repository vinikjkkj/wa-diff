__d(
  "AdsMessagesMessengerCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsMessagesCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
    "CtxAdvertiserQeHbtExposureFalcoEvent",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsMessagesCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "messages/messenger",
          pivots: {
            objective: r("AdsAPIObjectives").MESSAGES,
            promotedObjectType: r("AdsPromotedObjectTypes").MESSENGER,
          },
          getDefaultConversionWindowLength: function (t, n) {
            if (
              t === r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION
            ) {
              var e = r("gkx")("8123") === !0,
                o = r("gkx")("11835");
              if (
                (o ||
                  r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
                    var t;
                    return {
                      condition: e ? "test" : "control",
                      feature_name: "ctm_po_law_defaulting",
                      hbt_name: "bizmsg_2026h1_ad_account_campaign_setup_hbt",
                      unit_id: String(
                        (t = n == null ? void 0 : n.account_id) != null
                          ? t
                          : "",
                      ),
                      unit_type: "ad_account_id",
                    };
                  }),
                e)
              )
                return 7;
            }
            return r(
              "AdsMessagesCampaignOptimizationPlugin",
            ).getDefaultConversionWindowLength(t, n);
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
