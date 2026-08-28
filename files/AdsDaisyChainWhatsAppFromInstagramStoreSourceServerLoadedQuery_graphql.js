__d(
  "AdsDaisyChainWhatsAppFromInstagramStoreSourceServerLoadedQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "passCountryCodeGK",
          },
        ],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          concreteType: "WhatsAppBusinessAccountToNumberCurrentStatus",
          kind: "LinkedField",
          name: "phone_number_status",
          plural: !1,
          selections: [
            t,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "country_code",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "national_phone_number",
              storageKey: null,
            },
            {
              condition: "passCountryCodeGK",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "formatted_phone_number",
                  storageKey: null,
                },
              ],
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdsDaisyChainWhatsAppFromInstagramStoreSourceServerLoadedQuery",
          selections: [
            {
              kind: "ClientExtension",
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Page",
                  kind: "LinkedField",
                  name: "loaded_page",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "WhatsAppBusinessAccount",
                      kind: "LinkedField",
                      name: "ctwa_business_account_daisy_chain_from_ig",
                      plural: !1,
                      selections: [n],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsDaisyChainWhatsAppFromInstagramStoreSourceServerLoadedQuery",
          selections: [
            {
              kind: "ClientExtension",
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Page",
                  kind: "LinkedField",
                  name: "loaded_page",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "WhatsAppBusinessAccount",
                      kind: "LinkedField",
                      name: "ctwa_business_account_daisy_chain_from_ig",
                      plural: !1,
                      selections: [n, t],
                      storageKey: null,
                    },
                    t,
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
        },
        params: {
          cacheID: "5c4f3ce31b5aa6f6c51faaef2e69455f",
          id: null,
          metadata: {},
          name: "AdsDaisyChainWhatsAppFromInstagramStoreSourceServerLoadedQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
