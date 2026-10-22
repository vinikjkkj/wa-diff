__d(
  "WAWebWWAICacheStore",
  ["WATimeUtils", "WAWebWWAIConstants"],
  function (t, n, r, o, a, i, l) {
    var e = new Map();
    function s(t, n) {
      var r = d(t, n),
        a = e.get(r);
      if (a == null) return null;
      var i = (o("WATimeUtils").unixTime() - a.timestamp) * 1e3;
      return i > o("WAWebWWAIConstants").CACHE_TTL_MS
        ? (e.delete(r), null)
        : (e.delete(r), e.set(r, a), a.suggestions);
    }
    function u(t, n, r) {
      if (r.length !== 0) {
        var a = d(t, n);
        if (
          (e.delete(a), e.size >= o("WAWebWWAIConstants").MAX_CACHE_ENTRIES)
        ) {
          var i = e.keys().next().value;
          i != null && e.delete(i);
        }
        e.set(a, {
          text: t,
          tone: n,
          suggestions: r,
          timestamp: o("WATimeUtils").unixTime(),
        });
      }
    }
    function c() {
      return e.size;
    }
    function d(e, t) {
      return t + ":" + e;
    }
    ((l.getCachedSuggestions = s),
      (l.cacheSuggestions = u),
      (l.getCacheSize = c));
  },
  98,
);
