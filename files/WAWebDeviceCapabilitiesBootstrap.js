__d(
  "WAWebDeviceCapabilitiesBootstrap",
  [
    "WALogger",
    "WAWebBizBroadcastsDeviceCapability",
    "WAWebBotGating",
    "WAWebDeviceCapabilitiesSync",
    "WAWebMemberLabelDeviceCapabilityBackend",
    "WAWebPrimaryDeviceCapabilities",
    "WAWebProtobufsDeviceCapabilities.pb",
    "WAWebUserPrefsDeviceCapabilities",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = !1;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!s) {
            s = !0;
            var e = {
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
              t = o(
                "WAWebUserPrefsDeviceCapabilities",
              ).mergeDeviceCapabilitiesToStorage(e, "self");
            return (
              yield o(
                "WAWebMemberLabelDeviceCapabilityBackend",
              ).bootstrapMemberLabelPrimaryCapability(),
              yield o(
                "WAWebBizBroadcastsDeviceCapability",
              ).bootstrapBizBroadcastPrimaryCapability(),
              yield d(),
              r("WAWebDeviceCapabilitiesSync").sendMutation(t)
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o(
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
          o(
            "WAWebUserPrefsDeviceCapabilities",
          ).mergeDeviceCapabilitiesToStorage(n, "primary");
        })),
        m.apply(this, arguments)
      );
    }
    l.bootstrapDeviceCapabilities = u;
  },
  98,
);
