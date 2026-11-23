__d(
  "MAIBABudgetCard_campaignGroup.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBABudgetCard_campaignGroup",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "MAIBAIGBudgetCard_campaignGroup",
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "bid_strategy",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "buying_type",
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
          kind: "ScalarField",
          name: "lifetime_budget",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "objective",
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
      type: "AdCampaignGroupWithDraftData",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
