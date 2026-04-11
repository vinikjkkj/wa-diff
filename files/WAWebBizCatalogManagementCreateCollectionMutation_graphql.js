__d(
  "WAWebBizCatalogManagementCreateCollectionMutation.graphql",
  ["WAWebBizCatalogManagementCreateCollectionMutation_facebookRelayOperation"],
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
            concreteType: "XFBWhatsAppCatalogCreateCollectionResponse",
            kind: "LinkedField",
            name: "xfb_whatsapp_catalog_create_collection",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType:
                  "XFBWhatsAppCatalogCreateCollectionResponseFields",
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
                    concreteType: "WhatsAppCatalogCreateCollectionStatusInfo",
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
          name: "WAWebBizCatalogManagementCreateCollectionMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizCatalogManagementCreateCollectionMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizCatalogManagementCreateCollectionMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizCatalogManagementCreateCollectionMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
