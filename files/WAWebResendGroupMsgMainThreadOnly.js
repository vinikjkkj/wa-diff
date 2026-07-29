__d(
  "WAWebResendGroupMsgMainThreadOnly",
  [
    "WAWebCreateSendMsgRecord",
    "WAWebGroupMsgSendUtils",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebOutgoingMessage",
    "WAWebResendGroupMsg",
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
            n = e.groupId,
            a = e.isDirect,
            i = e.msgId,
            l = e.msgRecordType,
            s = e.msgType,
            u = e.oldList,
            c = e.phash,
            d = e.serverAddressingMode,
            m = u.map(function (e) {
              return o("WAWebWidFactory").createWid(e);
            }),
            p = yield o("WAWebCreateSendMsgRecord").createMsgRecord(i, s, l);
          if (p == null)
            throw r("err")(
              "resendUserGroupMsgJob failed to deserialize msg from db",
            );
          var _ = yield o("WAWebGroupMsgSendUtils").getParticipantRecord(n),
            f = yield o("WAWebGroupMsgSendUtils").getGroupData(
              n.toString(),
              _,
              p,
            ),
            g =
              p.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message
                ? o("WAWebSendMsgMetricReporter").createMsgModelMetricReporter(
                    p.data,
                    o("WAWebMessageSendReporterFrontendDeps")
                      .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
                  )
                : o("WAWebSendMsgMetricReporter").createAddonMetricReporter(
                    p.data,
                  );
          g.sendReporter = g.createSendReporter({
            isResend: !0,
            originalMessage: p.type === "message" ? p.data : void 0,
          });
          var h = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
            o("WAWebOutgoingMessage").OutgoingMessageOriginType.ChatResend,
            p,
          );
          return o("WAWebResendGroupMsg").resendGroupMsg({
            isDirect: a,
            msgRecord: p,
            msgProtobuf: h,
            groupData: f,
            ackTime: t,
            oldList: m,
            phash: c,
            metricReporter: g,
            serverAddressingMode: d,
          });
        })),
        s.apply(this, arguments)
      );
    }
    l.resendGroupMsgMainThreadOnly = e;
  },
  98,
);
