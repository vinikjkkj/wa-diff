__d(
  "WAWebBotDeviceCapabilities",
  [
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsDeviceCapabilities.pb",
    "WAWebSyncdConst",
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
        n = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
      if (n == null)
        return o("WAWebProtobufsDeviceCapabilities.pb")
          .DeviceCapabilities$AiThread$SupportLevel.NONE;
      var r =
          '["' +
          o("WAWebSyncdConst").Actions.DeviceCapabilities +
          '","' +
          n.user +
          ':0@s.whatsapp.net"]',
        a = await o("WAWebSyncdDb").getSyncAction(r);
      if ((a == null ? void 0 : a.binarySyncData) == null)
        return o("WAWebProtobufsDeviceCapabilities.pb")
          .DeviceCapabilities$AiThread$SupportLevel.NONE;
      var i =
        (e =
          (t = o("decodeProtobuf").decodeProtobuf(
            o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
            a.binarySyncData,
          ).value) == null ||
          (t = t.deviceCapabilities) == null ||
          (t = t.aiThread) == null
            ? void 0
            : t.supportLevel) != null
          ? e
          : o("WAWebProtobufsDeviceCapabilities.pb")
              .DeviceCapabilities$AiThread$SupportLevel.NONE;
      return i;
    }
    l.primaryHasAiThreadSupport = e;
  },
  98,
);
