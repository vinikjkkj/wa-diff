__d(
  "WAWebBizCatalogManagementCreateCatalogMutation.graphql",
  ["WAWebBizCatalogManagementCreateCatalogMutation_facebookRelayOperation"],
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
            concreteType: "XFBWhatsAppCatalogCreateResponse",
            kind: "LinkedField",
            name: "xfb_whatsapp_catalog_create",
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
          name: "WAWebBizCatalogManagementCreateCatalogMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizCatalogManagementCreateCatalogMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizCatalogManagementCreateCatalogMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizCatalogManagementCreateCatalogMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
