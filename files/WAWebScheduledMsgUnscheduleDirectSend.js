__d(
  "WAWebScheduledMsgUnscheduleDirectSend",
  [
    "WALogger",
    "WAWebGenerateProtocolUnscheduleMessageProto",
    "WAWebSendGroupMsgJob",
    "WAWebSendUserMsgJob",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t) {
      var n = t.chatWid,
        a = t.metricReporter,
        i = t.msgRecord,
        l = t.originalMsgKey,
        c = t.revealKeyId,
        d = l.id;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            '[scheduled_msg][unschedule] send edit="7" ',
            "",
          ])),
        d,
      );
      var m = o(
          "WAWebGenerateProtocolUnscheduleMessageProto",
        ).buildProtocolUnscheduleMessage(l),
        p = n.isGroup(),
        _ = { kind: "unschedule", revealKeyId: c };
      try {
        p
          ? await o("WAWebSendGroupMsgJob").encryptAndSendGroupMsg({
              msgRecord: i,
              msgProtobuf: m,
              metricReporter: a,
              scheduledMsgMetadata: _,
            })
          : await o("WAWebSendUserMsgJob").encryptAndSendUserMsg({
              msgRecord: i,
              msgProtobuf: m,
              metricReporter: a,
              chatId: n,
              scheduledMsgMetadata: _,
            });
      } catch (e) {
        var f = r("getErrorSafe")(e);
        throw (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][unschedule] send failed for ",
                  "",
                ])),
              d,
            )
            .catching(f)
            .sendLogs("scheduled-msg-unschedule-send-failed"),
          f
        );
      }
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[scheduled_msg][unschedule] ACKed ",
            "",
          ])),
        d,
      );
    }
    l.sendUnscheduleStanza = c;
  },
  98,
);
