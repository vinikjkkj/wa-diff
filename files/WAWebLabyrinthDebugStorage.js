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
      p = { deviceState: { indexes: {}, primaryKey: "id", secure: !0 } },
      _ = "labyrinth-debug-storage",
      f = "current",
      g = "labyrinth_debug_storage",
      h = 10,
      y = 30 * 1e3,
      C = 10 * 1e3,
      b = r("qpl")._(891432473, "3638"),
      v = {
        log: function (n) {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[labyrinth-debug-storage] WORM event: ",
                "",
              ])),
            n,
          ),
            P(n));
        },
      },
      S = null,
      R = null;
    function L() {
      return r("gkx")("23871")
        ? (R == null && (R = x()), R)
        : (m || (m = n("Promise"))).reject(
            r("err")("Labyrinth debug storage is disabled"),
          );
    }
    function E() {
      return (S != null || s(0, 172847), S);
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          ((R = null), (e = S) == null || e.close(), (S = null), yield T());
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
        D.apply(this, arguments)
      );
    }
    function x() {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield o("WAWebDbEncryptionKey").DbEncKeyStore.waitForWormEarKey(),
            o("WAWebWormCallbacks").setupWAWebWormCallbacks());
          var e = o("QPLFlow").startQPLFlow(b, {
            annotations: {
              string: {
                dbAlias: g,
                operationType: "openLabyrinthDebugStorage",
              },
            },
            timeoutInMs: C,
          });
          try {
            var t = new (o("WAWormDB").WAWormDatabase)(
              o("WAWormDB").makeWAWormEarSyncDriver({
                dbAlias: g,
                dbName: _,
                encKey: o("WAWebDbEncryptionKey").DbEncKeyStore.getWormEarKey(),
                odsLogger: v,
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
              b,
            );
            (yield t.init({ eventFlow: e }), (S = t), e.endSuccess());
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
        $.apply(this, arguments)
      );
    }
    function P(e) {
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
      (l.initialize = L),
      (l.getDatabase = E),
      (l.destroy = k));
  },
  98,
);
