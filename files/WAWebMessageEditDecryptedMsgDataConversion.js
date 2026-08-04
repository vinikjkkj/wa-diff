__d(
  "WAWebMessageEditDecryptedMsgDataConversion",
  [
    "WALongInt",
    "WAWebE2EProtoParser",
    "WAWebE2EProtoUtils",
    "WAWebMessageEditValidationError",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebParseProtocolMessageEditProto",
    "WAWebProcessBaseMsgInfo",
    "WAWebProtobufsE2E.pb",
    "WAWebSpoilerFormatRegex",
    "WAWebWamEnumE2eFailureReason",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var a,
        i,
        l = r("nullthrows")(
          e.protocolMessage,
          "[MessageEdit] Missing protocol message",
        );
      if (
        l.type !==
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
      var s = o("WAWebProcessBaseMsgInfo").msgDataToBaseMsgInfo(t),
        u = r("nullthrows")(
          o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(
            l.key,
            s,
          ),
        ),
        c = l.editedMessage;
      if (c == null)
        throw new (o(
          "WAWebMessageEditValidationError",
        ).MessageEditValidationError)(
          o("WAWebMessageEditValidationError").MessageEditValidationErrorCode
            .MISSING_EDITED_MESSAGE,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
            .MESSAGE_SECRET_INVALID,
        );
      var d = o("WALongInt").maybeNumberOrThrowIfTooLarge(l.timestampMs),
        m = r("nullthrows")(
          r("WAWebParseProtocolMessageEditProto")({
            messageProtobuf: {
              protocolMessage: {
                editedMessage: c,
                key: l.key,
                type: l.type,
                timestampMs: l.timestampMs,
              },
              messageContextInfo: {
                messageSecret: r("nullthrows")(
                  (a = t.messageSecret) != null ? a : n,
                ).buffer,
                threadId: [],
              },
            },
            baseMessage: s,
            msgContext: "relay",
          }),
        ),
        p = m.contextInfo,
        _ = m.msgData;
      p != null &&
        o("WAWebE2EProtoParser").parseContextInfoProto(_, p, "relay", null);
      var f = (i = _.body) != null ? i : _.caption;
      return babelHelpers.extends(
        {},
        _,
        o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
          t.id,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
        ),
        {
          id: t.id,
          t: Math.floor(r("nullthrows")(d) / 1e3),
          type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
          subtype: "message_edit_decrypted",
          kind: o("WAWebMsgType").MsgKind.MessageEditDecrypted,
          viewMode: _.viewMode,
          latestEditSenderTimestampMs: d,
          latestEditMsgKey: t.id,
          protocolMessageKey: u,
          editedMessage: c,
          editMsgType: _.editMsgType,
          reportingTokenInfo: t.reportingTokenInfo,
          isSpoiler:
            f != null && o("WAWebSpoilerFormatRegex").containsSpoiler(f),
        },
      );
    }
    l.protobufToMessageEditDecryptedMsgData = e;
  },
  98,
);
