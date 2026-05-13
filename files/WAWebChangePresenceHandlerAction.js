__d(
  "WAWebChangePresenceHandlerAction",
  [
    "WAWebChatCollection",
    "WAWebLidMigrationUtils",
    "WAWebPresenceCollection",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 25e3;
    function s(e, t) {
      var n = e.type;
      (n === "typing" || n === "recording_audio") &&
        (e.type = t.isOnline ? "available" : "unavailable");
    }
    function u(e, t) {
      t === void 0 && (t = !0);
      var n = e.id;
      if (!o("WAWebUserPrefsMeUser").isMeAccount(n)) {
        var r = o("WAWebPresenceCollection").PresenceCollection.get(n);
        r && (c(r, e), t && r.set({ stale: !1 }));
      }
    }
    function c(t, n) {
      var r = !1;
      (typeof n.type == "undefined"
        ? (n.type = t.chatstate.type || "unavailable")
        : n.type === "idle" &&
          ((r = !0), (n.type = t.isOnline ? "available" : "unavailable")),
        t.isGroup &&
          n.type !== "available" &&
          !r &&
          (n.updateTime = Date.now()));
      var a;
      if (t.isGroup) {
        var i = n.participant;
        if (i == null) return;
        var l = n.id,
          u = o("WAWebChatCollection").ChatCollection.get(l);
        if (u == null || o("WAWebLidMigrationUtils").toPn(i) == null) return;
        ((n.id = i), (n.participant = void 0), (a = t.chatstates.gadd(n.id)));
      } else a = t.chatstate;
      ((!r || a.type === "typing" || a.type === "recording_audio") && a.set(n),
        a.expireTimerId && self.clearTimeout(a.expireTimerId),
        a.type === "typing" || a.type === "recording_audio"
          ? (a.expireTimerId = self.setTimeout(function () {
              return s(a, t);
            }, e))
          : (a.expireTimerId = void 0));
      var c = t.forceDisplay || t.isOnline || (t.isUser && !t.chatstate.deny);
      t.set({ hasData: !0, isSubscribed: !0, forceDisplay: c });
    }
    l.default = u;
  },
  98,
);
