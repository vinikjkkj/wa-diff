__d(
  "WAWebSendCommentMessageActionUtils",
  [
    "WATimeUtils",
    "WAWebAck",
    "WAWebCommentUtils",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      return o("WAWebCommentUtils").getEncCommentsFields(e, t, {
        conversation: n,
      });
    }
    async function s(e, t, n) {
      return o("WAWebCommentUtils").getEncCommentsFields(e, t, {
        extendedTextMessage: { text: n, endCardTiles: [] },
      });
    }
    async function u(e, t) {
      return babelHelpers.extends(
        { id: t },
        o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
          t,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
        ),
        {
          type: o("WAWebMsgType").MSG_TYPE.COMMENT,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          kind: o("WAWebMsgType").MsgKind.CommentEncrypted,
          t: o("WATimeUtils").unixTime(),
          addonEncrypted: !0,
          ack: o("WAWebAck").ACK.CLOCK,
        },
        e,
        { messageSecret: self.crypto.getRandomValues(new Uint8Array(32)) },
      );
    }
    function c(e) {
      var t = e.msgKey,
        n = e.parentMsgKey,
        r = e.text;
      return babelHelpers.extends(
        { id: t },
        o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
          t,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
        ),
        {
          type: o("WAWebMsgType").MSG_TYPE.COMMENT,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          kind: o("WAWebMsgType").MsgKind.CommentDecrypted,
          t: o("WATimeUtils").unixTime(),
          ack: o("WAWebAck").ACK.CLOCK,
          parentMsgKey: n,
          body: r,
          read: !0,
          messageSecret: self.crypto.getRandomValues(new Uint8Array(32)),
        },
      );
    }
    ((l.encryptConversationComment = e),
      (l.encryptExtendedTextComment = s),
      (l.createCommentMsgData = u),
      (l.createCommentDecryptedMsgData = c));
  },
  98,
);
