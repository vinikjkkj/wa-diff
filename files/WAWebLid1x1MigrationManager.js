__d(
  "WAWebLid1x1MigrationManager",
  [
    "WALogger",
    "WAWebLid1X1MigrationGating",
    "WAWebLid1X1ThreadAccountMigrations",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = (function () {
        function t() {
          this.$1 = [];
        }
        var n = t.prototype;
        return (
          (n.addDependentMigrationTask = function (n) {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[Lid1x1ThreadMigrationManager] task registered",
                ])),
            ),
              this.$1.push(n));
          }),
          (n.executeMigrationIfNeeded = async function () {
            if (
              (o("WAWebLid1X1ThreadAccountMigrations").shouldMigrateNow() &&
                !o(
                  "WAWebLid1X1MigrationGating",
                ).Lid1X1MigrationUtils.isLidMigrated() &&
                (await o(
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
                (await Promise.all(
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
          }),
          t
        );
      })(),
      m = new d();
    l.ThreadMigrationManager = m;
  },
  98,
);
