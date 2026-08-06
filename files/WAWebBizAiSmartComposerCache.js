__d(
  "WAWebBizAiSmartComposerCache",
  ["WALRUMap", "WAWebBizAiSmartComposerSuggestionStateMachine"],
  function (t, n, r, o, a, i, l) {
    var e = 3e5,
      s = 20,
      u = new (o("WALRUMap").LRUMap)({ max: s });
    function c(t, n) {
      var r = p(t, n),
        o = u.get(r);
      return o == null
        ? null
        : Date.now() - o.timestampMs > e
          ? (u.delete(r), null)
          : (u.set(r, o), o.suggestion);
    }
    function d(e, t, n) {
      o(
        "WAWebBizAiSmartComposerSuggestionStateMachine",
      ).getSuggestionInsertText(n) !== "" &&
        u.set(p(e, t), { suggestion: n, timestampMs: Date.now() });
    }
    function m() {
      u.clear();
    }
    function p(e, t) {
      return e.toString() + ":" + t;
    }
    ((l.CACHE_TTL_MS = e),
      (l.MAX_CACHE_ENTRIES = s),
      (l.getCachedSuggestion = c),
      (l.cacheSuggestion = d),
      (l.clearSuggestionCache = m));
  },
  98,
);
