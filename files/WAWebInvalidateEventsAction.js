__d(
  "WAWebInvalidateEventsAction",
  ["WALogger", "WAWebDBEventInvalidateChatEvents", "WAWebFrontendMsgGetters"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      try {
        (await o("WAWebDBEventInvalidateChatEvents").invalidateChatEvents(t.id),
          t.msgs
            .filter(function (e) {
              return (
                o("WAWebFrontendMsgGetters").getAsEventCreation(e) &&
                !e.eventInvalidated
              );
            })
            .forEach(function (e) {
              e.eventInvalidated = !0;
            }));
      } catch (t) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[EVENTS] Failed to invalidate events with error: ",
              "",
            ])),
          t,
        );
      }
    }
    l.invalidateEventMsgsForChat = s;
  },
  98,
);
