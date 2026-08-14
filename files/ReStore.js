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
    "promiseDone",
    "setImmediate",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (function (e) {
        function t() {
          return e.call(this, "ReStore transaction timed out") || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      d = {
        enableRejectingTransaction: !1,
        enableTransactionTimeout: !1,
        fbLoggerProject: "maw_db",
        odsCategoryID: 600,
      },
      m = 12e4;
    function p(t) {
      var a = t.persistence,
        i = t.hooks,
        l = i === void 0 ? [] : i,
        p = t.customMigration,
        _ = t.loggers,
        f =
          _ === void 0
            ? {
                logHistory: void 0,
                transactionQplLogger: void 0,
                userFlow: void 0,
              }
            : _,
        g = t.config,
        h = g === void 0 ? d : g,
        y = t.schema,
        C = f.logHistory,
        b = f.transactionQplLogger,
        v = f.userFlow,
        S = o("ReStorePersistence").createDbStore(a),
        R = a.tabTablesNotifier == null ? void 0 : a.tabTablesNotifier(),
        L = y.defaults,
        E = r("createReStoreSubscriptionManager")(y, a.shouldSync, R),
        k = o("ReStoreHooks").createHookManager(l),
        I = S.createTransaction("readonly"),
        T = a.types.includes("indexeddb"),
        D = {
          background: { first: null, last: null },
          sync_script: { first: null, last: null },
          ui: { first: null, last: null },
        },
        x = "<first_txn>";
      (v == null || v.addPoint("migration_start"),
        C == null || C.debug("restore migration start"));
      var $ = new (o("ReStoreOperationLock").WaitForPromiseLock)(
        a.types.includes("devtool")
          ? Promise.resolve()
          : S.runExclusively(function () {
              return Promise.resolve([
                async function () {
                  v == null || v.addPoint("migration_execute_start");
                  var e = new Map(),
                    t = S.createTransaction("readwrite"),
                    n = M(t, e);
                  C == null || C.debug("migration transaction created");
                  var r = {
                    changedKeys: e,
                    clearCache: N,
                    hooksManager: k,
                    loggers: f,
                    storeTx: t,
                    transaction: n,
                  };
                  try {
                    var a = await y.migrate(r);
                    v == null || v.addPoint("migration_custom_start");
                    var i = await o(
                      "ReStoreCustomMigration",
                    ).runCustomMigration(p, r);
                    if (
                      (C == null || C.debug("migration custom end"),
                      v == null || v.addPoint("migration_custom_end"),
                      i ===
                        o("ReStoreMigrateUtil").ReStoreMigrateResult
                          .NO_UPGRADE_NEEDED &&
                        a ===
                          o("ReStoreMigrateUtil").ReStoreMigrateResult
                            .NO_UPGRADE_NEEDED)
                    ) {
                      (t.close(),
                        C == null || C.debug("restore migration skipped"),
                        v == null || v.addPoint("migration_skipped"));
                      return;
                    }
                    var l =
                      a !==
                        o("ReStoreMigrateUtil").ReStoreMigrateResult
                          .UPDATE_METADATA && e.size !== 0;
                    (await t.flush({ upgrade: l }),
                      v == null || v.addPoint("migration_execute_end"),
                      C == null || C.debug("restore migration complete"));
                  } catch (e) {
                    throw (t.close(), e);
                  }
                  (v == null || v.addPoint("migration_end"),
                    C == null || C.debug("restore migration end"));
                },
                "readwrite",
              ]);
            }, "migration").catch(function (e) {
              var t = r("getErrorSafe")(e);
              throw (
                v == null ||
                  v.addAnnotations({ string: { migration_error: t.message } }),
                e instanceof
                  o("ReStoreIndexeddbPersistenceInitFailure")
                    .ReStoreIndexeddbPersistenceInitFailure ||
                  v == null ||
                  v.endFail("migration_error"),
                C == null || C.debug("restore migration error"),
                r("FBLogger")("restore_init")
                  .catching(t)
                  .mustfix("migration failed"),
                e
              );
            }),
      );
      async function P(e, t) {
        var n = new WeakMap();
        await S.runExclusively(function () {
          return Promise.resolve([
            async function () {
              var r = new Map(),
                a = S.createTransaction("readwrite"),
                i = M(a, r),
                l = t.values();
              await (u || (u = o("PromiseOrValue"))).loop(function (t) {
                if (t.done) return { action: "break", value: void 0 };
                var r = t.value,
                  a = r[0],
                  s = r[1];
                return (u || (u = o("PromiseOrValue"))).map(
                  u.map(
                    s == null
                      ? i
                          .table(e)
                          .delete(
                            o("ReStoreUtils").searchKey(y.tableNames[e], a),
                          )
                      : i.table(e).put(s),
                    function () {
                      return E.notifyTableAndIndexSubscribers(e, a, s, n);
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
      function N() {
        S.clearCache == null || S.clearCache();
      }
      function M(e, t, n) {
        return o("ReStoreUtils").createReStoreTransaction(y, L, k, E, e, t, n);
      }
      var w;
      function A(e, t, n, r) {
        return new Promise(function (o, a) {
          h.enableRejectingTransaction && (w = a);
          var i = function () {
            return (
              (x = r),
              e()
                .then(o, a)
                .finally(function () {
                  return (x = void 0);
                })
            );
          };
          D[t].last == null
            ? (D[t].first = D[t].last = { value: { code: i, writemode: n } })
            : (D[t].last = D[t].last.next =
                { value: { code: i, writemode: n } });
        });
      }
      function F(e) {
        return S.runExclusively(function () {
          var e =
            D.ui.first != null
              ? D.ui
              : D.sync_script.first != null
                ? D.sync_script
                : D.background;
          if (e.first == null)
            return (
              r("FBLogger")(h.fbLoggerProject).mustfix(
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
      async function O(e, t, n, o) {
        var a;
        (n === void 0 && (n = "background"),
          o === void 0 && (o = { source: "unknown", type: "user_initiated" }));
        var i,
          l = (a = arguments[4]) != null ? a : "<unknown callsite>";
        (l === "<unknown callsite>" &&
          o.type !== "test_env" &&
          r("FBLogger")(h.fbLoggerProject).info(
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
          i = await B(e, t, n, o, l);
        } catch (e) {
          throw e instanceof c
            ? r("FBLogger")(h.fbLoggerProject)
                .blameToPreviousFrame()
                .mustfixThrow(
                  "ReStore transaction took too long to execute: %s",
                  l,
                )
            : e;
        }
        return i;
      }
      async function B(t, a, i, l, s) {
        var c;
        i === void 0 && (i = "background");
        var d,
          p,
          _,
          f,
          g,
          y = b == null ? void 0 : b.startTracking(T, i);
        (n("cr:1088") && (d = Date.now()),
          y == null ||
            y.addAnnotations({
              string: {
                currentlyExecutingModuleAndLineNo: x,
                moduleAndLineNo: s,
              },
            }));
        async function C() {
          y == null || y.mark("execute_start");
          var a = Date.now();
          n("cr:1088") && (p = Date.now());
          var i = { ref: void 0 },
            c = new Map(),
            m = S.createTransaction("readwrite", s),
            C;
          (n("cr:1088") == null ||
            n("cr:1088").trackingStoredProceduresForNewTransaction(l),
            n("cr:1088") == null || n("cr:1088").recordModuleName(s));
          try {
            var b = M(m, c, { qplFlow: y });
            ((e || (e = r("ExecutionEnvironment"))).isInBrowser
              ? (C = await Promise.race([t(b), q(i, y, s)]))
              : (C = await t(b)),
              i.ref != null && r("clearTimeout")(i.ref),
              y == null || y.mark("execute_end"),
              y == null || y.mark("flush_start"),
              await m.flush({ actionSource: l, qplFlow: y }),
              y == null || y.mark("flush_end"),
              n("cr:1088") && (_ = Date.now()));
          } catch (e) {
            var v;
            i.ref != null && r("clearTimeout")(i.ref);
            var R = r("getErrorSafe")(e),
              L =
                (v = R == null ? void 0 : R.name) != null ? v : "UnknownError",
              I = Date.now() - a;
            throw (
              m.close(),
              y == null || y.fail(R),
              r("FBLogger")(h.fbLoggerProject)
                .catching(R)
                .mustfix(
                  "Transaction failed [%s]: %s (duration: %sms)",
                  L,
                  s != null ? s : "<unknown>",
                  I,
                ),
              n("cr:1088") == null ||
                n("cr:1088").recordRestoreTransaction(
                  { broadcast: f, complete: _, flush: g, queue: d, start: p },
                  { changedKeys: c },
                ),
              e
            );
          } finally {
            n("cr:1088") == null || n("cr:1088").stopTrackingStoredProcedures();
          }
          (n("cr:1088") && (g = Date.now()),
            y == null || y.mark("broadcast_start"));
          var T = new WeakMap(),
            D = new Map();
          for (var x of c) {
            var $ = x[0],
              P = x[1],
              N = JSON.parse($),
              w = N[0],
              A = N[1],
              F = D.get(w);
            F == null && ((F = []), D.set(w, F));
            var O = P[0],
              B = P[1],
              W = k.beforeNotify({ newValue: B, prevValue: O, tableName: w }),
              U = W.newValue,
              V = W.prevValue;
            F.push([V, U]);
          }
          var H = D.entries();
          if (
            (await (u || (u = o("PromiseOrValue"))).loop(function (e) {
              if (e.done) return { action: "break", value: void 0 };
              var t = e.value,
                n = t[0],
                r = t[1],
                a = r.values();
              return (u || (u = o("PromiseOrValue"))).map(
                u.loop(function (e) {
                  if (e.done) return { action: "break", value: void 0 };
                  var t = e.value,
                    r = t[0],
                    i = t[1];
                  return (u || (u = o("PromiseOrValue"))).map(
                    E.notifyTableAndIndexSubscribers(n, r, i, T),
                    function () {
                      return { action: "continue", value: a.next() };
                    },
                  );
                }, a.next()),
                function () {
                  return { action: "continue", value: H.next() };
                },
              );
            }, H.next()),
            E.notifyTableV2(D, "notifyTableV2"),
            E.notifyTableV2(D, "notifyInMemoryTable"),
            E.notifyCommit(),
            n("cr:1088"))
          ) {
            f = Date.now();
            var G = { broadcast: f, complete: _, flush: g, queue: d, start: p };
            n("cr:1088").recordRestoreTransaction(G, { changedKeys: c });
          }
          return (
            y == null || y.mark("broadcast_end"),
            y == null || y.mark("post_commit_start"),
            r("setImmediate")(function () {
              (y == null || y.mark("post_commit_end"), y == null || y.end());
            }),
            C
          );
        }
        await r("ReStoreTransactionDelay")(i);
        var v = A(C, i, a, s);
        if (
          (y == null || y.mark("enqueued"),
          y == null ||
            y.addAnnotations({
              string: {
                actionSourceSource: l.source,
                actionSourceType: l.type,
              },
              string_array: {
                actionSourceEvents:
                  (c = l.events) == null
                    ? void 0
                    : c.map(function (e) {
                        return e.tag;
                      }),
                actionSourceTaskNames: l.taskNames,
              },
            }),
          r("promiseDone")(
            F(s),
            function () {},
            function (e) {
              w == null || w(e);
            },
          ),
          !(e || (e = r("ExecutionEnvironment"))).isInBrowser)
        )
          return v;
        var R = r("setTimeout")(function () {
          var t, o, a;
          r("FBLogger")("messenger_web").mustfix(
            "Transaction not resolved after %s ms. Source: %s; currently processing: %s. Native ops: %s. Executed SP: %s, isInWorker: %s",
            m,
            s,
            x,
            (t = r("JSONStringifyBigIntSafe")(
              n("cr:6665") == null
                ? void 0
                : n("cr:6665").getCurrentlyExecutingNativeOps(),
            )) != null
              ? t
              : "<devtools not running>",
            (o =
              n("cr:1088") == null ||
              (a = n("cr:1088").getStoredProcedureCallLog()) == null
                ? void 0
                : a.sp
                    .map(function (e) {
                      return e.spName;
                    })
                    .join(",")) != null
              ? o
              : "<devtools not running>",
            (e || (e = r("ExecutionEnvironment"))).isInWorker,
          );
        }, m);
        return v.finally(function () {
          return r("clearTimeout")(R);
        });
      }
      (e || (e = r("ExecutionEnvironment"))).isInBrowser &&
        R != null &&
        R.onEventReceive("notifyInMemoryTable", function (e) {
          r("promiseDone")(
            (async function () {
              for (var t of e) {
                var n = t[0],
                  r = t[1];
                a.shouldApplySync("notifyInMemoryTable", n) && (await P(n, r));
              }
              E.notifyCommit();
            })(),
          );
        });
      var W = Object.keys(y.tableNames).reduce(function (e, t) {
        var n;
        return babelHelpers.extends(
          {},
          e,
          ((n = {}),
          (n[t] = new (o("ReStoreTable").ReStoreTable)(
            y.tableNames[t],
            k,
            $,
            I,
            E,
          )),
          n),
        );
      }, {});
      return {
        clearCacheIfSupported: N,
        closeDb: function () {
          var e = S;
          e instanceof Object && e.close !== void 0 && e.close();
        },
        getCustomMigrationVersion: async function () {
          var e = await new (o(
            "ReStorePersistedMetadata",
          ).ReStorePersistedCustomMigrationVersion)().read(
            S.createTransaction("readonly"),
          );
          return e == null ? void 0 : e.customMigrationVersion;
        },
        getTableData: function () {
          return y;
        },
        isClosed: function () {
          return S.isClosed();
        },
        isPersistenceSupported: function () {
          var e = S;
          return e instanceof Object &&
            e.isPersistenceSupported !== void 0 &&
            e.isPersistenceSupported instanceof Function
            ? e.isPersistenceSupported()
            : Promise.resolve(!0);
        },
        persistence: a,
        persistenceTypes: a.types,
        runInTransaction: O,
        subscribeToCommit: function (t) {
          return E.subscribeToCommit(t);
        },
        subscriptionManager: E,
        table: function (t) {
          return W[t];
        },
        tables: W,
        uniqueId: a.uniqueId,
      };
      function q(t, a, i) {
        return h.enableTransactionTimeout
          ? new Promise(function (e, n) {
              var o = 5e3;
              t.ref = r("setTimeout")(function () {
                (a == null || a.mark("slow_transaction"), n(new c()));
              }, o);
            })
          : new Promise(function () {
              var a = 3e4;
              t.ref = r("setTimeout")(function () {
                var t;
                (r("FBLogger")(h.fbLoggerProject).mustfix(
                  "ReStore transaction took longer than 30000ms to execute, check it: %s. Executed SP: %s. isInWorker: %s.",
                  i,
                  n("cr:1088") == null ||
                    (t = n("cr:1088").getStoredProcedureCallLog()) == null
                    ? void 0
                    : t.sp
                        .map(function (e) {
                          return e.spName;
                        })
                        .join(","),
                  (e || (e = r("ExecutionEnvironment"))).isInWorker,
                ),
                  (s || (s = o("ODS"))).bumpEntityKey(
                    h.odsCategoryID,
                    "messenger.restore.transaction",
                    "timeout_" + (i || "").replace(/:/g, "_"),
                    1,
                  ));
              }, a);
            });
      }
    }
    l.default = p;
  },
  98,
);
