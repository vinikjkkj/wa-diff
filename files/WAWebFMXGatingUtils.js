__d(
  "WAWebFMXGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebABProps").getABPropConfigValue("is_expand_fmx_mex_enabled") ||
        o("WAWebABProps").getABPropConfigValue(
          "is_expand_fmx_enabled_non_auto_expose",
        )
      );
    }
    function s() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "is_expand_fmx_enabled_non_auto_expose",
        ) &&
        o("WAWebABProps").getABPropConfigValue(
          "is_expand_fmx_account_age_ui_enabled",
        )
      );
    }
    function u() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "is_expand_fmx_enabled_non_auto_expose",
        ) &&
        o("WAWebABProps").getABPropConfigValue(
          "is_individual_suspicious_fmx_enabled",
        )
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "fmx_persistent_country_trust_signal_enabled",
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
    ((l.isExpandFmxMexEnabled = e),
      (l.isExpandFmxAccountAgeUiEnabled = s),
      (l.isSuspiciousFmxEnabled = u),
      (l.isFmxPersistentCountryTrustSignalEnabled = c),
      (l.isExpandFmxAccountAgeBoldedEnabled = d));
  },
  98,
);
