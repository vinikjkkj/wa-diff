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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return p(o("WAWebStateUtils").unproxy(e));
    }
    function m(e) {
      return _(o("WAWebStateUtils").unproxy(e));
    }
    function p(t) {
      _(t)
        ? (r("WAWebSendPlayedReceiptJob")(
            t,
            o("WAWebFrontendMsgGetters").getChat(t).id,
          ).catch(function (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Msg:sendPlayed failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("send-played-failed");
          }),
          (c || (c = n("Promise")))
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
            .catch(function (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Msg:markPlayed failed",
                    ])),
                )
                .sendLogs("mark-played-failed");
            }))
        : o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Msg:msg should not call sendPlayed",
              ])),
          );
    }
    function _(e) {
      return f({
        ack: e.ack,
        isAckPlayable: o("WAWebMsgGetters").getIsAckPlayable(e),
        isSentByMe: o("WAWebMsgGetters").getIsSentByMe(e),
        isViewOnce: e.isViewOnce,
      });
    }
    function f(e) {
      var t = e.ack,
        n = e.isAckPlayable,
        r = e.isSentByMe,
        a = e.isViewOnce;
      return r || (t != null && t >= o("WAWebAck").ACK.PLAYED) ? !1 : n || a;
    }
    ((l.markPlayed = d), (l.canMarkPlayed = m), (l.canMarkPlayedFor = f));
  },
  98,
);
