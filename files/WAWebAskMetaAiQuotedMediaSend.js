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
    "WAWebPathfinderAccountToken",
    "WAWebSendMsgResultAction",
    "WAWebSendTextMsgChatAction",
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
    async function p(t, n, a) {
      var i = a.quotedMsg;
      if (i == null || !d(t, i)) {
        var l = await o("WAWebSendTextMsgChatAction").sendTextMsgToChat(
          t,
          n,
          a,
        );
        return (
          (l == null ? void 0 : l.messageSendResult) ===
          o("WAWebSendMsgResultAction").SendMsgResult.OK
        );
      }
      var s = o(
        "WAWebPathfinderAccountToken",
      ).resolvePathfinderCaptureAccountToken(a.pathfinderAccountToken);
      if (i.type === o("WAWebMsgType").MSG_TYPE.CHAT) {
        var u,
          c = (u = i.body) != null ? u : "";
        try {
          c = o(
            "WAWebBotReplaceMentionWidsWithPushnames",
          ).replaceMentionsInText(
            c,
            await o("WAWebBotReplaceMentionWidsWithPushnames").buildMentionMap(
              i.mentionedJidList,
              i.groupMentions,
            ),
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
        var m = await o("WAWebSendTextMsgChatAction").sendTextMsgToChat(
          t,
          o("WAWebMetaAiForwardedText").composeMetaAiForwardedText(c, n),
          babelHelpers.extends({}, a, {
            pathfinderAccountToken: s,
            quotedMsg: void 0,
          }),
        );
        return (
          (m == null ? void 0 : m.messageSendResult) ===
          o("WAWebSendMsgResultAction").SendMsgResult.OK
        );
      }
      var p = await _(t, i, n, a, s);
      if (p) return !0;
      var f = await o("WAWebSendTextMsgChatAction").sendTextMsgToChat(
        t,
        n,
        babelHelpers.extends({}, a, { pathfinderAccountToken: s }),
      );
      return (
        (f == null ? void 0 : f.messageSendResult) ===
        o("WAWebSendMsgResultAction").SendMsgResult.OK
      );
    }
    async function _(e, t, n, a, i) {
      try {
        var l,
          d = await c(),
          m = d.forwardMediaMsg,
          p = await m({
            aiThreadInfo: a.aiThreadInfo,
            appendedText: n,
            chat: e,
            includeCaption: !1,
            msg: t,
            onMsgKeyCreated: a.onMsgKeyCreated,
            pathfinderAccountToken: i,
            threadId: (l = a.threadIds) == null ? void 0 : l[0],
          }),
          _ = p.messageSendResult;
        if (_ === o("WAWebSendMsgResultAction").SendMsgResult.OK) return !0;
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[askMetaAi] quoted media send to Meta AI returned ",
                ", keeping the reply quote",
              ])),
            String(_),
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
    }
    ((l.shouldForwardAskMetaAiQuotedMsg = d),
      (l.shouldHideAskMetaAiQuotedCaption = m),
      (l.sendAskMetaAiAwareTextMsg = p));
  },
  98,
);
