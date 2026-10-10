__d(
  "WAWebBrPaymentInteractionLogger",
  [
    "WALogger",
    "WAWebBizFrontendGatingUtils",
    "WAWebBrPaymentSettingsUtils",
    "WAWebBrazilPaymentsGeoGating",
    "WAWebBuyerEventLogger",
    "WAWebCloudApiSignalLogger",
    "WAWebContactUtils",
    "WAWebFrontendMsgGetters",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebOrderDetailsCloudApiSignalResolver",
    "WAWebOrderDetailsCreationActionWamEventUtil",
    "WAWebOrderPaymentStatus",
    "WAWebP2XFunnelIdGenerator",
    "WAWebPsStructuredMessageInteractionWamEvent",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumCloudApiSignalTemplateType",
    "WAWebWamEnumInteractionType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageChatType",
    "WAWebWamEnumStructuredMessageClass",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "api_receiver_event_log_key",
      u = "receiver_event_log_key";
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n;
          if (!o("WAWebMsgGetters").getIsSentByMe(t.unsafe())) {
            var r = yield C(t, u),
              a = (n = t.senderObj) == null ? void 0 : n.id.toJid(),
              i = o("WAWebContactUtils").getMaybeBizPlatformForLogging(a),
              l = i === o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN,
              s = o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
              c = y(s),
              d = new (o(
                "WAWebPsStructuredMessageInteractionWamEvent",
              ).PsStructuredMessageInteractionWamEvent)({
                bizPlatform: l
                  ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN
                  : i,
                businessOwnerJid: a,
                messageClass: o("WAWebWamEnumStructuredMessageClass")
                  .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageClassAttributes: JSON.stringify(
                  l
                    ? g(c, r)
                    : {
                        cta: "copy_pix_key",
                        is_cta_available: !0,
                        payment_method_choice: "pix",
                        p2m_flow: "PIX_KEY",
                        currency: "BRL",
                        is_template: !1,
                        accepted_payment_method: ["pix"],
                        message_type: "payment_info",
                        order_funnel_id: r,
                        chat_type: c,
                      },
                ),
                messageInteraction: o("WAWebWamEnumInteractionType")
                  .INTERACTION_TYPE.COPY_PIX_KEY,
                messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE,
              });
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "CopyPixKey Log",
                ])),
            ),
              d.commit(),
              o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
                isLoggingEnabled: o(
                  "WAWebBizFrontendGatingUtils",
                ).isCopyPixKeyBuyerLoggingEnabled(a),
                psFunnelId: r,
                attributes: l
                  ? h(c)
                  : {
                      cta: "copy_pix_key",
                      isCtaAvailable: !0,
                      paymentMethodChoice: "pix",
                      p2pFlow: "PIX_KEY",
                      currency: "BRL",
                      isTemplate: !1,
                      acceptedPaymentMethod: ["pix"],
                      messageType: "payment_info",
                      chatType: c,
                    },
                interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
                  .COPY_PIX_KEY,
                bizPlatform: l
                  ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN
                  : i,
              }));
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          if (!o("WAWebMsgGetters").getIsSentByMe(e.unsafe())) {
            var r = yield C(e, u),
              a = (n = e.senderObj) == null ? void 0 : n.id.toJid(),
              i = o("WAWebContactUtils").getMaybeBizPlatformForLogging(a),
              l = i === o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN,
              s = o("WAWebFrontendMsgGetters").getChat(e.unsafe()),
              c = y(s),
              d = {
                bizPlatform: l
                  ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN
                  : i,
                businessOwnerJid: a,
                messageClass: o("WAWebWamEnumStructuredMessageClass")
                  .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageClassAttributes: JSON.stringify(
                  l
                    ? g(c, r)
                    : {
                        cta: "order_details",
                        p2m_type: o("WAWebOrderPaymentStatus").OrderP2MType
                          .P2M_PRO,
                        is_cta_available: !0,
                        payment_method_choice: "pix",
                        p2m_flow: "PIX_PAYMENT_REQUEST",
                        currency: "BRL",
                        is_template: !1,
                        accepted_payment_method: ["pix"],
                        order_amount: t.totalAmount,
                        message_type: "checkout",
                        has_product_variants: !1,
                        has_attachment: !1,
                        order_funnel_id: r,
                      },
                ),
                messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE,
              };
            (new (o(
              "WAWebPsStructuredMessageInteractionWamEvent",
            ).PsStructuredMessageInteractionWamEvent)(
              babelHelpers.extends({}, d, {
                messageInteraction: o("WAWebWamEnumInteractionType")
                  .INTERACTION_TYPE.USER_PAY_NOW,
              }),
            ).commit(),
              new (o(
                "WAWebPsStructuredMessageInteractionWamEvent",
              ).PsStructuredMessageInteractionWamEvent)(
                babelHelpers.extends({}, d, {
                  messageInteraction: o("WAWebWamEnumInteractionType")
                    .INTERACTION_TYPE.COPY_PIX_CODE,
                }),
              ).commit());
            var m = l
              ? h(c)
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
                  chatType: c,
                };
            (o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
              isLoggingEnabled: o(
                "WAWebBizFrontendGatingUtils",
              ).isCopyPixCodeBuyerLoggingEnabled(a),
              psFunnelId: r,
              attributes: m,
              interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
                .USER_PAY_NOW,
              bizPlatform: l
                ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN
                : i,
            }),
              o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
                isLoggingEnabled: o(
                  "WAWebBizFrontendGatingUtils",
                ).isCopyPixCodeBuyerLoggingEnabled(a),
                psFunnelId: r,
                attributes: m,
                interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
                  .COPY_PIX_CODE,
                bizPlatform: l
                  ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN
                  : i,
              }));
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a = e.msg,
            i = e.orderAcceptedPaymentMethod,
            l = e.orderInfo,
            u = e.surface;
          if (!o("WAWebMsgGetters").getIsSentByMe(a.unsafe())) {
            var c = [];
            o("WAWebBrPaymentSettingsUtils").hasValidDynamicPix(l) &&
              c.push(
                o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.PIX,
              );
            var d = o("WAWebFrontendMsgGetters").getChat(a.unsafe());
            (o("WAWebBrazilPaymentsGeoGating").isBoletoEnabled(d) &&
              o("WAWebBrPaymentSettingsUtils").hasValidBoletoCode(l) &&
              c.push(
                o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.BOLETO,
              ),
              o("WAWebBrazilPaymentsGeoGating").isPaymentLinkEnabled(d) &&
                o("WAWebBrPaymentSettingsUtils").hasValidPaymentLink(l) &&
                c.push(
                  o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods
                    .PAYMENT_LINK,
                ),
              o("WAWebBrPaymentSettingsUtils").hasValidCard(l) &&
                c.push(
                  o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods
                    .NATIVE,
                ));
            var m = JSON.stringify(c),
              p = yield C(a, s),
              _ = new (o(
                "WAWebPsStructuredMessageInteractionWamEvent",
              ).PsStructuredMessageInteractionWamEvent)({
                bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.ENT,
                businessOwnerJid:
                  (t = a.senderObj) == null ? void 0 : t.id.toJid(),
                messageClass: o("WAWebWamEnumStructuredMessageClass")
                  .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageClassAttributes: JSON.stringify({
                  order_funnel_id: p,
                  wa_pay_registered: !1,
                  is_template: !1,
                  is_cta_available: !0,
                  p2m_flow: o("WAWebOrderDetailsCreationActionWamEventUtil")
                    .P2MFlow.ORDER,
                  cta: r("WAWebInteractiveMessagesNativeFlowName")
                    .ORDER_DETAILS,
                  accepted_pay_methods: m,
                  p2m_type: o("WAWebOrderPaymentStatus").OrderP2MType.P2M_PRO,
                  payment_method_choice: i,
                  is_simplified_order: l.isOrderNodeOmitted,
                  payment_method_surface: u,
                }),
                messageInteraction:
                  i ===
                  o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.PIX
                    ? o("WAWebWamEnumInteractionType").INTERACTION_TYPE
                        .COPY_PIX_CODE
                    : o("WAWebWamEnumInteractionType").INTERACTION_TYPE
                        .USER_PAY_NOW,
                messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE,
              });
            (_.commit(),
              v({ msg: a, orderAcceptedPaymentMethod: i, orderInfo: l }),
              o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
                isLoggingEnabled: o(
                  "WAWebBizFrontendGatingUtils",
                ).isCopyPixCodeBuyerLoggingEnabled(
                  (n = a.senderObj) == null ? void 0 : n.id.toJid(),
                ),
                psFunnelId: p,
                attributes: {
                  cta: r("WAWebInteractiveMessagesNativeFlowName")
                    .ORDER_DETAILS,
                  isCtaAvailable: !0,
                  paymentMethodChoice: i,
                  p2mFlow: o("WAWebOrderDetailsCreationActionWamEventUtil")
                    .P2MFlow.ORDER,
                  currency: "BRL",
                  isTemplate: !1,
                  acceptedPaymentMethod: c.map(function (e) {
                    return e;
                  }),
                  p2mType: o("WAWebOrderPaymentStatus").OrderP2MType.P2M_PRO,
                  chatType: y(d),
                  isSimplifiedOrder: l.isOrderNodeOmitted,
                },
                interaction:
                  i ===
                  o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.PIX
                    ? o("WAWebWamEnumInteractionType").INTERACTION_TYPE
                        .COPY_PIX_CODE
                    : o("WAWebWamEnumInteractionType").INTERACTION_TYPE
                        .USER_PAY_NOW,
                bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.ENT,
              }));
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
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
    function h(e) {
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
    function y(e) {
      return Object.keys(o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE)[
        o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(e.id)
      ].toLowerCase();
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new (o("WAWebP2XFunnelIdGenerator").P2XFunnelIdGenerator)(
              t,
              e.id.id + e.to.toJid(),
            ),
            r = yield n.genFunnelInfo();
          return r.funnel_id;
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      var t = e.msg,
        n = e.orderAcceptedPaymentMethod,
        r = e.orderInfo,
        a = o(
          "WAWebOrderDetailsCloudApiSignalResolver",
        ).resolveOrderDetailsCloudApiSignal(r, n);
      if (a != null) {
        var i = t.unsafe();
        o("WAWebCloudApiSignalLogger").logCloudApiPaymentTemplateClick({
          chat: o("WAWebFrontendMsgGetters").getChat(i),
          ctaAction: a.ctaAction,
          ctaButtonIndex: a.ctaButtonIndex,
          msg: i,
          templateType: o("WAWebWamEnumCloudApiSignalTemplateType")
            .CLOUD_API_SIGNAL_TEMPLATE_TYPE.ORDER_DETAILS,
        });
      }
    }
    ((l.logPaymentInfoOrderDetailsInteractiveActionForRecepient = c),
      (l.logPaymentRequestInteractiveAction = m),
      (l.logAPIMerchantPaymentMethodClickEvent = _));
  },
  98,
);
