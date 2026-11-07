__d(
  "WAWebBizAiSmartComposerCache",
  [
    "WALRUMap",
    "WAWebBizAiAgentGating",
    "WAWebBizAiSmartComposerErrorMapping",
    "WAWebBizAiSmartComposerSuggestionStateMachine",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 3e5,
      s = 20,
      u = new (o("WALRUMap").LRUMap)({ max: s });
    function c(t, n) {
      var r = g(t, n),
        a = u.get(r);
      return a == null
        ? null
        : Date.now() - a.timestampMs > e
          ? (u.delete(r), null)
          : !a.result.ok &&
              !o("WAWebBizAiAgentGating").isSmartComposerFailureCacheEnabled()
            ? null
            : (u.set(r, a), a.result);
    }
    function d(e, t) {
      var n = c(e, t);
      return (n == null ? void 0 : n.ok) === !0 ? n.suggestion : null;
    }
    function m(e, t, n) {
      o(
        "WAWebBizAiSmartComposerSuggestionStateMachine",
      ).getSuggestionInsertText(n) !== "" && f(e, t, { ok: !0, suggestion: n });
    }
    function p(e, t, n) {
      !o("WAWebBizAiAgentGating").isSmartComposerFailureCacheEnabled() ||
        !o(
          "WAWebBizAiSmartComposerErrorMapping",
        ).isCacheableSuggestedReplyError(n) ||
        f(e, t, { ok: !1, code: n });
    }
    function _() {
      u.clear();
    }
    function f(e, t, n) {
      u.set(g(e, t), { result: n, timestampMs: Date.now() });
    }
    function g(e, t) {
      return e.toString() + ":" + t;
    }
    ((l.CACHE_TTL_MS = e),
      (l.MAX_CACHE_ENTRIES = s),
      (l.getCachedResult = c),
      (l.getCachedSuggestion = d),
      (l.cacheSuggestion = m),
      (l.cacheSuggestionFailure = p),
      (l.clearCachedSuggestions = _));
  },
  98,
);
