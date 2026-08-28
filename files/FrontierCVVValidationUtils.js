__d(
  "FrontierCVVValidationUtils",
  ["FrontierCardFormModuleFbtStrings"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3,
      s = 4;
    function u(t, n) {
      var o = void 0,
        a = void 0;
      return (
        t.trim() === ""
          ? ((a = r("FrontierCardFormModuleFbtStrings").enter_security_code),
            (o = "ERROR"))
          : (n != null && t.length !== n) || t.length < e
            ? ((a = r("FrontierCardFormModuleFbtStrings").enter_valid_code),
              (o = "ERROR"))
            : ((o = "CORRECT"), (a = void 0)),
        { error: a, validationState: o }
      );
    }
    ((l.DEFAULT_MIN_CSC_DIGITS = e),
      (l.DEFAULT_MAX_CSC_DIGITS = s),
      (l.validateCVV = u));
  },
  98,
);
