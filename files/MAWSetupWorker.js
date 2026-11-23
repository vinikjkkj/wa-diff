__d(
  "MAWSetupWorker",
  [
    "CurrentAppID",
    "Deferred",
    "IGDWebUtils",
    "MAWClientConsistencyRefresh",
    "MAWCommonSetupWorker",
    "MAWCrossWorkerPortal",
    "MAWInit",
    "MAWLoggerUtils",
    "MAWMIC",
    "MAWSetupWorkerAuxStateForLogging",
    "MAWUnrecoverableDbErrors",
    "MAWWaitForBackendSetup",
    "MAWWebWorkerSingleton",
    "MAWWorkerBundleResource",
    "MAWWorkerOnClose",
    "MAWWorkerReboot",
    "MAWWorkerWatchdog",
    "MWFBLogger",
    "MWInteractionTracing",
    "MWInteractionTracingKey",
    "QPLUserFlow",
    "SharedWorkerBundleResource",
    "SharedWorkerV4Resource",
    "getErrorSafe",
    "isMWPSearchDiacriticFoldingEnabled",
    "pageID",
    "promiseDone",
    "shouldUseMAWSharedWorker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = o("MWFBLogger")
        .MWLogger()
        .tags([
          o("MAWLoggerUtils").Tag.WorkerSetup,
          o("MAWLoggerUtils").Tag.MAWInit,
        ]),
      _ = o("IGDWebUtils").isInstagramWebSupportedApp(
        Number(o("CurrentAppID").getAppID()),
      ),
      f = _ ? "IGDAWMainWorker" : "MAWMainWorker",
      g = {
        group: "worker-setup",
        id: o("MWInteractionTracingKey").micTraceId(r("pageID")),
      },
      h = null,
      y = !1;
    function C(e) {
      ((y = e),
        (o(
          "MAWSetupWorkerAuxStateForLogging",
        ).WorkerLifeCycleState.workerTerminatedPermanently = e));
    }
    function b() {
      return y;
    }
    function v(e) {
      switch (e) {
        case "mawInit":
          return !0;
        case "mawReinitSetupMutex":
        case "mawReinitReregDevice":
        case "bridgeRecovery":
        case "workerUpgraded":
        case "rebootRequired":
        case "workerTerminated":
        default:
          return !1;
      }
    }
    async function S(t, n, a, i, l, c, d) {
      if (b()) throw p.mustfixThrow("Worker is permanently killed.");
      (o("MAWWaitForBackendSetup").markBackendSetupStarted(),
        l === "backendSetupFailure" &&
          o("SharedWorkerV4Resource").clearV4HrpCache(
            r("MAWWorkerBundleResource").name,
          ));
      var m = function (r) {
        return S(t, n, a, i, r, c, d);
      };
      ((l === "bridgeRecovery" || l === "backendSetupFailure") &&
        r("QPLUserFlow").addPoint(
          o("MAWWorkerReboot").BAD_STATE_RECOVERY_QPL,
          "create_worker_start",
        ),
        o("MAWWebWorkerSingleton").setOnCloseForWorkerInstance(
          function (e, t, n) {
            o("MAWWorkerOnClose").startQPL(e, n, t);
            var a = e != null ? e : "unknown",
              i = D(a) && o("MAWWaitForBackendSetup").isBackendSetupSettled();
            if (
              (o(
                "MAWSetupWorkerAuxStateForLogging",
              ).WorkerLifeCycleState.restartReasons.push(a),
              o(
                "MAWSetupWorkerAuxStateForLogging",
              ).WorkerLifeCycleState.restartMessageTypes.push(
                n != null ? n : "unknown",
              ),
              o("MAWWaitForBackendSetup").getCurrentWorkerID() == null ||
                t !== o("MAWWaitForBackendSetup").getCurrentWorkerID())
            ) {
              (o("MAWInit").MAWInit.logPoint(a + "_worker_termination_skipped"),
                o("MAWMIC").addPoint(a + "_worker_termination_skipped"),
                o("MAWWorkerOnClose").success(a + "_worker_restart_skipped"),
                p.warn(
                  "Worker termination skipped %s. Terminate reason: %s, Worker: %s, current worker: %s",
                  l,
                  e,
                  t,
                  o("MAWWaitForBackendSetup").getCurrentWorkerID(),
                ));
              return;
            }
            (o("MAWWebWorkerSingleton").resetCurrentWorkerSkipIdCheck(),
              p.warn(
                "Worker termination started %s. Terminate reason: %s, Worker: %s",
                l,
                e,
                t,
              ),
              o("MAWInit").MAWInit.logPoint(a + "_worker_terminated"),
              o("MAWMIC").addPoint(a + "_worker_terminated"),
              o("MAWInit").MAWInit.addStringArrayAnnotation(
                "workerTerminationReason",
                o("MAWSetupWorkerAuxStateForLogging").WorkerLifeCycleState
                  .restartReasons,
              ),
              o("MAWMIC").addStringArrayAnnotation(
                "workerTerminationReason",
                o("MAWSetupWorkerAuxStateForLogging").WorkerLifeCycleState
                  .restartReasons,
              ),
              o("MAWInit").MAWInit.addStringArrayAnnotation(
                "workerTerminationMsgType",
                o("MAWSetupWorkerAuxStateForLogging").WorkerLifeCycleState
                  .restartMessageTypes,
              ),
              o("MAWMIC").addStringArrayAnnotation(
                "workerTerminationMsgType",
                o("MAWSetupWorkerAuxStateForLogging").WorkerLifeCycleState
                  .restartMessageTypes,
              ));
            var s =
              e === "requested-upgrade"
                ? "workerUpgraded"
                : a + "_worker_terminated";
            r("promiseDone")(T(), function () {
              if (i) {
                (C(!0),
                  p.warn("Tab displays soft refresh. Flow: %s", a),
                  o("MAWInit").MAWInit.logPoint(a + "_soft_refresh"),
                  o("MAWMIC").addPoint(a + "_soft_refresh"),
                  r("MAWClientConsistencyRefresh")("maw_request_refresh"),
                  o("MAWWorkerOnClose").success("softRefresh"));
                return;
              }
              if (a !== "logout")
                return m(s)
                  .then(function () {
                    return o("MAWWorkerOnClose").success(s);
                  })
                  .catch(function (e) {
                    var t = r("getErrorSafe")(e);
                    (o("MAWInit").MAWInit.fail("worker_restart_failed", t),
                      o("MAWWorkerOnClose").fail("workerUpgradeFailed", t),
                      o("MAWWaitForBackendSetup").rejectBackendSetup(t),
                      o("MAWWaitForBackendSetup").getCurrentWorkerID() ==
                        null &&
                        o("MAWUnrecoverableDbErrors").getError() == null &&
                        (o("MAWInit").MAWInit.logPoint(
                          a + "_restart_failed_recovery_ui",
                        ),
                        o("MAWMIC").addPoint(a + "_restart_failed_recovery_ui"),
                        o("MAWUnrecoverableDbErrors").setError(
                          new (o(
                            "MAWUnrecoverableDbErrors",
                          ).MAWWorkerRestartFailedError)(),
                        )));
                  });
              (o("SharedWorkerV4Resource").clearV4HrpCache(f),
                o("MAWWorkerOnClose").success("skip_logout"));
            });
          },
        ));
      var _ = await r("MWInteractionTracing").trace(
          g,
          "MAWSetupWorker.createWorker",
          { annotations: { reason: l } },
          function () {
            return o("MAWWebWorkerSingleton").createWorkerIfNone(l);
          },
        ),
        y = _.worker,
        v = _.workerID;
      o("MAWWaitForBackendSetup").setCurrentWorker(v);
      var R = new (r("Deferred"))();
      ((h = R.getPromise()),
        (l === "bridgeRecovery" || l === "backendSetupFailure") &&
          r("QPLUserFlow").addPoint(
            o("MAWWorkerReboot").BAD_STATE_RECOVERY_QPL,
            "create_worker_end",
          ));
      var L = o("shouldUseMAWSharedWorker").shouldUseMAWSharedWorker();
      (p.DEBUG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "worker setting up with reason: ",
            ", use shared worker: ",
            "",
          ])),
        l,
        L,
      ),
        L &&
          y.addEventListener("message", function (e) {
            var t, n;
            typeof e.data == "object" &&
              ((t = e.data) == null ? void 0 : t.type) === "sw-shutdown" &&
              typeof e.data.response == "object" &&
              ((n = e.data.response) == null ? void 0 : n.reason) ===
                "maw-request-refresh" &&
              r("MAWClientConsistencyRefresh")("maw_request_refresh");
          }));
      var E = new (o("MAWCommonSetupWorker").BridgeAdapter)(y, f);
      return (
        await r("MWInteractionTracing").trace(
          g,
          "MAWSetupWorker.setupBridge",
          { annotations: { workerID: v, workerName: f } },
          function () {
            return Promise.resolve(n(E));
          },
        ),
        R.resolve(E),
        p.DEBUG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "bridge promise resolved",
            ])),
        ),
        o("MAWMIC").addPoint(l + "_connect_to_backend"),
        await r("MWInteractionTracing").trace(
          g,
          "MAWSetupWorker.initWorker",
          { annotations: { reason: l } },
          function () {
            return o("MAWInit").MAWInit.measurePerformance(
              l + "-init_backend",
              async function () {
                var e = function (n) {
                    return o("MAWCommonSetupWorker").initWorker({
                      bridge: E,
                      diacriticSearchEnabled: r(
                        "isMWPSearchDiacriticFoldingEnabled",
                      )()
                        ? !0
                        : void 0,
                      ebState: n,
                      onWorkerAlreadySetup: a,
                      onWorkerRestart: m,
                      reason: l,
                      vaultMaterials: t,
                    });
                  },
                  n = L
                    ? await e(d)
                    : await E.fullyConnected.then(function () {
                        return e(d);
                      });
                (o("MAWWaitForBackendSetup").resolveBackendSetup(n),
                  p.DEBUG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "backend setup successful",
                      ])),
                  ));
              },
            );
          },
        ),
        await r("MWInteractionTracing").trace(
          g,
          "MAWSetupWorker.waitForBackendSetup",
          {},
          function () {
            return o("MAWWaitForBackendSetup").waitForBackendSetup(
              "setup-worker",
            );
          },
        )
      );
    }
    function R(e, t, n, a, i, l, s) {
      var u = S(e, t, n, a, i, l, s);
      return (
        v(i) &&
          r("promiseDone")(
            o("MAWWaitForBackendSetup")
              .waitForBackendSetup("init worker watchdog")
              .then(function () {
                o("MAWWorkerWatchdog").startWatchdog();
              }),
          ),
        u
      );
    }
    async function L(e) {
      return (
        p.debug("Terminating dedicated worker: %s. Bridge Promise: %s", e, !!h),
        h
          ? (p.DEBUG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "worker terminating: for ",
                  "",
                ])),
              e,
            ),
            await T(),
            !0)
          : (p.DEBUG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "worker doesn't exist, no need to terminate",
                ])),
            ),
            !1)
      );
    }
    async function E() {
      (await L("terminateWorkerPermanently"), C(!0));
    }
    function k(e, t) {
      return o("SharedWorkerBundleResource").terminateSharedWorker(
        r("MAWWorkerBundleResource"),
        null,
        e ? "maw-request-refresh" : t != null ? t : "unknown",
      );
    }
    async function I(e) {
      var t = o("shouldUseMAWSharedWorker").shouldUseMAWSharedWorker();
      if (t) {
        p.debug("Terminating shared worker: %s", e);
        var n = await k(!1, e).then(
          function () {
            return !0;
          },
          function () {
            return !1;
          },
        );
        p.DEBUG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "Shared worker responded to termination request: ",
              "",
            ])),
          n,
        );
      } else await L(e);
    }
    async function T() {
      var e;
      (p.debug("Updating worker state on termination"),
        (e = await h) == null || e.close(),
        (h = null),
        o("MAWWaitForBackendSetup").resetBackendSetup(),
        o("MAWCrossWorkerPortal").killPortalWhenWorkerTerminating(),
        o("MAWWebWorkerSingleton").resetWorkerCreation());
    }
    function D(e) {
      return !!(
        e === "MAWEARKeychainDecryptionError" ||
        o("MAWUnrecoverableDbErrors").isUnrecoverableDbErrorByName(e) ||
        e === "update-required-fbid_change" ||
        e === "update-required-vault_materials_change"
      );
    }
    ((l.setPreventWorkerRestart = C),
      (l.getOrSetupWorker = R),
      (l.terminateDedicatedWorker = L),
      (l.terminateWorkerPermanently = E),
      (l.killSharedWorker = k),
      (l.terminateWorker = I));
  },
  98,
);
