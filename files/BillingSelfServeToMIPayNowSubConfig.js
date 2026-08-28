__d(
  "BillingSelfServeToMIPayNowSubConfig",
  [
    "BillingRestoreMIPaymentMethodPropsState",
    "BillingSelfServeToMIConfirmPayNowState",
    "BillingWizardStatesEnum",
    "BillingWizardTypes",
    "JSResourceForInteraction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        entryPoint: "confirm",
        externalTransitions: [],
        isRootConfig: !1,
        logging_context: "billingdefault",
        name: "SELF_SERVE_TO_MI_PAY_NOW",
        required: ["paymentAccountID"],
        states: {
          confirm: new (r("BillingSelfServeToMIConfirmPayNowState"))({
            onConfirm: "pay_balance",
          }),
          pay_balance: new (o("BillingWizardTypes").RootConfigState)(
            r("JSResourceForInteraction")(
              "BillingPayNowOrSettleConfig",
            ).__setRef("BillingSelfServeToMIPayNowSubConfig"),
            "BillingPayNowOrSettleConfig",
            { DONE: "restore_props" },
          ),
          restore_props: new (r("BillingRestoreMIPaymentMethodPropsState"))({
            onNext: r("BillingWizardStatesEnum").DONE,
          }),
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
