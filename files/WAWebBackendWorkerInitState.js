__d(
  "WAWebBackendWorkerInitState",
  [
    "Promise",
    "WALogger",
    "WAResolvable",
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
        eventBusSyncState: new c.Resolvable(),
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
    function y(e) {
      m.eventBusSyncState.resolveWasCalled() || m.eventBusSyncState.resolve(e);
    }
    function C() {
      m.jidsReady.resolveWasCalled() || m.jidsReady.resolve();
    }
    function b() {
      p || ((p = !0), self.setTimeout(v, d));
    }
    function v() {
      var e = [];
      (m.dbInit.resolveWasCalled() || e.push("dbInit"),
        m.eventBusSyncState.resolveWasCalled() || e.push("eventBusSyncState"),
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
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (u || (u = n("Promise"))).all([
              m.dbInit.promise,
              m.eventBusSyncState.promise,
              m.jidsReady.promise,
            ]),
            r = t[0],
            a = t[1],
            i = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
              o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
            ),
            l = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
              o("WAWebUserPrefsKeys").KEYS.LID,
            );
          (e.fireAndForget("workerInit", "setup", {
            globals: {
              deviceJid: o("WAWebGlobals").getMyDeviceJid(),
              allowHistorySyncPutAllowDuplicate:
                o("WAWebGlobals").getAllowHistorySyncPutAllowDuplicate(),
              enableImprovedBulkMerge:
                o("WAWebGlobals").getEnableImprovedBulkMerge(),
              lidDeviceJid: l != null ? String(l) : null,
              displayName: i != null ? String(i) : null,
              callsOnly: o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled(),
              jobsMigrationGates: o(
                "WAWebJobsMigrationGating",
              ).getJobsMigrationGates(),
            },
            dbInit: babelHelpers.extends({}, r, {
              salt: new Uint8Array(r.salt),
            }),
            eventBusSyncState: a,
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
        R.apply(this, arguments)
      );
    }
    ((l.recordInitAbProps = f),
      (l.recordInitDbInit = g),
      (l.recordInitDbFinalKey = h),
      (l.recordInitEventBusSyncState = y),
      (l.resolveJidsReady = C),
      (l.startWorkerInitDataTimeout = b),
      (l.sendInitState = S));
  },
  98,
);
