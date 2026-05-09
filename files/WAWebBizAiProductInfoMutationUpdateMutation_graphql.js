__d(
  "WAWebBizAiProductInfoMutationUpdateMutation.graphql",
  ["WAWebBizAiProductInfoMutationUpdateMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "id" },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "media_options",
        },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "product_params",
        },
        o = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "id", variableName: "id" },
              {
                kind: "Variable",
                name: "media_options",
                variableName: "media_options",
              },
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
          argumentDefinitions: [e, t, r],
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAiProductInfoMutationUpdateMutation",
          selections: o,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, r, t],
          kind: "Operation",
          name: "WAWebBizAiProductInfoMutationUpdateMutation",
          selections: o,
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
