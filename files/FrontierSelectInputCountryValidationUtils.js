__d(
  "FrontierSelectInputCountryValidationUtils",
  ["FrontierAddressFormModuleFbtStrings"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null
        ? {
            error: r("FrontierAddressFormModuleFbtStrings").country_empty,
            validationState: "ERROR",
          }
        : { error: void 0, validationState: "CORRECT" };
    }
    l.validateCountry = e;
  },
  98,
);
