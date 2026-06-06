__d(
  "WAWebProcessCommentMsg",
  [
    "WAWebAddonEncryption",
    "WAWebAddonEncryptionError",
    "WAWebCommentMessageValidationError",
    "WAWebHandleMsgValidate",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a = e.encIv,
            i = e.encPayload,
            l = e.targetMessageKey;
          if (a == null)
            throw new (o(
              "WAWebCommentMessageValidationError",
            ).CommentMessageValidationError)(
              o("WAWebCommentMessageValidationError")
                .CommentMessageValidationErrorCode.MISSING_COMMENT_ENC_IV,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          if (i == null)
            throw new (o(
              "WAWebCommentMessageValidationError",
            ).CommentMessageValidationError)(
              o("WAWebCommentMessageValidationError")
                .CommentMessageValidationErrorCode.MISSING_COMMENT_ENC_PAYLOAD,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          if (l == null)
            throw new (o(
              "WAWebCommentMessageValidationError",
            ).CommentMessageValidationError)(
              o("WAWebCommentMessageValidationError")
                .CommentMessageValidationErrorCode.MISSING_COMMENT_MESSAGE_KEY,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          var s = e.author ? e.author : e.id.participant,
            u = o("WAWebMsgGetters").getOriginalSender(t);
          if (s == null)
            throw new (o(
              "WAWebCommentMessageValidationError",
            ).CommentMessageValidationError)(
              o("WAWebCommentMessageValidationError")
                .CommentMessageValidationErrorCode.MISSING_COMMENT_SENDER,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          if (u == null)
            throw new (o(
              "WAWebCommentMessageValidationError",
            ).CommentMessageValidationError)(
              o("WAWebCommentMessageValidationError")
                .CommentMessageValidationErrorCode
                .MISSING_ORIGINAL_MESSAGE_SENDER,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          var c = {
              type: o("WAWebMsgType").MsgKind.CommentEncrypted,
              encryptedAddOn: i,
            },
            d = o("WAWebAddonEncryptionError").getValidatedMessageSecret(
              o("WAWebMsgType").MsgKind.CommentEncrypted,
              t,
            ),
            m = yield o("WAWebAddonEncryption").decryptAddOn(c, {
              messageSecret: d,
              iv: a,
              stanzaId: t.id.id,
              originalMessageSender: u,
              addOnSender: o("WAWebWidFactory").asUserWidOrThrow(s),
            }),
            p = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSpec,
              m,
            ),
            _ =
              (n =
                (r = p.messageContextInfo) == null
                  ? void 0
                  : r.messageSecret) != null
                ? n
                : e.messageSecret,
            f = babelHelpers.extends({}, e, {
              plainProtobufBytes: new Uint8Array(m),
            });
          return (
            _ != null && (f.messageSecret = new Uint8Array(_)),
            yield o(
              "WAWebHandleMsgValidate",
            ).validateAndProcessReportingTokenInfo({
              renderableMsgs: [f],
              forceDualEncryptedValidation: !0,
            }),
            p
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.processEncCommentMsg = e;
  },
  98,
);
