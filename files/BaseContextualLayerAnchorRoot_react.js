__d(
  "BaseContextualLayerAnchorRoot.react",
  [
    "BaseContextualLayerAnchorRootContext",
    "BaseDOMContainer.react",
    "ExecutionEnvironment",
    "react",
    "react-compiler-runtime",
    "useStable",
    "useUnsafeRef_DEPRECATED",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = o("react-compiler-runtime").c(8),
        a = t.children,
        i = r("useStable")(m),
        l = (e || (e = r("useUnsafeRef_DEPRECATED")))(i),
        s;
      n[0] !== l || n[1] !== a
        ? ((s = c.jsx(r("BaseContextualLayerAnchorRootContext").Provider, {
            value: l,
            children: a,
          })),
          (n[0] = l),
          (n[1] = a),
          (n[2] = s))
        : (s = n[2]);
      var u;
      n[3] !== i
        ? ((u = c.jsx(r("BaseDOMContainer.react"), { node: i })),
          (n[3] = i),
          (n[4] = u))
        : (u = n[4]);
      var d;
      return (
        n[5] !== s || n[6] !== u
          ? ((d = c.jsxs(c.Fragment, { children: [s, u] })),
            (n[5] = s),
            (n[6] = u),
            (n[7] = d))
          : (d = n[7]),
        d
      );
    }
    function m() {
      return (s || (s = r("ExecutionEnvironment"))).canUseDOM
        ? document.createElement("div")
        : null;
    }
    l.default = d;
  },
  98,
);
