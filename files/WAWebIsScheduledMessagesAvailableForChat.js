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
        !o("WAWebFrontendChatGetters").getIsCapiHostedGroup(e) &&
        !o("WAWebBizCoexUtils").isMeOrCurrentContactHosted(e.contact) &&
        o(
          "WAWebScheduledMessagesGatingUtils",
        ).isScheduledMessagesSenderEnabled()
      );
    }
    l.isScheduledMessagesAvailableForChat = e;
  },
  98,
);
