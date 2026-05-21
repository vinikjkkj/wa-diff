__d(
  "WAWebScheduledMsgUnscheduleDirectSend",
  [
    "WALogger",
    "WAWebGenerateProtocolUnscheduleMessageProto",
    "WAWebSendGroupMsgJob",
    "WAWebSendUserMsgJob",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.chatWid,
            a = t.metricReporter,
            i = t.msgRecord,
            l = t.originalMsgKey,
            c = t.revealKeyId,
            d = l.id;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                '[scheduled_msg][unschedule][send] sending edit="7" stanza for ',
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
              ? yield o("WAWebSendGroupMsgJob").encryptAndSendGroupMsg({
                  msgRecord: i,
                  msgProtobuf: m,
                  metricReporter: a,
                  scheduledMsgMetadata: _,
                })
              : yield o("WAWebSendUserMsgJob").encryptAndSendUserMsg({
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
                      "[scheduled_msg][unschedule][send] failed to send unschedule stanza for ",
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
                "[scheduled_msg][unschedule][send] server ACKed unschedule for ",
                "",
              ])),
            d,
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.sendUnscheduleStanza = c;
  },
  98,
);
