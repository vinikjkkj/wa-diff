__d(
  "WAWebBizGatingUtils",
  ["WAWebABProps", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "utm_tracking_expiration_hours",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue("utm_tracking_enabled");
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 0;
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 1;
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 2;
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 3;
    }
    function p() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_account_token_storage_kill_switch_web",
        ) === !1
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_push_wait_timeout_web",
      );
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_retries_max_web",
      );
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_download_3pd_signals",
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_opt_out_counter_optimization_enabled",
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_title_change",
      );
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_additional_logging",
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_cooldown_max_times_shown_for_opted_out",
      );
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue("cci_compliance_ctwa");
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_tos_filtering_enabled",
      );
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "cci_compliance_ctwa_learn_more_hyperlink",
      );
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_on_thread_entry",
      );
    }
    ((l.utmTrackingExpirationInHours = e),
      (l.isUtmTrackingEnabled = s),
      (l.isUpdatedConsumerDisclosureUiRowEnabled = u),
      (l.isUpdatedConsumerDisclosureUiIndiaEnabled = c),
      (l.isUpdatedConsumerDisclosureUiBrazilEnabled = d),
      (l.isUpdatedConsumerDisclosureUiEuUkEnabled = m),
      (l.adAccountTokenStoringEnabled = p),
      (l.adAccountTokenNoncePushWaitTimeoutSeconds = _),
      (l.adAccountTokenNonceMaxRetries = f),
      (l.isDownload3PDSignalsEnabled = g),
      (l.isCTWA3pdOptOutCounterOptimizationEnabled = h),
      (l.isCTWA3pdDataSharingTitleChangeEnabled = y),
      (l.isCTWA3pdDataSharingAdditionalLoggingEnabled = C),
      (l.getCTWA3pdDataSharingMaxTimesShownForOptedOut = b),
      (l.showCTWACCICompliantUI = v),
      (l.isCTWATosFilteringEnabled = S),
      (l.getCTWALearnMoreHyperLinkForCCICompliantUI = R),
      (l.showCTWA3pdDataSharingDisclosureOnThreadEntry = L));
  },
  98,
);
