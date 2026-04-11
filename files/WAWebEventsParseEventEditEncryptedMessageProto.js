__d(
  "WAWebEventsParseEventEditEncryptedMessageProto",
  [
    "WAWebE2EProtoUtils",
    "WAWebEventsValidationError",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumE2eFailureReason",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = e.msgContext,
        a = n.secretEncryptedMessage;
      if (
        !(
          a == null ||
          a.secretEncType !==
            o("WAWebProtobufsE2E.pb")
              .Message$SecretEncryptedMessage$SecretEncType.EVENT_EDIT
        )
      ) {
        var i = a.encIv,
          l = a.encPayload,
          s = a.targetMessageKey,
          u = o(
            "WAWebE2EProtoUtils",
          ).translateRegularMessageKeyToLocalReference(s, t);
        if (u == null)
          throw new (o(
            "WAWebEventsValidationError",
          ).EncryptedEventEditValidationError)(
            o("WAWebEventsValidationError")
              .EncryptedEventEditValidationErrorCode
              .EVENT_EDIT_MISSING_TARGET_MESSAGE_KEY,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        if (i == null)
          throw new (o(
            "WAWebEventsValidationError",
          ).EncryptedEventEditValidationError)(
            o("WAWebEventsValidationError")
              .EncryptedEventEditValidationErrorCode.EVENT_EDIT_MISSING_ENC_IV,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        if (i.byteLength !== 12)
          throw new (o(
            "WAWebEventsValidationError",
          ).EncryptedEventEditValidationError)(
            o("WAWebEventsValidationError")
              .EncryptedEventEditValidationErrorCode
              .EVENT_EDIT_INVALID_SIZE_ENC_IV,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        if (l == null)
          throw new (o(
            "WAWebEventsValidationError",
          ).EncryptedEventEditValidationError)(
            o("WAWebEventsValidationError")
              .EncryptedEventEditValidationErrorCode
              .EVENT_EDIT_MISSING_ENC_PAYLOAD,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        return {
          msgData: babelHelpers.extends({}, t, {
            type: o("WAWebMsgType").MSG_TYPE.EVENT_EDIT_ENCRYPTED,
            kind: o("WAWebMsgType").MsgKind.EventEditEncrypted,
            encIv: i,
            encPayload: l,
            targetMessageKey: u,
          }),
          contextInfo: null,
        };
      }
    }
    l.default = e;
  },
  98,
);
