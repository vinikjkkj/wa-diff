__d(
  "WAWebBroadcastMsgCollectionUtils",
  ["WALogger", "WAWebChatCollection", "WAWebMsgCollection", "WAWebMsgModel"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      var n = u(e);
      for (var r of t) u(r);
      return n;
    }
    function u(t) {
      var n = new (o("WAWebMsgModel").Msg)(t);
      o("WAWebMsgCollection").MsgCollection.add(n);
      var r = o("WAWebChatCollection").ChatCollection.get(n.to);
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:msg-collection] msg stored id=",
              " ack=",
              "",
            ])),
          n.id,
          n.ack,
        ),
        r != null && r.msgs.add(n),
        n
      );
    }
    l.addMsgsToCollections = s;
  },
  98,
);
