__d(
  "WAWebRetryScheduledMsgAction",
  [
    "WALogger",
    "WAWebChatCollection",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebScheduledMsgStore",
    "WAWebSendScheduledMsgAction",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    async function m(t, n) {
      var a = await o("WAWebScheduledMsgRevealKeyStore").getRevealKeyByMsgId(n);
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
      var l = await o("WAWebScheduledMsgStore").decryptScheduledMsgBody(a);
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
        await o("WAWebSendScheduledMsgAction").sendScheduledTextMsgToChat({
          addSystemBubble: !1,
          chat: i,
          options: {},
          scheduledTimestampS: a.scheduledTimestampS,
          text: l,
        });
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
      await o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(a.msgId);
    }
    l.retryScheduledMsg = m;
  },
  98,
);
