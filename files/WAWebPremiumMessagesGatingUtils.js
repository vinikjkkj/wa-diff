__d(
  "WAWebPremiumMessagesGatingUtils",
  ["WAWebABProps", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_premium_messages_click_logging_enabled",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_premium_messages_url_cta_alert_dialog_enabled",
      );
    }
    function u() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smba_premium_messages_leaving_wa_content",
        )
      );
    }
    ((l.isPremiumMessagesClickLoggingEnabled = e),
      (l.isPremiumMessagesUrlCtaDialogEnabled = s),
      (l.isPremiumMessagesNewLeavingWAContentEnabled = u));
  },
  98,
);
