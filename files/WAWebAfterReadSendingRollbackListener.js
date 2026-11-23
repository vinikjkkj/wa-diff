__d(
  "WAWebAfterReadSendingRollbackListener",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebBackendEventBus",
    "WAWebDBAfterReadSendingRollbackMigration",
    "WAWebUserPrefsAfterReadSendingRollbackMigration",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "after-read-rollback-listener",
      u = null;
    function c() {
      u == null &&
        ((u = async function (t) {
          var e = t.partialPreviousABPropsValues;
          await d(e.after_read_sending_enabled);
        }),
        o("WAWebBackendEventBus").BackendEventBus.onAbPropsUpdate(u));
    }
    async function d(t) {
      var n = o("WAWebABProps").getABPropConfigValue(
        "after_read_sending_enabled",
      );
      if (!(t !== !0 || n !== !1)) {
        o(
          "WAWebUserPrefsAfterReadSendingRollbackMigration",
        ).resetAfterReadSendingRollbackMigrationState();
        try {
          await o(
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
    }
    l.registerAfterReadSendingRollbackListener = c;
  },
  98,
);
