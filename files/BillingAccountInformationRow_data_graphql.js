__d(
  "BillingAccountInformationRow_data.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "BillingAccountInformationRow_data",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "billable_account",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "billable_account_tax_info",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "StreetAddress",
                  kind: "LinkedField",
                  name: "intl_address",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "full_address",
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
      ],
      type: "PaymentAccount",
      abstractKey: "__isPaymentAccount",
    };
    a.exports = e;
  },
  null,
);
