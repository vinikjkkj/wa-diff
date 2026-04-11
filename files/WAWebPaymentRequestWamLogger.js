__d(
  "WAWebPaymentRequestWamLogger",
  [
    "P2XFunnelIdGenerator",
    "Promise",
    "WALogger",
    "WAWebBrPaymentRequest",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPsStructuredMessageInteractionWamEvent",
    "WAWebStructuredMessageBuyerInteractionWamEvent",
    "WAWebStructuredMessageBuyerReceiveWamEvent",
    "WAWebStructuredMessageReceiveWamEvent",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumInteractionType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStructuredMessageClass",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = "pix",
      d = "payment_request",
      m = "payment_request_template_cta",
      p = "payment_request_text_cta",
      _ = "receiver_log_key",
      f = "buyer_order_fs_log",
      g = "individual",
      h = "group",
      y = "broadcast",
      C = "newsletter";
    function b(e) {
      return e ===
        o("WAWebBrPaymentRequest").PaymentRequestCtaType.PIX_DYNAMIC_CODE
        ? c
        : e;
    }
    function v(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
        e.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST
      );
    }
    function S(e) {
      var t,
        n = (t = e.interactivePayload) == null ? void 0 : t.buttons;
      if (n == null) return [];
      var r = [];
      for (var a of n) {
        var i = o("WAWebBrPaymentRequest").parsePaymentRequestButton(a);
        i != null && r.push(b(i.paymentType));
      }
      return r;
    }
    function R(e) {
      var t, n, r;
      return ((t = e.from) == null ? void 0 : t.isGroup()) === !0
        ? h
        : ((n = e.broadcastId) == null ? void 0 : n.isBroadcast()) === !0
          ? y
          : ((r = e.from) == null ? void 0 : r.isNewsletter()) === !0
            ? C
            : g;
    }
    function L(e) {
      var t;
      return (t = o("WAWebMsgGetters").getSender(e)) == null ? void 0 : t.user;
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new (o("P2XFunnelIdGenerator").P2XFunnelIdGenerator)(e, t),
            r = yield n.genFunnelInfo(),
            a = r.funnel_id;
          return a;
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.templateId != null,
            n = e.id.id + e.to.toJid(),
            r = yield E(_, n),
            a = yield E(r, f),
            i = {
              cta: d,
              p2m_flow: t ? m : p,
              accepted_payment_method: S(e),
              order_funnel_id: r,
              chat_type: R(e),
            };
          (t ||
            (i.is_payment_cta_shown = o(
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
              businessOwnerJid: L(e),
              messageClassAttributes: JSON.stringify(i),
            }).commit());
          var l = babelHelpers.extends({}, i, { order_funnel_id: a });
          new (o(
            "WAWebStructuredMessageBuyerReceiveWamEvent",
          ).StructuredMessageBuyerReceiveWamEvent)({
            messageClass: o("WAWebWamEnumStructuredMessageClass")
              .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
            messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE
              .INTERACTIVE_NFM,
            messageClassAttributes: JSON.stringify(l),
          }).commit();
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield (u || (u = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    v(e) &&
                      (yield I(e).catch(function (e) {
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
        x.apply(this, arguments)
      );
    }
    function $(t, n, r) {
      var a;
      r === void 0 && (r = !0);
      var i = t.isFromTemplate === !0,
        l = {
          cta: d,
          p2m_flow: i ? m : p,
          is_template: i ? "1" : "0",
          payment_method_choice: b(n),
          is_payment_cta_shown: r,
        };
      (new (o(
        "WAWebPsStructuredMessageInteractionWamEvent",
      ).PsStructuredMessageInteractionWamEvent)({
        messageInteraction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
          .USER_START,
        messageClass: o("WAWebWamEnumStructuredMessageClass")
          .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
        messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.INTERACTIVE_NFM,
        bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI,
        businessOwnerJid:
          (a = t.senderObj) == null || (a = a.id) == null ? void 0 : a.user,
        messageClassAttributes: JSON.stringify(l),
      }).commit(),
        P(t, l).catch(function (t) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[WAM:PAYMENT_REQUEST] buyer interaction log err: ",
                "",
              ])),
            t,
          );
        }));
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.id.id + e.to.toJid(),
            r = yield E(_, n),
            a = yield E(r, f);
          new (o(
            "WAWebStructuredMessageBuyerInteractionWamEvent",
          ).StructuredMessageBuyerInteractionWamEvent)({
            messageInteraction: o("WAWebWamEnumInteractionType")
              .INTERACTION_TYPE.USER_START,
            messageClass: o("WAWebWamEnumStructuredMessageClass")
              .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
            messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE
              .INTERACTIVE_NFM,
            messageClassAttributes: JSON.stringify(
              babelHelpers.extends({}, t, { order_funnel_id: a }),
            ),
          }).commit();
        })),
        N.apply(this, arguments)
      );
    }
    ((l.logPaymentRequestReceivedWAMEvent = D),
      (l.logPaymentRequestInteractionWAMEvent = $));
  },
  98,
);
