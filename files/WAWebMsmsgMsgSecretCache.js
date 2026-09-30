__d(
  "WAWebMsmsgMsgSecretCache",
  ["WAWebBackendEventBus", "WAWebLidMigrationUtils", "WAWebMsgKey"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e() {
        var e = this;
        ((this.cache = new Map()),
          o("WAWebBackendEventBus").BackendEventBus.onLogout(function () {
            return e.clearCache();
          }));
      }
      var t = e.prototype;
      return (
        (t.addMsmsgMsgSecretToCache = function (t, n) {
          this.cache.set(t, n);
        }),
        (t.getMsmsgMsgSecretFromCache = function (t) {
          return this.cache.get(t);
        }),
        (t.clearCache = function () {
          this.cache = new Map();
        }),
        e
      );
    })();
    function s(e, t) {
      return e != null && e.length > 0
        ? { isLegacySingular: !1, participants: e }
        : t != null
          ? { isLegacySingular: !0, participants: [t] }
          : null;
    }
    var u = (function () {
      function e() {
        var e = this;
        ((this.cache = new Map()),
          o("WAWebBackendEventBus").BackendEventBus.onLogout(function () {
            e.cache = new Map();
          }));
      }
      var t = e.prototype;
      return (
        (t.addMsmsgBotGroupGossipDataToCache = function (t, n, r) {
          this.cache.set(t, { isLegacySingular: r, participants: n });
        }),
        (t.getMsmsgBotGroupGossipDataFromCache = function (t) {
          var e = t.fromMe,
            n = t.id,
            a = t.participant,
            i = t.remote,
            l = new (r("WAWebMsgKey"))({
              fromMe: e,
              remote: i,
              id: n,
              participant: a,
            }).toString(),
            s = this.cache.get(l);
          if (s == null) {
            var u,
              c = new (r("WAWebMsgKey"))({
                fromMe: e,
                remote: i,
                id: n,
                participant:
                  (u = o("WAWebLidMigrationUtils").toPn(a)) != null ? u : a,
              }).toString();
            s = this.cache.get(c);
          }
          return s;
        }),
        (t.deleteMsmsgBotGroupGossipDataFromCache = function (t) {
          this.cache.delete(t);
        }),
        e
      );
    })();
    function c(e, t, n) {
      if (e == null) return null;
      var r = e.isLegacySingular,
        o = e.participants;
      if (r) {
        var a;
        return (a = o[0]) != null ? a : null;
      }
      if (t == null || !t.isFbidBot()) return null;
      var i = t.user;
      if (n) {
        var l = o.find(function (e) {
          return e.user === i;
        });
        if (l != null) return l;
      }
      return null;
    }
    var d = new e(),
      m = new u();
    ((l.createBotGroupGossipData = s),
      (l.getBotGroupParticipantForResponse = c),
      (l.msmsgMsgSecretCache = d),
      (l.msmsgBotGroupGossipDataCache = m));
  },
  98,
);
