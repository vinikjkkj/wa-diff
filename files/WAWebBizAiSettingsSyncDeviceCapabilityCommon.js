__d(
  "WAWebBizAiSettingsSyncDeviceCapabilityCommon",
  ["WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").UserPrefs.BizAiSettingsSyncPrimaryCapability,
        e,
        { shouldWriteToIdb: !0 },
      );
    }
    function s() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").UserPrefs.BizAiSettingsSyncPrimaryCapability,
      );
      return e === !0;
    }
    ((l.saveBizAiSettingsSyncCapabilityToStorage = e),
      (l.getPrimarySupportsBizAiSettingsSync = s));
  },
  98,
);
