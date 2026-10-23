__d(
  "WAWebBrPixRequestRowAttributes",
  [
    "WAWebGetMessageChatTypeFromWid",
    "WAWebOrderPaymentStatus",
    "WAWebP2XFunnelIdGenerator",
    "WAWebWamEnumMessageChatType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "receiver_event_log_key";
    function s(e, t, n) {
      return e
        ? f(t, n)
        : {
            cta: "copy_pix_key",
            is_cta_available: !0,
            payment_method_choice: "pix",
            p2m_flow: "PIX_KEY",
            currency: "BRL",
            is_template: !1,
            accepted_payment_method: ["pix"],
            message_type: "payment_info",
            order_funnel_id: n,
            chat_type: t,
          };
    }
    function u(e, t) {
      return e
        ? g(t)
        : {
            cta: "copy_pix_key",
            isCtaAvailable: !0,
            paymentMethodChoice: "pix",
            p2pFlow: "PIX_KEY",
            currency: "BRL",
            isTemplate: !1,
            acceptedPaymentMethod: ["pix"],
            messageType: "payment_info",
            chatType: t,
          };
    }
    function c(e, t, n, r) {
      return e
        ? f(t, n)
        : {
            cta: "order_details",
            p2m_type: o("WAWebOrderPaymentStatus").OrderP2MType.P2M_PRO,
            is_cta_available: !0,
            payment_method_choice: "pix",
            p2m_flow: "PIX_PAYMENT_REQUEST",
            currency: "BRL",
            is_template: !1,
            accepted_payment_method: ["pix"],
            order_amount: r,
            message_type: "checkout",
            has_product_variants: !1,
            has_attachment: !1,
            order_funnel_id: n,
          };
    }
    function d(e, t) {
      return e
        ? g(t)
        : {
            cta: "order_details",
            p2mType: o("WAWebOrderPaymentStatus").OrderP2MType.P2M_PRO,
            isCtaAvailable: !0,
            paymentMethodChoice: "pix",
            p2mFlow: "PIX_PAYMENT_REQUEST",
            currency: "BRL",
            isTemplate: !1,
            acceptedPaymentMethod: ["pix"],
            messageType: "checkout",
            hasProductVariants: !1,
            hasAttachment: !1,
            chatType: t,
          };
    }
    function m(e) {
      return Object.keys(o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE)[
        o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(e.id)
      ].toLowerCase();
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new (o("WAWebP2XFunnelIdGenerator").P2XFunnelIdGenerator)(
              t,
              e.id.id + e.to.toJid(),
            ),
            r = yield n.genFunnelInfo();
          return r.funnel_id;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return {
        cta: "p2p_pix",
        flow: "P2P",
        chat_type: e,
        is_cta_available: !0,
        accepted_payment_method: ["pix"],
        payment_method_choice: "pix",
        order_funnel_id: t,
        referral: "chat_attachment",
      };
    }
    function g(e) {
      return {
        cta: "p2p_pix",
        flow: "P2P",
        chatType: e,
        isCtaAvailable: !0,
        acceptedPaymentMethod: ["pix"],
        paymentMethodChoice: "pix",
        referral: "chat_attachment",
      };
    }
    ((l.RECEIVER_EVENT_LOG_KEY = e),
      (l.getCopyPixKeyAttributes = s),
      (l.getCopyPixKeyBuyerAttributes = u),
      (l.getCopyPixCodeAttributes = c),
      (l.getCopyPixCodeBuyerAttributes = d),
      (l.getChatTypeString = m),
      (l.genOrderFunnelId = p));
  },
  98,
);
