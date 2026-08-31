__d(
  "WAWebBloksA2uiReplyMessageUtils",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebChatCollection",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgCollection",
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
      c = "chat_jid",
      d = "message_row_id";
    function m(e) {
      if (e == null) return { kind: "error" };
      var t = C(e, c),
        n = C(e, s);
      return t == null || n == null
        ? { kind: "error" }
        : {
            kind: "send",
            chatJid: t,
            body: n,
            paramsJson: p(e[u]),
            messageRowId: C(e, d),
          };
    }
    function p(e) {
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
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.body,
            r = t.chatJid,
            a = t.messageRowId,
            i = t.paramsJson,
            l = o("WAWebChatCollection").ChatCollection.get(
              o("WAWebWidFactory").createWid(r),
            );
          if (l == null) {
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
          var s = g(l, a);
          if (i == null) {
            yield o("WAWebSendTextMsgChatAction").sendTextMsgToChat(l, n, {
              quotedMsg: s,
            });
            return;
          }
          yield h({ body: n, chat: l, paramsJson: i, quotedMsg: s });
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      var n;
      if (!(t == null || t === "")) {
        var a = new (r("WAWebMsgKey"))({ fromMe: !1, remote: e.id, id: t });
        return (n = o("WAWebMsgCollection").MsgCollection.get(a)) != null
          ? n
          : void 0;
      }
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.body,
            n = e.chat,
            a = e.paramsJson,
            i = e.quotedMsg,
            l = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            s = babelHelpers.extends(
              {
                type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE,
                kind: o("WAWebMsgType").MsgKind.InteractiveResponse,
                ack: o("WAWebAck").ACK.CLOCK,
                to: n.id,
                from: l,
                id: new (r("WAWebMsgKey"))({
                  id: yield r("WAWebMsgKey").newId(),
                  from: l,
                  to: n.id,
                  participant: void 0,
                  selfDir: "out",
                }),
                local: !0,
                isNewMsg: !0,
                t: o("WATimeUtils").unixTime(),
                interactivePayload: {
                  type: r("WAWebInteractiveMessageType").NATIVE_FLOW,
                  name: String(
                    r("WAWebInteractiveMessagesNativeFlowName")
                      .A2UI_REPLY_ACTION,
                  ),
                  description: "A2UI Reply",
                  paramsJson: a,
                  version: 1,
                },
                nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
                  .A2UI_REPLY_ACTION,
                interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                body: t,
              },
              i != null ? i.msgContextInfo(n.id) : null,
            ),
            u = o("WAWebSendMsgChatAction").addAndSendMsgToChat(n, s),
            c = u[1];
          yield c;
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      var n = e[t];
      return typeof n == "string" && n !== "" ? n : null;
    }
    ((l.resolveA2uiReply = m),
      (l.normalizeA2uiPayload = p),
      (l.sendA2uiReplyMessage = _));
  },
  98,
);
