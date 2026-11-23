__d(
  "WAWebDBEventInvalidateChatEvents",
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
                  e.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION &&
                  !e.eventInvalidated
                );
              })
              .map(function (e) {
                return { id: e.id, eventInvalidated: !0 };
              }),
          );
        });
    }
    l.invalidateChatEvents = e;
  },
  98,
);
