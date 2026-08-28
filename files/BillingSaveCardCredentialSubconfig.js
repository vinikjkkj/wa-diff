__d(
  "BillingSaveCardCredentialSubconfig",
  [
    "BillingActivateCreditCardState",
    "BillingActivateCreditCardWithCardinal3DSState",
    "BillingActivateCreditCardWithNativeOTPState",
    "BillingAddCreditCardState",
    "BillingAwaitCardActivationState",
    "BillingCheckConditionState",
    "BillingCheckRiskState",
    "BillingSaveCardCredentialState",
    "BillingShouldCombineSaveAndPayState",
    "BillingThirdPartyActivateCreditCardState",
    "BillingVerifyCountryLocationMismatchState",
    "BillingWizardStatesEnum",
    "BillingWizardTypes",
    "JSResourceForInteraction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        entryPoint: "save",
        externalTransitions: [
          "COMBINE_SAVE_AND_PAY",
          "NON_RECURRING_PAYMENT_METHOD",
        ],
        isRootConfig: !1,
        logging_context: "billingcreditcard",
        name: "SAVE_CARD_CREDENTIAL",
        required: ["paymentAccountID", "paymentMethodType"],
        states: {
          activate_card: new (r("BillingActivateCreditCardState"))({
            onFailure: "BACK",
            onNext: "await_activation",
          }),
          activate_card_with_cardinal_3ds: new (r(
            "BillingActivateCreditCardWithCardinal3DSState",
          ))({ onFailure: "BACK", onNext: "await_activation" }),
          activate_card_with_native_otp: new (r(
            "BillingActivateCreditCardWithNativeOTPState",
          ))({
            onFailure: "BACK",
            onNext: "await_activation",
            onTransitionToOTPWebFallback: "activate_card",
          }),
          add_card: new (r("BillingAddCreditCardState"))({
            onChangeBusinessLocation: "change_business_location",
            onLockPrepay: "NON_RECURRING_PAYMENT_METHOD",
            onNext: "should_combine_save_and_pay",
          }),
          await_activation: new (r("BillingAwaitCardActivationState"))({
            onFailure: "add_card",
            onNext: "verify_risk_status",
            onTimeout: "STATUS",
          }),
          change_business_location: new (s =
            o("BillingWizardTypes")).SubConfigState(
            (e = r("JSResourceForInteraction"))(
              "BillingCountryLocationMismatchSubConfig",
            ).__setRef("BillingSaveCardCredentialSubconfig"),
            "BillingCountryLocationMismatchSubConfig",
            { DONE: "add_card" },
          ),
          launch_preauth: new s.RootConfigState(
            e("BillingResolvePreauthFrictionConfig").__setRef(
              "BillingSaveCardCredentialSubconfig",
            ),
            "BillingResolvePreauthFrictionConfig",
          ),
          launch_sdc: new s.RootConfigState(
            e("BillingResolveSDCFrictionConfig").__setRef(
              "BillingSaveCardCredentialSubconfig",
            ),
            "BillingResolveSDCFrictionConfig",
          ),
          launch_secure_billing: new s.RootConfigState(
            e("BillingEnterSecureBillingConfig").__setRef(
              "BillingSaveCardCredentialSubconfig",
            ),
            "BillingEnterSecureBillingConfig",
          ),
          resolve_location_mismatch: new (r(
            "BillingVerifyCountryLocationMismatchState",
          ))({
            onSelectDetectedCountry: "change_business_location",
            onVerifyCountry: "save",
          }),
          return_recurring_status: new (r("BillingCheckConditionState"))(
            {
              fail: "NON_RECURRING_PAYMENT_METHOD",
              pass: r("BillingWizardStatesEnum").DONE,
            },
            function (e) {
              var t = e.recurring;
              return t === !0;
            },
          ),
          save: new (r("BillingSaveCardCredentialState"))({
            onAddCardCredential: "add_card",
            onAuthenticationRequired: "activate_card",
            onAuthenticationRequiredRevamped: "third_party_activate_card",
            onAuthenticationRequiredWithCardinal3DS:
              "activate_card_with_cardinal_3ds",
            onAuthenticationRequiredWithNativeOTP:
              "activate_card_with_native_otp",
            onCardPending: "await_activation",
            onNext: "verify_risk_status",
            onResolveLocationMismatch: "resolve_location_mismatch",
            onSelf: "save",
          }),
          secure_billing_restricted: new (r("BillingCheckConditionState"))(
            {
              fail: "launch_secure_billing",
              pass: r("BillingWizardStatesEnum").DONE,
            },
            function (e) {
              var t = e.skipSecureBillingRedirect;
              return t === !0;
            },
          ),
          should_combine_save_and_pay: new (r(
            "BillingShouldCombineSaveAndPayState",
          ))({ onSaveAndPay: "COMBINE_SAVE_AND_PAY", onSaveOnly: "save" }),
          third_party_activate_card: new (r(
            "BillingThirdPartyActivateCreditCardState",
          ))({ onFailure: "BACK", onNext: "await_activation" }),
          verify_risk_status: new (r("BillingCheckRiskState"))({
            isPreauthRestricted: "launch_preauth",
            isSDCRestricted: "launch_sdc",
            isSDCRestricted3DS: "launch_sdc",
            isSecureBillingRestricted: "secure_billing_restricted",
            notRestricted: "return_recurring_status",
          }),
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
