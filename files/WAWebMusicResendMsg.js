__d(
  "WAWebMusicResendMsg",
  [
    "WALogger",
    "WAWebAck",
    "WAWebDBUpdateMessageTable",
    "WAWebMsgType",
    "WAWebMusicGatingUtils",
    "WAWebMusicSendMsgAction",
    "WAWebSendMsgRecordAction",
    "WAWebSendMsgResultAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var n;
      if (
        t.type !== o("WAWebMsgType").MSG_TYPE.MUSIC ||
        !o("WAWebMusicGatingUtils").canSendMusicTo(t.id.remote)
      ) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[music] resend refused: music sending is off",
            ])),
        );
        return;
      }
      if (
        (await o("WAWebDBUpdateMessageTable").updateMessageTable(t.id, {
          ack: o("WAWebAck").ACK.CLOCK,
        }),
        t.set({ ack: o("WAWebAck").ACK.CLOCK, isSendFailure: !1 }),
        ((n = t.musicData) == null ? void 0 : n.musicContentMediaId) == null)
      )
        try {
          await o("WAWebMusicSendMsgAction").reportMusicCreationBeforeSend(t);
        } catch (e) {
          return o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN;
        }
      var r = await o("WAWebSendMsgRecordAction").sendMsgRecord(t),
        a = r.messageSendResult;
      return (
        a === o("WAWebSendMsgResultAction").SendMsgResult.OK &&
          (await o("WAWebMusicSendMsgAction").clearPendingSendFailure(t.id)),
        a
      );
    }
    l.resendMusicMsg = s;
  },
  98,
);
