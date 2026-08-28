__d(
  "unblockLowFutureSpendAdvertiserPreAuthUtils",
  ["fbt", "BillingCurrencyAmount"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      var n = o("BillingCurrencyAmount").getFromPECurrencyAmount({
        amount_with_offset: e,
        currency: t,
      });
      if (n == null) return "";
      var r = n.format({ showDecimals: !0, showSymbol: !0 });
      return s._(
        /*BTDS*/ "Set amount to be at least {formatted budget amount} to resume your ads delivery.",
        [s._param("formatted budget amount", r)],
      );
    }
    function u(e, t, n) {
      if (e.currency !== n) return !1;
      var r = o("BillingCurrencyAmount").getFromPECurrencyAmount({
        amount_with_offset: t,
        currency: n,
      });
      return e.compare(r) < 0;
    }
    ((l.getUnblockLowFutureSpendAdvertiserPreauthInlineError = e),
      (l.shouldShowUnblockLowFutureSpendAdvertiserPreauthInlineError = u));
  },
  226,
);
