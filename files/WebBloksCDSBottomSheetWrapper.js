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
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.node,
        a = n.get("content"),
        i = n.get("header"),
        l = n.get("top_banner"),
        u = o("WebBloksComponentContext").useWebBloksContext(),
        c = u.renderNode,
        d;
      t[0] !== n
        ? ((d = n.get("web_background_overlay_color")), (t[0] = n), (t[1] = d))
        : (d = t[1]);
      var m = d,
        p = r("WebBloksCDSWrapperImpl.react"),
        _ = c(a),
        f = i != null ? c(i) : null,
        g = l != null ? c(l) : null,
        h;
      return (
        t[2] !== p || t[3] !== _ || t[4] !== f || t[5] !== g || t[6] !== m
          ? ((h = s.jsx(p, {
              backgroundOverlayColor: m,
              content: _,
              header: f,
              topBanner: g,
              shouldRenderGradient: !1,
            })),
            (t[2] = p),
            (t[3] = _),
            (t[4] = f),
            (t[5] = g),
            (t[6] = m),
            (t[7] = h))
          : (h = t[7]),
        h
      );
    }
    l.default = u;
  },
  98,
);
