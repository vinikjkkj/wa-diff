__d(
  "WAWebOrderPaymentStatus",
  [
    "$InternalEnum",
    "WAWebE2EProtoUtils",
    "WAWebInteractiveMessageType",
    "WAWebMsgType",
    "WAWebOrderStatus",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = -1e3,
      u = (e = n("$InternalEnum"))({
        Pending: "pending",
        Captured: "captured",
        Failed: "failed",
      }),
      c = e({ Confirm: "confirm", PaymentInstruction: "payment_instruction" }),
      d = e({
        CPI: "cpi",
        PIX: "pix",
        NATIVE: "native",
        PAYMENT_LINK: "payment_link",
        BOLETO: "boleto",
      }),
      m = e({
        P2M_LITE: "p2m_lite",
        P2M_PRO: "p2m_pro",
        P2M_BASIC: "p2m_basic",
      }),
      p = function (t) {
        var e = {};
        try {
          e = JSON.parse(t);
        } catch (e) {
          return null;
        }
        if (e == null) return null;
        var n = e,
          r = n.payment_method,
          o = n.payment_status,
          a = n.reference_id;
        return a == null || (o == null && r == null)
          ? null
          : { refId: a, paymentMethod: r, paymentStatus: o };
      },
      _ = function (t) {
        if (t == null) return null;
        try {
          var e = JSON.parse(t),
            n = e.order,
            r = e.reference_id,
            a = o("WAWebOrderStatus").OrderStatus.cast(
              n == null ? void 0 : n.status,
            );
          return r == null || a == null ? null : a;
        } catch (e) {
          return null;
        }
      },
      f = function (t) {
        var e;
        if (
          t.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
          t.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
          o("WAWebE2EProtoUtils").isOrderNativeFlow(t.nativeFlowName) &&
          (e = t.interactivePayload) != null &&
          e.buttons
        ) {
          var n = t.interactivePayload,
            a = n.buttons[0].buttonParamsJson;
          if (a != null) return p(a);
        }
        return null;
      },
      g = function (t) {
        var e;
        return t.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
          t.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
          o("WAWebE2EProtoUtils").isOrderNativeFlow(t.nativeFlowName) &&
          (e = t.interactivePayload) != null &&
          e.buttons
          ? t.interactivePayload.buttons[0]
          : null;
      },
      h = function (t) {
        var e = g(t);
        if (e == null) return null;
        var n = e.buttonParamsJson,
          r = e.name;
        return r != null && n != null ? p(n) : null;
      },
      y = function (t, n) {
        var e = t.msgs.getModelsArray().slice(s),
          a = null,
          i = e.findLast(function (e) {
            if (
              e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
              e.subtype === "phone_only_feature" &&
              e.quotedMsg != null
            ) {
              var t;
              if (
                ((a = f(e.quotedMsg)),
                ((t = a) == null ? void 0 : t.refId) === n)
              )
                return !0;
            } else if (
              e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
              e.interactiveType ===
                r("WAWebInteractiveMessageType").NATIVE_FLOW &&
              o("WAWebE2EProtoUtils").isOrderNativeFlow(e.nativeFlowName)
            ) {
              var i;
              if (((a = h(e)), ((i = a) == null ? void 0 : i.refId) === n))
                return !0;
            }
            return !1;
          });
        return i != null && a != null ? a : null;
      };
    ((l.OrderPaymentStatus = u),
      (l.OrderPaymentMethod = c),
      (l.OrderAcceptedPaymentMethods = d),
      (l.OrderP2MType = m),
      (l.paramsJsonToOrderPaymentInfo = p),
      (l.paramsJsonToOrderStatus = _),
      (l.getOrderPaymentStatusInfo = f),
      (l.getOrderPaymentStatusInfoFromNativeFlow = h),
      (l.findLastOrderPaymentStatusInfo = y));
  },
  98,
);
