__d(
  "WASignalIdentityStore",
  ["WAJids", "WALogger", "WASignalEntityStoreV2"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {
          ((this.$1 = new Map()),
            (this.$2 = new (o("WASignalEntityStoreV2").SignalEntityStore)()));
        }
        var n = t.prototype;
        return (
          (n.bulkLoadIdentities = async function (t) {
            var e = this,
              n = async function () {
                var t = r[0],
                  n = r[1];
                await e.loadIdentitiesByUser(t, function () {
                  return Promise.resolve(n);
                });
              };
            for (var r of t) await n();
            return t;
          }),
          (n.loadIdentitiesByUser = async function (n, r) {
            var t = this.$1.get(n);
            if (t == null) {
              var a = this.$3(n, await r(n)),
                i = Array.from(a.keys());
              return (
                this.$1.set(n, new Set(i)),
                this.$2.bulkLoad(i, function () {
                  return Promise.resolve(a);
                })
              );
            } else
              return this.$2.bulkLoad(Array.from(t), function (t) {
                return (
                  t.length > 0 &&
                    o("WALogger").ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[WASignalIdentityStore] This should never happen.",
                        ])),
                    ),
                  Promise.resolve(new Map())
                );
              });
          }),
          (n.$3 = function (t, n) {
            var e = new Map(n),
              r = this.$2.pureSnapshot(),
              a = r.remove,
              i = r.update;
            for (var l of a) {
              var s = l.id;
              e.delete(s);
            }
            for (var u of i) {
              var c = u.cachedEntity,
                d = u.id;
              c != null && o("WAJids").extractUserJid(d) === t && e.set(d, c);
            }
            return e;
          }),
          (n.store = function (t, n) {
            this.$2.store(t, n);
            var e = o("WAJids").extractUserJid(t),
              r = this.$1.get(e);
            r != null && r.add(t);
          }),
          (n.remove = function (t) {
            this.$2.remove(t);
            var e = o("WAJids").extractUserJid(t),
              n = this.$1.get(e);
            n != null && n.delete(t);
          }),
          (n.clear = function () {
            (this.$2.clear(), (this.$1 = new Map()));
          }),
          (n.load = function (t, n) {
            return this.$2.load(t, n);
          }),
          (n.bulkLoad = function (t, n) {
            return this.$2.bulkLoad(t, n);
          }),
          (n.snapshot = function () {
            return this.$2.snapshot();
          }),
          (n.pureSnapshot = function () {
            return this.pureSnapshot();
          }),
          (n.markSnapshotAsCommitted = function () {
            this.$2.markSnapshotAsCommitted();
          }),
          (n.markSnapshotAsFailed = function () {
            this.$2.markSnapshotAsFailed();
          }),
          t
        );
      })();
    l.SignalIdentityStore = s;
  },
  98,
);
