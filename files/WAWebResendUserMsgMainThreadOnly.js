__d(
  "WAWebResendUserMsgMainThreadOnly",
  [
    "WAWebCreateSendMsgRecord",
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
    function e(e, t, n, r, o) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            var l = a.map(function (e) {
                return o("WAWebWidFactory").createWid(e);
              }),
              s = yield o("WAWebCreateSendMsgRecord").createMsgRecord(e, t, n);
            if (s == null)
              throw r("err")(
                "resendUserMsgJob failed to deserialize msg from db",
              );
            var u =
              s.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message
                ? o("WAWebSendMsgMetricReporter").createMsgModelMetricReporter(
                    s.data,
                  )
                : o("WAWebSendMsgMetricReporter").createAddonMetricReporter(
                    s.data,
                  );
            u.sendReporter = u.createSendReporter({
              isResend: !0,
              originalMessage: s.type === "message" ? s.data : void 0,
            });
            var c = s.data.to;
            yield o("WAWebPnlessStanzaMigration").maybeReplaceWidWithAccountLid(
              s,
            );
            var d = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
              o("WAWebOutgoingMessage").OutgoingMessageOriginType.ChatResend,
              s,
            );
            return o("WAWebResendUserMsg").resendUserMsg(s, d, l, i, u, c);
          },
        )),
        s.apply(this, arguments)
      );
    }
    l.resendUserMsgMainThreadOnly = e;
  },
  98,
);
