__d(
  "WAWebCreateEncryptedEventResponseMsgData",
  [
    "WANullthrows",
    "WAWebAck",
    "WAWebAddonEncryption",
    "WAWebAddonEncryptionError",
    "WAWebEventsValidationError",
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
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
            a = self.crypto.getRandomValues(new Uint8Array(12)),
            i = {
              type: o("WAWebMsgType").MsgKind.EventResponseDecrypted,
              encode: {
                response: e.eventResponse,
                timestampMs: e.senderTimestampMs,
              },
            },
            l = o("WAWebMsgGetters").getOriginalSender(t),
            s = o("WAWebAddonEncryptionError").getValidatedMessageSecret(
              o("WAWebMsgType").MsgKind.EventResponseDecrypted,
              t,
            );
          if (l == null)
            throw new (o(
              "WAWebEventsValidationError",
            ).EventCreationValidationError)(
              o("WAWebEventsValidationError").EventCreationValidationErrorCode
                .EVENT_CREATION_MISSING_MESSAGE_SENDER,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          var u = yield o("WAWebAddonEncryption").encryptAddOn(i, {
              messageSecret: s,
              iv: a,
              stanzaId: t.id.id,
              originalMessageSender: l,
              addOnSender: o("WAWebWidFactory").asUserWidOrThrow(
                r("WANullthrows")(o("WAWebMsgGetters").getSender(e)),
              ),
              parentWid: t.from,
            }),
            c = u.encPayload;
          return babelHelpers.extends(
            { id: e.id },
            o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
              e.id,
              o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
            ),
            {
              type: o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE,
              kind: o("WAWebMsgType").MsgKind.EventResponseEncrypted,
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              addonEncrypted: !0,
              t: Math.floor(e.senderTimestampMs / 1e3),
              ack: (n = e.ack) != null ? n : o("WAWebAck").ACK.CLOCK,
              targetMessageKey: t.id,
              encPayload: c,
              encIv: a.buffer,
            },
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.createEncryptedEventResponseMsgData = e;
  },
  98,
);
