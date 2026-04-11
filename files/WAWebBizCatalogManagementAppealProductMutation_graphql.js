__d(
  "WAWebBizCatalogManagementAppealProductMutation.graphql",
  ["WAWebBizCatalogManagementAppealProductMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "request", variableName: "input" },
            ],
            concreteType: "XFBWhatsAppCatalogAppealProductResponse",
            kind: "LinkedField",
            name: "xfb_whatsapp_catalog_appeal_product",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
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
          name: "WAWebBizCatalogManagementAppealProductMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizCatalogManagementAppealProductMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizCatalogManagementAppealProductMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizCatalogManagementAppealProductMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
