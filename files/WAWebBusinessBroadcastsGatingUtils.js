__d(
  "WAWebBusinessBroadcastsGatingUtils",
  ["WAWebABProps", "WAWebMobilePlatforms", "WAWebUserPrefsMultiDevice"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "premium_broadcast_smb_capping_enabled",
        ) &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_business_broadcast_import_contact",
        )
      );
    }
    function s() {
      return !o("WAWebMobilePlatforms").isSMB() ||
        o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage()
        ? !1
        : o("WAWebMobilePlatforms").getMobilePlatform() ===
            o("WAWebMobilePlatforms").PLATFORMS.SMBI
          ? o("WAWebABProps").getABPropConfigValue(
              "smb_business_broadcast_send_web",
            )
          : o("WAWebABProps").getABPropConfigValue(
              "smb_business_broadcast_send_web_smba",
            );
    }
    function u() {
      return !o("WAWebMobilePlatforms").isSMB() ||
        o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage()
        ? !1
        : o("WAWebMobilePlatforms").getMobilePlatform() ===
            o("WAWebMobilePlatforms").PLATFORMS.SMBI
          ? o("WAWebABProps").getABPropConfigValue(
              "smb_business_broadcast_send_web_no_exp",
            )
          : o("WAWebABProps").getABPropConfigValue(
              "smb_business_broadcast_send_web_smba_no_exp",
            );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_bb_in_thread_insight_metrics_enabled",
      );
    }
    function d() {
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue(
          "smbw_business_broadcast_duplicate_enabled",
        )
      );
    }
    function m() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_business_broadcast_pro_enabled",
        )
      );
    }
    function p() {
      return (
        m() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_business_broadcast_pro_web_scheduled_sends_enabled",
        )
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_biz_broadcasts_catalog_attachment",
      );
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_biz_broadcasts_contextual_entrypoints",
      );
    }
    ((l.isBizBroadcastContactImportEnabled = e),
      (l.isBizBroadcastSendWebEnabled = s),
      (l.isBizBroadcastSendWebEnabledNoExposure = u),
      (l.isBizBroadcastInThreadInsightMetricsEnabled = c),
      (l.isBizBroadcastDuplicateEnabled = d),
      (l.isBizBroadcastProEnabled = m),
      (l.isBizBroadcastProScheduledSendsEnabled = p),
      (l.isBizBroadcastCatalogAttachmentEnabled = _),
      (l.isBizBroadcastContextualEntrypointsEnabled = f));
  },
  98,
);
