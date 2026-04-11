__d(
  "WAWebParseEncCommentMessageProto",
  [
    "WAWebCommentMessageValidationError",
    "WAWebE2EProtoUtils",
    "WAWebMsgType",
    "WAWebWamEnumE2eFailureReason",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = n.encCommentMessage;
      if (r != null) {
        var a = r.encIv,
          i = r.encPayload,
          l = r.targetMessageKey;
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
        var s = o(
          "WAWebE2EProtoUtils",
        ).translateRegularMessageKeyToLocalReference(l, t);
        if (s == null)
          throw new (o(
            "WAWebCommentMessageValidationError",
          ).CommentMessageValidationError)(
            o("WAWebCommentMessageValidationError")
              .CommentMessageValidationErrorCode.MISSING_COMMENT_MESSAGE_KEY,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        if (a.byteLength !== 12)
          throw new (o(
            "WAWebCommentMessageValidationError",
          ).CommentMessageValidationError)(
            o("WAWebCommentMessageValidationError")
              .CommentMessageValidationErrorCode.INVALID_COMMENT_ENC_IV,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        return {
          msgData: babelHelpers.extends({}, t, {
            type: o("WAWebMsgType").MSG_TYPE.COMMENT,
            kind: o("WAWebMsgType").MsgKind.CommentEncrypted,
            addonEncrypted: !0,
            encIv: a,
            encPayload: i,
            targetMessageKey: s,
          }),
          contextInfo: null,
        };
      }
    }
    l.default = e;
  },
  98,
);
