__d(
  "WAWebUseUnifiedSession",
  ["WAWebUnifiedSession", "react", "useWAWebListener"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u() {
      s(function () {
        o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId() == null &&
          o("WAWebUnifiedSession").UnifiedSessionManager.generateSessionId(
            o("WAWebUnifiedSession").UnifiedSessionGenReason.InitialRender,
          );
      }, []);
      var e = function () {
        o("WAWebUnifiedSession").UnifiedSessionManager.generateSessionId(
          o("WAWebUnifiedSession").UnifiedSessionGenReason.Foreground,
        );
      };
      o("useWAWebListener").useListener(window, "focus", e);
    }
    l.useUnifiedSession = u;
  },
  98,
);
