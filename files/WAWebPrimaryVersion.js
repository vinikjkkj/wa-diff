__d(
  "WAWebPrimaryVersion",
  [
    "WAWebProtobufSyncAction.pb",
    "WAWebSchemaSyncActions",
    "WAWebUserPrefsIndexedDBStorage",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return _("current");
    }
    var s = "WAPrimaryCurrentVersion";
    function u() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s);
    }
    function c(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(s, e);
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (u() == null) {
            var t = yield e();
            t != null && u() == null && (yield c(t));
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _("session_start");
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaSyncActions")
            .getSyncActionsTable()
            .get('["primary_version","' + e + '"]');
          if (t) {
            var n,
              r = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                t == null ? void 0 : t.binarySyncData,
              ).value;
            return r == null || (n = r.primaryVersionAction) == null
              ? void 0
              : n.version;
          }
          return null;
        })),
        f.apply(this, arguments)
      );
    }
    ((l.getPrimaryCurrentVersion = e),
      (l.getStoredPrimaryCurrentVersion = u),
      (l.storePrimaryCurrentVersion = c),
      (l.maybeBackfillStoredPrimaryCurrentVersion = d),
      (l.getPrimarySessionStartVersion = p));
  },
  98,
);
