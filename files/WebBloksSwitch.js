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
      u = e.useState,
      c = "#",
      d = "&",
      m = "3",
      p = "$",
      _ = "(",
      f = ")",
      g = "1",
      h = "2",
      y = ",",
      C = "-",
      b = "4",
      v = "5",
      S = "6",
      R = "7";
    function L(e) {
      var t,
        n,
        r = o("react-compiler-runtime").c(36),
        a = e.externalStyle,
        i = e.node,
        l = o("WebBloksTheme").useTheme().getTheme(),
        L = o("WebBloksEnvironmentContext").useWebBloksEnvironment().isRtl,
        k = o("WebBloksStyle").useStyle(i, a),
        D = k.wrapper,
        x = k.wrapperProps,
        $ = o("WebBloksComponentContext").useWebBloksContext(),
        P;
      r[0] !== i
        ? ((P = o("WebBloksBooleanUtils").isTrue(i.get(c))),
          (r[0] = i),
          (r[1] = P))
        : (P = r[1]);
      var N = P,
        M = u(N),
        w = M[0],
        A = M[1],
        F;
      r[2] !== i || r[3] !== x
        ? ((F =
            o("WebBloksBooleanUtils").isFalse(i.get(d)) || x.disabled === !0),
          (r[2] = i),
          (r[3] = x),
          (r[4] = F))
        : (F = r[4]);
      var O = F,
        B;
      r[5] !== i
        ? ((B = o("WebBloksBooleanUtils").isTrue(i.get(m))),
          (r[5] = i),
          (r[6] = B))
        : (B = r[6]);
      var W = B,
        q;
      r[7] !== $ || r[8] !== O || r[9] !== W || r[10] !== i
        ? ((q = function (t) {
            if (!O) {
              W || A(t);
              var e = i.getExpression(p);
              e != null && $.executeCatch(i, e, [i, t, $]);
            }
          }),
          (r[7] = $),
          (r[8] = O),
          (r[9] = W),
          (r[10] = i),
          (r[11] = q))
        : (q = r[11]);
      var U = q,
        V = W ? N : w,
        H = (t = i.get(_)) != null ? t : i.get(O ? h : C),
        G = (n = i.get(f)) != null ? n : i.get(O ? g : y),
        z = i.get(O ? v : R),
        j = i.get(O ? b : S),
        K = E,
        Q;
      r[12] !== V || r[13] !== O || r[14] !== U
        ? ((Q = function (t) {
            O ||
              ((t.keyCode === o("WebBloksConstants").KEY_SPACE ||
                t.keyCode === o("WebBloksConstants").KEY_RETURN) &&
                U(!V));
          }),
          (r[12] = V),
          (r[13] = O),
          (r[14] = U),
          (r[15] = Q))
        : (Q = r[15]);
      var X = Q,
        Y = O ? I.switchDisabled : I.switchEnabled,
        J;
      r[16] !== Y
        ? ((J = o("WebBloksStyle").classNames(
            o("WebBloksStyle").WebBloksStyles.container,
            I.switch,
            I.innerShadow,
            Y,
            T.outlines,
          )),
          (r[16] = Y),
          (r[17] = J))
        : (J = r[17]);
      var Z = V && I.backgroundActive,
        ee;
      r[18] !== Z
        ? ((ee = o("WebBloksStyle").classNames(I.background, Z)),
          (r[18] = Z),
          (r[19] = ee))
        : (ee = r[19]);
      var te =
          V && z
            ? { background: o("WebBloksUtils").getRGBColorWithTheme(z, l) }
            : !V && j
              ? { background: o("WebBloksUtils").getRGBColorWithTheme(j, l) }
              : null,
        ne = L ? I.sliderRight : I.sliderLeft,
        re = V && I.sliderActive,
        oe = V && (L ? I.sliderActiveLeft : I.sliderActiveRight),
        ae;
      r[20] !== ne || r[21] !== re || r[22] !== oe
        ? ((ae = o("WebBloksStyle").classNames(I.slider, ne, re, oe)),
          (r[20] = ne),
          (r[21] = re),
          (r[22] = oe),
          (r[23] = ae))
        : (ae = r[23]);
      var ie;
      r[24] !== te || r[25] !== ae
        ? ((ie = s.jsx("div", { style: te, className: ae })),
          (r[24] = te),
          (r[25] = ae),
          (r[26] = ie))
        : (ie = r[26]);
      var le;
      r[27] !== U
        ? ((le = function (t) {
            U(t.target.checked);
          }),
          (r[27] = U),
          (r[28] = le))
        : (le = r[28]);
      var se = O ? I.switchInputDisabled : I.switchInputEnabled,
        ue;
      r[29] !== se
        ? ((ue = o("WebBloksStyle").classNames(I.switchInput, se)),
          (r[29] = se),
          (r[30] = ue))
        : (ue = r[30]);
      var ce;
      return (
        r[31] !== V || r[32] !== O || r[33] !== le || r[34] !== ue
          ? ((ce = s.jsx("input", {
              checked: V,
              disabled: O,
              onChange: le,
              tabIndex: -1,
              type: "checkbox",
              className: ue,
            })),
            (r[31] = V),
            (r[32] = O),
            (r[33] = le),
            (r[34] = ue),
            (r[35] = ce))
          : (ce = r[35]),
        D(
          s.jsxs(
            "div",
            babelHelpers.extends(
              {
                className: J,
                style:
                  !V && G
                    ? {
                        background: o("WebBloksUtils").getRGBColorWithTheme(
                          G,
                          l,
                        ),
                      }
                    : null,
                "aria-checked": V,
                onKeyDown: K,
                onKeyUp: X,
                role: "switch",
                tabIndex: 0,
              },
              x,
              {
                children: [
                  s.jsx("div", {
                    style:
                      V && H
                        ? {
                            background: o("WebBloksUtils").getRGBColorWithTheme(
                              H,
                              l,
                            ),
                          }
                        : null,
                    className: ee,
                  }),
                  ie,
                  ce,
                ],
              },
            ),
          ),
        )
      );
    }
    function E(e) {
      e.keyCode === o("WebBloksConstants").KEY_SPACE && e.preventDefault();
    }
    var k = 28,
      I = o("WebBloksStyle").createStyles({
        background: {
          backgroundColor:
            o("WebBloksTheme").WebBloksThemeVars["switch-active"],
          borderRadius: k / 2,
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
          borderRadius: k / 2,
          boxSizing: "border-box",
          display: "inline-block",
          height: k,
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
      T = o("WebBloksStyle").createStylesIfSupported(
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
