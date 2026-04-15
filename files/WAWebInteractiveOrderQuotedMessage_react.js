__d(
  "WAWebInteractiveOrderQuotedMessage.react",
  [
    "WAWebFrontendMsgGetters",
    "WAWebOrderStatus",
    "WAWebQuotedMsg.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(9),
        n = e.displayType,
        a = e.msg,
        i = e.quotedMsg,
        l;
      t[0] !== a
        ? ((l = o("WAWebFrontendMsgGetters").getChat(a.unsafe())),
          (t[0] = a),
          (t[1] = l))
        : (l = t[1]);
      var c = l;
      if (i) return i;
      var d;
      t[2] !== a ? ((d = u(a)), (t[2] = a), (t[3] = d)) : (d = t[3]);
      var m = d;
      if (m) {
        var p;
        return (
          t[4] !== c || t[5] !== n || t[6] !== a || t[7] !== m
            ? ((p = s.jsx(r("WAWebQuotedMsg.react"), {
                msg: m,
                chat: c,
                rootMsg: a,
                displayType: n,
              })),
              (t[4] = c),
              (t[5] = n),
              (t[6] = a),
              (t[7] = m),
              (t[8] = p))
            : (p = t[8]),
          p
        );
      }
      return null;
    }
    l.default = c;
  },
  98,
);
