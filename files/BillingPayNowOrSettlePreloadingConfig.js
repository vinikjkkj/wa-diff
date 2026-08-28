__d(
  "BillingPayNowOrSettlePreloadingConfig",
  ["BillingWizardTypes", "JSResourceForInteraction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new (s = o("BillingWizardTypes")).SubConfigState(
        (e = r("JSResourceForInteraction"))(
          "BillingActivateCardCredentialSubConfig",
        ).__setRef("BillingPayNowOrSettlePreloadingConfig"),
        "BillingActivateCardCredentialSubConfig",
        {},
      ),
      c = new s.SubConfigState(
        e("BillingSelectPaymentMethodSubConfig").__setRef(
          "BillingPayNowOrSettlePreloadingConfig",
        ),
        "BillingSelectPaymentMethodSubConfig",
        {},
      ),
      d = new s.SubConfigState(
        e("BillingPayNowOrSettleSubConfig").__setRef(
          "BillingPayNowOrSettlePreloadingConfig",
        ),
        "BillingPayNowOrSettleSubConfig",
        {},
      ),
      m = new s.SubConfigState(
        e("BillingSaveCardAndPaySubConfig").__setRef(
          "BillingPayNowOrSettlePreloadingConfig",
        ),
        "BillingSaveCardAndPaySubConfig",
        {},
      ),
      p = new s.SubConfigState(
        e("BillingNonRecurringPaymentMethodSubConfig").__setRef(
          "BillingPayNowOrSettlePreloadingConfig",
        ),
        "BillingNonRecurringPaymentMethodSubConfig",
        {},
      ),
      _ = new s.SubConfigState(
        e("BillingGetMissingCreditCardInfoSubConfig").__setRef(
          "BillingPayNowOrSettlePreloadingConfig",
        ),
        "BillingGetMissingCreditCardInfoSubConfig",
        {},
      ),
      f = [
        { config: d, states: [] },
        { config: u, states: ["check_card_status", "verify_risk_status"] },
        { config: c, states: ["check_existing_card_recurring"] },
        { config: _, states: ["entry"] },
        { config: m, states: [] },
        { config: p, states: [] },
      ];
    l.PAY_NOW_PRELOADING_CONFIG = f;
  },
  98,
);
