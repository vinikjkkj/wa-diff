__d(
  "adsCampaignGroupMetaCheckoutExperienceConfigAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          is_campaign_enabled: n.basicFieldAccessorFactory(
            e,
            t,
            "is_campaign_enabled",
          ),
          is_terms_signed: n.basicFieldAccessorFactory(e, t, "is_terms_signed"),
          is_user_manually_toggle_mc_off: n.basicFieldAccessorFactory(
            e,
            t,
            "is_user_manually_toggle_mc_off",
          ),
          merchant_type: n.basicFieldAccessorFactory(e, t, "merchant_type"),
        },
      );
    }
    l.default = e;
  },
  98,
);
