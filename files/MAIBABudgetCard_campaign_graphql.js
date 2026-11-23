__d(
  "MAIBABudgetCard_campaign.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBABudgetCard_campaign",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "MAIBAIGBudgetCard_campaign",
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "bid_amount",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "daily_budget",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "FrequencyControlSpec",
          kind: "LinkedField",
          name: "frequency_control_specs",
          plural: !0,
          selections: [
            {
              alias: "interval_days",
              args: null,
              kind: "ScalarField",
              name: "interval_days_non_null",
              storageKey: null,
            },
            {
              alias: "max_frequency",
              args: null,
              kind: "ScalarField",
              name: "max_frequency_non_null",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "lifetime_budget",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "optimization_goal",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "start_time",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "stop_time",
          storageKey: null,
        },
      ],
      type: "AdCampaignWithDraftData",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
