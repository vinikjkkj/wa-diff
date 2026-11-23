__d(
  "PolarisBoostPaymentSummaryStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      return e == null || e === ""
        ? s._(/*BTDS*/ "", [s._param("total amount", t)])
        : s._(/*BTDS*/ "", [
            s._param("payment method summary", e),
            s._param("total amount", t),
          ]);
    }
    function u(e, t) {
      return s._(/*BTDS*/ "", [
        s._param("payment method", e),
        s._param("total amount", t),
      ]);
    }
    ((l.getPaymentSummaryLabelWithTotalAmount = e),
      (l.getPaymentSummaryTotalChargeText = u));
  },
  226,
);
