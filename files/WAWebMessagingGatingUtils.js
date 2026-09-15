__d(
  "WAWebMessagingGatingUtils",
  ["WAWebABProps", "WAWebReportingTokenConstants"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e;
      return (e = o("WAWebABProps").getABPropConfigValue(
        "group_size_bypassing_sampling",
      )) != null
        ? e
        : 1e5;
    }
    function s() {
      return g() > 0;
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue("rt_sender_v3_hybrid_mode");
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue("rt_receive_reporting_tag");
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "rt_receiver_v3_validation_enabled",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "rt_receiver_missing_reporting_token_detection",
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue("rt_sync_reporting_tag");
    }
    function _() {
      var e;
      return (e = o("WAWebABProps").getABPropConfigValue(
        "rt_clean_reporting_tag",
      )) != null
        ? e
        : o("WAWebReportingTokenConstants").DEFAULT_RT_CLEANUP_OLDER_THAN_DAYS;
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue("rt_clean_reporting_token");
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "rt_sender_reporting_token_version",
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue("rt_web_delay_processing");
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "ft_validation_failure_drop_placeholder",
      );
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "visible_message_drop_placeholder_enabled_internal_only",
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "rt_swapped_fallback_validation",
      );
    }
    function v() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_biz_simple_signal_enabled",
        ) === 1
      );
    }
    ((l.getGroupSizeBypassingSampling = e),
      (l.isReportingTokenSendingEnabled = s),
      (l.isReportingTokenV3HybridSendingEnabled = u),
      (l.isReportingTokenReceivingEnabled = c),
      (l.isReportingTokenV3ValidationEnabled = d),
      (l.isMissingReportingTokenDetectionEnabled = m),
      (l.isReportingTagSyncingEnabled = p),
      (l.getReportingTagCleanupDays = _),
      (l.getReportingTokenCleanupDays = f),
      (l.getSenderReportingTokenVersion = g),
      (l.isWebReportingTokenDelayProcessingEnabled = h),
      (l.isReportingTokenValidationFailureDebugPlaceholderEnabled = y),
      (l.isMessageDropPlaceholderEnabled = C),
      (l.isReportingTokenSwappedFallbackValidationEnabled = b),
      (l.isSimpleSignalEnabled = v));
  },
  98,
);
