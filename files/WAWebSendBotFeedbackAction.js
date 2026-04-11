__d(
  "WAWebSendBotFeedbackAction",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebBotMessageSecret",
    "WAWebBotProfileCollection",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSendMsgRecordAction",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l, s;
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
          var u = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            c = t.id.remote,
            d = (l = t.id.participant) != null ? l : t.id.remote,
            m = d.isBot() ? d : void 0,
            p = new (r("WAWebMsgKey"))({
              id: yield r("WAWebMsgKey").newId(),
              remote: c,
              fromMe: !0,
            }),
            _ = self.crypto.getRandomValues(new Uint8Array(32)),
            f = yield o("WAWebBotMessageSecret").genBotMsgSecretFromMsgSecret(
              _,
            ),
            g =
              m != null
                ? (s = o("WAWebBotProfileCollection").BotProfileCollection.get(
                    m,
                  )) == null
                  ? void 0
                  : s.personaId
                : void 0,
            h = t == null ? void 0 : t.botTargetSenderJid,
            y = null;
          h != null &&
            !o("WAWebUserPrefsMeUser").isMeAccount(h) &&
            (y = t == null ? void 0 : t.botTargetSenderJid);
          var C = {
              type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
              kind: o("WAWebMsgType").MsgKind.Protocol,
              subtype: "bot_feedback",
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              ack: o("WAWebAck").ACK.CLOCK,
              from: u,
              to: c,
              id: p,
              local: !0,
              isNewMsg: !0,
              t: o("WATimeUtils").unixTime(),
              protocolMessageKey: t.id,
              bizBotType: t.bizBotType,
              messageSecret: _,
              botMessageSecret: new Uint8Array(f),
              botPersonaId: g,
              botFeedbackKind: a,
              botFeedbackText: i,
              botTargetSenderJid: y,
            },
            b = new (o("WAWebMsgModel").Msg)(C);
          yield o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob(
              "sendMessage",
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                return o("WAWebSendMsgRecordAction").sendMsgRecord(b);
              }),
              { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
            )
            .waitUntilCompleted();
        })),
        u.apply(this, arguments)
      );
    }
    l.sendBotFeedback = s;
  },
  98,
);
