__d(
  "BillingPayNowLandingViewResources",
  [
    "BillingPayNowLandingViewResources_account.graphql",
    "JSResourceForInteraction",
    "RelayHooks",
    "deferredLoadComponent",
    "lazyLoadComponent",
    "react",
    "react-compiler-runtime",
    "requireDeferredForDisplay",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["account"],
      s = ["account"],
      u,
      c,
      d = c || (c = o("react")),
      m =
        u !== void 0
          ? u
          : (u = n("BillingPayNowLandingViewResources_account.graphql")),
      p = r("lazyLoadComponent")(
        r("JSResourceForInteraction")(
          "BillingPayNowLandingView.react",
        ).__setRef("BillingPayNowLandingViewResources"),
      ),
      _ = r("deferredLoadComponent")(
        r("requireDeferredForDisplay")(
          "BillingPayNowLandingViewLegacy.react",
        ).__setRef("BillingPayNowLandingViewResources"),
      );
    function f(t) {
      var n = o("react-compiler-runtime").c(6),
        r,
        a;
      n[0] !== t
        ? ((r = t.account),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a))
        : ((r = n[1]), (a = n[2]));
      var i = o("RelayHooks").useFragment(m, r),
        l;
      return (
        n[3] !== i || n[4] !== a
          ? ((l = d.jsx(p, babelHelpers.extends({}, a, { account: i }))),
            (n[3] = i),
            (n[4] = a),
            (n[5] = l))
          : (l = n[5]),
        l
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(6),
        n,
        r;
      t[0] !== e
        ? ((n = e.account),
          (r = babelHelpers.objectWithoutPropertiesLoose(e, s)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2]));
      var a = o("RelayHooks").useFragment(m, n),
        i;
      return (
        t[3] !== a || t[4] !== r
          ? ((i = d.jsx(_, babelHelpers.extends({}, r, { account: a }))),
            (t[3] = a),
            (t[4] = r),
            (t[5] = i))
          : (i = t[5]),
        i
      );
    }
    ((l.BillingPayNowLandingView = f), (l.BillingPayNowLandingViewLegacy = g));
  },
  98,
);
