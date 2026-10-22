__d(
  "WAWebLid1x1MigrationManager",
  ["Promise", "WALogger", "asyncToGeneratorRuntime"],
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
