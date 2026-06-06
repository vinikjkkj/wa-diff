__d(
  "WAWebBackendWorkerInitState",
  [
    "WALogger",
    "WAResolvable",
    "WAWebBackendWorkerClient",
    "WAWebGlobals",
    "WAWebUserPrefsBase",
    "WAWebUserPrefsKeys",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        abProps: new (s = o("WAResolvable")).Resolvable(),
        dbInit: new s.Resolvable(),
        dbFinalKey: new s.Resolvable(),
        eventBusSyncState: new s.Resolvable(),
      },
      c = null;
    function d(t) {
      if (((c = t), !u.abProps.resolveWasCalled())) {
        u.abProps.resolve(t);
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
    function m(e) {
      u.dbInit.resolveWasCalled() ||
        u.dbInit.resolve(
          babelHelpers.extends({}, e, { salt: new Uint8Array(e.salt) }),
        );
    }
    function p(e) {
      u.dbFinalKey.resolveWasCalled() || u.dbFinalKey.resolve(e);
    }
    function _(e) {
      u.eventBusSyncState.resolveWasCalled() || u.eventBusSyncState.resolve(e);
    }
    async function f(e) {
      var t = await Promise.all([
          u.abProps.promise,
          u.dbInit.promise,
          u.dbFinalKey.promise,
          u.eventBusSyncState.promise,
        ]),
        n = t[0],
        r = t[1],
        a = t[2],
        i = t[3],
        l = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
          o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
        ),
        s = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
          o("WAWebUserPrefsKeys").KEYS.LID,
        );
      await e.sendAndReceive("workerInit", "setup", {
        globals: {
          deviceJid: o("WAWebGlobals").getMyDeviceJid(),
          allowHistorySyncPutAllowDuplicate:
            o("WAWebGlobals").getAllowHistorySyncPutAllowDuplicate(),
          enableImprovedBulkMerge:
            o("WAWebGlobals").getEnableImprovedBulkMerge(),
          lidDeviceJid: s != null ? String(s) : null,
          displayName: l != null ? String(l) : null,
        },
        abProps: c != null ? c : n,
        dbInit: babelHelpers.extends({}, r, { salt: new Uint8Array(r.salt) }),
        dbFinalKey: a,
        eventBusSyncState: i,
      });
    }
    ((l.recordInitAbProps = d),
      (l.recordInitDbInit = m),
      (l.recordInitDbFinalKey = p),
      (l.recordInitEventBusSyncState = _),
      (l.sendInitState = f));
  },
  98,
);
