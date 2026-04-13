__d(
  "WAWebChatlistPanelDrawerButton.react",
  [
    "WAWebCellFrame.react",
    "WAWebFlex.react",
    "WAWebUnstyledButton.react",
    "WDSFocusStateStyles",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        wrapper: {
          flexShrink: "x2lah0s",
          marginTop: "xav9cv8",
          marginBottom: "x4tpdpg",
          marginInlineStart: "x1lziwak",
          marginInlineEnd: "x14z9mp",
          marginLeft: null,
          marginRight: null,
          $$css: !0,
        },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.ariaLabel,
        a = e.dataTab,
        i = e.dataTestId,
        l = e.detail,
        c = e.icon,
        d = e.onClick,
        m = e.primary,
        p;
      t[0] !== m
        ? ((p = s.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDeemphasized",
            children: m,
          })),
          (t[0] = m),
          (t[1] = p))
        : (p = t[1]);
      var _ = p,
        f;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = [
            u.wrapper,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
          ]),
          (t[2] = f))
        : (f = t[2]);
      var g;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = "x1ksvy6g x1009pqg xhslqc4"), (t[3] = g))
        : (g = t[3]);
      var h;
      t[4] !== c
        ? ((h = s.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            className: g,
            children: c,
          })),
          (t[4] = c),
          (t[5] = h))
        : (h = t[5]);
      var y;
      t[6] !== l || t[7] !== _ || t[8] !== h
        ? ((y = s.jsx(r("WAWebCellFrame.react"), {
            role: "group",
            ariaColIndex: null,
            image: h,
            primary: _,
            detail: l,
            theme: "archive-panel",
          })),
          (t[6] = l),
          (t[7] = _),
          (t[8] = h),
          (t[9] = y))
        : (y = t[9]);
      var C;
      return (
        t[10] !== n || t[11] !== a || t[12] !== i || t[13] !== d || t[14] !== y
          ? ((C = s.jsx(r("WAWebUnstyledButton.react"), {
              testid: void 0,
              dataTab: a,
              xstyle: f,
              onClick: d,
              "aria-label": n,
              children: y,
            })),
            (t[10] = n),
            (t[11] = a),
            (t[12] = i),
            (t[13] = d),
            (t[14] = y),
            (t[15] = C))
          : (C = t[15]),
        C
      );
    }
    l.default = c;
  },
  98,
);
