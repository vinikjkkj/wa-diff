__d(
  "WAWebPasswordInput.react",
  [
    "cx",
    "fbt",
    "WAWebClassnames",
    "WAWebUISpacing",
    "WDSButton.react",
    "WDSIconIcVisibility.react",
    "WDSIconIcVisibilityOff.react",
    "react",
    "react-compiler-runtime",
    "react-gui-use-focus",
    "stylex",
    "useMergeRefs",
    "useWAWebToggle",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e = ["ref"],
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useEffect,
      f = p.useRef,
      g = p.useState,
      h = {
        inputField: {
          fontSize: "x1jchvi3",
          color: "x14ug900",
          flexGrow: "x1iyjqo2",
          borderTopWidth: "xsl91qr",
          borderInlineEndWidth: "x1aq9cx1",
          borderBottomWidth: "xe0m388",
          borderInlineStartWidth: "xhe8bae",
          borderTopStyle: "xe73qa2",
          borderInlineEndStyle: "xsgwwv8",
          borderBottomStyle: "xuhg6hn",
          borderInlineStartStyle: "xli3dgm",
          borderTopColor: "x1isl193",
          borderInlineEndColor: "x1e225iy",
          borderBottomColor: "x1bnlyaz",
          borderInlineStartColor: "x12ws5rt",
          outline: "x1a2a7pz",
          backgroundColor: "xk7ee7b",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        inputFieldAppLockUpsell: { backgroundColor: "x16w0wmm", $$css: !0 },
        accentIconColor: { color: "x1v5yvga", $$css: !0 },
      };
    function y(e) {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] !== e.iconXstyle
        ? ((n = [e.iconXstyle, h.accentIconColor]),
          (t[0] = e.iconXstyle),
          (t[1] = n))
        : (n = t[1]);
      var a;
      return (
        t[2] !== e || t[3] !== n
          ? ((a = m.jsx(
              r("WDSIconIcVisibility.react"),
              babelHelpers.extends({}, e, { iconXstyle: n }),
            )),
            (t[2] = e),
            (t[3] = n),
            (t[4] = a))
          : (a = t[4]),
        a
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] !== e.iconXstyle
        ? ((n = [e.iconXstyle, h.accentIconColor]),
          (t[0] = e.iconXstyle),
          (t[1] = n))
        : (n = t[1]);
      var a;
      return (
        t[2] !== e || t[3] !== n
          ? ((a = m.jsx(
              r("WDSIconIcVisibilityOff.react"),
              babelHelpers.extends({}, e, { iconXstyle: n }),
            )),
            (t[2] = e),
            (t[3] = n),
            (t[4] = a))
          : (a = t[4]),
        a
      );
    }
    function b(t) {
      var n = o("react-compiler-runtime").c(35),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        s = l.enableShowPassword,
        d = l.focusOnMount,
        p = l.showByDefault,
        b = s === void 0 ? !1 : s,
        v = d === void 0 ? !1 : d,
        S = p === void 0 ? !1 : p,
        R = r("useWAWebToggle")(S),
        L = R[0],
        E = R[1],
        k = f(null),
        I = g(!1),
        T = I[0],
        D = I[1],
        x;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = { onFocusChange: D }), (n[3] = x))
        : (x = n[3]);
      var $ = o("react-gui-use-focus").useFocus(x),
        P = r("useMergeRefs")(k, $, i),
        N,
        M;
      (n[4] !== v
        ? ((N = function () {
            if (v) {
              var e;
              (e = k.current) == null || e.focus();
            }
          }),
          (M = [v]),
          (n[4] = v),
          (n[5] = N),
          (n[6] = M))
        : ((N = n[5]), (M = n[6])),
        _(N, M));
      var w = L ? y : C,
        A;
      n[7] !== L
        ? ((A = L ? u._(/*BTDS*/ "Hide") : u._(/*BTDS*/ "Show")),
          (n[7] = L),
          (n[8] = A))
        : (A = n[8]);
      var F = A,
        O;
      n[9] !== T
        ? ((O = {
            0: {
              className:
                "x1n2onr6 x78zum5 xk7ee7b xt7fyls xso031l x1q0q8m5 x16pkwpw x1j85h84",
            },
            1: {
              className:
                "x1n2onr6 x78zum5 xk7ee7b xt7fyls xv7zg05 x1q0q8m5 x1rrvw3c x18d9i69",
            },
          }[!!T << 0]),
          (n[9] = T),
          (n[10] = O))
        : (O = n[10]);
      var B;
      n[11] !== a.appLockUpsellEnabled
        ? ((B = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "_aupe",
            a.appLockUpsellEnabled === !0
              ? (c || (c = r("stylex")))(
                  h.inputField,
                  h.inputFieldAppLockUpsell,
                  o("WAWebUISpacing").uiPadding.top6,
                  o("WAWebUISpacing").uiPadding.bottom6,
                  o("WAWebUISpacing").uiPadding.end6,
                )
              : (c || (c = r("stylex")))(
                  h.inputField,
                  o("WAWebUISpacing").uiPadding.all6,
                ),
          )),
          (n[11] = a.appLockUpsellEnabled),
          (n[12] = B))
        : (B = n[12]);
      var W = L ? "text" : "password",
        q;
      n[13] !== P ||
      n[14] !== a.onBlur ||
      n[15] !== a.onChange ||
      n[16] !== a.onKeyDown ||
      n[17] !== a.pattern ||
      n[18] !== a.placeholder ||
      n[19] !== a.required ||
      n[20] !== a.testid ||
      n[21] !== a.title ||
      n[22] !== a.value ||
      n[23] !== W ||
      n[24] !== B
        ? ((q = m.jsx("input", {
            className: B,
            "data-testid": void 0,
            onBlur: a.onBlur,
            onChange: a.onChange,
            onKeyDown: a.onKeyDown,
            pattern: a.pattern,
            placeholder: a.placeholder,
            ref: P,
            required: a.required,
            title: a.title,
            type: W,
            value: a.value,
          })),
          (n[13] = P),
          (n[14] = a.onBlur),
          (n[15] = a.onChange),
          (n[16] = a.onKeyDown),
          (n[17] = a.pattern),
          (n[18] = a.placeholder),
          (n[19] = a.required),
          (n[20] = a.testid),
          (n[21] = a.title),
          (n[22] = a.value),
          (n[23] = W),
          (n[24] = B),
          (n[25] = q))
        : (q = n[25]);
      var U;
      n[26] !== w || n[27] !== F || n[28] !== b || n[29] !== E
        ? ((U =
            b &&
            m.jsx(r("WDSButton.react"), {
              Icon: w,
              "aria-label": F,
              xstyle: o("WAWebUISpacing").uiMargin.end8,
              onPress: E,
              variant: "borderless",
            })),
          (n[26] = w),
          (n[27] = F),
          (n[28] = b),
          (n[29] = E),
          (n[30] = U))
        : (U = n[30]);
      var V;
      return (
        n[31] !== q || n[32] !== U || n[33] !== O
          ? ((V = m.jsxs(
              "div",
              babelHelpers.extends({}, O, { children: [q, U] }),
            )),
            (n[31] = q),
            (n[32] = U),
            (n[33] = O),
            (n[34] = V))
          : (V = n[34]),
        V
      );
    }
    l.default = b;
  },
  226,
);
