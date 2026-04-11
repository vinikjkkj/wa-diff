__d(
  "WAWebUseMetaAINullStateSuggestions",
  [
    "WAWebGetMetaAISearchSuggestionsAction",
    "WAWebNoop",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(4),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = []), (t[0] = n))
        : (n = t[0]);
      var a = c(n),
        i = a[0],
        l = a[1],
        s,
        d;
      return (
        t[1] !== e
          ? ((s = function () {
              e &&
                o("WAWebGetMetaAISearchSuggestionsAction")
                  .getMetaAISearchNullStateSuggestionsAction()
                  .then(l)
                  .catch(r("WAWebNoop"))
                  .finally(r("WAWebNoop"));
            }),
            (d = [e]),
            (t[1] = e),
            (t[2] = s),
            (t[3] = d))
          : ((s = t[2]), (d = t[3])),
        u(s, d),
        i
      );
    }
    l.useMetaAINullStateSuggestions = d;
  },
  98,
);
