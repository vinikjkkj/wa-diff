__d(
  "WAWebBizAdCreationPaymentRefetchContext",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useCallback,
      m = u.useContext,
      p = u.useMemo,
      _ = u.useState,
      f = { billingFetchKey: 0, triggerBillingRefetch: function () {} },
      g = c(f);
    function h(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.children,
        r = _(0),
        a = r[0],
        i = r[1],
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function () {
            i(y);
          }),
          (t[0] = l))
        : (l = t[0]);
      var u = l,
        c;
      t[1] !== a
        ? ((c = { billingFetchKey: a, triggerBillingRefetch: u }),
          (t[1] = a),
          (t[2] = c))
        : (c = t[2]);
      var d = c,
        m;
      return (
        t[3] !== n || t[4] !== d
          ? ((m = s.jsx(g.Provider, { value: d, children: n })),
            (t[3] = n),
            (t[4] = d),
            (t[5] = m))
          : (m = t[5]),
        m
      );
    }
    function y(e) {
      return e + 1;
    }
    function C() {
      return m(g);
    }
    ((l.WAWebBizAdCreationPaymentRefetchProvider = h),
      (l.useWAWebBizAdCreationPaymentRefetch = C));
  },
  98,
);
