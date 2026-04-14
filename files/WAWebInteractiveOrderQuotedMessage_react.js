__d(
  "WAWebInteractiveOrderQuotedMessage.react",
  [
    "WAWebFrontendMsgGetters",
    "WAWebOrderStatus",
    "WAWebQuotedMsg.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = function (t) {
        var e,
          n =
            (e = o("WAWebOrderStatus").getOrderStatusInfo(t)) == null
              ? void 0
              : e.refId;
        return n == null
          ? null
          : o("WAWebOrderStatus").findOrderDetailsMessage(
              o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
              n,
            );
      };
    function c(e) {
      var t = e.displayType,
        n = e.msg,
        a = e.quotedMsg,
        i = o("WAWebFrontendMsgGetters").getChat(n.unsafe());
      if (a) return a;
      var l = u(n);
      return l
        ? s.jsx(r("WAWebQuotedMsg.react"), {
            msg: l,
            chat: i,
            rootMsg: n,
            displayType: t,
          })
        : null;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
