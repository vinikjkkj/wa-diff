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
    var e, s;
    function u(e) {
      return d(o("WAWebStateUtils").unproxy(e));
    }
    function c(e) {
      return m(o("WAWebStateUtils").unproxy(e));
    }
    function d(t) {
      m(t)
        ? r("WAWebMsgMarkPlayedBridge")(
            t,
            o("WAWebFrontendMsgGetters").getChat(t).id,
          )
            .then(function () {
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
            .catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Msg:markPlayed failed",
                    ])),
                )
                .sendLogs("mark-played-failed");
            })
        : o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Msg:msg should not call sendPlayed",
              ])),
          );
    }
    function m(e) {
      return o("WAWebMsgGetters").getIsSentByMe(e) ||
        e.ack >= o("WAWebAck").ACK.PLAYED
        ? !1
        : o("WAWebMsgGetters").getIsAckPlayable(e) || e.isViewOnce;
    }
    ((l.markPlayed = u), (l.canMarkPlayed = c));
  },
  98,
);
