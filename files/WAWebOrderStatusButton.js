__d(
  "WAWebOrderStatusButton",
  ["WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
        var e;
        if (t.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) return null;
        var n =
          (e = t.interactivePayload) == null || (e = e.buttons) == null
            ? void 0
            : e[0];
        return s(n);
      },
      s = function (t) {
        if ((t == null ? void 0 : t.name) !== "order_status") return null;
        var e = t == null ? void 0 : t.buttonParamsJson;
        if (e == null) return null;
        try {
          var n = JSON.parse(e);
          return n;
        } catch (e) {
          return null;
        }
      };
    ((l.getOrderStatusButton = e), (l.parseOrderStatusButton = s));
  },
  98,
);
