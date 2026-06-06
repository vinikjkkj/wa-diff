__d(
  "WAWebDeviceCapabilitiesBootstrap",
  [
    "WALogger",
    "WAWebBizBroadcastsDeviceCapability",
    "WAWebBotGating",
    "WAWebDeviceCapabilitiesSync",
    "WAWebPrimaryDeviceCapabilities",
    "WAWebProtobufsDeviceCapabilities.pb",
    "WAWebUserPrefsDeviceCapabilities",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = !1;
    async function u() {
      if (!s) {
        s = !0;
        var e = {
            chatLockSupportLevel: o("WAWebProtobufsDeviceCapabilities.pb")
              .DeviceCapabilities$ChatLockSupportLevel.FULL,
            aiThread: {
              supportLevel: o("WAWebBotGating").isAiThreadCapabilityEnabled()
                ? o("WAWebProtobufsDeviceCapabilities.pb")
                    .DeviceCapabilities$AiThread$SupportLevel.INFRA
                : o("WAWebProtobufsDeviceCapabilities.pb")
                    .DeviceCapabilities$AiThread$SupportLevel.NONE,
            },
          },
          t = o(
            "WAWebUserPrefsDeviceCapabilities",
          ).mergeDeviceCapabilitiesToStorage(e, "self");
        return (
          await o(
            "WAWebBizBroadcastsDeviceCapability",
          ).bootstrapBizBroadcastPrimaryCapability(),
          await c(),
          r("WAWebDeviceCapabilitiesSync").sendMutation(t)
        );
      }
    }
    async function c() {
      var t = await o(
        "WAWebPrimaryDeviceCapabilities",
      ).getPrimaryDeviceCapabilities();
      if (t == null) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[bootstrapPrimaryDeviceCapabilities] primary caps null",
            ])),
        );
        return;
      }
      var n = o(
        "WAWebUserPrefsDeviceCapabilities",
      ).mapProtobufToAllDeviceCapabilities(t);
      o("WAWebUserPrefsDeviceCapabilities").mergeDeviceCapabilitiesToStorage(
        n,
        "primary",
      );
    }
    l.bootstrapDeviceCapabilities = u;
  },
  98,
);
