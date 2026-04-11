__d(
  "WAWebDisplayType",
  [],
  function (t, n, r, o, a, i) {
    var e = {
      CONVERSATION: "CONVERSATION",
      MSG_INFO: "MSG_INFO",
      STARRED_MSGS: "STARRED_MSGS",
      KEPT_MSGS: "KEPT_MSGS",
      GALLERY: "GALLERY",
      GALLERY_LINKS: "GALLERY_LINKS",
      REPLY_STAGE: "REPLY_STAGE",
      QUOTED_MSG: "QUOTED_MSG",
      CONTACT_CARD: "CONTACT_CARD",
      ORDER: "ORDER",
      STATUS: "STATUS",
      EDITING: "EDITING",
      ANNOUNCEMENT: "ANNOUNCEMENT",
      NEWSLETTER: "NEWSLETTER",
      NEWSLETTER_PREVIEW: "NEWSLETTER_PREVIEW",
      CHANNEL_ALERTS_MSGS: "CHANNEL_ALERTS_MSGS",
      REPORTED_MSG: "REPORTED_MSG",
      BOT_INVOKE_RESPONSE: "BOT_INVOKE_RESPONSE",
      ALL_REPLIES: "ALL_REPLIES",
      BOT_REELS_PLUGIN: "BOT_REELS_PLUGIN",
      COMMENT: "COMMENT",
      MESSAGE_HISTORY_BUNDLE: "MESSAGE_HISTORY_BUNDLE",
    };
    function l(t) {
      return t === e.ANNOUNCEMENT || t === e.NEWSLETTER;
    }
    var s = [
      e.CONVERSATION,
      e.ANNOUNCEMENT,
      e.NEWSLETTER,
      e.BOT_INVOKE_RESPONSE,
      e.ALL_REPLIES,
    ];
    function u(e) {
      return c.includes(e);
    }
    var c = [
      e.STARRED_MSGS,
      e.REPORTED_MSG,
      e.CONTACT_CARD,
      e.GALLERY,
      e.GALLERY_LINKS,
    ];
    function d(e) {
      return s.includes(e);
    }
    ((i.DISPLAY_TYPE = e),
      (i.isWideDisplay = l),
      (i.isMsgGalleryDisplay = u),
      (i.isConversationDisplay = d));
  },
  66,
);
