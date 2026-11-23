__d(
  "WAWebWindowsGeneralSettingsHelpers",
  ["fbt", "WAWebSettingsConst"],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return s._(/*BTDS*/ "");
    }
    function u() {
      return s._(/*BTDS*/ "");
    }
    function c() {
      return s._(/*BTDS*/ "");
    }
    function d() {
      return s._(/*BTDS*/ "");
    }
    var m = {
        step: o("WAWebSettingsConst").SettingsSteps.WinGeneralSettings,
        id: "win_general_settings",
        isAvailable: !0,
        searchCriteria: String(e()).toLowerCase(),
        title: e,
        secondaryTitle: u,
        testid: "li-general-settings",
      },
      p = {
        step: o("WAWebSettingsConst").SettingsSteps.WinGeneralSettings,
        id: "system_tray_setting",
        isAvailable: !0,
        searchCriteria: [String(c()), String(d())].join(" ").toLowerCase(),
        title: c,
        testid: "li-system-tray-setting",
      };
    ((l.getGeneralSettingsTitle = e),
      (l.getStartupAndCloseSectionTitle = u),
      (l.getSystemTraySettingsTitle = c),
      (l.getSystemTraySettingsHintText = d),
      (l.GeneralSettingsItem = m),
      (l.SystemTraySettingsItem = p));
  },
  226,
);
