__d(
  "WAWebUserPrefsAppStateSync",
  [
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.CRITICAL_DATA_SYNCED,
            !0,
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.CRITICAL_DATA_SYNCED,
      );
      return e === !0;
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
              .LAST_PERIODIC_APP_STATE_SYNC_TS,
            e,
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .LAST_PERIODIC_APP_STATE_SYNC_TS,
      );
      return e;
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
              .SHOULD_CHECK_CONTACT_SYNC_STATUS,
            !0,
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .MD_SYNC_ACTIONS_ACTION_SANITIZED,
      );
      return e === !0;
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
              .MD_SYNC_ACTIONS_ACTION_SANITIZED,
            e,
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").MD_KEYS.SYNCD_PRIMARY_ALLOWS_ALL_MUTATIONS,
        !0,
      );
    }
    function C() {
      return !!r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").MD_KEYS.SYNCD_PRIMARY_ALLOWS_ALL_MUTATIONS,
      );
    }
    function b() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.NON_CRITICAL_DATA_SYNC_STATUS,
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = (t = yield b()) != null ? t : {};
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
              .NON_CRITICAL_DATA_SYNC_STATUS,
            babelHelpers.extends({}, n, e),
          );
        })),
        S.apply(this, arguments)
      );
    }
    ((l.setAllCriticalDataSynced = e),
      (l.getAllCriticalDataSynced = u),
      (l.setLastPeriodicAppStateSyncTs = c),
      (l.getLastPeriodicAppStateSyncTs = m),
      (l.setShouldCheckContactSyncStatus = p),
      (l.getMdSyncActionsActionSanitized = f),
      (l.setMdSyncActionsActionSanitized = g),
      (l.setPrimaryAllowsAllMutations = y),
      (l.getPrimaryAllowsAllMutations = C),
      (l.getNonCriticalDataSyncStatus = b),
      (l.setNonCriticalDataSyncStatus = v));
  },
  98,
);
