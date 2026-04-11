__d(
  "WAWebLogNewsletterMessageForward",
  [
    "WAWebGetMessageChatTypeFromWid",
    "WAWebMsgGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebPsChannelPostForwardWamEvent",
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
      for (var u of t) {
        var c = {
          channelForwardGroupType: o(
            "WAWebGetMessageChatTypeFromWid",
          ).getMessageChatTypeFromWid(u.id),
          mediaType: i,
        };
        (s({ origin: e.id.remote, destination: u }) &&
          Object.assign(c, {
            cid: a == null ? void 0 : a.user,
            postId: l == null ? void 0 : l.toString(),
            destinationChannelId: u.id.user,
            isSecondOrder: e.forwardedNewsletterMessageInfo != null,
          }),
          new (o(
            "WAWebPsChannelPostForwardWamEvent",
          ).PsChannelPostForwardWamEvent)(c).commit());
      }
    }
    function s(e) {
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
