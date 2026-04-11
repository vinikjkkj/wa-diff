__d(
  "VideoPlayerSpinner.react",
  [
    "CometLightweightVideoAttachmentContext",
    "FDSLoadingAnimation.react",
    "gkx",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useDebouncedValue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useContext,
      d = 36,
      m = {
        spinner: {
          height: "xc9qbxq",
          insetInlineStart: "xbudbmw",
          opacity: "x1hc1fzr",
          position: "x10l6tqk",
          top: "xwa60dl",
          transform: "x11lhmoz",
          transitionDelay: "x5w5eug",
          transitionDuration: "x13dflua",
          transitionProperty: "x19991ni",
          transitionTimingFunction: "xl405pv",
          width: "x14qfxbe",
          $$css: !0,
        },
        spinnerHidden: {
          opacity: "xg01cxk",
          transitionDelay: "x2p8vrm",
          transitionDuration: "x13dflua",
          transitionProperty: "x1jl3cmp",
          transitionTimingFunction: "xl405pv",
          visibility: "xlshs6z",
          $$css: !0,
        },
        spinnerSnappier: { transitionDelay: "x2p8vrm", $$css: !0 },
        spinnerSnappierHidden: { transitionDelay: "x1ahifba", $$css: !0 },
      };
    function p(t) {
      var n = o("react-compiler-runtime").c(8),
        a = t.isVisible,
        i = r("useDebouncedValue")(a, a ? 200 : 500),
        l = c(r("CometLightweightVideoAttachmentContext")),
        s = l.isLightweightVideoAttachment,
        p;
      n[0] !== a
        ? ((p = (e || (e = r("stylex"))).props(
            m.spinner,
            r("gkx")("24333")
              ? [
                  m.spinnerSnappier,
                  !a && m.spinnerHidden,
                  !a && m.spinnerSnappierHidden,
                ]
              : [!a && m.spinnerHidden],
          )),
          (n[0] = a),
          (n[1] = p))
        : (p = n[1]);
      var _ = !i,
        f = s ? "media" : "default",
        g;
      n[2] !== _ || n[3] !== f
        ? ((g = u.jsx(r("FDSLoadingAnimation.react"), {
            animationPaused: _,
            color: f,
            size: d,
          })),
          (n[2] = _),
          (n[3] = f),
          (n[4] = g))
        : (g = n[4]);
      var h;
      return (
        n[5] !== p || n[6] !== g
          ? ((h = u.jsx("div", babelHelpers.extends({}, p, { children: g }))),
            (n[5] = p),
            (n[6] = g),
            (n[7] = h))
          : (h = n[7]),
        h
      );
    }
    l.default = p;
  },
  98,
);
