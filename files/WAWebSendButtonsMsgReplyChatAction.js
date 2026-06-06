__d(
  "WAWebSendButtonsMsgReplyChatAction",
  [
    "WATimeUtils",
    "WAWebAck",
    "WAWebMsgKey",
    "WAWebProtobufsE2E.pb",
    "WAWebSendMsgChatAction",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      var a = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        i = e.msgContextInfo(n.id),
        l = babelHelpers.extends(
          {
            type: "buttons_response",
            kind: "buttonsResponse",
            ack: o("WAWebAck").ACK.CLOCK,
            from: a,
            id: new (r("WAWebMsgKey"))({
              from: a,
              to: n.id,
              id: await r("WAWebMsgKey").newId(),
              participant: void 0,
              selfDir: "out",
            }),
            local: !0,
            isNewMsg: !0,
            t: o("WATimeUtils").unixTime(),
            to: n.id,
          },
          i,
          {
            buttonsResponse: {
              selectedButtonId: t.id,
              selectedDisplayText: t.displayText,
              type: o("WAWebProtobufsE2E.pb")
                .Message$ButtonsResponseMessage$Type.DISPLAY_TEXT,
            },
            body: t.displayText || "",
            viewMode: "VISIBLE",
          },
        );
      return o("WAWebSendMsgChatAction").addAndSendMsgToChat(n, l)[1];
    }
    l.default = e;
  },
  98,
);
