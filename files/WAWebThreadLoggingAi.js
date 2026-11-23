__d(
  "WAWebThreadLoggingAi",
  [
    "WALogger",
    "WAWebThreadInteractionDataAiWamEvent",
    "WAWebThreadLoggingFalco",
    "WamThreadInteractionDataAiFalcoEvent",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n) {
      var a = [];
      try {
        (t.forEach(function (e) {
          if (n) {
            a.push(u(e));
            return;
          }
          var t = new (o(
            "WAWebThreadInteractionDataAiWamEvent",
          ).ThreadInteractionDataAiWamEvent)(c(e));
          t.commit();
        }),
          await Promise.all(a));
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
    function u(e) {
      var t = c(e);
      return o("WAWebThreadLoggingFalco").logThreadInteractionFalcoEvent(
        r("WamThreadInteractionDataAiFalcoEvent"),
        function () {
          return {
            thread_ds: t.threadDs,
            thread_id: t.threadId,
            total_message_from_agent_cnt: t.totalMessageFromAgentCnt,
            total_message_to_agent_cnt: t.totalMessageToAgentCnt,
          };
        },
      );
    }
    function c(e) {
      var t = e.event,
        n = e.threadDs,
        r = e.threadId;
      return {
        threadDs: n,
        threadId: r,
        totalMessageFromAgentCnt: t.botMessagesReceived,
        totalMessageToAgentCnt: t.botMessagesSent,
      };
    }
    ((l.ThreadInteractionAiWamTrigger = s),
      (l.logThreadInteractionAiFalcoEvent = u));
  },
  98,
);
