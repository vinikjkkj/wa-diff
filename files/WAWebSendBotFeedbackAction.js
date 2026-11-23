__d(
  "WAWebSendBotFeedbackAction",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebBackendRuntime",
    "WAWebBotMessageSecret",
    "WAWebBotProfileCollection",
    "WAWebDBProcessMessage",
    "WAWebFrontendMsgGetters",
    "WAWebMessageSendService",
    "WAWebMessageStoreService",
    "WAWebMsgDataUtils",
    "WAWebMsgGetters",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSendMsgRecordAction",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t, n, r) {
      var a, i;
      if (!o("WAWebMsgGetters").getIsBotResponse(t)) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "sendBotFeedback: sending bot feedback for non-bot responses",
              ])),
          )
          .sendLogs("send-bot-feedback");
        return;
      }
      var l = o("WAWebFrontendMsgGetters").getMaybeChat(t);
      if (l == null) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "sendBotFeedback: no chat for the rated response",
              ])),
          )
          .sendLogs("send-bot-feedback-no-chat");
        return;
      }
      var c = (a = t.id.participant) != null ? a : t.id.remote,
        d = c.isBot() ? c : void 0,
        m = self.crypto.getRandomValues(new Uint8Array(32)),
        p = await o("WAWebBotMessageSecret").genBotMsgSecretFromMsgSecret(m),
        _ =
          d != null
            ? (i = o("WAWebBotProfileCollection").BotProfileCollection.get(
                d,
              )) == null
              ? void 0
              : i.personaId
            : void 0,
        f = t == null ? void 0 : t.botTargetSenderJid,
        g = null;
      f != null &&
        !o("WAWebUserUtils").isMeAccount(f) &&
        (g = t == null ? void 0 : t.botTargetSenderJid);
      var h = babelHelpers.extends(
          {},
          await o("WAWebMsgDataUtils").genOutgoingMsgData(
            l,
            o("WAWebMsgType").MSG_TYPE.PROTOCOL,
          ),
          {
            kind: o("WAWebMsgType").MsgKind.Protocol,
            subtype: "bot_feedback",
            protocolMessageKey: t.id,
            bizBotType: t.bizBotType,
            messageSecret: m,
            botMessageSecret: new Uint8Array(p),
            botPersonaId: _,
            botFeedbackKind: n,
            botFeedbackText: r,
            botTargetSenderJid: g,
          },
        ),
        y = new (o("WAWebMsgModel").Msg)(h);
      await o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "sendMessage",
          async function () {
            try {
              await (
                o("WAWebBackendRuntime").isWebDiBackendEnabled()
                  ? o("WAWebBackendRuntime").runtime(
                      o("WAWebMessageStoreService").MessageStoreService,
                    ).storeMessages
                  : o("WAWebDBProcessMessage").storeMessages
              )([h], l.id);
            } catch (e) {
              throw (
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "sendBotFeedback: failed to storeMessages into storage",
                      ])),
                  )
                  .verbose()
                  .sendLogs("send-bot-feedback-store-failed"),
                e
              );
            }
            return (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebMessageSendService").MessageSendService,
                  ).sendMsgRecord
                : o("WAWebSendMsgRecordAction").sendMsgRecord
            )(y);
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.sendBotFeedback = c;
  },
  98,
);
