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
    function s(e) {
      if (
        e.length < 1 ||
        e.length > o("WAWebBroadcastConsts").MAX_BROADCAST_ID_LENGTH
      )
        return !1;
      var t = e.charAt(0);
      if (t < "1" || t > "9") return !1;
      for (var n = 0; n < e.length; n++) {
        var r = e.charAt(n);
        if (r < "0" || r > "9") return !1;
      }
      return !0;
    }
    ((l.createBroadcastListJid = e), (l.isValidBroadcastListId = s));
  },
  98,
);
