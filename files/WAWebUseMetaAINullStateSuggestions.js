__d(
  "WAWebUseMetaAINullStateSuggestions",
  ["WAWebGetMetaAISearchSuggestionsAction", "WAWebNoop", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e) {
      var t = c([]),
        n = t[0],
        a = t[1];
      return (
        u(
          function () {
            e &&
              o("WAWebGetMetaAISearchSuggestionsAction")
                .getMetaAISearchNullStateSuggestionsAction()
                .then(a)
                .catch(r("WAWebNoop"))
                .finally(r("WAWebNoop"));
          },
          [e],
        ),
        n
      );
    }
    l.useMetaAINullStateSuggestions = d;
  },
  98,
);
