__d(
  "WebBloksCDSModalContainer",
  [
    "WebBloksCDSBottomSheetContainer.react",
    "WebBloksCDSScreenModeContext.react",
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
      var t,
        n = o("react-compiler-runtime").c(13),
        a = e.children,
        i = e.containerConfig,
        l = o("WebBloksComponentContext").useWebBloksContext(),
        u = l.bloksContext,
        c = l.renderNode,
        d = i.backgroundOverlayColor,
        m = i.navbar,
        p = (t = i.mode) != null ? t : "full_sheet",
        _;
      n[0] !== m || n[1] !== c
        ? ((_ = m != null ? c(m) : null), (n[0] = m), (n[1] = c), (n[2] = _))
        : (_ = n[2]);
      var f = _,
        g = [
          "half_sheet",
          "flexible_sheet",
          "auto_sheet",
          "full_sheet",
        ].includes(p),
        h;
      n[3] !== d || n[4] !== a || n[5] !== f
        ? ((h = s.jsx(r("WebBloksCDSWrapperImpl.react"), {
            backgroundOverlayColor: d,
            header: f,
            content: a,
            shouldRenderGradient: !1,
          })),
          (n[3] = d),
          (n[4] = a),
          (n[5] = f),
          (n[6] = h))
        : (h = n[6]);
      var y = h;
      if (g) {
        var C;
        n[7] !== u || n[8] !== y
          ? ((C = s.jsx(r("WebBloksCDSBottomSheetContainer.react"), {
              context: u,
              children: y,
            })),
            (n[7] = u),
            (n[8] = y),
            (n[9] = C))
          : (C = n[9]);
        var b;
        (n[10] !== p || n[11] !== C
          ? ((b = s.jsx(r("WebBloksCDSScreenModeContext.react").Provider, {
              value: p,
              children: C,
            })),
            (n[10] = p),
            (n[11] = C),
            (n[12] = b))
          : (b = n[12]),
          (y = b));
      }
      return y;
    }
    l.default = u;
  },
  98,
);
