__d(
  "WAWebAskMetaAiQuotedMediaSend",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBotForwardCapability",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebLazyLoadedRetriable",
    "WAWebMsgType",
    "WAWebSendMsgResultAction",
    "WAWebSendTextMsgChatAction",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")("WAWebMediaForwardMediaMsg")
          .__setRef("WAWebAskMetaAiQuotedMediaSend")
          .load();
      }, "AskMetaAiForwardMediaMsg");
    function c(e, t) {
      if (
        t == null ||
        !o("WAWebBotUtils").isMetaAiBot(e.id) ||
        t.type === o("WAWebMsgType").MSG_TYPE.CHAT
      )
        return !1;
      var n = t.id.remote;
      return n == null ||
        n.equals(e.id) ||
        !o("WAWebBotForwardCapability").canForwardMsgToMetaAi([t])
        ? !1
        : o("WAWebBotGating").isAskMetaAiImprovementEnabled();
    }
    function d(e, t) {
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
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = n.quotedMsg;
          if (r != null && c(e, r)) {
            var a = yield _(e, r, t, n);
            if (a) return;
          }
          yield o("WAWebSendTextMsgChatAction").sendTextMsgToChat(e, t, n);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n, r) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i) {
            try {
              var l,
                c = yield u(),
                d = c.forwardMediaMsg,
                m = yield d({
                  aiThreadInfo: i.aiThreadInfo,
                  appendedText: a,
                  chat: t,
                  includeCaption: !1,
                  msg: n,
                  threadId: (l = i.threadIds) == null ? void 0 : l[0],
                }),
                p = m.messageSendResult;
              if (p === o("WAWebSendMsgResultAction").SendMsgResult.OK)
                return !0;
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[askMetaAi] quoted media send to Meta AI returned ",
                      ", keeping the reply quote",
                    ])),
                  String(p),
                )
                .sendLogs("ask-meta-ai-quoted-media-forward-fail");
            } catch (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[askMetaAi] failed to forward quoted media to Meta AI, keeping the reply quote",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("ask-meta-ai-quoted-media-forward-fail");
            }
            return !1;
          },
        )),
        f.apply(this, arguments)
      );
    }
    ((l.shouldForwardAskMetaAiQuotedMedia = c),
      (l.shouldHideAskMetaAiQuotedCaption = d),
      (l.sendAskMetaAiAwareTextMsg = m));
  },
  98,
);
