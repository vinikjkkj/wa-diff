__d(
  "WAWebDBPollsInvalidateChatPolls",
  [
    "WAWebDBMessageUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["message"],
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = t[0],
                  r = yield n.between(
                    ["internalId"],
                    o("WAWebDBMessageUtils").beginningOfChat(e),
                    o("WAWebDBMessageUtils").endOfChat(e),
                  );
                yield n.bulkCreateOrMerge(
                  r
                    .filter(function (e) {
                      return (
                        e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION &&
                        !e.pollInvalidated
                      );
                    })
                    .map(function (e) {
                      return { id: e.id, pollInvalidated: !0 };
                    }),
                );
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        );
    }
    l.invalidateChatPolls = e;
  },
  98,
);
