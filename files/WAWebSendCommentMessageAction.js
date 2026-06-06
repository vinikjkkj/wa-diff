__d(
  "WAWebSendCommentMessageAction",
  [
    "WAWebAddonDBTable",
    "WAWebAddonSendMsgData",
    "WAWebFrontendMsgGetters",
    "WAWebMsgDataFromModel",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSendAddonMsgChatAction",
    "WAWebSendCommentMessageActionUtils",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
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
        });
      if (o("WAWebAddonSendMsgData").isOptimisticAddonSendSupported(l))
        return o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(l);
      var s = await o(
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
      return o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(s);
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
