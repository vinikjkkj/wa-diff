__d(
  "WormIDbUpgrade",
  [
    "WATimeUtils",
    "WormIDbEARKeychain",
    "WormIDbTypes",
    "WormIDbUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r = [],
        o = [],
        a = new Map(),
        i = Array.from(Object.keys(n)).map(function (e) {
          return e.toString();
        }),
        l = new Set(i);
      for (var s of Object.keys(n))
        if (!e.objectStoreNames.contains(s)) r.push(s);
        else {
          var u,
            c = n[s],
            d = (u = c.indexes) != null ? u : {},
            m = t.objectStore(s),
            p = m.indexNames,
            _ = new Set(Object.keys(d)),
            f = [],
            g = [];
          for (var h of _)
            p.contains(h)
              ? m.index(h).unique !== d[h].unique && (f.push(h), g.push(h))
              : f.push(h);
          for (var y = 0; y < p.length; y++) {
            var C = p[y];
            _.has(C) || g.push(C);
          }
          (f.length > 0 || g.length > 0) &&
            a.set(s, { indexesToCreate: f, indexesToDelete: g });
        }
      for (var b = 0; b < e.objectStoreNames.length; b++) {
        var v = e.objectStoreNames[b];
        l.has(v) || o.push(v);
      }
      return { storesToCreate: r, storesToDelete: o, storesToModify: a };
    }
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!e.objectStoreNames.contains(o("WormIDbTypes").DB_VERSION_STORE))
            return { isNewDb: !0, shouldUpgrade: !0 };
          var n = e.transaction(o("WormIDbTypes").DB_VERSION_STORE, "readonly"),
            r = yield o("WormIDbUtils").promisifyIDbRequest(
              n
                .objectStore(o("WormIDbTypes").DB_VERSION_STORE)
                .get(o("WormIDbTypes").SCHEMA_HASH_KEY),
            );
          return {
            isNewDb: !1,
            shouldUpgrade: (r == null ? void 0 : r.value) !== t,
          };
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return Object.keys(o("WormIDbTypes").sysSchema).some(function (t) {
        return e.objectStoreNames.contains(t) === !1;
      });
    }
    function d(e, t, n) {
      for (var r of n) {
        var o = t[r],
          a = e.createObjectStore(r, {
            autoIncrement: !!o.autoIncrement,
            keyPath: o.primaryKey,
          }),
          i = o.indexes;
        if (i != null)
          for (var l of Object.keys(i)) {
            var s = i[l];
            a.createIndex(
              l,
              s.fields.map(function (e) {
                return e.toString();
              }),
              { unique: s.unique },
            );
          }
      }
    }
    function m(e, t, n) {
      var r = [];
      for (var o of n) {
        var a = o[0],
          i = o[1],
          l = i.indexesToCreate,
          s = i.indexesToDelete;
        for (var u of s) e.objectStore(a).deleteIndex(u);
        var c = t[a].indexes;
        if (c != null) {
          var d = !1;
          for (var m of l) {
            var p = c[m];
            (e
              .objectStore(a)
              .createIndex(m, [].concat(p.fields), { unique: p.unique }),
              (d = !0));
          }
          d && r.push(a);
        }
      }
      return r;
    }
    function p(e, t, n, r) {
      var o = function (o) {
        if (t[o].secure !== !0) return 1;
        var n = o,
          a = e.objectStore(n).getAll();
        a.onsuccess = function () {
          var t = a.result;
          t.forEach(function (t) {
            t != null &&
              e
                .objectStore(o)
                .put(
                  r.maybeEncrypt(
                    r.maybeDecrypt(t, n, "dbUpgrade", void 0, {
                      shouldNotFailIfEntityIsNotEncrypted: !0,
                    }),
                    n,
                    void 0,
                  ),
                );
          });
        };
      };
      for (var a of n) o(a);
    }
    function _(t, n, r, o) {
      var a = e(t, n, r),
        i = a.storesToCreate,
        l = a.storesToDelete,
        s = a.storesToModify;
      d(t, r, i);
      for (var u of l) o.has(u) && t.deleteObjectStore(u);
      return m(n, r, s);
    }
    function f(e, t, n) {
      (e
        .objectStore(o("WormIDbTypes").DB_VERSION_STORE)
        .put({ key: o("WormIDbTypes").SCHEMA_HASH_KEY, value: t }),
        n &&
          e
            .objectStore(o("WormIDbTypes").DB_VERSION_STORE)
            .put({
              key: o("WormIDbTypes").DB_CREATION_TS,
              value: o("WATimeUtils").performanceAbsoluteNow(),
            }));
    }
    function g(t, n, r) {
      var o = e(t, n, r),
        a = o.storesToCreate;
      d(t, r, a);
    }
    function h(e, t, n, r, o) {
      var a = o.ear,
        i = _(e, t, n, o.safeToDeleteStores);
      (a != null && p(t, n, i, a), f(t, r, o.isNewDbInstance));
    }
    function y(e, t, n, r, a) {
      var i = a.ear,
        l = _(e, t, n, a.safeToDeleteStores),
        s = t.objectStore(o("WormIDbTypes").EAR_STORE),
        u = s.getAll();
      ((u.onsuccess = function () {
        var e,
          r = o("WormIDbEARKeychain").reconcileKeychain(
            (e = u.result) != null ? e : [],
          ),
          a = r.curVersion,
          c = r.needNewVersion,
          d = r.versions;
        if (c) {
          var m = babelHelpers.extends({}, i.prepareNewKeyVersion(), {
            version: a + 1,
          });
          (s.add(m), d.push(m));
        }
        (i.init(d), p(t, n, l, i));
      }),
        f(t, r, a.isNewDbInstance));
    }
    ((l.shouldUpgradeDb = s),
      (l.hasMissingSysStores = c),
      (l.createMissingStores = g),
      (l.upgradeDb = h),
      (l.upgradeDbAndInitEAR = y));
  },
  98,
);
