__d(
  "WAWebUprReceivedWamLogger",
  [
    "Promise",
    "WALogger",
    "WAWebMsgGetters",
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
      u = "receiver_log_key",
      c = "buyer_order_fs_log",
      d = "individual",
      m = "group",
      p = "broadcast",
      _ = "newsletter";
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          yield (s || (s = n("Promise"))).all(
            t.map(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var n = o("WAWebUprPaymentRequest").parseUprPaymentInfo(t);
                    n != null &&
                      (yield h(t, n).catch(function (t) {
                        o("WALogger").WARN(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[WAM:UPR] structured msg receive log err: ",
                              "",
                            ])),
                          t,
                        );
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
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = v(e),
            r = t.paymentOptions.length === 1,
            a = e.id.id + e.to.toJid(),
            i = yield C(u, a),
            l = yield C(i, c),
            s = {
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
            messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE
              .INTERACTIVE_NFM,
            bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI,
            businessOwnerJid: S(e),
            messageClassAttributes: JSON.stringify(s),
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
            messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE
              .INTERACTIVE_NFM,
            messageClassAttributes: JSON.stringify(d),
          }).commit();
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new (o("WAWebP2XFunnelIdGenerator").P2XFunnelIdGenerator)(
              e,
              t,
            ),
            r = yield n.genFunnelInfo(),
            a = r.funnel_id;
          return a;
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      var t, n, r;
      return ((t = e.from) == null ? void 0 : t.isGroup()) === !0
        ? m
        : ((n = e.broadcastId) == null ? void 0 : n.isBroadcast()) === !0
          ? p
          : ((r = e.from) == null ? void 0 : r.isNewsletter()) === !0
            ? _
            : d;
    }
    function S(e) {
      var t;
      return (t = o("WAWebMsgGetters").getSender(e)) == null ? void 0 : t.user;
    }
    l.logUprReceivedWAMEvent = f;
  },
  98,
);
