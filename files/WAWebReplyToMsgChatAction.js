__d(
  "WAWebReplyToMsgChatAction",
  [
    "WANullthrows",
    "WATimeUtils",
    "WAWebChatEntryPoint",
    "WAWebChatGroupUtils",
    "WAWebChatThreadLogging",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebFindChatAction",
    "WAWebFrontendMsgGetters",
    "WAWebMsgModelUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("WANullthrows")(e.author),
            n = o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(
              t,
              "private_reply",
            );
          if (n != null) {
            var a = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                n,
                "privateReplyToMsg",
              ),
              i = a.chat,
              l = yield o("WAWebCmd").Cmd.openChatBottom({
                chat: i,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                  .PrivateReply,
              });
            l &&
              (o(
                "WAWebComposeBoxActions",
              ).ComposeBoxActions.addMsgSendingLogAttributes(i, {
                handleMultiple: function () {
                  o(
                    "WAWebChatThreadLogging",
                  ).handleActivitiesForChatThreadLogging([
                    {
                      activityType: "groupPrivateReplies",
                      ts: o("WATimeUtils").unixTime(),
                      chatId: i.id,
                    },
                  ]);
                },
              }),
              (i.composeQuotedMsg =
                o("WAWebMsgModelUtils").createMsgSnapshot(e)),
              o("WAWebFrontendMsgGetters").getChat(e) &&
                (i.composeQuotedMsgRemoteJid = o(
                  "WAWebFrontendMsgGetters",
                ).getChat(e).id));
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);
