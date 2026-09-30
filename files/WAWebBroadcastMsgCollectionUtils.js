__d(
  "WAWebBroadcastMsgCollectionUtils",
  ["WALogger", "WAWebChatCollection", "WAWebMsgCollection", "WAWebMsgModel"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      var n = c(e);
      for (var r of t) c(r);
      return n;
    }
    function u(t) {
      o("WAWebMsgCollection").MsgCollection.add(t);
      var n = o("WAWebChatCollection").ChatCollection.get(t.to);
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:msg-collection] msg stored id=",
              " ack=",
              "",
            ])),
          t.id,
          t.ack,
        ),
        n != null && n.msgs.add(t),
        t
      );
    }
    function c(e) {
      return u(new (o("WAWebMsgModel").Msg)(e));
    }
    ((l.addMsgsToCollections = s), (l.addMsgModelToCollections = u));
  },
  98,
);
