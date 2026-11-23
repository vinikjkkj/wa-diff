__d(
  "WebBloksSwitch",
  [
    "WebBloksAppAccessibilityStyles",
    "WebBloksBooleanUtils",
    "WebBloksComponentContext",
    "WebBloksConstants",
    "WebBloksEnvironmentContext",
    "WebBloksModel",
    "WebBloksStyle",
    "WebBloksTheme",
    "WebBloksUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      d = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      m = o("WebBloksModel").defineWebBloksAttributeKey("3"),
      p = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      _ = o("WebBloksModel").defineWebBloksAttributeKey("("),
      f = o("WebBloksModel").defineWebBloksAttributeKey(")"),
      g = o("WebBloksModel").defineWebBloksAttributeKey("1"),
      h = o("WebBloksModel").defineWebBloksAttributeKey("2"),
      y = o("WebBloksModel").defineWebBloksAttributeKey(","),
      C = o("WebBloksModel").defineWebBloksAttributeKey("-"),
      b = o("WebBloksModel").defineWebBloksAttributeKey("4"),
      v = o("WebBloksModel").defineWebBloksAttributeKey("5"),
      S = o("WebBloksModel").defineWebBloksAttributeKey("6"),
      R = o("WebBloksModel").defineWebBloksAttributeKey("7");
    function L(e) {
      var t,
        n,
        r = e.externalStyle,
        a = e.node,
        i = o("WebBloksTheme").useTheme().getTheme(),
        l = o("WebBloksEnvironmentContext").useWebBloksEnvironment().isRtl,
        L = o("WebBloksStyle").useStyle(a, r, void 0, d),
        E = L.wrapper,
        T = L.wrapperProps,
        D = o("WebBloksComponentContext").useWebBloksContext(),
        x = o("WebBloksBooleanUtils").isTrue(a.get(c)),
        $ = u(x),
        P = $[0],
        N = $[1],
        M = o("WebBloksBooleanUtils").isFalse(a.get(d)) || T.disabled === !0,
        w = o("WebBloksBooleanUtils").isTrue(a.get(m)),
        A = function (t) {
          if (!M) {
            w || N(t);
            var e = a.getExpression(p);
            e != null && D.executeCatch(a, e, [a, t, D]);
          }
        },
        F = w ? x : P,
        O = (t = a.get(_)) != null ? t : a.get(M ? h : C),
        B = (n = a.get(f)) != null ? n : a.get(M ? g : y),
        W = a.get(M ? v : R),
        q = a.get(M ? b : S),
        U = function (t) {
          t.keyCode === o("WebBloksConstants").KEY_SPACE && t.preventDefault();
        },
        V = function (t) {
          M ||
            ((t.keyCode === o("WebBloksConstants").KEY_SPACE ||
              t.keyCode === o("WebBloksConstants").KEY_RETURN) &&
              A(!F));
        };
      return E(
        s.jsxs(
          "div",
          babelHelpers.extends(
            {
              className: o("WebBloksStyle").classNames(
                o("WebBloksStyle").WebBloksStyles.container,
                k.switch,
                k.innerShadow,
                M ? k.switchDisabled : k.switchEnabled,
                I.outlines,
              ),
              style:
                !F && B
                  ? {
                      background: o("WebBloksUtils").getRGBColorWithTheme(B, i),
                    }
                  : null,
              "aria-checked": F,
              onKeyDown: U,
              onKeyUp: V,
              role: "switch",
              tabIndex: 0,
            },
            T,
            {
              children: [
                s.jsx("div", {
                  style:
                    F && O
                      ? {
                          background: o("WebBloksUtils").getRGBColorWithTheme(
                            O,
                            i,
                          ),
                        }
                      : null,
                  className: o("WebBloksStyle").classNames(
                    k.background,
                    F && k.backgroundActive,
                  ),
                }),
                s.jsx("div", {
                  style:
                    F && W
                      ? {
                          background: o("WebBloksUtils").getRGBColorWithTheme(
                            W,
                            i,
                          ),
                        }
                      : !F && q
                        ? {
                            background: o("WebBloksUtils").getRGBColorWithTheme(
                              q,
                              i,
                            ),
                          }
                        : null,
                  className: o("WebBloksStyle").classNames(
                    k.slider,
                    l ? k.sliderRight : k.sliderLeft,
                    F && k.sliderActive,
                    F && (l ? k.sliderActiveLeft : k.sliderActiveRight),
                  ),
                }),
                s.jsx("input", {
                  checked: F,
                  disabled: M,
                  onChange: function (t) {
                    A(t.target.checked);
                  },
                  tabIndex: -1,
                  type: "checkbox",
                  className: o("WebBloksStyle").classNames(
                    k.switchInput,
                    M ? k.switchInputDisabled : k.switchInputEnabled,
                  ),
                }),
              ],
            },
          ),
        ),
      );
    }
    L.displayName = L.name + " [from " + i.id + "]";
    var E = 28,
      k = o("WebBloksStyle").createStyles({
        background: {
          backgroundColor:
            o("WebBloksTheme").WebBloksThemeVars["switch-active"],
          borderRadius: E / 2,
          bottom: 0,
          boxSizing: "border-box",
          left: 0,
          opacity: 0,
          pointerEvents: "none",
          position: "absolute",
          right: 0,
          top: 0,
          transitionDuration:
            o("WebBloksTheme").WebBloksThemeVars[
              "fds-duration-extra-short-out"
            ],
          transitionProperty: "opacity",
          transitionTimingFunction:
            o("WebBloksTheme").WebBloksThemeVars["fds-animation-move-out"],
        },
        backgroundActive: {
          opacity: 1,
          transitionDuration:
            o("WebBloksTheme").WebBloksThemeVars["fds-duration-extra-short-in"],
          transitionTimingFunction:
            o("WebBloksTheme").WebBloksThemeVars["fds-animation-move-in"],
        },
        switchDisabled: {
          opacity: 0.4,
          transitionDuration:
            o("WebBloksTheme").WebBloksThemeVars["fds-duration-extra-short-in"],
          transitionTimingFunction:
            o("WebBloksTheme").WebBloksThemeVars["fds-animation-move-in"],
        },
        switchEnabled: { opacity: 1 },
        innerShadow: {
          boxShadow:
            "inset 0 0 0 0.5px " +
            o("WebBloksTheme").WebBloksThemeVars["media-inner-border"],
        },
        slider: {
          backgroundColor: o("WebBloksTheme").WebBloksThemeVars["always-white"],
          borderRadius: 12,
          boxShadow:
            "0 1px 2px " + o("WebBloksTheme").WebBloksThemeVars["shadow-5"],
          height: 24,
          pointerEvents: "none",
          position: "absolute",
          top: 2,
          transitionDuration:
            o("WebBloksTheme").WebBloksThemeVars[
              "fds-duration-extra-short-out"
            ],
          transitionProperty: "transform, background-color",
          transitionTimingFunction:
            o("WebBloksTheme").WebBloksThemeVars["fds-animation-move-out"],
          width: 24,
        },
        sliderLeft: { left: 2 },
        sliderRight: { right: 2 },
        sliderActive: {
          transitionDuration:
            o("WebBloksTheme").WebBloksThemeVars["fds-duration-extra-short-in"],
          transitionTimingFunction:
            o("WebBloksTheme").WebBloksThemeVars["fds-animation-move-in"],
        },
        sliderActiveLeft: { transform: "translateX(-24px)" },
        sliderActiveRight: { transform: "translateX(24px)" },
        switch: {
          flexShrink: 0,
          flexGrow: 0,
          backgroundColor: o("WebBloksTheme").WebBloksThemeVars.divider,
          borderRadius: E / 2,
          boxSizing: "border-box",
          display: "inline-block",
          height: E,
          overflow: "hidden",
          padding: 0,
          position: "relative",
          transitionDuration:
            o("WebBloksTheme").WebBloksThemeVars[
              "fds-duration-extra-short-out"
            ],
          transitionProperty: "opacity",
          transitionTimingFunction:
            o("WebBloksTheme").WebBloksThemeVars["fds-animation-move-out"],
          width: 52,
        },
        switchInput: {
          height: "100%",
          margin: 0,
          opacity: 0,
          outline: "none",
          padding: 0,
          position: "absolute",
          top: 0,
          width: "100%",
        },
        switchInputDisabled: { pointerEvents: "none" },
        switchInputEnabled: { cursor: "pointer" },
      }),
      I = o("WebBloksStyle").createStylesIfSupported(
        { type: "selector", selector: ":focus-visible" },
        {
          outlines: function (t) {
            var e;
            return (
              (e = {}),
              (e[t + ":focus-visible"] = {
                outline: o("WebBloksAppAccessibilityStyles").FOCUS_OUTLINE,
              }),
              e
            );
          },
        },
      );
    l.default = L;
  },
  98,
);
