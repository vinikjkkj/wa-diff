__d(
  "WAWebQuickPromotionActionMutation.graphql",
  ["WAWebQuickPromotionActionMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "WaQuickPromotionLogEventResponsePayload",
            kind: "LinkedField",
            name: "wa_quick_promotion_log_event",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "client_mutation_id",
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
          name: "WAWebQuickPromotionActionMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebQuickPromotionActionMutation",
          selections: t,
        },
        params: {
          id: n("WAWebQuickPromotionActionMutation_facebookRelayOperation"),
          metadata: {},
          name: "WAWebQuickPromotionActionMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
