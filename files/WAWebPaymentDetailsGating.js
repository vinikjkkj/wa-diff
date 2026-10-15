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
        i !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
        n !== r("WAWebInteractiveMessageType").NATIVE_FLOW ||
        !(t != null && t.buttons)
      )
        return null;
      var l = t;
      return p(a, l) ? l : null;
    }
    function p(e, t) {
      return (
        e === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO ||
        (e === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
          o("WAWebBrazilPaymentState").isPixCodeRequestPayload(t))
      );
    }
    ((l.isPaymentDetailsEnabledForMsg = s),
      (l.isPaymentDetailsEnabledFor = u),
      (l.isPaymentDetailsEnabledForReceiptNotice = c),
      (l.getPaymentRequestPayload = d));
  },
  98,
);
