__d(
  "WAWebUseUnifiedSession",
  [
    "WAWebUnifiedSession",
    "react",
    "useWAWebListener",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect;
    function d(e) {
      var t = r("useWAWebStableCallback")(e),
        n = u(
          function (e) {
            (o("WAWebUnifiedSession").UnifiedSessionManager.generateSessionId(
              e,
            ),
              t(e));
          },
          [t],
        );
      c(
        function () {
          o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId() ==
            null &&
            n(o("WAWebUnifiedSession").UnifiedSessionGenReason.InitialRender);
        },
        [n],
      );
      var a = function () {
        n(o("WAWebUnifiedSession").UnifiedSessionGenReason.Foreground);
      };
      return (o("useWAWebListener").useListener(window, "focus", a), n);
    }
    l.useUnifiedSession = d;
  },
  98,
);
