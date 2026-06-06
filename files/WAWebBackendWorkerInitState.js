__d(
  "WAWebBackendWorkerInitState",
  [
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAWebBackendWorkerClient",
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
              c.abProps.promise,
              c.dbInit.promise,
              c.dbFinalKey.promise,
              c.eventBusSyncState.promise,
            ]),
            r = t[0],
            a = t[1],
            i = t[2],
            l = t[3],
            u = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
              o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
            ),
            m = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
              o("WAWebUserPrefsKeys").KEYS.LID,
            );
          yield e.sendAndReceive("workerInit", "setup", {
            globals: {
              deviceJid: o("WAWebGlobals").getMyDeviceJid(),
              allowHistorySyncPutAllowDuplicate:
                o("WAWebGlobals").getAllowHistorySyncPutAllowDuplicate(),
              enableImprovedBulkMerge:
                o("WAWebGlobals").getEnableImprovedBulkMerge(),
              lidDeviceJid: m != null ? String(m) : null,
              displayName: u != null ? String(u) : null,
            },
            abProps: d != null ? d : r,
            dbInit: babelHelpers.extends({}, a, {
              salt: new Uint8Array(a.salt),
            }),
            dbFinalKey: i,
            eventBusSyncState: l,
          });
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
