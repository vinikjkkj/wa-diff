__d(
  "WAWebResendUserMsgMainThreadOnly",
  [
    "WAWebCreateSendMsgRecord",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebOutgoingMessage",
    "WAWebPnlessStanzaMigration",
    "WAWebResendUserMsg",
    "WAWebSendMsgMetricReporter",
    "WAWebSendMsgTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.ackTime,
            n = e.excludeList,
            a = e.msgId,
            i = e.msgRecordType,
            l = e.msgType,
            s = n.map(function (e) {
              return o("WAWebWidFactory").createWid(e);
            }),
            u = yield o("WAWebCreateSendMsgRecord").createMsgRecord(a, l, i);
          if (u == null)
            throw r("err")(
              "resendUserMsgJob failed to deserialize msg from db",
            );
          var c =
            u.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message
              ? o("WAWebSendMsgMetricReporter").createMsgModelMetricReporter(
                  u.data,
                  o("WAWebMessageSendReporterFrontendDeps")
                    .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
                )
              : o("WAWebSendMsgMetricReporter").createAddonMetricReporter(
                  u.data,
                );
          c.sendReporter = c.createSendReporter({
            isResend: !0,
            originalMessage: u.type === "message" ? u.data : void 0,
          });
          var d = u.data.to;
          yield o("WAWebPnlessStanzaMigration").maybeReplaceWidWithAccountLid(
            u,
          );
          var m = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
            o("WAWebOutgoingMessage").OutgoingMessageOriginType.ChatResend,
            u,
          );
          return o("WAWebResendUserMsg").resendUserMsg({
            ackTime: t,
            chatId: d,
            excludeList: s,
            metricReporter: c,
            msgProtobuf: m,
            msgRecord: u,
          });
        })),
        s.apply(this, arguments)
      );
    }
    l.resendUserMsgMainThreadOnly = e;
  },
  98,
);
