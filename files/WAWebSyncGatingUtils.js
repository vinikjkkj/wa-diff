__d(
  "WAWebSyncGatingUtils",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebEnvironment",
    "WAWebMobilePlatforms",
    "WAWebPrimaryFeaturesModel",
    "WAWebUserPrefsHistorySync",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      if (!o("WAWebPrimaryFeaturesModel").PrimaryFeatures.historySyncOnDemand)
        return !1;
      var t = o("WAWebUserPrefsHistorySync").getInitialHistorySyncComplete(),
        n = o("WAWebUserPrefsHistorySync").getHistoryInitialSyncBoundary();
      if (t && (n == null || r("isEmptyObject")(n)))
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[rdu] hsod disabled: initSync incomplete/no boundary",
              ])),
          ),
          !1
        );
      var a =
        o("WAWebMobilePlatforms").getMobilePlatform() ===
          o("WAWebMobilePlatforms").PLATFORMS.ANDROID ||
        o("WAWebMobilePlatforms").getMobilePlatform() ===
          o("WAWebMobilePlatforms").PLATFORMS.SMBA;
      return a &&
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures.isPrimaryBetaBuild
        ? !0
        : r("WAWebEnvironment").isWindows
          ? o("WAWebPrimaryFeaturesModel").PrimaryFeatures
              .extendedHistorySyncOnDemand && p()
          : !0;
    }
    function u() {
      return o("WAWebPrimaryFeaturesModel").PrimaryFeatures.historySyncOnDemand;
    }
    function c() {
      return o("WAWebPrimaryFeaturesModel").PrimaryFeatures
        .webLinkPreviewNseSupport;
    }
    function d() {
      return o("WAWebPrimaryFeaturesModel").PrimaryFeatures
        .messagePlaceholderResendNseSupport;
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_noncritical_history_sync_message_processing_break_iteration",
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "history_sync_on_demand_companion",
      );
    }
    function _() {
      return o("WAWebPrimaryFeaturesModel").PrimaryFeatures
        .completeHistorySyncOnDemand;
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "history_sync_on_demand_time_boundary_days_desktops",
      );
    }
    ((l.isHistorySyncOnDemandEnabled = s),
      (l.shouldPopulateStarMessageWithTimestamp = u),
      (l.isWebLinkPreviewNseSupportEnabled = c),
      (l.isMessagePlaceholderResendNseSupportEnabled = d),
      (l.getRecentSyncMessageProcessingBreakIteration = m),
      (l.isOnDemandExtendedHistorySyncForHybridEnabled = p),
      (l.isHistorySyncOnDemandCompleteCompanionEnabled = _),
      (l.getHistorySyncOnDemandTimeBoundaryDaysForDesktops = f));
  },
  98,
);
