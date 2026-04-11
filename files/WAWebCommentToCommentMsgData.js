__d(
  "WAWebCommentToCommentMsgData",
  ["WAWebMsgKeyUtils", "WAWebMsgType", "WAWebViewMode.flow"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      return babelHelpers.extends(
        { id: e.id },
        o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
          e.id,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
        ),
        {
          type: o("WAWebMsgType").MSG_TYPE.COMMENT,
          kind: o("WAWebMsgType").MsgKind.CommentDecrypted,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          parentMsgKey: e.parentMsgKey,
          body: e.body,
          t: e.t,
          read: e.read,
          ack: (t = e.ack) != null ? t : void 0,
          messageSecret: e.messageSecret,
        },
      );
    }
    l.commentToCommentMsgData = e;
  },
  98,
);
