__d(
  "WAWebParseProtocolUnscheduleMessageProto",
  [
    "WALogger",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebE2EProtoUtils",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebScheduledMsgUnscheduleHandler",
    "WAWebViewMode.flow",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t) {
      var n = t.baseMessage,
        a = t.messageProtobuf,
        i = a.protocolMessage;
      if (
        !(
          i == null ||
          i.type !==
            o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
              .MESSAGE_UNSCHEDULE
        )
      ) {
        var l = o(
          "WAWebE2EProtoUtils",
        ).translateRegularMessageKeyToLocalReference(i.key, n);
        if (l == null)
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][unschedule][parse] missing/invalid key for ",
                "",
              ])),
            n.id.toString(),
          );
        else {
          var c, d;
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][unschedule][parse] inbound unschedule for ",
                "",
              ])),
            l.toString(),
          );
          var m = (c = n.t) != null ? c : 0;
          o("WAWebScheduledMsgUnscheduleHandler")
            .handleScheduledMsgUnschedule(l, {
              newMsgKey: n.id,
              sender: (d = n.author) != null ? d : n.from,
              revokeTimestamp: m,
            })
            .catch(function (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][unschedule][parse] handler failed for ",
                      "",
                    ])),
                  l.toString(),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("scheduled-msg-unschedule-parse-handler-failed");
            });
        }
        var p = babelHelpers.extends({}, n, {
          type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
          kind: o("WAWebMsgType").MsgKind.Protocol,
          subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
            .ScheduledMessageUnschedule,
          viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
        });
        return { msgData: p, contextInfo: null };
      }
    }
    l.default = c;
  },
  98,
);
