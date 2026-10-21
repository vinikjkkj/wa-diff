__d(
  "WebBloksCDSBottomSheetWrapper",
  [
    "WebBloksCDSWrapperImpl.react",
    "WebBloksComponentContext",
    "WebBloksModel",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      c = o("WebBloksModel").defineWebBloksAttributeKey("("),
      d = o("WebBloksModel").defineWebBloksAttributeKey("-"),
      m = o("WebBloksModel").defineWebBloksAttributeKey("+"),
      p = o("WebBloksModel").defineWebBloksAttributeKey("0");
    function _(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.node,
        a = n.get(u),
        i = n.get(c),
        l = n.get(d),
        _ = o("WebBloksComponentContext").useWebBloksContext(),
        f = _.renderNode,
        g;
      t[0] !== n ? ((g = n.get(m)), (t[0] = n), (t[1] = g)) : (g = t[1]);
      var h = g,
        y = r("WebBloksCDSWrapperImpl.react"),
        C = f(a),
        b = i != null ? f(i) : null,
        v;
      t[2] !== n ? ((v = n.get(p)), (t[2] = n), (t[3] = v)) : (v = t[3]);
      var S = l != null ? f(l) : null,
        R;
      return (
        t[4] !== y ||
        t[5] !== C ||
        t[6] !== b ||
        t[7] !== v ||
        t[8] !== S ||
        t[9] !== h
          ? ((R = s.jsx(y, {
              backgroundOverlayColor: h,
              content: C,
              header: b,
              minHeight: v,
              topBanner: S,
              shouldRenderGradient: !1,
            })),
            (t[4] = y),
            (t[5] = C),
            (t[6] = b),
            (t[7] = v),
            (t[8] = S),
            (t[9] = h),
            (t[10] = R))
          : (R = t[10]),
        R
      );
    }
    l.default = _;
  },
  98,
);
