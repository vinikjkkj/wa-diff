__d(
  "useWAWebBizAdCreationBoostedComponentCreationSpec",
  [
    "WAWebBizAdCreationConfigContext",
    "WAWebBizAdCreationSpecContext",
    "convertWAWebSpecToLWIVariables",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useMemo;
    function d() {
      var e = o("react-compiler-runtime").c(6),
        t = u(r("WAWebBizAdCreationConfigContext")),
        n = u(r("WAWebBizAdCreationSpecContext")),
        a = n.currentValue,
        i;
      e: {
        if (t == null || a == null) {
          var l;
          (e[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = {
                creation_spec: {},
                flow_id: "",
                product: "BOOSTED_MESSAGE",
              }),
              (e[0] = l))
            : (l = e[0]),
            (i = l));
          break e;
        }
        var s = a,
          c;
        e[1] !== t.flowID ||
        e[2] !== t.pageID ||
        e[3] !== t.product ||
        e[4] !== s
          ? ((c = r("convertWAWebSpecToLWIVariables")(
              s,
              t.flowID,
              t.pageID,
              t.product,
            )),
            (e[1] = t.flowID),
            (e[2] = t.pageID),
            (e[3] = t.product),
            (e[4] = s),
            (e[5] = c))
          : (c = e[5]);
        var d = c;
        i = d.input;
      }
      return i;
    }
    l.default = d;
  },
  98,
);
