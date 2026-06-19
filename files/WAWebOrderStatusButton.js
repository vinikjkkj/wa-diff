__d(
  "WAWebOrderStatusButton",
  ["WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      if (e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) return null;
      var n =
        (t = e.interactivePayload) == null || (t = t.buttons) == null
          ? void 0
          : t[0];
      return u(n);
    }
    function s(t) {
      var n;
      return (
        ((n = e(t)) == null || (n = n.order) == null
          ? void 0
          : n.order_creator_surface) === "biz_inbox"
      );
    }
    function u(e) {
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
      (l.isInboxCreatedOrder = s),
      (l.parseOrderStatusButton = u));
  },
  98,
);
