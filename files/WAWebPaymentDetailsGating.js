__d(
  "WAWebPaymentDetailsGating",
  [
    "WAWebBrazilPaymentState",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMobilePlatforms",
    "WAWebMsgType",
    "WAWebPaymentsGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["msgKey"];
    function s(e) {
      return u({
        interactivePayload: e.interactivePayload,
        interactiveType: e.interactiveType,
        msgKey: e.id,
        nativeFlowName: e.nativeFlowName,
        type: e.type,
      });
    }
    function u(t) {
      var n = t.msgKey,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = n.remote;
      return (
        a.isUser() &&
        !a.isBot() &&
        (!o("WAWebMobilePlatforms").isSMB() || n.fromMe) &&
        o("WAWebBrazilPaymentState").isReceiptAndStateStamped(m(r)) &&
        o("WAWebPaymentsGatingUtils").isBrazilPaymentDetailsAvailable()
      );
    }
    function c(e) {
      return (
        (!o("WAWebMobilePlatforms").isSMB() || e) &&
        o("WAWebPaymentsGatingUtils").isBrazilPaymentDetailsAvailable()
      );
    }
    function d(e) {
      return m({
        interactivePayload: e.interactivePayload,
        interactiveType: e.interactiveType,
        nativeFlowName: e.nativeFlowName,
        type: e.type,
      });
    }
    function m(e) {
      var t = e.interactivePayload,
        n = e.interactiveType,
        a = e.nativeFlowName,
        i = e.type;
      if (
        i === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        n === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
        a === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO &&
        t != null &&
        t.buttons
      ) {
        var l = t;
        return l;
      }
      return null;
    }
    ((l.isPaymentDetailsEnabledForMsg = s),
      (l.isPaymentDetailsEnabledFor = u),
      (l.isPaymentDetailsEnabledForReceiptNotice = c),
      (l.getPaymentInfoPayload = d));
  },
  98,
);
