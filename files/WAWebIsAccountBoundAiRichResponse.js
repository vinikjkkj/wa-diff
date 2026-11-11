__d(
  "WAWebIsAccountBoundAiRichResponse",
  ["WAWebBotUtils", "WAWebHatchJarvisPayload", "WAWebUnifiedResponseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.unifiedResponse;
      return (
        t != null &&
        (o("WAWebUnifiedResponseUtils").unifiedResponseHasConnectorActionCard(
          t,
        ) ||
          s(e, t) ||
          o("WAWebUnifiedResponseUtils").unifiedResponseHasSpaceCard(t) ||
          o("WAWebUnifiedResponseUtils").unifiedResponseHasBrowserTaskCard(t) ||
          o("WAWebHatchJarvisPayload").isHatchJarvisAccountBoundPayload(t))
      );
    }
    function s(e, t) {
      return (
        o(
          "WAWebUnifiedResponseUtils",
        ).unifiedResponseHasSecureCredentialRequest(t) ||
        (o("WAWebBotUtils").isHatchBot(e.id.remote) &&
          o("WAWebUnifiedResponseUtils").hasNestedOrEmbeddedContent(t))
      );
    }
    l.isAccountBoundAiRichResponse = e;
  },
  98,
);
