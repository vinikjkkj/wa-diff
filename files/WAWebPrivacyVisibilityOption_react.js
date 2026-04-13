__d(
  "WAWebPrivacyVisibilityOption.react",
  [
    "WAWebCheckBoxRound.react",
    "WAWebFlex.react",
    "WAWebTabOrder",
    "WAWebText.react",
    "WAWebUnstyledButton.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        visibilityOption: {
          display: "x1lliihq",
          width: "xh8yej3",
          boxSizing: "x9f619",
          paddingTop: "x1h678fw",
          paddingBottom: "xv6tirj",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          marginInlineStart: "x45gse5",
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          textAlign: "x1yc453h",
          ":hover_backgroundColor": "x1ubxc9n",
          $$css: !0,
        },
        paddingStart20: { paddingInlineStart: "x1phvje8", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(24),
        n = e.disabled,
        a = e.onClick,
        i = e.onDisabledClick,
        l = e.ref,
        c = e.selected,
        d = e.subText,
        m = e.testid,
        p = e.text,
        _;
      t[0] !== n || t[1] !== a || t[2] !== c
        ? ((_ = s.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            children: s.jsx(r("WAWebCheckBoxRound.react"), {
              checked: c,
              radio: !0,
              hover: !1,
              systemUncheckedColor: !0,
              disabled: n,
              onClick: a,
            }),
          })),
          (t[0] = n),
          (t[1] = a),
          (t[2] = c),
          (t[3] = _))
        : (_ = t[3]);
      var f;
      t[4] !== n
        ? ((f = {
            0: { className: "x1jchvi3 x1fc57z9 x1rg5ohu" },
            1: { className: "x1jchvi3 x1fc57z9 x1rg5ohu xbyyjgo" },
          }[(n === !0) << 0]),
          (t[4] = n),
          (t[5] = f))
        : (f = t[5]);
      var g;
      t[6] !== f || t[7] !== p
        ? ((g = s.jsx("span", babelHelpers.extends({}, f, { children: p }))),
          (t[6] = f),
          (t[7] = p),
          (t[8] = g))
        : (g = t[8]);
      var h;
      t[9] !== d
        ? ((h = s.jsx(o("WAWebText.react").WAWebTextSmall, { children: d })),
          (t[9] = d),
          (t[10] = h))
        : (h = t[10]);
      var y;
      t[11] !== g || t[12] !== h
        ? ((y = s.jsxs(o("WAWebFlex.react").FlexItem, {
            xstyle: u.paddingStart20,
            grow: 1,
            children: [g, h],
          })),
          (t[11] = g),
          (t[12] = h),
          (t[13] = y))
        : (y = t[13]);
      var C;
      t[14] !== _ || t[15] !== y
        ? ((C = s.jsxs(o("WAWebFlex.react").FlexRow, { children: [_, y] })),
          (t[14] = _),
          (t[15] = y),
          (t[16] = C))
        : (C = t[16]);
      var b;
      return (
        t[17] !== n ||
        t[18] !== a ||
        t[19] !== i ||
        t[20] !== l ||
        t[21] !== C ||
        t[22] !== m
          ? ((b = s.jsx(r("WAWebUnstyledButton.react"), {
              tabIndex: 0,
              dataTab: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
              ref: l,
              xstyle: u.visibilityOption,
              onClick: a,
              onDisabledClick: i,
              disabled: n,
              testid: void 0,
              children: C,
            })),
            (t[17] = n),
            (t[18] = a),
            (t[19] = i),
            (t[20] = l),
            (t[21] = C),
            (t[22] = m),
            (t[23] = b))
          : (b = t[23]),
        b
      );
    }
    l.default = c;
  },
  98,
);
