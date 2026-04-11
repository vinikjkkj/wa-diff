__d(
  "cometComposedTextV2GenAiTextInlineEntityParser",
  [
    "cometComposedTextV2GenAiDeeplinkItemParser",
    "cometComposedTextV2GenAiInlineLinkItemParser",
    "cometComposedTextV2GenAiLatexItemParser",
    "cometComposedTextV2GenAiSearchCitationItemParser",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e.__typename === "GenAILatexItem")
        return [r("cometComposedTextV2GenAiLatexItemParser")(e)];
      if (e.__typename === "GenAISearchCitationItem")
        return r("cometComposedTextV2GenAiSearchCitationItemParser")(e, t);
      if (e.__typename === "GenAIInlineLinkItem")
        return r("cometComposedTextV2GenAiInlineLinkItemParser")(e, t);
      if (e.__typename === "GenAIDeeplinkItem")
        return r("cometComposedTextV2GenAiDeeplinkItemParser")(e, t);
      throw r("err")("inline entity " + e.__typename);
    }
    l.default = e;
  },
  98,
);
