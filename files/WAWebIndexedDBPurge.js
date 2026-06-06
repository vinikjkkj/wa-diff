__d(
  "WAWebIndexedDBPurge",
  [
    "Promise",
    "WALogger",
    "WAPromiseTimeout",
    "WAWeb-dexie",
    "WAWebUA",
    "asyncToGeneratorRuntime",
    "cr:5411",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = {
        __dbnames: "__dbnames",
        fts_storage: "fts-storage",
        fts_loadgen_metadata: "loadgen-storage",
        _hsm_storage_DEPRECATED: "hsm-storage",
        jobs_storage: "jobs-storage",
        lru_media_storage_idb: "lru-media-storage-idb",
        model_storage: "model-storage",
        offd_storage: "offd-storage",
        pb_detect: "pb_detect",
        signal_storage: "signal-storage",
        sw: "sw",
        wawc: "wawc",
        wawc_db_enc: "wawc_db_enc",
        _qpl_storage_DEPRECATED: "qpl-storage",
        worker_storage: "worker-storage",
        status_storage: "status-storage",
        async_storage: "AsyncStorage",
        voip_storage: "/wa_voip_storage",
        responsiveness_db: "responsiveness-db",
      };
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = Object.keys(c).map(function (e) {
            return c[e];
          });
          if (
            !r("gkx")("26258") &&
            o("WAWebUA").UA.isChrome &&
            n("cr:5411") != null &&
            n("cr:5411").databases
          ) {
            var a = yield n("cr:5411").databases(),
              i = new Set(
                a.map(function (e) {
                  return e.name;
                }),
              ),
              l = new Set(t),
              d = Array.from(i).filter(function (e) {
                return !l.has(e);
              });
            d.length !== 0 &&
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "deleteAllIdb: Deletion List missing DBs: ",
                      "",
                    ])),
                  d.join(","),
                )
                .sendLogs("idb-deletion-list-incomplete");
          }
          var m = !1,
            p = t.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    if (!(e === "__dbnames" || e === "sw" || e === "pb_detect"))
                      try {
                        yield o("WAPromiseTimeout").promiseTimeout(
                          (u || (u = n("Promise"))).resolve(
                            r("WAWeb-dexie").delete(e),
                          ),
                          7e3,
                        );
                      } catch (t) {
                        ((m = !0),
                          r("gkx")("26258") ||
                            o("WALogger")
                              .ERROR(
                                s ||
                                  (s = babelHelpers.taggedTemplateLiteralLoose([
                                    "DB delete failed for ",
                                    " with error ",
                                    "",
                                  ])),
                                e,
                                t,
                              )
                              .tags("purge-db"));
                      }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
          return (yield (u || (u = n("Promise"))).all(p), m);
        })),
        m.apply(this, arguments)
      );
    }
    ((l.WEB_IDB_DB_NAMES = c), (l.deleteAllIdb = d));
  },
  98,
);
