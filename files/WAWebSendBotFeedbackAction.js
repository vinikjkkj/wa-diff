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
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n, a) {
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
      var s = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        u = t.id.remote,
        c = (i = t.id.participant) != null ? i : t.id.remote,
        d = c.isBot() ? c : void 0,
        m = new (r("WAWebMsgKey"))({
          id: await r("WAWebMsgKey").newId(),
          remote: u,
          fromMe: !0,
        }),
        p = self.crypto.getRandomValues(new Uint8Array(32)),
        _ = await o("WAWebBotMessageSecret").genBotMsgSecretFromMsgSecret(p),
        f =
          d != null
            ? (l = o("WAWebBotProfileCollection").BotProfileCollection.get(
                d,
              )) == null
              ? void 0
              : l.personaId
            : void 0,
        g = t == null ? void 0 : t.botTargetSenderJid,
        h = null;
      g != null &&
        !o("WAWebUserPrefsMeUser").isMeAccount(g) &&
        (h = t == null ? void 0 : t.botTargetSenderJid);
      var y = {
          type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
          kind: o("WAWebMsgType").MsgKind.Protocol,
          subtype: "bot_feedback",
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          ack: o("WAWebAck").ACK.CLOCK,
          from: s,
          to: u,
          id: m,
          local: !0,
          isNewMsg: !0,
          t: o("WATimeUtils").unixTime(),
          protocolMessageKey: t.id,
          bizBotType: t.bizBotType,
          messageSecret: p,
          botMessageSecret: new Uint8Array(_),
          botPersonaId: f,
          botFeedbackKind: n,
          botFeedbackText: a,
          botTargetSenderJid: h,
        },
        C = new (o("WAWebMsgModel").Msg)(y);
      await o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "sendMessage",
          async function () {
            return o("WAWebSendMsgRecordAction").sendMsgRecord(C);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.sendBotFeedback = s;
  },
  98,
);
