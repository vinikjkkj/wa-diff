__d(
  "WAWebFormatNfmText",
  ["WAWebBizFormatInteractiveMsg", "WAWebInteractiveMessagesNativeFlowName"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (
        e.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
      ) {
        var t = o("WAWebBizFormatInteractiveMsg").formatOrderStatusMessageBody(
          e,
        );
        if (t != null) return t;
      } else if (
        e.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS
      ) {
        var n = o(
          "WAWebBizFormatInteractiveMsg",
        ).formatOrderPaymentStatusMessage(e);
        if (n != null) return n;
      } else if (
        e.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD
      ) {
        var a = o(
          "WAWebBizFormatInteractiveMsg",
        ).formatOrderPaymentMethodMessage(e);
        if (a != null) return a;
      }
      return e.caption || "";
    }
    function s(t) {
      if (
        t.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
      ) {
        var n = o(
          "WAWebBizFormatInteractiveMsg",
        ).formatOrderDetailsMessagePreview(t);
        if (n != null) return n;
      } else if (
        t.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
      ) {
        var a = o(
          "WAWebBizFormatInteractiveMsg",
        ).formatPaymentInfoMessagePreview(t);
        if (a != null) return a;
      }
      return e(t);
    }
    ((l.formatNFMText = e), (l.formatNFMTextPreview = s));
  },
  98,
);
