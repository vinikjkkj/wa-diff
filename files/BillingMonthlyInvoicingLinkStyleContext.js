__d(
  "BillingMonthlyInvoicingLinkStyleContext",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = u.useMemo,
      p = c(null);
    function _() {
      return d(p);
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = { emphasized: !1 }), (t[0] = r))
        : (r = t[0]);
      var a = r,
        i;
      return (
        t[1] !== n
          ? ((i = s.jsx(p.Provider, { value: a, children: n })),
            (t[1] = n),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    ((l.useBillingMonthlyInvoicingLinkStyle = _),
      (l.BillingMonthlyInvoicingDeemphasizedLinkStyleProvider = f));
  },
  98,
);
