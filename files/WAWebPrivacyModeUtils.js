__d(
  "WAWebPrivacyModeUtils",
  ["fbt", "WAWebPrivacyModeBlurConfig", "WAWebPrivacyModeSettingsFBT"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e === o("WAWebPrivacyModeBlurConfig").BlurPreset.Off
        ? s._(/*BTDS*/ "")
        : e === o("WAWebPrivacyModeBlurConfig").BlurPreset.Light
          ? s._(/*BTDS*/ "")
          : e === o("WAWebPrivacyModeBlurConfig").BlurPreset.Medium
            ? s._(/*BTDS*/ "")
            : o("WAWebPrivacyModeSettingsFBT").privacyModePresetStrong();
    }
    l.getPresetLabel = e;
  },
  226,
);
