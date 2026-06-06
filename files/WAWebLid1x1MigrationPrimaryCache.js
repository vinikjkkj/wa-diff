__d(
  "WAWebLid1x1MigrationPrimaryCache",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebDBCreateLidPnMappings",
    "WAWebLid1x1MigrationMsgParser",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t() {
          ((this.$1 = 0),
            (this.$2 = new Map()),
            (this.$3 = new Map()),
            (this.$4 = null));
          var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
            "WALidThreadAccountMigrationStatus",
          );
          t == null ||
            t.lidMappingsFromPrimaryMigration == null ||
            ((this.$1 = t.ts),
            this.$5(t.lidMappingsFromPrimaryMigration).catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[LID] Failed to populate lid mappings from primary device",
                    ])),
                )
                .sendLogs(String(t));
            }));
        }
        var n = t.prototype;
        return (
          (n.getPrimaryMigrationTsSec = function () {
            return this.$4;
          }),
          (n.getLidForPn = function (t) {
            return this.$2.get(t);
          }),
          (n.updateCacheIfEmpty = function (t, n) {
            return this.$2.size !== 0
              ? Promise.resolve()
              : (this.clear(), (this.$1 = n), this.$5(t));
          }),
          (n.$5 = async function (t) {
            var e = this;
            await o("WAWebLid1x1MigrationMsgParser")
              .parseLidMigrationMappingSyncMsg(t)
              .then(function (t) {
                var n;
                ((e.$4 = t == null ? void 0 : t.primaryMigrationTsSec),
                  t == null ||
                    (n = t.mappings) == null ||
                    n.forEach(function (t) {
                      (e.$2.set(t.pnUser, t.assignedLid),
                        t.latestLid != null && e.$3.set(t.pnUser, t.latestLid));
                    }));
              });
          }),
          (n.getAllPnLidMappings = function () {
            var e = this;
            return Array.from(this.$2.entries(), function (t) {
              var n = t[0],
                r = t[1],
                o = e.$3.get(n);
              return {
                primaryProvidedPn: n,
                primaryProvidedLid: r,
                primaryProvidedLatestLid: o,
              };
            });
          }),
          (n.$6 = function (t, n, r) {
            var e = o("WAWebApiContact").lidPnCache.getCurrentLid(
                o("WAWebWidFactory").asUserWidOrThrow(t),
              ),
              a = n.equals(e);
            if (!a) {
              var i = "migration-sync-latest",
                l = [
                  {
                    pn: o("WAWebWidFactory").asUserWidOrThrow(t),
                    lid: o("WAWebWidFactory").asUserLidOrThrow(n),
                  },
                ];
              if (r == null) return { mappings: l, learningSource: i };
              var s = r.equals(e);
              if (s) i = "migration-sync-old";
              else {
                var u = {
                  pn: o("WAWebWidFactory").asUserWidOrThrow(t),
                  lid: o("WAWebWidFactory").asUserLidOrThrow(r),
                };
                l.push(u);
              }
              return { mappings: l, learningSource: i };
            }
          }),
          (n.learnMappingsInBulk = async function () {
            var e = this,
              t = this.getAllPnLidMappings(),
              n = [],
              r = [];
            (t.forEach(function (t) {
              var o = t.primaryProvidedLatestLid,
                a = t.primaryProvidedLid,
                i = t.primaryProvidedPn,
                l = e.$6(i, a, o);
              if (l != null) {
                var s = l.learningSource,
                  u = l.mappings;
                s === "migration-sync-latest"
                  ? r.push.apply(r, u)
                  : n.push.apply(n, u);
              }
            }),
              await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                mappings: n,
                flushImmediately: !0,
                learningSource: "migration-sync-old",
              }),
              await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                mappings: r,
                flushImmediately: !0,
                learningSource: "migration-sync-latest",
              }));
          }),
          (n.clear = function () {
            ((this.$1 = 0), this.$2.clear(), this.$3.clear());
          }),
          t
        );
      })(),
      u = new s();
    l.lidPnMigrationPrimaryCache = u;
  },
  98,
);
