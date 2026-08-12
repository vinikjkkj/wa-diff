__d(
  "WAWebAskMetaAiQuotedMediaSend",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBotForwardCapability",
    "WAWebBotGating",
    "WAWebBotReplaceMentionWidsWithPushnames",
    "WAWebBotUtils",
    "WAWebLazyLoadedRetriable",
    "WAWebMetaAiForwardedText",
    "WAWebMsgType",
    "WAWebSendMsgResultAction",
    "WAWebSendTextMsgChatAction",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")("WAWebMediaForwardMediaMsg")
          .__setRef("WAWebAskMetaAiQuotedMediaSend")
          .load();
      }, "AskMetaAiForwardMediaMsg");
    function d(e, t) {
      if (t == null || !o("WAWebBotUtils").isMetaAiBot(e.id)) return !1;
      var n = t.id.remote;
      return n == null ||
        n.equals(e.id) ||
        !o("WAWebBotForwardCapability").canForwardMsgToMetaAi([t])
        ? !1
        : o("WAWebBotGating").isAskMetaAiImprovementEnabled();
    }
    function m(e, t) {
      if (
        t.type !== o("WAWebMsgType").MSG_TYPE.IMAGE &&
        t.type !== o("WAWebMsgType").MSG_TYPE.VIDEO
      )
        return !1;
      var n = t.id.remote;
      return (
        o("WAWebBotUtils").isMetaAiBot(e.id) &&
        n != null &&
        !n.equals(e.id) &&
        o("WAWebBotForwardCapability").canForwardMsgToMetaAi([t])
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i = a.quotedMsg;
          if (i == null || !d(t, i)) {
            yield o("WAWebSendTextMsgChatAction").sendTextMsgToChat(t, n, a);
            return;
          }
          if (i.type === o("WAWebMsgType").MSG_TYPE.CHAT) {
            var l,
              s = (l = i.body) != null ? l : "";
            try {
              s = o(
                "WAWebBotReplaceMentionWidsWithPushnames",
              ).replaceMentionsInText(
                s,
                yield o(
                  "WAWebBotReplaceMentionWidsWithPushnames",
                ).buildMentionMap(i.mentionedJidList, i.groupMentions),
              );
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[askMetaAi] failed to resolve quoted mention names, forwarding the raw body",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("ask-meta-ai-quoted-mention-name-fail");
            }
            yield o("WAWebSendTextMsgChatAction").sendTextMsgToChat(
              t,
              o("WAWebMetaAiForwardedText").composeMetaAiForwardedText(s, n),
              babelHelpers.extends({}, a, { quotedMsg: void 0 }),
            );
            return;
          }
          var u = yield f(t, i, n, a);
          u ||
            (yield o("WAWebSendTextMsgChatAction").sendTextMsgToChat(t, n, a));
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n, r) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            try {
              var i,
                l = yield c(),
                d = l.forwardMediaMsg,
                m = yield d({
                  aiThreadInfo: a.aiThreadInfo,
                  appendedText: n,
                  chat: e,
                  includeCaption: !1,
                  msg: t,
                  threadId: (i = a.threadIds) == null ? void 0 : i[0],
                }),
                p = m.messageSendResult;
              if (p === o("WAWebSendMsgResultAction").SendMsgResult.OK)
                return !0;
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[askMetaAi] quoted media send to Meta AI returned ",
                      ", keeping the reply quote",
                    ])),
                  String(p),
                )
                .sendLogs("ask-meta-ai-quoted-media-forward-fail");
            } catch (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[askMetaAi] failed to forward quoted media to Meta AI, keeping the reply quote",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("ask-meta-ai-quoted-media-forward-fail");
            }
            return !1;
          },
        )),
        g.apply(this, arguments)
      );
    }
    ((l.shouldForwardAskMetaAiQuotedMsg = d),
      (l.shouldHideAskMetaAiQuotedCaption = m),
      (l.sendAskMetaAiAwareTextMsg = p));
  },
  98,
);
