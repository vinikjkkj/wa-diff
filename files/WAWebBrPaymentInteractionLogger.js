__d(
  "WAWebBrPaymentInteractionLogger",
  [
    "WALogger",
    "WAWebBizFrontendGatingUtils",
    "WAWebBrPaymentSettingsUtils",
    "WAWebBrPixRequestRowAttributes",
    "WAWebBrazilPaymentsGeoGating",
    "WAWebBuyerEventLogger",
    "WAWebCloudApiSignalLogger",
    "WAWebContactUtils",
    "WAWebFrontendMsgGetters",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebOrderDetailsCloudApiSignalResolver",
    "WAWebOrderDetailsCreationActionWamEventUtilP2MFlow",
    "WAWebOrderPaymentStatus",
    "WAWebPsStructuredMessageInteractionWamEvent",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumCloudApiSignalTemplateType",
    "WAWebWamEnumInteractionType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStructuredMessageClass",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "api_receiver_event_log_key";
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n;
          if (!o("WAWebMsgGetters").getIsSentByMe(t.unsafe())) {
            var r = yield o("WAWebBrPixRequestRowAttributes").genOrderFunnelId(
                t,
                o("WAWebBrPixRequestRowAttributes").RECEIVER_EVENT_LOG_KEY,
              ),
              a = (n = t.senderObj) == null ? void 0 : n.id.toJid(),
              i = o("WAWebContactUtils").getMaybeBizPlatformForLogging(a),
              l = i === o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN,
              s = o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
              u = o("WAWebBrPixRequestRowAttributes").getChatTypeString(s),
              c = new (o(
                "WAWebPsStructuredMessageInteractionWamEvent",
              ).PsStructuredMessageInteractionWamEvent)({
                bizPlatform: l
                  ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN
                  : i,
                businessOwnerJid: a,
                messageClass: o("WAWebWamEnumStructuredMessageClass")
                  .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageClassAttributes: JSON.stringify(
                  o("WAWebBrPixRequestRowAttributes").getCopyPixKeyAttributes(
                    l,
                    u,
                    r,
                  ),
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
              c.commit(),
              o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
                isLoggingEnabled: o(
                  "WAWebBizFrontendGatingUtils",
                ).isCopyPixKeyBuyerLoggingEnabled(a),
                psFunnelId: r,
                attributes: o(
                  "WAWebBrPixRequestRowAttributes",
                ).getCopyPixKeyBuyerAttributes(l, u),
                interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
                  .COPY_PIX_KEY,
                bizPlatform: l
                  ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN
                  : i,
              }));
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          if (!o("WAWebMsgGetters").getIsSentByMe(e.unsafe())) {
            var r = yield o("WAWebBrPixRequestRowAttributes").genOrderFunnelId(
                e,
                o("WAWebBrPixRequestRowAttributes").RECEIVER_EVENT_LOG_KEY,
              ),
              a = (n = e.senderObj) == null ? void 0 : n.id.toJid(),
              i = o("WAWebContactUtils").getMaybeBizPlatformForLogging(a),
              l = i === o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN,
              s = o("WAWebFrontendMsgGetters").getChat(e.unsafe()),
              u = o("WAWebBrPixRequestRowAttributes").getChatTypeString(s),
              c = {
                bizPlatform: l
                  ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN
                  : i,
                businessOwnerJid: a,
                messageClass: o("WAWebWamEnumStructuredMessageClass")
                  .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageClassAttributes: JSON.stringify(
                  o("WAWebBrPixRequestRowAttributes").getCopyPixCodeAttributes(
                    l,
                    u,
                    r,
                    t.totalAmount,
                  ),
                ),
                messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE,
              };
            (new (o(
              "WAWebPsStructuredMessageInteractionWamEvent",
            ).PsStructuredMessageInteractionWamEvent)(
              babelHelpers.extends({}, c, {
                messageInteraction: o("WAWebWamEnumInteractionType")
                  .INTERACTION_TYPE.USER_PAY_NOW,
              }),
            ).commit(),
              new (o(
                "WAWebPsStructuredMessageInteractionWamEvent",
              ).PsStructuredMessageInteractionWamEvent)(
                babelHelpers.extends({}, c, {
                  messageInteraction: o("WAWebWamEnumInteractionType")
                    .INTERACTION_TYPE.COPY_PIX_CODE,
                }),
              ).commit());
            var d = o(
              "WAWebBrPixRequestRowAttributes",
            ).getCopyPixCodeBuyerAttributes(l, u);
            (o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
              isLoggingEnabled: o(
                "WAWebBizFrontendGatingUtils",
              ).isCopyPixCodeBuyerLoggingEnabled(a),
              psFunnelId: r,
              attributes: d,
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
                attributes: d,
                interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
                  .COPY_PIX_CODE,
                bizPlatform: l
                  ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN
                  : i,
              }));
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              p = yield o("WAWebBrPixRequestRowAttributes").genOrderFunnelId(
                a,
                s,
              ),
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
                  p2m_flow: o(
                    "WAWebOrderDetailsCreationActionWamEventUtilP2MFlow",
                  ).P2MFlow.ORDER,
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
              f({ msg: a, orderAcceptedPaymentMethod: i, orderInfo: l }),
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
                  p2mFlow: o(
                    "WAWebOrderDetailsCreationActionWamEventUtilP2MFlow",
                  ).P2MFlow.ORDER,
                  currency: "BRL",
                  isTemplate: !1,
                  acceptedPaymentMethod: c.map(function (e) {
                    return e;
                  }),
                  p2mType: o("WAWebOrderPaymentStatus").OrderP2MType.P2M_PRO,
                  chatType: o(
                    "WAWebBrPixRequestRowAttributes",
                  ).getChatTypeString(d),
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
        _.apply(this, arguments)
      );
    }
    function f(e) {
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
    ((l.logPaymentInfoOrderDetailsInteractiveActionForRecepient = u),
      (l.logPaymentRequestInteractiveAction = d),
      (l.logAPIMerchantPaymentMethodClickEvent = p));
  },
  98,
);
