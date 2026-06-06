__d(
  "WAWebDBPurgeExpiredRecords",
  [
    "WAWeb-moment",
    "WAWebDBMapOrphansToProviders",
    "WAWebDBOrphanDbSerialization",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebSchemaMessageOrphans",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = r("WAWeb-moment")().subtract(e, "days").unix(),
        a = r("WAWeb-moment")().subtract(t, "days").unix(),
        i = await o("WAWebSchemaMessageOrphans")
          .getMessageOrphanTable()
          .between(["t"], 0, n),
        l = new Set(
          i.map(function (e) {
            return e.parentMsgKey;
          }),
        ),
        s = await o("WAWebSchemaMessage")
          .getMessageTable()
          .bulkGet(Array.from(l)),
        u = new Set(
          s
            .filter(function (e) {
              return e && e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN;
            })
            .map(function (e) {
              return e == null ? void 0 : e.id;
            }),
        ),
        c = i
          .filter(function (e) {
            return !u.has(e.parentMsgKey) || e.t < a;
          })
          .map(o("WAWebDBOrphanDbSerialization").orphanFromDbRow),
        d = await o("WAWebDBMapOrphansToProviders").mapOrphansToProviders(c),
        m = [];
      for (var p of d.entries()) {
        var _ = p[0],
          f = p[1];
        _.onRecordsPurged != null && m.push(_.onRecordsPurged(f));
      }
      await Promise.all(m);
      var g = c.map(function (e) {
        return e.msgKey;
      });
      return o("WAWebSchemaMessageOrphans")
        .getMessageOrphanTable()
        .bulkRemove(g);
    }
    l.purgeExpiredOrphanRecords = e;
  },
  98,
);
