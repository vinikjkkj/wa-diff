__d(
  "WAWebBizCatalogManagementUpdateCollectionMutation.graphql",
  ["WAWebBizCatalogManagementUpdateCollectionMutation_facebookRelayOperation"],
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
            concreteType: "XFBWhatsAppCatalogUpdateCollectionResponse",
            kind: "LinkedField",
            name: "xfb_whatsapp_catalog_update_collection",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType:
                  "XFBWhatsAppCatalogUpdateCollectionResponseAttributes",
                kind: "LinkedField",
                name: "collection",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "id",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBWhatsAppCatalogStatusInfo",
                    kind: "LinkedField",
                    name: "status_info",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "status",
                        storageKey: null,
                      },
                    ],
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
          name: "WAWebBizCatalogManagementUpdateCollectionMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizCatalogManagementUpdateCollectionMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizCatalogManagementUpdateCollectionMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizCatalogManagementUpdateCollectionMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
