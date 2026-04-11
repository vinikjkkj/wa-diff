__d(
  "WAWebBotDeviceCapabilities",
  [
    "WASyncdConst",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsDeviceCapabilities.pb",
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
            n =
              '["' +
              o("WASyncdConst").Actions.DeviceCapabilities +
              '","' +
              o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().user +
              ':0@s.whatsapp.net"]',
            r = yield o("WAWebSyncdDb").getSyncAction(n);
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
        })),
        c.apply(this, arguments)
      );
    }
    l.primaryHasAiThreadSupport = e;
  },
  98,
);
