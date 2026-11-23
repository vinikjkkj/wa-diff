__d(
  "MAIBABillingInlineActionWebRegistry",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e === "maiba_billing_add_payment_method"
        ? { actionType: "ADD_PAYMENT_METHOD", paymentMethod: "forbidden" }
        : e === "maiba_billing_verify_payment_method"
          ? { actionType: "VERIFY_PAYMENT_METHOD", paymentMethod: "required" }
          : e === "maiba_billing_enable_automatic_billing"
            ? {
                actionType: "ENABLE_AUTOMATIC_BILLING",
                paymentMethod: "forbidden",
                unavailableLabel: s._(/*BTDS*/ ""),
              }
            : null;
    }
    function u(t) {
      var n, r;
      return (n = (r = e(t)) == null ? void 0 : r.actionType) != null
        ? n
        : null;
    }
    ((l.getMAIBAInlineBillingActionRule = e), (l.getMAIBAInlineActionType = u));
  },
  226,
);
