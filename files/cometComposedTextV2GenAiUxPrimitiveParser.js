__d(
  "cometComposedTextV2GenAiUxPrimitiveParser",
  [
    "CometComposedTextV2UnsupportedURType.react",
    "cometComposedTextV2FoABloksPrimitiveParser",
    "cometComposedTextV2FoaTextPrimitiveParser",
    "cometComposedTextV2GenAIMarkdownTextUxPrimitiveParser",
    "cometComposedTextV2GenAiBotProgressStatusPrimitiveParser",
    "cometComposedTextV2GenAiBotThinkingStatusPrimitiveParser",
    "cometComposedTextV2GenAiCodeUxPrimitiveParser",
    "cometComposedTextV2GenAiDividerPrimitiveParser",
    "cometComposedTextV2GenAiImaginePrimitiveParser",
    "cometComposedTextV2GenAiLatexUxPrimitiveParser",
    "cometComposedTextV2GenAiMetadataTextPrimitiveParser",
    "cometComposedTextV2GenAiPostUxPrimitiveParser",
    "cometComposedTextV2GenAiProductItemCardPrimitiveParser",
    "cometComposedTextV2GenAiReelUxPrimitiveParser",
    "cometComposedTextV2GenAiSearchResultPrimitiveParser",
    "cometComposedTextV2GenAiSpacerPrimitiveParser",
    "cometComposedTextV2GenAiTableUxPrimitiveParser",
    "cometComposedTextV2NodeBuilders",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t != null ? t : {},
        a = n.markedTokenizeOptions;
      if (e.__typename === "GenAICodeUXPrimitive")
        return r("cometComposedTextV2GenAiCodeUxPrimitiveParser")(e);
      if (e.__typename === "GenAIMarkdownTextUXPrimitive")
        return r("cometComposedTextV2GenAIMarkdownTextUxPrimitiveParser")(e, a);
      if (e.__typename === "GenAILatexUXPrimitive")
        return r("cometComposedTextV2GenAiLatexUxPrimitiveParser")(e);
      if (e.__typename === "GenATableUXPrimitive") {
        var i,
          l =
            t == null || (i = t.renderers) == null
              ? void 0
              : i.tableOverflowConfig;
        return r("cometComposedTextV2GenAiTableUxPrimitiveParser")(e, a, l);
      } else {
        if (e.__typename === "GenAIReelPrimitive")
          return r("cometComposedTextV2GenAiReelUxPrimitiveParser")(e);
        if (e.__typename === "GenAIPostPrimitive")
          return r("cometComposedTextV2GenAiPostUxPrimitiveParser")(e);
        if (e.__typename === "GenAIImaginePrimitive")
          return r("cometComposedTextV2GenAiImaginePrimitiveParser")(e);
        if (e.__typename === "GenAIBotProgressStatusPrimitive")
          return r("cometComposedTextV2GenAiBotProgressStatusPrimitiveParser")(
            e,
          );
        if (e.__typename === "GenAIDividerPrimitive")
          return r("cometComposedTextV2GenAiDividerPrimitiveParser")(e);
        if (e.__typename === "GenAISearchResultPrimitive")
          return r("cometComposedTextV2GenAiSearchResultPrimitiveParser")(e, t);
        if (e.__typename === "GenAIProductItemCardPrimitive")
          return r("cometComposedTextV2GenAiProductItemCardPrimitiveParser")(e);
        if (e.__typename === "FOABloksPrimitive")
          return r("cometComposedTextV2FoABloksPrimitiveParser")(e, t);
        if (e.__typename === "FOATextPrimitive")
          return r("cometComposedTextV2FoaTextPrimitiveParser")(e, a);
        if (e.__typename === "GenAISpacerPrimitive")
          return r("cometComposedTextV2GenAiSpacerPrimitiveParser")(e);
        if (e.__typename === "GenAIMetadataTextPrimitive")
          return r("cometComposedTextV2GenAiMetadataTextPrimitiveParser")(e);
        if (e.__typename === "GenAIBotThinkingStatusPrimitive")
          return r("cometComposedTextV2GenAiBotThinkingStatusPrimitiveParser")(
            e,
          );
      }
      return o("cometComposedTextV2NodeBuilders")
        .buildRootNode()
        .append(
          o(
            "CometComposedTextV2UnsupportedURType.react",
          ).buildUnsupportedURTypeNode(e.__typename),
        );
    }
    l.default = e;
  },
  98,
);
