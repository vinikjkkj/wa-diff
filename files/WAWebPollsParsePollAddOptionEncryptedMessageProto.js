__d(
  "WAWebPollsParsePollAddOptionEncryptedMessageProto",
  [
    "WAWebAssociationProtoUtils",
    "WAWebE2EProtoUtils",
    "WAWebMessageAssociation.flow",
    "WAWebMessageAssociationGatingUtils",
    "WAWebMessageAssociationValidation",
    "WAWebMsgType",
    "WAWebPollsGatingUtils",
    "WAWebPollsValidationError",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumE2eFailureReason",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageAssociation,
        r = e.messageProtobuf,
        a = e.msgContext,
        i = r.secretEncryptedMessage;
      if (
        !(
          i == null ||
          i.secretEncType !==
            o("WAWebProtobufsE2E.pb")
              .Message$SecretEncryptedMessage$SecretEncType.POLL_ADD_OPTION
        )
      ) {
        var l = i.encIv,
          s = i.encPayload,
          u = i.targetMessageKey,
          c = o(
            "WAWebE2EProtoUtils",
          ).translateRegularMessageKeyToLocalReference(u, t);
        if (c == null)
          throw new (o(
            "WAWebPollsValidationError",
          ).PollAddOptionValidationError)(
            o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
              .MISSING_TARGET_MESSAGE_KEY,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        if (l == null)
          throw new (o(
            "WAWebPollsValidationError",
          ).PollAddOptionValidationError)(
            o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
              .MISSING_ENC_IV,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        if (l.byteLength !== 12)
          throw new (o(
            "WAWebPollsValidationError",
          ).PollAddOptionValidationError)(
            o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
              .INVALID_SIZE_ENC_IV,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        if (s == null)
          throw new (o(
            "WAWebPollsValidationError",
          ).PollAddOptionValidationError)(
            o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
              .MISSING_ENC_PAYLOAD,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        if (n == null)
          throw new (o(
            "WAWebMessageAssociationValidation",
          ).MessageAssociationValidationError)(
            o("WAWebMessageAssociationValidation")
              .MessageAssociationValidationErrorCode.MISSING_ASSOCIATION_TYPE,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        var d = o(
            "WAWebAssociationProtoUtils",
          ).getValidatedAssociationFieldsFromProto(n, t, a),
          m = d.associationParentMsgKey,
          p = d.associationType,
          _ = d.viewMode;
        if (
          p !==
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
        var f = {
          encIv: l,
          encPayload: s,
          targetMessageKey: c,
          parentMsgKey: m,
          associationType: p,
          viewMode: _,
        };
        return !o(
          "WAWebMessageAssociationGatingUtils",
        ).isMessageAssociationInfraEnabled() ||
          !o("WAWebPollsGatingUtils").isPollAddOptionReceivingEnabled()
          ? {
              msgData: babelHelpers.extends(
                {},
                t,
                {
                  type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                  kind: o("WAWebMsgType").MsgKind.AssociatedUnknown,
                  futureproofType:
                    o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_ENCRYPTED,
                },
                f,
              ),
              contextInfo: null,
            }
          : {
              msgData: babelHelpers.extends(
                {},
                t,
                {
                  type: o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_ENCRYPTED,
                  kind: o("WAWebMsgType").MsgKind.PollAddOptionEncrypted,
                },
                f,
              ),
              contextInfo: null,
            };
      }
    }
    l.default = e;
  },
  98,
);
