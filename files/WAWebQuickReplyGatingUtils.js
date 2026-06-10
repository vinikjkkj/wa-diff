__d(
  "WAWebQuickReplyGatingUtils",
  [
    "WAWebABProps",
    "WAWebChatGetters",
    "WAWebMobilePlatforms",
    "WAWebPrimaryFeatures",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function s(t) {
      var n;
      return (
        !o("WAWebChatGetters").getIsNewsletter(t) &&
        !o("WAWebChatGetters").getIsBroadcast(t) &&
        e() &&
        !((n = t.contact.businessProfile) != null && n.isBizBot3p)
      );
    }
    function u(e) {
      return (
        s(e) &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_show_quick_reply_option_in_composer",
        )
      );
    }
    function c() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebPrimaryFeatures").primaryFeatureEnabled(
          "companion_biz_quick_reply_sync_support",
        )
      );
    }
    ((l.canSendQuickReply = e),
      (l.canSendQuickReplyInChat = s),
      (l.isQuickReplyComposerEntryPointEnabled = u),
      (l.quickRepliesManagementEnabled = c));
  },
  98,
);
