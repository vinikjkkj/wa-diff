__d(
  "BillingAddFundsEPWizard.entrypoint",
  [
    "BillingAddFundsLandingScreenQuery$Parameters",
    "JSResourceForInteraction",
    "getWizardJsonProps.entrypointutils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e,
          n,
          o,
          a,
          i,
          l = r("getWizardJsonProps.entrypointutils")(t.jsonProps);
        return {
          queries: {
            add_funds_landing_state_display: {
              parameters: r("BillingAddFundsLandingScreenQuery$Parameters"),
              variables: {
                boostDurationInDays: l == null ? void 0 : l.boostDurationInDays,
                country: t.country,
                currency: t.currency,
                dailyBudgetPaymentAmount:
                  l == null ? void 0 : l.dailyBudgetPaymentAmount,
                fullBudgetPaymentAmount:
                  l == null ? void 0 : l.fullBudgetPaymentAmount,
                intent: "SB_FUNDING",
                isMissingPills:
                  (e = l == null ? void 0 : l.isMissingPills) != null ? e : !1,
                paymentAccountID: (n = t.paymentAccountID) != null ? n : "",
                paymentMethodID: (o = t.paymentMethodID) != null ? o : "0",
                sharedStoredBalanceID:
                  (a = t.sharedStoredBalanceID) != null ? a : "0",
                surface:
                  (i = l == null ? void 0 : l.surface) != null
                    ? i
                    : t == null
                      ? void 0
                      : t.surface,
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "BillingAddFundsEPWizard.react",
      ).__setRef("BillingAddFundsEPWizard.entrypoint"),
    };
    l.default = e;
  },
  98,
);
