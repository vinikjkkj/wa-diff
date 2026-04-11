__d(
  "WAWebReactionsParseReactionEncMessageProto",
  [
    "WAWebE2EProtoUtils",
    "WAWebMsgType",
    "WAWebReactionEncMessageValidationError",
    "WAWebWamEnumE2eFailureReason",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = n.encReactionMessage;
      if (r != null) {
        var a = r.encIv,
          i = r.encPayload,
          l = o(
            "WAWebE2EProtoUtils",
          ).translateRegularMessageKeyToLocalReference(r.targetMessageKey, t);
        if (l == null)
          throw new (o(
            "WAWebReactionEncMessageValidationError",
          ).ReactionEncMessageValidationError)(
            o("WAWebReactionEncMessageValidationError")
              .ReactionEncValidationErrorCode.MISSING_TARGET_MSG_KEY,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_PROTOCOL_BUFFER,
          );
        if (a == null)
          throw new (o(
            "WAWebReactionEncMessageValidationError",
          ).ReactionEncMessageValidationError)(
            o("WAWebReactionEncMessageValidationError")
              .ReactionEncValidationErrorCode.INVALID_ENC_IV,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_PROTOCOL_BUFFER,
          );
        if (i == null)
          throw new (o(
            "WAWebReactionEncMessageValidationError",
          ).ReactionEncMessageValidationError)(
            o("WAWebReactionEncMessageValidationError")
              .ReactionEncValidationErrorCode.INVALID_ENC_PAYLOAD,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_PROTOCOL_BUFFER,
          );
        return {
          msgData: babelHelpers.extends({}, t, {
            type: o("WAWebMsgType").MSG_TYPE.REACTION_ENC,
            kind: o("WAWebMsgType").MsgKind.ReactionEncrypted,
            encIv: a,
            encPayload: i,
            targetMessageKey: l,
          }),
          contextInfo: null,
        };
      }
    }
    l.default = e;
  },
  98,
);
