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
    "WAWebMsgType",
    "WAWebMultiSelectBar.react",
    "WAWebQuotedMessageUserJourneyLogger",
    "WAWebRichTextInputConst",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebStateUtils",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = function (t) {
        var e = t.handleBack,
          n = t.handleSelectClick,
          a = t.msg,
          i = t.multiSelect,
          l = t.onForward,
          u = t.openAsSupportModal,
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
        else if (_) m = s._(/*BTDS*/ "Unable to forward unsent message.");
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
                  onBack: e,
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
                onBack: e,
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
            tsNavigationData: {
              surface: "unknown",
              viewName: "message-handler",
            },
            title: s._(/*BTDS*/ "Can't forward"),
            onOK: o("WAWebModalManager").closeModalManager,
            okText: r("WAWebFbtCommon")("OK"),
            children: m,
          }),
        );
      };
    function p(e, t, n) {
      if (o("WAWebFrontendChatGetters").getIsCAG(e))
        o("WAWebModalManager").ModalManager.open(
          d.jsx(r("WAWebCommentsModal.react"), { parentMsgs: [t] }),
        );
      else {
        var a,
          i,
          l = o("WAWebStateUtils").unproxy(t),
          s = t.senderObj;
        if (
          ((e.composeQuotedMsg = l),
          o("WAWebMsgGetters").getIsMetaBotResponse(l) &&
            e.canInvokeBot() &&
            ((a = (i = e.getComposeContents()) == null ? void 0 : i.text) !=
            null
              ? a
              : "") === "")
        ) {
          var u,
            c =
              (u = o(
                "WAWebSimpleSignalPNToFBIDMigration",
              ).getDeprecatedPnChatForFbidInvoke(s.id)) != null
                ? u
                : s.id,
            m =
              "" +
              o("WAWebRichTextInputConst").ZWS +
              c.toString() +
              o("WAWebRichTextInputConst").ZWS +
              " ";
          o("WAWebComposeBoxActions").ComposeBoxActions.paste(e, m);
        }
        (e === o("WAWebChatCollection").ChatCollection.getActive()
          ? o("WAWebComposeBoxActions").ComposeBoxActions.focus(e)
          : o("WAWebCmd").Cmd.openChatBottom({ chat: e }),
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
            r.composeQuotedMsg = n;
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
