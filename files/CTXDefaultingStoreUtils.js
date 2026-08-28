__d(
  "CTXDefaultingStoreUtils",
  [
    "AdCampaignDestination",
    "AdsAPIBidStrategies",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsPageStore",
    "enumUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t, n, a) {
      var i, l;
      if (
        a != null &&
        (a === r("AdsAPIBidStrategies").COST_CAP ||
          a === r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS)
      )
        return null;
      var s =
        n != null
          ? (i = r("AdsPageStore").getLoadObject(n)) == null
            ? void 0
            : i.getValue()
          : null;
      if (s == null || e == null || t == null) return null;
      var u = (l = s.ctx_default_optimization_goal_configs) != null ? l : [],
        c = u.find(function (n) {
          return (
            e ===
              o("enumUtils").coerceNullable(
                n.objective,
                r("AdsAPIObjectives"),
              ) &&
            t ===
              o("enumUtils").coerceNullable(
                n.destination_type,
                r("AdCampaignDestination"),
              )
          );
        });
      if (c == null) return null;
      var d = o("enumUtils").coerceNullable(
        c.optimization_goal,
        r("AdsAPIOptimizationGoals"),
      );
      return d == null ? null : [d, c.defaulting_source];
    }
    var c = [
        (e = r("AdCampaignDestination")).MESSENGER,
        e.WHATSAPP,
        e.INSTAGRAM_DIRECT,
        e.MESSAGING_INSTAGRAM_DIRECT_MESSENGER,
      ],
      d = [
        (s = r("AdsAPIOptimizationGoals")).MESSAGING_PURCHASE_CONVERSION,
        s.VALUE,
        s.LEAD_GENERATION,
        s.MESSAGING_DEEP_CONVERSATION_AND_FOLLOW,
      ];
    function m(e, t) {
      return d.includes(e) && t != null && c.includes(t);
    }
    ((l.getDefaultOptimizationGoalByObjectiveAndPageID = u),
      (l.isMaybeCTXDFOCampaign = m));
  },
  98,
);
