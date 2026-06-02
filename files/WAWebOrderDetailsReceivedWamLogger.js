__d(
  "WAWebOrderDetailsReceivedWamLogger",
  [
    "P2XFunnelIdGenerator",
    "WALogger",
    "WAWebABProps",
    "WAWebBizOrderDetailsParams",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebStructuredMessageBuyerReceiveWamEvent",
    "WAWebStructuredMessageReceiveWamEvent",
    "WAWebUprPaymentRequest",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStructuredMessageClass",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS,
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS,
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD,
      ],
      u = "receiver_log_key",
      c = "buyer_order_fs_log";
    async function d(t) {
      await Promise.all(
        t.map(async function (t) {
          p(t) &&
            o("WAWebUprPaymentRequest").parseUprPaymentInfo(t) == null &&
            (await m(t).catch(function (t) {
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
        }),
      );
    }
    async function m(e) {
      var t,
        n = e.templateId != null,
        r = (t = e.nativeFlowName) != null ? t : "order_details",
        a = _(e),
        i = e.id.id + e.to.toJid(),
        l = f(e),
        s = new (o("P2XFunnelIdGenerator").P2XFunnelIdGenerator)(u, i),
        d = await s.genFunnelInfo(),
        m = d.funnel_id,
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
          businessOwnerJid: g(e),
          messageClassAttributes: JSON.stringify(p),
        }).commit(),
        o("WAWebABProps").getABPropConfigValue(
          "payments_br_p2m_buyer_logging_phase_2",
        ))
      ) {
        var h = new (o("P2XFunnelIdGenerator").P2XFunnelIdGenerator)(m, c),
          y = await h.genFunnelInfo(),
          C = y.funnel_id;
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
            order_funnel_id: C,
            p2m_offering_type: l,
            wa_pay_registered: !1,
            is_cta_available: !1,
          }),
        }).commit();
      }
    }
    function p(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
        e.nativeFlowName != null &&
        s.includes(e.nativeFlowName)
      );
    }
    function _(e) {
      var t, n, r;
      return ((t = e.from) == null ? void 0 : t.isGroup()) === !0
        ? "group"
        : ((n = e.broadcastId) == null ? void 0 : n.isBroadcast()) === !0
          ? "broadcast"
          : ((r = e.from) == null ? void 0 : r.isNewsletter()) === !0
            ? "newsletter"
            : "individual";
    }
    function f(e) {
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
    function g(e) {
      var t;
      return (t = o("WAWebMsgGetters").getSender(e)) == null ? void 0 : t.user;
    }
    ((l.logOrderDetailsReceivedWAMEvent = d), (l.getChatTypeFromMsg = _));
  },
  98,
);
