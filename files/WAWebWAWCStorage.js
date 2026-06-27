__d(
  "WAWebWAWCStorage",
  [
    "Promise",
    "WACustomError",
    "WAFilteredCatch",
    "WALogger",
    "WAPromiseTimeout",
    "WAWeb-dexie",
    "WAWebIndexedDBPurge",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebUA",
    "WAWebWAWCCommon",
    "WAWebWebcDbOpenWamEvent",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C = {
        ERROR: "error",
        OPENING: "opening",
        BLOCKED: "blocked",
        OPEN: "open",
        CLOSED: "closed",
        FAILED: "failed",
      },
      b = !1,
      v = null;
    function S() {
      var t = this;
      ((this._dbName = o("WAWebIndexedDBPurge").WEB_IDB_DB_NAMES.wawc),
        (this._db = new (r("WAWeb-dexie"))(this._dbName, {
          chromeTransactionDurability: "relaxed",
          addons: [],
        })),
        this._db.on("versionchange", function (n) {
          (t._db.close(),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[storage] close db due to versionchange",
                ])),
            ),
            n &&
              n.newVersion != null &&
              n.newVersion !== n.oldVersion &&
              ((b = !0), v && v()));
        }),
        o("WAWebWAWCCommon").applyVersions(this._db),
        (this.openAttempt = 0),
        this.openDB().catch(function (e) {
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "openDB failed: ",
                "",
              ])),
            e,
          );
        }),
        (this._dbState = C.OPENING));
    }
    ((S.prototype.openDB = function () {
      var e = this;
      this._db.isOpen() &&
        (this._db.close(),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[storage]  close db due to duplicate openDB",
            ])),
        ));
      var t = o("WAPromiseTimeout")
        .promiseTimeout((y || (y = n("Promise"))).resolve(this._db.open()), 1e4)
        .then(function () {
          o("WAWebRuntimeEnvironmentUtils").isWorker()
            ? o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[storage] successfully opened db in worker thread",
                  ])),
              )
            : o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[storage] successfully opened db in main thread",
                  ])),
              );
          var t = new (o("WAWebWebcDbOpenWamEvent").WebcDbOpenWamEvent)({
            webcDbName: e._dbName,
            webcDbOpenWasSuccess: !0,
            webcDbOpenNumAttempts: e.openAttempt,
          });
          return (t.commit(), (e._dbState = C.OPEN), C.OPEN);
        })
        .catch(
          o("WAFilteredCatch").filteredCatch(
            o("WACustomError").TimeoutError,
            function () {
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[storage] openDB blocked in ",
                    " thread",
                  ])),
                o("WAWebRuntimeEnvironmentUtils").isWorker()
                  ? "worker"
                  : "main",
              );
              var t = new (o("WAWebWebcDbOpenWamEvent").WebcDbOpenWamEvent)({
                webcDbName: e._dbName,
                webcDbOpenWasSuccess: !1,
                webcDbOpenNumAttempts: e.openAttempt,
              });
              return (t.commit(), (e._dbState = C.BLOCKED), C.BLOCKED);
            },
          ),
        )
        .catch(function (t) {
          if (
            (o("WALogger").WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[storage] openDB:Error ",
                  "",
                ])),
              t,
            ),
            e.openAttempt > 1 || o("WAWebUA").UA.isSafari)
          ) {
            ((e.opening = void 0), (e._dbState = C.ERROR));
            var n = new (o("WAWebWebcDbOpenWamEvent").WebcDbOpenWamEvent)({
              webcDbName: e._dbName,
              webcDbOpenWasSuccess: !1,
              webcDbOpenNumAttempts: e.openAttempt,
            });
            throw (n.commit(), C.ERROR);
          }
          return (
            (e.openAttempt += 1),
            e._db
              .delete()
              .catch(function (t) {
                throw (
                  o("WALogger").WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[storage] deleteDB:Error ",
                        "",
                      ])),
                    t,
                  ),
                  (e.opening = void 0),
                  (e._dbState = C.ERROR),
                  C.ERROR
                );
              })
              .then(function () {
                return e.openDB();
              })
          );
        })
        .then(function (t) {
          if (((e.opening = void 0), t === C.BLOCKED)) throw C.BLOCKED;
          return e._db;
        });
      return (this.opening || (this.opening = t), t);
    }),
      (S.prototype.idb = function () {
        return this._db.isOpen()
          ? (y || (y = n("Promise"))).resolve(this._db)
          : this._db.hasFailed()
            ? (o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[storage] dexie database failed to open, hasClosed ",
                    "",
                  ])),
                this._db.hasBeenClosed(),
              ),
              (y || (y = n("Promise"))).reject(r("err")(C.FAILED)))
            : this._dbState === C.BLOCKED
              ? (o("WALogger").WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[storage] dexie database is blocked",
                    ])),
                ),
                (y || (y = n("Promise"))).reject(r("err")(C.BLOCKED)))
              : this.opening
                ? this.opening
                : (o("WALogger").WARN(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[storage] dexie database is closed",
                      ])),
                  ),
                  (y || (y = n("Promise"))).reject(r("err")(C.CLOSED)));
      }),
      (S.prototype.onVersionChange = function (e) {
        ((v = e), b && v());
      }),
      (S.prototype.State = C));
    var R = new S(),
      L = R;
    l.default = L;
  },
  98,
);
