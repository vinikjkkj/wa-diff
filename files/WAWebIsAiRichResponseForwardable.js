__d(
  "WAWebIsAiRichResponseForwardable",
  [
    "WAWebBotTypes",
    "WAWebBotUnifiedResponseGating",
    "WAWebBotUtils",
    "WAWebFrontendMsgGetters",
    "WAWebHatchJarvisPayload",
    "WAWebRichResponse.flow",
    "WAWebUnifiedResponseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebFrontendMsgGetters").getAsRichResponse(e);
      if (
        t == null ||
        e.botEditType === o("WAWebBotTypes").BotMsgEditType.FIRST ||
        e.botEditType === o("WAWebBotTypes").BotMsgEditType.INNER ||
        !o(
          "WAWebBotUnifiedResponseGating",
        ).isAiRichResponseForwardingSenderEnabled(e.t) ||
        s(t.unifiedResponse) ||
        o("WAWebUnifiedResponseUtils").isQuotaUpsellResponse(
          t.unifiedResponse,
        ) ||
        o("WAWebUnifiedResponseUtils").unifiedResponseHasConnectorActionCard(
          t.unifiedResponse,
        ) ||
        u(e, t.unifiedResponse) ||
        o("WAWebUnifiedResponseUtils").unifiedResponseHasSpaceCard(
          t.unifiedResponse,
        )
      )
        return !1;
      if (o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(e)) return !0;
      var n = t.richResponse.fragments;
      return (
        n.length > 0 &&
        n.every(function (e) {
          return (
            e.type ===
              o("WAWebRichResponse.flow").RichResponseFragmentType.Text ||
            e.type ===
              o("WAWebRichResponse.flow").RichResponseFragmentType.Table
          );
        })
      );
    }
    function s(e) {
      return (
        o("WAWebUnifiedResponseUtils").unifiedResponseHasMediaContent(e) ||
        o("WAWebHatchJarvisPayload").hatchJarvisPayloadMayCarryMedia(e)
      );
    }
    function u(e, t) {
      return (
        o(
          "WAWebUnifiedResponseUtils",
        ).unifiedResponseHasSecureCredentialRequest(t) ||
        (t != null &&
          o("WAWebBotUtils").isHatchBot(e.id.remote) &&
          o("WAWebUnifiedResponseUtils").hasNestedOrEmbeddedContent(t))
      );
    }
    l.isAiRichResponseForwardable = e;
  },
  98,
);
