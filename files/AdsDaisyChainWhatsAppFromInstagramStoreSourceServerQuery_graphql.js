__d(
  "AdsDaisyChainWhatsAppFromInstagramStoreSourceServerQuery.graphql",
  ["relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "passCountryCodeGK",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "selectedPageID",
        },
        n = [{ kind: "Variable", name: "id", variableName: "selectedPageID" }],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          concreteType: "WhatsAppBusinessAccountToNumberCurrentStatus",
          kind: "LinkedField",
          name: "phone_number_status",
          plural: !1,
          selections: [
            r,
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
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "AdsDaisyChainWhatsAppFromInstagramStoreSourceServerQuery",
          selections: [
            {
              alias: null,
              args: n,
              concreteType: "Page",
              kind: "LinkedField",
              name: "page",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "WhatsAppBusinessAccount",
                  kind: "LinkedField",
                  name: "ctwa_business_account_daisy_chain_from_ig",
                  plural: !1,
                  selections: [o],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "AdsDaisyChainWhatsAppFromInstagramStoreSourceServerQuery",
          selections: [
            {
              alias: null,
              args: n,
              concreteType: "Page",
              kind: "LinkedField",
              name: "page",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "WhatsAppBusinessAccount",
                  kind: "LinkedField",
                  name: "ctwa_business_account_daisy_chain_from_ig",
                  plural: !1,
                  selections: [o, r],
                  storageKey: null,
                },
                r,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "28213633418323547",
          metadata: {},
          name: "AdsDaisyChainWhatsAppFromInstagramStoreSourceServerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    (n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e),
      (a.exports = e));
  },
  null,
);
