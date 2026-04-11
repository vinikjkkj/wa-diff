__d(
  "WAWebSchemaVersions",
  [
    "$InternalEnum",
    "WALogger",
    "WAResolvable",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebWamEnumWebDbLoaderType",
    "WAWebWamEnumWebDbNameType",
    "WAWebWebDbLoadFromVersionFailureNonAnonymousWamEvent",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = n("$InternalEnum")({
        ModelStorage: "model-storage",
        FtsStorage: "fts-storage",
        JobsStorage: "jobs-storage",
        LruMediaStorage: "lru-media-storage-idb",
        OffdStorage: "offd-storage",
        SignalStorage: "signal-storage",
        WorkerStorage: "worker-storage",
        SW: "sw",
        WAWC: "wawc",
        WAWCDBEnc: "wawc_db_enc",
        StatusStorage: "status-storage",
      }),
      m = new (o("WAResolvable").Resolvable)(),
      p = null;
    function _(e) {
      return e === d.ModelStorage
        ? o("WAWebWamEnumWebDbNameType").WEB_DB_NAME_TYPE.MODEL_STORAGE
        : e === d.FtsStorage
          ? o("WAWebWamEnumWebDbNameType").WEB_DB_NAME_TYPE.FTS_STORAGE
          : e === d.JobsStorage
            ? o("WAWebWamEnumWebDbNameType").WEB_DB_NAME_TYPE.JOBS_STORAGE
            : e === d.LruMediaStorage
              ? o("WAWebWamEnumWebDbNameType").WEB_DB_NAME_TYPE
                  .LRU_MEDIA_STORAGE_IDB
              : e === d.OffdStorage
                ? o("WAWebWamEnumWebDbNameType").WEB_DB_NAME_TYPE.OFFD_STORAGE
                : e === d.SignalStorage
                  ? o("WAWebWamEnumWebDbNameType").WEB_DB_NAME_TYPE
                      .SIGNAL_STORAGE
                  : e === d.WorkerStorage
                    ? o("WAWebWamEnumWebDbNameType").WEB_DB_NAME_TYPE
                        .WORKER_STORAGE
                    : e === d.SW
                      ? o("WAWebWamEnumWebDbNameType").WEB_DB_NAME_TYPE.SW
                      : e === d.WAWC
                        ? o("WAWebWamEnumWebDbNameType").WEB_DB_NAME_TYPE.WAWC
                        : e === d.WAWCDBEnc
                          ? o("WAWebWamEnumWebDbNameType").WEB_DB_NAME_TYPE
                              .WAWC_DB_ENC
                          : e === d.StatusStorage
                            ? o("WAWebWamEnumWebDbNameType").WEB_DB_NAME_TYPE
                                .STATUS_STORAGE
                            : (function () {
                                throw Error(
                                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                    e,
                                );
                              })();
    }
    function f() {
      return o("WAWebRuntimeEnvironmentUtils").isServiceWorker()
        ? o("WAWebWamEnumWebDbLoaderType").WEB_DB_LOADER_TYPE.SERVICE_WORKER
        : o("WAWebRuntimeEnvironmentUtils").isWorker()
          ? o("WAWebWamEnumWebDbLoaderType").WEB_DB_LOADER_TYPE.WEB_WORKER
          : o("WAWebWamEnumWebDbLoaderType").WEB_DB_LOADER_TYPE.MAIN;
    }
    function g() {
      return p != null;
    }
    function h(t) {
      if (p == null) {
        var n = { webDbLoader: f() };
        throw (
          t != null && (n.webDbName = _(t)),
          new (o(
            "WAWebWebDbLoadFromVersionFailureNonAnonymousWamEvent",
          ).WebDbLoadFromVersionFailureNonAnonymousWamEvent)(
            n,
          ).commitAndWaitForFlush(!0),
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[storage] Schema versions not initialized",
                ])),
            )
            .sendLogs("[storage] Schema versions not initialized"),
          r("err")("Schema versions not initialized")
        );
      }
      return p;
    }
    function y(e) {
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[storage] set schema versions: ",
            ". is worker? ",
            "",
          ])),
        Array.from(e),
        o("WAWebRuntimeEnvironmentUtils").isWorker(),
      ),
        (p = e),
        m.resolve());
    }
    function C() {
      return m.promise;
    }
    function b() {
      p = null;
    }
    ((l.DatabaseNames = d),
      (l.convertDBName = _),
      (l.getLoaderType = f),
      (l.hasSchemaVersions = g),
      (l.getSchemaVersions = h),
      (l.setSchemaVersions = y),
      (l.waitUntilSchemaVersionsReady = C),
      (l.clearSchemaVersions = b));
  },
  98,
);
