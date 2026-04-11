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
          (t.getMsmsgBotGroupGossipDataFromCache = function (t, n, a, i) {
            var e = new (r("WAWebMsgKey"))({
                fromMe: t,
                remote: n,
                id: a,
                participant: i,
              }).toString(),
              l = this.cache.get(e);
            if (l == null) {
              var s,
                u = new (r("WAWebMsgKey"))({
                  fromMe: t,
                  remote: n,
                  id: a,
                  participant:
                    (s = o("WAWebLidMigrationUtils").toPn(i)) != null ? s : i,
                }).toString();
              l = this.cache.get(u);
            }
            return l;
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
