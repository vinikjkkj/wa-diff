__d(
  "WAWebCreateWhatsAppAdsIdentityMutation.graphql",
  ["WAWebCreateWhatsAppAdsIdentityMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "code" },
        t = { defaultValue: null, kind: "LocalArgument", name: "phone_number" },
        r = [
          {
            alias: null,
            args: [
              {
                fields: [
                  { kind: "Variable", name: "code", variableName: "code" },
                  {
                    kind: "Variable",
                    name: "phone_number",
                    variableName: "phone_number",
                  },
                ],
                kind: "ObjectValue",
                name: "input",
              },
            ],
            concreteType: "Page",
            kind: "LinkedField",
            name: "create_or_update_whatsapp_ads_identity",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "WAWebCreateWhatsAppAdsIdentityMutation",
          selections: r,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "WAWebCreateWhatsAppAdsIdentityMutation",
          selections: r,
        },
        params: {
          id: n(
            "WAWebCreateWhatsAppAdsIdentityMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebCreateWhatsAppAdsIdentityMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
