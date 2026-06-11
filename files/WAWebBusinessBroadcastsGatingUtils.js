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
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue(
          "smbw_business_broadcast_duplicate_enabled",
        )
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_business_broadcast_multi_audience_send_web",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_biz_broadcasts_catalog_attachment",
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_broadcast_disappearing_messages_fix",
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_biz_broadcasts_contextual_entrypoints",
      );
    }
    ((l.isBizBroadcastContactImportEnabled = e),
      (l.isBizBroadcastSendWebEnabled = s),
      (l.isBizBroadcastSendWebEnabledNoExposure = u),
      (l.isBizBroadcastDuplicateEnabled = c),
      (l.isBizBroadcastMultiAudienceSendEnabled = d),
      (l.isBizBroadcastCatalogAttachmentEnabled = m),
      (l.isBizBroadcastDisappearingMessagesFixEnabled = p),
      (l.isBizBroadcastContextualEntrypointsEnabled = _));
  },
  98,
);
