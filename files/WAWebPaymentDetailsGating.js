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
      return u(babelHelpers.extends({}, _(e), { msgKey: e.id }));
    }
    function u(t) {
      var n = t.msgKey,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return (
        d(n, r) &&
        o("WAWebPaymentsGatingUtils").isBrazilPaymentDetailsAvailable()
      );
    }
    function c(e) {
      return (
        d(e.id, _(e)) &&
        o("WAWebPaymentsGatingUtils").isBrazilPaymentStateSyncAvailable()
      );
    }
    function d(e, t) {
      var n = e.remote;
      return (
        n.isUser() &&
        !n.isBot() &&
        (!o("WAWebMobilePlatforms").isSMB() || e.fromMe) &&
        o("WAWebBrazilPaymentState").isReceiptAndStateStamped(f(t))
      );
    }
    function m(e) {
      return (
        (!o("WAWebMobilePlatforms").isSMB() || e) &&
        o("WAWebPaymentsGatingUtils").isBrazilPaymentDetailsAvailable()
      );
    }
    function p(e) {
      return f(_(e));
    }
    function _(e) {
      return {
        interactivePayload: e.interactivePayload,
        interactiveType: e.interactiveType,
        nativeFlowName: e.nativeFlowName,
        type: e.type,
      };
    }
    function f(e) {
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
      return g(a, l) ? l : null;
    }
    function g(e, t) {
      return (
        e === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO ||
        (e === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
          o("WAWebBrazilPaymentState").isPixCodeRequestPayload(t))
      );
    }
    ((l.isPaymentDetailsEnabledForMsg = s),
      (l.isPaymentDetailsEnabledFor = u),
      (l.isPaymentStateSyncEnabledForMsg = c),
      (l.isPaymentDetailsEnabledForReceiptNotice = m),
      (l.getPaymentRequestPayload = p));
  },
  98,
);
