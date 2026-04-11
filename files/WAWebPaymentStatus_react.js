__d(
  "WAWebPaymentStatus.react",
  [
    "fbt",
    "WATimeUtils",
    "WAWeb-moment",
    "WAWebProtobufsWeb.pb",
    "react",
    "stylex",
    "useWAWebForceUpdate",
    "useWAWebInterval",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        status: { fontWeight: "xk50ysn", $$css: !0 },
        failed: { color: "xcfled2", $$css: !0 },
        pending: { color: "x1bjprs3", $$css: !0 },
        success: { color: "xqn6mkg", $$css: !0 },
      },
      m = 6e4;
    function p(t) {
      "use no forget";
      var n = t.expiryTimestamp,
        o = t.paymentStatus,
        a = t.paymentTxnStatus;
      _();
      var i, l;
      if (a != null) {
        var s = h(a, n);
        ((i = s.str), (l = s.themeClassName));
      } else {
        var u = g(o, n);
        ((i = u.str), (l = u.themeClassName));
      }
      if (i == null) return null;
      var m = !!l && d[l];
      return c.jsx(
        "span",
        babelHelpers.extends(
          { "data-testid": void 0 },
          (e || (e = r("stylex"))).props(d.status, m),
          { children: i },
        ),
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      "use no forget";
      var e = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      r("useWAWebInterval")(e, 1e3, { immediate: !0 });
    }
    function f(e) {
      if (e == null) return s._(/*BTDS*/ "Pending");
      var t = o("WATimeUtils").unixTime() * 1e3,
        n = e * 1e3;
      if (n - t > m) {
        var a = r("WAWeb-moment")(t).to(r("WAWeb-moment")(n));
        return s._(/*BTDS*/ "Pending (expires {timeSpan})", [
          s._param("timeSpan", a),
        ]);
      } else if (n - t > 0)
        return s._(/*BTDS*/ "Pending (expires in less than 1 minute)");
      return s._(/*BTDS*/ "Pending (expiring)");
    }
    function g(e, t) {
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
            ((n = f(t)), (r = "pending"));
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
            ((n = f(t)), (r = "pending"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.WAITING:
            ((n = f(t)), (r = "pending"));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.UNKNOWN_STATUS:
            ((n = null), (r = null));
            break;
        }
      return { str: n, themeClassName: r };
    }
    function h(e, t) {
      var n = null,
        r = null;
      if (e != null)
        switch (e) {
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.UNKNOWN:
            ((n = null), (r = null));
            break;
          case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.PENDING_SETUP:
            ((n = f(t)), (r = "pending"));
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
            ((n = f(t)), (r = "pending"));
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
    l.default = p;
  },
  226,
);
