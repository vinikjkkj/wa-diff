__d(
  "WAWebPollEditDecryptedMsgDataConversion",
  [
    "WALongInt",
    "WANullthrows",
    "WAWebE2EProtoUtils",
    "WAWebMessageEditUtils",
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebPollsValidationError",
    "WAWebProcessBaseMsgInfo",
    "WAWebProtobufsE2E.pb",
    "WAWebViewMode.flow",
    "WAWebWamEnumE2eFailureReason",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var a,
        i,
        l,
        s = r("WANullthrows")(
          e.protocolMessage,
          "[Poll][Edit] Missing protocol message",
        );
      if (
        s.type !==
        o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT
      )
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .INVALID_PROTOCOL_MESSAGE_TYPE,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
            .EDIT_TYPE_AND_PROTOCOL_MISMATCH,
        );
      var u = o("WAWebProcessBaseMsgInfo").msgDataToBaseMsgInfo(t),
        c = r("WANullthrows")(
          o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(
            s.key,
            u,
          ),
        );
      if (!c.equals(t.targetMessageKey))
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .TARGET_MESSAGE_KEY_MISMATCH,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (
        !o("WAWebMessageEditUtils").isParentWithinEditProcessingWindow({
          parentTsInSeconds: o("WAWebMsgGetters").getT(n),
          editTsInSeconds: o("WAWebMsgGetters").getT(t),
          msgKey: n.id,
        })
      )
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .OUTSIDE_EDIT_WINDOW,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var d = s.editedMessage;
      if (d == null)
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .MISSING_EDITED_MESSAGE,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var m = o("WALongInt").maybeNumberOrThrowIfTooLarge(s.timestampMs);
      if (m == null)
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .MISSING_SENDER_TIMESTAMP,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var p =
        (a =
          (i =
            (l = d.pollCreationMessageV5) != null
              ? l
              : d.pollCreationMessageV3) != null
            ? i
            : d.pollCreationMessageV2) != null
          ? a
          : d.pollCreationMessage;
      if (p == null)
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .MISSING_POLL_CREATION_MESSAGE,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (p.name == null)
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .INVALID_NAME,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (
        p.correctAnswer != null ||
        p.endTime != null ||
        p.hideParticipantName != null ||
        p.allowAddOption != null
      )
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .INVALID_EDITS,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var _ = p.name;
      return babelHelpers.extends(
        {},
        o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
          t.id,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
        ),
        {
          id: t.id,
          t: Math.floor(r("WANullthrows")(m) / 1e3),
          type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
          subtype: "poll_edit_decrypted",
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          kind: o("WAWebMsgType").MsgKind.ProtocolPollEdit,
          latestEditSenderTimestampMs: m,
          latestEditMsgKey: t.id,
          protocolMessageKey: c,
          editMsgType: o("WAWebMsgType").MSG_TYPE.POLL_CREATION,
          pollName: _,
          reportingTokenInfo: t.reportingTokenInfo,
        },
      );
    }
    l.protobufToPollEditDecryptedMsgData = e;
  },
  98,
);
