__d(
  "WAWebBrPaymentRequest",
  [
    "$InternalEnum",
    "WAWebABProps",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      BOLETO: "boleto",
      PIX_DYNAMIC_CODE: "pix_dynamic_code",
      PAYMENT_LINK: "payment_link",
    });
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "br_payments_payment_request_cta",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "br_payments_payment_detection_enhancement",
      );
    }
    function c(e) {
      return e ? s() : u();
    }
    function d(e) {
      return e ? s() : (u(), !1);
    }
    function m(t) {
      try {
        var n,
          r,
          o,
          a = JSON.parse(t),
          i = a.payment_setting;
        if (i == null) return null;
        var l = e.cast(i.type);
        if (l == null) return null;
        var s = { paymentType: l };
        if (
          l === e.BOLETO &&
          ((n = i.boleto) == null ? void 0 : n.digitable_line) != null
        )
          s.digitableLine = i.boleto.digitable_line;
        else if (
          l === e.PIX_DYNAMIC_CODE &&
          ((r = i.pix_dynamic_code) == null ? void 0 : r.code) != null
        )
          s.code = i.pix_dynamic_code.code;
        else if (
          l === e.PAYMENT_LINK &&
          ((o = i.payment_link) == null ? void 0 : o.uri) != null
        )
          s.uri = i.payment_link.uri;
        else return null;
        return s;
      } catch (e) {
        return null;
      }
    }
    function p(e) {
      var t, n;
      if (
        e.nativeFlowName !==
          r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST ||
        e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
        e.interactiveType !== r("WAWebInteractiveMessageType").NATIVE_FLOW ||
        !((t = e.interactivePayload) != null && t.buttons)
      )
        return null;
      var a = (n = e.interactivePayload) == null ? void 0 : n.buttons;
      if (a == null) return null;
      for (var i = [], l = 0; l < a.length; l++) {
        var s = a[l],
          u = s == null ? void 0 : s.buttonParamsJson;
        if (u != null) {
          var c = m(u);
          c != null && i.push(c);
        }
      }
      return i.length > 0 ? i : null;
    }
    function _(e) {
      if (
        (e == null ? void 0 : e.name) !==
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST
      )
        return null;
      var t = e.buttonParamsJson;
      return t == null ? null : m(t);
    }
    ((l.PaymentRequestCtaType = e),
      (l.isPaymentDetectionEnhancementEnabled = u),
      (l.isPaymentRequestFeatureEnabled = c),
      (l.shouldShowPaymentRequestPayWithHeader = d),
      (l.getPaymentRequestInfo = p),
      (l.parsePaymentRequestButton = _));
  },
  98,
);
