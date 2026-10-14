__d(
  "WAWebBrazilPaymentStateUpdateRules",
  ["WALogger", "WAWebBrazilPaymentState", "WAWebPaymentDetailsModels"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return !m(e) || f(e, t);
    }
    function u(t, n) {
      return (
        p(t) &&
          n &&
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[br-payment-state] rejecting a receipt update not sent by the payer",
              ])),
          ),
        _(t, n)
      );
    }
    function c(e, t, n, r) {
      var a = f(t, n)
        ? o("WAWebBrazilPaymentState").applyStatusUpdate(
            e,
            o("WAWebPaymentDetailsModels").PaymentDetailsStatus.MARKED_AS_PAID,
            o("WAWebPaymentDetailsModels").PaymentDetailsActor.REQUESTER,
            r,
          )
        : e;
      return _(t, n)
        ? t.receiptMsgId != null
          ? o("WAWebBrazilPaymentState").applyReceiptUpdate(
              a,
              t.receiptMsgId,
              r,
            )
          : o("WAWebBrazilPaymentState").applyReceiptRemoval(a, r)
        : a;
    }
    function d(e, t) {
      return e.timestampMs > 0 ? Math.min(e.timestampMs, t) : t;
    }
    function m(e) {
      return e.status != null && e.actor != null;
    }
    function p(e) {
      return e.receiptMsgId != null || e.isReceiptRemoved;
    }
    function _(e, t) {
      return p(e) && !t;
    }
    function f(e, t) {
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
