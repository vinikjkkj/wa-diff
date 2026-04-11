__d(
  "WAWebMsgInfoBridgeApi",
  ["WAWebMsgCollection", "WAWebMsgInfoAction", "WAWebMsgInfoCollection"],
  function (t, n, r, o, a, i, l) {
    var e = {
      updateMsgInfo: function (t) {
        var e = t.updates;
        for (var n of e) {
          var r,
            a = n.ack,
            i = n.msgKey,
            l = n.participant,
            s = n.ts,
            u =
              (r = o("WAWebMsgCollection").MsgCollection.get(i)) != null
                ? r
                : o("WAWebMsgCollection").MsgCollection.getByEditMsgKey(i);
          if (u != null) {
            var c = o("WAWebMsgInfoCollection").MsgInfoCollection.get(u.id);
            c != null && o("WAWebMsgInfoAction").updateMsgInfo(c, a, l, s);
          }
        }
      },
    };
    l.MsgInfoBridgeApi = e;
  },
  98,
);
