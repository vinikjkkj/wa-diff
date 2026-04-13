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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(32),
        a = t.ariaLabel,
        i = t.checked,
        l = t.disabled,
        s = t.hover,
        c = t.onClick,
        d = t.radio,
        g = t.systemUncheckedColor,
        h = t.testid,
        y = p(null),
        C = p(!0),
        b = _(!1),
        v = b[0],
        S = b[1],
        R,
        L;
      (n[0] !== i
        ? ((R = function () {
            (C.current === !1 &&
              i === !0 &&
              r("WAWebFocusTracer").focus(y.current),
              (C.current = !1));
          }),
          (L = [i]),
          (n[0] = i),
          (n[1] = R),
          (n[2] = L))
        : ((R = n[1]), (L = n[2])),
        m(R, L));
      var E;
      n[3] !== l || n[4] !== c
        ? ((E = function (t) {
            l !== !0 && (t && t.stopPropagation(), c());
          }),
          (n[3] = l),
          (n[4] = c),
          (n[5] = E))
        : (E = n[5]);
      var k = E,
        I,
        T;
      i
        ? (d === !0
            ? (T = o(
                "WAWebCheckboxRoundRadioCheckedIcon.react",
              ).CheckboxRoundRadioCheckedIcon)
            : (T = o(
                "WAWebCheckboxRoundCheckedIcon.react",
              ).CheckboxRoundCheckedIcon),
          (I = "checked"))
        : ((I = "unchecked"),
          (T = s
            ? o("WAWebCheckboxRoundUncheckedIcon.react")
                .CheckboxRoundUncheckedIcon
            : o("WAWebCheckboxRoundPassiveIcon.react")
                .CheckboxRoundPassiveIcon));
      var D;
      n[6] !== i || n[7] !== l || n[8] !== v || n[9] !== g
        ? ((D = i
            ? [f.checkedSvgStyle, l === !0 && f.disabledCheckedSvgStyle]
            : [
                f.uncheckedSvgStyle,
                g === !0 ? f.iconPathFillSecondary : f.iconPathFillWhite,
                v && g !== !0 && f.uncheckedSvgHoverStyle,
              ]),
          (n[6] = i),
          (n[7] = l),
          (n[8] = v),
          (n[9] = g),
          (n[10] = D))
        : (D = n[10]);
      var x = D,
        $;
      n[11] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = function () {
            return S(!0);
          }),
          (n[11] = $))
        : ($ = n[11]);
      var P = $,
        N;
      n[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = function () {
            return S(!1);
          }),
          (n[12] = N))
        : (N = n[12]);
      var M = N,
        w = r("useWAWebIsKeyboardUser")(),
        A = w.isKeyboardUser,
        F = l === !0 && f.disabledContainer,
        O;
      n[13] !== F
        ? ((O = [f.container, F]), (n[13] = F), (n[14] = O))
        : (O = n[14]);
      var B = d === !0 ? "radio" : "checkbox",
        W;
      n[15] !== A
        ? ((W = (e || (e = r("stylex"))).props(
            f.roundIcon,
            A && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
          )),
          (n[15] = A),
          (n[16] = W))
        : (W = n[16]);
      var q = a || "",
        U;
      n[17] !== T || n[18] !== x
        ? ((U = u.jsx(T, { iconXstyle: x })),
          (n[17] = T),
          (n[18] = x),
          (n[19] = U))
        : (U = n[19]);
      var V;
      n[20] !== i ||
      n[21] !== k ||
      n[22] !== I ||
      n[23] !== W ||
      n[24] !== q ||
      n[25] !== U ||
      n[26] !== B ||
      n[27] !== h
        ? ((V = u.createElement(
            "button",
            babelHelpers.extends({ ref: y, role: B }, W, {
              "aria-checked": i,
              "aria-label": q,
              key: I,
              onClick: k,
              onMouseEnter: P,
              onFocus: P,
              onMouseLeave: M,
              onBlur: M,
              "data-testid": void 0,
            }),
            U,
          )),
          (n[20] = i),
          (n[21] = k),
          (n[22] = I),
          (n[23] = W),
          (n[24] = q),
          (n[25] = U),
          (n[26] = B),
          (n[27] = h),
          (n[28] = V))
        : (V = n[28]);
      var H;
      return (
        n[29] !== V || n[30] !== O
          ? ((H = u.jsx(r("WAWebVelocityTransitionGroup"), {
              xstyle: O,
              transitionName: "pop",
              children: V,
            })),
            (n[29] = V),
            (n[30] = O),
            (n[31] = H))
          : (H = n[31]),
        H
      );
    }
    l.default = g;
  },
  98,
);
