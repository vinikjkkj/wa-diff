__d(
  "useWAWebBizAdCreateDraftMutation.graphql",
  ["useWAWebBizAdCreateDraftMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "AdsLWIDraftWrapper",
            kind: "LinkedField",
            name: "create_ads_ctwa_draft",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
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
          name: "useWAWebBizAdCreateDraftMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "useWAWebBizAdCreateDraftMutation",
          selections: t,
        },
        params: {
          id: n("useWAWebBizAdCreateDraftMutation_facebookRelayOperation"),
          metadata: {},
          name: "useWAWebBizAdCreateDraftMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
