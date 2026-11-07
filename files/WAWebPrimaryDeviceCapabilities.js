__d(
  "WAWebPrimaryDeviceCapabilities",
  [
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdConst",
    "WAWebSyncdDb",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t,
            n = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
          if (n == null) return null;
          var r =
              '["' +
              o("WAWebSyncdConst").Actions.DeviceCapabilities +
              '","' +
              n.user +
              ":" +
              e +
              '@s.whatsapp.net"]',
            a = yield o("WAWebSyncdDb").getSyncAction(r);
          if ((a == null ? void 0 : a.binarySyncData) == null) return null;
          var i =
            (t = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
              a.binarySyncData,
            ).value) == null
              ? void 0
              : t.deviceCapabilities;
          return i;
        })),
        u.apply(this, arguments)
      );
    }
    l.getPrimaryDeviceCapabilities = s;
  },
  98,
);
