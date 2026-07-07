__d(
  "WAWebUseUnifiedSession",
  [
    "WAWebUnifiedSession",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect;
    function d(e) {
      var t = o("react-compiler-runtime").c(7),
        n = r("useWAWebStableCallback")(e),
        a;
      t[0] !== n
        ? ((a = function (t) {
            (o("WAWebUnifiedSession").UnifiedSessionManager.generateSessionId(
              t,
            ),
              n());
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l,
        s;
      (t[2] !== i
        ? ((l = function () {
            o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId() ==
              null &&
              i(o("WAWebUnifiedSession").UnifiedSessionGenReason.InitialRender);
          }),
          (s = [i]),
          (t[2] = i),
          (t[3] = l),
          (t[4] = s))
        : ((l = t[3]), (s = t[4])),
        c(l, s));
      var u;
      t[5] !== i
        ? ((u = function () {
            i(o("WAWebUnifiedSession").UnifiedSessionGenReason.Foreground);
          }),
          (t[5] = i),
          (t[6] = u))
        : (u = t[6]);
      var d = u;
      return (o("useWAWebListener").useListener(window, "focus", d), i);
    }
    l.useUnifiedSession = d;
  },
  98,
);
