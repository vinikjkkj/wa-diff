__d(
  "WAWebChangeGroupPresenceHandlerAction",
  ["WAWebPresenceCollection"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebPresenceCollection").PresenceCollection.get(e.id);
      t != null &&
        t.set({
          groupOnlineCount: e.count,
          isOnline: e.count > 0,
          hasData: !0,
          isSubscribed: !0,
          stale: !1,
        });
    }
    l.default = e;
  },
  98,
);
