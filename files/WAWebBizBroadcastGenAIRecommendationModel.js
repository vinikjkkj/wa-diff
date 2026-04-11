__d(
  "WAWebBizBroadcastGenAIRecommendationModel",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "FROM_SUGGESTION";
    function l(t) {
      return { currentIndex: 0, entries: [{ message: t, userPrompt: e }] };
    }
    function s(e, t, n) {
      return {
        currentIndex: e.entries.length,
        entries: [].concat(e.entries, [{ message: t, userPrompt: n }]),
      };
    }
    function u(e, t) {
      return babelHelpers.extends({}, e, { currentIndex: t });
    }
    function c(e) {
      return e.entries[e.currentIndex];
    }
    function d(e, t) {
      return t === "prev"
        ? e.currentIndex > 0
        : e.currentIndex < e.entries.length - 1;
    }
    var m = ["Rephrase", "Add emoji", "Make it longer", "Make it shorter"];
    function p(e, t) {
      var n;
      return {
        followUps: (n = e.followUps) != null ? n : [],
        toneMessagePairs: e.toneMessagePairs.map(function (e) {
          var t, n;
          return {
            message: (t = e.message) != null ? t : "",
            tone: (n = e.tone) != null ? n : "",
          };
        }),
        userPrompt: t,
      };
    }
    ((i.FROM_SUGGESTION_PROMPT = e),
      (i.createRefinementHistory = l),
      (i.appendRefinement = s),
      (i.navigateToIndex = u),
      (i.getCurrentEntry = c),
      (i.canNavigate = d),
      (i.DEFAULT_REFINEMENT_CHIPS = m),
      (i.parseRecommendationResponse = p));
  },
  66,
);
