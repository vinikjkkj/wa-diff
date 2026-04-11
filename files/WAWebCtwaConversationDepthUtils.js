__d(
  "WAWebCtwaConversationDepthUtils",
  ["WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    var e = new Set([
      o("WAWebMsgType").MSG_TYPE.CHAT,
      o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
    ]);
    function s(t) {
      var n = 0,
        r = null;
      for (var o of t.msgs.getModelsArray())
        if (e.has(o.type)) {
          var a = o.id.fromMe;
          (a && r === !1 && n++, (r = a));
        }
      return n;
    }
    l.getCtwaConversationDepth = s;
  },
  98,
);
