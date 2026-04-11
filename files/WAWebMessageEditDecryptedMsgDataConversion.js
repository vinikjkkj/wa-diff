__d(
  "WAWebMessageEditDecryptedMsgDataConversion",
  [
    "WALongInt",
    "WANullthrows",
    "WAWebE2EProtoParser",
    "WAWebE2EProtoUtils",
    "WAWebMessageEditValidationError",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebParseProtocolMessageEditProto",
    "WAWebProcessBaseMsgInfo",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumE2eFailureReason",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var a,
        i = r("WANullthrows")(
          e.protocolMessage,
          "[MessageEdit] Missing protocol message",
        );
      if (
        i.type !==
        o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT
      )
        throw new (o(
          "WAWebMessageEditValidationError",
        ).MessageEditValidationError)(
          o("WAWebMessageEditValidationError").MessageEditValidationErrorCode
            .INVALID_PROTOCOL_MESSAGE_TYPE,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
            .MESSAGE_SECRET_INVALID,
        );
      var l = o("WAWebProcessBaseMsgInfo").msgDataToBaseMsgInfo(t),
        s = r("WANullthrows")(
          o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(
            i.key,
            l,
          ),
        ),
        u = i.editedMessage;
      if (u == null)
        throw new (o(
          "WAWebMessageEditValidationError",
        ).MessageEditValidationError)(
          o("WAWebMessageEditValidationError").MessageEditValidationErrorCode
            .MISSING_EDITED_MESSAGE,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
            .MESSAGE_SECRET_INVALID,
        );
      var c = o("WALongInt").maybeNumberOrThrowIfTooLarge(i.timestampMs),
        d = r("WANullthrows")(
          r("WAWebParseProtocolMessageEditProto")({
            messageProtobuf: {
              protocolMessage: {
                editedMessage: u,
                key: i.key,
                type: i.type,
                timestampMs: i.timestampMs,
              },
              messageContextInfo: {
                messageSecret: r("WANullthrows")(
                  (a = t.messageSecret) != null ? a : n,
                ).buffer,
                threadId: [],
              },
            },
            baseMessage: l,
            msgContext: "relay",
          }),
        ),
        m = d.contextInfo,
        p = d.msgData;
      return (
        m != null &&
          o("WAWebE2EProtoParser").parseContextInfoProto(p, m, "relay", null),
        babelHelpers.extends(
          {},
          p,
          o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
            t.id,
            o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
          ),
          {
            id: t.id,
            t: Math.floor(r("WANullthrows")(c) / 1e3),
            type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
            subtype: "message_edit_decrypted",
            kind: o("WAWebMsgType").MsgKind.MessageEditDecrypted,
            viewMode: p.viewMode,
            latestEditSenderTimestampMs: c,
            latestEditMsgKey: t.id,
            protocolMessageKey: s,
            editedMessage: u,
            editMsgType: p.editMsgType,
            reportingTokenInfo: t.reportingTokenInfo,
          },
        )
      );
    }
    l.protobufToMessageEditDecryptedMsgData = e;
  },
  98,
);
