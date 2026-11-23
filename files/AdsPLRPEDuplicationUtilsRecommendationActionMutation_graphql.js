__d(
  "AdsPLRPEDuplicationUtilsRecommendationActionMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "actionType" },
        t = { defaultValue: null, kind: "LocalArgument", name: "adAccountID" },
        n = { defaultValue: null, kind: "LocalArgument", name: "category" },
        r = { defaultValue: null, kind: "LocalArgument", name: "entityID" },
        o = { defaultValue: null, kind: "LocalArgument", name: "productSetID" },
        a = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "action_type",
                variableName: "actionType",
              },
              {
                kind: "Variable",
                name: "ad_account_id",
                variableName: "adAccountID",
              },
              { kind: "Variable", name: "category", variableName: "category" },
              { kind: "Variable", name: "entity_id", variableName: "entityID" },
              {
                kind: "Variable",
                name: "product_set_id",
                variableName: "productSetID",
              },
            ],
            concreteType: "PlrRecommendationActionResponsePayload",
            kind: "LinkedField",
            name: "plr_recommendation_action",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, n, r, o],
          kind: "Fragment",
          metadata: null,
          name: "AdsPLRPEDuplicationUtilsRecommendationActionMutation",
          selections: a,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, o, r, n, e],
          kind: "Operation",
          name: "AdsPLRPEDuplicationUtilsRecommendationActionMutation",
          selections: a,
        },
        params: {
          id: "28324754843793876",
          metadata: {},
          name: "AdsPLRPEDuplicationUtilsRecommendationActionMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
