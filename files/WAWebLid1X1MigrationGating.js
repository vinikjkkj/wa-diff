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
      u,
      c = (function () {
        function t() {}
        var r = t.prototype;
        return (
          (r.isLidMigrated = function (n) {
            if ((n === void 0 && (n = !1), n)) {
              var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
                "WAIsAccountLidFieldMigrated",
              );
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[lid] isLidMigrated value=",
                    ", type=",
                    ", result: ",
                    "",
                  ])),
                t,
                typeof t,
                o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
                  "WAIsAccountLidFieldMigrated",
                ) === !0,
              );
            }
            return (
              o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
                "WAIsAccountLidFieldMigrated",
              ) === !0
            );
          }),
          (r.setIsLidMigrated = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, r) {
                (t === void 0 &&
                  (t = o("WAWebUserPrefsTypes").LidMigrationSource.PEER),
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "lid: setIsLidMigrated: ",
                        ", source: ",
                        ", isPureLidSyncDSession: ",
                        "",
                      ])),
                    e,
                    t,
                    r,
                  ),
                  yield (u || (u = n("Promise"))).all([
                    o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                      "WAIsAccountLidFieldMigrated",
                      e,
                    ),
                    o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                      "WALidOneOnOneMigrationSource",
                      t,
                    ),
                    r == null
                      ? (u || (u = n("Promise"))).resolve()
                      : o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                          "WAIsPureLidSyncDSession",
                          r,
                        ),
                  ]));
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.hasStateDiscrepancy = function () {
            return (
              !d.isLidMigrated() &&
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
      d = new c();
    l.Lid1X1MigrationUtils = d;
  },
  98,
);
