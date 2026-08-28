__d(
  "FrontierTextInputExpiryMonthYearValidationUtils",
  ["FrontierCardFormModuleFbtStrings", "FrontierTextInputExpiryMonthYearUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.length === 0
        ? {
            error: r("FrontierCardFormModuleFbtStrings").expiry_date_empty,
            validationState: "ERROR",
          }
        : o("FrontierTextInputExpiryMonthYearUtils").isValidExpiryMonthYear(e)
          ? o(
              "FrontierTextInputExpiryMonthYearUtils",
            ).isExpiryMonthYearInFuture(e)
            ? { error: void 0, validationState: "CORRECT" }
            : {
                error: r("FrontierCardFormModuleFbtStrings").expiry_date_passed,
                validationState: "ERROR",
              }
          : {
              error: r("FrontierCardFormModuleFbtStrings").expiry_date_invalid,
              validationState: "ERROR",
            };
    }
    l.validateExpiryMonthYear = e;
  },
  98,
);
