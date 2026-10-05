__d(
  "WAWebChangePresenceHandlerAction",
  [
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
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
      var r = n.type === "typing",
        a = !1;
      (typeof n.type == "undefined"
        ? (n.type = t.chatstate.type || "unavailable")
        : n.type === "idle" &&
          ((a = !0), (n.type = t.isOnline ? "available" : "unavailable")),
        o("WAWebPresenceGetters").getIsGroup(t) &&
          n.type !== "available" &&
          !a &&
          (n.updateTime = Date.now()));
      var i;
      if (o("WAWebPresenceGetters").getIsGroup(t)) {
        var l = n.participant;
        if (l == null) return;
        var s = n.id,
          u = o("WAWebChatCollection").ChatCollection.get(s);
        if (u == null || (r && m(l, u))) return;
        ((n.id = l), (n.participant = void 0), (i = t.chatstates.gadd(n.id)));
      } else i = t.chatstate;
      ((!a || i.type === "typing" || i.type === "recording_audio") && i.set(n),
        i.expireTimerId != null && self.clearTimeout(i.expireTimerId),
        i.type === "typing" || i.type === "recording_audio"
          ? (i.expireTimerId = self.setTimeout(function () {
              return c(i, t);
            }, e))
          : (i.expireTimerId = void 0));
      var d =
        t.forceDisplay ||
        t.isOnline ||
        (o("WAWebPresenceGetters").getIsUser(t) && !t.chatstate.deny);
      t.set({ hasData: !0, isSubscribed: !0, forceDisplay: d });
    }
    function m(e, t) {
      var n = t.groupMetadata;
      return (
        o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e) &&
        n != null &&
        !n.stale &&
        n.participants.get(e) == null &&
        o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
      );
    }
    l.default = s;
  },
  98,
);
