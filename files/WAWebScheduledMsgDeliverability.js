__d(
  "WAWebScheduledMsgDeliverability",
  ["WAWebChatGetters", "WAWebChatGroupUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (!o("WAWebChatGetters").getIsGroup(e)) return null;
      var t = e.groupMetadata;
      return t == null || t.stale === !0
        ? null
        : o("WAWebChatGroupUtils").isTerminatedGroup(e) ||
            !t.participants.iAmMember()
          ? "NOT_IN_GROUP"
          : o("WAWebChatGroupUtils").isSuspendedGroup(e)
            ? "GROUP_SUSPENDED"
            : t.announce === !0 && !t.participants.iAmAdmin()
              ? "ADMIN_ONLY"
              : null;
    }
    l.getScheduledMsgDeliverabilityWarning = e;
  },
  98,
);
