__d(
  "WDSMenuBarItemWithWDSMenu.react",
  [
    "WDSButton.react",
    "WDSTooltip.react",
    "react",
    "stylex",
    "useMergeRefs",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u,
      c,
      d = c || (c = o("react")),
      m = s || (s = r("react")),
      p = d.useCallback,
      _ = d.useImperativeHandle,
      f = d.useRef;
    function g(t) {
      var n = t.ref,
        o = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = o.buttonSize,
        i = a === void 0 ? "medium" : a,
        l = o.buttonType,
        s = l === void 0 ? "default" : l,
        c = o.buttonVariant,
        d = c === void 0 ? "borderless" : c,
        g = o.disabled,
        h = g === void 0 ? !1 : g,
        y = o.icon,
        C = o.imperativeRef,
        b = o.keyboardShortcutAction,
        v = o.label,
        S = o.marginInlineXstyle,
        R = o.menuAlign,
        L = o.menuEnableUim,
        E = o.menuIsContainer,
        k = o.menuPosition,
        I = o.onClick,
        T = o.tabOrder,
        D = o.testid,
        x = o.title,
        $ = o.wdsMenuToRender,
        P = f(null),
        N = r("useMergeRefs")(n, P),
        M = r("useWDSMenu")({
          targetRef: P,
          menu: $,
          dismissable: !0,
          align: R,
          position: k,
          enableUIM: L != null ? L : !0,
          isContainer: E != null ? E : !1,
        }),
        w = M.closeMenu,
        A = M.isMenuOpen,
        F = M.menuPortal,
        O = M.openMenu,
        B = p(
          function () {
            A ? w() : O();
          },
          [A, w, O],
        ),
        W = function (t) {
          (B(), I && I(t));
        };
      _(C, function () {
        return {
          open: function () {
            O();
          },
        };
      });
      var q = m.jsx(r("WDSButton.react"), {
        type: s,
        variant: d,
        size: i,
        directional: !0,
        Icon: y,
        label: v,
        "aria-label": x,
        "aria-haspopup": "menu",
        "aria-expanded": A,
        onPress: W,
        ref: N,
        disabled: h,
        testid: void 0,
        tabOrder: T,
      });
      return m.jsxs(
        "div",
        babelHelpers.extends({}, (u || (u = r("stylex"))).props(S), {
          children: [
            m.jsx(r("WDSTooltip.react"), {
              label: x,
              shortcut: b,
              disabled: A,
              children: q,
            }),
            F,
          ],
        }),
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
