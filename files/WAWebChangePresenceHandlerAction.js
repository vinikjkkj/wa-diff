__d(
  "WAWebChangePresenceHandlerAction",
  [
    "Promise",
    "WAWebChatCollection",
    "WAWebLidMigrationUtils",
    "WAWebPresenceCollection",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 25e3;
    function u(e, t) {
      var n = e.type;
      (n === "typing" || n === "recording_audio") &&
        (e.type = t.isOnline ? "available" : "unavailable");
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          r === void 0 && (r = !0);
          var a = t.id;
          if (!o("WAWebUserPrefsMeUser").isMeAccount(a)) {
            var i = o("WAWebPresenceCollection").PresenceCollection.get(a);
            i && (m(i, t), r && i.set({ stale: !1 }));
          }
          return (e || (e = n("Promise"))).resolve();
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      var n = !1;
      (typeof t.type == "undefined"
        ? (t.type = e.chatstate.type || "unavailable")
        : t.type === "idle" &&
          ((n = !0), (t.type = e.isOnline ? "available" : "unavailable")),
        e.isGroup &&
          t.type !== "available" &&
          !n &&
          (t.updateTime = Date.now()));
      var r;
      if (e.isGroup) {
        var a = t.participant;
        if (a == null) return;
        var i = t.id,
          l = o("WAWebChatCollection").ChatCollection.get(i);
        if (l == null || o("WAWebLidMigrationUtils").toPn(a) == null) return;
        ((t.id = a), (t.participant = void 0), (r = e.chatstates.gadd(t.id)));
      } else r = e.chatstate;
      ((!n || r.type === "typing" || r.type === "recording_audio") && r.set(t),
        r.expireTimerId && self.clearTimeout(r.expireTimerId),
        r.type === "typing" || r.type === "recording_audio"
          ? (r.expireTimerId = self.setTimeout(function () {
              return u(r, e);
            }, s))
          : (r.expireTimerId = void 0));
      var c = e.forceDisplay || e.isOnline || (e.isUser && !e.chatstate.deny);
      e.set({ hasData: !0, isSubscribed: !0, forceDisplay: c });
    }
    l.default = c;
  },
  98,
);
