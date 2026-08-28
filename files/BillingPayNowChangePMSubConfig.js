__d(
  "BillingPayNowChangePMSubConfig",
  ["BillingPayNowChangePMState"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        entryPoint: "change_pm",
        externalTransitions: ["SELECT_PM"],
        isRootConfig: !1,
        logging_context: "billingpaynow",
        name: "PAY_NOW",
        required: ["paymentAccountID"],
        states: {
          add_new_pm: new (r("BillingPayNowChangePMState"))({
            onNext: "SELECT_PM",
          }),
          change_pm: new (r("BillingPayNowChangePMState"))({
            onAddNew: "add_new_pm",
            onNext: "SELECT_PM",
          }),
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
