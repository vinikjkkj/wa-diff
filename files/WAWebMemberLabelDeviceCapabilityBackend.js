__d(
  "WAWebMemberLabelDeviceCapabilityBackend",
  [
    "WASyncdConst",
    "WAWebMemberLabelDeviceCapabilityCommon",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsDeviceCapabilities.pb",
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
            t,
            n =
              '["' +
              o("WASyncdConst").Actions.DeviceCapabilities +
              '","' +
              o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().user +
              ':0@s.whatsapp.net"]',
            r = yield o("WAWebSyncdDb").getSyncAction(n);
          return (r == null ? void 0 : r.binarySyncData) == null
            ? o("WAWebProtobufsDeviceCapabilities.pb")
                .DeviceCapabilities$MemberNameTagPrimarySupport.DISABLED
            : (e =
                  (t = o("decodeProtobuf").decodeProtobuf(
                    o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                    r.binarySyncData,
                  ).value) == null || (t = t.deviceCapabilities) == null
                    ? void 0
                    : t.memberNameTagPrimarySupport) != null
              ? e
              : o("WAWebProtobufsDeviceCapabilities.pb")
                  .DeviceCapabilities$MemberNameTagPrimarySupport.DISABLED;
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
          var t = yield e();
          o(
            "WAWebMemberLabelDeviceCapabilityCommon",
          ).saveMemberLabelCapabilityToStorage({
            memberNameTagPrimarySupport: t,
          });
        })),
        c.apply(this, arguments)
      );
    }
    l.bootstrapMemberLabelPrimaryCapability = u;
  },
  98,
);
