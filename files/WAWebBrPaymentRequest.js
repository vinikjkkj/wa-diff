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
      OFFSITE_CARD_PAY: "offsite_card_pay",
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
          a,
          i = JSON.parse(t),
          l = i.payment_setting;
        if (l == null) return null;
        var s = e.cast(l.type);
        if (s == null) return null;
        var u = { paymentType: s };
        if (
          s === e.BOLETO &&
          ((n = l.boleto) == null ? void 0 : n.digitable_line) != null
        )
          u.digitableLine = l.boleto.digitable_line;
        else if (
          s === e.PIX_DYNAMIC_CODE &&
          ((r = l.pix_dynamic_code) == null ? void 0 : r.code) != null
        )
          u.code = l.pix_dynamic_code.code;
        else if (
          s === e.PAYMENT_LINK &&
          ((o = l.payment_link) == null ? void 0 : o.uri) != null
        )
          ((u.uri = l.payment_link.uri),
            typeof l.payment_link.psp == "string" &&
              (u.psp = l.payment_link.psp));
        else if (
          s === e.OFFSITE_CARD_PAY &&
          ((a = l.offsite_card_pay) == null ? void 0 : a.last_four_digits) !=
            null
        )
          u.lastFourDigits = l.offsite_card_pay.last_four_digits;
        else return null;
        return u;
      } catch (e) {
        return null;
      }
    }
    function p(e) {
      return e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE
        ? null
        : _({
            interactivePayload: e.interactivePayload,
            interactiveType: e.interactiveType,
            nativeFlowName: e.nativeFlowName,
            type: e.type,
          });
    }
    function _(e) {
      var t = e.interactivePayload,
        n = e.interactiveType,
        a = e.nativeFlowName,
        i = e.type;
      if (
        a !== r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST ||
        i !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
        n !== r("WAWebInteractiveMessageType").NATIVE_FLOW
      )
        return null;
      var l = t == null ? void 0 : t.buttons;
      if (l == null) return null;
      for (var s = [], u = 0; u < l.length; u++) {
        var c = l[u],
          d = c == null ? void 0 : c.buttonParamsJson;
        if (d != null) {
          var p = m(d);
          p != null && s.push(p);
        }
      }
      return s.length > 0 ? s : null;
    }
    function f(t) {
      var n;
      if (
        t.nativeFlowName !==
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST
      )
        return !1;
      var o = (n = t.interactivePayload) == null ? void 0 : n.buttons;
      return o == null
        ? !1
        : o.some(function (t) {
            var n = t == null ? void 0 : t.buttonParamsJson;
            return n != null && g(n) === e.OFFSITE_CARD_PAY;
          });
    }
    function g(t) {
      try {
        var n,
          r = JSON.parse(t);
        return e.cast((n = r.payment_setting) == null ? void 0 : n.type);
      } catch (e) {
        return null;
      }
    }
    function h(e) {
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
      (l.getPaymentRequestInfoFor = _),
      (l.hasPaymentRequestOffsiteCardPay = f),
      (l.parsePaymentRequestButton = h));
  },
  98,
);
