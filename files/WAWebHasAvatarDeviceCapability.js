__d(
  "WAWebHasAvatarDeviceCapability",
  [
    "WASyncdConst",
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdDb",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t =
              '["' +
              o("WASyncdConst").Actions.DeviceCapabilities +
              '","' +
              o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().user +
              ':0@s.whatsapp.net"]',
            n = yield o("WAWebSyncdDb").getSyncAction(t);
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
        })),
        s.apply(this, arguments)
      );
    }
    l.getPrimaryHasAvatarFromDeviceCapability = e;
  },
  98,
);
