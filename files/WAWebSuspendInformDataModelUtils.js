__d(
  "WAWebSuspendInformDataModelUtils",
  [
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterGetMessagesJob",
    "WAWebNewsletterUpdateMsgsRecordsJob",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n,
        r = await o("WAWebNewsletterDBUtils").bulkGetMessagesByServerIds(e, t),
        a = [],
        i = [],
        l = new Map();
      e.forEach(function (e) {
        var t = r.get(e);
        t != null ? l.set(e, t) : i.push(e);
      });
      var s;
      if (i.length > 0) {
        var u = Math.min.apply(Math, i),
          c = Math.max.apply(Math, i);
        s = await o("WAWebNewsletterGetMessagesJob").getNewsletterMessages(
          t,
          c - u + 1,
          { after: u - 1 },
        );
      }
      return (
        (n = s) == null ||
          n.msgs.forEach(function (e) {
            e != null &&
              (a.push(e), e.serverId != null && l.set(e.serverId, e));
          }),
        a.length > 0 &&
          (await o(
            "WAWebNewsletterUpdateMsgsRecordsJob",
          ).addNewsletterMsgsRecords(a)),
        l
      );
    }
    l.populateMsgModels = e;
  },
  98,
);
