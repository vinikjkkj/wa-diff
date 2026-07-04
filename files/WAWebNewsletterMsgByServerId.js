__d(
  "WAWebNewsletterMsgByServerId",
  ["WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = new Map();
      for (var n of e)
        n.serverId != null &&
          n.type !== o("WAWebMsgType").MSG_TYPE.REVOKED &&
          t.set(n.serverId, n);
      return t;
    }
    l.buildMsgByServerId = e;
  },
  98,
);
