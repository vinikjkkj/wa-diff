__d(
  "WAWebRetryScheduledMsgAction",
  [
    "WALogger",
    "WAWebChatCollection",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebScheduledMsgStore",
    "WAWebSendScheduledMsgAction",
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
                  "[scheduled_msg][retry] no reveal-key for ",
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
                      "[scheduled_msg][retry] chat ",
                      " not in collection",
                    ])),
                  t,
                )
                .sendLogs("scheduled-msg-retry-no-chat"),
              r("err")("[scheduled_msg] cannot resolve chat for retry")
            );
          var l = yield o("WAWebScheduledMsgStore").decryptScheduledMsgBody(a);
          if (l == null || l === "")
            throw (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][retry] could not recover body for ",
                      "",
                    ])),
                  n,
                )
                .sendLogs("scheduled-msg-retry-no-body"),
              r("err")("[scheduled_msg] cannot recover body for retry")
            );
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][retry] re-scheduling ",
                "",
              ])),
            n,
          );
          try {
            yield o("WAWebSendScheduledMsgAction").sendScheduledTextMsgToChat(
              i,
              l,
              a.scheduledTimestampS,
              {},
              !1,
            );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][retry] re-schedule failed for ",
                      "",
                    ])),
                  n,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("scheduled-msg-retry-failed"),
              e
            );
          }
          yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(a.msgId);
        })),
        p.apply(this, arguments)
      );
    }
    l.retryScheduledMsg = m;
  },
  98,
);
