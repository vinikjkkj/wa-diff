__d(
  "WAWebBizCatalogManagementUpdateCommerceSettingsMutation.graphql",
  [
    "WAWebBizCatalogManagementUpdateCommerceSettingsMutation_facebookRelayOperation",
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
            concreteType: "XFBWhatsAppCatalogCommerceSettingsResponse",
            kind: "LinkedField",
            name: "xfb_whatsapp_smb_commerce_settings",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "cart_enabled",
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
          name: "WAWebBizCatalogManagementUpdateCommerceSettingsMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizCatalogManagementUpdateCommerceSettingsMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizCatalogManagementUpdateCommerceSettingsMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizCatalogManagementUpdateCommerceSettingsMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
