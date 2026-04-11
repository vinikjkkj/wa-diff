__d(
  "WAWebInvalidateEventsAction",
  [
    "WALogger",
    "WAWebDBEventInvalidateChatEvents",
    "WAWebFrontendMsgGetters",
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
          try {
            (yield o("WAWebDBEventInvalidateChatEvents").invalidateChatEvents(
              t.id,
            ),
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
        })),
        u.apply(this, arguments)
      );
    }
    l.invalidateEventMsgsForChat = s;
  },
  98,
);
