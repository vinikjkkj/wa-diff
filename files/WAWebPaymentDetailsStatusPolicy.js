__d(
  "WAWebPaymentDetailsStatusPolicy",
  ["WAWebPaymentDetailsModels"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        e === o("WAWebPaymentDetailsModels").PaymentDetailsStatus.MARKED_AS_PAID
      );
    }
    function s(t, n) {
      return (
        t === o("WAWebPaymentDetailsModels").PaymentDetailsPov.REQUESTER &&
        !e(n)
      );
    }
    function u(e, t) {
      return (
        e === o("WAWebPaymentDetailsModels").PaymentDetailsPov.PAYER &&
        t == null
      );
    }
    function c(e, t) {
      return (
        e === o("WAWebPaymentDetailsModels").PaymentDetailsPov.PAYER &&
        t != null
      );
    }
    function d(t, n) {
      return (
        t === o("WAWebPaymentDetailsModels").PaymentDetailsPov.PAYER && !e(n)
      );
    }
    ((l.isTerminalPaymentStatus = e),
      (l.canMarkAsPaid = s),
      (l.canAttachReceipt = u),
      (l.canDeleteReceipt = c),
      (l.showsCopyCta = d));
  },
  98,
);
