__d(
  "GetLsDatabase",
  [
    "ExecutionEnvironment",
    "LSDefaultSyncGroups",
    "LSPlatformErrorChannel",
    "LSPlatformLsInitLog",
    "MAWDropCutoverThreadsTable",
    "MWLSSchemaEphemeral",
    "MessengerLogHistory",
    "MultipleTabsLogger",
    "Promise",
    "ReStoreDecryptionFailure",
    "ReStoreEARSetupFailure",
    "ReStoreIndexedDbClosedEvent",
    "UserTimingUtils",
    "asyncToGeneratorRuntime",
    "cr:34942",
    "cr:4489",
    "cr:665",
    "promiseDone",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      if (e instanceof r("ReStoreIndexedDbClosedEvent")) {
        var t = e.getError();
        (t instanceof o("ReStoreDecryptionFailure").ReStoreDecryptionFailure ||
          t instanceof o("ReStoreEARSetupFailure").ReStoreEARSetupFailure) &&
          r("LSPlatformErrorChannel").emit(t);
      }
    }
    var c = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = o("MessengerLogHistory").getInstance("db_init");
          (r("promiseDone")(
            o("MultipleTabsLogger")
              .getMultipleTabsAnnotation()
              .then(function (e) {
                (t.debug("Has multiple tabs: " + e),
                  o("MultipleTabsLogger").addAnnotationToQPLEvent(
                    r("qpl")._(25305590, "1127"),
                  ));
              }),
          ),
            t.debug("====Creating DB===="),
            o("LSPlatformLsInitLog").addPoint("vaulting_setup_start"),
            n("cr:4489") != null &&
              n("cr:665") != null &&
              (s || (s = r("ExecutionEnvironment"))).isInBrowser &&
              (t.debug("Vaulting setup started"),
              n("cr:665").setupMainWaLogger(),
              yield o("UserTimingUtils").asyncMeasure(
                "Setup Vaulting Materials",
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  yield n("cr:4489").setupVaultMaterials();
                }),
              ),
              t.debug("Vaulting setup finished")),
            o("LSPlatformLsInitLog").addPoint("vaulting_setup_end"),
            t.debug("Connecting to DB"));
          var a = yield o("MWLSSchemaEphemeral").createDB(u);
          return (
            t.debug("Connection established"),
            yield a.runInTransaction(
              (function () {
                var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (r) {
                    var a =
                        n("cr:34942") == null
                          ? [
                              (e || (e = n("Promise"))).resolve(),
                              (e || (e = n("Promise"))).resolve(),
                            ]
                          : [
                              n("cr:34942").call(r),
                              o("MAWDropCutoverThreadsTable").call(r),
                            ],
                      i = a[0],
                      l = a[1];
                    (yield (e || (e = n("Promise"))).all([i, l]),
                      o("LSPlatformLsInitLog").addPoint(
                        "success_maw_data_deletion",
                      ),
                      t.debug("Seeding DB"),
                      yield o("LSDefaultSyncGroups").seedDb(r, void 0),
                      t.debug("DB seeded"));
                  },
                );
                return function (e) {
                  return r.apply(this, arguments);
                };
              })(),
              "readwrite",
              "ui",
              void 0,
              i.id + ":78",
            ),
            t.debug("====DB created===="),
            a
          );
        });
        return function () {
          return t.apply(this, arguments);
        };
      })(),
      d;
    function m() {
      return (
        d == null &&
          (d = (s || (s = r("ExecutionEnvironment"))).isInBrowser
            ? c()
            : new (e || (e = n("Promise")))(function () {})),
        d
      );
    }
    l.get = m;
  },
  98,
);
