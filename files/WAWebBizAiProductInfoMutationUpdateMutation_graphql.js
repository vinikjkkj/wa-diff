__d(
  "WAWebBizAiProductInfoMutationUpdateMutation.graphql",
  ["WAWebBizAiProductInfoMutationUpdateMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "id" },
          { defaultValue: null, kind: "LocalArgument", name: "product_params" },
        ],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "id", variableName: "id" },
              {
                kind: "Variable",
                name: "product_params",
                variableName: "product_params",
              },
            ],
            concreteType: "XFBMaibaUpdateProductInfoKnowledgeResponsePayload",
            kind: "LinkedField",
            name: "xfb_maiba_update_product_info_knowledge",
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
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAiProductInfoMutationUpdateMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiProductInfoMutationUpdateMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizAiProductInfoMutationUpdateMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiProductInfoMutationUpdateMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
