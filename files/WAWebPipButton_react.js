__d(
  "WAWebPipButton.react",
  [
    "fbt",
    "WAWebVideoPipIcon.react",
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = { PLAYER: "PLAYER", PREVIEW: "PREVIEW" },
      m = {
        pipBtn: {
          position: "x10l6tqk",
          zIndex: "x11uqc5h",
          cursor: "x1ypdohk",
          background: "x11g6tue",
          borderTopWidth: "x972fbf",
          borderInlineEndWidth: "x10w94by",
          borderBottomWidth: "x1qhh985",
          borderInlineStartWidth: "x14e42zd",
          borderTopStyle: "x1ejq31n",
          borderInlineEndStyle: "x18oe1m7",
          borderBottomStyle: "x1sy0etr",
          borderInlineStartStyle: "xstzfhl",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          $$css: !0,
        },
        player: { top: "xfr5jun", insetInlineEnd: "x12em2mw", $$css: !0 },
        preview: { top: "x1atx4j1", insetInlineStart: "x5tdj20", $$css: !0 },
      };
    function p(t) {
      var n = o("react-compiler-runtime").c(10),
        a = t.onBlur,
        i = t.onClick,
        l = t.onFocus,
        u = t.ref,
        p = t.theme,
        f;
      n[0] !== p
        ? ((f = (e || (e = r("stylex"))).props(
            m.pipBtn,
            p === d.PLAYER && m.player,
            p === d.PREVIEW && m.preview,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
          )),
          (n[0] = p),
          (n[1] = f))
        : (f = n[1]);
      var g, h;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Picture-in-picture mode")),
          (h = c.jsx(o("WAWebVideoPipIcon.react").VideoPipIcon, {})),
          (n[2] = g),
          (n[3] = h))
        : ((g = n[2]), (h = n[3]));
      var y;
      return (
        n[4] !== a || n[5] !== i || n[6] !== l || n[7] !== u || n[8] !== f
          ? ((y = c.jsx(
              "button",
              babelHelpers.extends({ ref: u }, f, {
                onBlur: a,
                onClick: i,
                onFocus: l,
                onKeyDown: _,
                "aria-label": g,
                children: h,
              }),
            )),
            (n[4] = a),
            (n[5] = i),
            (n[6] = l),
            (n[7] = u),
            (n[8] = f),
            (n[9] = y))
          : (y = n[9]),
        y
      );
    }
    function _(e) {
      (e.key === "Enter" || e.key === " ") && e.stopPropagation();
    }
    ((l.PIP_BUTTON_THEME = d), (l.PiPButton = p));
  },
  226,
);
