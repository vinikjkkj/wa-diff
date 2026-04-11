__d(
  "WAWebBizAdCreationConfigContextProvider.react",
  ["WAWebBizAdCreationConfigContext", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.children,
        a = e.entryPoint,
        i = e.flow,
        l = e.flowID,
        u = e.pageID,
        c = e.product,
        d;
      t[0] !== a || t[1] !== i || t[2] !== l || t[3] !== u || t[4] !== c
        ? ((d = { entryPoint: a, flow: i, flowID: l, pageID: u, product: c }),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l),
          (t[3] = u),
          (t[4] = c),
          (t[5] = d))
        : (d = t[5]);
      var m = d,
        p;
      return (
        t[6] !== n || t[7] !== m
          ? ((p = s.jsx(r("WAWebBizAdCreationConfigContext").Provider, {
              value: m,
              children: n,
            })),
            (t[6] = n),
            (t[7] = m),
            (t[8] = p))
          : (p = t[8]),
        p
      );
    }
    l.default = c;
  },
  98,
);
