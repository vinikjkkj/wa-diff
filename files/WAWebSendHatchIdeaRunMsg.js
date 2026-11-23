__d(
  "WAWebSendHatchIdeaRunMsg",
  [
    "fbt",
    "WALogger",
    "WAWebBotUtils",
    "WAWebFindChatAction",
    "WAWebHatchAccountSnapshot",
    "WAWebHatchIdeaExecutePayload",
    "WAWebHatchLogging",
    "WAWebL10N",
    "WAWebSendMsgResultAction",
    "WAWebSendTextMsgChatAction",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u;
    async function c(t) {
      var n = t.card,
        a = t.scope,
        i = o("WAWebHatchIdeaExecutePayload").buildHatchIdeaExecuteRequest({
          ideaCardId: n.id,
          scope: a,
          locale: o("WAWebHatchIdeaExecutePayload").toHatchIdeaLocale(
            r("WAWebL10N").getLocale(),
          ),
        });
      if (i != null) {
        var l = o("WAWebHatchAccountSnapshot").readHatchAccountSnapshot();
        if (l == null) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-ideas: run message not sent, account unavailable",
              ])),
          );
          return;
        }
        var s = await o("WAWebFindChatAction").findOrCreateLatestChat(
            o("WAWebBotUtils").HATCH_BOT_FBID_WID,
            "hatchIdeasDrawer",
          ),
          c = s.chat;
        if (
          !o("WAWebHatchAccountSnapshot").isSameHatchAccount(
            l,
            o("WAWebHatchAccountSnapshot").readHatchAccountSnapshot(),
          )
        ) {
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-ideas: run message not sent, account changed or unavailable",
              ])),
          );
          return;
        }
        var m = await o("WAWebSendTextMsgChatAction").sendTextMsgToChat(
          c,
          d(n.title),
          { hatchRequest: i },
        );
        return (
          (m == null ? void 0 : m.messageSendResult) ===
            o("WAWebSendMsgResultAction").SendMsgResult.OK &&
            o("WAWebHatchLogging").logHatchIdeaAction("prompt_sent"),
          m
        );
      }
    }
    function d(e) {
      var t = s._(/*BTDS*/ "").toString(),
        n = e
          .split(/\s*\n\s*/)
          .join(" ")
          .trim();
      return n === ""
        ? t
        : "> " +
            n +
            `
` +
            t;
    }
    l.sendHatchIdeaRunMsg = c;
  },
  226,
);
