__d(
  "WAWebBizAdCreationConfigContextProvider.react",
  ["WAWebBizAdCreationConfigContext", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t = e.children,
        n = e.entryPoint,
        o = e.flow,
        a = e.flowID,
        i = e.pageID,
        l = e.product,
        c = u(
          function () {
            return { entryPoint: n, flow: o, flowID: a, pageID: i, product: l };
          },
          [n, o, a, i, l],
        );
      return s.jsx(r("WAWebBizAdCreationConfigContext").Provider, {
        value: c,
        children: t,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
