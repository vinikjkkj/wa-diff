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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebFrontendMsgGetters").getChat(e.unsafe()),
            a = e.msgContextInfo(n.id),
            i = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            l = t.title || "",
            s = t.description || "",
            u = [l, s].join("\n"),
            c = babelHelpers.extends(
              {
                type: "list_response",
                kind: "listResponse",
                ack: o("WAWebAck").ACK.CLOCK,
                from: i,
                id: new (r("WAWebMsgKey"))({
                  from: i,
                  to: n.id,
                  id: yield r("WAWebMsgKey").newId(),
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
        })),
        s.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);
