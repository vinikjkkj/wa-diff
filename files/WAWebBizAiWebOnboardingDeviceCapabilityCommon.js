__d(
  "WAWebBizAiWebOnboardingDeviceCapabilityCommon",
  ["WAWebUserPrefsDeviceCapabilities"],
  function (t, n, r, o, a, i, l) {
    var e = 1;
    function s() {
      var t, n;
      return (
        ((t =
          (n = o(
            "WAWebUserPrefsDeviceCapabilities",
          ).getPrimaryDeviceCapabilitiesFromLocalStorage()
            .bizAiWebOnboarding) == null
            ? void 0
            : n.version) != null
          ? t
          : 0) >= e
      );
    }
    l.getPrimarySupportsBizAiWebOnboarding = s;
  },
  98,
);
