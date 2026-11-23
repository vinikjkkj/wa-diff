__d(
  "MAWDbFactory",
  [
    "ClientConsistencyEventEmitter",
    "Deferred",
    "MAWCurrentUser",
    "MAWDbVersion",
    "MAWDexieTable",
    "MAWGetDbVersion",
    "MAWIDbSetupQplEventListener",
    "MAWIndexedDBDeletion",
    "MAWIndexedDbMetadata",
    "MAWLowLevelApiTypes",
    "MAWQplProxy",
    "MAWReliabilityMonitor",
    "MWFBLogger",
    "getErrorSafe",
    "gkx",
    "promiseDone",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = ["backendInitPromise", "middleware", "onDbPopulate"];
    function h(t, n) {
      var a = null,
        i = o("MWFBLogger").MWLogger().tags(["db", t, n]),
        l = new (r("Deferred"))(),
        h = !1,
        y = !1,
        C,
        b = !1,
        v = null,
        S =
          n !== "worker"
            ? null
            : o(
                "MAWReliabilityMonitor",
              ).MAWReliabilityMonitorSingleton.startMonitoring(
                "DB_" + t + "_" + n,
                function () {
                  return {
                    extra: { isMakingDB: String(h), willBeSetup: String(y) },
                    reason: String(v),
                    state: (function () {
                      if (v == null)
                        return o("MAWReliabilityMonitor").HealthReportState
                          .UNKNOWN;
                      switch (v) {
                        case o("MAWLowLevelApiTypes").DatabaseState
                          .Initializing:
                        case o("MAWLowLevelApiTypes").DatabaseState.Upgrading:
                          return o("MAWReliabilityMonitor").HealthReportState
                            .PENDING;
                        case o("MAWLowLevelApiTypes").DatabaseState.Open:
                          return o("MAWReliabilityMonitor").HealthReportState
                            .OK;
                        case o("MAWLowLevelApiTypes").DatabaseState.Closed:
                        case o("MAWLowLevelApiTypes").DatabaseState.Error:
                          return o("MAWReliabilityMonitor").HealthReportState
                            .ERROR;
                      }
                    })(),
                  };
                },
              );
      function R() {
        ((l = new (r("Deferred"))()), C == null || C(), (h = !1), (y = !1));
      }
      function L() {
        return y;
      }
      function E() {
        return l.getPromise().then(function () {
          return b;
        });
      }
      async function k(L, E, k) {
        var I = E.backendInitPromise,
          T = E.middleware,
          D = E.onDbPopulate,
          x = babelHelpers.objectWithoutPropertiesLoose(E, g),
          $ = o("MAWCurrentUser").getID(),
          P = o("MAWIndexedDbMetadata").dbName($),
          N = r("qpl")._(25310776, "6155");
        function M(e) {
          ((v = e), S == null || S.updateState());
        }
        if (a != null) {
          (i.DEBUG(
            e || (e = babelHelpers.taggedTemplateLiteralLoose(["DB exists"])),
          ),
            o("MAWQplProxy").sendQplPointThroughBridge(
              N,
              "database_" + t + "_exsists",
            ));
          return;
        }
        var w = o("MAWQplProxy").startQplUserFlow(
          r("qpl")._(1056836116, "905"),
          { string: { db: t, name: P } },
        );
        if (((y = !0), h))
          return (
            o("MAWQplProxy").sendQplPointThroughBridge(
              N,
              "database_" + t + "_make_in_progress",
            ),
            l.getPromise()
          );
        (i.DEBUG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "Starting DB Setup",
            ])),
        ),
          (h = !0),
          o("MAWQplProxy").sendQplPointThroughBridge(
            N,
            "database_" + t + "_make_started",
          ),
          (C = o("MAWIDbSetupQplEventListener").trackDbSetupFailure(
            w,
            function () {
              (M(o("MAWLowLevelApiTypes").DatabaseState.Error),
                l.reject("DB setup failed"),
                o("MAWQplProxy").sendQplPointThroughBridge(
                  N,
                  "database_" + t + "_setup_failed",
                ),
                R());
            },
          )),
          M(o("MAWLowLevelApiTypes").DatabaseState.Initializing));
        var A = await o("MAWDbVersion").getDexieDbVersion(P);
        (A == null && (b = !0),
          w.addAnnotations({ int: { currentVersion: A } }));
        var F = k != null ? k : o("MAWGetDbVersion").getArmadilloDbVersion();
        if (
          (w.addAnnotations({ int: { targetVersion: F } }), I && (A || 0) < F)
        ) {
          (w.addPoint("separate_read_waiting_on_worker_upgrade"),
            i.DEBUG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Waiting for worker to upgrade schema...",
                ])),
            ));
          try {
            await I;
          } catch (e) {
            throw i
              .catching(r("getErrorSafe")(e))
              .mustfixThrow(
                "Worker startup promise rejected, schema upgrade failed.",
              );
          }
          var O = await o("MAWDbVersion").getDexieDbVersion(P);
          if (O !== F)
            throw i.mustfixThrow(
              "Main thread waiting on worker schema upgrade from %s to %s, upgrade failed with version %s",
              A,
              F,
              O,
            );
          A = O;
        } else
          n === "worker" &&
            (o("MAWQplProxy").sendQPLIntAnnotationThroughBridge(
              r("qpl")._(1056839232, "112"),
              "dbVersion",
              A != null ? A : 0,
            ),
            o("MAWQplProxy").sendQPLIntAnnotationThroughBridge(
              r("qpl")._(1056839232, "112"),
              "useSentBytesCache",
              r("gkx")("33008") ? 1 : 0,
            ));
        var B = function (a) {
          var e = o("MAWDbVersion").updateDB(a, w, A, k);
          return (
            !I &&
              n === "worker" &&
              o("MAWQplProxy").sendQPLBoolAnnotationThroughBridge(
                r("qpl")._(1056839232, "112"),
                "dbUpgradeNeeded",
                A !== e,
              ),
            i.DEBUG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "latest pushed version: ",
                  ", current: ",
                  ", requested: ",
                  "",
                ])),
              e,
              A,
              k != null ? k : "<latest>",
            ),
            n === "worker" &&
              (A !== e
                ? o("MAWQplProxy").sendQplPointThroughBridge(
                    N,
                    "database_" + t + "_version_upgraded",
                  )
                : o("MAWQplProxy").sendQplPointThroughBridge(
                    N,
                    "database_" + t + "_version_upgrade_not_required",
                  )),
            e
          );
        };
        return (
          (a = new (o("MAWDexieTable").DexieTable)(
            P,
            function (e) {
              T.forEach(function (t) {
                e.use(t(L));
              });
              var a = B(e);
              (e.on("populate", function (e) {
                if (!e) {
                  (M(o("MAWLowLevelApiTypes").DatabaseState.Error),
                    l.reject("Missing DB for populate event"),
                    w.endFail("on_populata-missing_txn"),
                    o("MAWQplProxy").sendQplPointThroughBridge(
                      N,
                      "database_" + t + "_on_populate_missing_txn",
                    ));
                  return;
                }
                (i.info("MAWDB populated. HasPopulateEvent: %s", !!D),
                  D == null || D(e));
              }),
                e.on("blocked", function () {
                  (i.MUSTFIX(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "DB Open blocked",
                      ])),
                  ),
                    M(o("MAWLowLevelApiTypes").DatabaseState.Error),
                    l.reject("DB Open blocked"),
                    w.endFail("db_blocked"),
                    o("MAWQplProxy").sendQplPointThroughBridge(
                      N,
                      "database_" + t + "_blocked",
                    ),
                    R());
                }),
                e.on("ready", function (e) {
                  if (
                    (i.DEBUG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "MAW DB setup complete",
                        ])),
                    ),
                    (h = !1),
                    e == null)
                  ) {
                    (M(o("MAWLowLevelApiTypes").DatabaseState.Error),
                      i.MUSTFIX(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "DB is null",
                          ])),
                      ),
                      l.reject("DB is null"),
                      w.endFail("db_null"),
                      o("MAWQplProxy").sendQplPointThroughBridge(
                        N,
                        "database_" + t + "_null",
                      ),
                      R());
                    return;
                  }
                  (M(o("MAWLowLevelApiTypes").DatabaseState.Open),
                    C == null || C(),
                    l.resolve(),
                    w.endSuccess({ int: { dbVersion: a } }),
                    o("MAWQplProxy").sendQplPointThroughBridge(
                      N,
                      "database_" + t + "_ready",
                    ));
                }),
                e.on("close", function () {
                  (M(o("MAWLowLevelApiTypes").DatabaseState.Closed),
                    i.WARN(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "DB forcibly closed",
                        ])),
                    ),
                    o("MAWQplProxy").sendQplPointThroughBridge(
                      N,
                      "database_" + t + "_forcibly_closed",
                    ));
                }),
                e.on("versionchange", function (e) {
                  (i.WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "Versionchange detected: (",
                        " -> ",
                        " (event version: ",
                        ", highestUsed: (",
                        "), name: ",
                        "",
                      ])),
                    e == null ? void 0 : e.oldVersion,
                    e == null ? void 0 : e.newVersion,
                    String(e == null ? void 0 : e.version),
                    a,
                    e == null ? void 0 : e.name,
                  ),
                    M(o("MAWLowLevelApiTypes").DatabaseState.Upgrading),
                    n !== "worker" &&
                      r("ClientConsistencyEventEmitter").emit(
                        "softRefresh",
                        "mawdb_versionchange",
                      ),
                    o("MAWQplProxy").sendQplPointThroughBridge(
                      N,
                      "database_" + t + "_versionchange",
                    ));
                }));
            },
            void 0,
            x,
          )),
          o("MAWQplProxy").sendQplPointThroughBridge(
            N,
            "database_" + t + "_make_requested",
          ),
          l.getPromise()
        );
      }
      function I(e) {
        if (a == null)
          throw i.mustfixThrow(
            'IndexDB has not been initialized before executing "' +
              (e != null ? e : "unnamed") +
              '"',
          );
        return a;
      }
      function T(e) {
        return a != null && !h
          ? Promise.resolve(a)
          : ((l = l || new (r("Deferred"))()),
            l.getPromise().then(function () {
              return I(e);
            }));
      }
      async function D() {
        var e = await T();
        (e != null && (e.close(), (a = null)), R());
      }
      function x() {
        ((a = null), R());
      }
      function $(e) {
        r("promiseDone")(D());
        var t = o("MAWIndexedDbMetadata").dbName(
          e != null ? e : o("MAWCurrentUser").getID(),
        );
        (r("promiseDone")(o("MAWIndexedDBDeletion").deleteDB(t, "maw")),
          S == null || S.stopMonitoring());
      }
      return {
        closeDB: D,
        deleteDb: $,
        getDB: T,
        getDBExn: I,
        isNewDb: E,
        makeDB: k,
        reset_singleton_INTERNAL_ONLY: x,
        setupPromise: function () {
          return l.getPromise();
        },
        willSetupDB: L,
      };
    }
    l.makeIDBFactory = h;
  },
  98,
);
