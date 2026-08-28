__d(
  "mcdsInteractiveBackgroundColorStyleSelector",
  ["mcdsStyles.stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      transparentDisabled: {
        backgroundColor: "x3kqpe3",
        opacity: "xti2d7y",
        $$css: !0,
      },
      blur: { backdropFilter: "x1xchau", $$css: !0 },
      semiTransparent: { backgroundColor: "xpf7r73", $$css: !0 },
      plainIconHover: { backgroundColor: "x1xu7wkc", $$css: !0 },
      plainIconPressed: { backgroundColor: "x185gu6c", $$css: !0 },
    };
    function s(t, n, r) {
      var a = r != null ? r : "default";
      return n === "primary-button"
        ? a === "default"
          ? o("mcdsStyles.stylex").mcdsBackgroundColor.interactivePrimary
          : a === "hover"
            ? o("mcdsStyles.stylex").mcdsBackgroundColor.interactiveHover
            : a === "pressed"
              ? o("mcdsStyles.stylex").mcdsBackgroundColor.interactivePressed
              : a === "disabled"
                ? o("mcdsStyles.stylex").mcdsBackgroundColor.interactiveDisabled
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        a,
                    );
                  })()
        : n === "secondary-button" ||
            n === "tertiary-button" ||
            n === "icon-link" ||
            n === "border-pressable-round" ||
            n === "text-input"
          ? null
          : n === "secondary-button-on-media"
            ? [
                e.blur,
                a === "default"
                  ? o("mcdsStyles.stylex").mcdsBackgroundColor
                      .backgroundTransparentLayer2
                  : a === "hover"
                    ? o("mcdsStyles.stylex").mcdsBackgroundColor
                        .backgroundTransparentLayer3
                    : a === "pressed"
                      ? o("mcdsStyles.stylex").mcdsBackgroundColor
                          .backgroundSurface1
                      : a === "disabled"
                        ? e.transparentDisabled
                        : (function () {
                            throw Error(
                              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                a,
                            );
                          })(),
              ]
            : n === "secondary-filled-button"
              ? o("mcdsStyles.stylex").mcdsBackgroundColor.backgroundSurface1
              : n === "semi-transparent-button"
                ? e.semiTransparent
                : n === "semi-transparent-carousel-control-button"
                  ? a === "default"
                    ? t === "dark"
                      ? o("mcdsStyles.stylex").mcdsBackgroundColor
                          .backgroundSurfaceInverted1
                      : o("mcdsStyles.stylex").mcdsBackgroundColor
                          .backgroundTransparentInvertedLayer1
                    : a === "hover"
                      ? o("mcdsStyles.stylex").mcdsBackgroundColor
                          .backgroundTransparentInvertedLayer3
                      : a === "pressed"
                        ? o("mcdsStyles.stylex").mcdsBackgroundColor
                            .backgroundTransparentInvertedLayer2
                        : a === "disabled"
                          ? o("mcdsStyles.stylex").mcdsBackgroundColor
                              .interactiveDisabled
                          : (function () {
                              throw Error(
                                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                  a,
                              );
                            })()
                  : n === "solid-pressable-round"
                    ? a === "default"
                      ? o("mcdsStyles.stylex").mcdsBackgroundColor
                          .interactiveHighlight
                      : a === "hover"
                        ? o("mcdsStyles.stylex").mcdsBackgroundColor
                            .interactiveHover
                        : a === "pressed"
                          ? o("mcdsStyles.stylex").mcdsBackgroundColor
                              .interactivePressed
                          : a === "disabled"
                            ? o("mcdsStyles.stylex").mcdsBackgroundColor
                                .interactiveDisabled
                            : (function () {
                                throw Error(
                                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                    a,
                                );
                              })()
                    : n === "solid-carousel-control-button"
                      ? a === "default"
                        ? o("mcdsStyles.stylex").mcdsBackgroundColor
                            .backgroundSurfaceInverted1
                        : a === "hover"
                          ? o("mcdsStyles.stylex").mcdsBackgroundColor
                              .interactiveHover
                          : a === "pressed"
                            ? o("mcdsStyles.stylex").mcdsBackgroundColor
                                .interactivePressed
                            : a === "disabled"
                              ? o("mcdsStyles.stylex").mcdsBackgroundColor
                                  .interactiveDisabled
                              : (function () {
                                  throw Error(
                                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                      a,
                                  );
                                })()
                      : n === "carousel-control-pill"
                        ? [
                            e.blur,
                            o("mcdsStyles.stylex").mcdsBackgroundColor
                              .backgroundTransparentLayer2,
                          ]
                        : n === "plain-primary-pressable-icon" ||
                            n === "plain-secondary-pressable-icon"
                          ? a === "default" || a === "disabled"
                            ? null
                            : a === "hover"
                              ? e.plainIconHover
                              : a === "pressed"
                                ? e.plainIconPressed
                                : (function () {
                                    throw Error(
                                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                        a,
                                    );
                                  })()
                          : n === "image-pressable-round"
                            ? o("mcdsStyles.stylex").mcdsBackgroundColor
                                .interactiveHighlight
                            : n === "media-control-pressable"
                              ? a === "default"
                                ? o("mcdsStyles.stylex").mcdsBackgroundColor
                                    .backgroundSurfaceInverted1
                                : a === "hover"
                                  ? o("mcdsStyles.stylex").mcdsBackgroundColor
                                      .interactiveHover
                                  : a === "pressed"
                                    ? o("mcdsStyles.stylex").mcdsBackgroundColor
                                        .interactivePressed
                                    : a === "disabled"
                                      ? o("mcdsStyles.stylex")
                                          .mcdsBackgroundColor
                                          .interactiveDisabled
                                      : (function () {
                                          throw Error(
                                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                              a,
                                          );
                                        })()
                              : n === "gray-pressable-icon"
                                ? a === "default" || a === "hover"
                                  ? o("mcdsStyles.stylex").mcdsBackgroundColor
                                      .backgroundSurface1
                                  : a === "pressed"
                                    ? o("mcdsStyles.stylex").mcdsBackgroundColor
                                        .interactivePressed
                                    : a === "disabled"
                                      ? o("mcdsStyles.stylex")
                                          .mcdsBackgroundColor
                                          .interactiveDisabled
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
