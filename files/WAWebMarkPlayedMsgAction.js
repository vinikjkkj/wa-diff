__d(
  "WAWebMarkPlayedMsgAction",
  [
    "WALogger",
    "WAWebAck",
    "WAWebChatThreadLogging",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebMsgMarkPlayedBridge",
    "WAWebStateUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return c(o("WAWebStateUtils").unproxy(e));
    }
    function u(e) {
      return d(o("WAWebStateUtils").unproxy(e));
    }
    function c(t) {
      d(t)
        ? r("WAWebMsgMarkPlayedBridge")(
            t,
            o("WAWebFrontendMsgGetters").getChat(t).id,
          ).then(function () {
            ((t.ack = o("WAWebAck").ACK.PLAYED),
              t.isViewOnce &&
                o(
                  "WAWebChatThreadLogging",
                ).handleActivitiesForChatThreadLogging([
                  {
                    activityType: "viewOnceOpen",
                    ts: t.t,
                    chatId: t.id.remote,
                  },
                ]));
          })
        : o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Msg:msg should not call sendPlayed",
              ])),
          );
    }
    function d(e) {
      return o("WAWebMsgGetters").getIsSentByMe(e) ||
        e.ack >= o("WAWebAck").ACK.PLAYED
        ? !1
        : o("WAWebMsgGetters").getIsAckPlayable(e) || e.isViewOnce;
    }
    ((l.markPlayed = s), (l.canMarkPlayed = u));
  },
  98,
);
