__d(
  "WAWebCreateEncryptedEventEditMsgData",
  [
    "WALongInt",
    "WANullthrows",
    "WAWebAck",
    "WAWebAddonEncryption",
    "WAWebE2EProtoUtils",
    "WAWebEventsValidationError",
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebViewMode.flow",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a,
            i,
            l,
            s,
            u,
            c = self.crypto.getRandomValues(new Uint8Array(12)),
            d = o("WAWebMsgGetters").getOriginalSender(t),
            m = t.messageSecret,
            p = o("WALongInt").maybeNumberOrThrowIfTooLarge(
              e.latestEditSenderTimestampMs,
            );
          if (m == null)
            throw new (o(
              "WAWebEventsValidationError",
            ).EventCreationValidationError)(
              o("WAWebEventsValidationError").EventCreationValidationErrorCode
                .MISSING_MESSAGE_SECRET,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .MISSING_MESSAGE_SECRET,
            );
          if (d == null)
            throw new (o(
              "WAWebEventsValidationError",
            ).EventCreationValidationError)(
              o("WAWebEventsValidationError").EventCreationValidationErrorCode
                .EVENT_CREATION_MISSING_MESSAGE_SENDER,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          if (p == null)
            throw new (o(
              "WAWebEventsValidationError",
            ).EncryptedEventEditValidationError)(
              o("WAWebEventsValidationError")
                .EncryptedEventEditValidationErrorCode
                .EVENT_EDIT_MISSING_SENDER_TIMESTAMP,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          var _ = {
              type: o("WAWebMsgType").MsgKind.EventEditDecrypted,
              encode: {
                protocolMessage: {
                  key: o("WAWebE2EProtoUtils").encodeKey(t.id),
                  type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                    .MESSAGE_EDIT,
                  timestampMs: p,
                  editedMessage: {
                    eventMessage: {
                      name: e.eventName,
                      startTime: e.eventStartTime,
                      isCanceled: (n = e.isEventCanceled) != null ? n : !1,
                      endTime: (a = e.eventEndTime) != null ? a : void 0,
                      description:
                        (i = e.eventDescription) != null ? i : void 0,
                      location: (l = e.eventLocation) != null ? l : void 0,
                      joinLink: (s = e.eventJoinLink) != null ? s : void 0,
                    },
                  },
                },
              },
            },
            f = yield o("WAWebAddonEncryption").encryptAddOn(_, {
              messageSecret: m,
              iv: c,
              stanzaId: t.id.id,
              originalMessageSender: d,
              addOnSender: o("WAWebWidFactory").asUserWidOrThrow(
                r("WANullthrows")(o("WAWebMsgGetters").getSender(e)),
              ),
            }),
            g = f.encPayload,
            h = f.reportingTokenContent;
          return babelHelpers.extends(
            { id: e.id },
            o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
              e.id,
              o("WAWebMsgKeyUtils").TranslateMsgKeyType.EditMessage,
            ),
            {
              type: o("WAWebMsgType").MSG_TYPE.EVENT_EDIT_ENCRYPTED,
              kind: o("WAWebMsgType").MsgKind.EventEditEncrypted,
              t: Math.floor(
                r("WANullthrows")(e.latestEditSenderTimestampMs) / 1e3,
              ),
              ack: (u = e.ack) != null ? u : o("WAWebAck").ACK.CLOCK,
              targetMessageKey: t.id,
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              encPayload: g,
              encIv: c.buffer,
              messageSecret: m,
              reportingTokenContent: h,
            },
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.createEncryptedEventEditMsgData = e;
  },
  98,
);
