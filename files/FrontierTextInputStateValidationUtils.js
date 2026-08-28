__d(
  "FrontierTextInputStateValidationUtils",
  ["FrontierAddressFormModuleFbtStrings"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.trim() === ""
        ? {
            error: r("FrontierAddressFormModuleFbtStrings").state_empty,
            validationState: "ERROR",
          }
        : { error: void 0, validationState: "CORRECT" };
    }
    l.validateState = e;
  },
  98,
);
