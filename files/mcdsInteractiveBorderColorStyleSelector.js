__d(
  "mcdsInteractiveBorderColorStyleSelector",
  ["mcdsStyles.stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      ctaHoveredBorder: {
        borderTopColor: "xsp4yka",
        borderInlineEndColor: "xe6t184",
        borderBottomColor: "x1d8qhyg",
        borderInlineStartColor: "x5ocvq8",
        $$css: !0,
      },
      ctaPressedBorder: {
        borderTopColor: "xwvktvf",
        borderInlineEndColor: "x1cjmp22",
        borderBottomColor: "x36j05t",
        borderInlineStartColor: "x1bl6zjb",
        $$css: !0,
      },
      transparent: {
        borderTopColor: "x1v8p93f",
        borderInlineEndColor: "x1o3jo1z",
        borderBottomColor: "x16stqrj",
        borderInlineStartColor: "xv5lvn5",
        $$css: !0,
      },
      semiTransparent: {
        borderTopColor: "xk4p1v4",
        borderInlineEndColor: "x16agcd3",
        borderBottomColor: "xeuhodm",
        borderInlineStartColor: "xtmgpk4",
        $$css: !0,
      },
      semiTransparentOnMedia: {
        borderTopColor: "x73clvc",
        borderInlineEndColor: "xa247fd",
        borderBottomColor: "x1kux67n",
        borderInlineStartColor: "xvebqwe",
        $$css: !0,
      },
      semiTransparentOnMediaHover: {
        borderTopColor: "xe2x8ty",
        borderInlineEndColor: "x1s3liim",
        borderBottomColor: "xnsqnv3",
        borderInlineStartColor: "x13ft1s6",
        $$css: !0,
      },
      semiTransparentOnMediaPressed: {
        borderTopColor: "x1kybkqv",
        borderInlineEndColor: "xl9pzdc",
        borderBottomColor: "xojuyfe",
        borderInlineStartColor: "xon3lu7",
        $$css: !0,
      },
      semiTransparentOnMediaDisabled: {
        borderTopColor: "x73clvc",
        borderInlineEndColor: "xa247fd",
        borderBottomColor: "x1kux67n",
        borderInlineStartColor: "xvebqwe",
        $$css: !0,
      },
      semiTransparentOnMediaDark: {
        borderTopColor: "x2uu47f",
        borderInlineEndColor: "x3phefg",
        borderBottomColor: "xenkqzk",
        borderInlineStartColor: "x98re9o",
        $$css: !0,
      },
      semiTransparentOnMediaDarkHover: {
        borderTopColor: "x73clvc",
        borderInlineEndColor: "xa247fd",
        borderBottomColor: "x1kux67n",
        borderInlineStartColor: "xvebqwe",
        $$css: !0,
      },
      semiTransparentOnMediaDarkDisabled: {
        borderTopColor: "x73clvc",
        borderInlineEndColor: "xa247fd",
        borderBottomColor: "x1kux67n",
        borderInlineStartColor: "xvebqwe",
        $$css: !0,
      },
    };
    function s(t, n, r) {
      var a = r != null ? r : "default";
      return n === "primary-button" ||
        n === "tertiary-button" ||
        n === "semi-transparent-button" ||
        n === "solid-pressable-round" ||
        n === "image-pressable-round" ||
        n === "plain-primary-pressable-icon" ||
        n === "plain-secondary-pressable-icon" ||
        n === "media-control-pressable"
        ? e.transparent
        : n === "secondary-button"
          ? a === "hover"
            ? e.ctaHoveredBorder
            : a === "pressed"
              ? e.ctaPressedBorder
              : o("mcdsStyles.stylex").mcdsBorderColor.borderDefault
          : n === "secondary-button-on-media"
            ? t === "light"
              ? a === "hover"
                ? e.semiTransparentOnMediaHover
                : a === "pressed"
                  ? e.semiTransparentOnMediaPressed
                  : a === "disabled"
                    ? e.semiTransparentOnMediaDisabled
                    : e.semiTransparentOnMedia
              : t === "dark"
                ? a === "hover" || a === "pressed"
                  ? e.semiTransparentOnMediaDarkHover
                  : a === "disabled"
                    ? e.semiTransparentOnMediaDarkDisabled
                    : e.semiTransparentOnMediaDark
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        t,
                    );
                  })()
            : n === "secondary-filled-button"
              ? o("mcdsStyles.stylex").mcdsBorderColor.borderDefault
              : n === "semi-transparent-carousel-control-button"
                ? e.semiTransparent
                : n === "icon-link"
                  ? a === "hover"
                    ? e.ctaHoveredBorder
                    : a === "pressed"
                      ? e.ctaPressedBorder
                      : a === "disabled"
                        ? o("mcdsStyles.stylex").mcdsBorderColor.borderDefault
                        : o("mcdsStyles.stylex").mcdsBorderColor
                            .borderInteractive
                  : n === "solid-carousel-control-button" ||
                      n === "text-input" ||
                      n === "gray-pressable-icon"
                    ? o("mcdsStyles.stylex").mcdsBorderColor.borderDefault
                    : n === "border-pressable-round"
                      ? a === "hover"
                        ? e.ctaHoveredBorder
                        : a === "pressed"
                          ? e.ctaPressedBorder
                          : a === "disabled"
                            ? o("mcdsStyles.stylex").mcdsBorderColor
                                .borderDefault
                            : o("mcdsStyles.stylex").mcdsBorderColor
                                .borderInteractive
                      : n === "carousel-control-pill"
                        ? e.semiTransparentOnMedia
                        : (function () {
                            throw Error(
                              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                n,
                            );
                          })();
    }
    l.default = s;
  },
  98,
);
