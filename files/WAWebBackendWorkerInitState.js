__d(
  "WAWebBackendWorkerInitState",
  [
    "WALogger",
    "WAResolvable",
    "WAWebBackendEventBusWorkerCompatible",
    "WAWebBackendWorkerClient",
    "WAWebCallsOnlyGating",
    "WAWebGlobals",
    "WAWebJobsMigrationGating",
    "WAWebUserPrefsBase",
    "WAWebUserPrefsKeys",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 3e4,
      d = {
        abProps: new (u = o("WAResolvable")).Resolvable(),
        dbInit: new u.Resolvable(),
        dbFinalKey: new u.Resolvable(),
        jidsReady: new u.Resolvable(),
        suspiciousHostChecksModule: new u.Resolvable(),
      },
      m = !1,
      p = null;
    function _(t) {
      if (((p = t), !d.abProps.resolveWasCalled())) {
        d.abProps.resolve(t);
        return;
      }
      o("WAWebBackendWorkerClient")
        .getBackendWorkerBridge()
        .then(function (e) {
          return e.sendAndReceive("abProps", "update", t);
        })
        .catch(function (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Error syncing abprops with backend worker: ",
                  "",
                ])),
              r("getErrorSafe")(t),
            )
            .sendLogs("worker-abprop-sync-failed");
        });
    }
    function f(e) {
      d.suspiciousHostChecksModule.resolveWasCalled() ||
        d.suspiciousHostChecksModule.resolve(e);
    }
    function g(e) {
      d.dbInit.resolveWasCalled() ||
        d.dbInit.resolve(
          babelHelpers.extends({}, e, { salt: new Uint8Array(e.salt) }),
        );
    }
    function h(e) {
      d.dbFinalKey.resolveWasCalled() || d.dbFinalKey.resolve(e);
    }
    function y() {
      d.jidsReady.resolveWasCalled() || d.jidsReady.resolve();
    }
    function C() {
      m || ((m = !0), self.setTimeout(b, c));
    }
    function b() {
      var e = [];
      (d.dbInit.resolveWasCalled() || e.push("dbInit"),
        d.jidsReady.resolveWasCalled() || e.push("jidsReady"),
        e.length !== 0 &&
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Backend worker init data not ready after ",
                  "ms, outstanding: ",
                  "",
                ])),
              c,
              e.join(","),
            )
            .sendLogs("backend-worker-init-data-timeout"));
    }
    async function v(e) {
      var t = await Promise.all([d.dbInit.promise, d.jidsReady.promise]),
        n = t[0],
        r = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
          o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
        ),
        a = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
          o("WAWebUserPrefsKeys").KEYS.LID,
        ),
        i = o("WAWebBackendEventBusWorkerCompatible").getBackendEventBus();
      (e.fireAndForget("workerInit", "setup", {
        globals: {
          deviceJid: o("WAWebGlobals").getMaybeMyDeviceJid(),
          allowHistorySyncPutAllowDuplicate:
            o("WAWebGlobals").getAllowHistorySyncPutAllowDuplicate(),
          lidDeviceJid: a != null ? String(a) : null,
          displayName: r != null ? String(r) : null,
          callsOnly: o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled(),
          jobsMigrationGates: o(
            "WAWebJobsMigrationGating",
          ).getJobsMigrationGates(),
        },
        dbInit: babelHelpers.extends({}, n, { salt: new Uint8Array(n.salt) }),
        eventBusSyncState: {
          isMainStreamReadyMd: i.isMainStreamReadyMd,
          isOfflineDeliveryEnd: i.isOfflineDeliveryEnd,
          socketState: i.socketState,
        },
      }),
        d.suspiciousHostChecksModule.promise.then(function (t) {
          e.fireAndForget("workerInit", "setSuspiciousHostChecksModule", {
            wasmModule: t,
          });
        }),
        d.abProps.promise.then(function (t) {
          e.fireAndForget("workerInit", "setAbProps", {
            abProps: p != null ? p : t,
          });
        }),
        d.dbFinalKey.promise.then(function (t) {
          e.fireAndForget("workerInit", "setDbFinalKey", { dbFinalKey: t });
        }));
    }
    ((l.recordInitAbProps = _),
      (l.recordInitSuspiciousHostChecksModule = f),
      (l.recordInitDbInit = g),
      (l.recordInitDbFinalKey = h),
      (l.resolveJidsReady = y),
      (l.startWorkerInitDataTimeout = C),
      (l.sendInitState = v));
  },
  98,
);
