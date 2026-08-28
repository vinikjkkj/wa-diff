__d(
  "WAWebBizAiSettingsSyncDeviceCapabilityCommon",
  ["WAWebUserPrefsDeviceCapabilities"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e;
      return (
        ((e = o(
          "WAWebUserPrefsDeviceCapabilities",
        ).getPrimaryDeviceCapabilitiesFromLocalStorage().bizAiSettingsSync) ==
        null
          ? void 0
          : e.handoffRemovalTimingEnabled) === !0
      );
    }
    l.getPrimarySupportsBizAiSettingsSync = e;
  },
  98,
);
