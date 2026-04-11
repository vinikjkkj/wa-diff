__d(
  "useWAWebBizAdEditDraftMutation.graphql",
  ["useWAWebBizAdEditDraftMutation_facebookRelayOperation"],
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
            name: "edit_ads_ctwa_draft",
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
          name: "useWAWebBizAdEditDraftMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "useWAWebBizAdEditDraftMutation",
          selections: t,
        },
        params: {
          id: n("useWAWebBizAdEditDraftMutation_facebookRelayOperation"),
          metadata: {},
          name: "useWAWebBizAdEditDraftMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
