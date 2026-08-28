__d(
  "BillingCreditCardVerificationText",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function (t, n) {
      return s._(
        /*BTDS*/ '_j{"*":"To verify your card, a temporary charge of {formatted_charge_amount} will be placed on it. This charge will be refunded within {maximum_days_for_refund} business days.","_1":"To verify your card, a temporary charge of {formatted_charge_amount} will be placed on it. This charge will be refunded within {maximum_days_for_refund} business day."}',
        [
          s._plural(n),
          s._param("formatted_charge_amount", t),
          s._param("maximum_days_for_refund", n),
        ],
      );
    };
    l.verificationChargeExplanationBody = e;
  },
  226,
);
