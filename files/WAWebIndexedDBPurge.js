__d(
  "WAWebIndexedDBPurge",
  ["WALogger", "WAPromiseTimeout", "WAWeb-dexie", "WAWebUA", "cr:5411", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {
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
    async function c() {
      var t = Object.keys(u).map(function (e) {
        return u[e];
      });
      if (
        !r("gkx")("26258") &&
        o("WAWebUA").UA.isChrome &&
        n("cr:5411") != null &&
        n("cr:5411").databases
      ) {
        var a = await n("cr:5411").databases(),
          i = new Set(
            a.map(function (e) {
              return e.name;
            }),
          ),
          l = new Set(t),
          c = Array.from(i).filter(function (e) {
            return !l.has(e);
          });
        c.length !== 0 &&
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "deleteAllIdb: Deletion List missing DBs: ",
                  "",
                ])),
              c.join(","),
            )
            .sendLogs("idb-deletion-list-incomplete");
      }
      var d = !1,
        m = t.map(async function (e) {
          if (!(e === "__dbnames" || e === "sw" || e === "pb_detect"))
            try {
              await o("WAPromiseTimeout").promiseTimeout(
                Promise.resolve(r("WAWeb-dexie").delete(e)),
                7 * 1e3,
              );
            } catch (t) {
              ((d = !0),
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
        });
      return (await Promise.all(m), d);
    }
    ((l.WEB_IDB_DB_NAMES = u), (l.deleteAllIdb = c));
  },
  98,
);
