__d(
  "WAWebDBPollsDeleteVotes",
  [
    "Promise",
    "WAWebDBMessageDelete",
    "WAWebPollsVotesSchema",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = yield o("WAWebPollsVotesSchema")
            .getTable()
            .anyOf(["parentMsgKey"], t);
          if (r.length !== 0) {
            var a = r.map(function (e) {
                return e.msgKey;
              }),
              i = r.map(function (e) {
                return [e.parentMsgKey, e.sender];
              }),
              l = yield (e || (e = n("Promise"))).allSettled([
                o("WAWebDBMessageDelete").removeMessagesFromHistory(a, {
                  deleteAssociatedMsgs: !1,
                }),
                o("WAWebPollsVotesSchema").getTable().bulkRemove(i),
              ]);
            for (var s of l) if (s.status === "rejected") throw s.reason;
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.deleteVotesByParentMsgKeys = s;
  },
  98,
);
