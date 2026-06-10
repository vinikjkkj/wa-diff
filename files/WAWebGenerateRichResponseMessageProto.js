__d(
  "WAWebGenerateRichResponseMessageProto",
  [
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
          contextInfo: babelHelpers.extends({}, t, {
            isForwarded: !0,
            forwardingScore: r.forwardingScore,
            forwardOrigin: o("WAWebProtobufsE2E.pb").ContextInfo$ForwardOrigin
              .META_AI,
            botMessageSharingInfo: {
              botEntryPointOrigin: o("WAWebProtobufsAICommon.pb")
                .BotMetricsEntryPoint.META_AI_FORWARD,
              forwardScore: r.forwardingScore,
            },
          }),
        },
        i = { richResponseMessage: a },
        l = o(
          "WAWebRichResponseGenerateUtils",
        ).buildForwardedRichResponseMessageContextInfo(r);
      return (l != null && (i.messageContextInfo = l), i);
    }
    l.default = e;
  },
  98,
);
