__d(
  "WAWebUserPrefsBot",
  [
    "WAWebProtobufsDeviceCapabilities.pb",
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
    function u() {
      var e,
        t = o(
          "WAWebUserPrefsDeviceCapabilities",
        ).getPrimaryDeviceCapabilitiesFromLocalStorage();
      return (e = t.aiThread.supportLevel) != null
        ? e
        : o("WAWebProtobufsDeviceCapabilities.pb")
            .DeviceCapabilities$AiThread$SupportLevel.NONE;
    }
    var c = { IN_PROGRESS: "IN_PROGRESS", COMPLETE: "COMPLETE" };
    function d() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_META_AI_THREAD_MIGRATION_STATE,
      );
    }
    function m(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_META_AI_THREAD_MIGRATION_STATE,
        e,
      );
    }
    function p() {
      var e = d();
      return (e == null ? void 0 : e.migrationProgress) === c.COMPLETE;
    }
    function _() {
      return m({ migrationProgress: c.COMPLETE });
    }
    function f() {
      var e;
      return (e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_META_AI_BOT_SESSION_LAST_CLEANUP_TS,
      )) != null
        ? e
        : 0;
    }
    function g(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_META_AI_BOT_SESSION_LAST_CLEANUP_TS,
        e,
      );
    }
    ((l.getBotListLastRequestedTimestamp = e),
      (l.setBotListLastRequestedTimestamp = s),
      (l.getPrimaryAiThreadSupportLevelFromLocalStorage = u),
      (l.MetaAIThreadMigrationProgress = c),
      (l.getMetaAIThreadMigrationState = d),
      (l.setMetaAIThreadMigrationState = m),
      (l.isMetaAIThreadMigrationComplete = p),
      (l.markMetaAIThreadMigrationStateAsComplete = _),
      (l.getMetaAiBotSessionLastCleanupTs = f),
      (l.setMetaAiBotSessionLastCleanupTs = g));
  },
  98,
);
