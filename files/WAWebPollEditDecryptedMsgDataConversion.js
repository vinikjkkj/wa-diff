__d(
  "WAWebPollEditDecryptedMsgDataConversion",
  [
    "WALongInt",
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
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var a,
        i,
        l,
        s,
        u,
        c = r("nullthrows")(
          e.protocolMessage,
          "[Poll][Edit] Missing protocol message",
        );
      if (
        c.type !==
        o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT
      )
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .INVALID_PROTOCOL_MESSAGE_TYPE,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
            .EDIT_TYPE_AND_PROTOCOL_MISMATCH,
        );
      var d = o("WAWebProcessBaseMsgInfo").msgDataToBaseMsgInfo(t),
        m = r("nullthrows")(
          o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(
            c.key,
            d,
          ),
        );
      if (!m.equals(t.targetMessageKey))
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
      var p = c.editedMessage;
      if (p == null)
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .MISSING_EDITED_MESSAGE,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var _ = o("WALongInt").maybeNumberOrThrowIfTooLarge(c.timestampMs);
      if (_ == null)
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .MISSING_SENDER_TIMESTAMP,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var f =
        (a =
          (i =
            (l =
              (s = p.pollCreationMessageV6) != null
                ? s
                : p.pollCreationMessageV5) != null
              ? l
              : p.pollCreationMessageV3) != null
            ? i
            : p.pollCreationMessageV2) != null
          ? a
          : p.pollCreationMessage;
      if (f == null)
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .MISSING_POLL_CREATION_MESSAGE,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (f.name == null)
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .INVALID_NAME,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var g = f.name;
      if (f.correctAnswer != null)
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .INVALID_EDITS,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var h = (u = n.pollEndTime) != null ? u : null,
        y =
          f.endTime != null
            ? o("WALongInt").maybeNumberOrThrowIfTooLarge(f.endTime)
            : null,
        C = n.pollHideVoterNames === !0,
        b = f.hideParticipantName === !0,
        v = n.pollAllowAddOption === !0,
        S = f.allowAddOption === !0;
      if (h !== y || C !== b || v !== S)
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .INVALID_EDITS,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      return babelHelpers.extends(
        {},
        o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
          t.id,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
        ),
        {
          id: t.id,
          t: Math.floor(r("nullthrows")(_) / 1e3),
          type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
          subtype: "poll_edit_decrypted",
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          kind: o("WAWebMsgType").MsgKind.ProtocolPollEdit,
          latestEditSenderTimestampMs: _,
          latestEditMsgKey: t.id,
          protocolMessageKey: m,
          editMsgType: o("WAWebMsgType").MSG_TYPE.POLL_CREATION,
          pollName: g,
          reportingTokenInfo: t.reportingTokenInfo,
        },
      );
    }
    l.protobufToPollEditDecryptedMsgData = e;
  },
  98,
);
