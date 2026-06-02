__d(
  "WAWebHasAvatarDeviceCapability",
  [
    "WASyncdConst",
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdDb",
    "WAWebUserPrefsMeUser",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      var e,
        t =
          '["' +
          o("WASyncdConst").Actions.DeviceCapabilities +
          '","' +
          o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().user +
          ':0@s.whatsapp.net"]',
        n = await o("WAWebSyncdDb").getSyncAction(t);
      if ((n == null ? void 0 : n.binarySyncData) == null) return !1;
      var r =
        (e = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
          n.binarySyncData,
        ).value) == null ||
        (e = e.deviceCapabilities) == null ||
        (e = e.userHasAvatar) == null
          ? void 0
          : e.userHasAvatar;
      return !!r;
    }
    l.getPrimaryHasAvatarFromDeviceCapability = e;
  },
  98,
);
