__d(
  "WAWebFtsWorkerDelegate",
  [
    "Promise",
    "WAFtsQuickSwitchOrchestrator",
    "WAFtsSQLiteIndexer",
    "WAFtsSQLiteTableAdapter",
    "WALogger",
    "WASemaphore",
    "WAWeb-dexie",
    "WAWebDbEncryptionKey",
    "WAWebEnvironment",
    "WAWebFtsManifestReader",
    "WAWebFtsManifestWriter",
    "WAWebFtsPurgeRangeManager",
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
          ((this.$4 = !1), this.$10());
        }
        var a = t.prototype;
        return (
          (a.$10 = function () {
            ((this.$1 = !1), (this.$2 = !1), (this.$5 = []));
          }),
          (a.$11 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                if (
                  (o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[fts][delegate] start perform init",
                      ])),
                  ),
                  !(this.$1 || this.$2))
                ) {
                  (yield o(
                    "WAWebSchemaVersions",
                  ).waitUntilSchemaVersionsReady(),
                    o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[fts][delegate] schema versions ready",
                        ])),
                    ),
                    (this.$2 = !0));
                  try {
                    var a = new (o("WASemaphore").Semaphore)();
                    ((this.$6 = new (r("WAWebFtsManifestWriter"))(a)),
                      (this.$7 = new (r("WAWebFtsManifestReader"))(a)),
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
                      yield this.$6.setLatestVersion(
                        o("WAWebFtsVersionsInformation").LATEST_INDEXER_VERSION,
                        o("WAWebFtsVersionsInformation")
                          .LATEST_TOKENIZER_VERSION,
                      ),
                      r("WAWebEnvironment").isWindows
                        ? (this.$3 = new (r("WAFtsSQLiteIndexer"))(
                            new (r("WAWebFtsV3MessageSource"))(t),
                            new (r("WAFtsSQLiteTableAdapter"))(C),
                          ))
                        : (this.$3 = new (r("WAFtsQuickSwitchOrchestrator"))(
                            this.$7,
                            this.$6,
                            o("WAWebFtsVersionsInformation").createVersionsInfo(
                              t,
                            ),
                          )),
                      (this.$8 = new (r("WAWebFtsPurgeRangeManager"))(this.$3)),
                      o("WALogger").LOG(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[fts][delegate] inited",
                          ])),
                      ),
                      (this.$1 = !0),
                      (this.$2 = !1));
                  } catch (e) {
                    var i = r("getErrorSafe")(e),
                      l = !this.$9;
                    (o("WALogger")
                      .ERROR(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[fts][delegate] error while initializing: ",
                            "",
                          ])),
                        o("WAWebNormalizeStack").normalizeStack(i),
                      )
                      .sendLogs(
                        l
                          ? "[fts][delegate] error while initializing"
                          : "[fts][delegate] error while re-initializing after database deletion attempt",
                      ),
                      l &&
                        i.name === "UpgradeError" &&
                        i.message ===
                          "Dexie specification of currently installed DB version is missing" &&
                        ((this.$9 = !0),
                        o("WALogger").LOG(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "[fts][delegate] deleting db (missing version), re-init",
                            ])),
                        ),
                        yield r("WAWeb-dexie").delete(
                          o("WAWebFtsStorageConsts").DATABASE_NAME,
                        ),
                        yield this.$12(),
                        yield this.$13()));
                  } finally {
                    this.$2 = !1;
                  }
                  this.$14();
                }
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.$13 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return (this.$10(), yield this.$11(this.$4), !0);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$12 = function () {
            return (
              (this.$1 = !1),
              (this.$2 = !1),
              o("WAWebFtsStorage").clearInitializePromise(),
              (y || (y = n("Promise"))).resolve(!0)
            );
          }),
          (a.$15 = function () {
            return (
              (this.$1 = !1),
              (this.$2 = !1),
              o("WAWebFtsStorage").clearInitializePromise(),
              o("WAWebModelStorageInitialize").clearInitializePromise(),
              (y || (y = n("Promise"))).resolve(!0)
            );
          }),
          (a.$16 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return (
                  o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[fts][delegate] start indexer",
                      ])),
                  ),
                  (this.$4 = e),
                  yield this.$11(e),
                  o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[fts][delegate] init indexing ops",
                      ])),
                  ),
                  r("WAWebEnvironment").isWindows || this.$3.full(),
                  this.$3.incremental(),
                  this.$8.drainQueue(),
                  (y || (y = n("Promise"))).resolve(!0)
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.enqueue = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (this.$17(e) ? yield this.$18(e) : this.$5.push(e), this.$14());
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$17 = function (t) {
            return (
              t.command.operation === "re-init" ||
              t.command.operation === "clear-init" ||
              t.command.operation === "start-indexer"
            );
          }),
          (a.$14 = function () {
            if (this.$1)
              for (; this.$5.length; ) {
                var e = this.$5.shift();
                this.$18(e);
              }
          }),
          (a.$18 = function (t) {
            var e = this,
              a,
              i = t.command,
              l = t.reqId;
            try {
              switch (i.operation) {
                case "start-indexer":
                  a = this.$16(i.isMentionSearchEnabled);
                  break;
                case "re-init":
                  a = this.$13();
                  break;
                case "clear-init":
                  a = this.$15();
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
                  a = this.$8.enqueue({
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
                    e.$19({ reqId: l, result: t, error: !1 });
                  })
                  .catch(function (t) {
                    (e.$19({ reqId: l, result: !1, error: !0 }),
                      o("WALogger")
                        .ERROR(
                          g ||
                            (g = babelHelpers.taggedTemplateLiteralLoose([
                              "[fts][delegate] error while performing work ",
                              ", ",
                              "",
                            ])),
                          i.operation,
                          o("WAWebNormalizeStack").normalizeStack(t),
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
                this.$19({ reqId: l, result: !1, error: !0 }));
            }
            return (y || (y = n("Promise"))).resolve();
          }),
          (a.$19 = function (t) {
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
