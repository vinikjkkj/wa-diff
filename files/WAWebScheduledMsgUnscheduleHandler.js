__d(
  "WAWebScheduledMsgUnscheduleHandler",
  [
    "WALogger",
    "WAWebDBProcessRevokeMsgs",
    "WAWebScheduledMsgRevealKeyStore",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = t.toString(),
            a = t.id,
            i = yield o("WAWebScheduledMsgRevealKeyStore").getRevealKeyByMsgId(
              r,
            );
          if (
            (i == null &&
              r !== a &&
              (i = yield o(
                "WAWebScheduledMsgRevealKeyStore",
              ).getRevealKeyByMsgId(a)),
            i != null)
          ) {
            var l,
              u = (l = i.chatId) != null ? l : "<unknown>";
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][unschedule] cleanup msg=",
                  " chat=",
                  "",
                ])),
              i.msgId,
              u,
            ),
              yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(
                i.msgId,
              ));
          } else
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][unschedule] no reveal-key row for ",
                  "/",
                  "",
                ])),
              r,
              a,
            );
          var c = n.newMsgKey,
            d = n.revokeTimestamp,
            m = n.sender;
          m != null &&
            (yield o("WAWebDBProcessRevokeMsgs").processRevokeMsgs([
              {
                revokeMsgKey: t,
                newMsgKey: c,
                timestamp: d,
                subtype: "sender_revoke",
                sender: m,
                revokeTimestamp: d,
                skipRevokeWindow: !0,
              },
            ]));
        })),
        c.apply(this, arguments)
      );
    }
    l.handleScheduledMsgUnschedule = u;
  },
  98,
);
