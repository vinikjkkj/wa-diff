__d(
  "useWAWebBotModeSelection",
  [
    "WAWebBotModeSelectionTypes",
    "WAWebMaybeGetBotModeSelection",
    "react",
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
      var n,
        r = t != null ? ((n = e.aiThreads) == null ? void 0 : n.get(t)) : null,
        a = o("useWAWebModelValues").useOptionalModelValues(r, [
          "botModeSelection",
        ]),
        i = u(function () {
          var e;
          return (e = o(
            "WAWebMaybeGetBotModeSelection",
          ).getInMemoryBotMode()) != null
            ? e
            : d;
        }, []),
        l = c(
          o("WAWebMaybeGetBotModeSelection").subscribeToBotModeSelection,
          i,
        );
      return t != null && (a == null ? void 0 : a.botModeSelection) != null
        ? a.botModeSelection
        : l != null
          ? l
          : d;
    }
    l.useWAWebBotModeSelection = m;
  },
  98,
);
