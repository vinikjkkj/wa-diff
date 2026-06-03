__d(
  "WAWebPollsInvalidateChatPollMsgsAction",
  [
    "WALogger",
    "WAWebDBPollsInvalidateChatPolls",
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
            (yield o("WAWebDBPollsInvalidateChatPolls").invalidateChatPolls(
              t.id,
            ),
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
        })),
        u.apply(this, arguments)
      );
    }
    l.invalidateChatPollMsgs = s;
  },
  98,
);
