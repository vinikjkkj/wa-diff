__d(
  "WAWebDebugScheduledMessages",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebChatCollection",
    "WAWebSendScheduledMsgAction",
    "WAWebWidFactory",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n, a) {
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
        await o("WAWebSendScheduledMsgAction").sendScheduledTextMsgToChat({
          chat: i,
          scheduledTimestampS: s,
          text: "Debug-" + (l + 1),
        });
      }
    }
    s.doc =
      "Schedule N test messages (Debug-1, Debug-2, ...) into a chat; first fires after initialDelayS seconds, each subsequent one 1s later. Args: chatId, count, initialDelayS";
    var u = { bulkScheduleTestMessages: s };
    l.default = u;
  },
  98,
);
