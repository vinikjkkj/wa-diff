__d(
  "markMAIBAFabRecommendationToastsReadMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "MAIBAFabMarkRecommendationToastsReadPayload",
            kind: "LinkedField",
            name: "maiba_fab_mark_recommendation_toasts_read",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "MAIBAFabRecommendationNotification",
                kind: "LinkedField",
                name: "notifications",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "id",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "read_time",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "markMAIBAFabRecommendationToastsReadMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "markMAIBAFabRecommendationToastsReadMutation",
          selections: t,
        },
        params: {
          id: "29365025133149990",
          metadata: {},
          name: "markMAIBAFabRecommendationToastsReadMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
