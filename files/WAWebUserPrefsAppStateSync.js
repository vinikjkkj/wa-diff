__d(
  "WAWebUserPrefsAppStateSync",
  [
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.CRITICAL_DATA_SYNCED,
        !0,
      );
    }
    function s() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.CRITICAL_DATA_SYNCED,
      );
      return e === !0;
    }
    async function u(e) {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .LAST_PERIODIC_APP_STATE_SYNC_TS,
        e,
      );
    }
    function c() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .LAST_PERIODIC_APP_STATE_SYNC_TS,
      );
      return e;
    }
    async function d() {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .SHOULD_CHECK_CONTACT_SYNC_STATUS,
        !0,
      );
    }
    function m() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .MD_SYNC_ACTIONS_ACTION_SANITIZED,
      );
      return e === !0;
    }
    async function p(e) {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .MD_SYNC_ACTIONS_ACTION_SANITIZED,
        e,
      );
    }
    function _() {
      return r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").MD_KEYS.SYNCD_PRIMARY_ALLOWS_ALL_MUTATIONS,
        !0,
      );
    }
    function f() {
      return !!r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").MD_KEYS.SYNCD_PRIMARY_ALLOWS_ALL_MUTATIONS,
      );
    }
    function g() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.NON_CRITICAL_DATA_SYNC_STATUS,
      );
    }
    async function h(e) {
      var t,
        n = (t = await g()) != null ? t : {};
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.NON_CRITICAL_DATA_SYNC_STATUS,
        babelHelpers.extends({}, n, e),
      );
    }
    ((l.setAllCriticalDataSynced = e),
      (l.getAllCriticalDataSynced = s),
      (l.setLastPeriodicAppStateSyncTs = u),
      (l.getLastPeriodicAppStateSyncTs = c),
      (l.setShouldCheckContactSyncStatus = d),
      (l.getMdSyncActionsActionSanitized = m),
      (l.setMdSyncActionsActionSanitized = p),
      (l.setPrimaryAllowsAllMutations = _),
      (l.getPrimaryAllowsAllMutations = f),
      (l.getNonCriticalDataSyncStatus = g),
      (l.setNonCriticalDataSyncStatus = h));
  },
  98,
);
