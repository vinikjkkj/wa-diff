__d(
  "WAWebPaymentRequestWamLogger",
  [
    "Promise",
    "WALogger",
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
    "asyncToGeneratorRuntime",
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
      g = "payment_request_template_cta",
      h = "payment_request_text_cta",
      y = "receiver_log_key",
      C = "buyer_order_fs_log",
      b = "cpx",
      v = "individual",
      S = "group",
      R = "broadcast",
      L = "newsletter",
      E = "BRL",
      k = new Map([
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
      I = new Map([
        [m.PaymentRequestCtaType.PIX_DYNAMIC_CODE, p],
        [m.PaymentRequestCtaType.OFFSITE_CARD_PAY, _],
      ]);
    function T(e) {
      var t;
      return (t = I.get(e)) != null ? t : e;
    }
    function D(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
        e.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST
      );
    }
    function x(e) {
      var t,
        n = (t = e.interactivePayload) == null ? void 0 : t.buttons;
      if (n == null) return [];
      var r = [];
      for (var a of n) {
        var i = o("WAWebBrPaymentRequest").parsePaymentRequestButton(a);
        i != null && r.push(T(i.paymentType));
      }
      return r;
    }
    function $(e) {
      var t, n, r;
      return ((t = e.from) == null ? void 0 : t.isGroup()) === !0
        ? S
        : ((n = e.broadcastId) == null ? void 0 : n.isBroadcast()) === !0
          ? R
          : ((r = e.from) == null ? void 0 : r.isNewsletter()) === !0
            ? L
            : v;
    }
    function P(e) {
      var t;
      return (t = o("WAWebMsgGetters").getSender(e)) == null ? void 0 : t.user;
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new (o("WAWebP2XFunnelIdGenerator").P2XFunnelIdGenerator)(
              e,
              t,
            ),
            r = yield n.genFunnelInfo(),
            a = r.funnel_id;
          return a;
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = o("WAWebPaymentRequestForwarding").isForwardedPaymentRequest(e),
            a = !r && e.templateId != null,
            i = yield F(e, r),
            l = i.buyerFunnelId,
            s = i.failedOriginalFunnel,
            u = i.psFunnelId,
            c = x(e),
            d = r ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN : Q(e, t),
            m = {
              cta: f,
              p2m_flow: a ? g : h,
              accepted_payment_method:
                c.length > 0 ? JSON.stringify(c) : void 0,
              order_funnel_id: u,
              chat_type: $(e),
            };
          if (
            (a || (m.is_payment_cta_shown = B(e, r) ? "1" : "0"),
            new (o(
              "WAWebStructuredMessageReceiveWamEvent",
            ).StructuredMessageReceiveWamEvent)({
              bizPlatform: d,
              messageClass: o("WAWebWamEnumStructuredMessageClass")
                .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
              messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE
                .INTERACTIVE_NFM,
              businessOwnerJid: r ? void 0 : P(e),
              messageClassAttributes: JSON.stringify(
                babelHelpers.extends(
                  {},
                  m,
                  { is_template: a, platform: b },
                  Y(e),
                ),
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
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t) return {};
          try {
            var n = yield N(y, e.id.id + e.to.toJid()),
              a = yield N(n, C);
            return { psFunnelId: n, buyerFunnelId: a };
          } catch (t) {
            if (
              o("WAWebPaymentRequestForwarding").getPaymentRequestTraceId(e) ==
              null
            )
              throw t;
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAM:PAYMENT_REQUEST] original receive funnel unavailable",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("payment-request-receive-funnel-unavailable"),
              { failedOriginalFunnel: !0 }
            );
          }
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t) {
      return (
        o("WAWebBrPaymentRequest").isPaymentRequestFeatureEnabled(!1, t) &&
        (!t ||
          o("WAWebPaymentRequestForwarding").isForwardedPixPaymentRequest(e))
      );
    }
    function W(e, t) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield (d || (d = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    if (D(e)) {
                      var n,
                        r =
                          (n = o("WAWebMsgGetters").getSender(e)) == null
                            ? void 0
                            : n.toJid(),
                        a = r != null ? t.get(r) : null;
                      yield w(e, a).catch(function (e) {
                        o("WALogger").WARN(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "[WAM:PAYMENT_REQUEST] structured msg receive log err: ",
                              "",
                            ])),
                          e,
                        );
                      });
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        q.apply(this, arguments)
      );
    }
    function U(t, n, a) {
      (a === void 0 &&
        (a = o("WAWebBrPaymentMethodSurface").BrPaymentMethodSurface
          .INLINE_CTA),
        V(t, n, a).catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAM:PAYMENT_REQUEST] structured msg interaction log err",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("payment-request-interaction-log-failed");
        }));
    }
    function V(e, t, n) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a,
            i = o("WAWebPaymentRequestForwarding").isForwardedPaymentRequest(e),
            l = !i && e.templateId != null,
            s = T(t),
            u = i ? void 0 : yield G(e),
            c = {
              cta: f,
              p2m_flow: l ? g : h,
              is_template: l,
              payment_method_choice: s,
            },
            d = K(e, {
              attributes: c,
              normalizedPaymentMethod: s,
              psFunnelId: u,
              surface: n,
            });
          (new (o(
            "WAWebPsStructuredMessageInteractionWamEvent",
          ).PsStructuredMessageInteractionWamEvent)(
            babelHelpers.extends({}, d, {
              messageClass: o("WAWebWamEnumStructuredMessageClass")
                .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
              messageMediaType: j(l),
              businessOwnerJid:
                i || (r = e.senderObj) == null || (r = r.id) == null
                  ? void 0
                  : r.user,
              templateId: i ? void 0 : (a = e.templateId) != null ? a : void 0,
            }),
          ).commit(),
            yield J(c, l, u, d.messageInteraction, d.bizPlatform, i));
        })),
        H.apply(this, arguments)
      );
    }
    function G(e) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield N(y, e.id.id + e.to.toJid()).catch(function (e) {
            return (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAM:PAYMENT_REQUEST] interaction funnel id err",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("payment-request-interaction-funnel-id-failed"),
              ""
            );
          });
          return t === "" ? void 0 : t;
        })),
        z.apply(this, arguments)
      );
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
        l = t.surface,
        s = x(e);
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
                s.length > 0 ? JSON.stringify(s) : void 0,
              order_funnel_id: i,
              chat_type: $(e),
              is_cta_available: !0,
              currency: E,
              payment_method_surface: l,
            },
            Y(e),
          ),
        ),
        messageInteraction:
          (n = k.get(a)) != null
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
    function J(e, t, n, r, o, a) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            var l = i ? void 0 : yield N(n != null ? n : "", C);
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
          },
        )),
        Z.apply(this, arguments)
      );
    }
    ((l.PIX_NORMALIZED = p),
      (l.RECEIVER_EVENT_LOG_KEY = y),
      (l.BUYER_HMAC_DATA = C),
      (l.LOGGING_CURRENCY = E),
      (l.isPaymentRequestMsg = D),
      (l.getPaymentMethodsFromMsg = x),
      (l.getChatTypeFromMsg = $),
      (l.getBusinessOwnerJid = P),
      (l.genFunnelId = N),
      (l.logPaymentRequestReceivedWAMEvent = W),
      (l.logPaymentRequestInteractionWAMEvent = U));
  },
  98,
);
