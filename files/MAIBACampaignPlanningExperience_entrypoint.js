__d(
  "MAIBACampaignPlanningExperience.entrypoint",
  [
    "JSResourceForInteraction",
    "MAIBACampaignPlanningLiveBudgetsQuery$Parameters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.accountID,
          n = t.adgroupIDs,
          o = t.campaignGroupIDs,
          a = t.campaignIDs,
          i = e != null && e !== "" && (o.length > 0 || a.length > 0);
        return {
          queries: i
            ? {
                liveBudgetsQueryRef: {
                  parameters: r(
                    "MAIBACampaignPlanningLiveBudgetsQuery$Parameters",
                  ),
                  variables: {
                    accountID: e,
                    adgroupIDs: n,
                    campaignGroupIDs: o,
                    campaignIDs: a,
                  },
                  options: { fetchPolicy: "store-and-network" },
                },
              }
            : {},
        };
      },
      root: r("JSResourceForInteraction")(
        "MAIBACampaignPlanningExperience.react",
      ).__setRef("MAIBACampaignPlanningExperience.entrypoint"),
    };
    l.default = e;
  },
  98,
);
