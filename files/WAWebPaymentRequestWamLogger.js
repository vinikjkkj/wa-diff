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
      m = "pix",
      p = "offsite_card",
      _ = "payment_request",
      f = "payment_request_template_cta",
      g = "payment_request_text_cta",
      h = "receiver_log_key",
      y = "buyer_order_fs_log",
      C = "cpx",
      b = "individual",
      v = "group",
      S = "broadcast",
      R = "newsletter",
      L = "BRL",
      E = new Map([
        [m, o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_PIX_CODE],
        [
          (d = o("WAWebBrPaymentRequest")).PaymentRequestCtaType.BOLETO,
          o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_BOLETO_CODE,
        ],
        [
          d.PaymentRequestCtaType.PAYMENT_LINK,
          o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_PAY_NOW,
        ],
      ]),
      k = new Map([
        [d.PaymentRequestCtaType.PIX_DYNAMIC_CODE, m],
        [d.PaymentRequestCtaType.OFFSITE_CARD_PAY, p],
      ]);
    function I(e) {
      var t;
      return (t = k.get(e)) != null ? t : e;
    }
    function T(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
        e.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST
      );
    }
    function D(e) {
      var t,
        n = (t = e.interactivePayload) == null ? void 0 : t.buttons;
      if (n == null) return [];
      var r = [];
      for (var a of n) {
        var i = o("WAWebBrPaymentRequest").parsePaymentRequestButton(a);
        i != null && r.push(I(i.paymentType));
      }
      return r;
    }
    function x(e) {
      var t, n, r;
      return ((t = e.from) == null ? void 0 : t.isGroup()) === !0
        ? v
        : ((n = e.broadcastId) == null ? void 0 : n.isBroadcast()) === !0
          ? S
          : ((r = e.from) == null ? void 0 : r.isNewsletter()) === !0
            ? R
            : b;
    }
    function $(e) {
      var t;
      return (t = o("WAWebMsgGetters").getSender(e)) == null ? void 0 : t.user;
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new (o("WAWebP2XFunnelIdGenerator").P2XFunnelIdGenerator)(
              e,
              t,
            ),
            r = yield n.genFunnelInfo(),
            a = r.funnel_id;
          return a;
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = e.templateId != null,
            a = e.id.id + e.to.toJid(),
            i = yield P(h, a),
            l = yield P(i, y),
            s = D(e),
            u = G(e, t),
            c = {
              cta: _,
              p2m_flow: r ? f : g,
              accepted_payment_method:
                s.length > 0 ? JSON.stringify(s) : void 0,
              order_funnel_id: i,
              chat_type: x(e),
            };
          (r ||
            (c.is_payment_cta_shown = o(
              "WAWebBrPaymentRequest",
            ).isPaymentDetectionEnhancementEnabled()
              ? "1"
              : "0"),
            new (o(
              "WAWebStructuredMessageReceiveWamEvent",
            ).StructuredMessageReceiveWamEvent)({
              bizPlatform: u,
              messageClass: o("WAWebWamEnumStructuredMessageClass")
                .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
              messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE
                .INTERACTIVE_NFM,
              businessOwnerJid: $(e),
              messageClassAttributes: JSON.stringify(
                babelHelpers.extends({}, c, { is_template: r, platform: C }),
              ),
              templateId: (n = e.templateId) != null ? n : void 0,
            }).commit());
          var d = babelHelpers.extends({}, c, { order_funnel_id: l });
          new (o(
            "WAWebStructuredMessageBuyerReceiveWamEvent",
          ).StructuredMessageBuyerReceiveWamEvent)({
            bizPlatform: u,
            messageClass: o("WAWebWamEnumStructuredMessageClass")
              .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
            messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE
              .INTERACTIVE_NFM,
            messageClassAttributes: JSON.stringify(d),
          }).commit();
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield (c || (c = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    if (T(e)) {
                      var n,
                        r =
                          (n = o("WAWebMsgGetters").getSender(e)) == null
                            ? void 0
                            : n.toJid(),
                        a = r != null ? t.get(r) : null;
                      yield M(e, a).catch(function (e) {
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
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        F.apply(this, arguments)
      );
    }
    function O(t, n, a) {
      (a === void 0 &&
        (a = o("WAWebBrPaymentMethodSurface").BrPaymentMethodSurface
          .INLINE_CTA),
        B(t, n, a).catch(function (t) {
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
    function B(e, t, n) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a,
            i = e.templateId != null,
            l = I(t),
            s = yield q(e),
            u = {
              cta: _,
              p2m_flow: i ? f : g,
              is_template: i,
              payment_method_choice: l,
            };
          (new (o(
            "WAWebPsStructuredMessageInteractionWamEvent",
          ).PsStructuredMessageInteractionWamEvent)(
            babelHelpers.extends(
              {},
              H(e, {
                attributes: u,
                normalizedPaymentMethod: l,
                psFunnelId: s,
                surface: n,
              }),
              {
                messageClass: o("WAWebWamEnumStructuredMessageClass")
                  .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageMediaType: V(i),
                businessOwnerJid:
                  (r = e.senderObj) == null || (r = r.id) == null
                    ? void 0
                    : r.user,
                templateId: (a = e.templateId) != null ? a : void 0,
              },
            ),
          ).commit(),
            yield j(u, i, s != null ? s : ""));
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield P(h, e.id.id + e.to.toJid()).catch(function (e) {
            return (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
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
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return e
        ? o("WAWebWamEnumMediaType").MEDIA_TYPE.TEMPLATE
        : o("WAWebWamEnumMediaType").MEDIA_TYPE.INTERACTIVE_NFM;
    }
    function H(e, t) {
      var n,
        r = t.attributes,
        a = t.normalizedPaymentMethod,
        i = t.psFunnelId,
        l = t.surface,
        s = D(e);
      return {
        bizPlatform: z(e),
        messageClassAttributes: JSON.stringify(
          babelHelpers.extends({}, r, {
            accepted_payment_method: s.length > 0 ? JSON.stringify(s) : void 0,
            order_funnel_id: i,
            chat_type: x(e),
            is_cta_available: !0,
            currency: L,
            payment_method_surface: l,
          }),
        ),
        messageInteraction:
          (n = E.get(a)) != null
            ? n
            : o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_START,
      };
    }
    function G(e, t) {
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
    function z(e) {
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
    function j(e, t, n) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield P(n, y);
          new (o(
            "WAWebStructuredMessageBuyerInteractionWamEvent",
          ).StructuredMessageBuyerInteractionWamEvent)({
            messageInteraction: o("WAWebWamEnumInteractionType")
              .INTERACTION_TYPE.USER_START,
            messageClass: o("WAWebWamEnumStructuredMessageClass")
              .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
            messageMediaType: V(t),
            messageClassAttributes: JSON.stringify(
              babelHelpers.extends({}, e, { order_funnel_id: r }),
            ),
          }).commit();
        })),
        K.apply(this, arguments)
      );
    }
    ((l.isPaymentRequestMsg = T),
      (l.logPaymentRequestReceivedWAMEvent = A),
      (l.logPaymentRequestInteractionWAMEvent = O));
  },
  98,
);
