__d(
  "ZenonAlwaysTrustIdentityStore",
  ["Promise", "WASignalKeys", "ZenonIdentityStoreInterface"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e) {
          ((this.$1 = e),
            (this.$2 = o("WASignalKeys").makeSerializedKeyPair()));
        }
        var r = t.prototype;
        return (
          (r.getLocalUserId = function () {
            return this.$1;
          }),
          (r.getLocalPublicPrivateIdentityKey = function () {
            return (e || (e = n("Promise"))).resolve(this.$2);
          }),
          (r.getShortDescription = function () {
            return "Always trust";
          }),
          (r.getRemotePublicIdentityKey = function (r, a) {
            return (e || (e = n("Promise"))).resolve(
              o("WASignalKeys").serializeIdentity(new Uint8Array(32)),
            );
          }),
          (r.saveRemotePublicIdentityKey = function (r, o, a) {
            return (e || (e = n("Promise"))).resolve(0);
          }),
          (r.getLocalDeviceId = function () {
            return (e || (e = n("Promise"))).resolve(0);
          }),
          (r.getLocalIdentityKeyMode = function () {
            return o("ZenonIdentityStoreInterface").ZenonIdentityKeyMode.RANDOM;
          }),
          t
        );
      })();
    function u(t) {
      return (e || (e = n("Promise"))).resolve(new s(t));
    }
    l.createNewAlwaysTrustIdentityStore = u;
  },
  98,
);
