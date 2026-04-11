__d(
  "WAWebDynamicAIModesCache",
  [
    "WAWebBotGating",
    "WAWebTimedCache",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      modeId: 0,
      type: "FAST",
      isExperimental: !1,
      title: "Fast",
      subtitle: "Answers right away",
    };
    function s(e) {
      var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_CACHED_DYNAMIC_AI_MODES,
      );
      return o("WAWebTimedCache").getTimedCacheItemValue(
        t,
        e != null
          ? e
          : o("WAWebBotGating").getAiDynamicModeSelectorTtlSeconds() * 1e3,
      );
    }
    function u() {
      var e = s(Number.MAX_SAFE_INTEGER);
      return (e == null, e);
    }
    function c(e) {
      var t = o("WAWebTimedCache").createTimedCacheItem(e);
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_CACHED_DYNAMIC_AI_MODES,
        t,
      );
    }
    function d() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_CACHED_DYNAMIC_AI_MODES,
      );
    }
    function m() {
      return e;
    }
    function p(e) {
      var t,
        n = u();
      return (t =
        n == null
          ? void 0
          : n.find(function (t) {
              return t.modeId === e;
            })) != null
        ? t
        : null;
    }
    ((l.getCachedDynamicAIModes = s),
      (l.getStaleCachedDynamicAIModes = u),
      (l.setCachedDynamicAIModes = c),
      (l.clearCachedDynamicAIModes = d),
      (l.getDefaultDynamicAIMode = m),
      (l.getCachedDynamicAIModeById = p));
  },
  98,
);
