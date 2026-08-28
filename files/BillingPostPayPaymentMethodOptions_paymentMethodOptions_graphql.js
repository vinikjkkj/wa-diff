__d(
  "BillingPostPayPaymentMethodOptions_paymentMethodOptions.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { plural: !0 },
      name: "BillingPostPayPaymentMethodOptions_paymentMethodOptions",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null,
          },
          action: "THROW",
          path: "__typename",
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName:
                "BillingPostPayPaymentMethodOptions_paymentMethodOptions",
              fragmentName: "BillingAwareOnboardingNewCreditCardOption_option",
              fragmentPropName: "option",
              kind: "ModuleImport",
            },
          ],
          type: "AdAccountNewCreditCardOption",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName:
                "BillingPostPayPaymentMethodOptions_paymentMethodOptions",
              fragmentName: "BillingAwareOnboardingNewPayPalOption_option",
              fragmentPropName: "option",
              kind: "ModuleImport",
            },
          ],
          type: "AdAccountNewPaypalOption",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName:
                "BillingPostPayPaymentMethodOptions_paymentMethodOptions",
              fragmentName: "BillingAwareOnboardingNewDirectDebitOption_option",
              fragmentPropName: "option",
              kind: "ModuleImport",
            },
          ],
          type: "AdAccountNewDirectDebitV2Option",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName:
                "BillingPostPayPaymentMethodOptions_paymentMethodOptions",
              fragmentName: "BillingAwareOnboardingNewCouponOption_option",
              fragmentPropName: "option",
              kind: "ModuleImport",
            },
          ],
          type: "AdAccountNewTokenOption",
          abstractKey: null,
        },
      ],
      type: "PaymentCredentialOption",
      abstractKey: "__isPaymentCredentialOption",
    };
    a.exports = e;
  },
  null,
);
