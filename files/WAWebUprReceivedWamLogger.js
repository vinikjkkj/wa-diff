__d(
  "WAWebUprReceivedWamLogger",
  [
    "WALogger",
    "WAWebMsgGetters",
    "WAWebP2XFunnelIdGenerator",
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
      s = "receiver_log_key",
      u = "buyer_order_fs_log",
      c = "universal_payment_request",
      d = "individual",
      m = "group",
      p = "broadcast",
      _ = "newsletter";
    async function f(t) {
      await Promise.all(
        t.map(async function (t) {
          var n = o("WAWebUprPaymentRequest").parseUprPaymentInfo(t);
          n != null &&
            (await g(t, n).catch(function (t) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAM:UPR] structured msg receive log err: ",
                    "",
                  ])),
                t,
              );
            }));
        }),
      );
    }
    async function g(e, t) {
      var n = y(e),
        r = t.paymentOptions.length === 1,
        a = e.id.id + e.to.toJid(),
        i = await h(s, a),
        l = await h(i, u),
        d = {
          cta: c,
          is_upr: !0,
          is_single_option: r,
          chat_type: n,
          order_funnel_id: i,
          currency: t.currency,
        };
      new (o(
        "WAWebStructuredMessageReceiveWamEvent",
      ).StructuredMessageReceiveWamEvent)({
        messageClass: o("WAWebWamEnumStructuredMessageClass")
          .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
        messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.INTERACTIVE_NFM,
        bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI,
        businessOwnerJid: C(e),
        messageClassAttributes: JSON.stringify(d),
      }).commit();
      var m = {
        cta: c,
        is_upr: !0,
        chat_type: n,
        order_funnel_id: l,
        currency: t.currency,
      };
      new (o(
        "WAWebStructuredMessageBuyerReceiveWamEvent",
      ).StructuredMessageBuyerReceiveWamEvent)({
        messageClass: o("WAWebWamEnumStructuredMessageClass")
          .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
        messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.INTERACTIVE_NFM,
        messageClassAttributes: JSON.stringify(m),
      }).commit();
    }
    async function h(e, t) {
      var n = new (o("WAWebP2XFunnelIdGenerator").P2XFunnelIdGenerator)(e, t),
        r = await n.genFunnelInfo(),
        a = r.funnel_id;
      return a;
    }
    function y(e) {
      var t, n, r;
      return ((t = e.from) == null ? void 0 : t.isGroup()) === !0
        ? m
        : ((n = e.broadcastId) == null ? void 0 : n.isBroadcast()) === !0
          ? p
          : ((r = e.from) == null ? void 0 : r.isNewsletter()) === !0
            ? _
            : d;
    }
    function C(e) {
      var t;
      return (t = o("WAWebMsgGetters").getSender(e)) == null ? void 0 : t.user;
    }
    l.logUprReceivedWAMEvent = f;
  },
  98,
);
