__d(
  "WAWebLabyrinthDebugStorage",
  [
    "invariant",
    "Promise",
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
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p = { deviceState: { indexes: {}, primaryKey: "id", secure: !0 } },
      _ = "labyrinth-debug-storage",
      f = "current",
      g = "labyrinth_debug_storage",
      h = 10,
      y = 30 * 1e3,
      C = {
        log: function (n) {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[labyrinth-debug-storage] WORM event: ",
                "",
              ])),
            n,
          ),
            x(n));
        },
      },
      b = null,
      v = null;
    function S() {
      return r("gkx")("23871")
        ? (v == null && (v = T()), v)
        : (m || (m = n("Promise"))).reject(
            r("err")("Labyrinth debug storage is disabled"),
          );
    }
    function R() {
      return (b != null || s(0, 172847), b);
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          ((v = null), (e = b) == null || e.close(), (b = null), yield k());
        })),
        E.apply(this, arguments)
      );
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            yield o("WAPromiseTimeout").promiseTimeout(
              o("WAWormDB").deleteWAWormDatabase(_),
              y,
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
        I.apply(this, arguments)
      );
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield o("WAWebDbEncryptionKey").DbEncKeyStore.waitForWormEarKey(),
            o("WAWebWormCallbacks").setupWAWebWormCallbacks());
          try {
            var e = new (o("WAWormDB").WAWormDatabase)(
              o("WAWormDB").makeWAWormEarSyncDriver({
                dbAlias: g,
                dbName: _,
                encKey: o("WAWebDbEncryptionKey").DbEncKeyStore.getWormEarKey(),
                odsLogger: C,
                options: {
                  blockingErrorThreshold: h,
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
                },
                schema: p,
              }),
            );
            (yield e.init(), (b = e));
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[labyrinth-debug-storage] failed to open WORM database",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .tags("labyrinth")
                .sendLogs("labyrinth-debug-storage-init-failed"),
              e
            );
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      var t = g + ".",
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
    ((l.DATABASE_NAME = _),
      (l.LABYRINTH_DEBUG_DEVICE_STATE_ID = f),
      (l.initialize = S),
      (l.getDatabase = R),
      (l.destroy = L));
  },
  98,
);
