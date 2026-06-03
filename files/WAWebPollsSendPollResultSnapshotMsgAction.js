__d(
  "WAWebPollsSendPollResultSnapshotMsgAction",
  [
    "Promise",
    "WATimeUtils",
    "WAWebAck",
    "WAWebChatGetters",
    "WAWebGetEphemeralFieldsMsgActionsUtils",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebNewsletterSendMsgAction",
    "WAWebSendMsgChatAction",
    "WAWebViewMode.flow",
    "WAWebWid",
    "WAWebWidFactory",
    "WAXplatTrim",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.chat,
            i = t.pollResultSnapshot,
            l = t.pollType,
            s = t.quotedMsg,
            u = yield c({
              pollResultSnapshot: i,
              chat: a,
              quotedMsg: s,
              pollType: l,
            }),
            d = r("WAWebWid").isNewsletter(a.id);
          d
            ? yield o(
                "WAWebNewsletterSendMsgAction",
              ).sendNewsletterPollResultSnapshotMsg({ msgData: u, chat: a })
            : yield (e || (e = n("Promise"))).all(
                o("WAWebSendMsgChatAction").addAndSendMsgToChat(a, u),
              );
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.chat,
            a = e.pollResultSnapshot,
            i = e.pollType,
            l = e.quotedMsg,
            s = n.id,
            u = o("WAWebLidMigrationUtils").getMeUserLidOrJidForChat(
              n,
              o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
            ),
            c =
              (t = l == null ? void 0 : l.msgContextInfo(n.id)) != null
                ? t
                : {};
          return babelHelpers.extends(
            {
              id: new (r("WAWebMsgKey"))({
                from: u,
                to: s,
                id: yield r("WAWebMsgKey").newId(),
                participant: o("WAWebChatGetters").getIsGroup(n)
                  ? o("WAWebWidFactory").asUserWidOrThrow(u)
                  : void 0,
                selfDir: "out",
              }),
              type: o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT,
              kind: o("WAWebMsgType").MsgKind.PollResultSnapshot,
              t: o("WATimeUtils").unixTime(),
              from: u,
              to: s,
              pollType: i,
              isNewMsg: !0,
              local: !0,
              ack: o("WAWebAck").ACK.CLOCK,
              pollName: o("WAXplatTrim").trim(a.name),
              pollVotesSnapshot: a.pollVotesSnapshot,
            },
            c,
            o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(n),
            { viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE },
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.sendPollResultSnapshotMsg = s;
  },
  98,
);
