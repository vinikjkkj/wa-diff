__d(
  "WormIDbUpgrade",
  ["WATimeUtils", "WormIDbTypes", "WormIDbUtils", "asyncToGeneratorRuntime"],
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
    function c(e, t, n) {
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
    function d(t, n, r, a, i) {
      var l = e(t, n, r),
        s = l.storesToCreate,
        u = l.storesToDelete,
        d = l.storesToModify;
      if ((c(t, r, s), !i.onlyCreateNewStores)) {
        for (var m of u) i.safeToDeleteStores.has(m) && t.deleteObjectStore(m);
        var p = function () {
            var e = f[0];
            _ = f[1];
            var t = _.indexesToCreate,
              o = _.indexesToDelete;
            for (var a of o) n.objectStore(e).deleteIndex(a);
            var l = r[e].indexes;
            if (l == null) return 1;
            var s = !1;
            for (var u of t) {
              var c = l[u];
              (n
                .objectStore(e)
                .createIndex(u, [].concat(c.fields), { unique: c.unique }),
                (s = !0));
            }
            if (s && r[e].secure === !0 && i.maybeEar != null) {
              var d = e,
                m = i.maybeEar,
                p = n.objectStore(d).getAll();
              p.onsuccess = function () {
                var t = p.result;
                t.forEach(function (t) {
                  t != null &&
                    n
                      .objectStore(e)
                      .put(
                        m.maybeEncrypt(
                          m.maybeDecrypt(t, d, "dbUpgrade", void 0, {
                            shouldNotFailIfEntityIsNotEncrypted: !0,
                          }),
                          d,
                          void 0,
                        ),
                      );
                });
              };
            }
          },
          _;
        for (var f of d) p();
        (n
          .objectStore(o("WormIDbTypes").DB_VERSION_STORE)
          .put({ key: o("WormIDbTypes").SCHEMA_HASH_KEY, value: a }),
          i.isNewDbInstance &&
            n
              .objectStore(o("WormIDbTypes").DB_VERSION_STORE)
              .put({
                key: o("WormIDbTypes").DB_CREATION_TS,
                value: o("WATimeUtils").performanceAbsoluteNow(),
              }));
      }
    }
    ((l.shouldUpgradeDb = s), (l.upgradeDb = d));
  },
  98,
);
