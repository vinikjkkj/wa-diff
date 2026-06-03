__d(
  "WAWebDBEventInvalidateChatEvents",
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
                        e.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION &&
                        !e.eventInvalidated
                      );
                    })
                    .map(function (e) {
                      return { id: e.id, eventInvalidated: !0 };
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
    l.invalidateChatEvents = e;
  },
  98,
);
