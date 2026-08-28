__d(
  "isOptimizationGoalMessageMarketingCompatible",
  ["AdsMessageMarketingCompatibleSettingsPluginResolver"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("AdsMessageMarketingCompatibleSettingsPluginResolver").resolve(
          e,
        ),
        n = t.getCampaignCompatibleSettingsForSecondaryFields();
      return n.optimizationGoal;
    }
    function s(t, n) {
      return e(t).includes(n);
    }
    ((l.getMessageMarketingCompatibleOptimizationGoals = e),
      (l.isOptimizationGoalMessageMarketingCompatible = s));
  },
  98,
);
