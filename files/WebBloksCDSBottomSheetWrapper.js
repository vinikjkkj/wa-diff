__d(
  "WebBloksCDSBottomSheetWrapper",
  [
    "WebBloksCDSWrapperImpl.react",
    "WebBloksComponentContext",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = "$",
      c = "(",
      d = "-",
      m = "+";
    function p(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.node,
        a = n.get(u),
        i = n.get(c),
        l = n.get(d),
        p = o("WebBloksComponentContext").useWebBloksContext(),
        _ = p.renderNode,
        f;
      t[0] !== n ? ((f = n.get(m)), (t[0] = n), (t[1] = f)) : (f = t[1]);
      var g = f,
        h = r("WebBloksCDSWrapperImpl.react"),
        y = _(a),
        C = i != null ? _(i) : null,
        b = l != null ? _(l) : null,
        v;
      return (
        t[2] !== h || t[3] !== y || t[4] !== C || t[5] !== b || t[6] !== g
          ? ((v = s.jsx(h, {
              backgroundOverlayColor: g,
              content: y,
              header: C,
              topBanner: b,
              shouldRenderGradient: !1,
            })),
            (t[2] = h),
            (t[3] = y),
            (t[4] = C),
            (t[5] = b),
            (t[6] = g),
            (t[7] = v))
          : (v = t[7]),
        v
      );
    }
    l.default = p;
  },
  98,
);
