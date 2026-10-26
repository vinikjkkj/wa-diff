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
    "WAWebPaymentRequestWamLogger",
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
      s,
      u = "api_receiver_event_log_key";
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
            s = e.renderedSnapshot,
            c = e.surface;
          if (!o("WAWebMsgGetters").getIsSentByMe(a.unsafe())) {
            var d = [];
            o("WAWebBrPaymentSettingsUtils").hasValidDynamicPix(l) &&
              d.push(
                o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.PIX,
              );
            var m = o("WAWebFrontendMsgGetters").getChat(a.unsafe());
            (o("WAWebBrazilPaymentsGeoGating").isBoletoEnabled(m) &&
              o("WAWebBrPaymentSettingsUtils").hasValidBoletoCode(l) &&
              d.push(
                o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.BOLETO,
              ),
              o("WAWebBrazilPaymentsGeoGating").isPaymentLinkEnabled(m) &&
                o("WAWebBrPaymentSettingsUtils").hasValidPaymentLink(l) &&
                d.push(
                  o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods
                    .PAYMENT_LINK,
                ),
              o("WAWebBrPaymentSettingsUtils").hasValidCard(l) &&
                d.push(
                  o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods
                    .NATIVE,
                ));
            var p =
                s == null
                  ? JSON.stringify(d)
                  : o(
                      "WAWebPaymentRequestWamLogger",
                    ).getRenderedAcceptedPaymentMethods(s),
              _ =
                s == null
                  ? void 0
                  : o("WAWebPaymentRequestWamLogger").getRenderedRankSource(s),
              f = yield o("WAWebBrPixRequestRowAttributes").genOrderFunnelId(
                a,
                u,
              ),
              g = new (o(
                "WAWebPsStructuredMessageInteractionWamEvent",
              ).PsStructuredMessageInteractionWamEvent)({
                bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.ENT,
                businessOwnerJid:
                  (t = a.senderObj) == null ? void 0 : t.id.toJid(),
                messageClass: o("WAWebWamEnumStructuredMessageClass")
                  .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageClassAttributes: JSON.stringify({
                  order_funnel_id: f,
                  wa_pay_registered: !1,
                  is_template: !1,
                  is_cta_available: !0,
                  p2m_flow: o(
                    "WAWebOrderDetailsCreationActionWamEventUtilP2MFlow",
                  ).P2MFlow.ORDER,
                  cta: r("WAWebInteractiveMessagesNativeFlowName")
                    .ORDER_DETAILS,
                  accepted_pay_methods: p,
                  p2m_type: o("WAWebOrderPaymentStatus").OrderP2MType.P2M_PRO,
                  payment_method_choice: i,
                  is_simplified_order: l.isOrderNodeOmitted,
                  payment_method_surface: c,
                  payment_method_rank_source: _,
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
            (g.commit(),
              y({ msg: a, orderAcceptedPaymentMethod: i, orderInfo: l }),
              o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
                isLoggingEnabled: o(
                  "WAWebBizFrontendGatingUtils",
                ).isCopyPixCodeBuyerLoggingEnabled(
                  (n = a.senderObj) == null ? void 0 : n.id.toJid(),
                ),
                psFunnelId: f,
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
                  acceptedPaymentMethod: d.map(function (e) {
                    return e;
                  }),
                  p2mType: o("WAWebOrderPaymentStatus").OrderP2MType.P2M_PRO,
                  chatType: o(
                    "WAWebBrPixRequestRowAttributes",
                  ).getChatTypeString(m),
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
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msg,
            n = e.renderedSnapshot,
            r = e.weights;
          if (!o("WAWebMsgGetters").getIsSentByMe(t.unsafe()))
            try {
              var a,
                i = o(
                  "WAWebPaymentRequestWamLogger",
                ).getRenderedAcceptedPaymentMethods(n),
                l = o("WAWebPaymentRequestWamLogger").getRenderedRankSource(n),
                c = o("WAWebPaymentRequestWamLogger").getWeightsAttributes(r),
                d = yield o("WAWebBrPixRequestRowAttributes").genOrderFunnelId(
                  t,
                  u,
                );
              new (o(
                "WAWebPsStructuredMessageInteractionWamEvent",
              ).PsStructuredMessageInteractionWamEvent)({
                bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.ENT,
                businessOwnerJid:
                  (a = t.senderObj) == null ? void 0 : a.id.toJid(),
                messageClass: o("WAWebWamEnumStructuredMessageClass")
                  .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE,
                messageInteraction: o("WAWebWamEnumInteractionType")
                  .INTERACTION_TYPE.OTHER_WAYS_TO_PAY_VIEW,
                messageClassAttributes: JSON.stringify(
                  babelHelpers.extends(
                    {
                      cta: "payment_options_sheet_shown",
                      p2m_flow: o(
                        "WAWebOrderDetailsCreationActionWamEventUtilP2MFlow",
                      ).P2MFlow.ORDER,
                      is_template: !1,
                      order_funnel_id: d,
                      accepted_pay_methods: i,
                      payment_method_surface: "options_sheet",
                      payment_method_rank_source: l,
                    },
                    c,
                  ),
                ),
              }).commit();
            } catch (e) {
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAM:BR_PAYMENT] options shown log failed",
                    ])),
                )
                .sendLogs("br-payment-options-shown-log-failed");
            }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
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
      (l.logAPIMerchantPaymentMethodClickEvent = _),
      (l.logAPIMerchantPaymentOptionsShownEvent = g));
  },
  98,
);
