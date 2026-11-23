__d(
  "WAWebLabyrinthDebugTransactors",
  ["WAResultOrError", "WAWebLabyrinthDebugStores"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.stores.backup.get(
        o("WAWebLabyrinthDebugStores").LABYRINTH_DEBUG_SINGLETON_ID,
      );
    }
    async function s(t, n) {
      var r = await e(t);
      return r != null && r.ownerAccountId !== n
        ? o("WAResultOrError").makeError({ kind: "not-owned" })
        : o("WAResultOrError").makeResult(r != null ? r : null);
    }
    async function u(e, t) {
      var n = await s(e, t);
      if (!n.success) return n;
      var r = n.value;
      if (r == null) return o("WAResultOrError").makeResult(null);
      var a = await Promise.all([c(e), d(e, r)]),
        i = a[0],
        l = a[1];
      return i == null || l == null
        ? o("WAResultOrError").makeResult(null)
        : o("WAResultOrError").makeResult({
            backup: r,
            currentEpoch: l,
            device: i,
          });
    }
    function c(e) {
      return e.stores.device.get(
        o("WAWebLabyrinthDebugStores").LABYRINTH_DEBUG_SINGLETON_ID,
      );
    }
    function d(e, t) {
      return e.stores.epoch.get(t.activeServerEpochId);
    }
    async function m(e, t) {
      var n = await e.stores.companionOnboarding.get(
        o("WAWebLabyrinthDebugStores").LABYRINTH_DEBUG_SINGLETON_ID,
      );
      return n != null && n.ownerAccountId !== t
        ? o("WAResultOrError").makeError({ kind: "not-owned" })
        : o("WAResultOrError").makeResult(n != null ? n : null);
    }
    async function p(e) {
      await Promise.all([
        e.stores.backup.clear(),
        e.stores.companionOnboarding.clear(),
        e.stores.device.clear(),
        e.stores.epoch.clear(),
      ]);
    }
    async function _(e, t) {
      var n, r;
      (await p(e),
        await e.stores.epoch.bulkPut([t.activeEpoch]),
        await e.stores.device.bulkPut([
          babelHelpers.extends({}, t.device, {
            id: o("WAWebLabyrinthDebugStores").LABYRINTH_DEBUG_SINGLETON_ID,
          }),
        ]),
        await e.stores.backup.bulkPut([
          {
            activeServerEpochId: t.activeEpoch.serverEpochId,
            backupId: t.backupId,
            id: o("WAWebLabyrinthDebugStores").LABYRINTH_DEBUG_SINGLETON_ID,
            mailboxId: t.waLabyrinthAccountId,
            ownerAccountId: t.ownerAccountId,
            vdDeviceId:
              (n = (r = t.virtualDevice) == null ? void 0 : r.vdDeviceId) !=
              null
                ? n
                : null,
          },
        ]));
    }
    ((l.readBackup = e),
      (l.readOwnedBackup = s),
      (l.readOwnedRows = u),
      (l.readDevice = c),
      (l.readActiveEpoch = d),
      (l.readOwnedCompanionOnboarding = m),
      (l.clearAllStores = p),
      (l.replaceWithNewBackup = _));
  },
  98,
);
