__d(
  "AdsDaisyChainWhatsAppFromInstagramStoreSourceFragment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "passCountryCodeGK" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "AdsDaisyChainWhatsAppFromInstagramStoreSourceFragment",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "WhatsAppBusinessAccount",
          kind: "LinkedField",
          name: "ctwa_business_account_daisy_chain_from_ig",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "WhatsAppBusinessAccountToNumberCurrentStatus",
              kind: "LinkedField",
              name: "phone_number_status",
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
            },
          ],
          storageKey: null,
        },
      ],
      type: "Page",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
