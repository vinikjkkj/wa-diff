__d(
  "AdsMessagesInstagramCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsMessagesCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsMessagesCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "messages/instagram",
          pivots: {
            objective: r("AdsAPIObjectives").MESSAGES,
            promotedObjectType: r("AdsPromotedObjectTypes").INSTAGRAM,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
