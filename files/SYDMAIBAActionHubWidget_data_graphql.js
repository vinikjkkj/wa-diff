__d(
  "SYDMAIBAActionHubWidget_data.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "debugSignalKinds" },
      ],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "SYDMAIBAActionHubWidget_data",
      selections: [
        {
          kind: "CatchField",
          field: {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "debug_signal_kinds",
                variableName: "debugSignalKinds",
              },
            ],
            concreteType: "SYDMAIBAActionHubInsights",
            kind: "LinkedField",
            name: "syd_maiba_action_hub_insights",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "advertiser_goal_state",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "visible_signal_ids",
                storageKey: null,
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "SYDMAIBAActionHubCards_insights",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "SYDMAIBAActionHubWidget_goal",
              },
            ],
            storageKey: null,
          },
          to: "RESULT",
        },
      ],
      type: "AdAccount",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
