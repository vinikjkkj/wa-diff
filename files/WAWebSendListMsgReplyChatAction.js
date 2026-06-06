__d(
  "WAWebSendListMsgReplyChatAction",
  [
    "WATimeUtils",
    "WAWebAck",
    "WAWebFrontendMsgGetters",
    "WAWebMsgKey",
    "WAWebProtobufsE2E.pb",
    "WAWebSendMsgChatAction",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WAWebFrontendMsgGetters").getChat(e.unsafe()),
        a = e.msgContextInfo(n.id),
        i = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        l = t.title || "",
        s = t.description || "",
        u = [l, s].join(`
`),
        c = babelHelpers.extends(
          {
            type: "list_response",
            kind: "listResponse",
            ack: o("WAWebAck").ACK.CLOCK,
            from: i,
            id: new (r("WAWebMsgKey"))({
              from: i,
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
          a,
          {
            listResponse: {
              listType: o("WAWebProtobufsE2E.pb")
                .Message$ListResponseMessage$ListType.SINGLE_SELECT,
              title: t.title,
              description: t.description,
              singleSelectReply: { selectedRowId: t.rowId },
            },
            viewMode: "VISIBLE",
            body: u,
          },
        );
      return o("WAWebSendMsgChatAction").addAndSendMsgToChat(n, c)[1];
    }
    l.default = e;
  },
  98,
);
