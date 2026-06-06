__d(
  "WAWebScheduledMsgUnscheduleHandler",
  ["WALogger", "WAWebScheduledMsgRevealKeyStore"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n,
        r = t.toString(),
        a = t.id,
        i = await o("WAWebScheduledMsgRevealKeyStore").getRevealKeyByMsgId(r);
      if (
        (i == null &&
          r !== a &&
          (i = await o("WAWebScheduledMsgRevealKeyStore").getRevealKeyByMsgId(
            a,
          )),
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
        await o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(i.msgId));
    }
    l.handleScheduledMsgUnschedule = u;
  },
  98,
);
