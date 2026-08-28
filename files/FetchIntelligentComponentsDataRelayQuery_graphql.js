__d(
  "FetchIntelligentComponentsDataRelayQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "context" },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "enable_for_test_users",
        },
        n = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "enable_stages",
        },
        r = { defaultValue: null, kind: "LocalArgument", name: "inject_tip" },
        o = { defaultValue: null, kind: "LocalArgument", name: "messages_ids" },
        a = { defaultValue: null, kind: "LocalArgument", name: "pathname" },
        i = { defaultValue: null, kind: "LocalArgument", name: "placement" },
        l = {
          alias: null,
          args: [
            { kind: "Variable", name: "context", variableName: "context" },
            {
              kind: "Variable",
              name: "enable_for_test_users",
              variableName: "enable_for_test_users",
            },
            {
              kind: "Variable",
              name: "enable_stages",
              variableName: "enable_stages",
            },
            {
              kind: "Variable",
              name: "inject_tip",
              variableName: "inject_tip",
            },
            {
              kind: "Variable",
              name: "messages_ids",
              variableName: "messages_ids",
            },
            { kind: "Variable", name: "pathname", variableName: "pathname" },
            { kind: "Variable", name: "placement", variableName: "placement" },
          ],
          concreteType: "XFBXAdsInProductGuidanceAsyncController",
          kind: "LinkedField",
          name: "xfb_andromeda_XAdsInProductGuidanceAsyncController",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "json",
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, n, r, o, a, i],
          kind: "Fragment",
          metadata: null,
          name: "FetchIntelligentComponentsDataRelayQuery",
          selections: [{ kind: "CatchField", field: l, to: "RESULT" }],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, i, r, n, t, o, a],
          kind: "Operation",
          name: "FetchIntelligentComponentsDataRelayQuery",
          selections: [l],
        },
        params: {
          id: "23913431554915374",
          metadata: {},
          name: "FetchIntelligentComponentsDataRelayQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
