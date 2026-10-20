__d(
  "WAWebBackendWorkerInitState",
  [
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAWebBackendEventBusWorkerCompatible",
    "WAWebBackendWorkerClient",
    "WAWebCallsOnlyGating",
    "WAWebGlobals",
    "WAWebJobsMigrationGating",
    "WAWebUserPrefsBase",
    "WAWebUserPrefsKeys",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 3e4,
      m = {
        abProps: new (c = o("WAResolvable")).Resolvable(),
        dbInit: new c.Resolvable(),
        dbFinalKey: new c.Resolvable(),
        jidsReady: new c.Resolvable(),
      },
      p = !1,
      _ = null;
    function f(t) {
      if (((_ = t), !m.abProps.resolveWasCalled())) {
        m.abProps.resolve(t);
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
    function g(e) {
      m.dbInit.resolveWasCalled() ||
        m.dbInit.resolve(
          babelHelpers.extends({}, e, { salt: new Uint8Array(e.salt) }),
        );
    }
    function h(e) {
      m.dbFinalKey.resolveWasCalled() || m.dbFinalKey.resolve(e);
    }
    function y() {
      m.jidsReady.resolveWasCalled() || m.jidsReady.resolve();
    }
    function C() {
      p || ((p = !0), self.setTimeout(b, d));
    }
    function b() {
      var e = [];
      (m.dbInit.resolveWasCalled() || e.push("dbInit"),
        m.jidsReady.resolveWasCalled() || e.push("jidsReady"),
        e.length !== 0 &&
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Backend worker init data not ready after ",
                  "ms, outstanding: ",
                  "",
                ])),
              d,
              e.join(","),
            )
            .sendLogs("backend-worker-init-data-timeout"));
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (u || (u = n("Promise"))).all([
              m.dbInit.promise,
              m.jidsReady.promise,
            ]),
            r = t[0],
            a = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
              o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
            ),
            i = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
              o("WAWebUserPrefsKeys").KEYS.LID,
            ),
            l = o("WAWebBackendEventBusWorkerCompatible").getBackendEventBus();
          (e.fireAndForget("workerInit", "setup", {
            globals: {
              deviceJid: o("WAWebGlobals").getMyDeviceJid(),
              allowHistorySyncPutAllowDuplicate:
                o("WAWebGlobals").getAllowHistorySyncPutAllowDuplicate(),
              lidDeviceJid: i != null ? String(i) : null,
              displayName: a != null ? String(a) : null,
              callsOnly: o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled(),
              jobsMigrationGates: o(
                "WAWebJobsMigrationGating",
              ).getJobsMigrationGates(),
            },
            dbInit: babelHelpers.extends({}, r, {
              salt: new Uint8Array(r.salt),
            }),
            eventBusSyncState: {
              isMainStreamReadyMd: l.isMainStreamReadyMd,
              isOfflineDeliveryEnd: l.isOfflineDeliveryEnd,
              socketState: l.socketState,
            },
          }),
            m.abProps.promise.then(function (t) {
              e.fireAndForget("workerInit", "setAbProps", {
                abProps: _ != null ? _ : t,
              });
            }),
            m.dbFinalKey.promise.then(function (t) {
              e.fireAndForget("workerInit", "setDbFinalKey", { dbFinalKey: t });
            }));
        })),
        S.apply(this, arguments)
      );
    }
    ((l.recordInitAbProps = f),
      (l.recordInitDbInit = g),
      (l.recordInitDbFinalKey = h),
      (l.resolveJidsReady = y),
      (l.startWorkerInitDataTimeout = C),
      (l.sendInitState = v));
  },
  98,
);
