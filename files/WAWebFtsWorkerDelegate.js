__d(
  "WAWebFtsWorkerDelegate",
  [
    "Promise",
    "WAFtsQuickSwitchOrchestrator",
    "WALogger",
    "WASemaphore",
    "WAWeb-dexie",
    "WAWebDbEncryptionKey",
    "WAWebEnvironment",
    "WAWebFtsManifestReader",
    "WAWebFtsManifestWriter",
    "WAWebFtsPurgeRangeManager",
    "WAWebFtsSQLiteIndexer",
    "WAWebFtsSQLiteTableAdapter",
    "WAWebFtsStorage",
    "WAWebFtsStorageConsts",
    "WAWebFtsV3MessageSource",
    "WAWebFtsVersionsInformation",
    "WAWebFtsWorkerContext",
    "WAWebModelStorageInitialize",
    "WAWebNormalizeStack",
    "WAWebSchemaVersions",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
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
      C = o("WAWebFtsWorkerContext").getFtsWorkerContext(),
      b = (function () {
        function t() {
          this.$9();
        }
        var a = t.prototype;
        return (
          (a.$9 = function () {
            ((this.$1 = !1), (this.$2 = !1), (this.$4 = []));
          }),
          (a.$10 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[fts][delegate] start perform init",
                    ])),
                ),
                !(this.$1 || this.$2))
              ) {
                (yield o("WAWebSchemaVersions").waitUntilSchemaVersionsReady(),
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[fts][delegate] schema versions ready",
                      ])),
                  ),
                  (this.$2 = !0));
                try {
                  var t = new (o("WASemaphore").Semaphore)();
                  ((this.$5 = new (r("WAWebFtsManifestWriter"))(t)),
                    (this.$6 = new (r("WAWebFtsManifestReader"))(t)),
                    o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[fts][delegate] before db initialization",
                        ])),
                    ),
                    yield (y || (y = n("Promise"))).all([
                      o("WAWebModelStorageInitialize").initializeWithoutGKs(),
                      o("WAWebFtsStorage").initialize(),
                      o(
                        "WAWebDbEncryptionKey",
                      ).DbEncKeyStore.waitForFinalFtsHmacKey(),
                    ]),
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[fts][delegate] after db initialization",
                        ])),
                    ),
                    yield this.$5.setLatestVersion(
                      o("WAWebFtsVersionsInformation").LATEST_INDEXER_VERSION,
                      o("WAWebFtsVersionsInformation").LATEST_TOKENIZER_VERSION,
                    ),
                    r("WAWebEnvironment").isWindows
                      ? (this.$3 = new (r("WAWebFtsSQLiteIndexer"))({
                          messageSource: new (r("WAWebFtsV3MessageSource"))(),
                          tableAdapter: new (r("WAWebFtsSQLiteTableAdapter"))(
                            C,
                          ),
                        }))
                      : (this.$3 = new (r("WAFtsQuickSwitchOrchestrator"))(
                          this.$6,
                          this.$5,
                          o("WAWebFtsVersionsInformation").createVersionsInfo(),
                        )),
                    (this.$7 = new (r("WAWebFtsPurgeRangeManager"))(this.$3)),
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[fts][delegate] inited",
                        ])),
                    ),
                    (this.$1 = !0),
                    (this.$2 = !1));
                } catch (e) {
                  var a = r("getErrorSafe")(e),
                    i = !this.$8;
                  (o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[fts][delegate] error while initializing: ",
                          "",
                        ])),
                      o("WAWebNormalizeStack").normalizeStack(a),
                    )
                    .sendLogs(
                      i
                        ? "[fts][delegate] error while initializing"
                        : "[fts][delegate] error while re-initializing after database deletion attempt",
                    ),
                    i &&
                      a.name === "UpgradeError" &&
                      a.message ===
                        "Dexie specification of currently installed DB version is missing" &&
                      ((this.$8 = !0),
                      o("WALogger").LOG(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[fts][delegate] deleting db (missing version), re-init",
                          ])),
                      ),
                      yield r("WAWeb-dexie").delete(
                        o("WAWebFtsStorageConsts").DATABASE_NAME,
                      ),
                      yield this.$11(),
                      yield this.$12()));
                } finally {
                  this.$2 = !1;
                }
                this.$13();
              }
            });
            function a() {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.$12 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return (this.$9(), yield this.$10(), !0);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$11 = function () {
            return (
              (this.$1 = !1),
              (this.$2 = !1),
              o("WAWebFtsStorage").clearInitializePromise(),
              (y || (y = n("Promise"))).resolve(!0)
            );
          }),
          (a.$14 = function () {
            return (
              (this.$1 = !1),
              (this.$2 = !1),
              o("WAWebFtsStorage").clearInitializePromise(),
              o("WAWebModelStorageInitialize").clearInitializePromise(),
              (y || (y = n("Promise"))).resolve(!0)
            );
          }),
          (a.$15 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return (
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[fts][delegate] start indexer",
                    ])),
                ),
                yield this.$10(),
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[fts][delegate] init indexing ops",
                    ])),
                ),
                r("WAWebEnvironment").isWindows || this.$3.full(),
                this.$3.incremental(),
                this.$7.drainQueue(),
                (y || (y = n("Promise"))).resolve(!0)
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.enqueue = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (this.$16(e) ? yield this.$17(e) : this.$4.push(e), this.$13());
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$16 = function (t) {
            return (
              t.command.operation === "re-init" ||
              t.command.operation === "clear-init" ||
              t.command.operation === "start-indexer"
            );
          }),
          (a.$13 = function () {
            if (this.$1)
              for (; this.$4.length; ) {
                var e = this.$4.shift();
                this.$17(e);
              }
          }),
          (a.$17 = function (t) {
            var e = this,
              a,
              i = t.command,
              l = t.reqId;
            try {
              switch (i.operation) {
                case "start-indexer":
                  a = this.$15();
                  break;
                case "re-init":
                  a = this.$12();
                  break;
                case "clear-init":
                  a = this.$14();
                  break;
                case "run":
                  a = this.$3.full();
                  break;
                case "consume":
                  a = this.$3.incremental();
                  break;
                case "find": {
                  var s = i.query;
                  a = this.$3.search(s, i.queryOptions);
                  break;
                }
                case "purge": {
                  var u = i.ids;
                  a = this.$3.purge(u);
                  break;
                }
                case "purge-range": {
                  var c = i.chatId,
                    d = i.endRowId,
                    m = i.startRowId,
                    p = i.tsOfLastMessage;
                  a = this.$7.enqueue({
                    chatId: c,
                    tsOfLastMessage: p,
                    startRowId: m,
                    endRowId: d,
                  });
                  break;
                }
              }
              if (a != null)
                return a
                  .then(function (t) {
                    e.$18({ reqId: l, result: t, error: !1 });
                  })
                  .catch(function (t) {
                    var n = r("getErrorSafe")(t);
                    (e.$18({ reqId: l, result: !1, error: !0 }),
                      o("WALogger")
                        .ERROR(
                          g ||
                            (g = babelHelpers.taggedTemplateLiteralLoose([
                              "[fts][delegate] error while performing work ",
                              ", ",
                              "",
                            ])),
                          i.operation,
                          o("WAWebNormalizeStack").normalizeStack(n),
                        )
                        .tags("non-sad")
                        .sendLogs(
                          "[fts][delegate] error while performing work " +
                            i.operation,
                        ));
                  });
            } catch (e) {
              var _ = r("getErrorSafe")(e);
              (o("WALogger")
                .ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[fts][delegate] error while scheduling work ",
                      "",
                    ])),
                  i.operation,
                )
                .sendLogs("[fts][delegate] error while scheduling work"),
                this.$18({ reqId: l, result: !1, error: !0 }));
            }
            return (y || (y = n("Promise"))).resolve();
          }),
          (a.$18 = function (t) {
            var e = t.error,
              n = t.reqId,
              r = t.result;
            C.postMessage({ reqId: n, result: r, error: e });
          }),
          t
        );
      })();
    l.default = b;
  },
  98,
);
