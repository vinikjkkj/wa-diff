__d(
  "WAWebDeviceCapabilitiesBootstrap",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebBizBroadcastsDeviceCapability",
    "WAWebBotGating",
    "WAWebDeviceCapabilitiesSync",
    "WAWebDeviceCapabilitiesV2Sync",
    "WAWebPrimaryDeviceCapabilities",
    "WAWebProtobufsDeviceCapabilities.pb",
    "WAWebUserPrefsDeviceCapabilities",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = !1;
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!u) {
            u = !0;
            var t = {
                chatLockSupportLevel: o("WAWebProtobufsDeviceCapabilities.pb")
                  .DeviceCapabilities$ChatLockSupportLevel.FULL,
                aiThread: {
                  supportLevel: o(
                    "WAWebBotGating",
                  ).isAiThreadCapabilityEnabled()
                    ? o("WAWebProtobufsDeviceCapabilities.pb")
                        .DeviceCapabilities$AiThread$SupportLevel.INFRA
                    : o("WAWebProtobufsDeviceCapabilities.pb")
                        .DeviceCapabilities$AiThread$SupportLevel.NONE,
                },
              },
              n = o(
                "WAWebUserPrefsDeviceCapabilities",
              ).mergeDeviceCapabilitiesToStorage(t, "self");
            if (
              (yield o(
                "WAWebBizBroadcastsDeviceCapability",
              ).bootstrapBizBroadcastPrimaryCapability(),
              yield m(),
              yield r("WAWebDeviceCapabilitiesSync").sendMutation(n),
              o("WAWebABProps").getABPropConfigValue(
                "device_capabilities_v2_sync_enabled",
              ))
            )
              try {
                yield r("WAWebDeviceCapabilitiesV2Sync").sendMutation(n);
              } catch (t) {
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[bootstrapDeviceCapabilities] v2 dual-write failed; v1 record is unaffected",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t));
              }
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
            "WAWebPrimaryDeviceCapabilities",
          ).getPrimaryDeviceCapabilities();
          if (e == null) {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[bootstrapPrimaryDeviceCapabilities] primary caps null",
                ])),
            );
            return;
          }
          var t = o(
            "WAWebUserPrefsDeviceCapabilities",
          ).mapProtobufToAllDeviceCapabilities(e);
          o(
            "WAWebUserPrefsDeviceCapabilities",
          ).mergeDeviceCapabilitiesToStorage(t, "primary");
        })),
        p.apply(this, arguments)
      );
    }
    l.bootstrapDeviceCapabilities = c;
  },
  98,
);
