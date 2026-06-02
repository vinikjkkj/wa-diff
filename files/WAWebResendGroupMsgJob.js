__d(
  "WAWebResendGroupMsgJob",
  ["WALogger", "WAWebDefinePersistedJob", "WAWebWorkerSafeBackendApi"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = o("WAWebDefinePersistedJob")
        .defineWebPersistedJob()
        .finalStep("resendUserGroupMsg", async function (t) {
          var n = t.ackTime,
            r = t.groupId,
            a = t.isDirect,
            i = t.msgId,
            l = t.msgRecordType,
            s = t.msgType,
            u = t.oldList,
            c = t.phash,
            d = t.serverAddressingMode;
          try {
            var m = await o(
              "WAWebWorkerSafeBackendApi",
            ).workerSafeSendAndReceive("resendGroupMsg", {
              msgId: i,
              msgType: s,
              msgRecordType: l,
              groupId: r,
              isDirect: a,
              oldList: u,
              phash: c,
              ackTime: n,
              serverAddressingMode: d,
            });
            return m;
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "resendGroupMsgJob: failed to resend message: ",
                    "",
                  ])),
                t,
              )
              .tags("messaging")
              .sendLogs("persisted-group-message-resend-failed");
          }
        })
        .end();
    l.resendGroupMsgJob = s;
  },
  98,
);
