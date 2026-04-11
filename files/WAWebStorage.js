__d(
  "WAWebStorage",
  [
    "Promise",
    "WALogger",
    "WAWeb-dexie",
    "WAWebBrokerGlobalAppState",
    "WAWebEnvironment",
    "WAWebGetSpecialAbProps",
    "WAWebIdbLazyView",
    "WAWebIndexedDB",
    "WAWebLogForCrash",
    "WAWebMiscErrors",
    "WAWebProfiler",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSchemaVersions",
    "WAWebStorageMutationBuilder",
    "WAWebStorageTableBuilder",
    "WAWebStorageVersionManager",
    "asyncToGeneratorRuntime",
    "compactMap",
    "err",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = r("gkx")("22011"),
      f = 1,
      g = 2,
      h = 4,
      y = { packColumns: !1 },
      C = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "AlreadyInitializedError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      b = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "DuplicateTableError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      v = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.name = "NoSuchDatabaseError"),
            (n.message = ""),
            (n.message = t),
            n
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.toString = function () {
            return this.name + ": " + this.message;
          }),
          t
        );
      })(babelHelpers.wrapNativeSuper(Error)),
      S = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "NoSuchTableError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      R = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "NotInitializedError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      L = (function () {
        function t(e, t) {
          ((this.tables = new Map()),
            (this.views = new Map()),
            (this.state = f),
            (this.versions = new (o(
              "WAWebStorageVersionManager",
            ).StorageVersionManager)()),
            (this.errorHandlers = new Map()),
            (this.$1 = e),
            (this.config = t != null ? t : y),
            this.$2());
        }
        var a = t.prototype;
        return (
          (a.addErrorHandler = function (t, n) {
            var e = new t().name;
            this.errorHandlers.set(e, n);
          }),
          (a.add_OPTIMIZED_EXPERIMENT = function (t, n) {
            var e = this.add(t);
            n(e, o("WAWebStorageMutationBuilder").columnBuilder(this.config));
          }),
          (a.add = function (n) {
            if (this.tables.has(n))
              throw new b(
                'Table "' + n + '" already added. Reuse the definition.',
              );
            var t = o("WAWebSchemaVersions").DatabaseNames.cast(
              this.$1.getDbName(),
            );
            if (t === void 0)
              throw (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[storage] unknown database name: ",
                        "",
                      ])),
                    this.$1.getDbName(),
                  )
                  .sendLogs("[storage] unknown database name"),
                r("err")("unknown database name: " + this.$1.getDbName())
              );
            var a =
                t === o("WAWebSchemaVersions").DatabaseNames.LruMediaStorage
                  ? null
                  : o("WAWebSchemaVersions").getSchemaVersions(t).get(t),
              i = new (r("WAWebStorageTableBuilder"))(n, this.versions, a);
            return (this.tables.set(n, i), i);
          }),
          (a.$2 = function () {
            (this.addErrorHandler(
              r("WAWeb-dexie").DatabaseClosedError,
              function (e) {
                if (
                  r("WAWebBrokerGlobalAppState").takeOver &&
                  e.message.includes("DatabaseClosedError")
                )
                  throw new (o("WAWebMiscErrors").DbClosedOnTakeover)(
                    e.message,
                  );
              },
            ),
              this.addErrorHandler(
                r("WAWeb-dexie").NoSuchDatabaseError,
                function (e) {
                  if (
                    r("WAWebBrokerGlobalAppState").takeOver &&
                    e.message.includes("NoSuchDatabaseError")
                  )
                    throw new (o("WAWebMiscErrors").DbNotFoundOnTakeover)(
                      e.message,
                    );
                },
              ));
          }),
          (a.$3 = function () {
            return this.$1;
          }),
          (a.$4 = function (t) {
            if (this.views.has(t)) return this.views.get(t);
            var e = this.$1,
              n = e.view(
                t.name,
                t.rowview,
                t.shouldEnablePropFilter,
                t.shouldUseDbMsgEncKeyForEncryptedCol,
              );
            return (this.views.set(t, n), n);
          }),
          (a.$5 = function (t) {
            var e = this;
            return function () {
              if (e.state & (g | f))
                throw new R(
                  "Storage must be initialized before accessing a table!",
                );
              return t();
            };
          }),
          (a.table = function (t) {
            var e = this,
              n = this.tables.get(t);
            if (!n || !n.tableExists())
              throw new S(
                "Unknown table " + t + " requested, ensure table is defined!",
              );
            var o = this.$3();
            if (!o)
              throw new v(
                'Unable to find associated database with table "' + t + '"',
              );
            return new (r("WAWebIdbLazyView"))(
              this.$5(function () {
                return e.$4(n);
              }),
              n.name,
              o.getDbName(),
            );
          }),
          (a.lock = function (t, r) {
            var e = this,
              o;
            if (this.state & (g | f))
              return (p || (p = n("Promise"))).reject(
                new R("Initialize storage before attempting to lock tables!"),
              );
            for (var a = 0; a < t.length; ++a) {
              var i;
              if (
                !(
                  this.tables.has(t[a]) &&
                  (i = this.tables.get(t[a])) != null &&
                  i.tableExists()
                )
              )
                return (p || (p = n("Promise"))).reject(
                  new S('Requested lock of unknown table "' + t[a] + '"'),
                );
            }
            var l = t.map(function (t) {
                var n = e.tables.get(t);
                if (n) return n;
                throw new S('Requested lock of unknown table "' + t + '"');
              }),
              s = l.map(function (t) {
                return e.$4(t);
              }),
              u = this.$3().transact(
                t,
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  return r(s);
                }),
              );
            return u.finally(function () {});
          }),
          (a.$6 = function (t, n) {
            for (var e = 0; e < t.length; e++)
              if (t[e].maxVersion === n) {
                var r = t[e].upgraders.get(n);
                if (r) return { name: t[e].name, callback: r };
              }
          }),
          (a.$7 = function (t, n, o) {
            var e = n,
              a = r("compactMap")(o, function (t) {
                return t.schema(e);
              });
            return t.initialize(n, a, this.$6(o, e), this.errorHandlers);
          }),
          (a.getExistingDbVersion = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this;
              try {
                return r("WAWebIndexedDB") == null
                  ? (p || (p = n("Promise"))).resolve(null)
                  : new (p || (p = n("Promise")))(function (t) {
                      var n = r("WAWebIndexedDB").open(e.$3().getDbName());
                      ((n.onsuccess = function (e) {
                        var n = e.target.result,
                          r = n.version;
                        if ((n.close(), r <= 1)) {
                          t(null);
                          return;
                        }
                        var o = r / 10 - 1;
                        t(o);
                      }),
                        r("justknobx")._("5333") ||
                          (n.onupgradeneeded = function () {
                            t(null);
                          }),
                        (n.onerror = function () {
                          t(null);
                        }),
                        (n.onblocked = function () {
                          t(null);
                        }));
                    });
              } catch (e) {
                return (
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[storage] failed to get existing db version",
                      ])),
                  ),
                  (p || (p = n("Promise"))).resolve(null)
                );
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.shouldEnableLatestDbSchemaOptimization = function () {
            return r("WAWebEnvironment").isWindows
              ? o("WAWebGetSpecialAbProps").getSpecialAbpropValue(
                  "web_hybrid_apply_latest_db_schema_optimization_enabled",
                ) === !0
              : !0;
          }),
          (a.initialize = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (this.state & h)
                throw new C("Storage instance has already been initialized");
              if ((this.versions.validate(), this.$1))
                yield this.$1.available();
              else
                throw new v(
                  '"' +
                    this.$1.constructor.name +
                    '" failed availability check!',
                );
              var e = Array.from(this.tables.values()),
                t = this.$3();
              if (!(!e || !t)) {
                var n = !0;
                if (o("WAWebRuntimeEnvironmentUtils").isWorker())
                  (o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[storage] applying latest v",
                        " in worker db=",
                        "",
                      ])),
                    this.versions.getMax(),
                    t.getDbName(),
                  ),
                    yield this.$7(t, this.versions.getMax(), e),
                    (n = !1));
                else if (this.shouldEnableLatestDbSchemaOptimization()) {
                  var r = yield this.getExistingDbVersion();
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[storage] existing version for the database: ",
                        " is ",
                        "",
                      ])),
                    t.getDbName(),
                    r,
                  );
                  var a = r == null || r < 0;
                  (o("WAWebLogForCrash").onLogForCrashReady(function () {
                    o("WAWebLogForCrash").logForCrash(
                      "wa_web_storage_skip_versions_for_new_db",
                      _,
                    );
                  }),
                    ((_ && a) || r === this.versions.getMax()) &&
                      (o("WALogger").LOG(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[storage] applying latest v",
                            " db=",
                            "",
                          ])),
                        this.versions.getMax(),
                        t.getDbName(),
                      ),
                      yield this.$7(t, this.versions.getMax(), e),
                      (n = !1)));
                }
                if (n) {
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[storage] applying v[0-",
                        "] db=",
                        "",
                      ])),
                    this.versions.getMax(),
                    t.getDbName(),
                  );
                  for (var i = 0; i <= this.versions.getMax(); i++)
                    yield this.$7(t, i, e);
                }
                (yield t.open(), (this.state = h));
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.purge = function () {
            return (
              (this.state = g),
              (this.views = new Map()),
              this.$3()
                .reset()
                .then(function () {})
            );
          }),
          (a.doesLocalSchemaIncludeVersion = function (t) {
            return t <= this.versions.getMax();
          }),
          (a.getExistingTables = function () {
            var e = new Map();
            return (
              this.tables.forEach(function (t, n) {
                t.tableExists() && e.set(n, t);
              }),
              e
            );
          }),
          t
        );
      })();
    ((l.AlreadyInitializedError = C),
      (l.NoSuchDatabaseError = v),
      (l.NoSuchTableError = S),
      (l.Storage = L));
  },
  98,
);
