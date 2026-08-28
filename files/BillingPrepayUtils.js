__d(
  "BillingPrepayUtils",
  [
    "fbt",
    "AdsCurrencyFormatter",
    "BillingAddFundsUtils",
    "BillingCurrencyAmount",
    "BillingWizardRootUPLogger",
    "intlNumUtils",
    "isTruthy",
    "unblockLowFutureSpendAdvertiserPreAuthUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, a, i, l, u, c) {
      a === void 0 && (a = !1);
      var d = null;
      if (
        r("isTruthy")(i) &&
        r("isTruthy")(l) &&
        o("BillingAddFundsUtils").passesShowLowFutureSpendDollarPillQE(i, l) &&
        r("isTruthy")(a) &&
        r("isTruthy")(u) &&
        r("isTruthy")(c) &&
        o(
          "unblockLowFutureSpendAdvertiserPreAuthUtils",
        ).shouldShowUnblockLowFutureSpendAdvertiserPreauthInlineError(e, u, c)
      ) {
        var m, p;
        return (
          r("BillingWizardRootUPLogger").logDebugEvent(
            "add_fund_below_threshold",
            {
              currency: c != null ? c : "null",
              gapAmount:
                (m = u == null ? void 0 : u.toString()) != null ? m : "null",
              userAmount: (p = e.toString()) != null ? p : "null",
            },
          ),
          o(
            "unblockLowFutureSpendAdvertiserPreAuthUtils",
          ).getUnblockLowFutureSpendAdvertiserPreauthInlineError(u, c)
        );
      }
      return (
        t == null || n == null
          ? n == null && t != null && e.compare(t) > 0
            ? (d = s._(
                /*BTDS*/ "Please enter an amount of {payment amount} or less.",
                [s._param("payment amount", String(t))],
              ))
            : t == null &&
              n != null &&
              e.compare(n) < 0 &&
              (d = s._(
                /*BTDS*/ "Please enter an amount of {payment amount} or greater.",
                [s._param("payment amount", String(n))],
              ))
          : t.compare(n) < 0
            ? (d = s._(
                /*BTDS*/ "Your prepaid balance is full and you can't add funds.",
              ))
            : (e.compare(t) > 0 || e.compare(n) < 0) &&
              (d = s._(
                /*BTDS*/ "Enter amount between {min amount} and {max amount}.",
                [
                  s._param("min amount", String(n)),
                  s._param("max amount", String(t)),
                ],
              )),
        d
      );
    }
    function u(e) {
      var t = o("intlNumUtils").parseNumber(e);
      t == null
        ? isNaN(e)
          ? (t = 0)
          : (t = parseFloat(e))
        : !isNaN(e) &&
          o("intlNumUtils").formatNumberWithThousandDelimiters(t) !== e &&
          (t = parseFloat(e));
      var n = o("intlNumUtils").formatNumberWithThousandDelimiters(t);
      return n;
    }
    function c(e, t) {
      var n = u(e),
        r = o("AdsCurrencyFormatter").parsePECurrency(t, n);
      return r;
    }
    function d(t, n, o, a, i, l, u, c, d) {
      var m, p;
      (a === void 0 && (a = !1),
        r("BillingWizardRootUPLogger").logEvent({
          event_action: "check",
          event_result: "completed",
          event_side: "client",
          extra_data: {
            gapAmount: String(
              (m = o == null ? void 0 : o.compare(t)) != null ? m : "null",
            ),
            isMaxAmountZero: String(
              (p = o == null ? void 0 : o.isZero()) != null ? p : "null",
            ),
            maxAmount: o ? String(o) : "null",
            minAmount: n ? String(n) : "null",
            userAmount: String(t),
          },
          target_name: d != null ? d : "user_amount_validation",
        }));
      var _ = null;
      return (
        t.isZero()
          ? (_ = s._(/*BTDS*/ "{invalid amount} is an invalid amount.", [
              s._param("invalid amount", String(t)),
            ]))
          : (_ = e(t, o, n, a, i, l, u, c)),
        _
      );
    }
    function m(e, t, n) {
      return t == null && n == null
        ? !1
        : (t != null && e.compare(t) < 0) || (n != null && e.compare(n) > 0);
    }
    function p(e, t) {
      r("BillingWizardRootUPLogger").logDebugEvent(
        t != null ? t : "user_amount_validation",
        { userAmount: String(e) },
      );
      var n = null;
      return (
        e.compare(o("BillingCurrencyAmount").createZero(e.currency)) < 0 &&
          (n = s._(/*BTDS*/ "{invalid amount} is an invalid amount.", [
            s._param("invalid amount", String(e)),
          ])),
        n
      );
    }
    ((l.isAmountOutsideOfLimit = e),
      (l.getAmountToAdd = c),
      (l.validateAmount = d),
      (l.isAmountOutOfBounds = m),
      (l.validateAmountForReloadThreshold = p));
  },
  226,
);
