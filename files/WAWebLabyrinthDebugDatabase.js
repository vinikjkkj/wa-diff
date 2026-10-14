__d(
  "WAWebLabyrinthDebugDatabase",
  [
    "invariant",
    "Promise",
    "QPLFlow",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebDbEncryptionKey",
    "WAWebLabyrinthDebugStores",
    "WAWebNoop",
    "WAWebODS",
    "WAWebWormCallbacks",
    "WAWormDB",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "gkx",
    "qpl",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p = "labyrinth-debug-storage",
      _ = "labyrinth_debug_storage",
      f = 10,
      g = 30 * 1e3,
      h = 10 * 1e3,
      y = new Set(["deviceState"]),
      C = r("qpl")._(891432473, "3638"),
      b = {
        log: function (n) {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[labyrinth-debug-storage] WORM event: ",
                "",
              ])),
            n,
          ),
            N(n));
        },
      },
      v = null,
      S = null;
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (yield E(), k());
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      return r("gkx")("23871")
        ? (S == null && (S = $()), S)
        : (m || (m = n("Promise"))).reject(
            r("err")("Labyrinth debug storage is disabled"),
          );
    }
    function k() {
      return (v != null || s(0, 172847), v);
    }
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          ((S = null), (e = v) == null || e.close(), (v = null), yield D());
        })),
        T.apply(this, arguments)
      );
    }
    function D() {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            yield o("WAPromiseTimeout").promiseTimeout(
              o("WAWormDB").deleteWAWormDatabase(p),
              g,
            );
          } catch (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[labyrinth-debug-storage] failed to delete database",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .tags("labyrinth")
              .sendLogs("labyrinth-debug-storage-delete-failed");
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $() {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield o("WAWebDbEncryptionKey").DbEncKeyStore.waitForWormEarKey(),
            o("WAWebWormCallbacks").setupWAWebWormCallbacks());
          var e = o("QPLFlow").startQPLFlow(C, {
            annotations: {
              string: {
                dbAlias: _,
                operationType: "openLabyrinthDebugStorage",
              },
            },
            timeoutInMs: h,
          });
          try {
            var t = new (o("WAWormDB").WAWormDatabase)(
              o("WAWormDB").makeWAWormEarSyncDriver({
                dbAlias: _,
                dbName: p,
                encKey: o("WAWebDbEncryptionKey").DbEncKeyStore.getWormEarKey(),
                odsLogger: b,
                options: {
                  blockingErrorThreshold: f,
                  onBlockingError: function (t) {
                    (r("WAWebODS").incr(
                      "web.labyrinth_debug_storage.error.blocking",
                    ),
                      o("WALogger")
                        .ERROR(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "[labyrinth-debug-storage] unrecoverable: ",
                              "",
                            ])),
                          t,
                        )
                        .catching(r("err")(t))
                        .sendLogs("labyrinth-debug-storage-unrecoverable"));
                  },
                  safeToDeleteStores: y,
                },
                schema: o("WAWebLabyrinthDebugStores").LABYRINTH_DEBUG_SCHEMA,
              }),
              C,
            );
            (yield t.init({ eventFlow: e }), (v = t), e.endSuccess());
          } catch (t) {
            throw (
              e.endFail("error", {
                string: { error_name: r("getErrorSafe")(t).name },
              }),
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[labyrinth-debug-storage] failed to open WORM database",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .tags("labyrinth")
                .sendLogs("labyrinth-debug-storage-init-failed"),
              t
            );
          }
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      var t = _ + ".",
        n = e.startsWith(t) ? e.slice(t.length) : e;
      e: {
        if (n === "error.db_stale") {
          r("WAWebODS").incr("web.labyrinth_debug_storage.error.db_stale");
          break e;
        }
        if (n === "error.db_close") {
          r("WAWebODS").incr("web.labyrinth_debug_storage.error.db_close");
          break e;
        }
        if (n === "error.large_idb_value") {
          r("WAWebODS").incr(
            "web.labyrinth_debug_storage.error.large_idb_value",
          );
          break e;
        }
        {
          r("WAWebNoop")();
          break e;
        }
      }
    }
    ((l.DATABASE_NAME = p),
      (l.getLabyrinthDebugDatabase = R),
      (l.initialize = E),
      (l.getDatabase = k),
      (l.destroy = I));
  },
  98,
);
