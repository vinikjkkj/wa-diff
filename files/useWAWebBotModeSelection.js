__d(
  "useWAWebBotModeSelection",
  [
    "WAWebBotModeSelectionTypes",
    "WAWebMaybeGetBotModeSelection",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useSyncExternalStore,
      d = [o("WAWebBotModeSelectionTypes").BotUserSelectionMode.Default];
    function m(e, t) {
      var n = o("react-compiler-runtime").c(4),
        r;
      if (n[0] !== e || n[1] !== t) {
        var a;
        ((r =
          t != null ? ((a = e.aiThreads) == null ? void 0 : a.get(t)) : null),
          (n[0] = e),
          (n[1] = t),
          (n[2] = r));
      } else r = n[2];
      var i = r,
        l;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = ["botModeSelection"]), (n[3] = l))
        : (l = n[3]);
      var s = o("useWAWebModelValues").useOptionalModelValues(i, l),
        u = p,
        m = c(
          o("WAWebMaybeGetBotModeSelection").subscribeToBotModeSelection,
          u,
        );
      return t != null && (s == null ? void 0 : s.botModeSelection) != null
        ? s.botModeSelection
        : m != null
          ? m
          : d;
    }
    function p() {
      var e;
      return (e = o("WAWebMaybeGetBotModeSelection").getInMemoryBotMode()) !=
        null
        ? e
        : d;
    }
    l.useWAWebBotModeSelection = m;
  },
  98,
);
