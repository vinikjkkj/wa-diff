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
      u = "api_receiver_event_log_key",
      c = new Map([
        [
          o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.PIX,
          o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_PIX_CODE,
        ],
        [
          o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.BOLETO,
          o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_BOLETO_CODE,
        ],
      ]);
    function d(e) {
      var t;
      return (t = c.get(e)) != null
        ? t
        : o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_PAY_NOW;
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a = e.msg,
            i = e.orderAcceptedPaymentMethod,
            l = e.orderInfo,
            s = e.renderedSnapshot,
            c = e.surface;
          if (!o("WAWebMsgGetters").getIsSentByMe(a.unsafe())) {
            var m = [];
            o("WAWebBrPaymentSettingsUtils").hasValidDynamicPix(l) &&
              m.push(
                o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.PIX,
              );
            var p = o("WAWebFrontendMsgGetters").getChat(a.unsafe());
            (o("WAWebBrazilPaymentsGeoGating").isBoletoEnabled(p) &&
              o("WAWebBrPaymentSettingsUtils").hasValidBoletoCode(l) &&
              m.push(
                o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.BOLETO,
              ),
              o("WAWebBrazilPaymentsGeoGating").isPaymentLinkEnabled(p) &&
                o("WAWebBrPaymentSettingsUtils").hasValidPaymentLink(l) &&
                m.push(
                  o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods
                    .PAYMENT_LINK,
                ),
              o("WAWebBrPaymentSettingsUtils").hasValidCard(l) &&
                m.push(
                  o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods
                    .NATIVE,
                ));
            var _ =
                s == null
                  ? JSON.stringify(m)
                  : o(
                      "WAWebPaymentRequestWamLogger",
                    ).getRenderedAcceptedPaymentMethods(s),
              f =
                s == null
                  ? void 0
                  : o("WAWebPaymentRequestWamLogger").getRenderedRankSource(s),
              g = d(i),
              h = yield o("WAWebBrPixRequestRowAttributes").genOrderFunnelId(
                a,
                u,
              ),
              y = new (o(
                "WAWebPsStructuredMessageInteractionWamEvent",
              ).PsStructuredMessageInteractionWamEvent)({
                bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.ENT,
                businessOwnerJid:
                  (t = a.senderObj) == null ? void 0 : t.id.toJid(),
                messageClass: o("WAWebWamEnumStructuredMessageClass")
                  .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageClassAttributes: JSON.stringify({
                  order_funnel_id: h,
                  wa_pay_registered: !1,
                  is_template: !1,
                  is_cta_available: !0,
                  p2m_flow: o(
                    "WAWebOrderDetailsCreationActionWamEventUtilP2MFlow",
                  ).P2MFlow.ORDER,
                  cta: r("WAWebInteractiveMessagesNativeFlowName")
                    .ORDER_DETAILS,
                  accepted_pay_methods: _,
                  p2m_type: o("WAWebOrderPaymentStatus").OrderP2MType.P2M_PRO,
                  payment_method_choice: i,
                  is_simplified_order: l.isOrderNodeOmitted,
                  payment_method_surface: c,
                  payment_method_rank_source: f,
                }),
                messageInteraction: g,
                messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE,
              });
            (y.commit(),
              b({ msg: a, orderAcceptedPaymentMethod: i, orderInfo: l }),
              o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
                isLoggingEnabled: o(
                  "WAWebBizFrontendGatingUtils",
                ).isCopyPixCodeBuyerLoggingEnabled(
                  (n = a.senderObj) == null ? void 0 : n.id.toJid(),
                ),
                psFunnelId: h,
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
                  acceptedPaymentMethod: m.map(function (e) {
                    return e;
                  }),
                  p2mType: o("WAWebOrderPaymentStatus").OrderP2MType.P2M_PRO,
                  chatType: o(
                    "WAWebBrPixRequestRowAttributes",
                  ).getChatTypeString(p),
                  isSimplifiedOrder: l.isOrderNodeOmitted,
                },
                interaction: g,
                bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.ENT,
              }));
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        C.apply(this, arguments)
      );
    }
    function b(e) {
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
    ((l.logPaymentInfoOrderDetailsInteractiveActionForRecipient = m),
      (l.logPaymentRequestInteractiveAction = _),
      (l.logAPIMerchantPaymentMethodClickEvent = g),
      (l.logAPIMerchantPaymentOptionsShownEvent = y));
  },
  98,
);
