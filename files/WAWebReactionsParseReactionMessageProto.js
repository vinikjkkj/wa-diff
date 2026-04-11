__d(
  "WAWebReactionsParseReactionMessageProto",
  [
    "WALongInt",
    "WAWebConstantsDeprecated",
    "WAWebE2EProtoUtils",
    "WAWebMsgType",
    "WAWebReactionsBEUtils",
    "WAWebReactionsValidationError",
    "WAWebWamEnumE2eFailureReason",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = n.reactionMessage;
      if (r != null) {
        var a = s(r),
          i = o(
            "WAWebE2EProtoUtils",
          ).translateRegularMessageKeyToLocalReference(r.key, t),
          l = o("WALongInt").maybeNumberOrThrowIfTooLarge(r.senderTimestampMs);
        if (i == null)
          throw new (o(
            "WAWebReactionsValidationError",
          ).ReactionValidationError)(
            o("WAWebReactionsValidationError").ReactionValidationErrorCode
              .MISSING_PARENT_MSG_KEY,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        if (l == null)
          throw new (o(
            "WAWebReactionsValidationError",
          ).ReactionValidationError)(
            o("WAWebReactionsValidationError").ReactionValidationErrorCode
              .MISSING_TIMESTAMP,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        return {
          msgData: babelHelpers.extends({}, t, {
            type: o("WAWebMsgType").MSG_TYPE.REACTION,
            kind: o("WAWebMsgType").MsgKind.ReactionDecrypted,
            reactionParentKey: i,
            reactionText: a,
            reactionTimestamp: l,
            read: !1,
          }),
          contextInfo: null,
        };
      }
    }
    function s(e) {
      var t,
        n = e.text;
      if (
        n != null &&
        n.length > r("WAWebConstantsDeprecated").REACTION_CONTENT_MAX_LENGTH
      )
        throw new (o("WAWebReactionsValidationError").ReactionValidationError)(
          o("WAWebReactionsValidationError").ReactionValidationErrorCode
            .INVALID_REACTION_TEXT_LENGTH,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
            .INVALID_REACTION_TEXT,
        );
      return (t =
        o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(n)) != null
        ? t
        : o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT;
    }
    l.default = e;
  },
  98,
);
