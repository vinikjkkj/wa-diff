__d(
  "WAWebBrazilPaymentStateUpdateRules",
  [
    "WALogger",
    "WAWebBrazilPaymentAppSwitchStatus",
    "WAWebBrazilPaymentState",
    "WAWebPaymentDetailsModels",
    "WAWebPaymentDetailsStatusPolicy",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      return !_(e) || h(e, t) || p(e, t, n);
    }
    function u(t, n) {
      return (
        f(t) &&
          n &&
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[br-payment-state] rejecting a receipt update not sent by the payer",
              ])),
          ),
        g(t, n)
      );
    }
    function c(e, t, n, r, a) {
      var i = m(e, t, n, r, a);
      return g(t, n)
        ? t.receiptMsgId != null
          ? o("WAWebBrazilPaymentState").applyReceiptUpdate(
              i,
              t.receiptMsgId,
              r,
            )
          : o("WAWebBrazilPaymentState").applyReceiptRemoval(i, r)
        : i;
    }
    function d(e, t) {
      return e.timestampMs > 0 ? Math.min(e.timestampMs, t) : t;
    }
    function m(e, t, n, r, a) {
      if (h(t, n))
        return o("WAWebBrazilPaymentState").applyStatusUpdate(
          e,
          o("WAWebPaymentDetailsModels").PaymentDetailsStatus.MARKED_AS_PAID,
          o("WAWebPaymentDetailsModels").PaymentDetailsActor.REQUESTER,
          r,
          a,
        );
      var i = t.status;
      return i != null && p(t, n, a)
        ? o("WAWebBrazilPaymentAppSwitchStatus").applySystemStatus(e, i, r, t)
        : e;
    }
    function p(e, t, n) {
      var r = e.status;
      return (
        !t &&
        n === o("WAWebPaymentDetailsModels").PaymentDetailsFlow.APP_SWITCH &&
        e.actor === o("WAWebPaymentDetailsModels").PaymentDetailsActor.SYSTEM &&
        r != null &&
        o("WAWebPaymentDetailsStatusPolicy").isSetByTheBank(r)
      );
    }
    function _(e) {
      return e.status != null && e.actor != null;
    }
    function f(e) {
      return e.receiptMsgId != null || e.isReceiptRemoved;
    }
    function g(e, t) {
      return f(e) && !t;
    }
    function h(e, t) {
      return (
        t &&
        e.status ===
          o("WAWebPaymentDetailsModels").PaymentDetailsStatus.MARKED_AS_PAID &&
        e.actor === o("WAWebPaymentDetailsModels").PaymentDetailsActor.REQUESTER
      );
    }
    ((l.isAllowedStatusUpdate = s),
      (l.hasAcceptedReceiptUpdate = u),
      (l.getNextBrazilPaymentState = c),
      (l.getUpdateTimestampMs = d));
  },
  98,
);
