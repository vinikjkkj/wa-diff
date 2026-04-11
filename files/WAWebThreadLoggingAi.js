__d(
  "WAWebThreadLoggingAi",
  ["WALogger", "WAWebThreadInteractionDataAiWamEvent", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      try {
        t.forEach(function (e) {
          var t = e.event,
            n = e.threadDs,
            r = e.threadId,
            a = {
              threadDs: n,
              threadId: r,
              totalMessageFromAgentCnt: t.botMessagesReceived,
              totalMessageToAgentCnt: t.botMessagesSent,
            },
            i = new (o(
              "WAWebThreadInteractionDataAiWamEvent",
            ).ThreadInteractionDataAiWamEvent)(a);
          i.commit();
        });
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "ctlv2: error uploading Ai WAM event",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("thread-logging-ai-upload-failure");
      }
    }
    l.ThreadInteractionAiWamTrigger = s;
  },
  98,
);
