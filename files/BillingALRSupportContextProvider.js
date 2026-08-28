__d(
  "BillingALRSupportContextProvider",
  ["BillingALRSupportContext", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.children,
        a = e.entrypoint,
        i = e.platform,
        l;
      t[0] !== a || t[1] !== i
        ? ((l = { entrypoint: a, platform: i }),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l))
        : (l = t[2]);
      var u = l,
        c;
      return (
        t[3] !== u || t[4] !== n
          ? ((c = s.jsx(r("BillingALRSupportContext").Provider, {
              value: u,
              children: n,
            })),
            (t[3] = u),
            (t[4] = n),
            (t[5] = c))
          : (c = t[5]),
        c
      );
    }
    l.default = c;
  },
  98,
);
