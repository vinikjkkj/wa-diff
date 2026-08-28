__d(
  "getWizardJsonProps.entrypointutils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e != null && e !== "") {
        var t,
          n,
          r,
          o = JSON.parse(e),
          a = o == null ? void 0 : o.surface,
          i =
            (o == null ? void 0 : o.full_budget_payment_amount) != null
              ? {
                  amount: String(
                    parseInt(
                      (t = o.full_budget_payment_amount.amount) != null
                        ? t
                        : "0",
                      10,
                    ) / 100,
                  ),
                  currency: o.full_budget_payment_amount.currency,
                }
              : null,
          l = o == null ? void 0 : o.boost_duration_in_days,
          s =
            (o == null ? void 0 : o.daily_budget_payment_amount) != null
              ? {
                  amount: String(
                    parseInt(
                      (n = o.daily_budget_payment_amount.amount) != null
                        ? n
                        : "0",
                      10,
                    ) / 100,
                  ),
                  currency: o.daily_budget_payment_amount.currency,
                }
              : null,
          u = (r = o == null ? void 0 : o.is_missing_pills) != null ? r : !1;
        return {
          boostDurationInDays: l,
          dailyBudgetPaymentAmount: s,
          fullBudgetPaymentAmount: i,
          isMissingPills: u,
          surface: a,
        };
      }
      return null;
    }
    i.default = e;
  },
  66,
);
