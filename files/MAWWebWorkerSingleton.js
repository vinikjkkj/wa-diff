__d(
  "MAWWebWorkerSingleton",
  [
    "Deferred",
    "FBLogger",
    "MAWInit",
    "MAWMIC",
    "MAWStartupLoggingUtils",
    "MAWTraceSharedWorkerBootstrap",
    "MAWWaitForBackendSetup",
    "MAWWorkerBundleResource",
    "MAWWorkerHealthStatus",
    "MAWWorkerWatchdogRecovery",
    "MawSharedWorkerV4Gating",
    "SharedWorkerBundleResource",
    "SharedWorkerMigrationUtils",
    "SharedWorkerV4MigrationUtils",
    "SharedWorkerV4Resource",
    "WAResolvable",
    "WebWorkerV2Resource",
    "clearTimeout",
    "err",
    "getErrorSafe",
    "gkx",
    "promiseDone",
    "setTimeout",
    "shouldUseMAWSharedWorker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = function (n) {
        e = n;
      },
      u = function () {
        return e;
      },
      c = _,
      d = new (o("WAResolvable").Resolvable)(),
      m = null;
    function p() {
      return o("shouldUseMAWSharedWorker").shouldUseMAWSharedWorker()
        ? Promise.all([
            o("SharedWorkerMigrationUtils").isStatusLockHeld(
              r("MAWWorkerBundleResource").name,
            ),
            o("SharedWorkerV4MigrationUtils").isV4WorkerRunning(
              r("MAWWorkerBundleResource").name,
            ),
          ]).then(function (e) {
            var t = e[0],
              n = e[1];
            return t || n;
          })
        : Promise.resolve(m !== null);
    }
    function _() {
      y(null);
    }
    function f(e) {
      var t = o("MAWWaitForBackendSetup").getCurrentWorkerID();
      t == null || t !== e || g();
    }
    function g() {
      (o("MAWWaitForBackendSetup").setCurrentWorker(null),
        _(),
        o("MAWWaitForBackendSetup").resetBackendSetup(),
        o("MAWInit").MAWInit.logPoint("reset_current_worker"),
        o("MAWMIC").addPoint("reset_current_worker"));
    }
    function h(e) {
      var t = m;
      if (t)
        return (
          o("MAWMIC").addPoint(e + "_wait_on_worker_creation"),
          o("MAWInit").MAWInit.logPoint(e + "_wait_on_worker_creation"),
          t
        );
      (o("MAWInit").MAWInit.logPoint(e + "_create_worker_start"),
        o("MAWMIC").addPoint(e + "_create_worker_start"),
        r("gkx")("4766"));
      var n = (
        o("shouldUseMAWSharedWorker").shouldUseMAWSharedWorker()
          ? C(e)
          : b().then(function (e) {
              return { worker: e, workerID: "dedicated" };
            })
      ).then(
        function (t) {
          var n = t.worker,
            r = t.workerID;
          return (
            o("MAWMIC").addPoint(e + "_create_worker_end"),
            o("MAWInit").MAWInit.logPoint(e + "_create_worker_end"),
            { worker: n, workerID: r }
          );
        },
        function (e) {
          throw (y(null), e);
        },
      );
      return (y(n), n);
    }
    function y(e) {
      ((m = e),
        o("MAWWorkerHealthStatus").markWorkerCreationPromiseExists(e !== null));
    }
    function C(e) {
      var t = function (t, n, o) {
        r("promiseDone")(
          d.promise.then(function () {
            return c(t, n, o);
          }),
        );
      };
      o("MAWWorkerWatchdogRecovery").setRecoveryForWatchdog(t);
      var n = new (r("Deferred"))(),
        a = async function () {
          var a = await o("SharedWorkerV4MigrationUtils").isV2WorkerRunning(
            r("MAWWorkerBundleResource").name,
          );
          if (
            (o("MAWMIC").addBoolAnnotation("v2WorkerAlive", a),
            !a &&
              "SharedWorker" in window &&
              o("SharedWorkerMigrationUtils").supportsNativeWebLocks() &&
              o("MawSharedWorkerV4Gating").isWorkerV4())
          ) {
            o("MAWMIC").addBoolAnnotation("workerV4", !0);
            try {
              var i = await o("SharedWorkerV4Resource").createSharedWorkerV4(
                  r("MAWWorkerBundleResource"),
                  t,
                  {
                    onQPLEvent: o("MAWStartupLoggingUtils")
                      .logSharedWorkerQPLEvents,
                    reason: e,
                  },
                ),
                l = i.worker,
                u = i.workerID,
                c = i.workerType;
              return (
                s(l),
                o("MAWMIC").addPoint("shared_worker_v4_created"),
                o("MAWMIC").addStringAnnotation("workerID", u),
                o("MAWMIC").addStringAnnotation("workerType", c),
                l.addEventListener("error", function (e) {
                  o("MAWStartupLoggingUtils").logWorkerError(
                    "Shared Worker V4",
                    e,
                    "",
                  );
                }),
                { worker: l.port, workerID: u }
              );
            } catch (e) {
              (o("MAWMIC").addPoint("shared_worker_v4_fallback_to_v2"),
                r("FBLogger")("wmi")
                  .catching(r("getErrorSafe")(e))
                  .mustfix("shared worker v4 init failed"));
            }
          }
          await o("SharedWorkerV4MigrationUtils").detectAndTerminateV4Worker(
            r("MAWWorkerBundleResource").name,
          );
          var d = o("MAWTraceSharedWorkerBootstrap").traceSharedWorkerBootstrap(
            e,
            function (n) {
              return o(
                "SharedWorkerBundleResource",
              ).createPushSafeSharedWebWorkerV2Async(
                r("MAWWorkerBundleResource"),
                t,
                { onQPLEvent: n, reason: e },
              );
            },
          );
          return d.then(function (e) {
            (s(e), o("MAWMIC").addPoint("shared_worker_bundle_created"));
            var t = r("setTimeout")(function () {
                (o("MAWMIC").addPoint("shared_worker_connection_ack_timeout"),
                  n.reject(r("err")("Worker connection ack timeout")));
              }, 1e4),
              a = function (a) {
                var e, i, l;
                if (
                  typeof a.data == "object" &&
                  ((e = a.data) == null ? void 0 : e.type) ===
                    "connection-ack" &&
                  typeof ((i = a.data) == null ? void 0 : i.response) ==
                    "object" &&
                  typeof ((l = a.data) == null || (l = l.response) == null
                    ? void 0
                    : l.from) == "string"
                ) {
                  var s,
                    u,
                    c =
                      typeof ((s = a.data) == null || (s = s.response) == null
                        ? void 0
                        : s.workerID) == "string"
                        ? (u = a.data) == null || (u = u.response) == null
                          ? void 0
                          : u.workerID
                        : void 0;
                  c != null
                    ? (o("MAWMIC").addPoint("shared_worker_workerID_received"),
                      o("MAWMIC").addStringAnnotation("workerID", c),
                      t != null && r("clearTimeout")(t),
                      n.resolve(c))
                    : (o("MAWMIC").addPoint(
                        "shared_worker_null_workerID_received",
                      ),
                      o("MAWMIC").addStringAnnotation("workerID", "unknown"));
                }
              };
            return (
              e.port.addEventListener("message", a),
              e.port.postMessage({ type: "ww-connection-ack" }),
              e.addEventListener("error", function (e) {
                o("MAWStartupLoggingUtils").logWorkerError(
                  "Shared Worker",
                  e,
                  "",
                );
              }),
              n.getPromise().then(function (t) {
                return { worker: e.port, workerID: t };
              })
            );
          });
        };
      return o("SharedWorkerV4MigrationUtils").withWorkerInitLock(
        r("MAWWorkerBundleResource").name,
        a,
      );
    }
    function b() {
      return Promise.resolve(
        o("WebWorkerV2Resource").createDedicatedV2WebWorker(
          r("MAWWorkerBundleResource"),
        ),
      ).then(function (e) {
        var t = e.url,
          n = e.worker;
        return (
          (n.onerror = function (e) {
            return o("MAWStartupLoggingUtils").logWorkerError(
              "Dedicated Worker",
              e,
              t,
            );
          }),
          o("MAWStartupLoggingUtils").setImportScriptsErrorListener(n),
          n
        );
      });
    }
    function v(e) {
      ((c = e), d.resolve());
    }
    ((l.getSharedWorkerInstance__TEST_ONLY = u),
      (l.doesWorkerExist = p),
      (l.resetWorkerCreation = _),
      (l.resetCurrentWorkerWithId = f),
      (l.resetCurrentWorkerSkipIdCheck = g),
      (l.createWorkerIfNone = h),
      (l.setOnCloseForWorkerInstance = v));
  },
  98,
);
