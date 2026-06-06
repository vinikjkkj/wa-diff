__d(
  "WAWebPrimaryVersion",
  ["WAWebProtobufSyncAction.pb", "WAWebSchemaSyncActions", "decodeProtobuf"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return u("current");
    }
    function s() {
      return u("session_start");
    }
    async function u(e) {
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
    ((l.getPrimaryCurrentVersion = e), (l.getPrimarySessionStartVersion = s));
  },
  98,
);
