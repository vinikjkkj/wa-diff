__d(
  "WAWebCheckBoxRound.react",
  [
    "WAWebCheckboxRoundCheckedIcon.react",
    "WAWebCheckboxRoundPassiveIcon.react",
    "WAWebCheckboxRoundRadioCheckedIcon.react",
    "WAWebCheckboxRoundUncheckedIcon.react",
    "WAWebFocusTracer",
    "WAWebVelocityTransitionGroup",
    "WDSFocusStateStyles",
    "react",
    "stylex",
    "useWAWebIsKeyboardUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useRef,
      _ = c.useState,
      f = {
        container: {
          position: "x1n2onr6",
          display: "x1rg5ohu",
          width: "xw4jnvo",
          height: "x1qx5ct2",
          verticalAlign: "xxymvpz",
          cursor: "x1ypdohk",
          transform: "x916qxe",
          $$css: !0,
        },
        disabledContainer: { cursor: "xt0e3qv", opacity: "xbyyjgo", $$css: !0 },
        roundIcon: {
          position: "x10l6tqk",
          top: "x13vifvy",
          insetInlineStart: "x1o0tod",
          width: "xh8yej3",
          height: "x5yr21d",
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          $$css: !0,
        },
        checkedSvgStyle: { color: "x1v5yvga", $$css: !0 },
        disabledCheckedSvgStyle: { color: "x18cpw0e", $$css: !0 },
        uncheckedSvgStyle: {
          fillOpacity: "xrmlzy3",
          transitionDuration: "x1g2r6go",
          transitionProperty: "x18sm2im",
          transitionTimingFunction: "xwji4o3",
          $$css: !0,
        },
        uncheckedSvgHoverStyle: { fillOpacity: "xlyfr8p", $$css: !0 },
        iconPathFillWhite: { color: "xzqyxu6", $$css: !0 },
        iconPathFillSecondary: { color: "xhslqc4", $$css: !0 },
      };
    function g(t) {
      var n = t.ariaLabel,
        a = t.checked,
        i = t.disabled,
        l = t.hover,
        s = t.onClick,
        c = t.radio,
        g = t.systemUncheckedColor,
        h = t.testid,
        y = p(null),
        C = p(!0),
        b = _(!1),
        v = b[0],
        S = b[1];
      m(
        function () {
          (C.current === !1 &&
            a === !0 &&
            r("WAWebFocusTracer").focus(y.current),
            (C.current = !1));
        },
        [a],
      );
      var R = function (t) {
          i !== !0 && (t && t.stopPropagation(), s());
        },
        L,
        E;
      a
        ? (c === !0
            ? (E = o(
                "WAWebCheckboxRoundRadioCheckedIcon.react",
              ).CheckboxRoundRadioCheckedIcon)
            : (E = o(
                "WAWebCheckboxRoundCheckedIcon.react",
              ).CheckboxRoundCheckedIcon),
          (L = "checked"))
        : ((L = "unchecked"),
          (E = l
            ? o("WAWebCheckboxRoundUncheckedIcon.react")
                .CheckboxRoundUncheckedIcon
            : o("WAWebCheckboxRoundPassiveIcon.react")
                .CheckboxRoundPassiveIcon));
      var k = a
          ? [f.checkedSvgStyle, i === !0 && f.disabledCheckedSvgStyle]
          : [
              f.uncheckedSvgStyle,
              g === !0 ? f.iconPathFillSecondary : f.iconPathFillWhite,
              v && g !== !0 && f.uncheckedSvgHoverStyle,
            ],
        I = d(function () {
          return S(!0);
        }, []),
        T = d(function () {
          return S(!1);
        }, []),
        D = r("useWAWebIsKeyboardUser")(),
        x = D.isKeyboardUser;
      return u.jsx(r("WAWebVelocityTransitionGroup"), {
        xstyle: [f.container, i === !0 && f.disabledContainer],
        transitionName: "pop",
        children: u.createElement(
          "button",
          babelHelpers.extends(
            { ref: y, role: c === !0 ? "radio" : "checkbox" },
            (e || (e = r("stylex"))).props(
              f.roundIcon,
              x && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            ),
            {
              "aria-checked": a,
              "aria-label": n || "",
              key: L,
              onClick: R,
              onMouseEnter: I,
              onFocus: I,
              onMouseLeave: T,
              onBlur: T,
              "data-testid": void 0,
            },
          ),
          u.jsx(E, { iconXstyle: k }),
        ),
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
