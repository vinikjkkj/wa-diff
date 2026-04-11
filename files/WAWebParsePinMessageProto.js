__d(
  "WAWebParsePinMessageProto",
  [
    "WALongInt",
    "WAWebAck",
    "WAWebE2EProtoUtils",
    "WAWebLidMigrationUtils",
    "WAWebMsgType",
    "WAWebPinInChatValidationError",
    "WAWebPinMsgGatingUtils",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.baseMessage,
        a = e.editAttr,
        i = e.messageProtobuf,
        l = e.msgContext,
        s = i.pinInChatMessage;
      if (s != null) {
        if (!o("WAWebPinMsgGatingUtils").isPinnedMessagesM1ReceiverEnabled())
          return {
            msgData: babelHelpers.extends({}, n, {
              type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
              kind: o("WAWebMsgType").MsgKind.Unknown,
              futureproofType: o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE,
            }),
            contextInfo: null,
          };
        if (l === "relay" && a !== o("WAWebAck").EDIT_ATTR.PIN_IN_CHAT)
          throw new (o(
            "WAWebPinInChatValidationError",
          ).PinInChatValidationError)(
            o("WAWebPinInChatValidationError").PinInChatValidationErrorCode
              .INVALID_EDIT_ATTR,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        var u = o(
          "WAWebE2EProtoUtils",
        ).translateRegularMessageKeyToLocalReference(s.key, n);
        if (u == null)
          throw new (o(
            "WAWebPinInChatValidationError",
          ).PinInChatValidationError)(
            o("WAWebPinInChatValidationError").PinInChatValidationErrorCode
              .MISSING_PARENT_MSG_KEY,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        if (
          !r("WAWebWid").equals.apply(
            r("WAWebWid"),
            o("WAWebLidMigrationUtils").toCommonAddressingMode(
              u.remote,
              n.id.remote,
            ),
          ) &&
          !u.remote.isBroadcast()
        )
          throw new (o(
            "WAWebPinInChatValidationError",
          ).PinInChatValidationError)(
            o("WAWebPinInChatValidationError").PinInChatValidationErrorCode
              .INVALID_PIN_IN_CHAT_MSG_REMOTE,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        var c =
          (t = i.messageContextInfo) == null
            ? void 0
            : t.messageAddOnDurationInSecs;
        if (c != null && c < 0)
          throw new (o(
            "WAWebPinInChatValidationError",
          ).PinInChatValidationError)(
            o("WAWebPinInChatValidationError").PinInChatValidationErrorCode
              .INVALID_PIN_IN_CHAT_EXPIRY_DURATION,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        var d = s.type;
        if (d == null)
          throw new (o(
            "WAWebPinInChatValidationError",
          ).PinInChatValidationError)(
            o("WAWebPinInChatValidationError").PinInChatValidationErrorCode
              .MISSING_TYPE,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        var m = o("WALongInt").maybeNumberOrThrowIfTooLarge(
          s.senderTimestampMs,
        );
        if (m == null)
          throw new (o(
            "WAWebPinInChatValidationError",
          ).PinInChatValidationError)(
            o("WAWebPinInChatValidationError").PinInChatValidationErrorCode
              .MISSING_SENDER_TIMESTAMP,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        var p = babelHelpers.extends({}, n, {
          type: o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE,
          kind: o("WAWebMsgType").MsgKind.PinInChat,
          pinParentKey: u,
          pinMessageType: d,
          pinSenderTimestampMs: m,
          pinExpiryDuration: c,
        });
        return { msgData: p, contextInfo: null };
      }
    }
    l.default = e;
  },
  98,
);
