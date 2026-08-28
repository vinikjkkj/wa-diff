__d(
  "BillingPayNowOrSettleConfig",
  [
    "BillingCheckPaymentMethodAndAmountPassedInState",
    "BillingPayNowLandingState",
    "BillingPayNowOrSettlePreloadingConfig",
    "BillingTaxCountryVerificationDecisionState",
    "BillingWizardStatesEnum",
    "BillingWizardTypes",
    "JSResourceForInteraction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        configAndStatesToPreload: {
          pay_now_landing_state_display: o(
            "BillingPayNowOrSettlePreloadingConfig",
          ).PAY_NOW_PRELOADING_CONFIG,
        },
        entryPoint: "check_payment_method_and_amount_passed_in",
        isRootConfig: !0,
        logging_context: "billingpaynow",
        name: "PAY_NOW",
        required: ["paymentAccountID"],
        states: {
          change_pm: new (s = o("BillingWizardTypes")).SubConfigState(
            (e = r("JSResourceForInteraction"))(
              "BillingPayNowChangePMSubConfig",
            ).__setRef("BillingPayNowOrSettleConfig"),
            "BillingPayNowChangePMSubConfig",
            { SELECT_PM: "select_pm" },
          ),
          check_payment_method_and_amount_passed_in: new (r(
            "BillingCheckPaymentMethodAndAmountPassedInState",
          ))({
            onNoOrInvalidCredential: "landing",
            onValidCredentialPassedIn: "pay_now_or_settle_subconfig",
          }),
          check_tax_country_verification_method: new (r(
            "BillingTaxCountryVerificationDecisionState",
          ))(
            { fail: r("BillingWizardStatesEnum").DONE, pass: "verify_country" },
            "PAY_NOW",
          ),
          landing: new (r("BillingPayNowLandingState"))({
            onChangePM: "change_pm",
            onNext: "pay_now_or_settle_subconfig",
          }),
          pay_now_or_settle_subconfig: new s.SubConfigState(
            e("BillingPayNowOrSettleSubConfig").__setRef(
              "BillingPayNowOrSettleConfig",
            ),
            "BillingPayNowOrSettleSubConfig",
            {
              DONE: "check_tax_country_verification_method",
              RESTART: "landing",
            },
          ),
          select_pm: new s.SubConfigState(
            e("BillingSelectPaymentMethodSubConfig").__setRef(
              "BillingPayNowOrSettleConfig",
            ),
            "BillingSelectPaymentMethodSubConfig",
            { DONE: "landing", NON_RECURRING_PAYMENT_METHOD: "landing" },
          ),
          verify_country: new s.RootConfigState(
            e("BillingVerifyCountryConfig").__setRef(
              "BillingPayNowOrSettleConfig",
            ),
            "BillingVerifyCountryConfig",
          ),
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
