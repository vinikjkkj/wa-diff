__d(
  "WAWebBizAiSmartComposerPaymentMessage",
  ["WAWebInteractiveMessagesNativeFlowName", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    var e = new Set([
      r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS,
      r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO,
    ]);
    function s(e) {
      var t;
      if (!u(e)) return null;
      var n = c(
        (t = e.interactivePayload) == null ||
          (t = t.buttons) == null ||
          (t = t[0]) == null
          ? void 0
          : t.buttonParamsJson,
      );
      return { chatId: e.id.remote, note: d(n) };
    }
    function u(t) {
      var n = t.nativeFlowName;
      return (
        t.isNewMsg === !0 &&
        t.local === !0 &&
        t.nativeFlowInteractiveMsg === !0 &&
        t.id.fromMe &&
        t.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        n != null &&
        e.has(n)
      );
    }
    function c(e) {
      if (e == null) return null;
      try {
        var t = JSON.parse(e);
        return t != null && typeof t == "object" ? t : null;
      } catch (e) {
        return null;
      }
    }
    function d(e) {
      var t = e == null ? void 0 : e.additional_note;
      return typeof t == "string" && t !== "" ? t : null;
    }
    l.getSentPaymentRequest = s;
  },
  98,
);
