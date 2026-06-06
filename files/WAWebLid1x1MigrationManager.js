__d(
  "WAWebLid1x1MigrationManager",
  [
    "Promise",
    "WALogger",
    "WAWebLid1X1MigrationGating",
    "WAWebLid1X1ThreadAccountMigrations",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = (function () {
        function t() {
          this.$1 = [];
        }
        var r = t.prototype;
        return (
          (r.addDependentMigrationTask = function (n) {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[Lid1x1ThreadMigrationManager] task registered",
                ])),
            ),
              this.$1.push(n));
          }),
          (r.executeMigrationIfNeeded = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (
                (o("WAWebLid1X1ThreadAccountMigrations").shouldMigrateNow() &&
                  !o(
                    "WAWebLid1X1MigrationGating",
                  ).Lid1X1MigrationUtils.isLidMigrated() &&
                  (yield o(
                    "WAWebLid1X1ThreadAccountMigrations",
                  ).migrate1x1Chats()),
                this.$1.length === 0)
              ) {
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Lid1x1ThreadMigrationManager: no dependant migration tasks",
                    ])),
                );
                return;
              }
              var e = o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated();
              try {
                e &&
                  (yield (d || (d = n("Promise"))).all(
                    this.$1.map(function (e) {
                      return e();
                    }),
                  ),
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[Lid1x1ThreadMigrationManager] executed ",
                        " tasks",
                      ])),
                    this.$1.length,
                  ));
              } catch (e) {
                o("WALogger").ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[Lid1x1ThreadMigrationManager] executeMigrationTasks err: ",
                      "",
                    ])),
                  e,
                );
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })(),
      p = new m();
    l.ThreadMigrationManager = p;
  },
  98,
);
