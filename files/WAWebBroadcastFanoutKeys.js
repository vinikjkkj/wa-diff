__d(
  "WAWebBroadcastFanoutKeys",
  [
    "WALogger",
    "WAWebGroupMetadataCollection",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      var n, a, i, l;
      if (t instanceof o("WAWebMsgModel").Msg) ((i = t), (l = t.id));
      else if (t instanceof r("WAWebMsgKey")) l = t;
      else {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "model:msgs:broadcastFanout: unknown msgOrKey: ",
              "",
            ])),
          String(t),
        );
        return;
      }
      if (!r("WAWebWid").isStatus(l.remote)) {
        if ((n = i) != null && n.recipients && i.recipients.length !== 0)
          a = i.recipients;
        else {
          var u = r("WAWebGroupMetadataCollection").get(l.remote);
          u
            ? (a = u.participants.map(function (e) {
                return e.id;
              }))
            : o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcastFanout] no group_metadata, cant fanout: ",
                    "",
                  ])),
                l.remote.toString(),
              );
        }
        return a
          ? a.map(function (e) {
              return new (r("WAWebMsgKey"))({
                fromMe: l.fromMe,
                remote: e,
                id: l.id,
              });
            })
          : void 0;
      }
    }
    l.getBroadcastFanoutKeys = u;
  },
  98,
);
