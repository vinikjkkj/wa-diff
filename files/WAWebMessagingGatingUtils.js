__d(
  "WAWebMessagingGatingUtils",
  ["WAWebABProps", "WAWebReportingTokenConstants"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return !1;
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_send_invisible_msg_min_group_size",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_send_invisible_msg_max_group_size",
      );
    }
    function c() {
      var e;
      return (e = o("WAWebABProps").getABPropConfigValue(
        "group_size_bypassing_sampling",
      )) != null
        ? e
        : 1e5;
    }
    function d() {
      return g() > 0;
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue("rt_receive_reporting_tag");
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
      return o("WAWebABProps").getABPropConfigValue(
        "rt_sender_dual_encrypted_msg_enabled",
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "rt_receiver_dual_encrypted_msg_enabled",
      );
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue("rt_edit_receive");
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue("rt_web_delay_processing");
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "rt_report_token_from_inclusion_list",
      );
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "ft_validation_failure_drop_placeholder",
      );
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "visible_message_drop_placeholder_enabled_internal_only",
      );
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue(
        "rt_swapped_fallback_validation",
      );
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "top_level_message_secret_check",
      );
    }
    function k() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_biz_simple_signal_enabled",
        ) === 1
      );
    }
    function I() {
      return !1;
    }
    function T() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_biz_simple_signal_group_enabled",
        ) === !0
      );
    }
    ((l.sendKeyDistributionMsgToNewGroups = e),
      (l.sendKeyDistributionMsgMinGroupSize = s),
      (l.sendKeyDistributionMsgMaxGroupSize = u),
      (l.getGroupSizeBypassingSampling = c),
      (l.isReportingTokenSendingEnabled = d),
      (l.isReportingTokenReceivingEnabled = m),
      (l.isReportingTagSyncingEnabled = p),
      (l.getReportingTagCleanupDays = _),
      (l.getReportingTokenCleanupDays = f),
      (l.getSenderReportingTokenVersion = g),
      (l.isDualEncryptedReportingTokenSendingEnabled = h),
      (l.isDualEncryptedReportingTokenReceiveEnabled = y),
      (l.isReportingTokenEditReceiveEnabled = C),
      (l.isWebReportingTokenDelayProcessingEnabled = b),
      (l.isReportingTokenFromInclusionListEnabled = v),
      (l.isReportingTokenValidationFailureDebugPlaceholderEnabled = S),
      (l.isMessageDropPlaceholderEnabled = R),
      (l.isReportingTokenSwappedFallbackValidationEnabled = L),
      (l.isTopLevelMessageSecretCheckEnabled = E),
      (l.isSimpleSignalEnabled = k),
      (l.isCoexSimpleSignalEnabled = I),
      (l.isGroupSimpleSignalEnabled = T));
  },
  98,
);
