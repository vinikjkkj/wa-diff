__d(
  "WAWebOrderStatusButton",
  ["WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE
        ? null
        : s({ interactivePayload: e.interactivePayload, type: e.type });
    }
    function s(e) {
      var t,
        n = e.interactivePayload,
        r = e.type;
      return r !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE
        ? null
        : d(n == null || (t = n.buttons) == null ? void 0 : t[0]);
    }
    function u(t) {
      var n;
      return (
        ((n = e(t)) == null || (n = n.order) == null
          ? void 0
          : n.order_creator_surface) === "biz_inbox"
      );
    }
    function c(e) {
      var t;
      return (
        ((t = s(e)) == null || (t = t.order) == null
          ? void 0
          : t.order_creator_surface) === "biz_inbox"
      );
    }
    function d(e) {
      if ((e == null ? void 0 : e.name) !== "order_status") return null;
      var t = e == null ? void 0 : e.buttonParamsJson;
      if (t == null) return null;
      try {
        var n = JSON.parse(t);
        return n;
      } catch (e) {
        return null;
      }
    }
    ((l.getOrderStatusButton = e),
      (l.getOrderStatusButtonFor = s),
      (l.isInboxCreatedOrder = u),
      (l.isInboxCreatedOrderFor = c),
      (l.parseOrderStatusButton = d));
  },
  98,
);
