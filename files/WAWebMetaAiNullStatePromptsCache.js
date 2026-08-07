__d(
  "WAWebMetaAiNullStatePromptsCache",
  [
    "WAWebBotGating",
    "WAWebTimedCache",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (o("WAWebTimedCache").TimedMapCache)({
      mapLoad: function () {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebUserPrefsKeys").KEYS.WA_WEB_CACHED_META_AI_NULL_STATE_PROMPTS,
        );
      },
      mapStore: function (t) {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
          o("WAWebUserPrefsKeys").KEYS.WA_WEB_CACHED_META_AI_NULL_STATE_PROMPTS,
          t,
        );
      },
      getCacheTtlMs: function () {
        return (
          o("WAWebBotGating").getMetaAiNullStatePromptsUpdateIntervalSeconds() *
          1e3
        );
      },
    });
    l.MetaAiNullStatePromptsCache = e;
  },
  98,
);
