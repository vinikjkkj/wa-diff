__d(
  "WAWebBotDeviceCapabilities",
  [
    "WASyncdConst",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsDeviceCapabilities.pb",
    "WAWebSyncdDb",
    "WAWebUserPrefsMeUser",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e() {
      var e = await s();
      return (
        e ===
          o("WAWebProtobufsDeviceCapabilities.pb")
            .DeviceCapabilities$AiThread$SupportLevel.INFRA ||
        e ===
          o("WAWebProtobufsDeviceCapabilities.pb")
            .DeviceCapabilities$AiThread$SupportLevel.FULL
      );
    }
    async function s() {
      var e,
        t,
        n =
          '["' +
          o("WASyncdConst").Actions.DeviceCapabilities +
          '","' +
          o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().user +
          ':0@s.whatsapp.net"]',
        r = await o("WAWebSyncdDb").getSyncAction(n);
      if ((r == null ? void 0 : r.binarySyncData) == null)
        return o("WAWebProtobufsDeviceCapabilities.pb")
          .DeviceCapabilities$AiThread$SupportLevel.NONE;
      var a =
        (e =
          (t = o("decodeProtobuf").decodeProtobuf(
            o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
            r.binarySyncData,
          ).value) == null ||
          (t = t.deviceCapabilities) == null ||
          (t = t.aiThread) == null
            ? void 0
            : t.supportLevel) != null
          ? e
          : o("WAWebProtobufsDeviceCapabilities.pb")
              .DeviceCapabilities$AiThread$SupportLevel.NONE;
      return a;
    }
    l.primaryHasAiThreadSupport = e;
  },
  98,
);
