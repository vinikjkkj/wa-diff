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
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.ackTime,
        n = e.excludeList,
        a = e.msgId,
        i = e.msgRecordType,
        l = e.msgType,
        s = n.map(function (e) {
          return o("WAWebWidFactory").createWid(e);
        }),
        u = await o("WAWebCreateSendMsgRecord").createMsgRecord(a, l, i);
      if (u == null)
        throw r("err")("resendUserMsgJob failed to deserialize msg from db");
      var c =
        u.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message
          ? o("WAWebSendMsgMetricReporter").createMsgModelMetricReporter(
              u.data,
              o("WAWebMessageSendReporterFrontendDeps")
                .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
            )
          : o("WAWebSendMsgMetricReporter").createAddonMetricReporter(u.data);
      c.sendReporter = c.createSendReporter({
        isResend: !0,
        originalMessage: u.type === "message" ? u.data : void 0,
      });
      var d = u.data.to;
      await o("WAWebPnlessStanzaMigration").maybeReplaceWidWithAccountLid(u);
      var m = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
        o("WAWebOutgoingMessage").OutgoingMessageOriginType.ChatResend,
        u,
      );
      return o("WAWebResendUserMsg").resendUserMsg(u, m, s, t, c, d);
    }
    l.resendUserMsgMainThreadOnly = e;
  },
  98,
);
