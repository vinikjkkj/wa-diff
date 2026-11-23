__d(
  "ZenonMAWIdentityStore",
  [
    "MAWRemotePresenceTypes",
    "Promise",
    "WAGetLocalDeviceIdApi",
    "WAGetLocalPublicPrivateIdentityKeyApi",
    "WAGetRemotePublicIdentity",
    "WAJids",
    "WMIWABridgeApi",
    "ZenonIdentityStoreInterface",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e) {
          this.$1 = e;
        }
        var a = t.prototype;
        return (
          (a.getLocalUserId = function () {
            return this.$1;
          }),
          (a.getShortDescription = function () {
            return "MAW";
          }),
          (a.getLocalPublicPrivateIdentityKey = function () {
            return (
              this.$2 == null &&
                (this.$2 = o(
                  "WAGetLocalPublicPrivateIdentityKeyApi",
                ).getLocalPublicPrivateIdentityKey()),
              this.$2
            );
          }),
          (a.getRemotePublicIdentityKey = function (t, n) {
            var e = o("WAJids").unsafeCoerceToDeviceId(n);
            return o("WAGetRemotePublicIdentity").getRemotePublicIdentity(e, t);
          }),
          (a.saveRemotePublicIdentityKey = function (a, i, l) {
            return (
              r("promiseDone")(
                r("WMIWABridgeApi").getDevices({
                  ignoreDhash: !1,
                  reason: "zenon-save-remote-public-identity-key",
                  users: new Set([o("WAJids").toMsgrUserJid(a)]),
                }),
              ),
              (e || (e = n("Promise"))).resolve(
                o("MAWRemotePresenceTypes").STATUS_CODES.OK,
              )
            );
          }),
          (a.getLocalDeviceId = function () {
            return (
              this.$3 == null &&
                (this.$3 = o("WAGetLocalDeviceIdApi").getLocalDeviceId()),
              this.$3
            );
          }),
          (a.getLocalIdentityKeyMode = function () {
            return o("ZenonIdentityStoreInterface").ZenonIdentityKeyMode
              .USE_PERSISTENT_IDENTITY_KEYS_AND_VALIDATE;
          }),
          t
        );
      })();
    function u(t) {
      return (e || (e = n("Promise"))).resolve(new s(t));
    }
    l.createNewMAWIdentityStore = u;
  },
  98,
);
