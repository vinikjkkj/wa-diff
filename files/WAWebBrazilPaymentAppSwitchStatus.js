__d(
  "WAWebBrazilPaymentAppSwitchStatus",
  ["WAWebPaymentDetailsModels"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = c(e.status),
        o = c(t);
      return o !== r ? o > r : o > 0 ? n < e.statusUpdatedAtMs : d(e, t, n);
    }
    function s(t, n, r, o) {
      return e(t, n, o)
        ? babelHelpers.extends({}, t, {
            status: n,
            actor: r,
            statusUpdatedAtMs: o,
          })
        : t;
    }
    function u(t, n, r, a) {
      var i = e(t, n, r),
        l = i
          ? babelHelpers.extends({}, t, {
              status: n,
              actor: o("WAWebPaymentDetailsModels").PaymentDetailsActor.SYSTEM,
              statusUpdatedAtMs: r,
            })
          : t;
      if (!m(a)) return l;
      var s = i || t.status === n;
      if (s && p(a, t)) {
        var u, c;
        return babelHelpers.extends({}, l, {
          bankName: (u = a.bankName) != null ? u : t.bankName,
          transactionE2eId:
            (c = a.transactionE2eId) != null ? c : t.transactionE2eId,
        });
      }
      return i
        ? babelHelpers.extends({}, l, {
            bankName: a.bankName,
            transactionE2eId: a.transactionE2eId,
          })
        : l;
    }
    function c(e) {
      return e ===
        o("WAWebPaymentDetailsModels").PaymentDetailsStatus.PAYMENT_SENT
        ? 2
        : e ===
            o("WAWebPaymentDetailsModels").PaymentDetailsStatus.MARKED_AS_PAID
          ? 1
          : 0;
    }
    function d(e, t, n) {
      return n !== e.statusUpdatedAtMs
        ? n > e.statusUpdatedAtMs
        : e.status !== t &&
            e.status !==
              o("WAWebPaymentDetailsModels").PaymentDetailsStatus.FAILED;
    }
    function m(e) {
      return e.bankName != null || e.transactionE2eId != null;
    }
    function p(e, t) {
      if (!m(t)) return !0;
      var n = _(e.bankName, t.bankName),
        r = _(e.transactionE2eId, t.transactionE2eId);
      return n !== !1 && r !== !1 && (n === !0 || r === !0);
    }
    function _(e, t) {
      return e == null || t == null ? null : e === t;
    }
    ((l.replacesAppSwitchStatus = e),
      (l.applyAppSwitchStatus = s),
      (l.applySystemStatus = u));
  },
  98,
);
