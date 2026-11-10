__d(
  "WAWebPaymentDetailsStatusPolicy",
  ["$InternalEnum", "WAWebPaymentDetailsModels"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
      "NEUTRAL",
      "SETTLED",
      "POSITIVE",
      "NEGATIVE",
    ]);
    function s(e) {
      return e === o("WAWebPaymentDetailsModels").PaymentDetailsFlow.COPY_PASTE
        ? o("WAWebPaymentDetailsModels").PaymentDetailsStatus.NOT_CONFIRMED
        : e === o("WAWebPaymentDetailsModels").PaymentDetailsFlow.APP_SWITCH
          ? o("WAWebPaymentDetailsModels").PaymentDetailsStatus.NOT_PAID_YET
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function u(e) {
      return (
        e ===
          o("WAWebPaymentDetailsModels").PaymentDetailsStatus.MARKED_AS_PAID ||
        e === o("WAWebPaymentDetailsModels").PaymentDetailsStatus.PAYMENT_SENT
      );
    }
    function c(e) {
      return (
        e === o("WAWebPaymentDetailsModels").PaymentDetailsStatus.PENDING ||
        e ===
          o("WAWebPaymentDetailsModels").PaymentDetailsStatus.PAYMENT_SENT ||
        e === o("WAWebPaymentDetailsModels").PaymentDetailsStatus.FAILED
      );
    }
    function d(e, t) {
      return (
        e === o("WAWebPaymentDetailsModels").PaymentDetailsPov.REQUESTER &&
        (t ===
          o("WAWebPaymentDetailsModels").PaymentDetailsStatus.NOT_CONFIRMED ||
          t ===
            o("WAWebPaymentDetailsModels").PaymentDetailsStatus.NOT_PAID_YET)
      );
    }
    function m(e, t) {
      return (
        e === o("WAWebPaymentDetailsModels").PaymentDetailsPov.PAYER &&
        t == null
      );
    }
    function p(e, t) {
      return (
        e === o("WAWebPaymentDetailsModels").PaymentDetailsPov.PAYER &&
        t != null
      );
    }
    function _(e, t) {
      return (
        e === o("WAWebPaymentDetailsModels").PaymentDetailsPov.PAYER && !u(t)
      );
    }
    function f(e) {
      return u(e);
    }
    function g(t) {
      return t ===
        o("WAWebPaymentDetailsModels").PaymentDetailsStatus.NOT_CONFIRMED ||
        t ===
          o("WAWebPaymentDetailsModels").PaymentDetailsStatus.NOT_PAID_YET ||
        t === o("WAWebPaymentDetailsModels").PaymentDetailsStatus.PENDING
        ? e.NEUTRAL
        : t ===
            o("WAWebPaymentDetailsModels").PaymentDetailsStatus.MARKED_AS_PAID
          ? e.SETTLED
          : t ===
              o("WAWebPaymentDetailsModels").PaymentDetailsStatus.PAYMENT_SENT
            ? e.POSITIVE
            : t === o("WAWebPaymentDetailsModels").PaymentDetailsStatus.FAILED
              ? e.NEGATIVE
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })();
    }
    function h(e, t, n) {
      return (
        e === o("WAWebPaymentDetailsModels").PaymentDetailsPov.PAYER &&
        t === o("WAWebPaymentDetailsModels").PaymentDetailsFlow.APP_SWITCH &&
        n === o("WAWebPaymentDetailsModels").PaymentDetailsStatus.FAILED
      );
    }
    function y(e, t, n) {
      var r = n.bankName,
        a = n.transactionE2eId;
      return (
        e === o("WAWebPaymentDetailsModels").PaymentDetailsFlow.APP_SWITCH &&
        u(t) &&
        (r != null || a != null)
      );
    }
    ((l.PaymentDetailsStatusTone = e),
      (l.getDefaultPaymentStatus = s),
      (l.isTerminalPaymentStatus = u),
      (l.isSetByTheBank = c),
      (l.canMarkAsPaid = d),
      (l.canAttachReceipt = m),
      (l.canDeleteReceipt = p),
      (l.showsCopyCta = _),
      (l.showsDownloadAndShare = f),
      (l.getPaymentStatusTone = g),
      (l.showsCopyCodeRetry = h),
      (l.showsPaymentInformation = y));
  },
  98,
);
