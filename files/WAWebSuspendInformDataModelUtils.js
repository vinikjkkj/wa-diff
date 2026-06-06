__d(
  "WAWebSuspendInformDataModelUtils",
  [
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterGetMessagesJob",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = yield o("WAWebNewsletterDBUtils").bulkGetMessagesByServerIds(
              e,
              t,
            ),
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
            s = yield o("WAWebNewsletterGetMessagesJob").getNewsletterMessages(
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
              (yield o(
                "WAWebNewsletterUpdateMsgsRecordsJob",
              ).addNewsletterMsgsRecords(a)),
            l
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.populateMsgModels = e;
  },
  98,
);
