__d(
  "WAWebLabyrinthDebugStorage",
  [
    "invariant",
    "Promise",
    "QPLFlow",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebDbEncryptionKey",
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
      p = {
        backup: { indexes: {}, primaryKey: "id", secure: !0 },
        device: { indexes: {}, primaryKey: "id", secure: !0 },
        epoch: { indexes: {}, primaryKey: "serverEpochId", secure: !0 },
      },
      _ = ["backup", "device", "epoch"],
      f = "labyrinth-debug-storage",
      g = "current",
      h = "labyrinth_debug_storage",
      y = 10,
      C = 30 * 1e3,
      b = 10 * 1e3,
      v = new Set(["deviceState"]),
      S = r("qpl")._(891432473, "3638"),
      R = {
        log: function (n) {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[labyrinth-debug-storage] WORM event: ",
                "",
              ])),
            n,
          ),
            A(n));
        },
      },
      L = null,
      E = null;
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (yield T(), D());
        })),
        I.apply(this, arguments)
      );
    }
    function T() {
      return r("gkx")("23871")
        ? (E == null && (E = M()), E)
        : (m || (m = n("Promise"))).reject(
            r("err")("Labyrinth debug storage is disabled"),
          );
    }
    function D() {
      return (L != null || s(0, 172847), L);
    }
    function x() {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          ((E = null), (e = L) == null || e.close(), (L = null), yield P());
        })),
        $.apply(this, arguments)
      );
    }
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            yield o("WAPromiseTimeout").promiseTimeout(
              o("WAWormDB").deleteWAWormDatabase(f),
              C,
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
        N.apply(this, arguments)
      );
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield o("WAWebDbEncryptionKey").DbEncKeyStore.waitForWormEarKey(),
            o("WAWebWormCallbacks").setupWAWebWormCallbacks());
          var e = o("QPLFlow").startQPLFlow(S, {
            annotations: {
              string: {
                dbAlias: h,
                operationType: "openLabyrinthDebugStorage",
              },
            },
            timeoutInMs: b,
          });
          try {
            var t = new (o("WAWormDB").WAWormDatabase)(
              o("WAWormDB").makeWAWormEarSyncDriver({
                dbAlias: h,
                dbName: f,
                encKey: o("WAWebDbEncryptionKey").DbEncKeyStore.getWormEarKey(),
                odsLogger: R,
                options: {
                  blockingErrorThreshold: y,
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
                  safeToDeleteStores: v,
                },
                schema: p,
              }),
              S,
            );
            (yield t.init({ eventFlow: e }), (L = t), e.endSuccess());
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
        w.apply(this, arguments)
      );
    }
    function A(e) {
      var t = h + ".",
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
    ((l.LABYRINTH_DEBUG_STORE_NAMES = _),
      (l.DATABASE_NAME = f),
      (l.LABYRINTH_DEBUG_SINGLETON_ID = g),
      (l.getLabyrinthDebugDatabase = k),
      (l.initialize = T),
      (l.getDatabase = D),
      (l.destroy = x));
  },
  98,
);
