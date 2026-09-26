__d(
  "CometComposerSproutPromotionActionsEndPromotionMutation.graphql",
  [
    "CometComposerSproutPromotionActionsEndPromotionMutation_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "SproutPromotionEndResponsePayload",
            kind: "LinkedField",
            name: "sprout_promotion_end",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
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
          name: "CometComposerSproutPromotionActionsEndPromotionMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "CometComposerSproutPromotionActionsEndPromotionMutation",
          selections: t,
        },
        params: {
          id: n(
            "CometComposerSproutPromotionActionsEndPromotionMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "CometComposerSproutPromotionActionsEndPromotionMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
