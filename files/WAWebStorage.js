__d(
  "WAWebStorage",
  [
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
      p = r("gkx")("22011"),
      _ = 1,
      f = 2,
      g = 4,
      h = { packColumns: !1 },
      y = (function (e) {
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
      C = (function (e) {
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
      b = (function (e) {
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
      v = (function (e) {
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
      S = (function (e) {
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
      R = (function () {
        function t(e, t) {
          ((this.tables = new Map()),
            (this.views = new Map()),
            (this.state = _),
            (this.versions = new (o(
              "WAWebStorageVersionManager",
            ).StorageVersionManager)()),
            (this.errorHandlers = new Map()),
            (this.$1 = e),
            (this.config = t != null ? t : h),
            this.$2());
        }
        var n = t.prototype;
        return (
          (n.addErrorHandler = function (t, n) {
            var e = new t().name;
            this.errorHandlers.set(e, n);
          }),
          (n.add_OPTIMIZED_EXPERIMENT = function (t, n) {
            var e = this.add(t);
            n(e, o("WAWebStorageMutationBuilder").columnBuilder(this.config));
          }),
          (n.add = function (n) {
            if (this.tables.has(n))
              throw new C(
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
          (n.$2 = function () {
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
          (n.$3 = function () {
            return this.$1;
          }),
          (n.$4 = function (t) {
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
          (n.$5 = function (t) {
            var e = this;
            return function () {
              if (e.state & (f | _))
                throw new S(
                  "Storage must be initialized before accessing a table!",
                );
              return t();
            };
          }),
          (n.table = function (t) {
            var e = this,
              n = this.tables.get(t);
            if (!n || !n.tableExists())
              throw new v(
                "Unknown table " + t + " requested, ensure table is defined!",
              );
            var o = this.$3();
            if (!o)
              throw new b(
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
          (n.lock = function (t, n) {
            var e = this,
              r;
            if (this.state & (f | _))
              return Promise.reject(
                new S("Initialize storage before attempting to lock tables!"),
              );
            for (var o = 0; o < t.length; ++o) {
              var a;
              if (
                !(
                  this.tables.has(t[o]) &&
                  (a = this.tables.get(t[o])) != null &&
                  a.tableExists()
                )
              )
                return Promise.reject(
                  new v('Requested lock of unknown table "' + t[o] + '"'),
                );
            }
            var i = t.map(function (t) {
                var n = e.tables.get(t);
                if (n) return n;
                throw new v('Requested lock of unknown table "' + t + '"');
              }),
              l = i.map(function (t) {
                return e.$4(t);
              }),
              s = this.$3().transact(t, async function () {
                return n(l);
              });
            return s.finally(function () {});
          }),
          (n.$6 = function (t, n) {
            for (var e = 0; e < t.length; e++)
              if (t[e].maxVersion === n) {
                var r = t[e].upgraders.get(n);
                if (r) return { name: t[e].name, callback: r };
              }
          }),
          (n.$7 = function (t, n, o) {
            var e = n,
              a = r("compactMap")(o, function (t) {
                return t.schema(e);
              });
            return t.initialize(n, a, this.$6(o, e), this.errorHandlers);
          }),
          (n.getExistingDbVersion = async function () {
            var e = this;
            try {
              return r("WAWebIndexedDB") == null
                ? Promise.resolve(null)
                : new Promise(function (t) {
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
                Promise.resolve(null)
              );
            }
          }),
          (n.shouldEnableLatestDbSchemaOptimization = function () {
            return r("WAWebEnvironment").isWindows
              ? o("WAWebGetSpecialAbProps").getSpecialAbpropValue(
                  "web_hybrid_apply_latest_db_schema_optimization_enabled",
                ) === !0
              : !0;
          }),
          (n.initialize = async function () {
            if (this.state & g)
              throw new y("Storage instance has already been initialized");
            if ((this.versions.validate(), this.$1)) await this.$1.available();
            else
              throw new b(
                '"' + this.$1.constructor.name + '" failed availability check!',
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
                  await this.$7(t, this.versions.getMax(), e),
                  (n = !1));
              else if (this.shouldEnableLatestDbSchemaOptimization()) {
                var r = await this.getExistingDbVersion();
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
                    p,
                  );
                }),
                  ((p && a) || r === this.versions.getMax()) &&
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
                    await this.$7(t, this.versions.getMax(), e),
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
                  await this.$7(t, i, e);
              }
              (await t.open(), (this.state = g));
            }
          }),
          (n.purge = function () {
            return (
              (this.state = f),
              (this.views = new Map()),
              this.$3()
                .reset()
                .then(function () {})
            );
          }),
          (n.doesLocalSchemaIncludeVersion = function (t) {
            return t <= this.versions.getMax();
          }),
          (n.getExistingTables = function () {
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
    ((l.AlreadyInitializedError = y),
      (l.NoSuchDatabaseError = b),
      (l.NoSuchTableError = v),
      (l.Storage = R));
  },
  98,
);
