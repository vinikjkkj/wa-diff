__d(
  "WAWebPollsParsePollAddOptionEncryptedMessageProto",
  [
    "WAWebAssociationProtoUtils",
    "WAWebE2EProtoUtils",
    "WAWebMessageAssociation.flow",
    "WAWebMessageAssociationValidation",
    "WAWebMsgType",
    "WAWebPollAddOptionAssociationProcessor",
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
          u = i.encPayload,
          c = i.targetMessageKey,
          d = o(
            "WAWebE2EProtoUtils",
          ).translateRegularMessageKeyToLocalReference(c, t);
        if (d == null)
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
        if (u == null)
          throw new (o(
            "WAWebPollsValidationError",
          ).PollAddOptionValidationError)(
            o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
              .MISSING_ENC_PAYLOAD,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        var m = s({
            baseMessage: t,
            messageAssociation: n,
            msgContext: a,
            pollCreationMessageKey: d,
          }),
          p = m.associationParentMsgKey,
          _ = m.associationType,
          f = m.viewMode;
        if (
          _ !==
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
        var g = {
          encIv: l,
          encPayload: u,
          targetMessageKey: d,
          parentMsgKey: p,
          associationType: _,
          viewMode: f,
        };
        return o("WAWebPollsGatingUtils").isPollAddOptionReceivingEnabled()
          ? {
              msgData: babelHelpers.extends(
                {},
                t,
                {
                  type: o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_ENCRYPTED,
                  kind: o("WAWebMsgType").MsgKind.PollAddOptionEncrypted,
                },
                g,
              ),
              contextInfo: null,
            }
          : {
              msgData: babelHelpers.extends(
                {},
                t,
                {
                  type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                  kind: o("WAWebMsgType").MsgKind.AssociatedUnknown,
                  futureproofType:
                    o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_ENCRYPTED,
                },
                g,
              ),
              contextInfo: null,
            };
      }
    }
    function s(e) {
      var t = e.baseMessage,
        n = e.messageAssociation,
        a = e.msgContext,
        i = e.pollCreationMessageKey;
      return n == null
        ? {
            associationParentMsgKey: i,
            associationType: o("WAWebMessageAssociation.flow")
              .MessageAssociationType.POLL_ADD_OPTION,
            viewMode: r("WAWebPollAddOptionAssociationProcessor").viewMode,
          }
        : o(
            "WAWebAssociationProtoUtils",
          ).getValidatedAssociationFieldsFromProto(n, t, a);
    }
    l.default = e;
  },
  98,
);
