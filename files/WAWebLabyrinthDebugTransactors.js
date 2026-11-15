__d(
  "WAWebLabyrinthDebugTransactors",
  [
    "Promise",
    "WAResultOrError",
    "WAWebLabyrinthDebugStores",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return e.stores.backup.get(
        o("WAWebLabyrinthDebugStores").LABYRINTH_DEBUG_SINGLETON_ID,
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield s(e);
          return n != null && n.ownerAccountId !== t
            ? o("WAResultOrError").makeError({ kind: "not-owned" })
            : o("WAResultOrError").makeResult(n != null ? n : null);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = yield u(t, r);
          if (!a.success) return a;
          var i = a.value;
          if (i == null) return o("WAResultOrError").makeResult(null);
          var l = yield (e || (e = n("Promise"))).all([p(t), _(t, i)]),
            s = l[0],
            c = l[1];
          return s == null || c == null
            ? o("WAResultOrError").makeResult(null)
            : o("WAResultOrError").makeResult({
                backup: i,
                currentEpoch: c,
                device: s,
              });
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return e.stores.device.get(
        o("WAWebLabyrinthDebugStores").LABYRINTH_DEBUG_SINGLETON_ID,
      );
    }
    function _(e, t) {
      return e.stores.epoch.get(t.activeServerEpochId);
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.stores.companionOnboarding.get(
            o("WAWebLabyrinthDebugStores").LABYRINTH_DEBUG_SINGLETON_ID,
          );
          return n != null && n.ownerAccountId !== t
            ? o("WAResultOrError").makeError({ kind: "not-owned" })
            : o("WAResultOrError").makeResult(n != null ? n : null);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          yield (e || (e = n("Promise"))).all([
            t.stores.backup.clear(),
            t.stores.companionOnboarding.clear(),
            t.stores.device.clear(),
            t.stores.epoch.clear(),
          ]);
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n, r;
          (yield h(e),
            yield e.stores.epoch.bulkPut([t.activeEpoch]),
            yield e.stores.device.bulkPut([
              babelHelpers.extends({}, t.device, {
                id: o("WAWebLabyrinthDebugStores").LABYRINTH_DEBUG_SINGLETON_ID,
              }),
            ]),
            yield e.stores.backup.bulkPut([
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
        })),
        b.apply(this, arguments)
      );
    }
    ((l.readBackup = s),
      (l.readOwnedBackup = u),
      (l.readOwnedRows = d),
      (l.readDevice = p),
      (l.readActiveEpoch = _),
      (l.readOwnedCompanionOnboarding = f),
      (l.clearAllStores = h),
      (l.replaceWithNewBackup = C));
  },
  98,
);
