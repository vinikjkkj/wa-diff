__d(
  "WAWebLogNewsletterMessageForward",
  [
    "WAWebGetMessageChatTypeFromWid",
    "WAWebMsgGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebPsChannelPostForwardWamEvent",
    "WAWebWamEnumMessageChatType",
    "WAWebWamMsgUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        r,
        a = o("WAWebMsgGetters").getIsNewsletterMsg(e)
          ? e.id.remote
          : (n = e.forwardedNewsletterMessageInfo) == null
            ? void 0
            : n.newsletterId,
        i = o("WAWebWamMsgUtils").getWamMediaType(e),
        l = o("WAWebMsgGetters").getIsNewsletterMsg(e)
          ? e.serverId
          : (r = e.forwardedNewsletterMessageInfo) == null
            ? void 0
            : r.serverMessageId;
      for (var c of t) {
        var d = babelHelpers.extends(
          { channelForwardGroupType: s(c.id), mediaType: i },
          u({ origin: e.id.remote, destination: c })
            ? {
                cid: a == null ? void 0 : a.user,
                postId: l == null ? void 0 : l.toString(),
                destinationChannelId: c.id.user,
                isSecondOrder: e.forwardedNewsletterMessageInfo != null,
              }
            : null,
        );
        new (o(
          "WAWebPsChannelPostForwardWamEvent",
        ).PsChannelPostForwardWamEvent)(d).commit();
      }
    }
    function s(e) {
      return e.isStatus()
        ? o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.STATUS
        : o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(e);
    }
    function u(e) {
      var t = e.destination,
        n = e.origin;
      return (
        n.isNewsletter() &&
        t.id.isNewsletter() &&
        o(
          "WAWebNewsletterGatingUtils",
        ).isNewsletterForwardToChannelLoggingEnabled()
      );
    }
    l.logNewsletterMessageForward = e;
  },
  98,
);
