__d(
  "BillingAddCreditCardView_cards.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "paymentAccountID" }],
      kind: "Fragment",
      metadata: null,
      name: "BillingAddCreditCardView_cards",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "check_make_default",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_save_to_business",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "verify_tokenization_required",
          storageKey: null,
        },
        {
          alias: null,
          args: [
            { kind: "Literal", name: "limit", value: 5 },
            {
              kind: "Variable",
              name: "payment_legacy_account_id",
              variableName: "paymentAccountID",
            },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "billing_icons",
          plural: !0,
          selections: [
            {
              kind: "InlineDataFragmentSpread",
              name: "BillingPaymentIconUtils_data",
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "uri",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "scale",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "height",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "width",
                  storageKey: null,
                },
              ],
              args: null,
              argumentDefinitions: [],
            },
          ],
          storageKey: null,
        },
      ],
      type: "AdAccountNewCreditCardOption",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
