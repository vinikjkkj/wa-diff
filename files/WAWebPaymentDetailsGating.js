__d(
  "WAWebPaymentDetailsGating",
  [
    "WAWebBrazilPaymentState",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMobilePlatforms",
    "WAWebMsgType",
    "WAWebPaymentsGatingUtils",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["msgKey"],
      s = ["msgKey"];
    function u(e) {
      return c(babelHelpers.extends({}, b(e), { msgKey: e.id }));
    }
    function c(t) {
      var n = t.msgKey,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return (
        m(n, r) &&
        o("WAWebPaymentsGatingUtils").isBrazilPaymentDetailsAvailable()
      );
    }
    function d(e) {
      return (
        m(e.id, b(e)) &&
        o("WAWebPaymentsGatingUtils").isBrazilPaymentStateSyncAvailable()
      );
    }
    function m(e, t) {
      var n = e.remote,
        r = v(t);
      return (
        n.isUser() &&
        !n.isBot() &&
        (!o("WAWebMobilePlatforms").isSMB() || e.fromMe) &&
        (o("WAWebBrazilPaymentState").isReceiptAndStateStamped(r) ||
          (o("WAWebBrazilPaymentState").isAppSwitchReceiptAndStateStamped(r) &&
            p()))
      );
    }
    function p() {
      return r("justknobx")._("7531");
    }
    function _(e) {
      return f(babelHelpers.extends({}, b(e), { msgKey: e.id }));
    }
    function f(e) {
      var t = e.msgKey,
        n = babelHelpers.objectWithoutPropertiesLoose(e, s),
        a = v(n);
      return (
        r("justknobx")._("7565") &&
        a != null &&
        g(a) &&
        h(t) &&
        o("WAWebPaymentsGatingUtils").isBrazilPaymentDetailsAvailable()
      );
    }
    function g(e) {
      return (
        o("WAWebBrazilPaymentState").getReceiptAndStateBubbleVersion(e) !=
          null &&
        !o("WAWebBrazilPaymentState").isBubbleViewLogged(e) &&
        (!o("WAWebBrazilPaymentState").isAppSwitchPaymentRequest(e) || p())
      );
    }
    function h(e) {
      var t = e.remote;
      return (
        !e.fromMe &&
        t.isUser() &&
        !t.isBot() &&
        !o("WAWebMobilePlatforms").isSMB()
      );
    }
    function y(e) {
      return (
        (!o("WAWebMobilePlatforms").isSMB() || e) &&
        o("WAWebPaymentsGatingUtils").isBrazilPaymentDetailsAvailable()
      );
    }
    function C(e) {
      return v(b(e));
    }
    function b(e) {
      return {
        interactivePayload: e.interactivePayload,
        interactiveType: e.interactiveType,
        nativeFlowName: e.nativeFlowName,
        type: e.type,
      };
    }
    function v(e) {
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
      return S(a, l) ? l : null;
    }
    function S(e, t) {
      return (
        e === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO ||
        (e === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
          o("WAWebBrazilPaymentState").isPixCodeRequestPayload(t))
      );
    }
    ((l.isPaymentDetailsEnabledForMsg = u),
      (l.isPaymentDetailsEnabledFor = c),
      (l.isPaymentStateSyncEnabledForMsg = d),
      (l.canLogPaymentBubbleView = _),
      (l.isPaymentDetailsEnabledForReceiptNotice = y),
      (l.getPaymentRequestPayload = C));
  },
  98,
);
