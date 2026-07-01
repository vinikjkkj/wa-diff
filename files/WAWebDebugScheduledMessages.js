__d(
  "WAWebDebugScheduledMessages",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebChatCollection",
    "WAWebSendScheduledMsgAction",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a = o("WAWebChatCollection").ChatCollection.get(
            o("WAWebWidFactory").createWid(t),
          );
          if (a == null) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "bulkScheduleTestMessages: chat ",
                  " not found",
                ])),
              t,
            );
            return;
          }
          for (var i = 0; i < n; i++) {
            var l = o("WATimeUtils").futureUnixTime(r + i);
            yield o("WAWebSendScheduledMsgAction").sendScheduledTextMsgToChat(
              a,
              "Debug-" + (i + 1),
              l,
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    s.doc =
      "Schedule N test messages (Debug-1, Debug-2, ...) into a chat; first fires after initialDelayS seconds, each subsequent one 1s later. Args: chatId, count, initialDelayS";
    var c = { bulkScheduleTestMessages: s };
    l.default = c;
  },
  98,
);
