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
      return p() > 0;
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue("rt_receive_reporting_tag");
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue("rt_sync_reporting_tag");
    }
    function d() {
      var e;
      return (e = o("WAWebABProps").getABPropConfigValue(
        "rt_clean_reporting_tag",
      )) != null
        ? e
        : o("WAWebReportingTokenConstants").DEFAULT_RT_CLEANUP_OLDER_THAN_DAYS;
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue("rt_clean_reporting_token");
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "rt_sender_reporting_token_version",
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue("rt_web_delay_processing");
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "ft_validation_failure_drop_placeholder",
      );
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "visible_message_drop_placeholder_enabled_internal_only",
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "rt_swapped_fallback_validation",
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_remove_message_secret_from_quoted_enabled",
      );
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_move_message_secret_top_level_enabled",
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
      (l.isReportingTokenReceivingEnabled = u),
      (l.isReportingTagSyncingEnabled = c),
      (l.getReportingTagCleanupDays = d),
      (l.getReportingTokenCleanupDays = m),
      (l.getSenderReportingTokenVersion = p),
      (l.isWebReportingTokenDelayProcessingEnabled = _),
      (l.isReportingTokenValidationFailureDebugPlaceholderEnabled = f),
      (l.isMessageDropPlaceholderEnabled = g),
      (l.isReportingTokenSwappedFallbackValidationEnabled = h),
      (l.isRemoveMessageSecretFromQuotedEnabled = y),
      (l.isMoveMessageSecretTopLevelEnabled = C),
      (l.isSimpleSignalEnabled = b));
  },
  98,
);
