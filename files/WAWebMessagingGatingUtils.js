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
        "rt_receiver_dual_encrypted_msg_enabled",
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue("rt_edit_receive");
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue("rt_web_delay_processing");
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "rt_report_token_from_inclusion_list",
      );
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "ft_validation_failure_drop_placeholder",
      );
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "visible_message_drop_placeholder_enabled_internal_only",
      );
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "rt_swapped_fallback_validation",
      );
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue(
        "top_level_message_secret_check",
      );
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_remove_message_secret_from_quoted_enabled",
      );
    }
    function k() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_move_message_secret_top_level_enabled",
      );
    }
    function I() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_biz_simple_signal_enabled",
        ) === 1
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
      (l.isDualEncryptedReportingTokenReceiveEnabled = h),
      (l.isReportingTokenEditReceiveEnabled = y),
      (l.isWebReportingTokenDelayProcessingEnabled = C),
      (l.isReportingTokenFromInclusionListEnabled = b),
      (l.isReportingTokenValidationFailureDebugPlaceholderEnabled = v),
      (l.isMessageDropPlaceholderEnabled = S),
      (l.isReportingTokenSwappedFallbackValidationEnabled = R),
      (l.isTopLevelMessageSecretCheckEnabled = L),
      (l.isRemoveMessageSecretFromQuotedEnabled = E),
      (l.isMoveMessageSecretTopLevelEnabled = k),
      (l.isSimpleSignalEnabled = I));
  },
  98,
);
