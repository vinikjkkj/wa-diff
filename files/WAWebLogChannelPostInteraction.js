__d(
  "WAWebLogChannelPostInteraction",
  [
    "WAWebABProps",
    "WAWebApiParseUtils",
    "WAWebChannelPostInteractionWamEvent",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebNewsletterLoggingUtils",
    "WAWebWamEnumChannelUserType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Set([
        "api.whatsapp.com",
        "call.whatsapp.com",
        "chat.whatsapp.com",
      ]),
      s = /^\/call\/(?:video|voice)\/\w+/i;
    function u(e) {
      var t,
        n,
        r = e.interactionType,
        a = e.msg,
        i = e.rawUrl;
      if (c(i) && o("WAWebMsgGetters").getIsNewsletterMsg(a)) {
        var l = a.serverId;
        if (
          l != null &&
          o("WAWebABProps").getABPropConfigValue(
            "channel_post_interaction_logging_enabled",
          )
        ) {
          var s = o("WAWebFrontendMsgGetters").getChat(a).id;
          new (o(
            "WAWebChannelPostInteractionWamEvent",
          ).ChannelPostInteractionWamEvent)({
            channelPostInteractionType: r,
            channelUserType:
              (t = o(
                "WAWebNewsletterLoggingUtils",
              ).getChannelUserTypeFromMembershipType(
                (n = o("WAWebFrontendMsgGetters").getChat(a)) == null
                  ? void 0
                  : n.newsletterMetadata,
              )) != null
                ? t
                : o("WAWebWamEnumChannelUserType").CHANNEL_USER_TYPE.GUEST,
            cid: s.user,
            postId: l.toString(),
          }).commit();
        }
      }
    }
    function c(t) {
      if (t == null) return !1;
      var n;
      try {
        n = new URL(t);
      } catch (e) {
        return !1;
      }
      return n.protocol !== "http:" && n.protocol !== "https:"
        ? !1
        : !o("WAWebApiParseUtils").isWhatsappHost(n) &&
            !e.has(n.hostname.toLowerCase()) &&
            !d(n);
    }
    function d(e) {
      return (
        e.hostname.toLowerCase() === "web.whatsapp.com" && s.test(e.pathname)
      );
    }
    ((l.logChannelPostInteraction = u), (l.isExternalWebLink = c));
  },
  98,
);
