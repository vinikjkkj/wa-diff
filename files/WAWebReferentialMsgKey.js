__d(
  "WAWebReferentialMsgKey",
  ["WAWebMsgKey", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.broadcastId;
      if (t && o("WAWebWidFactory").isWidlike(t)) {
        var n = e.id;
        return new (r("WAWebMsgKey"))({
          fromMe: n.fromMe,
          remote: o("WAWebWidFactory").createWidFromWidLike(t),
          id: n.id,
          participant: n.remote,
        });
      }
      return e.id;
    }
    l.getReferentialMsgKey = e;
  },
  98,
);
