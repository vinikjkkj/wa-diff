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
            n =
              '["' +
              o("WAWebSyncdConst").Actions.DeviceCapabilities +
              '","' +
              o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().user +
              ":" +
              e +
              '@s.whatsapp.net"]',
            r = yield o("WAWebSyncdDb").getSyncAction(n);
          if ((r == null ? void 0 : r.binarySyncData) == null) return null;
          var a =
            (t = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
              r.binarySyncData,
            ).value) == null
              ? void 0
              : t.deviceCapabilities;
          return a;
        })),
        u.apply(this, arguments)
      );
    }
    l.getPrimaryDeviceCapabilities = s;
  },
  98,
);
