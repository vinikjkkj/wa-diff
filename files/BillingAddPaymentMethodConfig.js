__d(
  "BillingAddPaymentMethodConfig",
  [
    "BillingAddPaymentMethodInitStateState",
    "BillingAddPaymentMethodPreloadingConfig",
    "BillingAwareOnboardingGateState",
    "BillingAwareOnboardingModalitySelectLandingState",
    "BillingAwareOnboardingPMLandingState",
    "BillingCheckConditionState",
    "BillingCheckForRequiredAccountInformationState",
    "BillingCountryCurrencyDecisionState",
    "BillingCountryCurrencyState",
    "BillingCreateNewFromOldState",
    "BillingDecideShouldShowAutoReloadOptionState",
    "BillingDetermineAwareOnboardingOptionState",
    "BillingExitConfirmationDialogConstants",
    "BillingGuidedExperienceNUXInitState",
    "BillingInitializeCardActivationState",
    "BillingStatusWithAutoReloadOptionState",
    "BillingTaxCountryVerificationDecisionState",
    "BillingWizardLandingState",
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
          wizard_landing_state_display: o(
            "BillingAddPaymentMethodPreloadingConfig",
          ).ADD_PM_PRELOADING_CONFIG,
        },
        entryPoint: "init",
        exitConfirmationDialog: r(
          "BillingExitConfirmationDialogConstants",
        ).exitConfirmationDialogProps("placeholder", !0),
        isRootConfig: !0,
        logging_context: "billingaddpm",
        name: "ADD_PM",
        required: ["paymentAccountID"],
        states: {
          account_information: new (u = o("BillingWizardTypes")).SubConfigState(
            (e = r("JSResourceForInteraction"))(
              "BillingAccountInformationSubConfig",
            ).__setRef("BillingAddPaymentMethodConfig"),
            "BillingAccountInformationSubConfig",
            { NEXT: "landing", WARNING: "STATUS" },
          ),
          activate: new u.SubConfigState(
            e("BillingActivateCardCredentialSubConfig").__setRef(
              "BillingAddPaymentMethodConfig",
            ),
            "BillingActivateCardCredentialSubConfig",
            { CANCEL: (s = r("BillingWizardStatesEnum")).EXIT },
          ),
          auto_reload: new u.RootConfigState(
            e("BillingAutoReloadConfig").__setRef(
              "BillingAddPaymentMethodConfig",
            ),
            "BillingAutoReloadConfig",
          ),
          aware_onboarding_gate: new (r("BillingAwareOnboardingGateState"))({
            fail: "landing",
            pass: "determine_aware_onboarding_option",
          }),
          aware_onboarding_modality_select_landing: new (r(
            "BillingAwareOnboardingModalitySelectLandingState",
          ))({ onClose: s.DONE, onComplete: "selected_pm" }),
          aware_onboarding_pm_landing: new (r(
            "BillingAwareOnboardingPMLandingState",
          ))({ onClose: s.DONE, onComplete: "selected_pm" }),
          check_account_info: new (r(
            "BillingCheckForRequiredAccountInformationState",
          ))({
            notRequired: "check_coupon",
            required: "launch_account_information",
          }),
          check_coupon: new (r("BillingCheckConditionState"))(
            {
              fail: "tax_country_validation_decision_state",
              pass: "launch_add_coupon",
            },
            function (e) {
              var t = e.couponChecked;
              return t === !0;
            },
          ),
          check_show_auto_reload_option: new (r(
            "BillingDecideShouldShowAutoReloadOptionState",
          ))({ onFalse: s.DONE, onTrue: "status_with_auto_reload_option" }),
          country_currency: new (r("BillingCountryCurrencyState"))({
            onChangeCountryCurrency: "country_currency_decision_state",
            onDeveloperNext: "selected_pm",
            onNext: "aware_onboarding_gate",
            onWarning: "STATUS",
          }),
          country_currency_decision_state: new (r(
            "BillingCountryCurrencyDecisionState",
          ))({
            onChangeCountryCurrency: "CURRENCY_CHANGE",
            onDeveloperNext: "selected_pm",
            onFailure: "create_new_from_old",
            onNewAccount: "NEW_ACCOUNT_CREATED",
            onNext: "aware_onboarding_gate",
          }),
          create_new_from_old: new (r("BillingCreateNewFromOldState"))({
            onNext: "NEW_ACCOUNT_CREATED",
            onWarning: "STATUS",
          }),
          determine_aware_onboarding_option: new (r(
            "BillingDetermineAwareOnboardingOptionState",
          ))({
            onAwareOnboardingModalitySelect:
              "aware_onboarding_modality_select_landing",
            onAwareOnboardingPMLanding: "aware_onboarding_pm_landing",
            onLanding: "landing",
          }),
          guided_experience_nux_init: new (r(
            "BillingGuidedExperienceNUXInitState",
          ))({ onNext: "country_currency" }),
          init: new (r("BillingAddPaymentMethodInitStateState"))({
            onChangeCountry: "country_currency",
            onDeveloper: "selected_pm",
            onL5BizInfo: "l5_biz_info",
            onLanding: "landing",
            onMV4B: "account_information",
            onScheduledMITransition: "selected_pm",
          }),
          l5_biz_info: new u.SubConfigState(
            e("BillingL5BizInfoSubConfig").__setRef(
              "BillingAddPaymentMethodConfig",
            ),
            "BillingL5BizInfoSubConfig",
            { CNFO: "selected_pm", EXIT: "selected_pm", NEXT: "selected_pm" },
          ),
          landing: new (r("BillingWizardLandingState"))({
            onChangeAccountInformation: "account_information",
            onChangeCountryCurrency: "country_currency",
            onNext: "selected_pm",
          }),
          launch_account_information: new u.RootConfigState(
            e("BillingCollectAccountInformationConfig").__setRef(
              "BillingAddPaymentMethodConfig",
            ),
            "BillingCollectAccountInformationConfig",
            { DONE: "check_coupon" },
          ),
          launch_add_coupon: new u.RootConfigState(
            e("BillingAddCouponConfig").__setRef(
              "BillingAddPaymentMethodConfig",
            ),
            "BillingAddCouponConfig",
            { DONE: "tax_country_validation_decision_state" },
          ),
          launch_add_funds: new u.RootConfigState(
            e("BillingAddFundsConfig").__setRef(
              "BillingAddPaymentMethodConfig",
            ),
            "BillingAddFundsConfig",
          ),
          launch_add_recurring_lpm: new u.SubConfigState(
            e("BillingAddRecurringLPMSubConfig").__setRef(
              "BillingAddPaymentMethodConfig",
            ),
            "BillingAddRecurringLPMSubConfig",
          ),
          selected_pm: new u.SubConfigState(
            e("BillingSelectPaymentMethodSubConfig").__setRef(
              "BillingAddPaymentMethodConfig",
            ),
            "BillingSelectPaymentMethodSubConfig",
            {
              ADD_RECURRING_LPM: "launch_add_recurring_lpm",
              DONE: "check_account_info",
              NON_RECURRING_PAYMENT_METHOD: "launch_add_funds",
            },
          ),
          status_with_auto_reload_option: new (r(
            "BillingStatusWithAutoReloadOptionState",
          ))({
            onDone: s.DONE,
            onNeedsVerification: "activate",
            onNext: "auto_reload",
            onPostpayUpgrade: "upgrade_without_activate_flow",
          }),
          tax_country_validation_decision_state: new (r(
            "BillingTaxCountryVerificationDecisionState",
          ))(
            { fail: "check_show_auto_reload_option", pass: "verify_country" },
            "ADD_PM",
          ),
          upgrade_without_activate_flow: new (r(
            "BillingInitializeCardActivationState",
          ))({
            onAuthenticationRequired: "activate",
            onAuthenticationRequiredRevamped: "activate",
            onNext: s.DONE,
          }),
          verify_country: new u.RootConfigState(
            e("BillingVerifyCountryConfig").__setRef(
              "BillingAddPaymentMethodConfig",
            ),
            "BillingVerifyCountryConfig",
            { DONE: "check_show_auto_reload_option" },
          ),
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
