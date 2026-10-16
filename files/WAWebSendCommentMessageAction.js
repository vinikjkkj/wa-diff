__d(
  "WAWebSendCommentMessageAction",
  [
    "WAWebAddonDBTable",
    "WAWebAddonSendMsgData",
    "WAWebFrontendMsgGetters",
    "WAWebMsgDataFromModel",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebRichTextFormatMessageSendLogger",
    "WAWebSendAddonMsgChatAction",
    "WAWebSendCommentMessageActionUtils",
    "WAWebSendMsgResultAction",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            a = o("WAWebFrontendMsgGetters").getChat(e),
            i = new (r("WAWebMsgKey"))({
              id: yield r("WAWebMsgKey").newId(),
              remote: a.id,
              participant: n,
              fromMe: !0,
            }),
            l = o(
              "WAWebSendCommentMessageActionUtils",
            ).createCommentDecryptedMsgData({
              parentMsgKey: e.id,
              msgKey: i,
              text: t,
            }),
            s = o(
              "WAWebRichTextFormatMessageSendLogger",
            ).maybeCreateRichTextFormatMessageSendCommit(
              { body: t, type: o("WAWebMsgType").MSG_TYPE.COMMENT },
              a.id,
            ),
            u;
          if (o("WAWebAddonSendMsgData").isOptimisticAddonSendSupported(l))
            u = yield o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(l);
          else {
            var c = yield o(
              "WAWebSendCommentMessageActionUtils",
            ).createCommentMsgData(
              yield o(
                "WAWebSendCommentMessageActionUtils",
              ).encryptExtendedTextComment(
                o("WAWebMsgDataFromModel").msgDataFromMsgModel(e),
                n,
                t,
              ),
              i,
            );
            u = yield o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(c);
          }
          return (
            u.messageSendResult ===
              o("WAWebSendMsgResultAction").SendMsgResult.OK &&
              (s == null || s()),
            u
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebAddonDBTable").addonDBTable.getByMsgKey(
            o("WAWebMsgType").MSG_TYPE.COMMENT,
            e.id,
          );
          t != null &&
            (yield o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(t));
        })),
        c.apply(this, arguments)
      );
    }
    ((l.sendCommentMessage = e), (l.resendComment = u));
  },
  98,
);
