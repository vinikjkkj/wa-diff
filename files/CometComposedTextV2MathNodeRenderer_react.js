__d(
  "CometComposedTextV2MathNodeRenderer.react",
  [
    "CometComposedTextV2RootNode.react",
    "MLCKatexRenderer.react",
    "emptyFunction",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.node,
        a;
      t[0] !== n ? ((a = n.getState()), (t[0] = n), (t[1] = a)) : (a = t[1]);
      var i = a,
        l = i.expression,
        u;
      t[2] !== n ? ((u = n.getParent()), (t[2] = n), (t[3] = u)) : (u = t[3]);
      var c = !(
          u instanceof
          o("CometComposedTextV2RootNode.react").CometComposedTextV2RootNode
        ),
        d;
      return (
        t[4] !== l || t[5] !== c
          ? ((d = s.jsx(r("MLCKatexRenderer.react"), {
              equation: l,
              inline: c,
              onClick: r("emptyFunction"),
            })),
            (t[4] = l),
            (t[5] = c),
            (t[6] = d))
          : (d = t[6]),
        d
      );
    }
    l.default = u;
  },
  98,
);
