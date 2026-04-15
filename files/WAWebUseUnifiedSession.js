__d(
  "WAWebUseUnifiedSession",
  [
    "WAWebUnifiedSession",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u() {
      var e = o("react-compiler-runtime").c(1),
        t;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = []), (e[0] = t))
        : (t = e[0]),
        s(d, t));
      var n = c;
      o("useWAWebListener").useListener(window, "focus", n);
    }
    function c() {
      o("WAWebUnifiedSession").UnifiedSessionManager.generateSessionId(
        o("WAWebUnifiedSession").UnifiedSessionGenReason.Foreground,
      );
    }
    function d() {
      o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId() == null &&
        o("WAWebUnifiedSession").UnifiedSessionManager.generateSessionId(
          o("WAWebUnifiedSession").UnifiedSessionGenReason.InitialRender,
        );
    }
    l.useUnifiedSession = u;
  },
  98,
);
