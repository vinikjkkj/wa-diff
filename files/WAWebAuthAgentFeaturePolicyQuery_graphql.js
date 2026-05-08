__d(
  "WAWebAuthAgentFeaturePolicyQuery.graphql",
  ["WAWebAuthAgentFeaturePolicyQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "AuthorizedAgentFeaturePolicy",
          kind: "LinkedField",
          name: "whatsapp_authorized_agent_feature_policy",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "disabled_features",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebAuthAgentFeaturePolicyQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebAuthAgentFeaturePolicyQuery",
          selections: e,
        },
        params: {
          id: n("WAWebAuthAgentFeaturePolicyQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebAuthAgentFeaturePolicyQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
