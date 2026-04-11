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
      C,
      b = {
        ERROR: "error",
        OPENING: "opening",
        BLOCKED: "blocked",
        OPEN: "open",
        CLOSED: "closed",
        FAILED: "failed",
      },
      v = !1,
      S = null;
    function R() {
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
              ((v = !0), S && S()));
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
        (this._dbState = b.OPENING));
    }
    ((R.prototype.loadUserIdb = function () {
      var e = this;
      return this.idb()
        .then(function (t) {
          return t.transaction("rw", t.user, function () {
            return t.user.toArray().then(function (t) {
              return t.forEach(function (t) {
                e.permanentStorage.dataStore[t.key] = t.value;
              });
            });
          });
        })
        .catch(function (e) {
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[storage] loadUserIdb:Error ",
                "",
              ])),
            e,
          );
        });
    }),
      (R.prototype.openDB = function () {
        var e = this;
        this._db.isOpen() &&
          (this._db.close(),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[storage]  close db due to duplicate openDB",
              ])),
          ));
        var t = o("WAPromiseTimeout")
          .promiseTimeout(
            (C || (C = n("Promise"))).resolve(this._db.open()),
            1e4,
          )
          .then(function () {
            o("WAWebRuntimeEnvironmentUtils").isWorker()
              ? o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[storage] successfully opened db in worker thread",
                    ])),
                )
              : o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[storage] successfully opened db in main thread",
                    ])),
                );
            var t = new (o("WAWebWebcDbOpenWamEvent").WebcDbOpenWamEvent)({
              webcDbName: e._dbName,
              webcDbOpenWasSuccess: !0,
              webcDbOpenNumAttempts: e.openAttempt,
            });
            return (t.commit(), (e._dbState = b.OPEN), b.OPEN);
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WACustomError").TimeoutError,
              function () {
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
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
                return (t.commit(), (e._dbState = b.BLOCKED), b.BLOCKED);
              },
            ),
          )
          .catch(function (t) {
            if (
              (o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[storage] openDB:Error ",
                    "",
                  ])),
                t,
              ),
              e.openAttempt > 1 || o("WAWebUA").UA.isSafari)
            ) {
              ((e.opening = void 0), (e._dbState = b.ERROR));
              var n = new (o("WAWebWebcDbOpenWamEvent").WebcDbOpenWamEvent)({
                webcDbName: e._dbName,
                webcDbOpenWasSuccess: !1,
                webcDbOpenNumAttempts: e.openAttempt,
              });
              throw (n.commit(), b.ERROR);
            }
            return (
              (e.openAttempt += 1),
              e._db
                .delete()
                .catch(function (t) {
                  throw (
                    o("WALogger").WARN(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "[storage] deleteDB:Error ",
                          "",
                        ])),
                      t,
                    ),
                    (e.opening = void 0),
                    (e._dbState = b.ERROR),
                    b.ERROR
                  );
                })
                .then(function () {
                  return e.openDB();
                })
            );
          })
          .then(function (t) {
            if (((e.opening = void 0), t === b.BLOCKED)) throw b.BLOCKED;
            return e._db;
          });
        return (this.opening || (this.opening = t), t);
      }),
      (R.prototype.idb = function () {
        return this._db.isOpen()
          ? (C || (C = n("Promise"))).resolve(this._db)
          : this._db.hasFailed()
            ? (o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[storage] dexie database failed to open, hasClosed ",
                    "",
                  ])),
                this._db.hasBeenClosed(),
              ),
              (C || (C = n("Promise"))).reject(r("err")(b.FAILED)))
            : this._dbState === b.BLOCKED
              ? (o("WALogger").WARN(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[storage] dexie database is blocked",
                    ])),
                ),
                (C || (C = n("Promise"))).reject(r("err")(b.BLOCKED)))
              : this.opening
                ? this.opening
                : (o("WALogger").WARN(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[storage] dexie database is closed",
                      ])),
                  ),
                  (C || (C = n("Promise"))).reject(r("err")(b.CLOSED)));
      }),
      (R.prototype.onVersionChange = function (e) {
        ((S = e), v && S());
      }),
      (R.prototype.State = b));
    var L = new R(),
      E = L;
    l.default = E;
  },
  98,
);
