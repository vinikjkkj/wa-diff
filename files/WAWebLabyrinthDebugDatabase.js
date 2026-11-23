__d(
  "WAWebLabyrinthDebugDatabase",
  [
    "invariant",
    "QPLFlow",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebDbEncryptionKey",
    "WAWebLabyrinthDebugStores",
    "WAWebNoop",
    "WAWebODS",
    "WAWebWormCallbacks",
    "WAWormDB",
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
      m = "labyrinth-debug-storage",
      p = "labyrinth_debug_storage",
      _ = 10,
      f = 30 * 1e3,
      g = 10 * 1e3,
      h = new Set(["deviceState"]),
      y = r("qpl")._(891432473, "3638"),
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
            T(n));
        },
      },
      b = null,
      v = null;
    async function S() {
      return (await R(), L());
    }
    function R() {
      return !r("gkx")("23871") && !r("gkx")("7031")
        ? Promise.reject(r("err")("Labyrinth storage is disabled"))
        : (v == null &&
            (v = I().catch(function (e) {
              throw ((v = null), e);
            })),
          v);
    }
    function L() {
      return (b != null || s(0, 172847), b);
    }
    async function E() {
      var e;
      ((v = null), (e = b) == null || e.close(), (b = null), await k());
    }
    async function k() {
      try {
        await o("WAPromiseTimeout").promiseTimeout(
          o("WAWormDB").deleteWAWormDatabase(m),
          f,
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
    }
    async function I() {
      (await o("WAWebDbEncryptionKey").DbEncKeyStore.waitForWormEarKey(),
        o("WAWebWormCallbacks").setupWAWebWormCallbacks());
      var e = o("QPLFlow").startQPLFlow(y, {
        annotations: {
          string: { dbAlias: p, operationType: "openLabyrinthDebugStorage" },
        },
        timeoutInMs: g,
      });
      try {
        var t = new (o("WAWormDB").WAWormDatabase)(
          o("WAWormDB").makeWAWormEarSyncDriver({
            dbAlias: p,
            dbName: m,
            encKey: o("WAWebDbEncryptionKey").DbEncKeyStore.getWormEarKey(),
            odsLogger: C,
            options: {
              blockingErrorThreshold: _,
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
              safeToDeleteStores: h,
            },
            schema: o("WAWebLabyrinthDebugStores").LABYRINTH_DEBUG_SCHEMA,
          }),
          y,
        );
        (await t.init({ eventFlow: e }), (b = t), e.endSuccess());
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
    }
    function T(e) {
      var t = p + ".",
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
    ((l.DATABASE_NAME = m),
      (l.getLabyrinthDebugDatabase = S),
      (l.initialize = R),
      (l.getDatabase = L),
      (l.destroy = E));
  },
  98,
);
