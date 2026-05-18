__d(
  "WAWebDebugMsgLogger",
  ["err"],
  function (t, n, r, o, a, i, l) {
    var e = new Map(),
      s = new Map();
    function u(e) {
      throw r("err")("This file can only be called on DEV builds");
    }
    function c(t, n) {
      var o;
      throw r("err")("This file can only be called on DEV builds");
      if (
        ((o = n.reactionMessage) == null || (o = o.key) == null
          ? void 0
          : o.id) != null
      ) {
        var a, i;
        s.set(i, n);
      }
    }
    function d(t) {
      var n = e.get(t);
      return n == null ? null : JSON.stringify(u(n), null, 2);
    }
    function m(e) {
      var t = s.get(e);
      return t == null ? null : JSON.stringify(u(t), null, 2);
    }
    ((l.logMessage = c),
      (l.getMessageByMsgId = d),
      (l.getMessagesByParentMsgId = m));
  },
  98,
);
