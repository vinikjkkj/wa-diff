__d(
  "WAWebSendHatchIdeaRunMsg",
  [
    "fbt",
    "WALogger",
    "WAWebBotUtils",
    "WAWebFindChatAction",
    "WAWebHatchIdeaExecutePayload",
    "WAWebHatchIdeasIconAccount",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchLogging",
    "WAWebL10N",
    "WAWebSendMsgResultAction",
    "WAWebSendTextMsgChatAction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
            var l = m();
            if (l == null) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-ideas: run message not sent, account unavailable",
                  ])),
              );
              return;
            }
            var s = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                o("WAWebBotUtils").HATCH_BOT_FBID_WID,
                "hatchIdeasDrawer",
              ),
              c = s.chat;
            if (!p(l, m())) {
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-ideas: run message not sent, account changed or unavailable",
                  ])),
              );
              return;
            }
            var d = yield o("WAWebSendTextMsgChatAction").sendTextMsgToChat(
              c,
              _(n.title),
              { hatchRequest: i },
            );
            return (
              (d == null ? void 0 : d.messageSendResult) ===
                o("WAWebSendMsgResultAction").SendMsgResult.OK &&
                o("WAWebHatchLogging").logHatchIdeaAction("prompt_sent"),
              d
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      try {
        var e;
        return r(
          "WAWebHatchLinkedStatusManager",
        ).getLastConfirmedLinkedStatusState() === "unlinked"
          ? null
          : {
              owner: o("WAWebHatchIdeasIconAccount").readHatchIdeasOwnerToken(),
              channel:
                (e = r("WAWebHatchLinkedStatusManager").getLinkedStatus()) ==
                null
                  ? void 0
                  : e.channelFbid,
            };
      } catch (e) {
        return null;
      }
    }
    function p(e, t) {
      return t != null && t.owner === e.owner && t.channel === e.channel;
    }
    function _(e) {
      var t = s._(/*BTDS*/ "Let's do it!").toString(),
        n = e
          .split(/\s*\n\s*/)
          .join(" ")
          .trim();
      return n === "" ? t : "> " + n + "\n" + t;
    }
    l.sendHatchIdeaRunMsg = c;
  },
  226,
);
