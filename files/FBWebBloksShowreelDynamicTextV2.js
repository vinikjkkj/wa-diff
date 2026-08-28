__d(
  "FBWebBloksShowreelDynamicTextV2",
  [
    "WebBloksComponentContext",
    "WebBloksEnvironmentContext",
    "WebBloksStyle",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.node,
        r = o("WebBloksComponentContext").useWebBloksContext(),
        a = r.renderChildren,
        i = o("WebBloksEnvironmentContext").useDataBloksName(),
        l;
      t[0] !== i || t[1] !== n.styleId
        ? ((l = i(n.styleId)), (t[0] = i), (t[1] = n.styleId), (t[2] = l))
        : (l = t[2]);
      var u;
      t[3] !== n || t[4] !== a
        ? ((u = a(n.getChildren_DEPRECATED())),
          (t[3] = n),
          (t[4] = a),
          (t[5] = u))
        : (u = t[5]);
      var c;
      return (
        t[6] !== l || t[7] !== u
          ? ((c = s.jsx(
              "div",
              babelHelpers.extends({}, l, {
                className: o("WebBloksStyle").WebBloksStyles.container,
                children: u,
              }),
            )),
            (t[6] = l),
            (t[7] = u),
            (t[8] = c))
          : (c = t[8]),
        c
      );
    }
    l.default = u;
  },
  98,
);
