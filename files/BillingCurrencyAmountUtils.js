__d(
  "BillingCurrencyAmountUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      if (e != null && t != null)
        return {
          do_not_use_currency: t,
          do_not_use_raw_amount: e,
          isInput: !0,
        };
    }
    function l(e, t) {
      if (e != null && t != null)
        return {
          do_not_use_amount_with_offset: e,
          do_not_use_currency: t,
          isInput: !0,
        };
    }
    ((i.getCurrencyAmountInputFromRaw = e),
      (i.getCurrencyAmountInputFromOffset = l));
  },
  66,
);
