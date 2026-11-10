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
      return o("WAWebPrimaryFeaturesModel").PrimaryFeatures.historySyncOnDemand;
    }
    function u() {
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
              .extendedHistorySyncOnDemand && _()
          : !0;
    }
    function c() {
      return o("WAWebPrimaryFeaturesModel").PrimaryFeatures.historySyncOnDemand;
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
        "history_sync_on_demand_companion",
      );
    }
    function f() {
      return o("WAWebPrimaryFeaturesModel").PrimaryFeatures
        .completeHistorySyncOnDemand;
    }
    ((l.isHistorySyncOnDemandSupportedByPrimary = s),
      (l.isHistorySyncOnDemandEnabled = u),
      (l.shouldPopulateStarMessageWithTimestamp = c),
      (l.isWebLinkPreviewNseSupportEnabled = d),
      (l.isMessagePlaceholderResendNseSupportEnabled = m),
      (l.getRecentSyncMessageProcessingBreakIteration = p),
      (l.isOnDemandExtendedHistorySyncForHybridEnabled = _),
      (l.isHistorySyncOnDemandCompleteCompanionEnabled = f));
  },
  98,
);
