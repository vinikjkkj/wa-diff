__d(
  "BillingPrePayPaymentMethodOptions_paymentMethodOptions.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { plural: !0 },
      name: "BillingPrePayPaymentMethodOptions_paymentMethodOptions",
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
                "BillingPrePayPaymentMethodOptions_paymentMethodOptions",
              fragmentName: "BillingAwareOnboardingNewLPMOption_option",
              fragmentPropName: "option",
              kind: "ModuleImport",
            },
          ],
          type: "AdAccountAltpayOption",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName:
                "BillingPrePayPaymentMethodOptions_paymentMethodOptions",
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
