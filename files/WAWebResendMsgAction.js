__d(
  "WAWebResendMsgAction",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (o("WAWebMsgGetters").getIsFailed(e)) {
        if (
          e.type === o("WAWebMsgType").MSG_TYPE.MUSIC ||
          e.futureproofType === o("WAWebMsgType").MSG_TYPE.MUSIC
        )
          return o("WAWebMusicResendMsgLoadable").resendMusicMsgLoadable(e);
        if (o("WAWebMsgGetters").getIsEdited(e))
          return (
            o("WAWebBackendRuntime").isWebDiBackendEnabled()
              ? o("WAWebBackendRuntime").runtime(
                  o("WAWebMessageSendService").MessageSendService,
                ).resendLatestEdit
              : o("WAWebSendMessageEditAction").resendLatestEdit
          )(e);
        var t = { ack: o("WAWebAck").ACK.CLOCK };
        return (
          (t.isSendFailure = !1),
          e.enqueueAckUpdate(async function () {
            (await (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebMessageStoreService").MessageStoreService,
                  ).updateMessageTable
                : o("WAWebDBUpdateMessageTable").updateMessageTable
            )(e.id, t),
              e.set(t));
          }),
          o("WAWebMsgGetters").getIsNewsletterMsg(e)
            ? o("WAWebNewsletterSendMsgAction")
                .resendNewsletterMsg(e)
                .then(function (e) {
                  return e && e.messageSendResult;
                })
            : e.type === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE
              ? (o("WAWebBackendRuntime").isWebDiBackendEnabled()
                  ? o("WAWebBackendRuntime").runtime(
                      o("WAWebMessageSendService").MessageSendService,
                    ).sendMsgRecord
                  : o("WAWebSendMsgRecordAction").sendMsgRecord)(e).then(
                  function (t) {
                    return (
                      t.messageSendResult ===
                        o("WAWebSendMsgResultAction").SendMsgResult.OK &&
                        o(
                          "WAWebSendHistoryBundleAction",
                        ).completeGroupHistorySendOnBundleResend(e),
                      t.messageSendResult
                    );
                  },
                )
              : o("WAWebFrontendMsgGetters").getAsMms(e)
                ? o("WAWebMsgGetters").getIsSentByMeFromWeb(e)
                  ? e.resumeUpload()
                  : e.resumeRemoteUpload()
                : (o("WAWebBackendRuntime").isWebDiBackendEnabled()
                    ? o("WAWebBackendRuntime").runtime(
                        o("WAWebMessageSendService").MessageSendService,
                      ).sendMsgRecord
                    : o("WAWebSendMsgRecordAction").sendMsgRecord)(e).then(
                    function (e) {
                      return e.messageSendResult;
                    },
                  )
        );
      }
      return Promise.resolve(void 0);
    }
    l.resendMsg = e;
  },
  98,
);
