__d(
  "WAWebSendBotFeedbackAction",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebBotMessageSecret",
    "WAWebBotProfileCollection",
    "WAWebDBProcessMessage",
    "WAWebFrontendMsgGetters",
    "WAWebMsgDataUtils",
    "WAWebMsgGetters",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSendMsgRecordAction",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          var i, l;
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
          var c = o("WAWebFrontendMsgGetters").getMaybeChat(t);
          if (c == null) {
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
          var d = (i = t.id.participant) != null ? i : t.id.remote,
            m = d.isBot() ? d : void 0,
            p = self.crypto.getRandomValues(new Uint8Array(32)),
            _ = yield o("WAWebBotMessageSecret").genBotMsgSecretFromMsgSecret(
              p,
            ),
            f =
              m != null
                ? (l = o("WAWebBotProfileCollection").BotProfileCollection.get(
                    m,
                  )) == null
                  ? void 0
                  : l.personaId
                : void 0,
            g = t == null ? void 0 : t.botTargetSenderJid,
            h = null;
          g != null &&
            !o("WAWebUserPrefsMeUser").isMeAccount(g) &&
            (h = t == null ? void 0 : t.botTargetSenderJid);
          var y = babelHelpers.extends(
              {},
              yield o("WAWebMsgDataUtils").genOutgoingMsgData(
                c,
                o("WAWebMsgType").MSG_TYPE.PROTOCOL,
              ),
              {
                kind: o("WAWebMsgType").MsgKind.Protocol,
                subtype: "bot_feedback",
                protocolMessageKey: t.id,
                bizBotType: t.bizBotType,
                messageSecret: p,
                botMessageSecret: new Uint8Array(_),
                botPersonaId: f,
                botFeedbackKind: r,
                botFeedbackText: a,
                botTargetSenderJid: h,
              },
            ),
            C = new (o("WAWebMsgModel").Msg)(y);
          yield o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob(
              "sendMessage",
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  yield o("WAWebDBProcessMessage").storeMessages([y], c.id);
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
                return o("WAWebSendMsgRecordAction").sendMsgRecord(C);
              }),
              { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
            )
            .waitUntilCompleted();
        })),
        d.apply(this, arguments)
      );
    }
    l.sendBotFeedback = c;
  },
  98,
);
