__d(
  "mcdsTextColorStyleSelector",
  ["mcdsStyles.stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      inherit: { color: "x1heor9g", $$css: !0 },
      ctaHover: { color: "x1024aj3", $$css: !0 },
      ctaPressed: { color: "xfvyksp", $$css: !0 },
    };
    function s(t, n, r) {
      var a = r != null ? r : "default";
      return n === "inherit"
        ? e.inherit
        : n === "primary"
          ? o("mcdsStyles.stylex").mcdsTextColor.textPrimary
          : n === "secondary"
            ? o("mcdsStyles.stylex").mcdsTextColor.textSecondary
            : n === "high-contrast"
              ? o("mcdsStyles.stylex").mcdsTextColor.textPrimary
              : n === "work-purple" || n === "promo-label"
                ? o("mcdsStyles.stylex").mcdsTextColor.textPromo
                : n === "oculus-purple" ||
                    n === "ray-ban-red" ||
                    n === "portal-turquoise"
                  ? e.inherit
                  : n === "link"
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
                    : n === "icon-link" || n === "image-link"
                      ? a === "default"
                        ? o("mcdsStyles.stylex").mcdsTextColor.interactiveText
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
                      : n === "gray-icon-link"
                        ? a === "default" || a === "hover"
                          ? o("mcdsStyles.stylex").mcdsTextColor.textSecondary
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
                        : n === "success-label"
                          ? o("mcdsStyles.stylex").mcdsTextColor.statusPositive
                          : n === "error-label"
                            ? o("mcdsStyles.stylex").mcdsTextColor
                                .statusNegative
                            : n === "disabled"
                              ? o("mcdsStyles.stylex").mcdsTextColor
                                  .textDisabled
                              : n === "placeholder"
                                ? o("mcdsStyles.stylex").mcdsTextColor
                                    .textPlaceholder
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
