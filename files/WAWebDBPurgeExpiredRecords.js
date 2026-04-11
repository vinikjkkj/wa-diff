__d(
  "WAWebDBPurgeExpiredRecords",
  [
    "Promise",
    "WAWeb-moment",
    "WAWebDBMapOrphansToProviders",
    "WAWebDBOrphanDbSerialization",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebSchemaMessageOrphans",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = r("WAWeb-moment")().subtract(t, "days").unix(),
            l = r("WAWeb-moment")().subtract(a, "days").unix(),
            s = yield o("WAWebSchemaMessageOrphans")
              .getMessageOrphanTable()
              .between(["t"], 0, i),
            u = new Set(
              s.map(function (e) {
                return e.parentMsgKey;
              }),
            ),
            c = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkGet(Array.from(u)),
            d = new Set(
              c
                .filter(function (e) {
                  return e && e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN;
                })
                .map(function (e) {
                  return e == null ? void 0 : e.id;
                }),
            ),
            m = s
              .filter(function (e) {
                return !d.has(e.parentMsgKey) || e.t < l;
              })
              .map(o("WAWebDBOrphanDbSerialization").orphanFromDbRow),
            p = yield o("WAWebDBMapOrphansToProviders").mapOrphansToProviders(
              m,
            ),
            _ = [];
          for (var f of p.entries()) {
            var g = f[0],
              h = f[1];
            g.onRecordsPurged != null && _.push(g.onRecordsPurged(h));
          }
          yield (e || (e = n("Promise"))).all(_);
          var y = m.map(function (e) {
            return e.msgKey;
          });
          return o("WAWebSchemaMessageOrphans")
            .getMessageOrphanTable()
            .bulkRemove(y);
        })),
        u.apply(this, arguments)
      );
    }
    l.purgeExpiredOrphanRecords = s;
  },
  98,
);
