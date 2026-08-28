__d(
  "ReStore",
  [
    "ExecutionEnvironment",
    "FBLogger",
    "JSONStringifyBigIntSafe",
    "ODS",
    "PromiseOrValue",
    "ReStoreCustomMigration",
    "ReStoreHooks",
    "ReStoreIndexeddbPersistenceInitFailure",
    "ReStoreMigrateUtil",
    "ReStoreOperationLock",
    "ReStorePersistedMetadata",
    "ReStorePersistence",
    "ReStoreTable",
    "ReStoreTransactionDelay",
    "ReStoreUtils",
    "clearTimeout",
    "cr:1088",
    "cr:6665",
    "createReStoreSubscriptionManager",
    "getErrorSafe",
    "performanceAbsoluteNow",
    "promiseDone",
    "setImmediate",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = (function (e) {
        function t() {
          return e.call(this, "ReStore transaction timed out") || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      m = {
        enableRejectingTransaction: !1,
        enableTransactionTimeout: !1,
        fbLoggerProject: "maw_db",
        odsCategoryID: 600,
      },
      p = 12e4;
    function _(t) {
      var a = t.persistence,
        i = t.hooks,
        l = i === void 0 ? [] : i,
        _ = t.customMigration,
        f = t.loggers,
        g =
          f === void 0
            ? {
                logHistory: void 0,
                transactionQplLogger: void 0,
                userFlow: void 0,
              }
            : f,
        h = t.config,
        y = h === void 0 ? m : h,
        C = t.schema,
        b = g.logHistory,
        v = g.transactionQplLogger,
        S = g.userFlow,
        R = o("ReStorePersistence").createDbStore(a),
        L = a.tabTablesNotifier == null ? void 0 : a.tabTablesNotifier(),
        E = C.defaults,
        k = r("createReStoreSubscriptionManager")(C, a.shouldSync, L),
        I = o("ReStoreHooks").createHookManager(l),
        T = R.createTransaction("readonly"),
        D = a.types.includes("indexeddb"),
        x = {
          background: { first: null, last: null },
          sync_script: { first: null, last: null },
          ui: { first: null, last: null },
        },
        $ = "<first_txn>";
      (S == null || S.addPoint("migration_start"),
        b == null || b.debug("restore migration start"));
      var P = new (o("ReStoreOperationLock").WaitForPromiseLock)(
        a.types.includes("devtool")
          ? Promise.resolve()
          : R.runExclusively(function () {
              return Promise.resolve([
                async function () {
                  S == null || S.addPoint("migration_execute_start");
                  var e = new Map(),
                    t = R.createTransaction("readwrite"),
                    n = w(t, e);
                  b == null || b.debug("migration transaction created");
                  var r = {
                    changedKeys: e,
                    clearCache: M,
                    hooksManager: I,
                    loggers: g,
                    storeTx: t,
                    transaction: n,
                  };
                  try {
                    var a = await C.migrate(r);
                    S == null || S.addPoint("migration_custom_start");
                    var i = await o(
                      "ReStoreCustomMigration",
                    ).runCustomMigration(_, r);
                    if (
                      (b == null || b.debug("migration custom end"),
                      S == null || S.addPoint("migration_custom_end"),
                      i ===
                        o("ReStoreMigrateUtil").ReStoreMigrateResult
                          .NO_UPGRADE_NEEDED &&
                        a ===
                          o("ReStoreMigrateUtil").ReStoreMigrateResult
                            .NO_UPGRADE_NEEDED)
                    ) {
                      (t.close(),
                        b == null || b.debug("restore migration skipped"),
                        S == null || S.addPoint("migration_skipped"));
                      return;
                    }
                    var l =
                      a !==
                        o("ReStoreMigrateUtil").ReStoreMigrateResult
                          .UPDATE_METADATA && e.size !== 0;
                    (await t.flush({ upgrade: l }),
                      S == null || S.addPoint("migration_execute_end"),
                      b == null || b.debug("restore migration complete"));
                  } catch (e) {
                    throw (t.close(), e);
                  }
                  (S == null || S.addPoint("migration_end"),
                    b == null || b.debug("restore migration end"));
                },
                "readwrite",
              ]);
            }, "migration").catch(function (e) {
              var t = r("getErrorSafe")(e);
              throw (
                S == null ||
                  S.addAnnotations({ string: { migration_error: t.message } }),
                e instanceof
                  o("ReStoreIndexeddbPersistenceInitFailure")
                    .ReStoreIndexeddbPersistenceInitFailure ||
                  S == null ||
                  S.endFail("migration_error"),
                b == null || b.debug("restore migration error"),
                r("FBLogger")("restore_init")
                  .catching(t)
                  .mustfix("migration failed"),
                e
              );
            }),
      );
      async function N(e, t) {
        var n = new WeakMap();
        await R.runExclusively(function () {
          return Promise.resolve([
            async function () {
              var r = new Map(),
                a = R.createTransaction("readwrite"),
                i = w(a, r),
                l = t.values();
              await (c || (c = o("PromiseOrValue"))).loop(function (t) {
                if (t.done) return { action: "break", value: void 0 };
                var r = t.value,
                  a = r[0],
                  s = r[1];
                return (c || (c = o("PromiseOrValue"))).map(
                  c.map(
                    s == null
                      ? i
                          .table(e)
                          .delete(
                            o("ReStoreUtils").searchKey(C.tableNames[e], a),
                          )
                      : i.table(e).put(s),
                    function () {
                      return k.notifyTableAndIndexSubscribers(e, a, s, n);
                    },
                  ),
                  function () {
                    return { action: "continue", value: l.next() };
                  },
                );
              }, l.next());
              try {
                await a.flush({ upgrade: !0 });
              } catch (e) {
                throw (a.close(), e);
              }
            },
            "readwrite",
          ]);
        }, "applyChangesToTable");
      }
      function M() {
        R.clearCache == null || R.clearCache();
      }
      function w(e, t, n) {
        return o("ReStoreUtils").createReStoreTransaction(C, E, I, k, e, t, n);
      }
      var A;
      function F(e, t, n, r) {
        return new Promise(function (o, a) {
          y.enableRejectingTransaction && (A = a);
          var i = function () {
            return (
              ($ = r),
              e()
                .then(o, a)
                .finally(function () {
                  return ($ = void 0);
                })
            );
          };
          x[t].last == null
            ? (x[t].first = x[t].last = { value: { code: i, writemode: n } })
            : (x[t].last = x[t].last.next =
                { value: { code: i, writemode: n } });
        });
      }
      function O(e) {
        return R.runExclusively(function () {
          var e =
            x.ui.first != null
              ? x.ui
              : x.sync_script.first != null
                ? x.sync_script
                : x.background;
          if (e.first == null)
            return (
              r("FBLogger")(y.fbLoggerProject).mustfix(
                "Expected work is missing",
              ),
              Promise.resolve([
                function () {
                  return Promise.resolve({});
                },
                "readonly",
              ])
            );
          var t = e.first;
          return (
            e.first === e.last && (e.last = null),
            (e.first = e.first.next),
            Promise.resolve([t.value.code, t.value.writemode])
          );
        }, e);
      }
      async function B(e, t, n, o) {
        var a;
        (n === void 0 && (n = "background"),
          o === void 0 && (o = { source: "unknown", type: "user_initiated" }));
        var i,
          l = (a = arguments[4]) != null ? a : "<unknown callsite>";
        (l === "<unknown callsite>" &&
          o.type !== "test_env" &&
          r("FBLogger")(y.fbLoggerProject).info(
            "Unknown callsite for runInTransaction, action source %s",
            o.source,
          ),
          o.type === "maw_ui_bridge" &&
            (l =
              l +
              ":" +
              o.events
                .map(function (e) {
                  var t = e.tag;
                  return t;
                })
                .join(",")));
        try {
          i = await W(e, t, n, o, l);
        } catch (e) {
          throw e instanceof d
            ? r("FBLogger")(y.fbLoggerProject)
                .blameToPreviousFrame()
                .mustfixThrow(
                  "ReStore transaction took too long to execute: %s",
                  l,
                )
            : e;
        }
        return i;
      }
      async function W(t, a, i, l, s) {
        var d;
        i === void 0 && (i = "background");
        var m,
          _,
          f,
          g,
          h,
          C = v == null ? void 0 : v.startTracking(D, i);
        (n("cr:1088") && (m = (e || (e = r("performanceAbsoluteNow")))()),
          C == null ||
            C.addAnnotations({
              string: {
                currentlyExecutingModuleAndLineNo: $,
                moduleAndLineNo: s,
              },
            }));
        async function b() {
          C == null || C.mark("execute_start");
          var a = (e || (e = r("performanceAbsoluteNow")))();
          n("cr:1088") && (_ = (e || (e = r("performanceAbsoluteNow")))());
          var i = { ref: void 0 },
            d = new Map(),
            p = R.createTransaction("readwrite", s),
            b;
          (n("cr:1088") == null ||
            n("cr:1088").trackingStoredProceduresForNewTransaction(l),
            n("cr:1088") == null || n("cr:1088").recordModuleName(s));
          try {
            var v = w(p, d, { qplFlow: C });
            ((u || (u = r("ExecutionEnvironment"))).isInBrowser
              ? (b = await Promise.race([t(v), U(i, C, s)]))
              : (b = await t(v)),
              i.ref != null && r("clearTimeout")(i.ref),
              C == null || C.mark("execute_end"),
              C == null || C.mark("flush_start"),
              await p.flush({ actionSource: l, qplFlow: C }),
              C == null || C.mark("flush_end"),
              n("cr:1088") && (f = (e || (e = r("performanceAbsoluteNow")))()));
          } catch (t) {
            var S;
            i.ref != null && r("clearTimeout")(i.ref);
            var L = r("getErrorSafe")(t),
              E =
                (S = L == null ? void 0 : L.name) != null ? S : "UnknownError",
              T = (e || (e = r("performanceAbsoluteNow")))() - a;
            throw (
              p.close(),
              C == null || C.fail(L),
              r("FBLogger")(y.fbLoggerProject)
                .catching(L)
                .mustfix(
                  "Transaction failed [%s]: %s (duration: %sms)",
                  E,
                  s != null ? s : "<unknown>",
                  T,
                ),
              n("cr:1088") == null ||
                n("cr:1088").recordRestoreTransaction(
                  { broadcast: g, complete: f, flush: h, queue: m, start: _ },
                  { changedKeys: d },
                ),
              t
            );
          } finally {
            n("cr:1088") == null || n("cr:1088").stopTrackingStoredProcedures();
          }
          (n("cr:1088") && (h = (e || (e = r("performanceAbsoluteNow")))()),
            C == null || C.mark("broadcast_start"));
          var D = new WeakMap(),
            x = new Map();
          for (var $ of d) {
            var P = $[0],
              N = $[1],
              M = JSON.parse(P),
              A = M[0],
              F = M[1],
              O = x.get(A);
            O == null && ((O = []), x.set(A, O));
            var B = N[0],
              W = N[1],
              q = I.beforeNotify({ newValue: W, prevValue: B, tableName: A }),
              V = q.newValue,
              H = q.prevValue;
            O.push([H, V]);
          }
          var G = x.entries();
          if (
            (await (c || (c = o("PromiseOrValue"))).loop(function (e) {
              if (e.done) return { action: "break", value: void 0 };
              var t = e.value,
                n = t[0],
                r = t[1],
                a = r.values();
              return (c || (c = o("PromiseOrValue"))).map(
                c.loop(function (e) {
                  if (e.done) return { action: "break", value: void 0 };
                  var t = e.value,
                    r = t[0],
                    i = t[1];
                  return (c || (c = o("PromiseOrValue"))).map(
                    k.notifyTableAndIndexSubscribers(n, r, i, D),
                    function () {
                      return { action: "continue", value: a.next() };
                    },
                  );
                }, a.next()),
                function () {
                  return { action: "continue", value: G.next() };
                },
              );
            }, G.next()),
            k.notifyTableV2(x, "notifyTableV2"),
            k.notifyTableV2(x, "notifyInMemoryTable"),
            k.notifyCommit(),
            n("cr:1088"))
          ) {
            g = (e || (e = r("performanceAbsoluteNow")))();
            var z = { broadcast: g, complete: f, flush: h, queue: m, start: _ };
            n("cr:1088").recordRestoreTransaction(z, { changedKeys: d });
          }
          return (
            C == null || C.mark("broadcast_end"),
            C == null || C.mark("post_commit_start"),
            r("setImmediate")(function () {
              (C == null || C.mark("post_commit_end"), C == null || C.end());
            }),
            b
          );
        }
        await r("ReStoreTransactionDelay")(i);
        var S = F(b, i, a, s);
        if (
          (C == null || C.mark("enqueued"),
          C == null ||
            C.addAnnotations({
              string: {
                actionSourceSource: l.source,
                actionSourceType: l.type,
              },
              string_array: {
                actionSourceEvents:
                  (d = l.events) == null
                    ? void 0
                    : d.map(function (e) {
                        return e.tag;
                      }),
                actionSourceTaskNames: l.taskNames,
              },
            }),
          r("promiseDone")(
            O(s),
            function () {},
            function (e) {
              A == null || A(e);
            },
          ),
          !(u || (u = r("ExecutionEnvironment"))).isInBrowser)
        )
          return S;
        var L = r("setTimeout")(function () {
          var e, t, o;
          r("FBLogger")("messenger_web").mustfix(
            "Transaction not resolved after %s ms. Source: %s; currently processing: %s. Native ops: %s. Executed SP: %s, isInWorker: %s",
            p,
            s,
            $,
            (e = r("JSONStringifyBigIntSafe")(
              n("cr:6665") == null
                ? void 0
                : n("cr:6665").getCurrentlyExecutingNativeOps(),
            )) != null
              ? e
              : "<devtools not running>",
            (t =
              n("cr:1088") == null ||
              (o = n("cr:1088").getStoredProcedureCallLog()) == null
                ? void 0
                : o.sp
                    .map(function (e) {
                      return e.spName;
                    })
                    .join(",")) != null
              ? t
              : "<devtools not running>",
            (u || (u = r("ExecutionEnvironment"))).isInWorker,
          );
        }, p);
        return S.finally(function () {
          return r("clearTimeout")(L);
        });
      }
      (u || (u = r("ExecutionEnvironment"))).isInBrowser &&
        L != null &&
        L.onEventReceive("notifyInMemoryTable", function (e) {
          r("promiseDone")(
            (async function () {
              for (var t of e) {
                var n = t[0],
                  r = t[1];
                a.shouldApplySync("notifyInMemoryTable", n) && (await N(n, r));
              }
              k.notifyCommit();
            })(),
          );
        });
      var q = Object.keys(C.tableNames).reduce(function (e, t) {
        var n;
        return babelHelpers.extends(
          {},
          e,
          ((n = {}),
          (n[t] = new (o("ReStoreTable").ReStoreTable)(
            C.tableNames[t],
            I,
            P,
            T,
            k,
          )),
          n),
        );
      }, {});
      return {
        clearCacheIfSupported: M,
        closeDb: function () {
          var e = R;
          e instanceof Object && e.close !== void 0 && e.close();
        },
        getCustomMigrationVersion: async function () {
          var e = await new (o(
            "ReStorePersistedMetadata",
          ).ReStorePersistedCustomMigrationVersion)().read(
            R.createTransaction("readonly"),
          );
          return e == null ? void 0 : e.customMigrationVersion;
        },
        getTableData: function () {
          return C;
        },
        isClosed: function () {
          return R.isClosed();
        },
        isPersistenceSupported: function () {
          var e = R;
          return e instanceof Object &&
            e.isPersistenceSupported !== void 0 &&
            e.isPersistenceSupported instanceof Function
            ? e.isPersistenceSupported()
            : Promise.resolve(!0);
        },
        persistence: a,
        persistenceTypes: a.types,
        runInTransaction: B,
        subscribeToCommit: function (t) {
          return k.subscribeToCommit(t);
        },
        subscriptionManager: k,
        table: function (t) {
          return q[t];
        },
        tables: q,
        uniqueId: a.uniqueId,
      };
      function U(e, t, a) {
        return y.enableTransactionTimeout
          ? new Promise(function (n, o) {
              var a = 5e3;
              e.ref = r("setTimeout")(function () {
                (t == null || t.mark("slow_transaction"), o(new d()));
              }, a);
            })
          : new Promise(function () {
              var t = 3e4;
              e.ref = r("setTimeout")(function () {
                var e;
                (r("FBLogger")(y.fbLoggerProject).mustfix(
                  "ReStore transaction took longer than 30000ms to execute, check it: %s. Executed SP: %s. isInWorker: %s.",
                  a,
                  n("cr:1088") == null ||
                    (e = n("cr:1088").getStoredProcedureCallLog()) == null
                    ? void 0
                    : e.sp
                        .map(function (e) {
                          return e.spName;
                        })
                        .join(","),
                  (u || (u = r("ExecutionEnvironment"))).isInWorker,
                ),
                  (s || (s = o("ODS"))).bumpEntityKey(
                    y.odsCategoryID,
                    "messenger.restore.transaction",
                    "timeout_" + (a || "").replace(/:/g, "_"),
                    1,
                  ));
              }, t);
            });
      }
    }
    l.default = _;
  },
  98,
);
