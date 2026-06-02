__d(
  "WAWebDBPollsInvalidateChatPolls",
  ["WAWebDBMessageUtils", "WAWebModelStorageUtils", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["message"], async function (t) {
          var n = t[0],
            r = await n.between(
              ["internalId"],
              o("WAWebDBMessageUtils").beginningOfChat(e),
              o("WAWebDBMessageUtils").endOfChat(e),
            );
          await n.bulkCreateOrMerge(
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
        });
    }
    l.invalidateChatPolls = e;
  },
  98,
);
