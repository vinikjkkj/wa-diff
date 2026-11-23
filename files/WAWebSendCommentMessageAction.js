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
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WAWebUserUtils").getMeLidUserOrThrow(),
        a = o("WAWebFrontendMsgGetters").getChat(e),
        i = new (r("WAWebMsgKey"))({
          id: await r("WAWebMsgKey").newId(),
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
        u = await o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(l);
      else {
        var c = await o(
          "WAWebSendCommentMessageActionUtils",
        ).createCommentMsgData(
          await o(
            "WAWebSendCommentMessageActionUtils",
          ).encryptExtendedTextComment(
            o("WAWebMsgDataFromModel").msgDataFromMsgModel(e),
            n,
            t,
          ),
          i,
        );
        u = await o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(c);
      }
      return (
        u.messageSendResult ===
          o("WAWebSendMsgResultAction").SendMsgResult.OK &&
          (s == null || s()),
        u
      );
    }
    async function s(e) {
      var t = await o("WAWebAddonDBTable").addonDBTable.getByMsgKey(
        o("WAWebMsgType").MSG_TYPE.COMMENT,
        e.id,
      );
      t != null &&
        (await o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(t));
    }
    ((l.sendCommentMessage = e), (l.resendComment = s));
  },
  98,
);
