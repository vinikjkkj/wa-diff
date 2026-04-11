__d(
  "WebBloksSwitch",
  [
    "WebBloksAppAccessibilityStyles",
    "WebBloksBooleanUtils",
    "WebBloksComponentContext",
    "WebBloksConstants",
    "WebBloksEnvironmentContext",
    "WebBloksStyle",
    "WebBloksTheme",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c(e) {
      var t,
        n,
        r = o("react-compiler-runtime").c(36),
        a = e.externalStyle,
        i = e.node,
        l = o("WebBloksTheme").useTheme().getTheme(),
        c = o("WebBloksEnvironmentContext").useWebBloksEnvironment().isRtl,
        m = o("WebBloksStyle").useStyle(i, a),
        f = m.wrapper,
        g = m.wrapperProps,
        h = o("WebBloksComponentContext").useWebBloksContext(),
        y;
      r[0] !== i
        ? ((y = o("WebBloksBooleanUtils").isTrue(i.get("checked"))),
          (r[0] = i),
          (r[1] = y))
        : (y = r[1]);
      var C = y,
        b = u(C),
        v = b[0],
        S = b[1],
        R;
      r[2] !== i || r[3] !== g
        ? ((R =
            o("WebBloksBooleanUtils").isFalse(i.get("enabled")) ||
            g.disabled === !0),
          (r[2] = i),
          (r[3] = g),
          (r[4] = R))
        : (R = r[4]);
      var L = R,
        E;
      r[5] !== i
        ? ((E = o("WebBloksBooleanUtils").isTrue(i.get("is_controlled"))),
          (r[5] = i),
          (r[6] = E))
        : (E = r[6]);
      var k = E,
        I;
      r[7] !== h || r[8] !== L || r[9] !== k || r[10] !== i
        ? ((I = function (t) {
            if (!L) {
              k || S(t);
              var e = i.getExpression("on_toggle");
              e != null && h.executeCatch(i, e, [i, t, h]);
            }
          }),
          (r[7] = h),
          (r[8] = L),
          (r[9] = k),
          (r[10] = i),
          (r[11] = I))
        : (I = r[11]);
      var T = I,
        D = k ? C : v,
        x =
          (t = i.get("on_color")) != null
            ? t
            : i.get(L ? "track_color_disabled_on" : "track_color_on"),
        $ =
          (n = i.get("off_color")) != null
            ? n
            : i.get(L ? "track_color_disabled_off" : "track_color_off"),
        P = i.get(L ? "thumb_color_disabled_on" : "thumb_color_on"),
        N = i.get(L ? "thumb_color_disabled_off" : "thumb_color_off"),
        M = d,
        w;
      r[12] !== D || r[13] !== L || r[14] !== T
        ? ((w = function (t) {
            L ||
              ((t.keyCode === o("WebBloksConstants").KEY_SPACE ||
                t.keyCode === o("WebBloksConstants").KEY_RETURN) &&
                T(!D));
          }),
          (r[12] = D),
          (r[13] = L),
          (r[14] = T),
          (r[15] = w))
        : (w = r[15]);
      var A = w,
        F = L ? p.switchDisabled : p.switchEnabled,
        O;
      r[16] !== F
        ? ((O = o("WebBloksStyle").classNames(
            o("WebBloksStyle").WebBloksStyles.container,
            p.switch,
            p.innerShadow,
            F,
            _.outlines,
          )),
          (r[16] = F),
          (r[17] = O))
        : (O = r[17]);
      var B = D && p.backgroundActive,
        W;
      r[18] !== B
        ? ((W = o("WebBloksStyle").classNames(p.background, B)),
          (r[18] = B),
          (r[19] = W))
        : (W = r[19]);
      var q =
          D && P
            ? { background: o("WebBloksUtils").getRGBColorWithTheme(P, l) }
            : !D && N
              ? { background: o("WebBloksUtils").getRGBColorWithTheme(N, l) }
              : null,
        U = c ? p.sliderRight : p.sliderLeft,
        V = D && p.sliderActive,
        H = D && (c ? p.sliderActiveLeft : p.sliderActiveRight),
        G;
      r[20] !== U || r[21] !== V || r[22] !== H
        ? ((G = o("WebBloksStyle").classNames(p.slider, U, V, H)),
          (r[20] = U),
          (r[21] = V),
          (r[22] = H),
          (r[23] = G))
        : (G = r[23]);
      var z;
      r[24] !== q || r[25] !== G
        ? ((z = s.jsx("div", { style: q, className: G })),
          (r[24] = q),
          (r[25] = G),
          (r[26] = z))
        : (z = r[26]);
      var j;
      r[27] !== T
        ? ((j = function (t) {
            T(t.target.checked);
          }),
          (r[27] = T),
          (r[28] = j))
        : (j = r[28]);
      var K = L ? p.switchInputDisabled : p.switchInputEnabled,
        Q;
      r[29] !== K
        ? ((Q = o("WebBloksStyle").classNames(p.switchInput, K)),
          (r[29] = K),
          (r[30] = Q))
        : (Q = r[30]);
      var X;
      return (
        r[31] !== D || r[32] !== L || r[33] !== j || r[34] !== Q
          ? ((X = s.jsx("input", {
              checked: D,
              disabled: L,
              onChange: j,
              tabIndex: -1,
              type: "checkbox",
              className: Q,
            })),
            (r[31] = D),
            (r[32] = L),
            (r[33] = j),
            (r[34] = Q),
            (r[35] = X))
          : (X = r[35]),
        f(
          s.jsxs(
            "div",
            babelHelpers.extends(
              {
                className: O,
                style:
                  !D && $
                    ? {
                        background: o("WebBloksUtils").getRGBColorWithTheme(
                          $,
                          l,
                        ),
                      }
                    : null,
                "aria-checked": D,
                onKeyDown: M,
                onKeyUp: A,
                role: "switch",
                tabIndex: 0,
              },
              g,
              {
                children: [
                  s.jsx("div", {
                    style:
                      D && x
                        ? {
                            background: o("WebBloksUtils").getRGBColorWithTheme(
                              x,
                              l,
                            ),
                          }
                        : null,
                    className: W,
                  }),
                  z,
                  X,
                ],
              },
            ),
          ),
        )
      );
    }
    function d(e) {
      e.keyCode === o("WebBloksConstants").KEY_SPACE && e.preventDefault();
    }
    var m = 28,
      p = o("WebBloksStyle").createStyles({
        background: {
          backgroundColor:
            o("WebBloksTheme").WebBloksThemeVars["switch-active"],
          borderRadius: m / 2,
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
          borderRadius: m / 2,
          boxSizing: "border-box",
          display: "inline-block",
          height: m,
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
      _ = o("WebBloksStyle").createStylesIfSupported(
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
    l.default = c;
  },
  98,
);
