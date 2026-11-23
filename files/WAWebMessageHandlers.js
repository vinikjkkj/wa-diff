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
    "WAWebCommentsModalLoadable",
    "WAWebComposeBoxActions",
    "WAWebDeactivatedContactUtils",
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
    "WAWebMultiSelectBarConstants",
    "WAWebQuotedMessageUserJourneyLogger",
    "WAWebStateUtils",
    "WAWebTimeSpentLoggingNavigation",
    "WDSButtonGroup.react",
    "WDSDialog.react",
    "WDSDialogBridge",
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
        r = e.msg,
        a = e.multiSelect,
        i = e.onForward,
        l = e.openAsSupportModal,
        u = l === void 0 ? !1 : l,
        c,
        m = o("WAWebFrontendMsgGetters").getIsUnsentMedia(r),
        p = o("WAWebFrontendMsgGetters").getAsRevoked(r),
        _ = o("WAWebMsgGetters").getType(r),
        g = o("WAWebGetDisplayType").getDisplayType(r.unsafe()),
        h = o("WAWebDisplayType").isConversationDisplay(g);
      if (_ === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) c = s._(/*BTDS*/ "");
      else if (p) c = s._(/*BTDS*/ "");
      else if (m) c = s._(/*BTDS*/ "", [s._plural(1)]);
      else {
        if (a && h) {
          n && n(o("WAWebMultiSelectBarConstants").MultiSelectMode.FORWARD);
          return;
        }
        if (u) {
          o("WAWebModalManager").ModalManager.openSupportModal(
            d.jsx(
              o("WAWebForwardMessageFlowLoadable").ForwardMessageFlowLoadable,
              {
                msgs: [o("WAWebStateUtils").unproxy(r)],
                onBack: t,
                onClose: function () {
                  o("WAWebModalManager").ModalManager.closeSupportModal();
                },
                onForward: i,
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
              msgs: [o("WAWebStateUtils").unproxy(r)],
              onBack: t,
              onClose: function () {
                o("WAWebModalManager").ModalManager.close();
              },
              onForward: i,
            },
          ),
          { transition: "modal-flow" },
        );
        return;
      }
      (o("WAWebModalManager").closeModalManager(),
        o("WDSDialogBridge").openWDSDialog(d.jsx(f, { description: c })));
    }
    function p(e, t, n, r) {
      if (!o("WAWebDeactivatedContactUtils").isDeactivatedChatReplyBlocked(e))
        if (
          (o("WAWebModalManager").closeModalManager(),
          o("WAWebFrontendChatGetters").getIsCAG(e))
        )
          o("WAWebModalManager").ModalManager.open(
            d.jsx(o("WAWebCommentsModalLoadable").WAWebCommentsModalLoadable, {
              parentMsgs: [t],
            }),
          );
        else {
          var a = o("WAWebStateUtils").unproxy(t);
          ((e.composeQuotedMsg = o("WAWebMsgModelUtils").createMsgSnapshot(a)),
            (r == null ? void 0 : r.replyInPlace) === !0 ||
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
    async function _(t) {
      o("WAWebModalManager").closeModalManager();
      try {
        t.shouldHideQuotedMsgAuthor = !0;
        var n = o("WAWebStateUtils").unproxy(t),
          r = await o("WAWebBotFrontendUtils").getMetaAiChat();
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
          : await o("WAWebCmd").Cmd.openChatBottom({
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
    }
    function f(e) {
      var t = e.description;
      return (
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation({
          surface: "unknown",
          viewName: "message-handler",
        }),
        d.jsx(r("WDSDialog.react"), {
          closeButton: !1,
          description: t,
          footer: d.jsx(r("WDSButtonGroup.react"), {
            orientation: "stacked",
            primaryButtonProps: {
              label: r("WAWebFbtCommon")("OK"),
              onPress: o("WDSDialogBridge").closeWDSDialog,
              testid: "popup-controls-ok",
            },
            width: "fill",
          }),
          headerType: "expressive",
          layoutType: "expressive",
          onDismiss: o("WDSDialogBridge").closeWDSDialog,
          open: !0,
          size: "sm",
          testid: "confirm-popup",
          title: s._(/*BTDS*/ ""),
        })
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.handleOpenForwardFlow = m),
      (l.handleMessageReply = p),
      (l.handleAskMetaAi = _));
  },
  226,
);
