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
      })(),
      s = (function () {
        function e() {
          var e = this;
          ((this.cache = new Map()),
            o("WAWebBackendEventBus").BackendEventBus.onLogout(function () {
              e.cache = new Map();
            }));
        }
        var t = e.prototype;
        return (
          (t.addMsmsgBotGroupGossipDataToCache = function (t, n) {
            this.cache.set(t, n);
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
      })(),
      u = new e(),
      c = new s();
    ((l.msmsgMsgSecretCache = u), (l.msmsgBotGroupGossipDataCache = c));
  },
  98,
);
