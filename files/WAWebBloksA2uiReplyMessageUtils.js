__d(
  "WAWebBloksA2uiReplyMessageUtils",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebChatCollection",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSendMsgChatAction",
    "WAWebSendTextMsgChatAction",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "title",
      u = "payload",
      c = "chat_jid";
    function d(e) {
      if (e == null) return { kind: "error" };
      var t = h(e, c),
        n = h(e, s);
      return t == null || n == null
        ? { kind: "error" }
        : { kind: "send", chatJid: t, body: n, paramsJson: m(e[u]) };
    }
    function m(e) {
      if (e == null) return null;
      var t = String(e).trim();
      if (t === "" || t === "null") return null;
      try {
        var n = JSON.parse(t);
        return n == null || typeof n != "object" || r("isEmptyObject")(n)
          ? null
          : JSON.stringify(n);
      } catch (e) {
        return null;
      }
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a = o("WAWebChatCollection").ChatCollection.get(
            o("WAWebWidFactory").createWid(t),
          );
          if (a == null) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "A2uiReplyAction: chat not found for the hosting message",
                  ])),
              )
              .sendLogs("a2ui-reply-action-chat-not-found");
            return;
          }
          if (r == null) {
            yield o("WAWebSendTextMsgChatAction").sendTextMsgToChat(a, n);
            return;
          }
          yield f(a, n, r);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            i = {
              type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE,
              kind: o("WAWebMsgType").MsgKind.InteractiveResponse,
              ack: o("WAWebAck").ACK.CLOCK,
              to: e.id,
              from: a,
              id: new (r("WAWebMsgKey"))({
                id: yield r("WAWebMsgKey").newId(),
                from: a,
                to: e.id,
                participant: void 0,
                selfDir: "out",
              }),
              local: !0,
              isNewMsg: !0,
              t: o("WATimeUtils").unixTime(),
              interactivePayload: {
                type: r("WAWebInteractiveMessageType").NATIVE_FLOW,
                name: String(
                  r("WAWebInteractiveMessagesNativeFlowName").A2UI_REPLY_ACTION,
                ),
                description: "A2UI Reply",
                paramsJson: n,
                version: 1,
              },
              nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
                .A2UI_REPLY_ACTION,
              interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              body: t,
            },
            l = o("WAWebSendMsgChatAction").addAndSendMsgToChat(e, i),
            s = l[1];
          yield s;
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      var n = e[t];
      return typeof n == "string" && n !== "" ? n : null;
    }
    ((l.resolveA2uiReply = d),
      (l.normalizeA2uiPayload = m),
      (l.sendA2uiReplyMessage = p));
  },
  98,
);
