__d(
  "WAGetCurrentUserDeviceInfoApi",
  ["WAGetMetaApi", "WASignalKeys"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
      return o("WAGetMetaApi")
        .getMeta()
        .then(function (e) {
          var t = e == null ? void 0 : e.deviceId,
            n = e == null ? void 0 : e.identityKeyPair;
          if (t == null || n == null) return null;
          var r = o("WASignalKeys").serializePubKey(n);
          return { deviceId: t, identityKey: r };
        });
    };
    l.getCurrentUserDeviceInfo = e;
  },
  98,
);
