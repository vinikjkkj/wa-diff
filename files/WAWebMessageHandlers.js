__d(
  "WAWebMessageHandlers",
  [
    "fbt",
    "WALogger",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebCommentsModal.react",
    "WAWebComposeBoxActions",
    "WAWebConfirmPopup.react",
    "WAWebDisplayType",
    "WAWebFbtCommon",
    "WAWebForwardMessageFlowLoadable",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetDisplayType",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebMultiSelectBar.react",
    "WAWebQuotedMessageUserJourneyLogger",
    "WAWebStateUtils",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = c || (c = o("react"));
    function m(e) {
      var t = e.handleBack,
        n = e.handleSelectClick,
        a = e.msg,
        i = e.multiSelect,
        l = e.onForward,
        u = e.openAsSupportModal,
        c = u === void 0 ? !1 : u,
        m,
        p = o("WAWebFrontendMsgGetters").getIsUnsentMedia(a),
        _ = o("WAWebFrontendMsgGetters").getAsRevoked(a),
        f = o("WAWebMsgGetters").getType(a),
        g = o("WAWebGetDisplayType").getDisplayType(a.unsafe()),
        h = o("WAWebDisplayType").isConversationDisplay(g);
      if (f === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT)
        m = s._(
          /*BTDS*/ "Wait until this message is fully delivered before forwarding.",
        );
      else if (_) m = s._(/*BTDS*/ "Couldn't forward unsent message.");
      else if (p)
        m = s._(
          /*BTDS*/ '_j{"*":"Wait until the messages finish sending and displays a checkmark before forwarding.","_1":"Wait until the message finishes sending and displays a checkmark before forwarding."}',
          [s._plural(1)],
        );
      else {
        if (i && h) {
          n && n(o("WAWebMultiSelectBar.react").MultiSelectMode.FORWARD);
          return;
        }
        if (c) {
          o("WAWebModalManager").ModalManager.openSupportModal(
            d.jsx(
              o("WAWebForwardMessageFlowLoadable").ForwardMessageFlowLoadable,
              {
                msgs: [o("WAWebStateUtils").unproxy(a)],
                onBack: t,
                onClose: function () {
                  o("WAWebModalManager").ModalManager.closeSupportModal();
                },
                onForward: l,
              },
            ),
            { transition: "modal-flow" },
          );
          return;
        }
        o("WAWebModalManager").ModalManager.open(
          d.jsx(
            o("WAWebForwardMessageFlowLoadable").ForwardMessageFlowLoadable,
            {
              msgs: [o("WAWebStateUtils").unproxy(a)],
              onBack: t,
              onClose: function () {
                o("WAWebModalManager").ModalManager.close();
              },
              onForward: l,
            },
          ),
          { transition: "modal-flow" },
        );
        return;
      }
      o("WAWebModalManager").ModalManager.open(
        d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: { surface: "unknown", viewName: "message-handler" },
          title: s._(/*BTDS*/ "Can't forward"),
          onOK: o("WAWebModalManager").closeModalManager,
          okText: r("WAWebFbtCommon")("OK"),
          children: m,
        }),
      );
    }
    function p(e, t, n) {
      if (
        (o("WAWebModalManager").closeModalManager(),
        o("WAWebFrontendChatGetters").getIsCAG(e))
      )
        o("WAWebModalManager").ModalManager.open(
          d.jsx(r("WAWebCommentsModal.react"), { parentMsgs: [t] }),
        );
      else {
        var a = o("WAWebStateUtils").unproxy(t);
        ((e.composeQuotedMsg = o("WAWebMsgModelUtils").createMsgSnapshot(a)),
          e === o("WAWebChatCollection").ChatCollection.getActive()
            ? o("WAWebComposeBoxActions").ComposeBoxActions.focus(e)
            : o("WAWebCmd").Cmd.openChatBottom({
                chat: e,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                  .MessageReply,
              }),
          o(
            "WAWebQuotedMessageUserJourneyLogger",
          ).QuotedMessageUserJourneyLogger.quotedMessageAdded(e.id, n, t));
      }
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          o("WAWebModalManager").closeModalManager();
          try {
            t.shouldHideQuotedMsgAuthor = !0;
            var n = o("WAWebStateUtils").unproxy(t),
              r = yield o("WAWebBotFrontendUtils").getMetaAiChat();
            if (r == null) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[handleAskMetaAi] Failed to get Meta AI chat - chat is null",
                    ])),
                )
                .sendLogs("ask-meta-ai-null-chat");
              return;
            }
            r.composeQuotedMsg = o("WAWebMsgModelUtils").createMsgSnapshot(n);
            var a = t.id.remote,
              i = a.isGroup(),
              l = i
                ? o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAIGroup
                : o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAI1on1;
            o("WAWebBotGating").isAiChatThreadsEnabled()
              ? o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(
                  r,
                  i ? { type: "AskMetaAiGroup" } : { type: "AskMetaAi1on1" },
                )
              : yield o("WAWebCmd").Cmd.openChatBottom({
                  chat: r,
                  chatEntryPoint: l,
                });
          } catch (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleAskMetaAi] Failed to handle Ask Meta AI action",
                  ])),
              )
              .sendLogs("ask-meta-ai-error");
          }
        })),
        f.apply(this, arguments)
      );
    }
    ((l.handleOpenForwardFlow = m),
      (l.handleMessageReply = p),
      (l.handleAskMetaAi = _));
  },
  226,
);
