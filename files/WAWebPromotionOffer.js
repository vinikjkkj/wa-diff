__d(
  "WAWebPromotionOffer",
  [
    "WATimeUtils",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "cta_copy",
      s = "review_and_pay_v2",
      u = 864e13;
    function c(e) {
      var t;
      if (!m(e)) return null;
      var n = e.interactivePayload,
        r = f(n == null ? void 0 : n.buttons);
      if (r == null) return null;
      var o = C(e.caption),
        a = h(
          (t = g(n == null ? void 0 : n.messageParamsJson)) == null
            ? void 0
            : t.limited_time_offer,
        );
      return a == null
        ? { kind: "coupon", code: r, text: o, expiryMs: null }
        : p(a, r, o);
    }
    function d(e) {
      var t,
        n,
        r =
          (t = h(
            (n = g(e == null ? void 0 : e.messageParamsJson)) == null
              ? void 0
              : n.bottom_sheet,
          )) == null
            ? void 0
            : t.in_thread_buttons_limit;
      return typeof r == "number" && Number.isFinite(r)
        ? Math.max(Math.floor(r), 1)
        : null;
    }
    function m(e) {
      var t;
      return (
        !e.fromMe &&
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
        e.isFromTemplate === !0 &&
        e.isCarouselCard !== !0 &&
        !_(e.nativeFlowName) &&
        ((t = e.interactivePayload) == null || (t = t.buttons) == null
          ? void 0
          : t.some(function (e) {
              return (e == null ? void 0 : e.name) === s;
            })) !== !0
      );
    }
    function p(e, t, n) {
      var r,
        a = b(e, "expiration_time");
      if (a != null && a < o("WATimeUtils").unixTimeMs()) return null;
      var i = a != null && a <= u ? a : null;
      return {
        kind: "limited_time_offer",
        code: t,
        text: (r = y(e, "text")) != null ? r : n,
        expiryMs: i,
      };
    }
    function _(e) {
      return (
        e === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS ||
        e === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
      );
    }
    function f(t) {
      for (var n of t != null ? t : [])
        if ((n == null ? void 0 : n.name) === e) {
          var r = g(n.buttonParamsJson),
            o = r == null ? null : y(r, "copy_code");
          if (o != null) return o;
        }
      return null;
    }
    function g(e) {
      if (e == null) return null;
      try {
        return h(JSON.parse(e));
      } catch (e) {
        return null;
      }
    }
    function h(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function y(e, t) {
      var n = e[t];
      return typeof n == "string" ? C(n) : null;
    }
    function C(e) {
      return e != null && e.trim() !== "" ? e : null;
    }
    function b(e, t) {
      var n = e[t];
      return typeof n == "number" && Number.isFinite(n) ? n : null;
    }
    ((l.getPromotionOfferFor = c), (l.getInThreadButtonsLimit = d));
  },
  98,
);
