__d(
  "mcdsInteractiveForegroundColorStyleSelector",
  ["mcdsStyles.stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      ctaHover: { color: "x1024aj3", $$css: !0 },
      ctaPressed: { color: "xfvyksp", $$css: !0 },
      carouselPillPressed: { backgroundColor: "x8zr05j", $$css: !0 },
    };
    function s(t, n, r) {
      var a = r != null ? r : "default";
      return n === "primary-button"
        ? a === "default" || a === "hover" || a === "pressed"
          ? o("mcdsStyles.stylex").mcdsTextColor.textAlwaysWhite
          : a === "disabled"
            ? o("mcdsStyles.stylex").mcdsTextColor.textDisabled
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    a,
                );
              })()
        : n === "secondary-button-on-media" || n === "text-input"
          ? o("mcdsStyles.stylex").mcdsTextColor.textPrimary
          : n === "secondary-button" ||
              n === "secondary-filled-button" ||
              n === "tertiary-button"
            ? a === "default"
              ? o("mcdsStyles.stylex").mcdsTextColor.interactiveText
              : a === "hover"
                ? e.ctaHover
                : a === "pressed"
                  ? e.ctaPressed
                  : a === "disabled"
                    ? o("mcdsStyles.stylex").mcdsTextColor.textDisabled
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            a,
                        );
                      })()
            : n === "semi-transparent-button"
              ? o("mcdsStyles.stylex").mcdsTextColor.textPrimary
              : n === "semi-transparent-carousel-control-button"
                ? o("mcdsStyles.stylex").mcdsTextColor.textInverted
                : n === "icon-link"
                  ? a === "default"
                    ? o("mcdsStyles.stylex").mcdsTextColor.interactiveText
                    : a === "hover"
                      ? e.ctaHover
                      : a === "pressed"
                        ? e.ctaPressed
                        : a === "disabled"
                          ? o("mcdsStyles.stylex").mcdsTextColor.textDisabled
                          : (function () {
                              throw Error(
                                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                  a,
                              );
                            })()
                  : n === "solid-pressable-round"
                    ? a === "default"
                      ? o("mcdsStyles.stylex").mcdsTextColor.textPrimary
                      : a === "hover" || a === "pressed"
                        ? o("mcdsStyles.stylex").mcdsTextColor.textAlwaysWhite
                        : a === "disabled"
                          ? o("mcdsStyles.stylex").mcdsTextColor.textDisabled
                          : (function () {
                              throw Error(
                                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                  a,
                              );
                            })()
                    : n === "solid-carousel-control-button"
                      ? a === "default"
                        ? o("mcdsStyles.stylex").mcdsTextColor.interactiveText
                        : a === "hover" || a === "pressed"
                          ? o("mcdsStyles.stylex").mcdsTextColor.textInverted
                          : a === "disabled"
                            ? o("mcdsStyles.stylex").mcdsTextColor.textDisabled
                            : (function () {
                                throw Error(
                                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                    a,
                                );
                              })()
                      : n === "carousel-control-pill"
                        ? a === "default"
                          ? o("mcdsStyles.stylex").mcdsBackgroundColor
                              .backgroundTransparentInvertedLayer1
                          : a === "hover" || a === "pressed"
                            ? e.carouselPillPressed
                            : a === "disabled"
                              ? null
                              : (function () {
                                  throw Error(
                                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                      a,
                                  );
                                })()
                        : n === "plain-primary-pressable-icon"
                          ? a === "default" || a === "hover" || a === "pressed"
                            ? o("mcdsStyles.stylex").mcdsTextColor.textPrimary
                            : a === "disabled"
                              ? o("mcdsStyles.stylex").mcdsTextColor
                                  .textDisabled
                              : (function () {
                                  throw Error(
                                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                      a,
                                  );
                                })()
                          : n === "plain-secondary-pressable-icon"
                            ? a === "default"
                              ? o("mcdsStyles.stylex").mcdsTextColor
                                  .textSecondary
                              : a === "hover" || a === "pressed"
                                ? o("mcdsStyles.stylex").mcdsTextColor
                                    .textPrimary
                                : a === "disabled"
                                  ? o("mcdsStyles.stylex").mcdsTextColor
                                      .textDisabled
                                  : (function () {
                                      throw Error(
                                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                          a,
                                      );
                                    })()
                            : n === "border-pressable-round"
                              ? a === "default"
                                ? o("mcdsStyles.stylex").mcdsTextColor
                                    .textPrimary
                                : a === "hover"
                                  ? e.ctaHover
                                  : a === "pressed"
                                    ? e.ctaPressed
                                    : a === "disabled"
                                      ? o("mcdsStyles.stylex").mcdsTextColor
                                          .textDisabled
                                      : (function () {
                                          throw Error(
                                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                              a,
                                          );
                                        })()
                              : n === "image-pressable-round"
                                ? null
                                : n === "media-control-pressable"
                                  ? o("mcdsStyles.stylex").mcdsTextColor
                                      .textInverted
                                  : n === "gray-pressable-icon"
                                    ? a === "default" ||
                                      a === "hover" ||
                                      a === "pressed"
                                      ? o("mcdsStyles.stylex").mcdsTextColor
                                          .textPrimary
                                      : a === "disabled"
                                        ? o("mcdsStyles.stylex").mcdsTextColor
                                            .textDisabled
                                        : (function () {
                                            throw Error(
                                              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                                a,
                                            );
                                          })()
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
