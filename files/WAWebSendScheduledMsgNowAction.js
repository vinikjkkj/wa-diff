__d(
  "WAWebSendScheduledMsgNowAction",
  [
    "WALogger",
    "WAWebChatCollection",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebScheduledMsgStore",
    "WAWebSendTextMsgChatAction",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = yield o(
            "WAWebScheduledMsgRevealKeyStore",
          ).getRevealKeyByMsgId(n);
          if (a == null) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][send_now] no reveal-key for ",
                  "",
                ])),
              n,
            );
            return;
          }
          var i = o("WAWebChatCollection").ChatCollection.get(t);
          if (i == null)
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][send_now] chat ",
                      " not in collection",
                    ])),
                  t,
                )
                .sendLogs("scheduled-msg-send-now-no-chat"),
              r("err")("[scheduled_msg] cannot resolve chat for send now")
            );
          var l = yield o("WAWebScheduledMsgStore").decryptScheduledMsgBody(a);
          if (l == null || l === "")
            throw (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][send_now] could not recover body for ",
                      "",
                    ])),
                  n,
                )
                .sendLogs("scheduled-msg-send-now-no-body"),
              r("err")("[scheduled_msg] cannot recover body for send now")
            );
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][send_now] sending ",
                " now",
              ])),
            n,
          );
          try {
            yield o("WAWebSendTextMsgChatAction").sendTextMsgToChat(i, l);
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][send_now] send failed for ",
                      "",
                    ])),
                  n,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("scheduled-msg-send-now-failed"),
              e
            );
          }
          yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(a.msgId);
        })),
        p.apply(this, arguments)
      );
    }
    l.sendScheduledMsgNow = m;
  },
  98,
);
