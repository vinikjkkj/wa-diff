__d(
  "WAWebOrderDetailsReceivedWamLogger",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebBizOrderDetailsParams",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebP2XFunnelIdGenerator",
    "WAWebStructuredMessageBuyerReceiveWamEvent",
    "WAWebStructuredMessageReceiveWamEvent",
    "WAWebUprPaymentRequest",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStructuredMessageClass",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = [
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS,
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS,
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD,
      ],
      c = "receiver_log_key",
      d = "buyer_order_fs_log";
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          yield (s || (s = n("Promise"))).all(
            t.map(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    g(t) &&
                      o("WAWebUprPaymentRequest").parseUprPaymentInfo(t) ==
                        null &&
                      (yield _(t).catch(function (t) {
                        o("WALogger")
                          .WARN(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[WAM:ORDER_DETAILS] structured msg receive log err: ",
                                "",
                              ])),
                            t,
                          )
                          .sendLogs("order-details-receive-log-err");
                      }));
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            ),
          );
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
            n = e.templateId != null,
            r = (t = e.nativeFlowName) != null ? t : "order_details",
            a = h(e),
            i = e.id.id + e.to.toJid(),
            l = y(e),
            s = new (o("WAWebP2XFunnelIdGenerator").P2XFunnelIdGenerator)(c, i),
            u = yield s.genFunnelInfo(),
            m = u.funnel_id,
            p = {
              cta: r,
              order_funnel_id: m,
              chat_type: a,
              is_template: n ? "1" : "0",
              p2m_offering_type: l,
            };
          if (
            (new (o(
              "WAWebStructuredMessageReceiveWamEvent",
            ).StructuredMessageReceiveWamEvent)({
              messageClass: o("WAWebWamEnumStructuredMessageClass")
                .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
              messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE
                .INTERACTIVE_NFM,
              bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI,
              businessOwnerJid: C(e),
              messageClassAttributes: JSON.stringify(p),
            }).commit(),
            o("WAWebABProps").getABPropConfigValue(
              "payments_br_p2m_buyer_logging_phase_2",
            ))
          ) {
            var _ = new (o("WAWebP2XFunnelIdGenerator").P2XFunnelIdGenerator)(
                m,
                d,
              ),
              f = yield _.genFunnelInfo(),
              g = f.funnel_id;
            new (o(
              "WAWebStructuredMessageBuyerReceiveWamEvent",
            ).StructuredMessageBuyerReceiveWamEvent)({
              messageClass: o("WAWebWamEnumStructuredMessageClass")
                .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
              messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE
                .INTERACTIVE_NFM,
              messageClassAttributes: JSON.stringify({
                cta: r,
                is_template: n ? "1" : "0",
                chat_type: a,
                order_funnel_id: g,
                p2m_offering_type: l,
                wa_pay_registered: !1,
                is_cta_available: !1,
              }),
            }).commit();
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
        e.nativeFlowName != null &&
        u.includes(e.nativeFlowName)
      );
    }
    function h(e) {
      var t, n, r;
      return ((t = e.from) == null ? void 0 : t.isGroup()) === !0
        ? "group"
        : ((n = e.broadcastId) == null ? void 0 : n.isBroadcast()) === !0
          ? "broadcast"
          : ((r = e.from) == null ? void 0 : r.isNewsletter()) === !0
            ? "newsletter"
            : "individual";
    }
    function y(e) {
      try {
        var t,
          n =
            (t = e.interactivePayload) == null ||
            (t = t.buttons) == null ||
            (t = t[0]) == null
              ? void 0
              : t.buttonParamsJson;
        if (n != null) {
          var r = JSON.parse(n),
            a = r.payment_settings,
            i =
              Array.isArray(a) &&
              a.some(function (e) {
                return (
                  typeof e == "object" &&
                  e != null &&
                  e[
                    o("WAWebBizOrderDetailsParams").PaymentSettingType
                      .PAYMENT_LINK
                  ] != null
                );
              });
          if (i === !0) return "checkout_lite";
        }
      } catch (e) {}
      return "unknown";
    }
    function C(e) {
      var t;
      return (t = o("WAWebMsgGetters").getSender(e)) == null ? void 0 : t.user;
    }
    ((l.logOrderDetailsReceivedWAMEvent = m), (l.getChatTypeFromMsg = h));
  },
  98,
);
