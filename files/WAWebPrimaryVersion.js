__d(
  "WAWebPrimaryVersion",
  [
    "WAWebProtobufSyncAction.pb",
    "WAWebSchemaSyncActions",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return u("current");
    }
    function s() {
      return u("session_start");
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        c.apply(this, arguments)
      );
    }
    ((l.getPrimaryCurrentVersion = e), (l.getPrimarySessionStartVersion = s));
  },
  98,
);
