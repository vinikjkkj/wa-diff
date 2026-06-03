__d(
  "WAWebCRUDOperationsNewsletterPollsVotes",
  [
    "WAWebModelStorageUtils",
    "WAWebSchemaNewsletterPollsVotes",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["newsletter-polls-votes"],
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = t[0],
                  r = new Map(
                    e.map(function (e) {
                      return [e.parentMsgKey, e];
                    }),
                  ),
                  o = (yield n.bulkGet(
                    e.map(function (e) {
                      return e.parentMsgKey;
                    }),
                  )).filter(Boolean);
                (o.forEach(function (e) {
                  var t = r.get(e.parentMsgKey);
                  t != null &&
                    t.serverTimestamp < e.serverTimestamp &&
                    r.delete(e.parentMsgKey);
                }),
                  yield n.bulkCreateOrReplace(Array.from(r.values())));
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        );
    }
    function s(e) {
      return o("WAWebSchemaNewsletterPollsVotes").getTable().bulkRemove(e);
    }
    function u(e) {
      return o("WAWebSchemaNewsletterPollsVotes").getTable().get(e);
    }
    ((l.bulkCreateOrUpdateVotes = e), (l.bulkDeleteVotes = s), (l.getVote = u));
  },
  98,
);
