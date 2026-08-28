__d(
  "BillingContactFieldValidators",
  ["fbt", "isEmail", "validatePhoneNumber"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function (t) {
        return t.length === 0 || r("isEmail")(t)
          ? null
          : s._(/*BTDS*/ "Enter a valid email address.");
      },
      u = function (t) {
        if (t.length === 0) return null;
        var e = t.replace(/[^0-9]/g, "");
        return !r("validatePhoneNumber")(t) || /^0+$/.test(e)
          ? s._(/*BTDS*/ "Enter a valid phone number.")
          : null;
      };
    ((l.validateEmailInput = e), (l.validatePhoneNumberInput = u));
  },
  226,
);
