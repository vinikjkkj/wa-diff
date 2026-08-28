__d(
  "BillingWizardContext",
  [
    "BillingContextFactory",
    "BillingWizardGKConfig",
    "BillingWizardQEConfig",
    "RelayHooks",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = o("BillingContextFactory").buildBillingContextFactory(
        o("BillingWizardQEConfig").BillingWizardQEConfig,
        o("BillingWizardGKConfig").BillingWizardGKConfig,
      ),
      c = u.BillingContext,
      d = u.BillingContextProvider,
      m = u.useBillingGK,
      p = u.useBillingQE,
      _ = u.useBillingWizardApp,
      f = u.useBillingWizardEntryPoint,
      g = u.useBillingWizardProduct,
      h = u.useBillingWizardUpsells;
    function y(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.appType,
        r = e.billingEntryPoint,
        a = e.children,
        i = e.paymentAccountID,
        l = e.queryRef,
        u = o("RelayHooks").usePreloadedQuery(
          o("BillingContextFactory").BillingContextFactoryQuery,
          l,
        ),
        c;
      return (
        t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== u || t[4] !== i
          ? ((c = s.jsx(d, {
              appType: n,
              billingEntryPoint: r,
              fragment: u,
              paymentAccountID: i,
              children: a,
            })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a),
            (t[3] = u),
            (t[4] = i),
            (t[5] = c))
          : (c = t[5]),
        c
      );
    }
    ((l.BillingContext = c),
      (l.BillingContextProvider = d),
      (l.useBillingGK = m),
      (l.useBillingQE = p),
      (l.useBillingWizardApp = _),
      (l.useBillingWizardEntryPoint = f),
      (l.useBillingWizardProduct = g),
      (l.useBillingWizardUpsells = h),
      (l.BillingWizardContext = y));
  },
  98,
);
