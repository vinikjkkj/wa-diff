__d(
  "WDSButtonConfig",
  [
    "WDSButtonColorCommonConfig.stylex",
    "WDSHoverStateStyles",
    "cr:3448",
    "cr:3453",
    "cr:3488",
    "cr:3492",
    "cr:3674",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        content: {
          display: "x1lliihq",
          minWidth: "xk8lq53",
          boxSizing: "x9f619",
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          $$css: !0,
        },
        item: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
        pressed: { $$css: !0 },
        addOnEnd: { $$css: !0 },
        addOnStart: { $$css: !0 },
      },
      s = {
        content: {
          borderTopStyle: "x1ejq31n",
          borderInlineEndStyle: "x18oe1m7",
          borderBottomStyle: "x1sy0etr",
          borderInlineStartStyle: "xstzfhl",
          willChange: "x1so62im",
          transition: "x1syfmzz",
          zIndex: "x1ja2u2z",
          cursor: "x1ypdohk",
          $$css: !0,
        },
        pressableDisabled: { $$css: !0 },
        hovered: {
          "::after_borderStartStartRadius": "xfijbtm",
          "::after_borderStartEndRadius": "xfenqrj",
          "::after_borderEndEndRadius": "xgy0gl7",
          "::after_borderEndStartRadius": "x19igvu",
          $$css: !0,
        },
        pressed: { $$css: !0 },
      };
    function u(t, r, o, a, i, l) {
      var s = {};
      switch (t) {
        case "large": {
          switch (i) {
            case "filled": {
              r && a
                ? (s = n("cr:3488").WDSButtonLargeIconAndLabelFilledStyles)
                : a
                  ? (s = n("cr:3488").WDSButtonLargeLabelOnlyFilledStyles)
                  : r && o
                    ? (s =
                        n(
                          "cr:3488",
                        ).WDSButtonLargeIconAndDropdownOnlyFilledStyles)
                    : r &&
                      (s = n("cr:3488").WDSButtonLargeIconOnlyFilledStyles);
              break;
            }
            case "tonal": {
              r && a
                ? (s = n("cr:3488").WDSButtonLargeIconAndLabelTonalStyles)
                : a
                  ? (s = n("cr:3488").WDSButtonLargeLabelOnlyTonalStyles)
                  : r && o
                    ? (s =
                        n(
                          "cr:3488",
                        ).WDSButtonLargeIconAndDropdownOnlyTonalStyles)
                    : r && (s = n("cr:3488").WDSButtonLargeIconOnlyTonalStyles);
              break;
            }
            case "outline": {
              r && a
                ? (s = n("cr:3488").WDSButtonLargeIconAndLabelOutlineStyles)
                : a
                  ? (s = n("cr:3488").WDSButtonLargeLabelOnlyOutlineStyles)
                  : r && o
                    ? (s =
                        n(
                          "cr:3488",
                        ).WDSButtonLargeIconAndDropdownOnlyOutlineStyles)
                    : r &&
                      (s = n("cr:3488").WDSButtonLargeIconOnlyOutlineStyles);
              break;
            }
            case "borderless": {
              r && a
                ? (s = n("cr:3488").WDSButtonLargeIconAndLabelBorderlessStyles)
                : a
                  ? (s = n("cr:3488").WDSButtonLargeLabelOnlyBorderlessStyles)
                  : r && o
                    ? (s =
                        n(
                          "cr:3488",
                        ).WDSButtonLargeIconAndDropdownOnlyBorderlessStyles)
                    : r &&
                      (s = n("cr:3488").WDSButtonLargeIconOnlyBorderlessStyles);
              break;
            }
          }
          break;
        }
        case "medium": {
          switch (i) {
            case "filled": {
              r && a
                ? (s = n("cr:3492").WDSButtonMediumIconAndLabelFilledStyles)
                : a
                  ? (s = n("cr:3492").WDSButtonMediumLabelOnlyFilledStyles)
                  : r && o
                    ? (s =
                        n(
                          "cr:3492",
                        ).WDSButtonMediumIconAndDropdownOnlyFilledStyles)
                    : r &&
                      (s = n("cr:3492").WDSButtonMediumIconOnlyFilledStyles);
              break;
            }
            case "tonal": {
              r && a
                ? (s = n("cr:3492").WDSButtonMediumIconAndLabelTonalStyles)
                : a
                  ? (s = n("cr:3492").WDSButtonMediumLabelOnlyTonalStyles)
                  : r && o
                    ? (s =
                        n(
                          "cr:3492",
                        ).WDSButtonMediumIconAndDropdownOnlyTonalStyles)
                    : r &&
                      (s = n("cr:3492").WDSButtonMediumIconOnlyTonalStyles);
              break;
            }
            case "outline": {
              r && a
                ? (s = n("cr:3492").WDSButtonMediumIconAndLabelOutlineStyles)
                : a
                  ? (s = n("cr:3492").WDSButtonMediumLabelOnlyOutlineStyles)
                  : r && o
                    ? (s =
                        n(
                          "cr:3492",
                        ).WDSButtonMediumIconAndDropdownOnlyOutlineStyles)
                    : r &&
                      (s = n("cr:3492").WDSButtonMediumIconOnlyOutlineStyles);
              break;
            }
            case "borderless": {
              r && a
                ? (s = n("cr:3492").WDSButtonMediumIconAndLabelBorderlessStyles)
                : a
                  ? (s = n("cr:3492").WDSButtonMediumLabelOnlyBorderlessStyles)
                  : r && o
                    ? (s =
                        n(
                          "cr:3492",
                        ).WDSButtonMediumIconAndDropdownOnlyBorderlessStyles)
                    : r &&
                      (s =
                        n("cr:3492").WDSButtonMediumIconOnlyBorderlessStyles);
              break;
            }
          }
          break;
        }
        case "small": {
          switch (i) {
            case "filled": {
              r && a
                ? (s = n("cr:3674").WDSButtonSmallIconAndLabelFilledStyles)
                : a
                  ? (s = n("cr:3674").WDSButtonSmallLabelOnlyFilledStyles)
                  : r && o
                    ? (s =
                        n(
                          "cr:3674",
                        ).WDSButtonSmallIconAndDropdownOnlyFilledStyles)
                    : r &&
                      (s = n("cr:3674").WDSButtonSmallIconOnlyFilledStyles);
              break;
            }
            case "tonal": {
              r && a
                ? (s = n("cr:3674").WDSButtonSmallIconAndLabelTonalStyles)
                : a
                  ? (s = n("cr:3674").WDSButtonSmallLabelOnlyTonalStyles)
                  : r && o
                    ? (s =
                        n(
                          "cr:3674",
                        ).WDSButtonSmallIconAndDropdownOnlyTonalStyles)
                    : r && (s = n("cr:3674").WDSButtonSmallIconOnlyTonalStyles);
              break;
            }
            case "outline": {
              r && a
                ? (s = n("cr:3674").WDSButtonSmallIconAndLabelOutlineStyles)
                : a
                  ? (s = n("cr:3674").WDSButtonSmallLabelOnlyOutlineStyles)
                  : r && o
                    ? (s =
                        n(
                          "cr:3674",
                        ).WDSButtonSmallIconAndDropdownOnlyOutlineStyles)
                    : r &&
                      (s = n("cr:3674").WDSButtonSmallIconOnlyOutlineStyles);
              break;
            }
            case "borderless": {
              r && a
                ? (s = n("cr:3674").WDSButtonSmallIconAndLabelBorderlessStyles)
                : a
                  ? (s = n("cr:3674").WDSButtonSmallLabelOnlyBorderlessStyles)
                  : r && o
                    ? (s =
                        n(
                          "cr:3674",
                        ).WDSButtonSmallIconAndDropdownOnlyBorderlessStyles)
                    : r &&
                      (s = n("cr:3674").WDSButtonSmallIconOnlyBorderlessStyles);
              break;
            }
          }
          break;
        }
      }
      return {
        content: [e.content, s.content],
        item: [e.item, s.item],
        pressed: [e.pressed, s.pressed],
        addOnEnd: [e.addOnEnd, s.addOnEnd],
        addOnStart: [e.addOnStart, s.addOnStart],
        horizontalContainer: s.horizontalContainer,
        children: s.children,
      };
    }
    function c(e, t, r, a, i, l, u) {
      var c = {};
      switch (e) {
        case "filled": {
          switch (t) {
            case "default": {
              c = o(
                "WDSButtonColorCommonConfig.stylex",
              ).WDSButtonFilledDefaultColorStyles;
              break;
            }
            case "destructive": {
              c = o(
                "WDSButtonColorCommonConfig.stylex",
              ).WDSButtonFilledDestructiveColorStyles;
              break;
            }
            case "media": {
              c = n("cr:3448").WDSButtonFilledMediaColorStyles;
              break;
            }
          }
          break;
        }
        case "tonal": {
          switch (t) {
            case "default": {
              c = o(
                "WDSButtonColorCommonConfig.stylex",
              ).WDSButtonTonalDefaultColorStyles;
              break;
            }
            case "destructive": {
              c = o(
                "WDSButtonColorCommonConfig.stylex",
              ).WDSButtonTonalDestructiveColorStyles;
              break;
            }
            case "media": {
              c = n("cr:3448").WDSButtonTonalMediaColorStyles;
              break;
            }
          }
          break;
        }
        case "outline": {
          switch (t) {
            case "default": {
              c = n("cr:3448").WDSButtonOutlineDefaultColorStyles;
              break;
            }
            case "destructive": {
              c = n("cr:3448").WDSButtonOutlineDestructiveColorStyles;
              break;
            }
            case "media": {
              c = n("cr:3448").WDSButtonOutlineMediaColorStyles;
              break;
            }
          }
          break;
        }
        case "borderless": {
          switch (t) {
            case "default": {
              r === !0 && a === !1
                ? (c = o(
                    "WDSButtonColorCommonConfig.stylex",
                  ).WDSButtonBorderlessDefaultIconOnlyColorStyles)
                : (c = o(
                    "WDSButtonColorCommonConfig.stylex",
                  ).WDSButtonBorderlessDefaultColorStyles);
              break;
            }
            case "destructive": {
              c = o(
                "WDSButtonColorCommonConfig.stylex",
              ).WDSButtonBorderlessDestructiveColorStyles;
              break;
            }
            case "media": {
              c = o(
                "WDSButtonColorCommonConfig.stylex",
              ).WDSButtonBorderlessMediaColorStyles;
              break;
            }
          }
          break;
        }
      }
      var d = !i && !l;
      return {
        xstyleConfig: {
          pressable: [
            s.content,
            d &&
              o("WDSHoverStateStyles").WDSComponentHoverStateStyles.WDSButton,
            c.pressable,
            c.pressableOverlay,
          ],
          pressableDisabled: [s.pressableDisabled, c.pressableDisabled],
          pressableHovered: [s.hovered, c.pressableHovered],
          pressablePressed: [
            s.pressed,
            c.pressablePressed,
            s.hovered,
            c.pressableHovered,
          ],
        },
      };
    }
    function d(e, t, r, o) {
      return n("cr:3453").getButtonFontColorStyles(e, t, r);
    }
    var m = {
      icon24: { height: "xxk0z11", width: "xvy4d1p", $$css: !0 },
      icon20: { height: "x1qx5ct2", width: "xw4jnvo", $$css: !0 },
    };
    function p(e, t) {
      switch (e) {
        case "large":
          return t ? [24, m.icon24] : [20, m.icon20];
        case "medium":
          return t ? [24, m.icon24] : [20, m.icon20];
        case "small":
          return [20, m.icon20];
      }
    }
    ((l.getButtonSizeStyles = u),
      (l.getButtonColorStyles = c),
      (l.getButtonFontColor = d),
      (l.getButtonIconSizeAndStyle = p));
  },
  98,
);
