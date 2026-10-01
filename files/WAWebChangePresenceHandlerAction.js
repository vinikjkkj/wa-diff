__d(
  "WAWebChangePresenceHandlerAction",
  [
    "WAWebChatCollection",
    "WAWebLimitSharingGatingUtils",
    "WAWebPresenceCollection",
    "WAWebPresenceGetters",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 25e3;
    function s(e, t) {
      t === void 0 && (t = !0);
      var n = e.id;
      if (!u(e) && !o("WAWebUserPrefsMeUser").isMeAccount(n)) {
        var r = o("WAWebPresenceCollection").PresenceCollection.get(n);
        r && (d(r, e), t && r.set({ stale: !1 }));
      }
    }
    function u(e) {
      var t;
      if (e.type !== "typing" && e.type !== "recording_audio") return !1;
      var n = o("WAWebChatCollection").ChatCollection.get(e.id);
      return (
        n != null &&
        ((t = n.acp2Setting) == null ? void 0 : t.enabled) === !0 &&
        o("WAWebLimitSharingGatingUtils").isAcp2EnabledForChat(n)
      );
    }
    function c(e, t) {
      var n = e.type;
      (n === "typing" || n === "recording_audio") &&
        (e.type = t.isOnline ? "available" : "unavailable");
    }
    function d(t, n) {
      var r = !1;
      (typeof n.type == "undefined"
        ? (n.type = t.chatstate.type || "unavailable")
        : n.type === "idle" &&
          ((r = !0), (n.type = t.isOnline ? "available" : "unavailable")),
        o("WAWebPresenceGetters").getIsGroup(t) &&
          n.type !== "available" &&
          !r &&
          (n.updateTime = Date.now()));
      var a;
      if (o("WAWebPresenceGetters").getIsGroup(t)) {
        var i = n.participant;
        if (i == null) return;
        var l = n.id,
          s = o("WAWebChatCollection").ChatCollection.get(l);
        if (s == null) return;
        ((n.id = i), (n.participant = void 0), (a = t.chatstates.gadd(n.id)));
      } else a = t.chatstate;
      ((!r || a.type === "typing" || a.type === "recording_audio") && a.set(n),
        a.expireTimerId != null && self.clearTimeout(a.expireTimerId),
        a.type === "typing" || a.type === "recording_audio"
          ? (a.expireTimerId = self.setTimeout(function () {
              return c(a, t);
            }, e))
          : (a.expireTimerId = void 0));
      var u =
        t.forceDisplay ||
        t.isOnline ||
        (o("WAWebPresenceGetters").getIsUser(t) && !t.chatstate.deny);
      t.set({ hasData: !0, isSubscribed: !0, forceDisplay: u });
    }
    l.default = s;
  },
  98,
);
