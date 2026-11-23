__d(
  "WAWebDBPollsDeleteVotes",
  ["WAWebDBMessageDelete", "WAWebPollsVotesSchema"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await o("WAWebPollsVotesSchema")
        .getTable()
        .anyOf(["parentMsgKey"], e);
      if (t.length !== 0) {
        var n = t.map(function (e) {
            return e.msgKey;
          }),
          r = t.map(function (e) {
            return [e.parentMsgKey, e.sender];
          }),
          a = await Promise.allSettled([
            o("WAWebDBMessageDelete").removeMessagesFromHistory(n, {
              deleteAssociatedMsgs: !1,
            }),
            o("WAWebPollsVotesSchema").getTable().bulkRemove(r),
          ]);
        for (var i of a) if (i.status === "rejected") throw i.reason;
      }
    }
    l.deleteVotesByParentMsgKeys = e;
  },
  98,
);
