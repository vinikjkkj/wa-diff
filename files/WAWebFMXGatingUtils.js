__d(
  "WAWebFMXGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue("fmx_ctwa_kill_switch");
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue("enable_fmx_logging");
    }
    function u() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "is_expand_fmx_enabled_non_auto_expose",
        ) || o("WAWebABProps").getABPropConfigValue("is_expand_fmx_mex_enabled")
      );
    }
    function c() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "is_expand_fmx_enabled_non_auto_expose",
        ) &&
        o("WAWebABProps").getABPropConfigValue(
          "is_expand_fmx_account_age_ui_enabled",
        )
      );
    }
    function d() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "is_expand_fmx_enabled_non_auto_expose",
        ) &&
        o("WAWebABProps").getABPropConfigValue(
          "is_expand_fmx_account_age_bolded_non_auto_expose",
        )
      );
    }
    ((l.fmxCTWAKillSwitchEnabled = e),
      (l.fmxLoggingEnabled = s),
      (l.isExpandFmxMexEnabled = u),
      (l.isExpandFmxAccountAgeUiEnabled = c),
      (l.isExpandFmxAccountAgeBoldedEnabled = d));
  },
  98,
);
