__d(
  "BillingAwareOnboardingSelectPostpay_paymentMethodOptions.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: [{ kind: "Literal", name: "limit", value: 5 }],
          concreteType: "Image",
          kind: "LinkedField",
          name: "billing_icons",
          plural: !0,
          selections: [
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "uri",
                storageKey: null,
              },
              action: "THROW",
              path: "billing_icons.uri",
            },
          ],
          storageKey: "billing_icons(limit:5)",
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: { plural: !0 },
        name: "BillingAwareOnboardingSelectPostpay_paymentMethodOptions",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null,
          },
          {
            kind: "InlineFragment",
            selections: e,
            type: "AdAccountNewCreditCardOption",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: e,
            type: "AdAccountNewPaypalOption",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: e,
            type: "AdAccountNewDirectDebitV2Option",
            abstractKey: null,
          },
        ],
        type: "PaymentCredentialOption",
        abstractKey: "__isPaymentCredentialOption",
      };
    })();
    a.exports = e;
  },
  null,
);
