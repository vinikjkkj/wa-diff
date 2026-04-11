__d(
  "useWAWebBizAdCreationMaybeOpenBillingWizard",
  [
    "CometRelay",
    "WAWebBizAdCreationCurrencyUtils",
    "WAWebBizAdCreationPaymentRefetchContext",
    "WAWebBizAdCreationSpecContext",
    "react",
    "react-compiler-runtime",
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
        c,
        m,
        g,
        h,
        y,
        C,
        b = o("react-compiler-runtime").c(8),
        v = p(!1),
        S = v[0],
        R = v[1],
        L = d(r("WAWebBizAdCreationSpecContext")),
        E =
          (n =
            (a = L.currentValue.adAccountData) == null
              ? void 0
              : a.paymentAccountID) != null
            ? n
            : "",
        k =
          (i = (l = L.currentValue.budgetData) == null ? void 0 : l.budget) !=
          null
            ? i
            : 0,
        I =
          (s =
            (u = L.currentValue.adAccountData) == null ? void 0 : u.currency) !=
          null
            ? s
            : "USD",
        T =
          (c =
            (m = L.currentValue.durationData) == null
              ? void 0
              : m.durationInDays) != null
            ? c
            : 1,
        D = f(k, T, I),
        x = o(
          "WAWebBizAdCreationPaymentRefetchContext",
        ).useWAWebBizAdCreationPaymentRefetch(),
        $ = x.billingFetchKey,
        P = o("CometRelay").useLazyLoadQuery(
          _,
          { asset_id: E, budget: D },
          { fetchKey: $, fetchPolicy: "store-and-network" },
        ),
        N =
          P == null ||
          (g = P.billable_account_by_asset_id) == null ||
          (g = g.billing_info) == null
            ? void 0
            : g.required_action,
        M = N == null || (h = N.action) == null ? void 0 : h.wizard_name,
        w =
          (y =
            N == null || (C = N.action) == null
              ? void 0
              : C.wizard_props_json) != null
            ? y
            : null,
        A = r("useWAWebBizAdCreationOpenBillingWizard")(t),
        F;
      b[0] !== A || b[1] !== e || b[2] !== M || b[3] !== w
        ? ((F = function () {
            if (M == null) {
              e.onComplete();
              return;
            }
            (R(!0),
              e.onWizardOpen == null || e.onWizardOpen(),
              A(
                { label: null, wizardName: M, wizardPropsJSON: w },
                function (t) {
                  (R(!1),
                    t === "complete"
                      ? e.onComplete()
                      : e.onWizardClose == null || e.onWizardClose());
                },
                function () {
                  R(!1);
                },
              ));
          }),
          (b[0] = A),
          (b[1] = e),
          (b[2] = M),
          (b[3] = w),
          (b[4] = F))
        : (F = b[4]);
      var O = F,
        B;
      return (
        b[5] !== S || b[6] !== O
          ? ((B = { isLoading: S, maybeLaunchBillingWizard: O }),
            (b[5] = S),
            (b[6] = O),
            (b[7] = B))
          : (B = b[7]),
        B
      );
    }
    l.default = g;
  },
  98,
);
