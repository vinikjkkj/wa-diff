__d(
  "WAWebSendMsgBotStanza",
  [
    "WALogger",
    "WAWap",
    "WAWebBotBaseGating",
    "WAWebBotModeSelectionTypes",
    "WAWebBotTypes",
    "WAWebMsgGetters",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = e.agentEngagementType,
        n = e.botSuccessNodes,
        r = e.isBotFeedbackMessage,
        a = e.isBotFeedbackMessageInAgentChat,
        i = e.personaType;
      return n.length === 0 && !a
        ? null
        : o("WAWap").wap(
            "bot",
            {
              type: r ? "feedback" : o("WAWap").DROP_ATTR,
              persona_type:
                i != null ? o("WAWap").CUSTOM_STRING(i) : o("WAWap").DROP_ATTR,
              agent_engagement_type:
                t != null ? o("WAWap").CUSTOM_STRING(t) : o("WAWap").DROP_ATTR,
            },
            n,
          );
    }
    function u(e, t, n, r) {
      return (
        r === void 0 && (r = !1),
        e.type == null &&
        e.localAutomatedType == null &&
        e.clientThreadId == null &&
        e.modeSelection == null &&
        e.modeSelected == null &&
        t == null &&
        n == null &&
        !r
          ? null
          : o("WAWap").wap("bot", {
              type: o("WAWap").MAYBE_CUSTOM_STRING(e.type),
              persona_type:
                t != null ? o("WAWap").CUSTOM_STRING(t) : o("WAWap").DROP_ATTR,
              agent_engagement_type:
                n != null ? o("WAWap").CUSTOM_STRING(n) : o("WAWap").DROP_ATTR,
              local_automated_type: o("WAWap").MAYBE_CUSTOM_STRING(
                e.localAutomatedType,
              ),
              client_thread_id: o("WAWap").MAYBE_CUSTOM_STRING(
                e.clientThreadId,
              ),
              mode_selection: o("WAWap").MAYBE_CUSTOM_STRING(e.modeSelection),
              mode_selected: o("WAWap").MAYBE_CUSTOM_STRING(e.modeSelected),
            })
      );
    }
    function c(e, t, n) {
      var r = p(e),
        a = t
          ? null
          : o("WAWebBotTypes").getBotLocalAutomatedType(e.bizBotType),
        i,
        l;
      if (o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled()) {
        var s = e.botModeOverride;
        if (
          s != null &&
          s.length > 0 &&
          o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()
        )
          l = String(s[0]);
        else {
          var u = e.botModeSelection;
          if (u != null && u.length > 0) {
            var c = u[0];
            c === o("WAWebBotModeSelectionTypes").BotUserSelectionMode.Default
              ? (i = "default")
              : c ===
                  o("WAWebBotModeSelectionTypes").BotUserSelectionMode
                    .ThinkHard && (i = "think_hard");
          }
        }
      }
      return {
        clientThreadId: n,
        localAutomatedType: a,
        modeSelected: l != null ? l : null,
        modeSelection: i != null ? i : null,
        type: r != null ? r : null,
      };
    }
    function d(e, t, n) {
      return e
        ? "member"
        : t != null && t.isBot()
          ? "direct_chat"
          : n && o("WAWebMsgGetters").getIsBotQuery(n)
            ? "invoked"
            : null;
    }
    function m(e, t) {
      var n;
      return (
        o("WAWebMsgGetters").getIsBotFeedbackMessage(e) &&
        !!(
          e.bizBotType &&
          (n = e.protocolMessageKey) != null &&
          n.remote.equals(t)
        )
      );
    }
    function p(t) {
      var n;
      if (t.subtype === "bot_request_welcome") n = "request_welcome";
      else if (t.botMsgBodyType != null)
        e: {
          if (t.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.PROMPT) {
            n = "prompt";
            break e;
          }
          if (t.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.COMMAND) {
            n = "command";
            break e;
          }
          if (t.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.VOICE) {
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[bot] outgoing voice message is not supported",
                ])),
            );
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              t.botMsgBodyType,
          );
        }
      return n;
    }
    ((l.genBotFanoutNode = s),
      (l.genBotStanzaNode = u),
      (l.getBotStanzaAttrs = c),
      (l.getBotAgentEngagementType = d),
      (l.getIsBizBotFeedback = m),
      (l.getBotStanzaType = p));
  },
  98,
);
