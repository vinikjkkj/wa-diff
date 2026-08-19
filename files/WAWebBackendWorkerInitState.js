__d(
  "WAWebBackendWorkerInitState",
  [
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAWebBackendWorkerClient",
    "WAWebCallsOnlyGating",
    "WAWebGlobals",
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
      c = {
        abProps: new (u = o("WAResolvable")).Resolvable(),
        dbInit: new u.Resolvable(),
        dbFinalKey: new u.Resolvable(),
        eventBusSyncState: new u.Resolvable(),
      },
      d = null;
    function m(t) {
      if (((d = t), !c.abProps.resolveWasCalled())) {
        c.abProps.resolve(t);
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
    function p(e) {
      c.dbInit.resolveWasCalled() ||
        c.dbInit.resolve(
          babelHelpers.extends({}, e, { salt: new Uint8Array(e.salt) }),
        );
    }
    function _(e) {
      c.dbFinalKey.resolveWasCalled() || c.dbFinalKey.resolve(e);
    }
    function f(e) {
      c.eventBusSyncState.resolveWasCalled() || c.eventBusSyncState.resolve(e);
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (s || (s = n("Promise"))).all([
              c.dbInit.promise,
              c.eventBusSyncState.promise,
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
            },
            dbInit: babelHelpers.extends({}, r, {
              salt: new Uint8Array(r.salt),
            }),
            eventBusSyncState: a,
          }),
            c.abProps.promise.then(function (t) {
              e.fireAndForget("workerInit", "setAbProps", {
                abProps: d != null ? d : t,
              });
            }),
            c.dbFinalKey.promise.then(function (t) {
              e.fireAndForget("workerInit", "setDbFinalKey", { dbFinalKey: t });
            }));
        })),
        h.apply(this, arguments)
      );
    }
    ((l.recordInitAbProps = m),
      (l.recordInitDbInit = p),
      (l.recordInitDbFinalKey = _),
      (l.recordInitEventBusSyncState = f),
      (l.sendInitState = g));
  },
  98,
);
