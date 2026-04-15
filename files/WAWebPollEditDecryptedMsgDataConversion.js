__d(
  "WAWebPollEditDecryptedMsgDataConversion",
  [
    "WALongInt",
    "WANullthrows",
    "WAWebE2EProtoUtils",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebPollsValidationError",
    "WAWebProcessBaseMsgInfo",
    "WAWebProtobufsE2E.pb",
    "WAWebViewMode.flow",
    "WAWebWamEnumE2eFailureReason",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        a,
        i,
        l = r("WANullthrows")(
          e.protocolMessage,
          "[Poll][Edit] Missing protocol message",
        );
      if (
        l.type !==
        o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT
      )
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .INVALID_PROTOCOL_MESSAGE_TYPE,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
            .EDIT_TYPE_AND_PROTOCOL_MISMATCH,
        );
      var s = o("WAWebProcessBaseMsgInfo").msgDataToBaseMsgInfo(t),
        u = r("WANullthrows")(
          o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(
            l.key,
            s,
          ),
        ),
        c = l.editedMessage;
      if (c == null)
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .MISSING_EDITED_MESSAGE,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var d = o("WALongInt").maybeNumberOrThrowIfTooLarge(l.timestampMs);
      if (d == null)
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .MISSING_SENDER_TIMESTAMP,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var m =
        (n =
          (a =
            (i = c.pollCreationMessageV5) != null
              ? i
              : c.pollCreationMessageV3) != null
            ? a
            : c.pollCreationMessageV2) != null
          ? n
          : c.pollCreationMessage;
      if (m == null || m.name == null)
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .INVALID_EDITS,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (
        m.correctAnswer != null ||
        m.endTime != null ||
        m.hideParticipantName != null ||
        m.allowAddOption != null
      )
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .INVALID_EDITS,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var p = m.name;
      return babelHelpers.extends(
        {},
        o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
          t.id,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
        ),
        {
          id: t.id,
          t: Math.floor(r("WANullthrows")(d) / 1e3),
          type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
          subtype: "poll_edit_decrypted",
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          kind: o("WAWebMsgType").MsgKind.ProtocolPollEdit,
          latestEditSenderTimestampMs: d,
          latestEditMsgKey: t.id,
          protocolMessageKey: u,
          editMsgType: o("WAWebMsgType").MSG_TYPE.POLL_CREATION,
          pollName: p,
          reportingTokenInfo: t.reportingTokenInfo,
        },
      );
    }
    l.protobufToPollEditDecryptedMsgData = e;
  },
  98,
);
