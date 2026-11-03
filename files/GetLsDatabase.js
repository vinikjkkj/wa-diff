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
    "ReStoreDecryptionFailure",
    "ReStoreEARSetupFailure",
    "ReStoreIndexedDbClosedEvent",
    "UserTimingUtils",
    "cr:34942",
    "cr:4489",
    "cr:665",
    "promiseDone",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      if (e instanceof r("ReStoreIndexedDbClosedEvent")) {
        var t = e.getError();
        (t instanceof o("ReStoreDecryptionFailure").ReStoreDecryptionFailure ||
          t instanceof o("ReStoreEARSetupFailure").ReStoreEARSetupFailure) &&
          r("LSPlatformErrorChannel").emit(t);
      }
    }
    var u = async function () {
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
            (e || (e = r("ExecutionEnvironment"))).isInBrowser &&
            (t.debug("Vaulting setup started"),
            n("cr:665").setupMainWaLogger(),
            await o("UserTimingUtils").asyncMeasure(
              "Setup Vaulting Materials",
              async function () {
                await n("cr:4489").setupVaultMaterials();
              },
            ),
            t.debug("Vaulting setup finished")),
          o("LSPlatformLsInitLog").addPoint("vaulting_setup_end"),
          t.debug("Connecting to DB"));
        var a = await o("MWLSSchemaEphemeral").createDB(s);
        return (
          t.debug("Connection established"),
          await a.runInTransaction(
            async function (e) {
              var r =
                  n("cr:34942") == null
                    ? [Promise.resolve(), Promise.resolve()]
                    : [
                        n("cr:34942").call(e),
                        o("MAWDropCutoverThreadsTable").call(e),
                      ],
                a = r[0],
                i = r[1];
              (await Promise.all([a, i]),
                o("LSPlatformLsInitLog").addPoint("success_maw_data_deletion"),
                t.debug("Seeding DB"),
                await o("LSDefaultSyncGroups").seedDb(e, void 0),
                t.debug("DB seeded"));
            },
            "readwrite",
            "ui",
            void 0,
            i.id + ":78",
          ),
          t.debug("====DB created===="),
          a
        );
      },
      c;
    function d() {
      return (
        c == null &&
          (c = (e || (e = r("ExecutionEnvironment"))).isInBrowser
            ? u()
            : new Promise(function () {})),
        c
      );
    }
    l.get = d;
  },
  98,
);
