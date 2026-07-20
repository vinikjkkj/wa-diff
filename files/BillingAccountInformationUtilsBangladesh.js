__d(
  "BillingAccountInformationUtilsBangladesh",
  ["fbt", "BillingAccountInformationUtilsCommon"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 13;
    function u(t) {
      var n = s._(/*BTDS*/ "Please enter a valid BIN."),
        r = /\d{9}\-?\d{4}/g;
      if (!r.test(t)) return n;
      var a = o("BillingAccountInformationUtilsCommon").stripNonDigits(t);
      if (
        !o("BillingAccountInformationUtilsCommon").isValidFixedLengthNumber(
          a,
          e,
        )
      )
        return n;
    }
    function c(e, t) {
      for (var n = e.replace(/\D/g, ""), r = "", o = 0; o < n.length; o++)
        o === 9 ? (r += "-" + n[o]) : (r += n[o]);
      return babelHelpers.extends({}, t, { taxID: r });
    }
    function d(e) {
      return babelHelpers.extends({}, e, {
        taxID:
          e.taxID.length > 0
            ? e.taxID.slice(0, 9) + "-" + e.taxID.slice(9, 14)
            : "",
      });
    }
    var m = o(
      "BillingAccountInformationUtilsCommon",
    ).createPostFormatStripNonDigits();
    function p(e) {
      if (e.taxID == null || e.taxID.length === 0)
        return o("BillingAccountInformationUtilsCommon")
          .OPTIONAL_TAX_ID_MESSAGE;
      var t = e.taxID.replace("^(d{9})(d{4}))$", "$1-$2");
      return s._(/*BTDS*/ "BIN: {tax_id}", [s._param("tax_id", t)]);
    }
    ((l.validateBIN = u),
      (l.onChangeBIN = c),
      (l.preFormatValues = d),
      (l.postFormatValues = m),
      (l.formatForDisplay = p));
  },
  226,
);
