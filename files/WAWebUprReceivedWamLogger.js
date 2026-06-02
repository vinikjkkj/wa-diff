__d(
  "WAWebUprReceivedWamLogger",
  [
    "P2XFunnelIdGenerator",
    "WALogger",
    "WAWebMsgGetters",
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
      c = "individual",
      d = "group",
      m = "broadcast",
      p = "newsletter";
    async function _(t) {
      await Promise.all(
        t.map(async function (t) {
          var n = o("WAWebUprPaymentRequest").parseUprPaymentInfo(t);
          n != null &&
            (await f(t, n).catch(function (t) {
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
    async function f(e, t) {
      var n = h(e),
        r = t.paymentOptions.length === 1,
        a = e.id.id + e.to.toJid(),
        i = await g(s, a),
        l = await g(i, u),
        c = {
          flow: "upr",
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
        businessOwnerJid: y(e),
        messageClassAttributes: JSON.stringify(c),
      }).commit();
      var d = {
        flow: "upr",
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
        messageClassAttributes: JSON.stringify(d),
      }).commit();
    }
    async function g(e, t) {
      var n = new (o("P2XFunnelIdGenerator").P2XFunnelIdGenerator)(e, t),
        r = await n.genFunnelInfo(),
        a = r.funnel_id;
      return a;
    }
    function h(e) {
      var t, n, r;
      return ((t = e.from) == null ? void 0 : t.isGroup()) === !0
        ? d
        : ((n = e.broadcastId) == null ? void 0 : n.isBroadcast()) === !0
          ? m
          : ((r = e.from) == null ? void 0 : r.isNewsletter()) === !0
            ? p
            : c;
    }
    function y(e) {
      var t;
      return (t = o("WAWebMsgGetters").getSender(e)) == null ? void 0 : t.user;
    }
    l.logUprReceivedWAMEvent = _;
  },
  98,
);
