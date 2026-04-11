__d(
  "WAWebGenerateBotFeedbackProtocolMessageProto",
  [
    "WAWebBotTypes",
    "WAWebE2EProtoUtils",
    "WAWebProtobufsAICommon.pb",
    "WAWebProtobufsE2E.pb",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.json,
        n;
      switch (t.botFeedbackKind) {
        case o("WAWebBotTypes").BotFeedbackKind.POSITIVE:
          n = o("WAWebProtobufsAICommon.pb").BotFeedbackMessage$BotFeedbackKind
            .BOT_FEEDBACK_POSITIVE;
          break;
        case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_GENERIC:
          n = o("WAWebProtobufsAICommon.pb").BotFeedbackMessage$BotFeedbackKind
            .BOT_FEEDBACK_NEGATIVE_GENERIC;
          break;
        case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_HELPFUL:
          n = o("WAWebProtobufsAICommon.pb").BotFeedbackMessage$BotFeedbackKind
            .BOT_FEEDBACK_NEGATIVE_HELPFUL;
          break;
        case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_INTERESTING:
          n = o("WAWebProtobufsAICommon.pb").BotFeedbackMessage$BotFeedbackKind
            .BOT_FEEDBACK_NEGATIVE_INTERESTING;
          break;
        case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_ACCURATE:
          n = o("WAWebProtobufsAICommon.pb").BotFeedbackMessage$BotFeedbackKind
            .BOT_FEEDBACK_NEGATIVE_ACCURATE;
          break;
        case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_SAFE:
          n = o("WAWebProtobufsAICommon.pb").BotFeedbackMessage$BotFeedbackKind
            .BOT_FEEDBACK_NEGATIVE_SAFE;
          break;
        case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_OTHER:
          n = o("WAWebProtobufsAICommon.pb").BotFeedbackMessage$BotFeedbackKind
            .BOT_FEEDBACK_NEGATIVE_OTHER;
          break;
        case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_REFUSED:
          n = o("WAWebProtobufsAICommon.pb").BotFeedbackMessage$BotFeedbackKind
            .BOT_FEEDBACK_NEGATIVE_REFUSED;
          break;
        case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_NOT_VISUALLY_APPEALING:
          n = o("WAWebProtobufsAICommon.pb").BotFeedbackMessage$BotFeedbackKind
            .BOT_FEEDBACK_NEGATIVE_NOT_VISUALLY_APPEALING;
          break;
        case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_NOT_RELEVANT_TO_TEXT:
          n = o("WAWebProtobufsAICommon.pb").BotFeedbackMessage$BotFeedbackKind
            .BOT_FEEDBACK_NEGATIVE_NOT_RELEVANT_TO_TEXT;
          break;
      }
      var r = {
          messageKey: o("WAWebE2EProtoUtils").encodeKey(t.protocolMessageKey),
          kind: n,
          text: t.botFeedbackText,
        },
        a = {
          type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
            .BOT_FEEDBACK_MESSAGE,
          botFeedbackMessage: r,
        };
      return { protocolMessage: a };
    }
    l.default = e;
  },
  98,
);
