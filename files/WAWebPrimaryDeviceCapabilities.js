__d(
  "WAWebPrimaryDeviceCapabilities",
  [
    "WASyncdConst",
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdDb",
    "WAWebUserPrefsMeUser",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0;
    async function s() {
      var t,
        n =
          '["' +
          o("WASyncdConst").Actions.DeviceCapabilities +
          '","' +
          o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().user +
          ":" +
          e +
          '@s.whatsapp.net"]',
        r = await o("WAWebSyncdDb").getSyncAction(n);
      if ((r == null ? void 0 : r.binarySyncData) == null) return null;
      var a =
        (t = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
          r.binarySyncData,
        ).value) == null
          ? void 0
          : t.deviceCapabilities;
      return a;
    }
    l.getPrimaryDeviceCapabilities = s;
  },
  98,
);
