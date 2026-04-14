__d(
  "WAWebBizAdCreationPaymentRefetchContext",
  ["react"],
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
      var t = e.children,
        n = _(0),
        r = n[0],
        o = n[1],
        a = d(function () {
          o(function (e) {
            return e + 1;
          });
        }, []),
        i = p(
          function () {
            return { billingFetchKey: r, triggerBillingRefetch: a };
          },
          [r, a],
        );
      return s.jsx(g.Provider, { value: i, children: t });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return m(g);
    }
    ((l.WAWebBizAdCreationPaymentRefetchProvider = h),
      (l.useWAWebBizAdCreationPaymentRefetch = y));
  },
  98,
);
