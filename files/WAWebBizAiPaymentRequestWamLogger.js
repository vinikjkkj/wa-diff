__d(
  "WAWebBizAiPaymentRequestWamLogger",
  [
    "WALogger",
    "WAWebMsgGetters",
    "WAWebPaymentRequestWamLogger",
    "WAWebPsStructuredMessageInteractionWamEvent",
    "WAWebStructuredMessageBuyerInteractionWamEvent",
    "WAWebStructuredMessageBuyerReceiveWamEvent",
    "WAWebStructuredMessageReceiveWamEvent",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumInteractionType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStructuredMessageClass",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = "payment_request_biz_ai_cta";
    function d(e, t) {
      return v(e, e) && S(t);
    }
    function m(e, t) {
      return p(e) && S(t);
    }
    function p(e) {
      return v(e, e.unsafe());
    }
    async function _(t) {
      await Promise.all(
        t.map(function (t) {
          return g(t).catch(function (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAM:BIZ_AI_PAYMENT_REQUEST] receive log err",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("biz-ai-payment-request-receive-log-failed");
          });
        }),
      );
    }
    function f(e) {
      h(e).catch(function (e) {
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[WAM:BIZ_AI_PAYMENT_REQUEST] pix copy log err",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("biz-ai-payment-request-pix-copy-log-failed");
      });
    }
    async function g(e) {
      var t,
        n = e.templateId != null,
        r = await y(e),
        a = r.buyerFunnelId,
        i = r.psFunnelId,
        l = C(e, n);
      (new (o(
        "WAWebStructuredMessageReceiveWamEvent",
      ).StructuredMessageReceiveWamEvent)({
        bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB,
        messageClass: o("WAWebWamEnumStructuredMessageClass")
          .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
        messageMediaType: b(n),
        businessOwnerJid: o("WAWebPaymentRequestWamLogger").getBusinessOwnerJid(
          e,
        ),
        messageClassAttributes: JSON.stringify(
          babelHelpers.extends({}, l, { order_funnel_id: i }),
        ),
        templateId: (t = e.templateId) != null ? t : void 0,
      }).commit(),
        new (o(
          "WAWebStructuredMessageBuyerReceiveWamEvent",
        ).StructuredMessageBuyerReceiveWamEvent)({
          bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB,
          messageClass: o("WAWebWamEnumStructuredMessageClass")
            .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
          messageMediaType: b(n),
          messageClassAttributes: JSON.stringify(
            babelHelpers.extends({}, l, { order_funnel_id: a }),
          ),
        }).commit());
    }
    async function h(e) {
      var t,
        n,
        r = e.templateId != null,
        a = await y(e),
        i = a.buyerFunnelId,
        l = a.psFunnelId,
        s = babelHelpers.extends({}, C(e, r), {
          payment_method_choice: o("WAWebPaymentRequestWamLogger")
            .PIX_NORMALIZED,
          currency: o("WAWebPaymentRequestWamLogger").LOGGING_CURRENCY,
        });
      (new (o(
        "WAWebPsStructuredMessageInteractionWamEvent",
      ).PsStructuredMessageInteractionWamEvent)({
        bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB,
        messageClass: o("WAWebWamEnumStructuredMessageClass")
          .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
        messageMediaType: b(r),
        messageInteraction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
          .COPY_PIX_CODE,
        businessOwnerJid:
          (t = e.senderObj) == null || (t = t.id) == null ? void 0 : t.user,
        messageClassAttributes: JSON.stringify(
          babelHelpers.extends({}, s, { order_funnel_id: l }),
        ),
        templateId: (n = e.templateId) != null ? n : void 0,
      }).commit(),
        new (o(
          "WAWebStructuredMessageBuyerInteractionWamEvent",
        ).StructuredMessageBuyerInteractionWamEvent)({
          bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB,
          messageClass: o("WAWebWamEnumStructuredMessageClass")
            .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
          messageMediaType: b(r),
          messageInteraction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
            .COPY_PIX_CODE,
          messageClassAttributes: JSON.stringify(
            babelHelpers.extends({}, s, { order_funnel_id: i }),
          ),
        }).commit());
    }
    async function y(e) {
      var t;
      try {
        if (
          ((t = await o("WAWebPaymentRequestWamLogger").genFunnelId(
            o("WAWebPaymentRequestWamLogger").RECEIVER_EVENT_LOG_KEY,
            e.id.id + e.to.toJid(),
          )),
          t === "")
        )
          return { buyerFunnelId: void 0, psFunnelId: void 0 };
        var n = await o("WAWebPaymentRequestWamLogger").genFunnelId(
          t,
          o("WAWebPaymentRequestWamLogger").BUYER_HMAC_DATA,
        );
        return { buyerFunnelId: n === "" ? void 0 : n, psFunnelId: t };
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAM:BIZ_AI_PAYMENT_REQUEST] funnel id err",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("biz-ai-payment-request-funnel-id-failed"),
          { buyerFunnelId: void 0, psFunnelId: t }
        );
      }
    }
    function C(e, t) {
      return {
        p2m_flow: c,
        accepted_payment_method: JSON.stringify(
          o("WAWebPaymentRequestWamLogger").getPaymentMethodsFromMsg(e),
        ),
        chat_type: o("WAWebPaymentRequestWamLogger").getChatTypeFromMsg(e),
        is_template: t,
      };
    }
    function b(e) {
      return e
        ? o("WAWebWamEnumMediaType").MEDIA_TYPE.TEMPLATE
        : o("WAWebWamEnumMediaType").MEDIA_TYPE.INTERACTIVE_NFM;
    }
    function v(e, t) {
      return (
        o("WAWebPaymentRequestWamLogger")
          .getPaymentMethodsFromMsg(e)
          .includes(o("WAWebPaymentRequestWamLogger").PIX_NORMALIZED) &&
        o("WAWebMsgGetters").getIsBizBot1pResponse(t)
      );
    }
    function S(e) {
      return (
        (e == null ? void 0 : e.isApi) !== !0 &&
        (e == null ? void 0 : e.isSmb) === !0
      );
    }
    ((l.isBizAiPixPaymentRequest = d),
      (l.isBizAiPixPaymentRequestMsg = m),
      (l.hasBizAiPixPaymentRequestMarkers = p),
      (l.logBizAiPaymentRequestReceivedWAMEvent = _),
      (l.logBizAiPaymentRequestPixCopyWAMEvent = f));
  },
  98,
);
