__d(
  "WAWebPaymentRequestWamLogger",
  [
    "WALogger",
    "WAWebBrPaymentMethodKey",
    "WAWebBrPaymentMethodSurface",
    "WAWebBrPaymentRequest",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebP2XFunnelIdGenerator",
    "WAWebPaymentRequestForwarding",
    "WAWebPrivacyModeSystemMsg",
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
      c,
      d,
      m,
      p = "pix",
      _ = "offsite_card",
      f = "payment_request",
      g = "payment_options_sheet_shown",
      h = "payment_request_template_cta",
      y = "payment_request_text_cta",
      C = "receiver_log_key",
      b = "buyer_order_fs_log",
      v = "cpx",
      S = "individual",
      R = "group",
      L = "broadcast",
      E = "newsletter",
      k = "BRL",
      I = new Map([
        [p, o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_PIX_CODE],
        [
          (m = o("WAWebBrPaymentRequest")).PaymentRequestCtaType.BOLETO,
          o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_BOLETO_CODE,
        ],
        [
          m.PaymentRequestCtaType.PAYMENT_LINK,
          o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_PAY_NOW,
        ],
      ]),
      T = new Map([
        [m.PaymentRequestCtaType.PIX_DYNAMIC_CODE, p],
        [m.PaymentRequestCtaType.OFFSITE_CARD_PAY, _],
      ]),
      D = "server_unspecified";
    function x(e) {
      var t = e == null ? void 0 : e.weightsVersion;
      return t == null
        ? {
            payment_method_weights_version: void 0,
            payment_method_rank_changed: void 0,
          }
        : {
            payment_method_weights_version: t,
            payment_method_rank_changed: e == null ? void 0 : e.rankChanged,
          };
    }
    function $(e) {
      var t = [];
      for (var n of e.orderedMethodKeys) {
        var r = o("WAWebBrPaymentMethodKey").getGenericPaymentMethodName(n);
        r != null && !t.includes(r) && t.push(r);
      }
      return JSON.stringify(t);
    }
    function P(e) {
      return e.rankSource == null || e.rankSource === "" ? D : e.rankSource;
    }
    function N(e) {
      var t;
      return (t = T.get(e)) != null ? t : e;
    }
    function M(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
        e.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST
      );
    }
    function w(e) {
      var t,
        n = (t = e.interactivePayload) == null ? void 0 : t.buttons;
      if (n == null) return [];
      var r = [];
      for (var a of n) {
        var i = o("WAWebBrPaymentRequest").parsePaymentRequestButton(a);
        i != null && r.push(N(i.paymentType));
      }
      return r;
    }
    function A(e) {
      var t, n, r;
      return ((t = e.from) == null ? void 0 : t.isGroup()) === !0
        ? R
        : ((n = e.broadcastId) == null ? void 0 : n.isBroadcast()) === !0
          ? L
          : ((r = e.from) == null ? void 0 : r.isNewsletter()) === !0
            ? E
            : S;
    }
    function F(e) {
      var t;
      return (t = o("WAWebMsgGetters").getSender(e)) == null ? void 0 : t.user;
    }
    async function O(e, t) {
      var n = new (o("WAWebP2XFunnelIdGenerator").P2XFunnelIdGenerator)(e, t),
        r = await n.genFunnelInfo(),
        a = r.funnel_id;
      return a;
    }
    async function B(e, t) {
      var n,
        r = o("WAWebPaymentRequestForwarding").isForwardedPaymentRequest(e),
        a = !r && e.templateId != null,
        i = await W(e, r),
        l = i.buyerFunnelId,
        s = i.failedOriginalFunnel,
        u = i.psFunnelId,
        c = w(e),
        d = r ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN : Q(e, t),
        m = {
          cta: f,
          p2m_flow: a ? h : y,
          accepted_payment_method: c.length > 0 ? JSON.stringify(c) : void 0,
          order_funnel_id: u,
          chat_type: A(e),
        };
      if (
        (a || (m.is_payment_cta_shown = q(e, r) ? "1" : "0"),
        new (o(
          "WAWebStructuredMessageReceiveWamEvent",
        ).StructuredMessageReceiveWamEvent)({
          bizPlatform: d,
          messageClass: o("WAWebWamEnumStructuredMessageClass")
            .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
          messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE
            .INTERACTIVE_NFM,
          businessOwnerJid: r ? void 0 : F(e),
          messageClassAttributes: JSON.stringify(
            babelHelpers.extends({}, m, { is_template: a, platform: v }, Y(e)),
          ),
          templateId: r ? void 0 : (n = e.templateId) != null ? n : void 0,
        }).commit(),
        s !== !0)
      ) {
        var p = {
          cta: m.cta,
          p2m_flow: m.p2m_flow,
          accepted_payment_method: m.accepted_payment_method,
          order_funnel_id: l,
          chat_type: m.chat_type,
          is_payment_cta_shown: m.is_payment_cta_shown,
        };
        new (o(
          "WAWebStructuredMessageBuyerReceiveWamEvent",
        ).StructuredMessageBuyerReceiveWamEvent)({
          bizPlatform: d,
          messageClass: o("WAWebWamEnumStructuredMessageClass")
            .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
          messageMediaType: j(a),
          messageClassAttributes: JSON.stringify(p),
        }).commit();
      }
    }
    async function W(t, n) {
      if (n) return {};
      try {
        var a = await O(C, t.id.id + t.to.toJid()),
          i = await O(a, b);
        return { psFunnelId: a, buyerFunnelId: i };
      } catch (n) {
        if (
          o("WAWebPaymentRequestForwarding").getPaymentRequestTraceId(t) == null
        )
          throw n;
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAM:PAYMENT_REQUEST] original receive funnel unavailable",
                ])),
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs("payment-request-receive-funnel-unavailable"),
          { failedOriginalFunnel: !0 }
        );
      }
    }
    function q(e, t) {
      return (
        o("WAWebBrPaymentRequest").isPaymentRequestFeatureEnabled(!1, t) &&
        (!t ||
          o("WAWebPaymentRequestForwarding").isForwardedPixPaymentRequest(e))
      );
    }
    async function U(e, t) {
      await Promise.all(
        e.map(async function (e) {
          if (M(e)) {
            var n,
              r =
                (n = o("WAWebMsgGetters").getSender(e)) == null
                  ? void 0
                  : n.toJid(),
              a = r != null ? t.get(r) : null;
            await B(e, a).catch(function (e) {
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAM:PAYMENT_REQUEST] structured msg receive log err: ",
                    "",
                  ])),
                e,
              );
            });
          }
        }),
      );
    }
    function V(e, t, n, a) {
      (n === void 0 &&
        (n = o("WAWebBrPaymentMethodSurface").BrPaymentMethodSurface
          .INLINE_CTA),
        H(e, t, n, a).catch(function (e) {
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAM:PAYMENT_REQUEST] structured msg interaction log err",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("payment-request-interaction-log-failed");
        }));
    }
    async function H(e, t, n, r) {
      var a,
        i,
        l = o("WAWebPaymentRequestForwarding").isForwardedPaymentRequest(e),
        s = !l && e.templateId != null,
        u =
          r == null
            ? null
            : {
                accepted_payment_method: $(r),
                payment_method_rank_source: P(r),
              },
        c = N(t),
        d = l ? void 0 : await z(e),
        m = {
          cta: f,
          p2m_flow: s ? h : y,
          is_template: s,
          payment_method_choice: c,
        },
        p = K(e, {
          attributes: m,
          normalizedPaymentMethod: c,
          psFunnelId: d,
          surface: n,
          renderedAttributes: u,
        });
      (new (o(
        "WAWebPsStructuredMessageInteractionWamEvent",
      ).PsStructuredMessageInteractionWamEvent)(
        babelHelpers.extends({}, p, {
          messageClass: o("WAWebWamEnumStructuredMessageClass")
            .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
          messageMediaType: j(s),
          businessOwnerJid:
            l || (a = e.senderObj) == null || (a = a.id) == null
              ? void 0
              : a.user,
          templateId: l ? void 0 : (i = e.templateId) != null ? i : void 0,
        }),
      ).commit(),
        await J(m, s, d, p.messageInteraction, p.bizPlatform, l));
    }
    async function G(e, t, n) {
      if (!o("WAWebMsgGetters").getIsSentByMe(e.unsafe()))
        try {
          var r,
            a,
            i = o("WAWebPaymentRequestForwarding").isForwardedPaymentRequest(e),
            l = !i && e.templateId != null,
            s = x(n),
            u = $(t),
            d = P(t),
            m = i ? void 0 : await z(e);
          new (o(
            "WAWebPsStructuredMessageInteractionWamEvent",
          ).PsStructuredMessageInteractionWamEvent)({
            bizPlatform: i
              ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN
              : X(e),
            businessOwnerJid:
              i || (r = e.senderObj) == null || (r = r.id) == null
                ? void 0
                : r.user,
            templateId: i ? void 0 : (a = e.templateId) != null ? a : void 0,
            messageClass: o("WAWebWamEnumStructuredMessageClass")
              .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
            messageMediaType: j(l),
            messageInteraction: o("WAWebWamEnumInteractionType")
              .INTERACTION_TYPE.OTHER_WAYS_TO_PAY_VIEW,
            messageClassAttributes: JSON.stringify(
              babelHelpers.extends(
                {
                  cta: g,
                  p2m_flow: l ? h : y,
                  is_template: l,
                  order_funnel_id: m,
                  accepted_payment_method: u,
                  payment_method_surface: o("WAWebBrPaymentMethodSurface")
                    .BrPaymentMethodSurface.OPTIONS_SHEET,
                  payment_method_rank_source: d,
                },
                s,
              ),
            ),
          }).commit();
        } catch (e) {
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAM:BR_PAYMENT] options shown log failed",
                ])),
            )
            .sendLogs("br-payment-options-shown-log-failed");
        }
    }
    async function z(e) {
      var t = await O(C, e.id.id + e.to.toJid()).catch(function (e) {
        return (
          o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAM:PAYMENT_REQUEST] interaction funnel id err",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("payment-request-interaction-funnel-id-failed"),
          ""
        );
      });
      return t === "" ? void 0 : t;
    }
    function j(e) {
      return e
        ? o("WAWebWamEnumMediaType").MEDIA_TYPE.TEMPLATE
        : o("WAWebWamEnumMediaType").MEDIA_TYPE.INTERACTIVE_NFM;
    }
    function K(e, t) {
      var n,
        r = t.attributes,
        a = t.normalizedPaymentMethod,
        i = t.psFunnelId,
        l = t.renderedAttributes,
        s = t.surface,
        u = w(e);
      return {
        bizPlatform: o(
          "WAWebPaymentRequestForwarding",
        ).isForwardedPaymentRequest(e)
          ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN
          : X(e),
        messageClassAttributes: JSON.stringify(
          babelHelpers.extends(
            {},
            r,
            {
              accepted_payment_method:
                u.length > 0 ? JSON.stringify(u) : void 0,
              order_funnel_id: i,
              chat_type: A(e),
              is_cta_available: !0,
              currency: k,
              payment_method_surface: s,
            },
            Y(e),
            l,
          ),
        ),
        messageInteraction:
          (n = I.get(a)) != null
            ? n
            : o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_START,
      };
    }
    function Q(e, t) {
      var n;
      if ((t == null ? void 0 : t.isApi) !== !0)
        return o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN;
      var r = o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(
        (n = e.privacyModeWhenSent) != null ? n : t.storedPrivacyMode,
      );
      return r === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE ||
        r === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.BSP
        ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.ENT
        : o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI;
    }
    function X(e) {
      var t = e.senderObj;
      if ((t == null ? void 0 : t.isEnterprise) !== !0)
        return o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI;
      var n = o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(
        t.privacyMode,
      );
      return n === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE ||
        n === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.BSP
        ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.ENT
        : o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI;
    }
    function Y(e) {
      var t = o("WAWebPaymentRequestForwarding").getPaymentRequestTraceId(e),
        n = o("WAWebPaymentRequestForwarding").isForwardedPaymentRequest(e);
      return t == null
        ? n
          ? { is_forwarded: !0 }
          : {}
        : { payment_message_trace_id: t, is_forwarded: n };
    }
    async function J(e, t, n, r, a, i) {
      var l = i ? void 0 : await O(n != null ? n : "", b);
      new (o(
        "WAWebStructuredMessageBuyerInteractionWamEvent",
      ).StructuredMessageBuyerInteractionWamEvent)({
        bizPlatform: a,
        messageInteraction: r,
        messageClass: o("WAWebWamEnumStructuredMessageClass")
          .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
        messageMediaType: j(t),
        messageClassAttributes: JSON.stringify({
          cta: e.cta,
          p2m_flow: e.p2m_flow,
          is_template: e.is_template,
          payment_method_choice: e.payment_method_choice,
          order_funnel_id: l,
        }),
      }).commit();
    }
    ((l.PIX_NORMALIZED = p),
      (l.RECEIVER_EVENT_LOG_KEY = C),
      (l.BUYER_HMAC_DATA = b),
      (l.LOGGING_CURRENCY = k),
      (l.SERVER_UNSPECIFIED_RANK_SOURCE = D),
      (l.getWeightsAttributes = x),
      (l.getRenderedAcceptedPaymentMethods = $),
      (l.getRenderedRankSource = P),
      (l.isPaymentRequestMsg = M),
      (l.getPaymentMethodsFromMsg = w),
      (l.getChatTypeFromMsg = A),
      (l.getBusinessOwnerJid = F),
      (l.genFunnelId = O),
      (l.logPaymentRequestReceivedWAMEvent = U),
      (l.logPaymentRequestInteractionWAMEvent = V),
      (l.logPaymentRequestOptionsShownWAMEvent = G));
  },
  98,
);
