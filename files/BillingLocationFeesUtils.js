__d(
  "BillingLocationFeesUtils",
  [
    "fbt",
    "BillingCurrencyAmount",
    "BillingLocationFeesUtils_BillingTransactionSummaryBreakdown_billing_transaction.graphql",
    "BillingPaymentModeUtils",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    function u(e, t) {
      return t != null && !o("BillingPaymentModeUtils").supportsPostpay(t)
        ? !1
        : e.DST_CONTENT_UPDATE.read();
    }
    function c(e, t) {
      var n = null;
      return (
        e
          ? (n = t
              ? s._(/*BTDS*/ "Additional taxes and fees may apply.")
              : s._(/*BTDS*/ "Additional fees may apply."))
          : t && (n = s._(/*BTDS*/ "Tax may be added to your final payment.")),
        n !== null ? n.toString() + " " : ""
      );
    }
    var d =
      e !== void 0
        ? e
        : (e = n(
            "BillingLocationFeesUtils_BillingTransactionSummaryBreakdown_billing_transaction.graphql",
          ));
    function m(e) {
      var t,
        n,
        r,
        a = o("RelayHooks").readInlineData(d, e),
        i = o("BillingCurrencyAmount").getFromPECurrencyAmountFragment(
          a == null ? void 0 : a.total_fees,
        ),
        l = i != null && !i.isZero();
      if ((a == null ? void 0 : a.has_provider_fees) === !0) {
        var s, u;
        return {
          fees: l
            ? a == null || (s = a.total_fees) == null
              ? void 0
              : s.formatted_amount
            : null,
          subtotal: l
            ? a == null || (u = a.transaction_details_subtotal_amount) == null
              ? void 0
              : u.formatted_amount
            : null,
          tax: null,
        };
      }
      return {
        fees: l
          ? a == null || (t = a.total_fees) == null
            ? void 0
            : t.formatted_amount
          : null,
        subtotal:
          a == null || (n = a.transaction_details_subtotal_amount) == null
            ? void 0
            : n.formatted_amount,
        tax:
          a == null || (r = a.tax_amount) == null ? void 0 : r.formatted_amount,
      };
    }
    ((l.shouldShowLocationFeesContent = u),
      (l.getPayNowDisclaimer = c),
      (l.getTransactionSummaryBreakdownItems = m));
  },
  226,
);
