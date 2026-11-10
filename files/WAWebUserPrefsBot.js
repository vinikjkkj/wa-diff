__d(
  "WAWebUserPrefsBot",
  [
    "WAWebProtobufsDeviceCapabilities.pb",
    "WAWebUserPrefsDeviceCapabilities",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
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
    function c() {
      return (
        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebUserPrefsKeys").KEYS.WA_WEB_HAS_EVER_HAD_META_AI_THREAD,
        ) === !0
      );
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init(),
            c()
              ? !1
              : (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                  o("WAWebUserPrefsKeys").KEYS
                    .WA_WEB_HAS_EVER_HAD_META_AI_THREAD,
                  !0,
                ),
                !0)
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      var e;
      return (e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_META_AI_BOT_SESSION_LAST_CLEANUP_TS,
      )) != null
        ? e
        : 0;
    }
    function _(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_META_AI_BOT_SESSION_LAST_CLEANUP_TS,
        e,
      );
    }
    ((l.getBotListLastRequestedTimestamp = e),
      (l.setBotListLastRequestedTimestamp = s),
      (l.getPrimaryAiThreadSupportLevelFromLocalStorage = u),
      (l.hasEverHadMetaAiThread = c),
      (l.markHasEverHadMetaAiThread = d),
      (l.getMetaAiBotSessionLastCleanupTs = p),
      (l.setMetaAiBotSessionLastCleanupTs = _));
  },
  98,
);
