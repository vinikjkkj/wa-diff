__d(
  "WAWebMetaAiNullStatePromptsCache",
  [
    "WAWebABProps",
    "WAWebTimedCache",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 2;
    function s(t, n) {
      return { version: e, locale: t, expConfig: n };
    }
    var u = new (o("WAWebTimedCache").TimedMapCache)({
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
          o("WAWebABProps").getABPropConfigValue(
            "ai_search_null_state_convo_starter_suggestions_update_interval",
          ) * 1e3
        );
      },
    });
    ((l.makeMetaAiNullStatePromptsCacheKey = s),
      (l.MetaAiNullStatePromptsCache = u));
  },
  98,
);
