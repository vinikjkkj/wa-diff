__d(
  "BillingWizardXMDSDialogWrapperContext",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useMemo,
      m = u.useState,
      p = s.createContext({
        dialogFooterProps: null,
        dialogHeaderProps: null,
        setDialogFooterProps: function () {},
        setDialogHeaderProps: function () {},
      });
    function _() {
      return c(p);
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.children,
        r = m(null),
        a = r[0],
        i = r[1],
        l = m(null),
        u = l[0],
        c = l[1],
        d;
      t[0] !== a || t[1] !== u
        ? ((d = {
            dialogFooterProps: a,
            dialogHeaderProps: u,
            setDialogFooterProps: i,
            setDialogHeaderProps: c,
          }),
          (t[0] = a),
          (t[1] = u),
          (t[2] = d))
        : (d = t[2]);
      var _ = d,
        f;
      return (
        t[3] !== n || t[4] !== _
          ? ((f = s.jsx(p.Provider, { value: _, children: n })),
            (t[3] = n),
            (t[4] = _),
            (t[5] = f))
          : (f = t[5]),
        f
      );
    }
    ((l.BillingWizardXMDSDialogWrapperContext = p),
      (l.useBillingWizardXMDSDialogWrapperContext = _),
      (l.BillingWizardXMDSDialogWrapperContextProvider = f));
  },
  98,
);
