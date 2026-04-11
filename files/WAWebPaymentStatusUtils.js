__d(
  "WAWebPaymentStatusUtils",
  ["$InternalEnum", "WALogger", "WAWebProtobufsWeb.pb"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({
        TYPE_UNSET: 0,
        TYPE_P2P_SENT: 1,
        TYPE_P2P_RCVD: 2,
        TYPE_P2P_GRP: 3,
        TYPE_P2P_NO_INFO: 4,
        TYPE_FUTURE: 5,
        TYPE_P2P_REQ_SENT: 10,
        TYPE_P2P_REQ_RCVD: 20,
        TYPE_P2P_REQ_SCHEDULED_PAYMENT_RCVD: 21,
        TYPE_P2P_REQ_GRP: 30,
        TYPE_P2M_SENT: 100,
        TYPE_P2M_RCVD: 200,
        TYPE_P2M_PAYOUT: 300,
        TYPE_MISSING_DETAILS: 400,
        TYPE_DEPOSIT: 500,
        TYPE_REFUND: 600,
        TYPE_WITHDRAWAL: 700,
      }),
      u = n("$InternalEnum")({
        STATUS_UNSET: 0,
        REQUEST_PAY_INIT: 11,
        REQUEST_PAY_SUCCESS: 12,
        REQUEST_PAY_FAILED: 13,
        REQUEST_PAY_FAILED_RISK: 14,
        REQUEST_PAY_REJECTED: 15,
        REQUEST_PAY_EXPIRED: 16,
        REQUEST_PAY_FULFILLED: 17,
        REQUEST_PAY_CANCELLED: 18,
        REQUEST_PAY_CANCELLING: 19,
        REQUEST_PAY_SCHEDULED_PAYMENT_SUCCESS: 20,
        RECV_PAY_INIT: 101,
        RECV_PAY_PENDING_SETUP: 102,
        RECV_PAY_PENDING: 103,
        RECV_PAY_RETRY_ON_FAILURE: 104,
        RECV_PAY_FAILURE: 105,
        RECV_PAY_SUCCESS: 106,
        RECV_PAY_EXPIRED: 107,
        RECV_PAY_FAILURE_RISK: 108,
        RECV_PAY_WITHDRAWAL_PROCESSING: 109,
        RECV_PAY_WITHDRAWAL_FAILURE: 110,
        RECV_PAY_WITHDRAWAL_PERMANENT_FAILED: 111,
        RECV_PAY_SENDER_CANCELED: 112,
        SEND_PAY_INIT: 401,
        SEND_PAY_PENDING_RECEIVER: 402,
        SEND_PAY_PENDING: 403,
        SEND_PAY_REFUND_PENDING: 404,
        SEND_PAY_SUCCESS: 405,
        SEND_PAY_FAILURE: 406,
        SEND_PAY_FAILURE_RISK: 407,
        SEND_PAY_REFUNDED: 408,
        SEND_PAY_REFUND_FAILED: 409,
        SEND_PAY_FAILURE_RECEIVER: 410,
        SEND_PAY_REFUND_FAILED_PROCESSING: 411,
        SEND_PAY_PENDING_REFUND: 412,
        SEND_PAY_AUTH_CANCEL_FAILED_PROCESSING: 413,
        SEND_PAY_AUTH_CANCEL_FAILED: 414,
        SEND_PAY_AUTH_CANCELED: 415,
        SEND_PAY_EXPIRED: 416,
        SEND_PAY_AUTH_SUCCESS: 417,
        SEND_PAY_AUTH_SUCCESS_CANCELING: 418,
        SEND_PAY_IN_REVIEW: 419,
        SEND_PAY_PENDING_PROCESSING: 420,
        SEND_PAY_USER_CANCELED: 421,
        WITHDRAWAL_INIT: 601,
        WITHDRAWAL_PENDING: 602,
        WITHDRAWAL_IN_REVIEW: 603,
        WITHDRAWAL_SUCCESS: 604,
        WITHDRAWAL_FAILED: 605,
        WITHDRAWAL_USER_CANCELED: 606,
        WITHDRAWAL_EXPIRED: 607,
        WITHDRAWAL_ACTIVE: 608,
      }),
      c = {
        TYPE_P2P: "p2p",
        TYPE_P2M: "p2m",
        TYPE_P2M_PAYOUT: "payout",
        TYPE_WITHDRAWAL: "withdrawal",
        TYPE_DEPOSIT: "deposit",
        TYPE_REFUND: "refund",
      },
      d = {
        PENDING_RECEIVER_SETUP: "PENDING_RECEIVER_SETUP",
        PENDING_SETUP: "PENDING_SETUP",
        PENDING: "PENDING",
        INITIAL: "INITIAL",
        SUCCESS: "SUCCESS",
        COMPLETED: "COMPLETED",
        IN_REVIEW: "IN_REVIEW",
        FAILED: "FAILED",
        DECLINED: "DECLINED",
        FAILURE: "FAILURE",
        FAILED_RISK: "FAILED_RISK",
        FAILED_PROCESSING: "FAILED_PROCESSING",
        FAILED_RECEIVER_PROCESSING: "FAILED_RECEIVER_PROCESSING",
        REFUND_FAILED_PROCESSING: "REFUND_FAILED_PROCESSING",
        REFUNDED: "REFUNDED",
        REFUND_FAILED: "REFUND_FAILED",
        EXPIRED: "EXPIRED",
        CANCELED: "CANCELLED",
        AUTH_SUCCESS: "AUTH_SUCCESS",
        AUTH_CANCELED: "AUTH_CANCELED",
        AUTH_CANCEL_FAILED_PROCESSING: "AUTH_CANCEL_FAILED_PROCESSING",
        AUTH_CANCEL_FAILED: "AUTH_CANCEL_FAILED",
        COLLECT_SUCCESS: "COLLECT_SUCCESS",
        COLLECT_FAILED: "COLLECT_FAILED",
        COLLECT_REJECTED: "COLLECT_REJECTED",
        COLLECT_EXPIRED: "COLLECT_EXPIRED",
        COLLECT_CANCELED: "COLLECT_CANCELED",
        FAILED_DA: "FAILED_DA",
        FAILED_DA_FINAL: "FAILED_DA_FINAL",
        REFUND_FAILED_DA: "REFUND_FAILED_DA",
        COLLECT_FAILED_RISK: "COLLECT_FAILED_RISK",
        WITHDRAWAL_PROCESSING: "WITHDRAWAL_PROCESSING",
        WITHDRAWAL_FAILURE: "WITHDRAWAL_FAILURE",
        WITHDRAWAL_PERMANENT_FAILED: "WITHDRAWAL_PERMANENT_FAILED",
        WITHDRAWAL_ACTIVE: "WITHDRAWAL_ACTIVE",
      };
    function m(e, t) {
      if (e == null)
        return o("WAWebProtobufsWeb.pb").PaymentInfo$Status.UNKNOWN_STATUS;
      switch (e) {
        case u.SEND_PAY_INIT:
        case u.SEND_PAY_PENDING:
        case u.RECV_PAY_INIT:
        case u.RECV_PAY_PENDING:
        case u.RECV_PAY_RETRY_ON_FAILURE:
        case u.REQUEST_PAY_INIT:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$Status.PROCESSING;
        case u.SEND_PAY_PENDING_RECEIVER:
        case u.SEND_PAY_FAILURE_RECEIVER:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$Status.SENT;
        case u.REQUEST_PAY_SUCCESS:
          return t === s.TYPE_P2P_REQ_SENT
            ? o("WAWebProtobufsWeb.pb").PaymentInfo$Status.WAITING_FOR_PAYER
            : o("WAWebProtobufsWeb.pb").PaymentInfo$Status.WAITING;
        case u.RECV_PAY_PENDING_SETUP:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$Status.NEED_TO_ACCEPT;
        case u.SEND_PAY_SUCCESS:
        case u.RECV_PAY_SUCCESS:
        case u.REQUEST_PAY_FULFILLED:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$Status.COMPLETE;
        case u.SEND_PAY_FAILURE:
        case u.SEND_PAY_FAILURE_RISK:
        case u.SEND_PAY_PENDING_REFUND:
        case u.SEND_PAY_REFUND_PENDING:
        case u.SEND_PAY_REFUND_FAILED:
        case u.SEND_PAY_REFUND_FAILED_PROCESSING:
        case u.RECV_PAY_FAILURE:
        case u.REQUEST_PAY_FAILED:
        case u.REQUEST_PAY_FAILED_RISK:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$Status
            .COULD_NOT_COMPLETE;
        case u.SEND_PAY_REFUNDED:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$Status.REFUNDED;
        case u.RECV_PAY_EXPIRED:
        case u.REQUEST_PAY_EXPIRED:
        case u.SEND_PAY_AUTH_CANCELED:
        case u.SEND_PAY_AUTH_CANCEL_FAILED:
        case u.SEND_PAY_AUTH_CANCEL_FAILED_PROCESSING:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$Status.EXPIRED;
        case u.REQUEST_PAY_REJECTED:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$Status.REJECTED;
        case u.REQUEST_PAY_CANCELLED:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$Status.CANCELLED;
        case u.STATUS_UNSET:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$Status.UNKNOWN_STATUS;
        case u.REQUEST_PAY_CANCELLING:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$Status.UNKNOWN_STATUS;
        default:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$Status.UNKNOWN_STATUS;
      }
    }
    function p(e, t) {
      if (!t) return u.STATUS_UNSET;
      var n = t.toUpperCase();
      switch (e) {
        case s.TYPE_P2P_SENT:
        case s.TYPE_P2M_SENT:
        case s.TYPE_DEPOSIT:
          switch (n) {
            case d.PENDING_RECEIVER_SETUP:
              return u.SEND_PAY_PENDING_RECEIVER;
            case d.FAILED_DA:
              return u.SEND_PAY_PENDING;
            case d.REFUND_FAILED_DA:
              return u.SEND_PAY_REFUND_PENDING;
            case d.FAILED_RISK:
              return u.SEND_PAY_FAILURE_RISK;
            case d.INITIAL:
              return u.SEND_PAY_INIT;
            case d.SUCCESS:
            case d.COMPLETED:
              return u.SEND_PAY_SUCCESS;
            case d.FAILURE:
            case d.FAILED:
              return u.SEND_PAY_FAILURE;
            case d.REFUNDED:
              return u.SEND_PAY_REFUNDED;
            case d.REFUND_FAILED:
              return u.SEND_PAY_REFUND_FAILED;
            case d.FAILED_RECEIVER_PROCESSING:
              return u.SEND_PAY_FAILURE_RECEIVER;
            case d.REFUND_FAILED_PROCESSING:
              return u.SEND_PAY_REFUND_FAILED_PROCESSING;
            case d.FAILED_DA_FINAL:
              return u.SEND_PAY_PENDING_REFUND;
            case d.AUTH_CANCEL_FAILED_PROCESSING:
              return u.SEND_PAY_AUTH_CANCEL_FAILED_PROCESSING;
            case d.AUTH_CANCEL_FAILED:
              return u.SEND_PAY_AUTH_CANCEL_FAILED;
            case d.AUTH_CANCELED:
              return u.SEND_PAY_AUTH_CANCELED;
            case d.EXPIRED:
              return u.SEND_PAY_EXPIRED;
            case d.IN_REVIEW:
              return u.SEND_PAY_IN_REVIEW;
            case d.PENDING:
              return u.SEND_PAY_PENDING_PROCESSING;
            case d.CANCELED:
              return u.SEND_PAY_USER_CANCELED;
          }
          break;
        case s.TYPE_P2P_RCVD:
        case s.TYPE_P2M_RCVD:
          switch (n) {
            case d.PENDING_SETUP:
              return u.RECV_PAY_PENDING_SETUP;
            case d.FAILED_DA:
              return u.RECV_PAY_PENDING;
            case d.FAILED_PROCESSING:
              return u.RECV_PAY_RETRY_ON_FAILURE;
            case d.SUCCESS:
            case d.COMPLETED:
              return u.RECV_PAY_SUCCESS;
            case d.FAILURE:
            case d.FAILED:
              return u.RECV_PAY_FAILURE;
            case d.EXPIRED:
              return u.RECV_PAY_EXPIRED;
            case d.FAILED_RISK:
              return u.RECV_PAY_FAILURE_RISK;
            case d.WITHDRAWAL_PROCESSING:
              return u.RECV_PAY_WITHDRAWAL_PROCESSING;
            case d.WITHDRAWAL_FAILURE:
              return u.RECV_PAY_WITHDRAWAL_FAILURE;
            case d.WITHDRAWAL_PERMANENT_FAILED:
              return u.RECV_PAY_WITHDRAWAL_PERMANENT_FAILED;
            case d.CANCELED:
              return u.RECV_PAY_SENDER_CANCELED;
          }
          break;
        case s.TYPE_P2P_REQ_SENT:
        case s.TYPE_P2P_REQ_RCVD:
          switch (n) {
            case d.COLLECT_SUCCESS:
              return u.REQUEST_PAY_SUCCESS;
            case d.COLLECT_FAILED:
              return u.REQUEST_PAY_FAILED;
            case d.COLLECT_FAILED_RISK:
              return u.REQUEST_PAY_FAILED_RISK;
            case d.COLLECT_REJECTED:
              return u.REQUEST_PAY_REJECTED;
            case d.COLLECT_EXPIRED:
              return u.REQUEST_PAY_EXPIRED;
            case d.COLLECT_CANCELED:
              return u.REQUEST_PAY_CANCELLED;
          }
          break;
        case s.TYPE_P2P_REQ_SCHEDULED_PAYMENT_RCVD:
          switch (n) {
            case d.COLLECT_SUCCESS:
              return u.REQUEST_PAY_SCHEDULED_PAYMENT_SUCCESS;
            case d.AUTH_SUCCESS:
              return u.SEND_PAY_AUTH_SUCCESS;
          }
          break;
        case s.TYPE_REFUND:
          switch (n) {
            case d.SUCCESS:
            case d.COMPLETED:
              return u.RECV_PAY_SUCCESS;
          }
          break;
        case s.TYPE_WITHDRAWAL:
          switch (n) {
            case d.PENDING:
              return u.WITHDRAWAL_PENDING;
            case d.IN_REVIEW:
              return u.WITHDRAWAL_IN_REVIEW;
            case d.SUCCESS:
            case d.COMPLETED:
              return u.WITHDRAWAL_SUCCESS;
            case d.FAILED:
            case d.DECLINED:
              return u.WITHDRAWAL_FAILED;
            case d.CANCELED:
              return u.WITHDRAWAL_USER_CANCELED;
            case d.EXPIRED:
              return u.WITHDRAWAL_EXPIRED;
            case d.WITHDRAWAL_ACTIVE:
              return u.WITHDRAWAL_ACTIVE;
          }
          break;
        default:
          return u.STATUS_UNSET;
      }
      return u.STATUS_UNSET;
    }
    function _(e) {
      if (e == null)
        return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.UNKNOWN;
      switch (e) {
        case u.RECV_PAY_EXPIRED:
        case u.SEND_PAY_EXPIRED:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.EXPIRED_TXN;
        case u.RECV_PAY_FAILURE:
        case u.SEND_PAY_FAILURE:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.FAILED;
        case u.RECV_PAY_INIT:
        case u.SEND_PAY_INIT:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.INIT;
        case u.RECV_PAY_PENDING_SETUP:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.PENDING_SETUP;
        case u.RECV_PAY_PENDING:
        case u.SEND_PAY_PENDING:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.FAILED_DA;
        case u.RECV_PAY_RETRY_ON_FAILURE:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
            .FAILED_PROCESSING;
        case u.RECV_PAY_SUCCESS:
        case u.SEND_PAY_SUCCESS:
        case u.REQUEST_PAY_FULFILLED:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.SUCCESS;
        case u.REQUEST_PAY_CANCELLED:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
            .COLLECT_CANCELED;
        case u.REQUEST_PAY_CANCELLING:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
            .COLLECT_CANCELLING;
        case u.REQUEST_PAY_EXPIRED:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
            .COLLECT_EXPIRED;
        case u.REQUEST_PAY_FAILED_RISK:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
            .COLLECT_FAILED_RISK;
        case u.REQUEST_PAY_FAILED:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_FAILED;
        case u.REQUEST_PAY_INIT:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_INIT;
        case u.REQUEST_PAY_REJECTED:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
            .COLLECT_REJECTED;
        case u.REQUEST_PAY_SUCCESS:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
            .COLLECT_SUCCESS;
        case u.SEND_PAY_AUTH_CANCELED:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.AUTH_CANCELED;
        case u.SEND_PAY_AUTH_CANCEL_FAILED_PROCESSING:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
            .AUTH_CANCEL_FAILED_PROCESSING;
        case u.SEND_PAY_AUTH_CANCEL_FAILED:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
            .AUTH_CANCEL_FAILED;
        case u.SEND_PAY_FAILURE_RECEIVER:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
            .FAILED_RECEIVER_PROCESSING;
        case u.SEND_PAY_FAILURE_RISK:
        case u.RECV_PAY_FAILURE_RISK:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.FAILED_RISK;
        case u.SEND_PAY_PENDING_RECEIVER:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
            .PENDING_RECEIVER_SETUP;
        case u.SEND_PAY_PENDING_REFUND:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
            .FAILED_DA_FINAL;
        case u.SEND_PAY_REFUNDED:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.REFUNDED_TXN;
        case u.SEND_PAY_REFUND_FAILED_PROCESSING:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
            .REFUND_FAILED_PROCESSING;
        case u.SEND_PAY_REFUND_FAILED:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.REFUND_FAILED;
        case u.SEND_PAY_REFUND_PENDING:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
            .REFUND_FAILED_DA;
        case u.SEND_PAY_IN_REVIEW:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.IN_REVIEW;
        case u.STATUS_UNSET:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.UNKNOWN;
        default:
          return o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.UNKNOWN;
      }
    }
    function f(t, n) {
      if (t) {
        var r = t.toLowerCase();
        switch (r) {
          case c.TYPE_P2P:
            return n ? s.TYPE_P2P_SENT : s.TYPE_P2P_RCVD;
          case c.TYPE_P2M:
            return n ? s.TYPE_P2M_SENT : s.TYPE_P2M_RCVD;
          case c.TYPE_P2M_PAYOUT:
            return s.TYPE_P2M_PAYOUT;
          case c.TYPE_DEPOSIT:
            return s.TYPE_DEPOSIT;
          case c.TYPE_REFUND:
            return s.TYPE_REFUND;
          case c.TYPE_WITHDRAWAL:
            return s.TYPE_WITHDRAWAL;
          default:
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "parsePaymentTransactionType payment transaction string=",
                  "",
                ])),
              r,
            );
        }
      }
      return n ? s.TYPE_P2P_SENT : s.TYPE_P2P_RCVD;
    }
    function g(e) {
      return (
        e === o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COMPLETED ||
        e === o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.SUCCESS
      );
    }
    function h(e) {
      return g(e)
        ? e
        : o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_INIT;
    }
    ((l.PaymentTransactionType = s),
      (l.NotificationTransactionStatus = u),
      (l.PaymentTransactionTypeServerString = c),
      (l.PaymentTransactionStatusServerString = d),
      (l.getPaymentWebStatus = m),
      (l.getNotificationTransactionStatus = p),
      (l.getPaymentTxnWebStatus = _),
      (l.getPaymentTransactionType = f),
      (l.determinePaymentRequestFulfilledStatus = h));
  },
  98,
);
