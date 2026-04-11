__d(
  "WAWebGetMetaAISearchSuggestionsAction",
  [
    "WALogger",
    "WAWebBotGating",
    "WAWebGetMetaAISearchSuggestionsJob",
    "WAWebL10N",
    "WAWebMetaAISuggestionModelUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[bot][getMetaAISearchNullStateSuggestionsAction] Start",
              ])),
          );
          var t = yield o(
            "WAWebGetMetaAISearchSuggestionsJob",
          ).getMetaAISearchNullStateSuggestions({
            locale: r("WAWebL10N").getLocale(),
            nullStateSource: "SEARCH",
            experimentConfig:
              o("WAWebBotGating").getAiExperimentGraphqlConfig(),
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
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[bot][getMetaAISearchTypeAheadSuggestionsAction] Start",
              ])),
          );
          var t = yield o(
            "WAWebGetMetaAISearchSuggestionsJob",
          ).getMetaAISearchTypeAheadSuggestions({
            query: e,
            locale: r("WAWebL10N").getLocale(),
            capabilities: ["TEXT"],
            experimentConfig:
              o("WAWebBotGating").getAiExperimentGraphqlConfig(),
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
        })),
        _.apply(this, arguments)
      );
    }
    ((l.getMetaAISearchNullStateSuggestionsAction = d),
      (l.getMetaAISearchTypeAheadSuggestionsAction = p));
  },
  98,
);
