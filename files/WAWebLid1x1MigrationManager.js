__d(
  "WAWebLid1x1MigrationManager",
  ["WALogger"],
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
            if (this.$1.length === 0) {
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Lid1x1ThreadMigrationManager: no dependent migration tasks",
                  ])),
              );
              return;
            }
            try {
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
