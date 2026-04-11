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
            });
          if (o("WAWebAddonSendMsgData").isOptimisticAddonSendSupported(l))
            return o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(l);
          var s = yield o(
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
          return o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(s);
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
