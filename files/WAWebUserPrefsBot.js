__d(
  "WAWebUserPrefsBot",
  [
    "WAWebBotGating",
    "WAWebProtobufsDeviceCapabilities.pb",
    "WAWebTimedCache",
    "WAWebUserPrefsDeviceCapabilities",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").MD_KEYS.BOT_LIST_LAST_REQUESTED_TIMESTAMP,
        ),
        t = typeof e == "number" ? e : 0;
      return t;
    }
    function s(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").MD_KEYS.BOT_LIST_LAST_REQUESTED_TIMESTAMP,
        e,
      );
    }
    function u(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").MD_KEYS.UGC_BOT_LIST_LAST_REQUESTED_TIMESTAMP,
        e,
      );
    }
    function c(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").MD_KEYS.UGC_BOT_LIST_LAST_BHASH,
        e,
      );
    }
    var d = new (o("WAWebTimedCache").TimedMapCache)({
        mapLoad: function () {
          return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
            o("WAWebUserPrefsKeys").KEYS
              .WA_WEB_CACHED_META_AI_SEARCH_NULL_STATE_SUGGESTIONS,
          );
        },
        mapStore: function (t) {
          return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").KEYS
              .WA_WEB_CACHED_META_AI_SEARCH_NULL_STATE_SUGGESTIONS,
            t,
          );
        },
        getCacheTtlMs:
          o("WAWebBotGating")
            .getMetaAISearchNullStateSuggestionsUpdateIntervalMs,
      }),
      m = new (o("WAWebTimedCache").TimedLRUMapCache)({
        mapLoad: function () {
          return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
            o("WAWebUserPrefsKeys").KEYS
              .WA_WEB_CACHED_META_AI_SEARCH_TYPE_AHEAD_SUGGESTIONS,
          );
        },
        mapStore: function (t) {
          return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").KEYS
              .WA_WEB_CACHED_META_AI_SEARCH_TYPE_AHEAD_SUGGESTIONS,
            t,
          );
        },
        getCacheTtlMs:
          o("WAWebBotGating")
            .getMetaAISearchTypeAheadSuggestionsUpdateIntervalMs,
        capacity:
          o(
            "WAWebBotGating",
          ).getMetaAISearchTypeAheadSuggestionsLRUCacheCapacity(),
      });
    function p(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs.MetaAISearchNullStateIndex,
        e,
      );
    }
    function _() {
      var e = r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").UserPrefs.MetaAISearchNullStateIndex,
        ),
        t = typeof e == "number" ? e : 0;
      return t;
    }
    function f() {
      var e,
        t = o(
          "WAWebUserPrefsDeviceCapabilities",
        ).getPrimaryDeviceCapabilitiesFromLocalStorage();
      return (e = t.aiThread.supportLevel) != null
        ? e
        : o("WAWebProtobufsDeviceCapabilities.pb")
            .DeviceCapabilities$AiThread$SupportLevel.NONE;
    }
    var g = { IN_PROGRESS: "IN_PROGRESS", COMPLETE: "COMPLETE" };
    function h() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_META_AI_THREAD_MIGRATION_STATE,
      );
    }
    function y(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_META_AI_THREAD_MIGRATION_STATE,
        e,
      );
    }
    function C() {
      var e = h();
      return (e == null ? void 0 : e.migrationProgress) === g.COMPLETE;
    }
    function b() {
      return y({ migrationProgress: g.COMPLETE });
    }
    ((l.getBotListLastRequestedTimestamp = e),
      (l.setBotListLastRequestedTimestamp = s),
      (l.setUgcBotListLastRequestedTimestamp = u),
      (l.setUgcBotListLastBhash = c),
      (l.MetaAINullStateSuggestionsCache = d),
      (l.MetaAITypeAheadSuggestionsCache = m),
      (l.setMetaAISearchNullStateIndex = p),
      (l.getMetaAISearchNullStateIndex = _),
      (l.getPrimaryAiThreadSupportLevelFromLocalStorage = f),
      (l.MetaAIThreadMigrationProgress = g),
      (l.getMetaAIThreadMigrationState = h),
      (l.setMetaAIThreadMigrationState = y),
      (l.isMetaAIThreadMigrationComplete = C),
      (l.markMetaAIThreadMigrationStateAsComplete = b));
  },
  98,
);
