__d(
  "WAWebPollsParsePollAddOptionMessageProto",
  [
    "WAWebAssociationProtoUtils",
    "WAWebE2EProtoUtils",
    "WAWebMessageAssociation.flow",
    "WAWebMessageAssociationValidation",
    "WAWebMsgType",
    "WAWebPollAddOptionAssociationProcessor",
    "WAWebPollAddOptionDecryptedMsgDataConversion",
    "WAWebPollVoteTCMetadata",
    "WAWebPollsGatingUtils",
    "WAWebPollsValidationError",
    "WAWebWamEnumE2eFailureReason",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageAssociation,
        a = e.messageProtobuf,
        i = e.msgContext,
        l = a.pollAddOptionMessage;
      if (l != null) {
        if (i !== "history")
          throw new (o(
            "WAWebPollsValidationError",
          ).PollAddOptionValidationError)(
            o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
              .STANZA_INVALID,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        var s = o(
          "WAWebE2EProtoUtils",
        ).translateRegularMessageKeyToLocalReference(
          l.pollCreationMessageKey,
          t,
        );
        if (s == null)
          throw new (o(
            "WAWebPollsValidationError",
          ).PollAddOptionValidationError)(
            o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
              .MISSING_TARGET_MESSAGE_KEY,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        var u =
          n != null
            ? o(
                "WAWebAssociationProtoUtils",
              ).getValidatedAssociationFieldsFromProto(n, t, i)
            : {
                associationParentMsgKey: s,
                associationType: o("WAWebMessageAssociation.flow")
                  .MessageAssociationType.POLL_ADD_OPTION,
                viewMode: r("WAWebPollAddOptionAssociationProcessor").viewMode,
              };
        if (
          u.associationType !==
          o("WAWebMessageAssociation.flow").MessageAssociationType
            .POLL_ADD_OPTION
        )
          throw new (o(
            "WAWebMessageAssociationValidation",
          ).MessageAssociationValidationError)(
            o("WAWebMessageAssociationValidation")
              .MessageAssociationValidationErrorCode.INVALID_ASSOCIATION_TYPE,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        if (u.associationParentMsgKey.id !== s.id)
          throw new (o(
            "WAWebPollsValidationError",
          ).PollAddOptionValidationError)(
            o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
              .PARENT_KEY_MISMATCH,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        var c = {
          parentMsgKey: u.associationParentMsgKey,
          associationType: u.associationType,
          viewMode: u.viewMode,
        };
        return o("WAWebPollsGatingUtils").isPollAddOptionReceivingEnabled()
          ? {
              msgData: babelHelpers.extends({}, t, c, {
                type: o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_DECRYPTED,
                kind: o("WAWebMsgType").MsgKind.PollAddOptionDecrypted,
                protocolMessageKey: s,
                pollAddedOption: {
                  name: o(
                    "WAWebPollAddOptionDecryptedMsgDataConversion",
                  ).getValidatedPollAddOptionName(l.addOption),
                  localId: -1,
                },
                pollUpdateMessageMetadata: o(
                  "WAWebPollVoteTCMetadata",
                ).pollVoteTCMetadataFromProto(l.metadata),
              }),
              contextInfo: null,
            }
          : {
              msgData: babelHelpers.extends({}, t, c, {
                type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                kind: o("WAWebMsgType").MsgKind.AssociatedUnknown,
                futureproofType:
                  o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_DECRYPTED,
              }),
              contextInfo: null,
            };
      }
    }
    l.default = e;
  },
  98,
);
