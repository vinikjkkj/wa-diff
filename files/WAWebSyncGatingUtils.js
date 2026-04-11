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
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures.isPrimaryBetaBuild &&
        o("WAWebABProps").getABPropConfigValue(
          "history_sync_on_demand_with_android_beta",
        )
        ? !0
        : r("WAWebEnvironment").isWindows
          ? o("WAWebPrimaryFeaturesModel").PrimaryFeatures
              .extendedHistorySyncOnDemand && f()
          : o("WAWebABProps").getABPropConfigValue("history_sync_on_demand");
    }
    function u() {
      return o("WAWebPrimaryFeaturesModel").PrimaryFeatures.historySyncOnDemand;
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "placeholder_message_resend",
      );
    }
    function d() {
      return o("WAWebPrimaryFeaturesModel").PrimaryFeatures
        .webLinkPreviewNseSupport;
    }
    function m() {
      return o("WAWebPrimaryFeaturesModel").PrimaryFeatures
        .messagePlaceholderResendNseSupport;
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_noncritical_history_sync_message_processing_break_iteration",
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_recent_sync_chunk_download_optimization",
      );
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "history_sync_on_demand_companion",
      );
    }
    function g() {
      return (
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures
          .completeHistorySyncOnDemand &&
        o("WAWebABProps").getABPropConfigValue(
          "history_sync_on_demand_complete_companion",
        )
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "history_sync_on_demand_time_boundary_days_desktops",
      );
    }
    ((l.isHistorySyncOnDemandEnabled = s),
      (l.shouldPopulateStarMessageWithTimestamp = u),
      (l.isPlaceholderMessageResendEnabled = c),
      (l.isWebLinkPreviewNseSupportEnabled = d),
      (l.isMessagePlaceholderResendNseSupportEnabled = m),
      (l.getRecentSyncMessageProcessingBreakIteration = p),
      (l.isRecentSyncDownloadOptimizationEnabled = _),
      (l.isOnDemandExtendedHistorySyncForHybridEnabled = f),
      (l.isHistorySyncOnDemandCompleteCompanionEnabled = g),
      (l.getHistorySyncOnDemandTimeBoundaryDaysForDesktops = h));
  },
  98,
);
