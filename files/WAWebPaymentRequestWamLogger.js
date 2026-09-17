__d(
  "WAWebPaymentRequestWamLogger",
  [
    "Promise",
    "WALogger",
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
      C = "individual",
      b = "group",
      v = "broadcast",
      S = "newsletter",
      R = "BRL",
      L = new Map([
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
      E = new Map([
        [d.PaymentRequestCtaType.PIX_DYNAMIC_CODE, m],
        [d.PaymentRequestCtaType.OFFSITE_CARD_PAY, p],
      ]);
    function k(e) {
      var t;
      return (t = E.get(e)) != null ? t : e;
    }
    function I(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
        e.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST
      );
    }
    function T(e) {
      var t,
        n = (t = e.interactivePayload) == null ? void 0 : t.buttons;
      if (n == null) return [];
      var r = [];
      for (var a of n) {
        var i = o("WAWebBrPaymentRequest").parsePaymentRequestButton(a);
        i != null && r.push(k(i.paymentType));
      }
      return r;
    }
    function D(e) {
      var t, n, r;
      return ((t = e.from) == null ? void 0 : t.isGroup()) === !0
        ? b
        : ((n = e.broadcastId) == null ? void 0 : n.isBroadcast()) === !0
          ? v
          : ((r = e.from) == null ? void 0 : r.isNewsletter()) === !0
            ? S
            : C;
    }
    function x(e) {
      var t;
      return (t = o("WAWebMsgGetters").getSender(e)) == null ? void 0 : t.user;
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new (o("WAWebP2XFunnelIdGenerator").P2XFunnelIdGenerator)(
              e,
              t,
            ),
            r = yield n.genFunnelInfo(),
            a = r.funnel_id;
          return a;
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.templateId != null,
            r = e.id.id + e.to.toJid(),
            a = yield $(h, r),
            i = yield $(a, y),
            l = {
              cta: _,
              p2m_flow: n ? f : g,
              accepted_payment_method: T(e),
              order_funnel_id: a,
              chat_type: D(e),
            };
          (n ||
            (l.is_payment_cta_shown = o(
              "WAWebBrPaymentRequest",
            ).isPaymentDetectionEnhancementEnabled()
              ? "1"
              : "0"),
            new (o(
              "WAWebStructuredMessageReceiveWamEvent",
            ).StructuredMessageReceiveWamEvent)({
              messageClass: o("WAWebWamEnumStructuredMessageClass")
                .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
              messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE
                .INTERACTIVE_NFM,
              bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI,
              businessOwnerJid: x(e),
              messageClassAttributes: JSON.stringify(l),
              templateId: (t = e.templateId) != null ? t : void 0,
            }).commit());
          var s = babelHelpers.extends({}, l, { order_funnel_id: i });
          new (o(
            "WAWebStructuredMessageBuyerReceiveWamEvent",
          ).StructuredMessageBuyerReceiveWamEvent)({
            messageClass: o("WAWebWamEnumStructuredMessageClass")
              .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
            messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE
              .INTERACTIVE_NFM,
            messageClassAttributes: JSON.stringify(s),
          }).commit();
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield (c || (c = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    I(e) &&
                      (yield N(e).catch(function (e) {
                        o("WALogger").WARN(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "[WAM:PAYMENT_REQUEST] structured msg receive log err: ",
                              "",
                            ])),
                          e,
                        );
                      }));
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        A.apply(this, arguments)
      );
    }
    function F(t, n) {
      O(t, n).catch(function (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[WAM:PAYMENT_REQUEST] structured msg interaction log err",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("payment-request-interaction-log-failed");
      });
    }
    function O(e, t) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a = e.templateId != null,
            i = k(t),
            l = yield W(e),
            s = {
              cta: _,
              p2m_flow: a ? f : g,
              is_template: a,
              payment_method_choice: i,
            };
          (new (o(
            "WAWebPsStructuredMessageInteractionWamEvent",
          ).PsStructuredMessageInteractionWamEvent)(
            babelHelpers.extends(
              {},
              V(e, {
                attributes: s,
                normalizedPaymentMethod: i,
                psFunnelId: l,
              }),
              {
                messageClass: o("WAWebWamEnumStructuredMessageClass")
                  .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageMediaType: U(a),
                businessOwnerJid:
                  (n = e.senderObj) == null || (n = n.id) == null
                    ? void 0
                    : n.user,
                templateId: (r = e.templateId) != null ? r : void 0,
              },
            ),
          ).commit(),
            yield G(s, a, l != null ? l : ""));
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield $(h, e.id.id + e.to.toJid()).catch(function (e) {
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
        q.apply(this, arguments)
      );
    }
    function U(e) {
      return e
        ? o("WAWebWamEnumMediaType").MEDIA_TYPE.TEMPLATE
        : o("WAWebWamEnumMediaType").MEDIA_TYPE.INTERACTIVE_NFM;
    }
    function V(e, t) {
      var n,
        r = t.attributes,
        a = t.normalizedPaymentMethod,
        i = t.psFunnelId,
        l = T(e);
      return {
        bizPlatform: H(e),
        messageClassAttributes: JSON.stringify(
          babelHelpers.extends({}, r, {
            accepted_payment_method: l.length > 0 ? l : void 0,
            order_funnel_id: i,
            chat_type: D(e),
            is_cta_available: !0,
            currency: R,
          }),
        ),
        messageInteraction:
          (n = L.get(a)) != null
            ? n
            : o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_START,
      };
    }
    function H(e) {
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
    function G(e, t, n) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield $(n, y);
          new (o(
            "WAWebStructuredMessageBuyerInteractionWamEvent",
          ).StructuredMessageBuyerInteractionWamEvent)({
            messageInteraction: o("WAWebWamEnumInteractionType")
              .INTERACTION_TYPE.USER_START,
            messageClass: o("WAWebWamEnumStructuredMessageClass")
              .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
            messageMediaType: U(t),
            messageClassAttributes: JSON.stringify(
              babelHelpers.extends({}, e, { order_funnel_id: r }),
            ),
          }).commit();
        })),
        z.apply(this, arguments)
      );
    }
    ((l.logPaymentRequestReceivedWAMEvent = w),
      (l.logPaymentRequestInteractionWAMEvent = F));
  },
  98,
);
