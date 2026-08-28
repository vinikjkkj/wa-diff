__d(
  "adsCampaignGroupAdvertiserIntentAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          campaign_goal: n.basicFieldAccessorFactory(e, t, "campaign_goal"),
          channels: n.basicListFieldAccessorFactory(e, t, "channels"),
          is_auto_setup_delivery: n.basicFieldAccessorFactory(
            e,
            t,
            "is_auto_setup_delivery",
          ),
          marketing_kpis: n.basicListFieldAccessorFactory(
            e,
            t,
            "marketing_kpis",
          ),
          performance_goal: n.basicFieldAccessorFactory(
            e,
            t,
            "performance_goal",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
