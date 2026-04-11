__d(
  "XMDSSpinner.react",
  [
    "BaseProgressRingIndeterminate.react",
    "CDSSpinnerVariants",
    "MetaConfig",
    "XMDSSpinnerLottieAnimationStyles.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = u.useId,
      m = r("MetaConfig")._("195"),
      p = {
        trackSvg: {
          top: "x13vifvy",
          insetInlineStart: "x1o0tod",
          position: "x10l6tqk",
          $$css: !0,
        },
      };
    function _(t) {
      var n,
        a,
        i,
        l = t.ref,
        u = babelHelpers.objectWithoutPropertiesLoose(t, e),
        _ = u.color,
        f = _ === void 0 ? "primary" : _,
        g = u.isDecorative,
        h = u.size,
        y = d(),
        C = o("CDSSpinnerVariants").typeVariants[f],
        b = m && (f === "primary" || f === "blueLink"),
        v =
          m &&
          [
            "primary",
            "primary-button",
            "primary-fallback",
            "on-filled-destructive-button",
            "on-ghost-primary-button",
            "on-ghost-secondary-button",
            "on-outline-primary-button",
            "on-outline-destructive-button",
            "on-on-color-button",
            "on-tonal-destructive-button",
            "on-tonal-primary-button",
            "secondary",
            "secondary-button",
            "on-outline-secondary-button",
            "blueLink",
            "primary-on-media-button",
            "secondary-on-media-button",
          ].includes(f),
        S =
          f === "secondary-button"
            ? o("CDSSpinnerVariants").trackCircleSecondaryButtonStyle
            : f === "secondary"
              ? o("CDSSpinnerVariants").trackCircleSecondaryStyle
              : f === "on-outline-secondary-button"
                ? o("CDSSpinnerVariants")
                    .trackCircleOnOutlineSecondaryButtonStyle
                : f === "on-ghost-primary-button"
                  ? o("CDSSpinnerVariants").trackCircleOnGhostPrimaryButtonStyle
                  : f === "on-ghost-secondary-button"
                    ? o("CDSSpinnerVariants")
                        .trackCircleOnGhostSecondaryButtonStyle
                    : f === "primary-button"
                      ? o("CDSSpinnerVariants").trackCirclePrimaryButtonStyle
                      : f === "on-filled-destructive-button"
                        ? o("CDSSpinnerVariants")
                            .trackCircleOnFilledDestructiveButtonStyle
                        : f === "on-tonal-primary-button"
                          ? o("CDSSpinnerVariants")
                              .trackCircleOnTonalPrimaryButtonStyle
                          : f === "on-tonal-destructive-button"
                            ? o("CDSSpinnerVariants")
                                .trackCircleOnTonalDestructiveButtonStyle
                            : f === "on-outline-primary-button"
                              ? o("CDSSpinnerVariants")
                                  .trackCircleOnOutlinePrimaryButtonStyle
                              : f === "on-outline-destructive-button"
                                ? o("CDSSpinnerVariants")
                                    .trackCircleOnOutlineDestructiveButtonStyle
                                : f === "on-on-color-button"
                                  ? o("CDSSpinnerVariants")
                                      .trackCircleOnOnColorButtonStyle
                                  : f === "primary-on-media-button"
                                    ? o("CDSSpinnerVariants")
                                        .trackCirclePrimaryOnMediaButtonStyle
                                    : f === "secondary-on-media-button"
                                      ? o("CDSSpinnerVariants")
                                          .trackCircleSecondaryOnMediaButtonStyle
                                      : o("CDSSpinnerVariants")
                                          .trackCirclePrimaryStyle,
        R = m
          ? {
              circleAnimation: o("XMDSSpinnerLottieAnimationStyles.react")
                .circleAnimation,
              svgAnimation: o("XMDSSpinnerLottieAnimationStyles.react")
                .svgAnimation,
            }
          : null,
        L =
          R != null
            ? babelHelpers.extends({}, C, {
                isDecorative: g,
                xstyleConfig: {
                  svg: [
                    b ? null : (n = C.xstyleConfig) == null ? void 0 : n.svg,
                    R.svgAnimation,
                  ],
                },
              })
            : babelHelpers.extends({}, C, { isDecorative: g }),
        E = o("CDSSpinnerVariants").sizeVariants[h],
        k = c.jsx(r("BaseProgressRingIndeterminate.react"), {
          animationXstyle: R != null ? [R.circleAnimation] : void 0,
          pathLength: m ? 100 : void 0,
          ref: l,
          sizeVariant: E,
          strokeOverride: b ? "url(#" + y + ")" : void 0,
          typeVariant: L,
        });
      if (!v) return k;
      var I = (a = E.size) != null ? a : h,
        T = (i = E.strokeWidth) != null ? i : 2,
        D = (I - T) / 2;
      return c.jsxs("div", {
        className: "x3nfvp2 x1n2onr6",
        children: [
          b &&
            c.jsx("svg", {
              className: "xqtp20y x6ikm8r x10wlt62 x10l6tqk xnalus7",
              "aria-hidden": "true",
              children: c.jsx("defs", {
                children: c.jsxs("linearGradient", {
                  id: y,
                  x1: "0",
                  x2: "0",
                  y1: "0",
                  y2: "1",
                  children: [
                    c.jsx("stop", {
                      offset: "0%",
                      stopColor:
                        "var(--progress-ring-default-progress-gradient-start)",
                    }),
                    c.jsx("stop", {
                      offset: "100%",
                      stopColor:
                        "var(--progress-ring-default-progress-gradient-end)",
                    }),
                  ],
                }),
              }),
            }),
          c.jsx(
            "svg",
            babelHelpers.extends(
              {},
              (s || (s = r("stylex"))).props(p.trackSvg, S),
              {
                "aria-hidden": "true",
                height: I,
                viewBox: "0 0 " + I + " " + I,
                width: I,
                children: c.jsx("circle", {
                  cx: I / 2,
                  cy: I / 2,
                  fill: "none",
                  r: D,
                  strokeWidth: T,
                }),
              },
            ),
          ),
          k,
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
