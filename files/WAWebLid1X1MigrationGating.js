__d(
  "WAWebLid1X1MigrationGating",
  [
    "Promise",
    "WALogger",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsTypes",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function () {
        function t() {}
        var r = t.prototype;
        return (
          (r.isLidMigrated = function (t) {
            return (t === void 0 && (t = !1), !0);
          }),
          (r.setIsLidMigrated = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, r, a) {
                (r === void 0 &&
                  (r = o("WAWebUserPrefsTypes").LidMigrationSource.PEER),
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "lid: setIsLidMigrated: ",
                        ", source: ",
                        ", isPureLidSyncDSession: ",
                        "",
                      ])),
                    t,
                    r,
                    a,
                  ),
                  yield (s || (s = n("Promise"))).all([
                    o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                      "WAIsAccountLidFieldMigrated",
                      t,
                    ),
                    o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                      "WALidOneOnOneMigrationSource",
                      r,
                    ),
                    a == null
                      ? (s || (s = n("Promise"))).resolve()
                      : o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                          "WAIsPureLidSyncDSession",
                          a,
                        ),
                  ]));
              },
            );
            function r(e, n, r) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (r.hasStateDiscrepancy = function () {
            return (
              !c.isLidMigrated() &&
              o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
                "WAIsAccountLidFieldMigrated",
              ) === !0
            );
          }),
          (r.isSyncdSessionMigrated = function () {
            return !1;
          }),
          (r.lidMigrationSource = function () {
            return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              "WALidOneOnOneMigrationSource",
            );
          }),
          (r.isPureLidSyncDSession = function () {
            return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              "WAIsPureLidSyncDSession",
            );
          }),
          (r.shouldCreatePnChat = function () {
            return !1;
          }),
          t
        );
      })(),
      c = new u();
    l.Lid1X1MigrationUtils = c;
  },
  98,
);
