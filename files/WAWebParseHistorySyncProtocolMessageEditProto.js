__d(
  "WAWebParseHistorySyncProtocolMessageEditProto",
  [
    "WALogger",
    "WALongInt",
    "WAWebE2EProtoParser",
    "WAWebMessageEditValidationError",
    "WAWebProtobufMsgKeyUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumE2eFailureReason",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n = t.baseMessage,
        a = t.messageProtobuf,
        i = t.msgContext,
        l = a.protocolMessage;
      if (
        !(
          l == null ||
          (l == null ? void 0 : l.type) !==
            o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT
        ) &&
        !(i !== "history" && i !== "history_quoted")
      )
        try {
          var s = babelHelpers.extends({}, n, {
              latestEditSenderTimestampMs: o(
                "WALongInt",
              ).maybeNumberOrThrowIfTooLarge(l.timestampMs),
              latestEditMsgKey: n.id,
            }),
            u = l.editedMessage;
          if (u == null)
            throw new (o(
              "WAWebMessageEditValidationError",
            ).MessageEditValidationError)(
              o("WAWebMessageEditValidationError")
                .MessageEditValidationErrorCode.MISSING_EDITED_MESSAGE,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          var c = l.key;
          if (c == null)
            throw new (o(
              "WAWebMessageEditValidationError",
            ).MessageEditValidationError)(
              o("WAWebMessageEditValidationError")
                .MessageEditValidationErrorCode.MISSING_PROTOCOL_KEY,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          return (
            Object.assign(
              s,
              o("WAWebE2EProtoParser").parseMsgProto({
                messageProtobuf: u,
                message: s,
                msgContext: i,
              }),
            ),
            (s.id = o("WAWebProtobufMsgKeyUtils").protobufToMsgKey(
              c,
              s.author,
            )),
            { msgData: s, contextInfo: null }
          );
        } catch (t) {
          var d = r("getErrorSafe")(t);
          throw (
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[parseHistorySyncEditedMessageProto] err=",
                    " msg=",
                    " stack=",
                    "",
                  ])),
                d.name,
                d.message,
                d.stack,
              )
              .tags("messaging")
              .sendLogs("parseHistorySyncEditedMessageProto: EditParseError"),
            d
          );
        }
    }
    l.default = s;
  },
  98,
);
