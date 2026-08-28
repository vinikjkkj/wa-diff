__d(
  "BillingAddFundsPreloadingConfig",
  ["BillingWizardTypes", "JSResourceForInteraction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new (s = o("BillingWizardTypes")).SubConfigState(
        (e = r("JSResourceForInteraction"))(
          "BillingSelectPaymentMethodSubConfig",
        ).__setRef("BillingAddFundsPreloadingConfig"),
        "BillingSelectPaymentMethodSubConfig",
        {},
      ),
      c = new s.SubConfigState(
        e("BillingActivateCardCredentialSubConfig").__setRef(
          "BillingAddFundsPreloadingConfig",
        ),
        "BillingActivateCardCredentialSubConfig",
        {},
      ),
      d = new s.SubConfigState(
        e("BillingGetMissingCreditCardInfoSubConfig").__setRef(
          "BillingAddFundsPreloadingConfig",
        ),
        "BillingGetMissingCreditCardInfoSubConfig",
        {},
      ),
      m = new s.SubConfigState(
        e("BillingNonRecurringPaymentMethodSubConfig").__setRef(
          "BillingAddFundsPreloadingConfig",
        ),
        "BillingNonRecurringPaymentMethodSubConfig",
        {},
      ),
      p = [
        { config: u, states: ["check_existing_card_recurring"] },
        { config: c, states: ["check_card_status", "verify_risk_status"] },
        { config: d, states: ["entry"] },
        { config: m, states: [""] },
      ];
    l.ADD_FUNDS_PRELOADING_CONFIG = p;
  },
  98,
);
