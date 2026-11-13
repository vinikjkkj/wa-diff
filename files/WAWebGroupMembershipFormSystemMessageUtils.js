__d(
  "WAWebGroupMembershipFormSystemMessageUtils",
  ["WAWebChatCollection", "WAWebUserUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.participant;
      return (
        n != null &&
        !o("WAWebUserUtils").isMeAccount(n) &&
        ((t = o("WAWebChatCollection").ChatCollection.get(e.remote)) == null ||
        (t = t.groupMetadata) == null
          ? void 0
          : t.participants.iAmAdmin()) === !0
      );
    }
    l.canChangeGroupMembershipFormFromMsg = e;
  },
  98,
);
