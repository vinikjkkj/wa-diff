__d(
  "WAWebLid1x1MigrationPrimaryCache",
  [
    "Promise",
    "WALogger",
    "WAWebApiContact",
    "WAWebDBCreateLidPnMappings",
    "WAWebLid1x1MigrationMsgParser",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function () {
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
                .sendLogs(t);
            }));
        }
        var r = t.prototype;
        return (
          (r.getPrimaryMigrationTsSec = function () {
            return this.$4;
          }),
          (r.getLidForPn = function (t) {
            return this.$2.get(t);
          }),
          (r.updateCacheIfEmpty = function (t, r) {
            return this.$2.size !== 0
              ? (s || (s = n("Promise"))).resolve()
              : (this.clear(), (this.$1 = r), this.$5(t));
          }),
          (r.$5 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this;
                yield o("WAWebLid1x1MigrationMsgParser")
                  .parseLidMigrationMappingSyncMsg(e)
                  .then(function (e) {
                    var n;
                    ((t.$4 = e == null ? void 0 : e.primaryMigrationTsSec),
                      e == null ||
                        (n = e.mappings) == null ||
                        n.forEach(function (e) {
                          (t.$2.set(e.pnUser, e.assignedLid),
                            e.latestLid != null &&
                              t.$3.set(e.pnUser, e.latestLid));
                        }));
                  });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.getAllPnLidMappings = function () {
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
          (r.$6 = function (t, n, r) {
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
          (r.learnMappingsInBulk = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                  mappings: n,
                  flushImmediately: !0,
                  learningSource: "migration-sync-old",
                }),
                yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                  mappings: r,
                  flushImmediately: !0,
                  learningSource: "migration-sync-latest",
                }));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.clear = function () {
            ((this.$1 = 0), this.$2.clear(), this.$3.clear());
          }),
          t
        );
      })(),
      c = new u();
    l.lidPnMigrationPrimaryCache = c;
  },
  98,
);
