__d(
  "WAWebPrimaryVersion",
  [
    "WAWebProtobufSyncAction.pb",
    "WAWebSchemaSyncActions",
    "WAWebUserPrefsIndexedDBStorage",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return m("current");
    }
    var s = "WAPrimaryCurrentVersion";
    function u() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s);
    }
    function c(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(s, e);
    }
    async function d() {
      if (u() == null) {
        var t = await e();
        t != null && u() == null && (await c(t));
      }
    }
    async function m(e) {
      var t = await o("WAWebSchemaSyncActions")
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
    }
    ((l.getPrimaryCurrentVersion = e),
      (l.getStoredPrimaryCurrentVersion = u),
      (l.storePrimaryCurrentVersion = c),
      (l.maybeBackfillStoredPrimaryCurrentVersion = d));
  },
  98,
);
