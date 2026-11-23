__d(
  "WAWebPollsInvalidateChatPollMsgsAction",
  ["WALogger", "WAWebDBPollsInvalidateChatPolls", "WAWebFrontendMsgGetters"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      try {
        (await o("WAWebDBPollsInvalidateChatPolls").invalidateChatPolls(t.id),
          t.msgs
            .filter(function (e) {
              return (
                o("WAWebFrontendMsgGetters").getAsPollCreation(e) &&
                !e.pollInvalidated
              );
            })
            .forEach(function (e) {
              e.pollInvalidated = !0;
            }));
      } catch (t) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[POLLS] Failed to invalidate polls with error: ",
              "",
            ])),
          t,
        );
      }
    }
    l.invalidateChatPollMsgs = s;
  },
  98,
);
