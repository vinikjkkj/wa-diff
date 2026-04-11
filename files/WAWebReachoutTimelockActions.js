__d(
  "WAWebReachoutTimelockActions",
  ["WAWebChatCollection", "WAWebReachoutTimelockUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndVisible() &&
        e.forEach(function (e) {
          var t = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(
            e.id,
          );
          e.set({
            canSendMsgWhileTimelocked: o(
              "WAWebReachoutTimelockUtils",
            ).canSendMsgWhileTimelocked({ contact: e, chat: t }),
          });
        });
    }
    l.maybeSetCanSendMsgWhileTimelockedProp = e;
  },
  98,
);
