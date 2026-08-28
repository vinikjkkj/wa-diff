__d(
  "FrontierCardNumberValidationUtils",
  ["FrontierCardFormModuleFbtStrings", "FrontierCardNumberUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
      n === void 0 && (n = !1);
      var e = t.replace(/[^\d]/g, ""),
        a = void 0,
        i = void 0;
      if (e.length === 0)
        ((a = "ERROR"),
          (i = r("FrontierCardFormModuleFbtStrings").card_number_empty));
      else if (e.length < 4)
        ((a = "ERROR"),
          (i = r("FrontierCardFormModuleFbtStrings").card_number_invalid));
      else {
        var l = o("FrontierCardNumberUtils").isValidCCNumber(e, n);
        l
          ? (a = "CORRECT")
          : ((a = "ERROR"),
            (i = r("FrontierCardFormModuleFbtStrings").card_number_invalid));
      }
      return { error: i, validationState: a };
    };
    l.validateCardNumber = e;
  },
  98,
);
