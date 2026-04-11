__d(
  "WAWebPollAddOptionDecryptedMsgDataConversion",
  [
    "WANullthrows",
    "WAWebE2EProtoUtils",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebPollsGatingUtils",
    "WAWebPollsValidationError",
    "WAWebProcessBaseMsgInfo",
    "WAWebViewMode.flow",
    "WAWebWamEnumE2eFailureReason",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var a = r("WANullthrows")(
          e.pollAddOptionMessage,
          "[Poll][AddOption] Missing pollAddOptionMessage",
        ),
        i = o("WAWebProcessBaseMsgInfo").msgDataToBaseMsgInfo(t),
        l = o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(
          a.pollCreationMessageKey,
          i,
        );
      if (l == null || !l.equals(n.id) || !l.equals(t.parentMsgKey))
        throw new (o("WAWebPollsValidationError").PollAddOptionValidationError)(
          o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
            .PARENT_KEY_MISMATCH,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var s = a.addOption;
      if (s == null)
        throw new (o("WAWebPollsValidationError").PollAddOptionValidationError)(
          o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
            .MISSING_POLL_OPTION,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var u = s.optionName;
      if (
        u == null ||
        u.length === 0 ||
        u.length >
          o("WAWebPollsGatingUtils").getMaxPollOptionLengthForIncomingMessages()
      )
        throw new (o("WAWebPollsValidationError").PollAddOptionValidationError)(
          o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
            .INVALID_OPTION,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      return babelHelpers.extends(
        {},
        o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
          t.id,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
        ),
        i,
        {
          type: o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_DECRYPTED,
          viewMode: o("WAWebViewMode.flow").ViewModeType.POLL_ADD_OPTION,
          kind: o("WAWebMsgType").MsgKind.PollAddOptionDecrypted,
          protocolMessageKey: t.targetMessageKey,
          parentMsgKey: t.parentMsgKey,
          associationType: t.associationType,
          pollAddedOption: { name: u, localId: -1 },
        },
      );
    }
    l.protobufToPollAddOptionDecryptedMsgData = e;
  },
  98,
);
