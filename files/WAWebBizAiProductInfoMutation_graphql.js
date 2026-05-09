__d(
  "WAWebBizAiProductInfoMutation.graphql",
  ["WAWebBizAiProductInfoMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "input" },
          { defaultValue: null, kind: "LocalArgument", name: "media_options" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "media_options",
                variableName: "media_options",
              },
              {
                kind: "Variable",
                name: "product_params",
                variableName: "input",
              },
            ],
            concreteType: "XFBMaibaCreateProductInfoKnowledgeResponsePayload",
            kind: "LinkedField",
            name: "xfb_maiba_create_product_info_knowledge",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XFBMetaAIBizAgentWAProductInfoKnowledgeEntry",
                kind: "LinkedField",
                name: "product_items",
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
                    name: "title",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "description",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "price",
                    storageKey: null,
                  },
                ],
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
          name: "WAWebBizAiProductInfoMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiProductInfoMutation",
          selections: t,
        },
        params: {
          id: n("WAWebBizAiProductInfoMutation_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAiProductInfoMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
