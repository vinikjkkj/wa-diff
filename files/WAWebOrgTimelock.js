__d(
  "WAWebOrgTimelock",
  ["WAWebChatCollection", "WAWebReachoutTimelockUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      return (
        !o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked() ||
        ((t = o("WAWebChatCollection").ChatCollection.getChatByAccountLid(e)) ==
        null
          ? void 0
          : t.getTcToken()) != null
      );
    }
    l.canMessageOrgMemberWhileTimelocked = e;
  },
  98,
);
