__d(
  "WAWebGetMetaAISearchSuggestionsAction",
  [
    "WALogger",
    "WAWebBotGating",
    "WAWebGetMetaAISearchSuggestionsJob",
    "WAWebL10N",
    "WAWebMetaAISuggestionModelUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    async function d() {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[bot][getMetaAISearchNullStateSuggestionsAction] Start",
          ])),
      );
      var t = await o(
        "WAWebGetMetaAISearchSuggestionsJob",
      ).getMetaAISearchNullStateSuggestions({
        locale: r("WAWebL10N").getLocale(),
        nullStateSource: "SEARCH",
        experimentConfig: o("WAWebBotGating").getAiExperimentGraphqlConfig(),
      });
      return (
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[bot][getMetaAISearchNullStateSuggestionsAction] End",
            ])),
        ),
        t.map(
          o("WAWebMetaAISuggestionModelUtils")
            .mapMetaAISearchNullStateSuggestionToModel,
        )
      );
    }
    async function m(e) {
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[bot][getMetaAISearchTypeAheadSuggestionsAction] Start",
          ])),
      );
      var t = await o(
        "WAWebGetMetaAISearchSuggestionsJob",
      ).getMetaAISearchTypeAheadSuggestions({
        query: e,
        locale: r("WAWebL10N").getLocale(),
        capabilities: ["TEXT"],
        experimentConfig: o("WAWebBotGating").getAiExperimentGraphqlConfig(),
      });
      return (
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[bot][getMetaAISearchTypeAheadSuggestionsAction] End",
            ])),
        ),
        t.map(
          o("WAWebMetaAISuggestionModelUtils")
            .mapMetaAISearchTypeAheadSuggestionToModel,
        )
      );
    }
    ((l.getMetaAISearchNullStateSuggestionsAction = d),
      (l.getMetaAISearchTypeAheadSuggestionsAction = m));
  },
  98,
);
