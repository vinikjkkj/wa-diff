__d(
  "WAWebPrivacyModeUtils",
  ["fbt", "WAWebPrivacyModeBlurConfig", "WAWebPrivacyModeSettingsFBT"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e === o("WAWebPrivacyModeBlurConfig").BlurPreset.Off
        ? o("WAWebPrivacyModeSettingsFBT").privacyModePresetOff()
        : e === o("WAWebPrivacyModeBlurConfig").BlurPreset.Light
          ? o("WAWebPrivacyModeSettingsFBT").privacyModePresetLight()
          : e === o("WAWebPrivacyModeBlurConfig").BlurPreset.Medium
            ? s._(/*BTDS*/ "Medium")
            : o("WAWebPrivacyModeSettingsFBT").privacyModePresetStrong();
    }
    l.getPresetLabel = e;
  },
  226,
);
