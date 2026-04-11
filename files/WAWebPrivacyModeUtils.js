__d(
  "WAWebPrivacyModeUtils",
  ["WAWebPrivacyModeBlurConfig", "WAWebPrivacyModeSettingsFBT"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === o("WAWebPrivacyModeBlurConfig").BlurPreset.Off
        ? o("WAWebPrivacyModeSettingsFBT").privacyModePresetOff()
        : e === o("WAWebPrivacyModeBlurConfig").BlurPreset.Light
          ? o("WAWebPrivacyModeSettingsFBT").privacyModePresetLight()
          : e === o("WAWebPrivacyModeBlurConfig").BlurPreset.Medium
            ? o("WAWebPrivacyModeSettingsFBT").privacyModePresetMedium()
            : o("WAWebPrivacyModeSettingsFBT").privacyModePresetStrong();
    }
    l.getPresetLabel = e;
  },
  98,
);
