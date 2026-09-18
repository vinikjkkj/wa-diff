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
      return f() > 0;
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue("rt_sender_v3_hybrid_mode");
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue("rt_receive_reporting_tag");
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "rt_receiver_missing_reporting_token_detection",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue("rt_sync_reporting_tag");
    }
    function p() {
      var e;
      return (e = o("WAWebABProps").getABPropConfigValue(
        "rt_clean_reporting_tag",
      )) != null
        ? e
        : o("WAWebReportingTokenConstants").DEFAULT_RT_CLEANUP_OLDER_THAN_DAYS;
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue("rt_clean_reporting_token");
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "rt_sender_reporting_token_version",
      );
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue("rt_web_delay_processing");
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "ft_validation_failure_drop_placeholder",
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "visible_message_drop_placeholder_enabled_internal_only",
      );
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "rt_swapped_fallback_validation",
      );
    }
    function b() {
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
      (l.isMissingReportingTokenDetectionEnabled = d),
      (l.isReportingTagSyncingEnabled = m),
      (l.getReportingTagCleanupDays = p),
      (l.getReportingTokenCleanupDays = _),
      (l.getSenderReportingTokenVersion = f),
      (l.isWebReportingTokenDelayProcessingEnabled = g),
      (l.isReportingTokenValidationFailureDebugPlaceholderEnabled = h),
      (l.isMessageDropPlaceholderEnabled = y),
      (l.isReportingTokenSwappedFallbackValidationEnabled = C),
      (l.isSimpleSignalEnabled = b));
  },
  98,
);
