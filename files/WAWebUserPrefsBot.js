__d(
  "WAWebUserPrefsBot",
  [
    "WALogger",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebProtobufsDeviceCapabilities.pb",
    "WAWebUserPrefsDeviceCapabilities",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      var e = r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").MD_KEYS.BOT_LIST_LAST_REQUESTED_TIMESTAMP,
        ),
        t = typeof e == "number" ? e : 0;
      return t;
    }
    function c(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").MD_KEYS.BOT_LIST_LAST_REQUESTED_TIMESTAMP,
        e,
      );
    }
    function d() {
      var e,
        t = o(
          "WAWebUserPrefsDeviceCapabilities",
        ).getPrimaryDeviceCapabilitiesFromLocalStorage();
      return (e = t.aiThread.supportLevel) != null
        ? e
        : o("WAWebProtobufsDeviceCapabilities.pb")
            .DeviceCapabilities$AiThread$SupportLevel.NONE;
    }
    function m() {
      return (
        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebUserPrefsKeys").KEYS.WA_WEB_HAS_EVER_HAD_META_AI_THREAD,
        ) === !0
      );
    }
    async function p() {
      return (
        await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init(),
        m()
          ? !1
          : (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              o("WAWebUserPrefsKeys").KEYS.WA_WEB_HAS_EVER_HAD_META_AI_THREAD,
              !0,
            ),
            !0)
      );
    }
    function _() {
      var e;
      return (e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_META_AI_THREAD_LIST_LAST_SYNC_TS,
      )) != null
        ? e
        : 0;
    }
    function f(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_META_AI_THREAD_LIST_LAST_SYNC_TS,
        e,
      );
    }
    function g() {
      var e;
      return (e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_META_AI_BOT_SESSION_LAST_CLEANUP_TS,
      )) != null
        ? e
        : 0;
    }
    function h(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_META_AI_BOT_SESSION_LAST_CLEANUP_TS,
        e,
      );
    }
    function y() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_META_AI_SESSION_ID,
      );
    }
    function C(t) {
      var n = y();
      if (n != null) return n;
      t !== "meta_ai_entry" &&
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[meta ai session] ",
                " found no session and started one",
              ])),
            t,
          )
          .sendLogs("meta-ai-session-started-outside-entry");
      var a = r("WAWebPonyfillsCryptoRandomUUID")();
      return (
        o("WAWebUserPrefsIndexedDBStorage")
          .userPrefsIdb.set(
            o("WAWebUserPrefsKeys").KEYS.WA_WEB_META_AI_SESSION_ID,
            a,
          )
          .catch(v),
        a
      );
    }
    function b() {
      return o("WAWebUserPrefsIndexedDBStorage")
        .userPrefsIdb.remove(
          o("WAWebUserPrefsKeys").KEYS.WA_WEB_META_AI_SESSION_ID,
        )
        .catch(v);
    }
    function v(e) {
      o("WALogger")
        .WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[meta ai session] failed to store the session ID",
            ])),
        )
        .catching(r("getErrorSafe")(e))
        .sendLogs("meta-ai-session-id-write-failed");
    }
    ((l.getBotListLastRequestedTimestamp = u),
      (l.setBotListLastRequestedTimestamp = c),
      (l.getPrimaryAiThreadSupportLevelFromLocalStorage = d),
      (l.hasEverHadMetaAiThread = m),
      (l.markHasEverHadMetaAiThread = p),
      (l.getMetaAiThreadListLastSyncTs = _),
      (l.setMetaAiThreadListLastSyncTs = f),
      (l.getMetaAiBotSessionLastCleanupTs = g),
      (l.setMetaAiBotSessionLastCleanupTs = h),
      (l.getMetaAiSessionId = y),
      (l.getOrCreateMetaAiSessionId = C),
      (l.clearMetaAiSessionId = b));
  },
  98,
);
