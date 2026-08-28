__d(
  "BillingAssignAdCreditsSubConfig",
  ["BillingAssignAdCreditsState", "BillingWizardStatesEnum"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        entryPoint: "assign_ad_credits",
        externalTransitions: [],
        isRootConfig: !1,
        logging_context: "billingcoupon",
        name: "ASSIGN_AD_CREDITS_SUB_CONFIG",
        required: ["paymentAccountID"],
        states: {
          assign_ad_credits: new (r("BillingAssignAdCreditsState"))({
            onClose: r("BillingWizardStatesEnum").DONE,
            onNext: r("BillingWizardStatesEnum").DONE,
          }),
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
