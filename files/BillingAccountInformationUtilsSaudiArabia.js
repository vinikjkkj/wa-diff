__d(
  "BillingAccountInformationUtilsSaudiArabia",
  ["fbt", "BillingAccountInformationUtilsCommon"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = new RegExp(/^3(\d{9})00003$/),
      u = 9;
    function c(t) {
      var n = t.match(e),
        r =
          n && n[1]
            ? o(
                "BillingAccountInformationUtilsCommon",
              ).isValidFixedLengthNumber(n[1], u)
            : !1;
      if (!r || !e.test(t)) return s._(/*BTDS*/ "Please enter a valid TIN.");
    }
    function d(e) {
      if (e.taxID == null || e.taxID.length === 0)
        return s._(/*BTDS*/ "Optional - Add a tax ID or address");
      var t = s._(/*BTDS*/ "Tax Identification Number");
      return "" + t.toString() + e.taxID;
    }
    ((l.validateTIN = c), (l.formatForDisplay = d));
  },
  226,
);
