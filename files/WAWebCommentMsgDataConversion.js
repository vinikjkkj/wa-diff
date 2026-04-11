__d(
  "WAWebCommentMsgDataConversion",
  [
    "WANullthrows",
    "WAWebCommentMessageValidationError",
    "WAWebMsgType",
    "WAWebViewMode.flow",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t, n;
      return (t = e.conversation) != null
        ? t
        : (n = e.extendedTextMessage) == null
          ? void 0
          : n.text;
    }
    function s(t, n) {
      var a = e(t);
      if (a == null)
        throw new (o(
          "WAWebCommentMessageValidationError",
        ).CommentMessageValidationError)(
          o("WAWebCommentMessageValidationError")
            .CommentMessageValidationErrorCode.MISSING_COMMENT_CONTENT,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      return {
        ack: n.ack,
        body: a,
        from: n.from,
        to: n.to,
        id: n.id,
        parentMsgKey: n.targetMessageKey,
        author: o("WAWebWidFactory").asUserWidOrThrow(
          r("WANullthrows")(n.author),
        ),
        t: n.t,
        type: o("WAWebMsgType").MSG_TYPE.COMMENT,
        kind: o("WAWebMsgType").MsgKind.CommentDecrypted,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        read: !1,
      };
    }
    ((l.extractCommentTextFromMessage = e),
      (l.convertMessageToCommentMsgData = s));
  },
  98,
);
