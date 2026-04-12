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
      return m.jsx(
        r("WDSIconIcVisibility.react"),
        babelHelpers.extends({}, e, {
          iconXstyle: [e.iconXstyle, h.accentIconColor],
        }),
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      return m.jsx(
        r("WDSIconIcVisibilityOff.react"),
        babelHelpers.extends({}, e, {
          iconXstyle: [e.iconXstyle, h.accentIconColor],
        }),
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.enableShowPassword,
        l = i === void 0 ? !1 : i,
        s = a.focusOnMount,
        d = s === void 0 ? !1 : s,
        p = a.showByDefault,
        b = p === void 0 ? !1 : p,
        v = r("useWAWebToggle")(b),
        S = v[0],
        R = v[1],
        L = f(null),
        E = g(!1),
        k = E[0],
        I = E[1],
        T = o("react-gui-use-focus").useFocus({ onFocusChange: I }),
        D = r("useMergeRefs")(L, T, n);
      _(
        function () {
          if (d) {
            var e;
            (e = L.current) == null || e.focus();
          }
        },
        [d],
      );
      var x = S ? y : C,
        $ = S ? u._(/*BTDS*/ "Hide") : u._(/*BTDS*/ "Show");
      return m.jsxs(
        "div",
        babelHelpers.extends(
          {},
          {
            0: {
              className:
                "x1n2onr6 x78zum5 xk7ee7b xt7fyls xso031l x1q0q8m5 x16pkwpw x1j85h84",
            },
            1: {
              className:
                "x1n2onr6 x78zum5 xk7ee7b xt7fyls xv7zg05 x1q0q8m5 x1rrvw3c x18d9i69",
            },
          }[!!k << 0],
          {
            children: [
              m.jsx("input", {
                className: o(
                  "WAWebClassnames",
                ).classnamesConvertMeToStylexPlease(
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
                ),
                "data-testid": void 0,
                onBlur: a.onBlur,
                onChange: a.onChange,
                onKeyDown: a.onKeyDown,
                pattern: a.pattern,
                placeholder: a.placeholder,
                ref: D,
                required: a.required,
                title: a.title,
                type: S ? "text" : "password",
                value: a.value,
              }),
              l &&
                m.jsx(r("WDSButton.react"), {
                  Icon: x,
                  "aria-label": $,
                  xstyle: o("WAWebUISpacing").uiMargin.end8,
                  onPress: R,
                  variant: "borderless",
                }),
            ],
          },
        ),
      );
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  226,
);
