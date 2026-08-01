__d(
  "WAWebWindowsGeneralSettingsHelpers",
  ["fbt", "WAWebSettingsConst"],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return s._(/*BTDS*/ "General");
    }
    function u() {
      return s._(/*BTDS*/ "Startup and close");
    }
    function c() {
      return s._(/*BTDS*/ "Minimize to system tray");
    }
    function d() {
      return s._(/*BTDS*/ "Start WhatsApp at login");
    }
    function m() {
      return s._(/*BTDS*/ "Language");
    }
    function p() {
      return s._(/*BTDS*/ "Font size");
    }
    function _() {
      return s._(
        /*BTDS*/ "Keep WhatsApp running after closing the application window",
      );
    }
    var f = {
        step: o("WAWebSettingsConst").SettingsSteps.WinGeneralSettings,
        id: "win_general_settings",
        isAvailable: !0,
        searchCriteria: String(e()).toLowerCase(),
        title: e,
        secondaryTitle: u,
        testid: "li-general-settings",
      },
      g = {
        step: o("WAWebSettingsConst").SettingsSteps.WinGeneralSettings,
        id: "system_tray_setting",
        isAvailable: !0,
        searchCriteria: [String(c()), String(_())].join(" ").toLowerCase(),
        title: c,
        testid: "li-system-tray-setting",
      };
    ((l.getGeneralSettingsTitle = e),
      (l.getStartupAndCloseSectionTitle = u),
      (l.getSystemTraySettingsTitle = c),
      (l.getStartAtSettingsTitle = d),
      (l.getLanguageSectionSettingsTitle = m),
      (l.getFontSizeSectionSettingsTitle = p),
      (l.getSystemTraySettingsHintText = _),
      (l.GeneralSettingsItem = f),
      (l.SystemTraySettingsItem = g));
  },
  226,
);
