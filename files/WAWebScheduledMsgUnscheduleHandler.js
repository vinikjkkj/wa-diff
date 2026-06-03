__d(
  "WAWebScheduledMsgUnscheduleHandler",
  ["WALogger", "WAWebScheduledMsgRevealKeyStore", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            r = t.toString(),
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
            i == null)
          ) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][unschedule] no row for ",
                  "/",
                  "",
                ])),
              r,
              a,
            );
            return;
          }
          var l = (n = i.chatId) != null ? n : "<unknown>";
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][unschedule] cleanup msg=",
                " chat=",
                "",
              ])),
            i.msgId,
            l,
          ),
            yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(
              i.msgId,
            ));
        })),
        c.apply(this, arguments)
      );
    }
    l.handleScheduledMsgUnschedule = u;
  },
  98,
);
