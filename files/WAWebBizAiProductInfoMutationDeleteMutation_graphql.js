__d(
  "WAWebBizAiProductInfoMutationDeleteMutation.graphql",
  ["WAWebBizAiProductInfoMutationDeleteMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "product_ids" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "product_ids",
                variableName: "product_ids",
              },
            ],
            concreteType: "XFBMAIBAProductInfoMultiDeleteResponse",
            kind: "LinkedField",
            name: "xfb_maiba_multi_delete_product_info_knowledge",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "product_id",
                storageKey: null,
              },
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
          name: "WAWebBizAiProductInfoMutationDeleteMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiProductInfoMutationDeleteMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizAiProductInfoMutationDeleteMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiProductInfoMutationDeleteMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
