__d(
  "WAWebEventEditDecryptedMsgDataConversion",
  [
    "WALongInt",
    "WANullthrows",
    "WAWebE2EProtoUtils",
    "WAWebEventsParseEventCreationMessageProto",
    "WAWebEventsValidationError",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
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
        s,
        u,
        c,
        d,
        m,
        p = r("WANullthrows")(
          e.protocolMessage,
          "[Event][Edit] Missing protocol message",
        );
      if (
        p.type !==
        o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT
      )
        throw new (o(
          "WAWebEventsValidationError",
        ).EncryptedEventEditValidationError)(
          o("WAWebEventsValidationError").EncryptedEventEditValidationErrorCode
            .EVENT_EDIT_INVALID_PROTOCOL_MESSAGE_TYPE,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
            .EDIT_TYPE_AND_PROTOCOL_MISMATCH,
        );
      var _ = o("WAWebProcessBaseMsgInfo").msgDataToBaseMsgInfo(t),
        f = r("WANullthrows")(
          o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(
            p.key,
            _,
          ),
        ),
        g = p.editedMessage;
      if (g == null)
        throw new (o(
          "WAWebEventsValidationError",
        ).EncryptedEventEditValidationError)(
          o("WAWebEventsValidationError").EncryptedEventEditValidationErrorCode
            .EVENT_EDIT_MISSING_EDITED_MESSAGE,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var h = o("WALongInt").maybeNumberOrThrowIfTooLarge(p.timestampMs);
      if (h == null)
        throw new (o(
          "WAWebEventsValidationError",
        ).EncryptedEventEditValidationError)(
          o("WAWebEventsValidationError").EncryptedEventEditValidationErrorCode
            .EVENT_EDIT_MISSING_SENDER_TIMESTAMP,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var y = r("WANullthrows")(
          r("WAWebEventsParseEventCreationMessageProto")({
            messageProtobuf: babelHelpers.extends({}, g, {
              messageContextInfo: {
                messageSecret: r("WANullthrows")(
                  (a = t.messageSecret) != null ? a : n,
                ).buffer,
                threadId: [],
              },
            }),
            baseMessage: _,
            msgContext: "relay",
          }),
          "[Event][Edit] Failed to parse edited event fields",
        ),
        C = y.msgData;
      return babelHelpers.extends(
        {},
        o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
          t.id,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
        ),
        {
          id: t.id,
          t: Math.floor(r("WANullthrows")(h) / 1e3),
          type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
          subtype: "event_edit_decrypted",
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          kind: o("WAWebMsgType").MsgKind.ProtocolEventEdit,
          latestEditSenderTimestampMs: h,
          latestEditMsgKey: t.id,
          protocolMessageKey: f,
          editMsgType: o("WAWebMsgType").MSG_TYPE.EVENT_CREATION,
          eventName: r("WANullthrows")(C == null ? void 0 : C.eventName),
          eventStartTime: r("WANullthrows")(
            C == null ? void 0 : C.eventStartTime,
          ),
          isEventCanceled:
            (i = C == null ? void 0 : C.isEventCanceled) != null ? i : !1,
          eventLocation:
            (l = C == null ? void 0 : C.eventLocation) != null ? l : void 0,
          eventDescription:
            (s = C == null ? void 0 : C.eventDescription) != null ? s : void 0,
          eventJoinLink:
            (u = C == null ? void 0 : C.eventJoinLink) != null ? u : void 0,
          eventEndTime:
            (c = C == null ? void 0 : C.eventEndTime) != null ? c : void 0,
          eventIsScheduledCall:
            (d = C == null ? void 0 : C.eventIsScheduledCall) != null
              ? d
              : void 0,
          eventExtraGuestsAllowed:
            (m = C == null ? void 0 : C.eventExtraGuestsAllowed) != null
              ? m
              : void 0,
          reportingTokenInfo: t.reportingTokenInfo,
        },
      );
    }
    l.protobufToEventEditDecryptedMsgData = e;
  },
  98,
);
