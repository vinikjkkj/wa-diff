__d(
  "WAWebReferentialMsgKey",
  ["WAWebMsgKey", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e.broadcastId && o("WAWebWidFactory").isWidlike(e.broadcastId)) {
        var t = e.id;
        return new (r("WAWebMsgKey"))({
          fromMe: t.fromMe,
          remote: o("WAWebWidFactory").createWidFromWidLike(e.broadcastId),
          id: t.id,
          participant: t.remote,
        });
      }
      return e.id;
    }
    l.getReferentialMsgKey = e;
  },
  98,
);
