__d(
  "WAWebContactsAndGroupsNewMediaRules",
  [
    "WAWebContactsAndGroupsMyGroups",
    "WAWebContactsAndGroupsThisWeek",
    "WAWebFrontendChatGetters",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebMuteGetters",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebMsgGetters").getType(e);
      return t === o("WAWebMsgType").MSG_TYPE.IMAGE
        ? "photo"
        : t === o("WAWebMsgType").MSG_TYPE.VIDEO
          ? o("WAWebMsgGetters").getIsGif(e)
            ? null
            : "video"
          : t === o("WAWebMsgType").MSG_TYPE.DOCUMENT
            ? "document"
            : null;
    }
    function s(t, n, r) {
      var a = o("WAWebMsgGetters").getEphemeralExpirationTimestamp(t);
      return (
        e(t) != null &&
        o("WAWebMsgGetters").getId(t).remote.isGroup() &&
        !o("WAWebMsgGetters").getIsSentByMe(t) &&
        !o("WAWebMsgGetters").getIsViewOnce(t) &&
        o("WAWebMsgGetters").getT(t) > n &&
        (a == null || a > r || o("WAWebMsgGetters").getIsKept(t))
      );
    }
    function u(e) {
      var t;
      return (
        o("WAWebContactsAndGroupsMyGroups").isMyGroup(e) &&
        !o("WAWebFrontendChatGetters").getIsCommunity(e) &&
        !e.archive &&
        !o("WAWebMuteGetters").getIsMuted(e.mute) &&
        ((t = e.groupMetadata) == null
          ? void 0
          : t.participants.iAmMember()) === !0
      );
    }
    function c(e, t) {
      return Math.max(
        e,
        t - o("WAWebContactsAndGroupsThisWeek").THIS_WEEK_IN_SECONDS,
      );
    }
    ((l.getNewMediaKind = e),
      (l.isNewMediaMsg = s),
      (l.isNewMediaGroup = u),
      (l.getNewMediaSince = c));
  },
  98,
);
