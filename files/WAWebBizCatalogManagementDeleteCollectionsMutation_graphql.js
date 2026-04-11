__d(
  "WAWebBizCatalogManagementDeleteCollectionsMutation.graphql",
  ["WAWebBizCatalogManagementDeleteCollectionsMutation_facebookRelayOperation"],
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
            concreteType: "XFBWhatsAppCatalogDeleteCollectionsResponse",
            kind: "LinkedField",
            name: "xfb_whatsapp_catalog_delete_collections",
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
          name: "WAWebBizCatalogManagementDeleteCollectionsMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizCatalogManagementDeleteCollectionsMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizCatalogManagementDeleteCollectionsMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizCatalogManagementDeleteCollectionsMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
