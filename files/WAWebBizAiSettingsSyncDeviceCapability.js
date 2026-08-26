__d(
  "WAWebBizAiSettingsSyncDeviceCapability",
  [
    "WAWebBizAiSettingsSyncDeviceCapabilityCommon",
    "WAWebMobilePlatforms",
    "WAWebPrimaryDeviceCapabilities",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          if (o("WAWebMobilePlatforms").isSMB()) {
            var t = yield o(
              "WAWebPrimaryDeviceCapabilities",
            ).getPrimaryDeviceCapabilities();
            o(
              "WAWebBizAiSettingsSyncDeviceCapabilityCommon",
            ).saveBizAiSettingsSyncCapabilityToStorage(
              !!(
                !(t == null || (e = t.bizAiSettingsSync) == null) &&
                e.handoffRemovalTimingEnabled
              ),
            );
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.bootstrapBizAiSettingsSyncPrimaryCapability = e;
  },
  98,
);
