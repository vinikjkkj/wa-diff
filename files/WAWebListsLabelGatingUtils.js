__d(
  "WAWebListsLabelGatingUtils",
  [
    "WAWebABProps",
    "WAWebListsGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebPrimaryFeatures",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function s() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function u() {
      return (
        (o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebPrimaryFeatures").primaryFeatureEnabled(
            "companion_biz_label_sync_support",
          )) ||
        o("WAWebListsGatingUtils").isListsEnabled()
      );
    }
    function c() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("business_tool_enhanced_logging")
      );
    }
    function d() {
      return (
        (o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebABProps").getABPropConfigValue("smart_filters_enabled")) ||
        (!o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebABProps").getABPropConfigValue(
            "smart_filters_enabled_consumer",
          ))
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_custom_label_signals_enabled",
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_custom_label_algorithm",
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_smb_label_chat_header_enabled_web",
      );
    }
    ((l.canDisplayLabel = e),
      (l.canEditLabelAssociation = s),
      (l.labelsEditingEnabled = u),
      (l.isSMBEnhancedLoggingEnabled = c),
      (l.smartFiltersEnabled = d),
      (l.isCTWACustomLabelsSignalsEnabled = m),
      (l.getCTWACustomLabelAlgorithmGroup = p),
      (l.isCTWASMBLabelChatHeaderEnabledWeb = _));
  },
  98,
);
