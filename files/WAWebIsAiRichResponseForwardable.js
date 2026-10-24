__d(
  "WAWebIsAiRichResponseForwardable",
  [
    "JSResourceForInteraction",
    "WAWebBotTypes",
    "WAWebBotUnifiedResponseGating",
    "WAWebBotUtils",
    "WAWebFrontendMsgGetters",
    "WAWebHatchJarvisPayload",
    "WAWebRichResponse.flow",
    "WAWebUnifiedResponseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")(
      "WAWebHatchJarvisForwardSendPolicy",
    ).__setRef("WAWebIsAiRichResponseForwardable");
    function s(e) {
      var t = o("WAWebFrontendMsgGetters").getAsRichResponse(e);
      if (
        t == null ||
        e.botEditType === o("WAWebBotTypes").BotMsgEditType.FIRST ||
        e.botEditType === o("WAWebBotTypes").BotMsgEditType.INNER ||
        !o(
          "WAWebBotUnifiedResponseGating",
        ).isAiRichResponseForwardingSenderEnabled(e.t) ||
        u(e, t.unifiedResponse) ||
        o("WAWebUnifiedResponseUtils").isQuotaUpsellResponse(
          t.unifiedResponse,
        ) ||
        o("WAWebUnifiedResponseUtils").unifiedResponseHasConnectorActionCard(
          t.unifiedResponse,
        ) ||
        d(e, t.unifiedResponse) ||
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
    function u(e, t) {
      return (
        o("WAWebUnifiedResponseUtils").unifiedResponseHasMediaContent(t) ||
        (o("WAWebHatchJarvisPayload").hatchJarvisPayloadMayCarryMedia(t) &&
          !c(e))
      );
    }
    function c(t) {
      var n = e.getModuleIfRequired();
      return (
        (n == null ? void 0 : n.inspectHatchJarvisForwardability(t).ok) === !0
      );
    }
    function d(e, t) {
      return (
        o(
          "WAWebUnifiedResponseUtils",
        ).unifiedResponseHasSecureCredentialRequest(t) ||
        (t != null &&
          o("WAWebBotUtils").isHatchBot(e.id.remote) &&
          o("WAWebUnifiedResponseUtils").hasNestedOrEmbeddedContent(t))
      );
    }
    l.isAiRichResponseForwardable = s;
  },
  98,
);
