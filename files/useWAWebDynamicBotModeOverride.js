__d(
  "useWAWebDynamicBotModeOverride",
  [
    "WAWebDynamicAIModesCache",
    "WAWebMaybeGetBotModeSelection",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useSyncExternalStore;
    function d(e, t) {
      var n,
        r = t != null ? ((n = e.aiThreads) == null ? void 0 : n.get(t)) : null,
        a = o("useWAWebModelValues").useOptionalModelValues(r, [
          "botModeOverride",
        ]),
        i = u(function () {
          return o(
            "WAWebMaybeGetBotModeSelection",
          ).getInMemoryBotModeOverride();
        }, []),
        l = c(
          o("WAWebMaybeGetBotModeSelection").subscribeToBotModeSelection,
          i,
        ),
        s =
          t != null && (a == null ? void 0 : a.botModeOverride) != null
            ? a.botModeOverride
            : l,
        d = s != null && s.length > 0 ? s[0] : null;
      if (d == null) return null;
      var m = o("WAWebDynamicAIModesCache").getCachedDynamicAIModeById(d);
      return m != null ? m : null;
    }
    l.useWAWebDynamicBotModeOverride = d;
  },
  98,
);
