__d(
  "WAWebBizCatalogManagementUpdateProductVisibilityMutation.graphql",
  [
    "WAWebBizCatalogManagementUpdateProductVisibilityMutation_facebookRelayOperation",
  ],
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
            concreteType: "XFBWhatsAppCatalogProductVisibilityUpdateResponse",
            kind: "LinkedField",
            name: "xfb_whatsapp_catalog_product_visibility_update",
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
          name: "WAWebBizCatalogManagementUpdateProductVisibilityMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizCatalogManagementUpdateProductVisibilityMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizCatalogManagementUpdateProductVisibilityMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizCatalogManagementUpdateProductVisibilityMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
