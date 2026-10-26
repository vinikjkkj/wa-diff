__d(
  "WAWebLogChannelPostInteraction",
  [
    "WAWebABProps",
    "WAWebApiParse",
    "WAWebChannelPostInteractionWamEvent",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebNewsletterLoggingUtils",
    "WAWebWamEnumChannelPostInteractionType",
    "WAWebWamEnumChannelUserType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set([
        "INVALID",
        "ADVERTISE",
        "MANAGE_ADS",
        "PAYMENT_LINK",
        "OPEN_CATALOG",
        "CALL_ACTIVE",
      ]),
      u = {
        external: {
          copy: (e = o("WAWebWamEnumChannelPostInteractionType"))
            .CHANNEL_POST_INTERACTION_TYPE.EXTERNAL_LINK_COPY_TAP,
          open: e.CHANNEL_POST_INTERACTION_TYPE.EXTERNAL_LINK_OPEN_TAP,
        },
        internal: {
          copy: e.CHANNEL_POST_INTERACTION_TYPE.INTERNAL_LINK_COPY_TAP,
          open: e.CHANNEL_POST_INTERACTION_TYPE.INTERNAL_LINK_OPEN_TAP,
        },
      };
    function c(e) {
      var t,
        n,
        r = e.action,
        a = e.msg,
        i = e.placement,
        l = e.rawUrl,
        s = d(l);
      if (s != null && o("WAWebMsgGetters").getIsNewsletterMsg(a)) {
        var c = a.serverId;
        if (
          c != null &&
          o("WAWebABProps").getABPropConfigValue(
            "channel_post_interaction_logging_enabled",
          )
        ) {
          var m = o("WAWebFrontendMsgGetters").getChat(a).id;
          new (o(
            "WAWebChannelPostInteractionWamEvent",
          ).ChannelPostInteractionWamEvent)({
            channelPostInteractionType: u[s][r],
            channelPostLinkPlacement: i,
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
            cid: m.user,
            postId: c.toString(),
          }).commit();
        }
      }
    }
    function d(e) {
      if (e == null) return null;
      var t;
      try {
        t = new URL(e);
      } catch (e) {
        return null;
      }
      return t.protocol !== "http:" && t.protocol !== "https:"
        ? null
        : s.has(o("WAWebApiParse").parseAPICmd(e).resultType)
          ? "external"
          : "internal";
    }
    ((l.logChannelPostInteraction = c), (l.getWebLinkKind = d));
  },
  98,
);
