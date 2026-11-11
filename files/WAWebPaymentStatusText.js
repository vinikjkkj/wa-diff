__d(
  "WAWebPaymentStatusText",
  ["fbt", "WATimeUtils", "WAWeb-moment", "WAWebProtobufsWeb.pb"],
  function (t, n, r, o, a, i, l, s) {
    var e = 6e4;
    function u(e, t, n, r) {
      return (
        r === void 0 && (r = o("WATimeUtils").unixTime()),
        t != null ? p(t, n, r) : m(e, n, r)
      );
    }
    function c(e, t) {
      return u(e, t, null);
    }
    function d(t, n) {
      if (t == null) return s._(/*BTDS*/ "Pending");
      var o = n * 1e3,
        a = t * 1e3;
      if (a - o > e) {
        var i = r("WAWeb-moment")(o).to(r("WAWeb-moment")(a));
        return s._(/*BTDS*/ "Pending (expires {timeSpan})", [
          s._param("timeSpan", i),
        ]);
      } else if (a - o > 0)
        return s._(/*BTDS*/ "Pending (expires in less than 1 minute)");
      return s._(/*BTDS*/ "Pending (expiring)");
    }
    function m(e, t, n) {
      var r = null,
        a = null;
      if (e != null)
        switch (e) {
          case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.PROCESSING:
            ((r = s._(/*BTDS*/ "Processing")), (a = "pending"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.COMPLETE:
            ((r = s._(/*BTDS*/ "Completed")), (a = "success"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.SENT:
            ((r = s._(/*BTDS*/ "Pending")), (a = "pending"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.NEED_TO_ACCEPT:
            ((r = d(t, n)), (a = "pending"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.COULD_NOT_COMPLETE:
            ((r = s._(/*BTDS*/ "Failed")), (a = "failed"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.REFUNDED:
            ((r = s._(/*BTDS*/ "Failed")), (a = "failed"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.EXPIRED:
            ((r = s._(/*BTDS*/ "Expired")), (a = "failed"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.REJECTED:
            ((r = s._(/*BTDS*/ "Declined")), (a = "failed"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.CANCELLED:
            ((r = s._(/*BTDS*/ "Canceled")), (a = "failed"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.WAITING_FOR_PAYER:
            ((r = d(t, n)), (a = "pending"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.WAITING:
            ((r = d(t, n)), (a = "pending"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.UNKNOWN_STATUS:
            ((r = null), (a = null));
            break;
        }
      return { str: r, themeClassName: a };
    }
    function p(e, t, n) {
      var r = null,
        a = null;
      if (e != null)
        switch (e) {
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.UNKNOWN:
            ((r = null), (a = null));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.PENDING_SETUP:
            ((r = d(t, n)), (a = "pending"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
            .PENDING_RECEIVER_SETUP:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_INIT:
            ((r = s._(/*BTDS*/ "Pending")), (a = "pending"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.INIT:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
            .FAILED_PROCESSING:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
            .FAILED_RECEIVER_PROCESSING:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.FAILED_DA:
            ((r = s._(/*BTDS*/ "Processing")), (a = "pending"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.SUCCESS:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COMPLETED:
            ((r = s._(/*BTDS*/ "Completed")), (a = "success"));
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
            ((r = s._(/*BTDS*/ "Failed")), (a = "failed"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.EXPIRED_TXN:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_EXPIRED:
            ((r = s._(/*BTDS*/ "Expired")), (a = "pending"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_SUCCESS:
            ((r = d(t, n)), (a = "pending"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_REJECTED:
            ((r = s._(/*BTDS*/ "Declined")), (a = "pending"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_CANCELED:
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
            .COLLECT_CANCELLING:
            ((r = s._(/*BTDS*/ "Canceled")), (a = "pending"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.IN_REVIEW:
            ((r = s._(/*BTDS*/ "In review")), (a = "pending"));
            break;
        }
      return { str: r, themeClassName: a };
    }
    ((l.getPaymentStatusText = u), (l.getPaymentStatusTextForRecord = c));
  },
  226,
);
