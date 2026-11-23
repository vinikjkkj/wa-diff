__d(
  "WASignalEntityStoreV2",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
        "NOT_PERSISTED",
        "PERSIST_IN_PROGRESS",
        "PERSISTED",
      ]),
      l = (function () {
        function t() {
          this.$1 = new Map();
        }
        var n = t.prototype;
        return (
          (n.TEST_ONLY_LOAD_FROM_MEMORY = function (t) {
            return this.$2(t);
          }),
          (n.$2 = function (t) {
            var e = this.$1.get(t);
            return e != null ? { entity: e.entity, deleted: e.deleted } : null;
          }),
          (n.load = async function (t, n) {
            var e = this.$2(t);
            if (e != null && e.deleted) return null;
            if (e != null && e.entity != null) return e.entity;
            var r = await n(t);
            return (this.$3(t, r), r);
          }),
          (n.bulkLoad = async function (t, n) {
            var e = [],
              r = new Map();
            for (var o of t) {
              var a = this.$2(o);
              if (a == null) {
                e.push(o);
                continue;
              }
              a.deleted || (a.entity != null ? r.set(o, a.entity) : e.push(o));
            }
            var i = await n(e);
            for (var l of i.entries()) {
              var s = l[0],
                u = l[1];
              (r.set(s, u), this.$3(s, u));
            }
            return r;
          }),
          (n.$3 = function (n, r) {
            this.$1.set(n, { entity: r, status: e.PERSISTED, deleted: !1 });
          }),
          (n.store = function (n, r) {
            this.$1.set(n, { entity: r, status: e.NOT_PERSISTED, deleted: !1 });
          }),
          (n.remove = function (n) {
            this.$1.set(n, {
              entity: null,
              status: e.NOT_PERSISTED,
              deleted: !0,
            });
          }),
          (n.pureSnapshot = function () {
            var t = [],
              n = Array.from(this.$1.entries())
                .filter(function (t) {
                  var n = t[0],
                    r = t[1];
                  return r.status === e.NOT_PERSISTED;
                })
                .filter(function (e) {
                  var n = e[0],
                    r = e[1];
                  return (r.deleted && t.push({ id: n }), !r.deleted);
                })
                .filter(function (e) {
                  var t = e[0],
                    n = e[1];
                  return n.entity != null;
                })
                .map(function (e) {
                  var t = e[0],
                    n = e[1];
                  return { id: t, cachedEntity: n.entity };
                });
            return { update: n, remove: t };
          }),
          (n.snapshot = function () {
            var t = this,
              n = this.pureSnapshot();
            return (
              n.remove.forEach(function (n) {
                var r = n.id,
                  o = t.$1.get(r);
                o && (o.status = e.PERSIST_IN_PROGRESS);
              }),
              n.update.forEach(function (n) {
                var r = n.id,
                  o = t.$1.get(r);
                o && (o.status = e.PERSIST_IN_PROGRESS);
              }),
              n
            );
          }),
          (n.markSnapshotAsCommitted = function () {
            this.$1.forEach(function (t) {
              t.status === e.PERSIST_IN_PROGRESS && (t.status = e.PERSISTED);
            });
          }),
          (n.markSnapshotAsFailed = function () {
            this.$1.forEach(function (t) {
              t.status === e.PERSIST_IN_PROGRESS &&
                (t.status = e.NOT_PERSISTED);
            });
          }),
          (n.clear = function () {
            this.$1 = new Map();
          }),
          t
        );
      })();
    i.SignalEntityStore = l;
  },
  66,
);
