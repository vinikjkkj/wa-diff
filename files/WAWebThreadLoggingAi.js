__d(
  "WAWebThreadLoggingAi",
  [
    "Promise",
    "WALogger",
    "WAWebThreadInteractionDataAiWamEvent",
    "WAWebThreadLoggingFalco",
    "WamThreadInteractionDataAiFalcoEvent",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = [];
          try {
            (t.forEach(function (e) {
              if (a) {
                i.push(d(e));
                return;
              }
              var t = new (o(
                "WAWebThreadInteractionDataAiWamEvent",
              ).ThreadInteractionDataAiWamEvent)(m(e));
              t.commit();
            }),
              yield (s || (s = n("Promise"))).all(i));
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
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      var t = m(e);
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
    function m(e) {
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
    ((l.ThreadInteractionAiWamTrigger = u),
      (l.logThreadInteractionAiFalcoEvent = d));
  },
  98,
);
