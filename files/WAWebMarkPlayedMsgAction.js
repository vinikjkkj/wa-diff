__d(
  "WAWebMarkPlayedMsgAction",
  [
    "Promise",
    "WALogger",
    "WAWebAck",
    "WAWebChatThreadLogging",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebSendPlayedReceiptJob",
    "WAWebStateUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return m(o("WAWebStateUtils").unproxy(e));
    }
    function d(e) {
      return p(o("WAWebStateUtils").unproxy(e));
    }
    function m(t) {
      p(t)
        ? (r("WAWebSendPlayedReceiptJob")(
            t,
            o("WAWebFrontendMsgGetters").getChat(t).id,
          ),
          (u || (u = n("Promise")))
            .resolve()
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
            }))
        : o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Msg:msg should not call sendPlayed",
              ])),
          );
    }
    function p(e) {
      return o("WAWebMsgGetters").getIsSentByMe(e) ||
        e.ack >= o("WAWebAck").ACK.PLAYED
        ? !1
        : o("WAWebMsgGetters").getIsAckPlayable(e) || e.isViewOnce;
    }
    ((l.markPlayed = c), (l.canMarkPlayed = d));
  },
  98,
);
