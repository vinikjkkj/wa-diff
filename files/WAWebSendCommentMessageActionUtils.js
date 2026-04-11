__d(
  "WAWebSendCommentMessageActionUtils",
  [
    "WATimeUtils",
    "WAWebAck",
    "WAWebCommentUtils",
    "WAWebMessagingGatingUtils",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return o("WAWebCommentUtils").getEncCommentsFields(e, t, {
            conversation: n,
          });
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return o("WAWebCommentUtils").getEncCommentsFields(e, t, {
            extendedTextMessage: { text: n, endCardTiles: [] },
          });
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            o(
              "WAWebMessagingGatingUtils",
            ).isDualEncryptedReportingTokenSendingEnabled() && {
              messageSecret: self.crypto.getRandomValues(new Uint8Array(32)),
            },
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
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
        },
        o(
          "WAWebMessagingGatingUtils",
        ).isDualEncryptedReportingTokenSendingEnabled() && {
          messageSecret: self.crypto.getRandomValues(new Uint8Array(32)),
        },
      );
    }
    ((l.encryptConversationComment = e),
      (l.encryptExtendedTextComment = u),
      (l.createCommentMsgData = d),
      (l.createCommentDecryptedMsgData = p));
  },
  98,
);
