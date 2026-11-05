__d(
  "WAWebResendMsgAction",
  [
    "Promise",
    "WAWebAck",
    "WAWebBackendRuntime",
    "WAWebDBUpdateMessageTable",
    "WAWebFrontendMsgGetters",
    "WAWebMessageSendService",
    "WAWebMessageStoreService",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebMusicResendMsgLoadable",
    "WAWebNewsletterSendMsgAction",
    "WAWebSendHistoryBundleAction",
    "WAWebSendMessageEditAction",
    "WAWebSendMsgRecordAction",
    "WAWebSendMsgResultAction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      if (o("WAWebMsgGetters").getIsFailed(t)) {
        if (
          t.type === o("WAWebMsgType").MSG_TYPE.MUSIC ||
          t.futureproofType === o("WAWebMsgType").MSG_TYPE.MUSIC
        )
          return o("WAWebMusicResendMsgLoadable").resendMusicMsgLoadable(t);
        if (o("WAWebMsgGetters").getIsEdited(t))
          return (
            o("WAWebBackendRuntime").isWebDiBackendEnabled()
              ? o("WAWebBackendRuntime").runtime(
                  o("WAWebMessageSendService").MessageSendService,
                ).resendLatestEdit
              : o("WAWebSendMessageEditAction").resendLatestEdit
          )(t);
        var r = { ack: o("WAWebAck").ACK.CLOCK };
        return (
          (r.isSendFailure = !1),
          t.enqueueAckUpdate(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield (
                o("WAWebBackendRuntime").isWebDiBackendEnabled()
                  ? o("WAWebBackendRuntime").runtime(
                      o("WAWebMessageStoreService").MessageStoreService,
                    ).updateMessageTable
                  : o("WAWebDBUpdateMessageTable").updateMessageTable
              )(t.id, r),
                t.set(r));
            }),
          ),
          o("WAWebMsgGetters").getIsNewsletterMsg(t)
            ? o("WAWebNewsletterSendMsgAction")
                .resendNewsletterMsg(t)
                .then(function (e) {
                  return e && e.messageSendResult;
                })
            : t.type === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE
              ? (o("WAWebBackendRuntime").isWebDiBackendEnabled()
                  ? o("WAWebBackendRuntime").runtime(
                      o("WAWebMessageSendService").MessageSendService,
                    ).sendMsgRecord
                  : o("WAWebSendMsgRecordAction").sendMsgRecord)(t).then(
                  function (e) {
                    return (
                      e.messageSendResult ===
                        o("WAWebSendMsgResultAction").SendMsgResult.OK &&
                        o(
                          "WAWebSendHistoryBundleAction",
                        ).completeGroupHistorySendOnBundleResend(t),
                      e.messageSendResult
                    );
                  },
                )
              : o("WAWebFrontendMsgGetters").getAsMms(t)
                ? o("WAWebMsgGetters").getIsSentByMeFromWeb(t)
                  ? t.resumeUpload()
                  : t.resumeRemoteUpload()
                : (o("WAWebBackendRuntime").isWebDiBackendEnabled()
                    ? o("WAWebBackendRuntime").runtime(
                        o("WAWebMessageSendService").MessageSendService,
                      ).sendMsgRecord
                    : o("WAWebSendMsgRecordAction").sendMsgRecord)(t).then(
                    function (e) {
                      return e.messageSendResult;
                    },
                  )
        );
      }
      return (e || (e = n("Promise"))).resolve();
    }
    l.resendMsg = s;
  },
  98,
);
