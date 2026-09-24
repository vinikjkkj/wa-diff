__d(
  "WAWebMessagingGatingUtils",
  ["WAWebABProps"],
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
      return _() > 0;
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
      return o("WAWebABProps").getABPropConfigValue("rt_clean_reporting_token");
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "rt_sender_reporting_token_version",
      );
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue("rt_web_delay_processing");
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "ft_validation_failure_drop_placeholder",
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "visible_message_drop_placeholder_enabled_internal_only",
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "rt_swapped_fallback_validation",
      );
    }
    function C() {
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
      (l.getReportingTokenCleanupDays = p),
      (l.getSenderReportingTokenVersion = _),
      (l.isWebReportingTokenDelayProcessingEnabled = f),
      (l.isReportingTokenValidationFailureDebugPlaceholderEnabled = g),
      (l.isMessageDropPlaceholderEnabled = h),
      (l.isReportingTokenSwappedFallbackValidationEnabled = y),
      (l.isSimpleSignalEnabled = C));
  },
  98,
);
