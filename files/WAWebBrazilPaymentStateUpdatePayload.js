__d(
  "WAWebBrazilPaymentStateUpdatePayload",
  [
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebPaymentDetailsModels",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return JSON.stringify({
        payment_message_id: e,
        status: o("WAWebPaymentDetailsModels").PaymentDetailsStatus
          .MARKED_AS_PAID,
        actor: o("WAWebPaymentDetailsModels").PaymentDetailsActor.REQUESTER,
        timestamp: t,
      });
    }
    function s(e, t, n) {
      return JSON.stringify({
        payment_message_id: e,
        receipt_message_id: t,
        timestamp: n,
      });
    }
    function u(e, t) {
      return JSON.stringify({
        payment_message_id: e,
        receipt_removed: !0,
        timestamp: t,
      });
    }
    function c(e) {
      return (
        e != null &&
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        e.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").BR_PAYMENT_STATE
      );
    }
    function d(e) {
      var t;
      if (
        !c(e) ||
        e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
        !((t = e.interactivePayload) != null && t.buttons)
      )
        return null;
      var n = e.interactivePayload;
      return m(_(n));
    }
    function m(e) {
      var t,
        n,
        r = p(e);
      if (r == null) return null;
      var a = f(r.payment_message_id);
      return a == null
        ? null
        : {
            paymentMsgId: a,
            status:
              (t = o("WAWebPaymentDetailsModels").PaymentDetailsStatus.cast(
                f(r.status),
              )) != null
                ? t
                : null,
            actor:
              (n = o("WAWebPaymentDetailsModels").PaymentDetailsActor.cast(
                f(r.actor),
              )) != null
                ? n
                : null,
            receiptMsgId: f(r.receipt_message_id),
            isReceiptRemoved: r.receipt_removed === !0,
            timestampMs:
              typeof r.timestamp == "number" && r.timestamp > 0
                ? r.timestamp
                : 0,
          };
    }
    function p(e) {
      if (e == null) return null;
      try {
        var t = JSON.parse(e);
        return t != null && typeof t == "object" && !Array.isArray(t)
          ? t
          : null;
      } catch (e) {
        return null;
      }
    }
    function _(e) {
      var t = e.buttons;
      if (t.length !== 1) return null;
      var n = t[0].buttonParamsJson;
      return n == null || n === "" ? null : n;
    }
    function f(e) {
      return typeof e == "string" && e !== "" ? e : null;
    }
    ((l.buildMarkAsPaidUpdateParams = e),
      (l.buildReceiptUpdateParams = s),
      (l.buildReceiptRemovalParams = u),
      (l.isBrazilPaymentStateUpdateMsg = c),
      (l.getBrazilPaymentStateUpdate = d),
      (l.parseBrazilPaymentStateUpdate = m));
  },
  98,
);
