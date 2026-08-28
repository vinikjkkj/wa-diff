__d(
  "BillingActivateCardCredentialSubConfig",
  [
    "BillingActivateCreditCardState",
    "BillingAwaitCardActivationState",
    "BillingCheckCardStatusState",
    "BillingCheckConditionState",
    "BillingCheckRiskState",
    "BillingInitializeCardActivationState",
    "BillingThirdPartyActivateCreditCardState",
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
        entryPoint: "check_card_status",
        externalTransitions: ["CANCEL"],
        isRootConfig: !1,
        logging_context: "billingcreditcard",
        name: "ACTIVATE_CARD_CREDENTIAL_SUB_CONFIG",
        required: ["paymentAccountID", "paymentMethodID"],
        states: {
          activate_card: new (r("BillingActivateCreditCardState"))({
            onFailure: "get_cc_requirements",
            onNext: "await_activation",
          }),
          await_activation: new (r("BillingAwaitCardActivationState"))({
            onFailure: "get_cc_requirements",
            onNext: "verify_risk_status",
            onTimeout: "STATUS",
          }),
          check_card_status: new (r("BillingCheckCardStatusState"))({
            needs_verification: "get_cc_requirements",
            supported: "verify_risk_status",
            unsupported: (u = r("BillingWizardStatesEnum")).BACK,
          }),
          get_cc_requirements: new (e = o("BillingWizardTypes")).SubConfigState(
            (s = r("JSResourceForInteraction"))(
              "BillingGetMissingCreditCardInfoSubConfig",
            ).__setRef("BillingActivateCardCredentialSubConfig"),
            "BillingGetMissingCreditCardInfoSubConfig",
            { CANCEL: u.BACK, DONE: "initialize_activation" },
          ),
          initialize_activation: new (r(
            "BillingInitializeCardActivationState",
          ))({
            onAuthenticationRequired: "activate_card",
            onAuthenticationRequiredRevamped: "third_party_activate_card",
            onNext: "verify_risk_status",
          }),
          launch_preauth: new e.RootConfigState(
            s("BillingResolvePreauthFrictionConfig").__setRef(
              "BillingActivateCardCredentialSubConfig",
            ),
            "BillingResolvePreauthFrictionConfig",
          ),
          launch_sdc: new e.RootConfigState(
            s("BillingResolveSDCFrictionConfig").__setRef(
              "BillingActivateCardCredentialSubConfig",
            ),
            "BillingResolveSDCFrictionConfig",
            { DONE: u.DONE },
          ),
          launch_secure_billing: new e.RootConfigState(
            s("BillingEnterSecureBillingConfig").__setRef(
              "BillingActivateCardCredentialSubConfig",
            ),
            "BillingEnterSecureBillingConfig",
          ),
          secure_billing_restricted: new (r("BillingCheckConditionState"))(
            { fail: "launch_secure_billing", pass: u.DONE },
            function (e) {
              var t = e.skipSecureBillingRedirect;
              return t === !0;
            },
          ),
          third_party_activate_card: new (r(
            "BillingThirdPartyActivateCreditCardState",
          ))({ onFailure: "get_cc_requirements", onNext: "await_activation" }),
          verify_risk_status: new (r("BillingCheckRiskState"))({
            isPreauthRestricted: "launch_preauth",
            isSDCRestricted: "launch_sdc",
            isSDCRestricted3DS: "launch_sdc",
            isSecureBillingRestricted: "secure_billing_restricted",
            notRestricted: u.DONE,
          }),
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
