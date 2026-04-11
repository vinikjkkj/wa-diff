__d(
  "WAWebMetaAISuggestionModelUtils",
  ["WAWebMetaAISuggestionModel"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.toLowerCase().split(" ").join("-");
    }
    function s(t) {
      return new (r("WAWebMetaAISuggestionModel"))({
        id: e(t.query),
        query: t.query,
        suggestion: t.suggestion,
        sessionId: t.sessionId,
      });
    }
    function u(t) {
      return new (r("WAWebMetaAISuggestionModel"))({
        id: e(t.query),
        query: t.query,
        sessionId: t.sessionId,
        context: t.context,
      });
    }
    ((l.mapMetaAISearchNullStateSuggestionToModel = s),
      (l.mapMetaAISearchTypeAheadSuggestionToModel = u));
  },
  98,
);
