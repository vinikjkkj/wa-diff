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
      return s(n);
    }
    function s(e) {
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
    ((l.getOrderStatusButton = e), (l.parseOrderStatusButton = s));
  },
  98,
);
