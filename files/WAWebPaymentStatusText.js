__d(
  "WAWebPaymentStatusText",
  ["fbt", "WATimeUtils", "WAWeb-moment", "WAWebProtobufsWeb.pb"],
  function (t, n, r, o, a, i, l, s) {
    var e = 6e4;
    function u(e, t, n) {
      return t != null ? p(t, n) : m(e, n);
    }
    function c(e, t) {
      return u(e, t, null);
    }
    function d(t) {
      if (t == null) return s._(/*BTDS*/ "Pending");
      var n = o("WATimeUtils").unixTime() * 1e3,
        a = t * 1e3;
      if (a - n > e) {
        var i = r("WAWeb-moment")(n).to(r("WAWeb-moment")(a));
        return s._(/*BTDS*/ "Pending (expires {timeSpan})", [
          s._param("timeSpan", i),
        ]);
      } else if (a - n > 0)
        return s._(/*BTDS*/ "Pending (expires in less than 1 minute)");
      return s._(/*BTDS*/ "Pending (expiring)");
    }
    function m(e, t) {
      var n = null,
        r = null;
      if (e != null)
        switch (e) {
          case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.PROCESSING:
            ((n = s._(/*BTDS*/ "Processing")), (r = "pending"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.COMPLETE:
            ((n = s._(/*BTDS*/ "Completed")), (r = "success"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.SENT:
            ((n = s._(/*BTDS*/ "Pending")), (r = "pending"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.NEED_TO_ACCEPT:
            ((n = d(t)), (r = "pending"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.COULD_NOT_COMPLETE:
            ((n = s._(/*BTDS*/ "Failed")), (r = "failed"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.REFUNDED:
            ((n = s._(/*BTDS*/ "Failed")), (r = "failed"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.EXPIRED:
            ((n = s._(/*BTDS*/ "Expired")), (r = "failed"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.REJECTED:
            ((n = s._(/*BTDS*/ "Declined")), (r = "failed"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.CANCELLED:
            ((n = s._(/*BTDS*/ "Canceled")), (r = "failed"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.WAITING_FOR_PAYER:
            ((n = d(t)), (r = "pending"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.WAITING:
            ((n = d(t)), (r = "pending"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.UNKNOWN_STATUS:
            ((n = null), (r = null));
            break;
        }
      return { str: n, themeClassName: r };
    }
    function p(e, t) {
      var n = null,
        r = null;
      if (e != null)
        switch (e) {
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.UNKNOWN:
            ((n = null), (r = null));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.PENDING_SETUP:
            ((n = d(t)), (r = "pending"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
            .PENDING_RECEIVER_SETUP:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_INIT:
            ((n = s._(/*BTDS*/ "Pending")), (r = "pending"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.INIT:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
            .FAILED_PROCESSING:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
            .FAILED_RECEIVER_PROCESSING:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.FAILED_DA:
            ((n = s._(/*BTDS*/ "Processing")), (r = "pending"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.SUCCESS:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COMPLETED:
            ((n = s._(/*BTDS*/ "Completed")), (r = "success"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.FAILED:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.FAILED_RISK:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.FAILED_DA_FINAL:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.REFUNDED_TXN:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.REFUND_FAILED:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
            .REFUND_FAILED_PROCESSING:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.REFUND_FAILED_DA:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.AUTH_CANCELED:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
            .AUTH_CANCEL_FAILED_PROCESSING:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
            .AUTH_CANCEL_FAILED:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_FAILED:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
            .COLLECT_FAILED_RISK:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.REVERSAL_SUCCESS:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.REVERSAL_PENDING:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.REFUND_PENDING:
            ((n = s._(/*BTDS*/ "Failed")), (r = "failed"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.EXPIRED_TXN:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_EXPIRED:
            ((n = s._(/*BTDS*/ "Expired")), (r = "pending"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_SUCCESS:
            ((n = d(t)), (r = "pending"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_REJECTED:
            ((n = s._(/*BTDS*/ "Declined")), (r = "pending"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_CANCELED:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
            .COLLECT_CANCELLING:
            ((n = s._(/*BTDS*/ "Canceled")), (r = "pending"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.IN_REVIEW:
            ((n = s._(/*BTDS*/ "In review")), (r = "pending"));
            break;
        }
      return { str: n, themeClassName: r };
    }
    ((l.getPaymentStatusText = u), (l.getPaymentStatusTextForRecord = c));
  },
  226,
);
