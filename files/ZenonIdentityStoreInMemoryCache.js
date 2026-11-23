__d(
  "ZenonIdentityStoreInMemoryCache",
  ["MAWJids", "WAJids", "promiseDone"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("WAJids").toDeviceJid(o("MAWJids").jidUtils.toUserJid(t), e);
    }
    var s = (function () {
      function t(e, t, n) {
        ((this.$1 = e),
          (this.$2 = t),
          (this.$3 = this.$1.getLocalUserId()),
          (this.$4 = n),
          (this.$5 = new Map()));
      }
      var n = t.prototype;
      return (
        (n.getLocalUserId = function () {
          return this.$3;
        }),
        (n.getLocalPublicPrivateIdentityKey = function () {
          return this.$2;
        }),
        (n.getLocalDeviceId = function () {
          return this.$4;
        }),
        (n.cacheIdentityKeys = async function (n) {
          var t = this,
            r = [],
            o = async function () {
              var n = a.deviceId,
                o = a.userId;
              if (t.getRemotePublicIdentityKey(o, n) != null) return 1;
              r.push(
                t.$1.getRemotePublicIdentityKey(o, n).then(function (r) {
                  t.$5.set(e(n, o), r);
                }),
              );
            };
          for (var a of n) await o();
          await Promise.all(r);
        }),
        (n.getRemotePublicIdentityKey = function (n, r) {
          return this.$5.get(e(r, n));
        }),
        (n.saveRemotePublicIdentityKey = function (n, o, a) {
          this.getRemotePublicIdentityKey(n, o) !== a &&
            (r("promiseDone")(this.$1.saveRemotePublicIdentityKey(n, o, a)),
            this.$5.set(e(o, n), a));
        }),
        (n.getShortDescription = function () {
          return this.$1.getShortDescription();
        }),
        (n.getLocalIdentityKeyMode = function () {
          return this.$1.getLocalIdentityKeyMode();
        }),
        t
      );
    })();
    async function u(e, t, n) {
      var r = t != null ? t : await e.getLocalPublicPrivateIdentityKey(),
        o = n != null ? n : await e.getLocalDeviceId();
      return new s(e, r, o);
    }
    ((l.ZenonIdentityStoreInMemoryCache = s),
      (l.createNewZenonIdentityStoreInMemoryCache = u));
  },
  98,
);
