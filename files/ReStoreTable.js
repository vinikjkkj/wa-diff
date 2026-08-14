__d(
  "ReStoreTable",
  [
    "FBLogger",
    "I64",
    "JSONStringifyBigIntSafe",
    "LSSynchronousPromise",
    "PromiseOrValue",
    "ReQLBounds",
    "ReStoreCommonUtils",
    "ReStoreIndex",
    "ReStoreOperationLock",
    "ReStoreUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t) {
      var n = (e || (e = o("I64"))).cast(t);
      if (n === void 0)
        throw r("FBLogger")("messenger_web").mustfixThrow("Expected int64");
      return e.to_float(n);
    }
    function d(e, t, n, o, a) {
      var i = r("JSONStringifyBigIntSafe")([t, n]),
        l = e.get(i);
      e.set(i, [l == null ? o : l[0], a]);
    }
    var m = (function () {
        function t(t, n, a, i) {
          var l = this;
          ((this.entries = function (e, t, n) {
            return (
              t === void 0 && (t = "asc"),
              o("ReStoreOperationLock").lockIterator(
                o("ReStoreUtils").entries(l.$4, e, l.$1, void 0, t, n, l.$2),
                l.$3,
              )
            );
          }),
            (this.get = function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return l.$3.chainPromiseOrValue(function (e) {
                return o("ReStoreUtils").getLocked(
                  l.$4,
                  new WeakMap(),
                  l.$1.name,
                  void 0,
                  t,
                  e,
                  l.$2,
                );
              });
            }),
            (this.keys = function (e, t, n) {
              return (
                t === void 0 && (t = "asc"),
                o("ReStoreOperationLock").lockIterator(
                  o("ReStoreUtils").keys(l.$4, e, l.$1, void 0, t, n),
                  l.$3,
                )
              );
            }),
            (this.peekNextAutoIncrementId = function () {
              return l.$5(
                l.$3.chainPromiseOrValue(function (t) {
                  var n = l.$1.autoIncrement;
                  if (!n)
                    throw r("FBLogger")("messenger_web").mustfixThrow(
                      "only supported for auto-incrementing tables",
                    );
                  return o("LSSynchronousPromise")
                    .wrapInSyncPromiseIfNotPromise(
                      o("ReStoreCommonUtils").gen(
                        l.$4.table(l.$1.name).readSeed(new WeakMap()),
                      ),
                    )
                    .then(function (t) {
                      if (t === void 0)
                        throw r("FBLogger")("messenger_web").mustfixThrow(
                          "unexpected undefined autoIncrementSeed",
                        );
                      return (e || (e = o("I64"))).of_float(t);
                    });
                }),
              );
            }),
            (this.keyFields = t.primaryKeyIds),
            (this.$1 = t),
            (this.$2 = n),
            (this.$3 = a),
            (this.$4 = i));
        }
        var n = t.prototype;
        return (
          (n.$5 = function (t) {
            return this.$3.isSync
              ? o("LSSynchronousPromise").wrapInSyncPromiseIfNotPromise(t)
              : Promise.resolve(t);
          }),
          t
        );
      })(),
      p = (function (t) {
        function n(e, n, r, a, i, l, u, c, d, m) {
          var p,
            _ = n.tableNames[e];
          return (
            (p = t.call(this, _, r, a, i) || this),
            (p.$ReStoreTransactionTable$p_1 = new Map()),
            (p.$ReStoreTransactionTable$p_10 = new Map()),
            (p.add = function (e) {
              return p.$ReStoreTransactionTable$p_12(
                (s || (s = o("PromiseOrValue"))).map(
                  s.map(
                    p.$ReStoreTransactionTable$p_4.beforeAdd({
                      tableName: p.$ReStoreTransactionTable$p_3.name,
                      transaction: p.$ReStoreTransactionTable$p_8,
                      value: e,
                    }),
                    function (e) {
                      return p.$ReStoreTransactionTable$p_13(function (t, n) {
                        var r;
                        return (
                          (r = p.$ReStoreTransactionTable$p_9) == null ||
                            r.recordLogicalWrite(),
                          o("ReStoreCommonUtils").gen(
                            p.$ReStoreTransactionTable$p_14(
                              p.$ReStoreTransactionTable$p_10,
                              n,
                              new WeakMap(),
                              p.$ReStoreTransactionTable$p_3.name,
                              e,
                              t,
                            ),
                          )
                        );
                      });
                    },
                  ),
                  function (t) {
                    return (s || (s = o("PromiseOrValue"))).map(
                      p.$ReStoreTransactionTable$p_4.afterAdd({
                        key: t,
                        tableName: p.$ReStoreTransactionTable$p_3.name,
                        transaction: p.$ReStoreTransactionTable$p_8,
                        value: e,
                      }),
                      function () {
                        return t;
                      },
                    );
                  },
                ),
              );
            }),
            (p.delete = function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return p.$ReStoreTransactionTable$p_12(
                (s || (s = o("PromiseOrValue"))).map(
                  p.$ReStoreTransactionTable$p_4.beforeDelete({
                    key: t,
                    tableName: p.$ReStoreTransactionTable$p_3.name,
                    transaction: p.$ReStoreTransactionTable$p_8,
                  }),
                  function (e) {
                    return p.$ReStoreTransactionTable$p_13(function (t, n) {
                      var r = p;
                      return o("ReStoreCommonUtils").gen(
                        (function* (a) {
                          ((a = r.$ReStoreTransactionTable$p_9) == null ||
                            a.recordLogicalWrite(),
                            yield* o("ReStoreUtils").deleteItemLocked(
                              r.$ReStoreTransactionTable$p_2,
                              r.$ReStoreTransactionTable$p_10,
                              n,
                              new WeakMap(),
                              r.$ReStoreTransactionTable$p_3.name,
                              e,
                              t,
                            ),
                            yield* o("ReStoreUtils").cascadeKeyUpdatesLocked(
                              r.$ReStoreTransactionTable$p_2,
                              r.$ReStoreTransactionTable$p_10,
                              n,
                              new WeakMap(),
                              r.$ReStoreTransactionTable$p_3.name,
                              e,
                              void 0,
                              r.$ReStoreTransactionTable$p_4,
                              t,
                              r.$ReStoreTransactionTable$p_11,
                            ));
                        })(),
                      );
                    });
                  },
                ),
              );
            }),
            (p.put = function (e) {
              return p.$ReStoreTransactionTable$p_12(
                (s || (s = o("PromiseOrValue"))).map(
                  s.map(
                    p.$ReStoreTransactionTable$p_4.beforePut({
                      tableName: p.$ReStoreTransactionTable$p_3.name,
                      transaction: p.$ReStoreTransactionTable$p_8,
                      value: e,
                    }),
                    function (e) {
                      return p.$ReStoreTransactionTable$p_13(function (t, n) {
                        var r;
                        return (
                          (r = p.$ReStoreTransactionTable$p_9) == null ||
                            r.recordLogicalWrite(),
                          o("ReStoreCommonUtils").gen(
                            o("ReStoreUtils").putLocked(
                              p.$ReStoreTransactionTable$p_2,
                              p.$ReStoreTransactionTable$p_10,
                              n,
                              new WeakMap(),
                              p.$ReStoreTransactionTable$p_3.name,
                              e,
                              p.$ReStoreTransactionTable$p_4,
                              t,
                              p.$ReStoreTransactionTable$p_11,
                            ),
                          )
                        );
                      });
                    },
                  ),
                  function (t) {
                    return (s || (s = o("PromiseOrValue"))).map(
                      p.$ReStoreTransactionTable$p_4.afterPut({
                        key: t,
                        tableName: p.$ReStoreTransactionTable$p_3.name,
                        transaction: p.$ReStoreTransactionTable$p_8,
                        value: e,
                      }),
                      function () {
                        return t;
                      },
                    );
                  },
                ),
              );
            }),
            (p.upsert = function (e, t) {
              return p.$ReStoreTransactionTable$p_12(
                (s || (s = o("PromiseOrValue"))).map(
                  p.$ReStoreTransactionTable$p_4.beforeUpsert({
                    tableName: p.$ReStoreTransactionTable$p_3.name,
                    transaction: p.$ReStoreTransactionTable$p_8,
                    value: t,
                  }),
                  function (n) {
                    return p.$ReStoreTransactionTable$p_13(function (r, a) {
                      var i = p;
                      return o("ReStoreCommonUtils").gen(
                        (function* (l) {
                          ((l = i.$ReStoreTransactionTable$p_9) == null ||
                            l.recordLogicalWrite(),
                            yield* o("ReStoreUtils").upsertLocked(
                              i.$ReStoreTransactionTable$p_2,
                              i.$ReStoreTransactionTable$p_10,
                              a,
                              new WeakMap(),
                              i.$ReStoreTransactionTable$p_3.name,
                              e,
                              n,
                              i.$ReStoreTransactionTable$p_4,
                              r,
                              i.$ReStoreTransactionTable$p_11,
                            ),
                            yield* o("ReStoreUtils").cascadeKeyUpdatesLocked(
                              i.$ReStoreTransactionTable$p_2,
                              i.$ReStoreTransactionTable$p_10,
                              a,
                              new WeakMap(),
                              i.$ReStoreTransactionTable$p_3.name,
                              e,
                              o("ReStoreUtils").searchKey(
                                i.$ReStoreTransactionTable$p_3,
                                t,
                              ),
                              i.$ReStoreTransactionTable$p_4,
                              r,
                              i.$ReStoreTransactionTable$p_11,
                            ));
                        })(),
                      );
                    });
                  },
                ),
              );
            }),
            (p.index = function (e) {
              return o("ReStoreUtils").getOrCreate(
                p.$ReStoreTransactionTable$p_1,
                e,
                function () {
                  return new (o("ReStoreIndex").ReStoreTransactionIndex)(
                    e,
                    p.$ReStoreTransactionTable$p_3,
                    p.$ReStoreTransactionTable$p_4,
                    p.$ReStoreTransactionTable$p_5,
                    p.$ReStoreTransactionTable$p_6,
                  );
                },
              );
            }),
            (p.$ReStoreTransactionTable$p_3 = _),
            (p.$ReStoreTransactionTable$p_2 = n),
            (p.$ReStoreTransactionTable$p_4 = r),
            (p.$ReStoreTransactionTable$p_5 = a),
            (p.$ReStoreTransactionTable$p_6 = i),
            (p.$ReStoreTransactionTable$p_7 = l),
            (p.$ReStoreTransactionTable$p_8 = u),
            (p.$ReStoreTransactionTable$p_9 = c),
            (p.$ReStoreTransactionTable$p_10 = d),
            (p.$ReStoreTransactionTable$p_11 = m),
            p
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.$ReStoreTransactionTable$p_12 = function (t) {
            return this.$ReStoreTransactionTable$p_5.isSync
              ? o("LSSynchronousPromise").wrapInSyncPromiseIfNotPromise(t)
              : Promise.resolve(t);
          }),
          (r.$ReStoreTransactionTable$p_13 = function (t) {
            var e = this;
            return this.$ReStoreTransactionTable$p_5.chainPromiseOrValue(
              function (n) {
                var r = e.$ReStoreTransactionTable$p_6.createNested(
                  e.$ReStoreTransactionTable$p_9,
                );
                return (s || (s = o("PromiseOrValue"))).map(
                  t(n, r),
                  function (e) {
                    return (r.flush(), e);
                  },
                );
              },
            );
          }),
          (r.$ReStoreTransactionTable$p_14 = function* (n, r, a, i, l, s) {
            var t = r.table(i),
              u = this.$ReStoreTransactionTable$p_2.tableNames[i];
            if (u.autoIncrement) {
              var m = l[u.primaryKeyIds[0]],
                p = (e || (e = o("I64"))).of_float(
                  yield* t.incrementSeed(a, m === void 0 ? m : c(m)),
                );
              l[u.primaryKeyIds[0]] = p;
            }
            var _ = o("ReStoreUtils").appendDefaultValues(
                l,
                u.name,
                this.$ReStoreTransactionTable$p_11,
              ),
              f = o("ReStoreUtils").searchKey(u, _);
            if (f == null) {
              var g = new Error(
                "Evaluating the object store's key path did not yield a value",
              );
              throw (g.stack, g);
            }
            if ((yield* t.tableGet(a, f)) == null) {
              var h = o("ReStoreUtils").indicesWithKeyForValue(
                this.$ReStoreTransactionTable$p_3,
                Object.keys(u.indexes),
                _,
              );
              yield* o("ReStoreUtils").deconflictIndicesLocked(
                this.$ReStoreTransactionTable$p_2,
                n,
                r,
                a,
                i,
                h,
                this.$ReStoreTransactionTable$p_4,
                s,
                this.$ReStoreTransactionTable$p_11,
              );
              var y = yield* t.tableSet(a, f, _),
                C = y[0];
              (yield* o("ReStoreUtils").addIdToIndices(r, a, i, C, h),
                d(n, i, f, void 0, _));
            }
            return f;
          }),
          n
        );
      })(m),
      _ = (function (e) {
        function t(t, n, r, a, i) {
          var l;
          return (
            (l = e.call(this, t, n, r, a) || this),
            (l.$ReStoreTable$p_1 = new Map()),
            (l.index = function (e) {
              return o("ReStoreUtils").getOrCreate(
                l.$ReStoreTable$p_1,
                e,
                function () {
                  return new (o("ReStoreIndex").ReStoreIndex)(
                    e,
                    l.$ReStoreTable$p_2,
                    l.$ReStoreTable$p_3,
                    l.$ReStoreTable$p_4,
                    l.$ReStoreTable$p_5,
                    l.$ReStoreTable$p_6,
                  );
                },
              );
            }),
            (l.subscribe = function (e, t, n) {
              return l.$ReStoreTable$p_6.subscribeTable(
                l.$ReStoreTable$p_2.name,
                e,
                (u || (u = o("ReQLBounds"))).extendBounds(
                  t,
                  l.$ReStoreTable$p_2.primaryKeyIds.length,
                ),
                n,
              );
            }),
            (l.$ReStoreTable$p_2 = t),
            (l.$ReStoreTable$p_3 = n),
            (l.$ReStoreTable$p_4 = r),
            (l.$ReStoreTable$p_5 = a),
            (l.$ReStoreTable$p_6 = i),
            l
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(m);
    ((l.ReStoreTransactionTable = p), (l.ReStoreTable = _));
  },
  98,
);
