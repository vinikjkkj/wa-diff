__d(
  "WAWebReplyToMsgChatAction",
  [
    "WATimeUtils",
    "WAWebChatEntryPoint",
    "WAWebChatThreadLogging",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebDeactivatedContactUtils",
    "WAWebFindChatAction",
    "WAWebFrontendMsgGetters",
    "WAWebGroupAgentOneToOneContact",
    "WAWebMsgModelUtils",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = r("nullthrows")(e.author),
        n = o(
          "WAWebGroupAgentOneToOneContact",
        ).getGroupAgentAwareOneToOneContact(
          t,
          o("WAWebFrontendMsgGetters").getChat(e),
          "private_reply",
        );
      if (n != null) {
        var a = await o("WAWebFindChatAction").findOrCreateLatestChat(
            n,
            "privateReplyToMsg",
          ),
          i = a.chat,
          l = await o("WAWebCmd").Cmd.openChatBottom({
            chat: i,
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
              .PrivateReply,
          });
        !l ||
          o("WAWebDeactivatedContactUtils").isDeactivatedChatReplyBlocked(i) ||
          (o(
            "WAWebComposeBoxActions",
          ).ComposeBoxActions.addMsgSendingLogAttributes(i, {
            handleMultiple: function () {
              o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([
                {
                  activityType: "groupPrivateReplies",
                  ts: o("WATimeUtils").unixTime(),
                  chatId: i.id,
                },
              ]);
            },
          }),
          (i.composeQuotedMsg = o("WAWebMsgModelUtils").createMsgSnapshot(e)),
          o("WAWebFrontendMsgGetters").getChat(e) &&
            (i.composeQuotedMsgRemoteJid = o("WAWebFrontendMsgGetters").getChat(
              e,
            ).id));
      }
    }
    l.default = e;
  },
  98,
);
