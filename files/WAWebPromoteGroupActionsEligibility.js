__d(
  "WAWebPromoteGroupActionsEligibility",
  ["WAWebChatGetters", "WAWebCmd"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      return (
        o("WAWebChatGetters").getIsGroup(e) &&
        ((t = e.groupMetadata) == null ? void 0 : t.participants.iAmAdmin()) ===
          !0 &&
        !o("WAWebCmd").isRightDrawerOverConversation()
      );
    }
    l.isAdminOfGroupInWideWindow = e;
  },
  98,
);
