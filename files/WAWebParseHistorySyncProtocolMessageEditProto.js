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
          var s,
            u,
            c,
            d = babelHelpers.extends({}, n, {
              latestEditSenderTimestampMs: o(
                "WALongInt",
              ).maybeNumberOrThrowIfTooLarge(l.timestampMs),
              latestEditMsgKey: n.id,
            }),
            m = l.editedMessage;
          if (m == null)
            throw new (o(
              "WAWebMessageEditValidationError",
            ).MessageEditValidationError)(
              o("WAWebMessageEditValidationError")
                .MessageEditValidationErrorCode.MISSING_EDITED_MESSAGE,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          var p = l.key;
          if (p == null)
            throw new (o(
              "WAWebMessageEditValidationError",
            ).MessageEditValidationError)(
              o("WAWebMessageEditValidationError")
                .MessageEditValidationErrorCode.MISSING_PROTOCOL_KEY,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          var _ =
              (s = a.messageContextInfo) == null
                ? void 0
                : s.messageAssociation,
            f = m.messageContextInfo,
            g =
              _ == null
                ? m
                : babelHelpers.extends({}, m, {
                    messageContextInfo: babelHelpers.extends({}, f, {
                      messageAssociation:
                        (u = f == null ? void 0 : f.messageAssociation) != null
                          ? u
                          : _,
                      threadId:
                        (c = f == null ? void 0 : f.threadId) != null ? c : [],
                    }),
                  });
          return (
            Object.assign(
              d,
              o("WAWebE2EProtoParser").parseMsgProto({
                messageProtobuf: g,
                message: d,
                msgContext: i,
              }),
            ),
            (d.id = o("WAWebProtobufMsgKeyUtils").protobufToMsgKey(
              p,
              d.author,
            )),
            { msgData: d, contextInfo: null }
          );
        } catch (t) {
          var h = r("getErrorSafe")(t);
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
                h.name,
                h.message,
                h.stack,
              )
              .tags("messaging")
              .sendLogs("parseHistorySyncEditedMessageProto: EditParseError"),
            h
          );
        }
    }
    l.default = s;
  },
  98,
);
