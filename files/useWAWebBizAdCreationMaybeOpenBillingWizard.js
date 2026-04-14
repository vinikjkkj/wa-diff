__d(
  "useWAWebBizAdCreationMaybeOpenBillingWizard",
  [
    "CometRelay",
    "WAWebBizAdCreationCurrencyUtils",
    "WAWebBizAdCreationPaymentRefetchContext",
    "WAWebBizAdCreationSpecContext",
    "react",
    "useWAWebBizAdCreationMaybeOpenBillingWizardQuery.graphql",
    "useWAWebBizAdCreationOpenBillingWizard",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useContext,
      m = u.useMemo,
      p = u.useState,
      _ =
        e !== void 0
          ? e
          : (e = n("useWAWebBizAdCreationMaybeOpenBillingWizardQuery.graphql"));
    function f(e, t, n) {
      var o = r("WAWebBizAdCreationCurrencyUtils").getCurrencyOffset(n);
      if (o === 0) return null;
      var a = e * t;
      return { amount: (a / o).toString(), currency: n };
    }
    function g(e, t) {
      var n,
        a,
        i,
        l,
        s,
        u,
        g,
        h,
        y,
        C,
        b,
        v,
        S = p(!1),
        R = S[0],
        L = S[1],
        E = d(r("WAWebBizAdCreationSpecContext")),
        k =
          (n =
            (a = E.currentValue.adAccountData) == null
              ? void 0
              : a.paymentAccountID) != null
            ? n
            : "",
        I =
          (i = (l = E.currentValue.budgetData) == null ? void 0 : l.budget) !=
          null
            ? i
            : 0,
        T =
          (s =
            (u = E.currentValue.adAccountData) == null ? void 0 : u.currency) !=
          null
            ? s
            : "USD",
        D =
          (g =
            (h = E.currentValue.durationData) == null
              ? void 0
              : h.durationInDays) != null
            ? g
            : 1,
        x = m(
          function () {
            return f(I, D, T);
          },
          [I, D, T],
        ),
        $ = o(
          "WAWebBizAdCreationPaymentRefetchContext",
        ).useWAWebBizAdCreationPaymentRefetch(),
        P = $.billingFetchKey,
        N = o("CometRelay").useLazyLoadQuery(
          _,
          { asset_id: k, budget: x },
          { fetchKey: P, fetchPolicy: "store-and-network" },
        ),
        M =
          N == null ||
          (y = N.billable_account_by_asset_id) == null ||
          (y = y.billing_info) == null
            ? void 0
            : y.required_action,
        w = M == null || (C = M.action) == null ? void 0 : C.wizard_name,
        A =
          (b =
            M == null || (v = M.action) == null
              ? void 0
              : v.wizard_props_json) != null
            ? b
            : null,
        F = r("useWAWebBizAdCreationOpenBillingWizard")(t),
        O = c(
          function () {
            if (w == null) {
              e.onComplete();
              return;
            }
            (L(!0),
              e.onWizardOpen == null || e.onWizardOpen(),
              F(
                { label: null, wizardName: w, wizardPropsJSON: A },
                function (t) {
                  (L(!1),
                    t === "complete"
                      ? e.onComplete()
                      : e.onWizardClose == null || e.onWizardClose());
                },
                function () {
                  L(!1);
                },
              ));
          },
          [w, A, F, e],
        );
      return { isLoading: R, maybeLaunchBillingWizard: O };
    }
    l.default = g;
  },
  98,
);
