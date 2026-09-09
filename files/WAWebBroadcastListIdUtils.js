__d(
  "WAWebBroadcastListIdUtils",
  ["WAJids", "WAWebBroadcastConsts"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      for (
        var t = Math.floor(Date.now() / o("WAWebBroadcastConsts").MS_PER_SEC);
        e(o("WAJids").toBroadcastJid(String(t)));
      )
        t++;
      return o("WAJids").toBroadcastJid(String(t));
    }
    l.createBroadcastListJid = e;
  },
  98,
);
