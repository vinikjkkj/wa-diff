__d(
  "WAWebReactionsEncryption",
  [
    "WALongInt",
    "WANullthrows",
    "WAWebAddonEncryption",
    "WAWebAddonEncryptionError",
    "WAWebE2EProtoUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebReactionEncMessageValidationError",
    "WAWebReactionsBEUtils",
    "WAWebReactionsValidationError",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = {
              type: o("WAWebMsgType").MsgKind.ReactionEncrypted,
              encryptedAddOn: e.encryptedReaction,
            },
            n = yield o("WAWebAddonEncryption").decryptAddOn(t, {
              messageSecret: e.messageSecret,
              iv: e.iv,
              stanzaId: e.stanzaId,
              originalMessageSender: e.originalMessageSender,
              addOnSender: e.reactionSender,
            });
          return o("decodeProtobuf").decodeProtobuf(
            o("WAWebProtobufsE2E.pb").Message$ReactionMessageSpec,
            n,
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a,
            i = t.encIv,
            l = t.encPayload,
            s = t.targetMessageKey,
            u = o("WAWebAddonEncryptionError").getValidatedMessageSecret(
              o("WAWebMsgType").MsgKind.ReactionEncrypted,
              n,
            ),
            c = o("WAWebMsgGetters").getOriginalSender(n);
          if (c == null)
            throw new (o(
              "WAWebReactionEncMessageValidationError",
            ).ReactionEncMessageValidationError)(
              o("WAWebReactionEncMessageValidationError")
                .ReactionEncValidationErrorCode.MISSING_PARENT_MESSAGE_SENDER,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          var d = {
              encryptedReaction: l,
              messageSecret: u,
              iv: i,
              stanzaId: n.id.id,
              originalMessageSender: c,
              reactionSender: o("WAWebWidFactory").asUserWidOrThrow(
                r("WANullthrows")(o("WAWebMsgGetters").getSender(t)),
              ),
            },
            m;
          try {
            m = yield e(d);
          } catch (e) {
            throw new (o(
              "WAWebReactionEncMessageValidationError",
            ).ReactionEncMessageValidationError)(
              o("WAWebReactionEncMessageValidationError")
                .ReactionEncValidationErrorCode.DECRYPTION_FAILED,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          }
          var p =
              (a = o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
                m.text,
              )) != null
                ? a
                : o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT,
            _ = m.senderTimestampMs;
          if (_ == null)
            throw new (o(
              "WAWebReactionsValidationError",
            ).ReactionValidationError)(
              o("WAWebReactionsValidationError").ReactionValidationErrorCode
                .MISSING_TIMESTAMP,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          return babelHelpers.extends({}, t, {
            type: o("WAWebMsgType").MSG_TYPE.REACTION,
            kind: o("WAWebMsgType").MsgKind.ReactionDecrypted,
            reactionParentKey: s,
            reactionText: p,
            reactionTimestamp: o("WALongInt").numberOrThrowIfTooLarge(_),
            encPayload: void 0,
            encIv: void 0,
            read: !1,
          });
        })),
        c.apply(this, arguments)
      );
    }
    ((l.parseEncReaction = e), (l.decryptReactionMsgData = u));
  },
  98,
);
