__d(
  "WAWebQuickReplyGatingUtils",
  [
    "WAWebBizBotProfileUtils",
    "WAWebChatGetters",
    "WAWebMobilePlatforms",
    "WAWebPrimaryFeatures",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function s(e) {
      return u({
        chatId: e.id,
        contact: e.contact,
        isBroadcast: o("WAWebChatGetters").getIsBroadcast(e),
        isNewsletter: o("WAWebChatGetters").getIsNewsletter(e),
      });
    }
    function u(t) {
      var n = t.chatId,
        r = t.contact,
        a = t.isBroadcast,
        i = t.isNewsletter;
      return (
        !i &&
        !a &&
        e() &&
        !o("WAWebBizBotProfileUtils").isBizBot3pBusinessProfile(
          r == null ? void 0 : r.businessProfile,
        ) &&
        !n.isAiHub()
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
      (l.canSendQuickReplyInChatFor = u),
      (l.quickRepliesManagementEnabled = c));
  },
  98,
);
