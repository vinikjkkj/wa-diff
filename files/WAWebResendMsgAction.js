__d(
  "WAWebResendMsgAction",
  [
    "Promise",
    "WAWebAck",
    "WAWebDBUpdateMessageTable",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebNewsletterSendMsgAction",
    "WAWebSendMessageEditAction",
    "WAWebSendMsgRecordAction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      if (o("WAWebMsgGetters").getIsFailed(t)) {
        if (o("WAWebMsgGetters").getIsEdited(t))
          return o("WAWebSendMessageEditAction").resendLatestEdit(t);
        var r = { ack: o("WAWebAck").ACK.CLOCK };
        return (
          (r.isSendFailure = !1),
          t.enqueueAckUpdate(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield o("WAWebDBUpdateMessageTable").updateMessageTable(t.id, r),
                t.set(r));
            }),
          ),
          o("WAWebMsgGetters").getIsNewsletterMsg(t)
            ? o("WAWebNewsletterSendMsgAction")
                .resendNewsletterMsg(t)
                .then(function (e) {
                  return e && e.messageSendResult;
                })
            : o("WAWebFrontendMsgGetters").getAsMms(t)
              ? o("WAWebMsgGetters").getIsSentByMeFromWeb(t)
                ? t.resumeUpload()
                : t.resumeRemoteUpload()
              : o("WAWebSendMsgRecordAction")
                  .sendMsgRecord(t)
                  .then(function (e) {
                    return e.messageSendResult;
                  })
        );
      }
      return (e || (e = n("Promise"))).resolve();
    }
    l.resendMsg = s;
  },
  98,
);
