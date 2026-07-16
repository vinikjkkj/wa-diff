__d(
  "WAWebAfterReadSendingRollbackListener",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebBackendEventBus",
    "WAWebBackendEventBusTypes",
    "WAWebDBAfterReadSendingRollbackMigration",
    "WAWebUserPrefsAfterReadSendingRollbackMigration",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "after-read-rollback-listener",
      u = null;
    function c() {
      u == null &&
        ((u = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.partialPreviousABPropsValues;
            yield d(t.after_read_sending_enabled);
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })()),
        o("WAWebBackendEventBus").BackendEventBus.onAbPropsUpdate(u));
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = o("WAWebABProps").getABPropConfigValue(
            "after_read_sending_enabled",
          );
          if (!(t !== !0 || n !== !1)) {
            o(
              "WAWebUserPrefsAfterReadSendingRollbackMigration",
            ).resetAfterReadSendingRollbackMigrationState();
            try {
              yield o(
                "WAWebDBAfterReadSendingRollbackMigration",
              ).migrateAfterReadSendingRollback();
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "afterReadSendingRollbackListener: migration run failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs(s);
            }
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      u != null &&
        (o("WAWebBackendEventBus").BackendEventBus.removeListener(
          o("WAWebBackendEventBusTypes").BackendEvent.ON_AB_PROPS_UPDATE,
          u,
        ),
        (u = null));
    }
    ((l.registerAfterReadSendingRollbackListener = c),
      (l.resetListenerForTesting = p));
  },
  98,
);
