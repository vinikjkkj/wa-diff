__d(
  "WAWebResendUserMsgJob",
  ["WALogger", "WAWebDefinePersistedJob", "WAWebWorkerSafeBackendApi"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = o("WAWebDefinePersistedJob")
        .defineWebPersistedJob()
        .finalStep("resendUserMsg", async function (t) {
          var n = t.ackTime,
            r = t.excludeList,
            a = t.msgId,
            i = t.msgRecordType,
            l = t.msgType;
          try {
            var s = await o(
              "WAWebWorkerSafeBackendApi",
            ).workerSafeSendAndReceive("resendUserMsg", {
              msgId: a,
              msgType: l,
              msgRecordType: i,
              excludeList: r,
              ackTime: n,
            });
            return s;
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "resendUserMsgJob: failed to resend message: ",
                    "",
                  ])),
                t,
              )
              .tags("messaging")
              .sendLogs("persisted-message-resend-failed");
          }
        })
        .end();
    l.resendUserMsgJob = s;
  },
  98,
);
