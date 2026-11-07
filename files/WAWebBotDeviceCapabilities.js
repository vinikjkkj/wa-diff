__d(
  "WAWebBotDeviceCapabilities",
  [
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsDeviceCapabilities.pb",
    "WAWebSyncdConst",
    "WAWebSyncdDb",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield u();
          return (
            e ===
              o("WAWebProtobufsDeviceCapabilities.pb")
                .DeviceCapabilities$AiThread$SupportLevel.INFRA ||
            e ===
              o("WAWebProtobufsDeviceCapabilities.pb")
                .DeviceCapabilities$AiThread$SupportLevel.FULL
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
            a = yield o("WAWebSyncdDb").getSyncAction(r);
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
        })),
        c.apply(this, arguments)
      );
    }
    l.primaryHasAiThreadSupport = e;
  },
  98,
);
