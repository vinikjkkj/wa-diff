__d(
  "WAWebPrimaryDeviceCapabilities",
  [
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdConst",
    "WAWebSyncdDb",
    "WAWebUserPrefsMeUser",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0;
    async function s() {
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
        a = await o("WAWebSyncdDb").getSyncAction(r);
      if ((a == null ? void 0 : a.binarySyncData) == null) return null;
      var i =
        (t = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
          a.binarySyncData,
        ).value) == null
          ? void 0
          : t.deviceCapabilities;
      return i;
    }
    l.getPrimaryDeviceCapabilities = s;
  },
  98,
);
