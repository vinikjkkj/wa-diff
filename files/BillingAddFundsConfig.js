__d(
  "BillingAddFundsConfig",
  [
    "BillingAddFundsAwaitPaymentCompletionState",
    "BillingAddFundsCheckRiskVerificationState",
    "BillingAddFundsInitState",
    "BillingAddFundsLandingState",
    "BillingAddFundsPreloadingConfig",
    "BillingAddFundsState",
    "BillingAddFundsUsingRecurringLPMCredentialState",
    "BillingAuthenticateAddFundsStateWithNativeOTP",
    "BillingAuthenticateChargeState",
    "BillingAutoReloadEditAmountState",
    "BillingAutoReloadUtils",
    "BillingCheckAutoReloadRedirectState",
    "BillingCheckCCRecurringState",
    "BillingCheckConditionState",
    "BillingCheckForRequiredAccountInformationState",
    "BillingDecideShouldShowAutoReloadOptionState",
    "BillingDecideShouldUsePaymentAccountAddFundsState",
    "BillingInitializeCardActivationState",
    "BillingPaymentAccountAddFundsState",
    "BillingReviewPaymentState",
    "BillingSetAutoReloadState",
    "BillingStatusWithAutoReloadOptionState",
    "BillingTaxCountryVerificationDecisionState",
    "BillingWizardStatesEnum",
    "BillingWizardTypes",
    "JSResourceForInteraction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = {
        configAndStatesToPreload: {
          add_funds_landing_state_display: o("BillingAddFundsPreloadingConfig")
            .ADD_FUNDS_PRELOADING_CONFIG,
        },
        configPropsInitialization: { paymentIntent: "ADD_FUNDS" },
        entryPoint: "init",
        isRootConfig: !0,
        logging_context: "billingaddfunds",
        name: "ADD_FUNDS",
        required: ["paymentAccountID"],
        states: {
          account_information: new (u = o("BillingWizardTypes")).SubConfigState(
            (e = r("JSResourceForInteraction"))(
              "BillingAccountInformationSubConfig",
            ).__setRef("BillingAddFundsConfig"),
            "BillingAccountInformationSubConfig",
            { NEXT: "selected_pm", WARNING: "STATUS" },
          ),
          activate: new u.SubConfigState(
            e("BillingActivateCardCredentialSubConfig").__setRef(
              "BillingAddFundsConfig",
            ),
            "BillingActivateCardCredentialSubConfig",
            { CANCEL: (s = r("BillingWizardStatesEnum")).EXIT },
          ),
          add_funds: new (r("BillingAddFundsState"))({
            onAuthenticationRequired: "authenticate_charge",
            onAuthenticationRequiredForAsyncPayment:
              "authenticate_async_payment",
            onAuthenticationRequiredWithNativeOTP:
              "authenticate_async_payment_for_native_otp",
            onAwaitAsyncPayment: "await_payment_completion",
            onCvcoUnverifiable: s.STATUS,
            onFailure: "landing",
            onRiskVerificationRequired: "check_risk_verification",
            onSuccess: s.DONE,
            onSuccessWithAutoReloadOption: "should_turn_on_auto_reload",
          }),
          authenticate_async_payment: new (r("BillingAuthenticateChargeState"))(
            { onFailure: "landing", onSuccess: "await_payment_completion" },
          ),
          authenticate_async_payment_for_native_otp: new (r(
            "BillingAuthenticateAddFundsStateWithNativeOTP",
          ))({
            onFailure: "landing",
            onSuccess: "await_payment_completion",
            onTimeout: "landing",
            onTransitionToOTPWebFallback: "authenticate_async_payment",
          }),
          authenticate_charge: new (r("BillingAuthenticateChargeState"))({
            onFailure: "landing",
            onSuccess: s.DONE,
            onSuccessWithAutoReloadOption: "should_turn_on_auto_reload",
          }),
          auto_reload: new u.RootConfigState(
            e("BillingAutoReloadConfig").__setRef("BillingAddFundsConfig"),
            "BillingAutoReloadConfig",
          ),
          await_payment_completion: new (r(
            "BillingAddFundsAwaitPaymentCompletionState",
          ))({
            onFailure: "STATUS",
            onSuccess: s.DONE,
            onSuccessWithAutoReloadOption: "should_turn_on_auto_reload",
            onTimeout: "landing",
          }),
          charge_existing_lpm: new (r(
            "BillingAddFundsUsingRecurringLPMCredentialState",
          ))({
            onError: s.STATUS,
            onRecurringLPMSuccess: "check_auto_reload_redirect",
          }),
          check_account_info: new (r(
            "BillingCheckForRequiredAccountInformationState",
          ))(
            { notRequired: "selected_pm", required: "account_information" },
            !0,
          ),
          check_auto_reload_redirect: new (r(
            "BillingCheckAutoReloadRedirectState",
          ))({
            go_to_auto_reload: "auto_reload",
            not_available: s.DONE,
            turn_on_auto_reload: "turn_on_auto_reload",
          }),
          check_auto_reload_settings: new (r("BillingCheckConditionState"))(
            {
              fail: "status_with_auto_reload_option",
              pass: "turn_on_auto_reload",
            },
            function (e) {
              var t = e.autoReloadSettings;
              return o("BillingAutoReloadUtils").shouldTurnOnAutoReload(t);
            },
          ),
          check_card_supports_recurring: new (r(
            "BillingCheckCCRecurringState",
          ))({
            cc_recurring_unsupported: "check_use_payment_account_add_funds",
            cc_supports_recurring: "check_use_payment_account_add_funds",
          }),
          check_if_it_is_cc: new (r("BillingCheckConditionState"))(
            {
              fail: "check_use_payment_account_add_funds",
              pass: "check_card_supports_recurring",
            },
            function (e) {
              var t = e.paymentMethodType;
              return t != null && t.includes("CREDIT_CARD");
            },
          ),
          check_risk_verification: new (r(
            "BillingAddFundsCheckRiskVerificationState",
          ))({
            isSDCRestricted: "risk_verify_credential",
            isSDCRestricted3DS: "risk_verify_credential",
            notRestricted: "landing",
          }),
          check_tax_country_verification_method: new (r(
            "BillingTaxCountryVerificationDecisionState",
          ))({ fail: "landing", pass: "verify_country" }, "ADD_FUNDS"),
          check_use_payment_account_add_funds: new (r(
            "BillingDecideShouldUsePaymentAccountAddFundsState",
          ))({
            onBillableAccountAddFunds: "add_funds",
            onPaymentAccountAddFunds: "payment_account_add_funds",
          }),
          edit_auto_reload: new (r("BillingAutoReloadEditAmountState"))({
            onNext: "landing",
          }),
          entry: new (r("BillingCheckConditionState"))(
            {
              fail: "check_tax_country_verification_method",
              pass: "check_account_info",
            },
            function (e) {
              var t = e.paymentMethodType;
              return t === "ALT_PAY";
            },
          ),
          handle_non_recurring_payment_methods: new u.SubConfigState(
            e("BillingNonRecurringPaymentMethodSubConfig").__setRef(
              "BillingAddFundsConfig",
            ),
            "BillingNonRecurringPaymentMethodSubConfig",
            {
              DONE: s.DONE,
              READY_FOR_CHARGE: "review",
              READY_FOR_RECURRING_LPM_CHARGE: "charge_existing_lpm",
              TRANSITION_TO_AUTO_RELOAD: "check_auto_reload_redirect",
            },
          ),
          init: new (r("BillingAddFundsInitState"))({ onNext: "entry" }),
          landing: new (r("BillingAddFundsLandingState"))({
            onEditAutoReload: "edit_auto_reload",
            onInsufficientFundsOptions: "review",
            onNext: "check_account_info",
            onSkip: s.DONE,
          }),
          launch_add_recurring_lpm: new u.SubConfigState(
            e("BillingAddRecurringLPMSubConfig").__setRef(
              "BillingAddFundsConfig",
            ),
            "BillingAddRecurringLPMSubConfig",
          ),
          payment_account_add_funds: new (r(
            "BillingPaymentAccountAddFundsState",
          ))({
            onAuthenticationRequired: "authenticate_charge",
            onAuthenticationRequiredForAsyncPayment:
              "authenticate_async_payment",
            onAuthenticationRequiredWithNativeOTP:
              "authenticate_async_payment_for_native_otp",
            onAwaitAsyncPayment: "await_payment_completion",
            onCvcoUnverifiable: s.STATUS,
            onFailure: "landing",
            onRiskVerificationRequired: "check_risk_verification",
            onSuccess: s.DONE,
            onSuccessWithAutoReloadOption: "should_turn_on_auto_reload",
          }),
          review: new (r("BillingReviewPaymentState"))({
            onNext: "check_if_it_is_cc",
          }),
          risk_verify_credential: new u.RootConfigState(
            e("BillingRiskVerifyCredentialConfig").__setRef(
              "BillingAddFundsConfig",
            ),
            "BillingRiskVerifyCredentialConfig",
            { DONE: "review", STATUS: "review" },
          ),
          save_card_and_pay: new u.SubConfigState(
            e("BillingSaveCardAndPaySubConfig").__setRef(
              "BillingAddFundsConfig",
            ),
            "BillingSaveCardAndPaySubConfig",
            { BACK: "selected_pm", DONE: s.DONE, TRY_AGAIN: "landing" },
          ),
          selected_pm: new u.SubConfigState(
            e("BillingSelectPaymentMethodSubConfig").__setRef(
              "BillingAddFundsConfig",
            ),
            "BillingSelectPaymentMethodSubConfig",
            {
              ADD_RECURRING_LPM: "launch_add_recurring_lpm",
              COMBINE_SAVE_AND_PAY: "save_card_and_pay",
              DONE: "handle_non_recurring_payment_methods",
              NON_RECURRING_PAYMENT_METHOD:
                "handle_non_recurring_payment_methods",
            },
          ),
          should_turn_on_auto_reload: new (r(
            "BillingDecideShouldShowAutoReloadOptionState",
          ))({ onFalse: s.DONE, onTrue: "check_auto_reload_settings" }),
          status_with_auto_reload_option: new (r(
            "BillingStatusWithAutoReloadOptionState",
          ))({
            onDone: s.DONE,
            onNeedsVerification: "activate",
            onNext: "auto_reload",
            onPostpayUpgrade: "upgrade_without_activate_flow",
          }),
          turn_on_auto_reload: new (r("BillingSetAutoReloadState"))({
            onDone: s.DONE,
          }),
          upgrade_without_activate_flow: new (r(
            "BillingInitializeCardActivationState",
          ))({
            onAuthenticationRequired: "activate",
            onAuthenticationRequiredRevamped: "activate",
            onNext: s.DONE,
          }),
          verify_country: new u.RootConfigState(
            e("BillingVerifyCountryConfig").__setRef("BillingAddFundsConfig"),
            "BillingVerifyCountryConfig",
            { DONE: "landing" },
          ),
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
