__d(
  "WAWebIsScheduledMessagesAvailableForChat",
  [
    "WAWebABProps",
    "WAWebBizCoexUtils",
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebScheduledMessagesGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s({
        contact: e.contact,
        isBot: o("WAWebChatGetters").getIsBot(e),
        isCAG: o("WAWebFrontendChatGetters").getIsCAG(e),
        isCapiHostedGroup: o("WAWebFrontendChatGetters").getIsCapiHostedGroup(
          e,
        ),
        isNewsletter: o("WAWebChatGetters").getIsNewsletter(e),
      });
    }
    function s(e) {
      var t = e.contact,
        n = e.isBot,
        r = e.isCAG,
        a = e.isCapiHostedGroup,
        i = e.isNewsletter;
      return (
        !n &&
        !i &&
        !r &&
        !a &&
        !o("WAWebBizCoexUtils").isCloudApiContact(t) &&
        !o("WAWebBizCoexUtils").isMeOrCurrentContactHosted(t) &&
        o(
          "WAWebScheduledMessagesGatingUtils",
        ).isScheduledMessagesSenderEnabled()
      );
    }
    function u(t) {
      return (
        e(t) &&
        o("WAWebABProps").getABPropConfigValue(
          "scheduled_messages_photo_video_sender_enabled",
        )
      );
    }
    ((l.isScheduledMessagesAvailableForChat = e),
      (l.isScheduledMessagesAvailableFor = s),
      (l.isScheduledMediaAvailableForChat = u));
  },
  98,
);
