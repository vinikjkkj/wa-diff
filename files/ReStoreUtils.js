__d(
  "ReStoreUtils",
  [
    "FBLogger",
    "I64",
    "JSONStringifyBigIntSafe",
    "LSStorage",
    "LSSynchronousPromise",
    "Random",
    "ReQLBounds",
    "ReStoreCommonUtils",
    "ReStoreKeyComparer",
    "ReStoreOperationLock",
    "ReStoreTable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 500;
    async function d(e) {
      for (var t = [], n = await e.next(); !n.done; )
        (t.push(n.value), (n = await e.next()));
      return t;
    }
    function m(e, t, n) {
      var o = e.indexes,
        a = e.primaryKeyIds,
        i = n == null ? a : o[n];
      return i.map(function (e) {
        if (t[e] !== void 0 || n != null) return t[e];
        throw r("FBLogger")("maw_db").mustfixThrow(
          "primary key must be defined on object",
        );
      });
    }
    function p(e, t, n) {
      var r = n[t];
      return r
        ? Object.keys(r).reduce(
            function (e, t) {
              return (
                Object.prototype.hasOwnProperty.call(e, t) || (e[t] = r[t]),
                e
              );
            },
            babelHelpers.extends({}, e),
          )
        : e;
    }
    function _(t, n, r, a, i, l, s) {
      var u = t.table(r.name),
        c = babelHelpers.extends(
          {},
          (e || (e = o("ReQLBounds"))).extendBounds(
            l,
            (a === void 0 ? r.primaryKeyIds : r.indexes[a]).length,
          ),
          { dir: i },
        ),
        d = a == null ? u.tableEntries(n, c) : u.indexEntries(n, a, c);
      return {
        next: function* (t, n) {
          var e = yield* d.next(n);
          if (e.done) return e;
          var o = e.value[1],
            a =
              s == null
                ? o
                : s.afterEntriesNext({ tableName: r.name, value: o }),
            i = a;
          return { done: e.done, value: [e.value[0], i] };
        },
      };
    }
    function f(t, n, r, a, i, l) {
      function s() {
        var u,
          c = t.table(r.name),
          d = c.keys(
            n,
            a,
            babelHelpers.extends(
              {},
              (e || (e = o("ReQLBounds"))).extendBounds(
                l,
                (a === void 0 ? r.primaryKeyIds : r.indexes[a]).length,
              ),
              { dir: i },
            ),
          );
        return (
          (u = {
            next: function* (t, n) {
              return yield* d.next(n);
            },
          }),
          (u[typeof Symbol == "function" ? Symbol.iterator : "@@iterator"] = s),
          u
        );
      }
      return s();
    }
    function g(e, t, n, r, a, i, l) {
      var s = e.table(n),
        u = o("ReStoreOperationLock").isNoopLockProof(i)
          ? o("LSSynchronousPromise").wrapInSyncPromiseIfNotPromise
          : Promise.resolve.bind(Promise),
        c;
      return (
        r != null
          ? (c = u(o("ReStoreCommonUtils").gen(s.indexGet(t, r, a))))
          : (c = u(o("ReStoreCommonUtils").gen(s.tableGet(t, a)))),
        c.then(function (e) {
          if (e !== void 0) return l.afterGet({ tableName: n, value: e });
        })
      );
    }
    function h(e, t, n) {
      return (e.has(t) ? e : e.set(t, n())).get(t);
    }
    function y(e) {
      var t = (s || (s = o("I64"))).cast(e);
      if (t === void 0)
        throw r("FBLogger")("maw_db").mustfixThrow("Expected int64");
      return s.to_float(t);
    }
    function C(e, t, n, o, a) {
      var i = r("JSONStringifyBigIntSafe")([t, n]),
        l = e.get(i);
      (l == null ? o : l[0]) == null && a == null
        ? e.delete(i)
        : e.set(i, [l == null ? o : l[0], a]);
    }
    function* b(e, t, n, r, a, i, l, s, c, d) {
      function p(e, t) {
        return e.length >= t
          ? e
          : [].concat(e, [(u || (u = o("ReStoreKeyComparer"))).MAX_KEY]);
      }
      if (
        !(
          l != null &&
          (u || (u = o("ReStoreKeyComparer"))).compareKey(i, l) === 0
        )
      ) {
        var f = e.tableNames[a],
          g = f.cascadeUpdates,
          h = f.primaryKeyIds,
          y = function* () {
            for (
              var o = C.indexName,
                a = C.tableName,
                u = e.tableNames[a],
                f = u.indexes,
                g = u.primaryKeyIds,
                y = o == null ? g : f[o],
                v = { gte: i, lte: p(i, y.length) },
                L = _(n, r, u, o, "asc", v),
                E = [],
                k = yield* L.next(c);
              !k.done;
            )
              (E.push(k.value), (k = yield* L.next(c)));
            for (var I of E) {
              var T = I[0],
                D = I[1],
                x = m(e.tableNames[a], D);
              if (l === void 0)
                (yield* R(e, t, n, r, a, x, c),
                  yield* b(e, t, n, r, a, x, void 0, s, c, d));
              else {
                var $ = h.reduce(
                  function (e, t, n) {
                    return (n >= l.length || (e[y[n]] = l[n]), e);
                  },
                  babelHelpers.extends({}, D),
                );
                (yield* S(e, t, n, r, a, x, $, s, c, d),
                  yield* b(e, t, n, r, a, x, m(e.tableNames[a], $), s, c, d));
              }
            }
          };
        for (var C of g) yield* y();
      }
    }
    function* v(e, t, n, r, a, i, l, c, d) {
      var _ = n.table(a),
        f = e.tableNames[a];
      if (f.autoIncrement) {
        var g = i[f.primaryKeyIds[0]],
          h = (s || (s = o("I64"))).of_float(
            yield* _.incrementSeed(r, g === void 0 ? g : y(g)),
          );
        i[f.primaryKeyIds[0]] = h;
      }
      var b = m(f, i),
        v = {},
        S = yield* _.tableGet(r, b),
        R = i;
      S !== void 0
        ? (v = L(f, Object.keys(f.indexes), S))
        : (R = p(i, f.name, d));
      var I = yield* _.tableSet(r, b, R),
        T = I[0],
        D = I[1],
        x = L(f, Object.keys(f.indexes), R),
        $ = babelHelpers.extends({}, x);
      for (var P of Object.keys($))
        v[P] !== void 0 &&
          (u || (u = o("ReStoreKeyComparer"))).compareKey(v[P], $[P]) === 0 &&
          (delete $[P], delete v[P]);
      (yield* E(e, t, n, r, a, $, l, c, d), yield* k(n, r, a, T, D ? x : $));
      for (var N of Object.keys(v)) yield* _.indexDelete(r, N, v[N]);
      return (C(t, a, b, S, R), b);
    }
    function* S(e, t, n, r, a, i, l, s, u, c) {
      var d = m(e.tableNames[a], l);
      (o("LSStorage").areKeysEqual(i, d) || (yield* R(e, t, n, r, a, i, u)),
        yield* v(e, t, n, r, a, l, s, u, c));
    }
    function* R(e, t, n, r, o, a, i) {
      var l = n.table(o),
        s = e.tableNames[o],
        u = yield* l.tableGet(r, a);
      if (u !== void 0) {
        if (Object.keys(s.indexes).length)
          for (var c of Object.keys(s.indexes)) {
            var d = m(s, u, c);
            d != null && (yield* l.indexDelete(r, c, d));
          }
        (yield* l.tableDelete(r, a), C(t, o, a, u, void 0));
      }
    }
    function L(e, t, n) {
      return t.reduce(function (t, r) {
        var o,
          a = (o = e.indexPredicates) == null ? void 0 : o[r];
        if (a != null && !a(n)) return t;
        var i = m(e, n, r);
        return ((t[r] = i), t);
      }, {});
    }
    function* E(e, t, n, r, o, a, i, l, s) {
      var u = n.table(o);
      for (var c of Object.keys(a)) {
        var d = a[c],
          p = yield* u.indexGet(r, c, d);
        if (p != null) {
          var _ = m(e.tableNames[o], p);
          (yield* R(e, t, n, r, o, _, l),
            yield* b(e, t, n, r, o, _, void 0, i, l, s));
        }
      }
    }
    function* k(e, t, n, r, o) {
      var a = e.table(n);
      for (var i of Object.keys(o)) {
        var l = o[i];
        l === void 0
          ? yield* a.indexDelete(t, i, l)
          : yield* a.indexSet(t, i, l, r);
      }
    }
    function* I(e, t, n, o, a, i, l, s, u, d) {
      var m = n.table(s),
        p = i.tableNames[s];
      for (var f of u) yield* m.clearIds(o, f);
      var g = u.filter(function (e) {
        return (p == null ? void 0 : p.indexes[e]) != null;
      });
      if (g.length !== 0)
        for (
          var h = _(n, o, p, void 0, "asc", void 0, a),
            y = [],
            C = yield* h.next(d);
          !C.done;
        ) {
          for (; !C.done && y.length <= c; )
            (y.push(C.value), (C = yield* h.next(d)));
          for (var b of y) {
            var v = b[0],
              S = b[1],
              R = L(i.tableNames[s], g, S);
            yield* E(i, e, n, o, s, R, a, d, l);
            var I = r("nullthrows")(yield* m.getId(o, v));
            yield* k(n, o, s, I, R);
          }
          ((y.length = 0), t == null || t());
        }
    }
    var T = "__internal__transaction_id";
    function D(e, t, n, a, i, l, s) {
      var u,
        c = null,
        d = new (o("ReStoreOperationLock").NoopLock)(),
        m = new (o("ReStoreOperationLock").ReStoreOperationLock)(),
        p = s == null ? void 0 : s.qplFlow,
        _ = new Map(),
        f =
          ((u = {}),
          (u[T] = r("Random").uint32()),
          (u.reportUsedTablesForSyncAccess = function (t) {
            c =
              t &&
              t.every(function (e) {
                return i.tablePermitsSynchronousIO(e);
              }) &&
              c !== !1;
          }),
          (u.table = function (s) {
            return new (o("ReStoreTable").ReStoreTransactionTable)(
              s,
              e,
              n,
              m,
              i,
              a,
              f,
              p,
              l,
              t,
            );
          }),
          (u.transactionTable = function (s, u) {
            var r = u != null ? s + "::" + u : s;
            return h(_, r, function () {
              return new (o("ReStoreTable").ReStoreTransactionTable)(
                s,
                e,
                n,
                c === !0 && u != null ? d : m,
                i,
                a,
                f,
                p,
                l,
                t,
              );
            });
          }),
          u),
        g = function (t) {
          Object.defineProperty(f, t, {
            get: function () {
              return f.transactionTable(t);
            },
          });
        };
      for (var y of Object.keys(e.tableNames)) g(y);
      return f;
    }
    function x(e) {
      return e.types.includes("indexeddb");
    }
    ((l.collectIterator = d),
      (l.searchKey = m),
      (l.appendDefaultValues = p),
      (l.entries = _),
      (l.keys = f),
      (l.getLocked = g),
      (l.getOrCreate = h),
      (l.cascadeKeyUpdatesLocked = b),
      (l.putLocked = v),
      (l.upsertLocked = S),
      (l.deleteItemLocked = R),
      (l.indicesWithKeyForValue = L),
      (l.deconflictIndicesLocked = E),
      (l.addIdToIndices = k),
      (l.rebuildIndicesLocked = I),
      (l.createReStoreTransaction = D),
      (l.isPDB = x));
  },
  98,
);
