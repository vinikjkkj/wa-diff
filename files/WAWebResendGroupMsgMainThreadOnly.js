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
    function e(e, t, n, r, o, a, i, l, u) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l, s, u, c) {
            var d = l.map(function (e) {
                return o("WAWebWidFactory").createWid(e);
              }),
              m = yield o("WAWebCreateSendMsgRecord").createMsgRecord(e, t, n);
            if (m == null)
              throw r("err")(
                "resendUserGroupMsgJob failed to deserialize msg from db",
              );
            var p = yield o("WAWebGroupMsgSendUtils").getParticipantRecord(a),
              _ = yield o("WAWebGroupMsgSendUtils").getGroupData(
                a.toString(),
                p,
                m,
              ),
              f =
                m.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message
                  ? o(
                      "WAWebSendMsgMetricReporter",
                    ).createMsgModelMetricReporter(
                      m.data,
                      o("WAWebMessageSendReporterFrontendDeps")
                        .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
                    )
                  : o("WAWebSendMsgMetricReporter").createAddonMetricReporter(
                      m.data,
                    );
            f.sendReporter = f.createSendReporter({
              isResend: !0,
              originalMessage: m.type === "message" ? m.data : void 0,
            });
            var g = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
              o("WAWebOutgoingMessage").OutgoingMessageOriginType.ChatResend,
              m,
            );
            return o("WAWebResendGroupMsg").resendGroupMsg({
              isDirect: i,
              msgRecord: m,
              msgProtobuf: g,
              groupData: _,
              ackTime: u,
              oldList: d,
              phash: s,
              metricReporter: f,
              serverAddressingMode: c,
            });
          },
        )),
        s.apply(this, arguments)
      );
    }
    l.resendGroupMsgMainThreadOnly = e;
  },
  98,
);
