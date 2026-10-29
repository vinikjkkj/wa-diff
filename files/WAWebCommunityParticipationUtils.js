__d(
  "WAWebCommunityParticipationUtils",
  ["WAWebChatCollection", "WAWebChatCommunityUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        e.isParentGroup === !0 &&
        (e.hasJoined() ||
          o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(
            o("WAWebChatCollection").ChatCollection.get(e.id),
          ) === !0)
      );
    }
    l.isParticipatingCommunity = e;
  },
  98,
);
