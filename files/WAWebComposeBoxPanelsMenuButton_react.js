__d(
  "WAWebComposeBoxPanelsMenuButton.react",
  ["WAWebKeyboardHotKeys.react", "WDSFocusStateStyles", "react", "stylex"],
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
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = function (t) {
          (t.stopPropagation(), t.preventDefault(), a.onClick());
        },
        l = function (t) {
          (t.stopPropagation(), t.preventDefault(), a.onClick());
        };
      return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        component: "button",
        tabIndex: a.tabIndex,
        className: (s || (s = r("stylex")))(
          p.container,
          a.xstyle,
          a.isActive && p.containerActive,
          (a.isMain || a.singleButton) && p.containerTop,
          a.singleButton && p.containerPadding,
          a.size === m.SQUARE24
            ? p.containerPaddingSquare24
            : p.containerPaddingSquare26,
          o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
        ),
        "aria-label": a["aria-label"],
        "data-tab": a["data-tab"],
        "data-testid": void 0,
        onClick: l,
        ref: n,
        handlers: { enter: i, space: i },
        style: a.style,
        children: c.jsx(
          "div",
          babelHelpers.extends(
            {},
            { 0: {}, 1: { className: "xvijh9v x1mpyi22 x1ty9z65 xm2jcoa" } }[
              (a.size === m.SQUARE24) << 0
            ],
            {
              children: c.jsx(a.Icon, {
                iconXstyle: a.size === m.SQUARE26 && p.square26Svg,
              }),
            },
          ),
        ),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    var f = d(_);
    ((l.SIZES = m), (l.PanelsMenuButton = f));
  },
  98,
);
