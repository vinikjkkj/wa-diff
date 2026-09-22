__d(
  "WAWebPollAddOptionDecryptedMsgDataConversion",
  [
    "WAWebE2EProtoUtils",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebPollsGatingUtils",
    "WAWebPollsValidationError",
    "WAWebProcessBaseMsgInfo",
    "WAWebViewMode.flow",
    "WAWebWamEnumE2eFailureReason",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var a,
        i = r("nullthrows")(
          e.pollAddOptionMessage,
          "[Poll][AddOption] Missing pollAddOptionMessage",
        ),
        l = o("WAWebProcessBaseMsgInfo").msgDataToBaseMsgInfo(t),
        s = o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(
          i.pollCreationMessageKey,
          l,
        );
      if (s == null || !s.equals(n.id) || !s.equals(t.parentMsgKey))
        throw new (o("WAWebPollsValidationError").PollAddOptionValidationError)(
          o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
            .PARENT_KEY_MISMATCH,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var u = i.addOption;
      if (u == null)
        throw new (o("WAWebPollsValidationError").PollAddOptionValidationError)(
          o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
            .MISSING_POLL_OPTION,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var c = u.optionName;
      if (
        c == null ||
        c.length === 0 ||
        c.length >
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
        l,
        {
          type: o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_DECRYPTED,
          viewMode: o("WAWebViewMode.flow").ViewModeType.POLL_ADD_OPTION,
          kind: o("WAWebMsgType").MsgKind.PollAddOptionDecrypted,
          protocolMessageKey: t.targetMessageKey,
          parentMsgKey: t.parentMsgKey,
          associationType: t.associationType,
          reportingTokenInfo: t.reportingTokenInfo,
        },
        ((a = e.messageContextInfo) == null ? void 0 : a.messageSecret) !=
          null && {
          messageSecret: new Uint8Array(e.messageContextInfo.messageSecret),
        },
        { pollAddedOption: { name: c, localId: -1 } },
      );
    }
    l.protobufToPollAddOptionDecryptedMsgData = e;
  },
  98,
);
