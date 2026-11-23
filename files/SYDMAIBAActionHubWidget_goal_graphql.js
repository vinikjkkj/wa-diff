__d(
  "SYDMAIBAActionHubWidget_goal.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "SYDMAIBAActionHubWidget_goal",
      selections: [
        {
          kind: "CatchField",
          field: {
            alias: null,
            args: null,
            concreteType: "SYDMAIBAActionHubAdvertiserGoal",
            kind: "LinkedField",
            name: "advertiser_goal",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "text",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "source",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          to: "NULL",
        },
      ],
      type: "SYDMAIBAActionHubInsights",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
