__d(
  "useWAWebBizAdDeleteDraftMutation.graphql",
  ["useWAWebBizAdDeleteDraftMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            kind: "ScalarField",
            name: "delete_ads_ctwa_draft",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "useWAWebBizAdDeleteDraftMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "useWAWebBizAdDeleteDraftMutation",
          selections: t,
        },
        params: {
          id: n("useWAWebBizAdDeleteDraftMutation_facebookRelayOperation"),
          metadata: {},
          name: "useWAWebBizAdDeleteDraftMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
