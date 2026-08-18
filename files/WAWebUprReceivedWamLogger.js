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
      d = "universal_payment_request",
      m = "individual",
      p = "group",
      _ = "broadcast",
      f = "newsletter";
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          yield (s || (s = n("Promise"))).all(
            t.map(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var n = o("WAWebUprPaymentRequest").parseUprPaymentInfo(t);
                    n != null &&
                      (yield y(t, n).catch(function (t) {
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
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = S(e),
            r = t.paymentOptions.length === 1,
            a = e.id.id + e.to.toJid(),
            i = yield b(u, a),
            l = yield b(i, c),
            s = {
              cta: d,
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
            messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE
              .INTERACTIVE_NFM,
            bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI,
            businessOwnerJid: R(e),
            messageClassAttributes: JSON.stringify(s),
          }).commit();
          var m = {
            cta: d,
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
            messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE
              .INTERACTIVE_NFM,
            messageClassAttributes: JSON.stringify(m),
          }).commit();
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new (o("WAWebP2XFunnelIdGenerator").P2XFunnelIdGenerator)(
              e,
              t,
            ),
            r = yield n.genFunnelInfo(),
            a = r.funnel_id;
          return a;
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      var t, n, r;
      return ((t = e.from) == null ? void 0 : t.isGroup()) === !0
        ? p
        : ((n = e.broadcastId) == null ? void 0 : n.isBroadcast()) === !0
          ? _
          : ((r = e.from) == null ? void 0 : r.isNewsletter()) === !0
            ? f
            : m;
    }
    function R(e) {
      var t;
      return (t = o("WAWebMsgGetters").getSender(e)) == null ? void 0 : t.user;
    }
    l.logUprReceivedWAMEvent = g;
  },
  98,
);
