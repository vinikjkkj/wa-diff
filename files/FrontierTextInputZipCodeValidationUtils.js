__d(
  "FrontierTextInputZipCodeValidationUtils",
  ["FrontierCardFormModuleFbtStrings"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = /^\d{5}(-\d{4})?$/;
      return t.test(e.trim());
    }
    function s(t, n) {
      return (
        n === void 0 && (n = !0),
        t.trim() === ""
          ? {
              error: r("FrontierCardFormModuleFbtStrings").zip_code_empty,
              validationState: "ERROR",
            }
          : n && !e(t)
            ? {
                error: r("FrontierCardFormModuleFbtStrings").zip_code_invalid,
                validationState: "ERROR",
              }
            : { error: void 0, validationState: "CORRECT" }
      );
    }
    l.validateZipCode = s;
  },
  98,
);
