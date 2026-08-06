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
        : o("WAWebBotGating").isAskMetaAiMediaForwardEnabled();
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = n.quotedMsg;
          if (r != null && c(e, r)) {
            var a = yield p(e, r, t, n);
            if (a) return;
          }
          yield o("WAWebSendTextMsgChatAction").sendTextMsgToChat(e, t, n);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n, r) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        _.apply(this, arguments)
      );
    }
    ((l.shouldForwardAskMetaAiQuotedMedia = c),
      (l.sendAskMetaAiAwareTextMsg = d));
  },
  98,
);
