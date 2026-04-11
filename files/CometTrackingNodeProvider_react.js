__d(
  "CometTrackingNodeProvider.react",
  [
    "CometTrackingNodeAbstractViewHierarchyWrapperContext",
    "CometTrackingNodesContext",
    "encodeTrackingNode",
    "react",
    "react-compiler-runtime",
    "useCometTrackingNodes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useMemo;
    function m(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.children,
        a = e.index,
        i = e.trackingNode,
        l = r("useCometTrackingNodes")(),
        u;
      e: {
        if (i == null) {
          u = l;
          break e;
        }
        var d;
        t[0] !== a || t[1] !== i
          ? ((d = r("encodeTrackingNode")(i, a)),
            (t[0] = a),
            (t[1] = i),
            (t[2] = d))
          : (d = t[2]);
        var m = d,
          p;
        (t[3] !== l || t[4] !== m
          ? ((p = [m].concat(l)), (t[3] = l), (t[4] = m), (t[5] = p))
          : (p = t[5]),
          (u = p));
      }
      var _ = u,
        f = n,
        g = c(r("CometTrackingNodeAbstractViewHierarchyWrapperContext"));
      if (g != null) {
        var h;
        (t[6] !== g || t[7] !== n || t[8] !== _
          ? ((h = g(_, n)), (t[6] = g), (t[7] = n), (t[8] = _), (t[9] = h))
          : (h = t[9]),
          (f = h));
      }
      var y;
      return (
        t[10] !== f || t[11] !== _
          ? ((y = s.jsx(r("CometTrackingNodesContext").Provider, {
              value: _,
              children: f,
            })),
            (t[10] = f),
            (t[11] = _),
            (t[12] = y))
          : (y = t[12]),
        y
      );
    }
    l.default = m;
  },
  98,
);
