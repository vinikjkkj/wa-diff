__d(
  "WAWebParseBotFeedbackProtocolMessageProto",
  [
    "WAWebBotTypes",
    "WAWebE2EProtoUtils",
    "WAWebMsgType",
    "WAWebProtobufsAICommon.pb",
    "WAWebProtobufsE2E.pb",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = n.protocolMessage;
      if (r != null) {
        var a = r.botFeedbackMessage,
          i = r.type;
        if (
          i ===
            o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
              .BOT_FEEDBACK_MESSAGE &&
          a != null
        ) {
          var l = a.kind,
            s = a.messageKey,
            u = a.text;
          if (s != null && l != null) {
            var c;
            switch (l) {
              case o("WAWebProtobufsAICommon.pb")
                .BotFeedbackMessage$BotFeedbackKind.BOT_FEEDBACK_POSITIVE:
                c = o("WAWebBotTypes").BotFeedbackKind.POSITIVE;
                break;
              case o("WAWebProtobufsAICommon.pb")
                .BotFeedbackMessage$BotFeedbackKind
                .BOT_FEEDBACK_NEGATIVE_GENERIC:
                c = o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_GENERIC;
                break;
              case o("WAWebProtobufsAICommon.pb")
                .BotFeedbackMessage$BotFeedbackKind
                .BOT_FEEDBACK_NEGATIVE_HELPFUL:
                c = o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_HELPFUL;
                break;
              case o("WAWebProtobufsAICommon.pb")
                .BotFeedbackMessage$BotFeedbackKind
                .BOT_FEEDBACK_NEGATIVE_INTERESTING:
                c = o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_INTERESTING;
                break;
              case o("WAWebProtobufsAICommon.pb")
                .BotFeedbackMessage$BotFeedbackKind
                .BOT_FEEDBACK_NEGATIVE_ACCURATE:
                c = o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_ACCURATE;
                break;
              case o("WAWebProtobufsAICommon.pb")
                .BotFeedbackMessage$BotFeedbackKind.BOT_FEEDBACK_NEGATIVE_SAFE:
                c = o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_SAFE;
                break;
              case o("WAWebProtobufsAICommon.pb")
                .BotFeedbackMessage$BotFeedbackKind.BOT_FEEDBACK_NEGATIVE_OTHER:
                c = o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_OTHER;
                break;
              case o("WAWebProtobufsAICommon.pb")
                .BotFeedbackMessage$BotFeedbackKind
                .BOT_FEEDBACK_NEGATIVE_REFUSED:
                c = o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_REFUSED;
                break;
              case o("WAWebProtobufsAICommon.pb")
                .BotFeedbackMessage$BotFeedbackKind
                .BOT_FEEDBACK_NEGATIVE_NOT_VISUALLY_APPEALING:
                c =
                  o("WAWebBotTypes").BotFeedbackKind
                    .NEGATIVE_NOT_VISUALLY_APPEALING;
                break;
              case o("WAWebProtobufsAICommon.pb")
                .BotFeedbackMessage$BotFeedbackKind
                .BOT_FEEDBACK_NEGATIVE_NOT_RELEVANT_TO_TEXT:
                c =
                  o("WAWebBotTypes").BotFeedbackKind
                    .NEGATIVE_NOT_RELEVANT_TO_TEXT;
                break;
              case o("WAWebProtobufsAICommon.pb")
                .BotFeedbackMessage$BotFeedbackKind
                .BOT_FEEDBACK_NEGATIVE_CLARITY:
                c =
                  o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_NOT_ENTERTAINING;
                break;
              case o("WAWebProtobufsAICommon.pb")
                .BotFeedbackMessage$BotFeedbackKind
                .BOT_FEEDBACK_NEGATIVE_DOESNT_LOOK_LIKE_THE_PERSON:
                c =
                  o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_NOT_CUSTOMIZABLE;
                break;
              case o("WAWebProtobufsAICommon.pb")
                .BotFeedbackMessage$BotFeedbackKind
                .BOT_FEEDBACK_NEGATIVE_PERSONALIZED:
                c = o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_NOT_INTERESTING;
                break;
              case o("WAWebProtobufsAICommon.pb")
                .BotFeedbackMessage$BotFeedbackKind
                .BOT_FEEDBACK_NEGATIVE_HALLUCINATION_INTERNAL_ONLY:
                c = o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_GENERIC;
                break;
              case o("WAWebProtobufsAICommon.pb")
                .BotFeedbackMessage$BotFeedbackKind.BOT_FEEDBACK_NEGATIVE:
                c = o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_GENERIC;
                break;
            }
            if (c != null)
              return {
                msgData: babelHelpers.extends({}, t, {
                  type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                  kind: o("WAWebMsgType").MsgKind.Protocol,
                  subtype: "bot_feedback",
                  protocolMessageKey: o(
                    "WAWebE2EProtoUtils",
                  ).translateRegularMessageKeyToLocalReference(s, t),
                  botFeedbackKind: c,
                  botFeedbackText: u,
                }),
                contextInfo: null,
              };
          }
        }
      }
    }
    l.default = e;
  },
  98,
);
