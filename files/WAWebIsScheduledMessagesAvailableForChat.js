__d(
  "WAWebIsScheduledMessagesAvailableForChat",
  [
    "WAWebBizCoexUtils",
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebScheduledMessagesGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        !o("WAWebChatGetters").getIsBot(e) &&
        !o("WAWebChatGetters").getIsNewsletter(e) &&
        !o("WAWebFrontendChatGetters").getIsCapiHostedGroup(e) &&
        !o("WAWebBizCoexUtils").isMeOrCurrentContactHosted(e.contact) &&
        o(
          "WAWebScheduledMessagesGatingUtils",
        ).isScheduledMessagesSenderEnabled()
      );
    }
    function s(t) {
      return (
        e(t) &&
        o(
          "WAWebScheduledMessagesGatingUtils",
        ).isScheduledMessagesPhotoVideoSenderEnabled()
      );
    }
    ((l.isScheduledMessagesAvailableForChat = e),
      (l.isScheduledMediaAvailableForChat = s));
  },
  98,
);
