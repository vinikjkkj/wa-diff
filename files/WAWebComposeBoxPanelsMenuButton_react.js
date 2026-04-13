__d(
  "WAWebComposeBoxPanelsMenuButton.react",
  [
    "WAWebKeyboardHotKeys.react",
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = u.memo,
      m = { SQUARE24: "SQUARE24", SQUARE26: "SQUARE26" },
      p = {
        container: {
          position: "x10l6tqk",
          bottom: "x1vpptot",
          display: "x1lliihq",
          width: "x1pge628",
          color: "xhslqc4",
          borderStartStartRadius: "xr9e8f9",
          borderStartEndRadius: "x1e4oeot",
          borderEndEndRadius: "x1ui04y5",
          borderEndStartRadius: "x6en5u8",
          transform: "xoww4n8",
          $$css: !0,
        },
        containerActive: { color: "x1v5yvga", $$css: !0 },
        square26Svg: { width: "x23j0i4", height: "xd7y6wv", $$css: !0 },
        containerTop: { zIndex: "xhtitgo", $$css: !0 },
        containerPadding: {
          position: "x1n2onr6",
          bottom: "x1ey2m1c",
          display: "x78zum5",
          $$css: !0,
        },
        containerPaddingSquare24: { top: "x10br0o1", $$css: !0 },
        containerPaddingSquare26: { top: "xgu87t9", $$css: !0 },
      };
    function _(t) {
      var n = o("react-compiler-runtime").c(32),
        a,
        i,
        l,
        u,
        d,
        _,
        f,
        g;
      n[0] !== t
        ? ((d = t.ref),
          (u = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (l = function (t) {
            (t.stopPropagation(), t.preventDefault(), u.onClick());
          }),
          (i = function (t) {
            (t.stopPropagation(), t.preventDefault(), u.onClick());
          }),
          (a = o("WAWebKeyboardHotKeys.react").HotKeys),
          (_ = "button"),
          (f = u.tabIndex),
          (g = (s || (s = r("stylex")))(
            p.container,
            u.xstyle,
            u.isActive && p.containerActive,
            (u.isMain || u.singleButton) && p.containerTop,
            u.singleButton && p.containerPadding,
            u.size === m.SQUARE24
              ? p.containerPaddingSquare24
              : p.containerPaddingSquare26,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
          )),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = u),
          (n[5] = d),
          (n[6] = _),
          (n[7] = f),
          (n[8] = g))
        : ((a = n[1]),
          (i = n[2]),
          (l = n[3]),
          (u = n[4]),
          (d = n[5]),
          (_ = n[6]),
          (f = n[7]),
          (g = n[8]));
      var h = u["aria-label"],
        y = u["data-tab"],
        C = u.testid,
        b;
      n[9] !== l
        ? ((b = { enter: l, space: l }), (n[9] = l), (n[10] = b))
        : (b = n[10]);
      var v = u.style,
        S;
      n[11] !== u.size
        ? ((S = {
            0: {},
            1: { className: "xvijh9v x1mpyi22 x1ty9z65 xm2jcoa" },
          }[(u.size === m.SQUARE24) << 0]),
          (n[11] = u.size),
          (n[12] = S))
        : (S = n[12]);
      var R = u.size === m.SQUARE26 && p.square26Svg,
        L;
      n[13] !== u.Icon || n[14] !== R
        ? ((L = c.jsx(u.Icon, { iconXstyle: R })),
          (n[13] = u.Icon),
          (n[14] = R),
          (n[15] = L))
        : (L = n[15]);
      var E;
      n[16] !== L || n[17] !== S
        ? ((E = c.jsx("div", babelHelpers.extends({}, S, { children: L }))),
          (n[16] = L),
          (n[17] = S),
          (n[18] = E))
        : (E = n[18]);
      var k;
      return (
        n[19] !== a ||
        n[20] !== i ||
        n[21] !== u.style ||
        n[22] !== u.testid ||
        n[23] !== d ||
        n[24] !== _ ||
        n[25] !== E ||
        n[26] !== f ||
        n[27] !== g ||
        n[28] !== h ||
        n[29] !== y ||
        n[30] !== b
          ? ((k = c.jsx(a, {
              component: _,
              tabIndex: f,
              className: g,
              "aria-label": h,
              "data-tab": y,
              "data-testid": void 0,
              onClick: i,
              ref: d,
              handlers: b,
              style: v,
              children: E,
            })),
            (n[19] = a),
            (n[20] = i),
            (n[21] = u.style),
            (n[22] = u.testid),
            (n[23] = d),
            (n[24] = _),
            (n[25] = E),
            (n[26] = f),
            (n[27] = g),
            (n[28] = h),
            (n[29] = y),
            (n[30] = b),
            (n[31] = k))
          : (k = n[31]),
        k
      );
    }
    var f = d(_);
    ((l.SIZES = m), (l.PanelsMenuButton = f));
  },
  98,
);
