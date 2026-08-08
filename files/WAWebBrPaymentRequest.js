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
          u.uri = l.payment_link.uri;
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
    function _(t) {
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
            return n != null && f(n) === e.OFFSITE_CARD_PAY;
          });
    }
    function f(t) {
      try {
        var n,
          r = JSON.parse(t);
        return e.cast((n = r.payment_setting) == null ? void 0 : n.type);
      } catch (e) {
        return null;
      }
    }
    function g(e) {
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
      (l.hasPaymentRequestOffsiteCardPay = _),
      (l.parsePaymentRequestButton = g));
  },
  98,
);
