__d(
  "BillingPayNowOrSettleEPWizard.entrypoint",
  ["BillingPayNowLandingScreenQuery$Parameters", "JSResourceForInteraction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e;
        return {
          queries: {
            pay_now_landing_state_display: {
              parameters: r("BillingPayNowLandingScreenQuery$Parameters"),
              variables: {
                intent: "PAY_NOW",
                paymentAccountID: (e = t.paymentAccountID) != null ? e : "",
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "BillingPayNowOrSettleEPWizard.react",
      ).__setRef("BillingPayNowOrSettleEPWizard.entrypoint"),
    };
    l.default = e;
  },
  98,
);
