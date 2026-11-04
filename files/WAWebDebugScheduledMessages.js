__d(
  "WAWebDebugScheduledMessages",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebChatCollection",
    "WAWebSendScheduledMsgAction",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          r("vulture")("BiNJQrDCN70QS_QZJmaXVDFuSnA=");
          var i = o("WAWebChatCollection").ChatCollection.get(
            o("WAWebWidFactory").createWid(t),
          );
          if (i == null) {
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
          for (var l = 0; l < n; l++) {
            var s = o("WATimeUtils").futureUnixTime(a + l);
            yield o("WAWebSendScheduledMsgAction").sendScheduledTextMsgToChat({
              chat: i,
              scheduledTimestampS: s,
              text: "Debug-" + (l + 1),
            });
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
