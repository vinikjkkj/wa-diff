__d(
  "WAWebGenerateRichResponseMessageProto",
  [
    "WAWebBotUnifiedResponseMutationUtils",
    "WAWebBotUtils",
    "WAWebProtobufsAICommon.pb",
    "WAWebProtobufsAICommonDeprecated.pb",
    "WAWebProtobufsE2E.pb",
    "WAWebRichResponseGenerateUtils",
    "WAWebUnifiedResponseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.contextInfo,
        n = e.json,
        r = n,
        a = {
          messageType: o("WAWebProtobufsAICommonDeprecated.pb")
            .AIRichResponseMessageType.AI_RICH_RESPONSE_TYPE_STANDARD,
          submessages: o(
            "WAWebRichResponseGenerateUtils",
          ).buildRichResponseSubmessages(r),
          unifiedResponse: o(
            "WAWebUnifiedResponseUtils",
          ).buildUnifiedResponseFromRawData(r.unifiedResponseRawData),
          contextInfo: babelHelpers.extends(
            {},
            t,
            { isForwarded: !0, forwardingScore: r.forwardingScore },
            s(r),
          ),
        },
        i = { richResponseMessage: a },
        l = u(
          o(
            "WAWebRichResponseGenerateUtils",
          ).buildForwardedRichResponseMessageContextInfo(r),
          r.unifiedResponseMutationMediaList,
        );
      return (l != null && (i.messageContextInfo = l), i);
    }
    function s(e) {
      var t = e.forwardedAiBotMessageInfo,
        n = e.forwardingScore;
      return t != null && o("WAWebBotUtils").isHatchBot(t.botId)
        ? {
            forwardOrigin: o("WAWebProtobufsE2E.pb").ContextInfo$ForwardOrigin
              .UGC,
          }
        : {
            forwardOrigin: o("WAWebProtobufsE2E.pb").ContextInfo$ForwardOrigin
              .META_AI,
            botMessageSharingInfo: {
              botEntryPointOrigin: o("WAWebProtobufsAICommon.pb")
                .BotMetricsEntryPoint.META_AI_FORWARD,
              forwardScore: n,
            },
          };
    }
    function u(e, t) {
      var n =
        t != null
          ? o(
              "WAWebBotUnifiedResponseMutationUtils",
            ).generateUnifiedResponseMutation(t)
          : void 0;
      return n == null
        ? e
        : babelHelpers.extends({}, e, {
            botMetadata: babelHelpers.extends(
              {},
              e == null ? void 0 : e.botMetadata,
              { unifiedResponseMutation: n },
            ),
          });
    }
    l.default = e;
  },
  98,
);
