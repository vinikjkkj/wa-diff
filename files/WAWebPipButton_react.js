__d(
  "WAWebPipButton.react",
  ["fbt", "WAWebVideoPipIcon.react", "WDSFocusStateStyles", "react", "stylex"],
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
      var n = t.onBlur,
        a = t.onClick,
        i = t.onFocus,
        l = t.ref,
        u = t.theme;
      return c.jsx(
        "button",
        babelHelpers.extends(
          { ref: l },
          (e || (e = r("stylex"))).props(
            m.pipBtn,
            u === d.PLAYER && m.player,
            u === d.PREVIEW && m.preview,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
          ),
          {
            onBlur: n,
            onClick: a,
            onFocus: i,
            onKeyDown: function (t) {
              (t.key === "Enter" || t.key === " ") && t.stopPropagation();
            },
            "aria-label": s._(/*BTDS*/ "Picture-in-picture mode"),
            children: c.jsx(o("WAWebVideoPipIcon.react").VideoPipIcon, {}),
          },
        ),
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.PIP_BUTTON_THEME = d),
      (l.PiPButton = p));
  },
  226,
);
