__d(
  "MAIBAGoalsOptimizationCard_account.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBAGoalsOptimizationCard_account",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "currency",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "TimezoneInfo",
          kind: "LinkedField",
          name: "timezone_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "timezone_id",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "AdAccount",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
