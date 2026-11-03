__d(
  "WAWebFtsWorkerDelegate",
  [
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
      y = o("WAWebFtsWorkerContext").getFtsWorkerContext(),
      C = (function () {
        function t() {
          this.$9();
        }
        var n = t.prototype;
        return (
          (n.$9 = function () {
            ((this.$1 = !1), (this.$2 = !1), (this.$4 = []));
          }),
          (n.$10 = async function () {
            if (
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[fts][delegate] start perform init",
                  ])),
              ),
              !(this.$1 || this.$2))
            ) {
              (await o("WAWebSchemaVersions").waitUntilSchemaVersionsReady(),
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
                  await Promise.all([
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
                  await this.$5.setLatestVersion(
                    o("WAWebFtsVersionsInformation").LATEST_INDEXER_VERSION,
                    o("WAWebFtsVersionsInformation").LATEST_TOKENIZER_VERSION,
                  ),
                  r("WAWebEnvironment").isWindows
                    ? (this.$3 = new (r("WAWebFtsSQLiteIndexer"))({
                        messageSource: new (r("WAWebFtsV3MessageSource"))(),
                        tableAdapter: new (r("WAWebFtsSQLiteTableAdapter"))(y),
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
                var n = r("getErrorSafe")(e),
                  a = !this.$8;
                (o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[fts][delegate] error while initializing: ",
                        "",
                      ])),
                    o("WAWebNormalizeStack").normalizeStack(n),
                  )
                  .sendLogs(
                    a
                      ? "[fts][delegate] error while initializing"
                      : "[fts][delegate] error while re-initializing after database deletion attempt",
                  ),
                  a &&
                    n.name === "UpgradeError" &&
                    n.message ===
                      "Dexie specification of currently installed DB version is missing" &&
                    ((this.$8 = !0),
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[fts][delegate] deleting db (missing version), re-init",
                        ])),
                    ),
                    await r("WAWeb-dexie").delete(
                      o("WAWebFtsStorageConsts").DATABASE_NAME,
                    ),
                    await this.$11(),
                    await this.$12()));
              } finally {
                this.$2 = !1;
              }
              this.$13();
            }
          }),
          (n.$12 = async function () {
            return (this.$9(), await this.$10(), !0);
          }),
          (n.$11 = function () {
            return (
              (this.$1 = !1),
              (this.$2 = !1),
              o("WAWebFtsStorage").clearInitializePromise(),
              Promise.resolve(!0)
            );
          }),
          (n.$14 = function () {
            return (
              (this.$1 = !1),
              (this.$2 = !1),
              o("WAWebFtsStorage").clearInitializePromise(),
              o("WAWebModelStorageInitialize").clearInitializePromise(),
              Promise.resolve(!0)
            );
          }),
          (n.$15 = async function () {
            return (
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[fts][delegate] start indexer",
                  ])),
              ),
              await this.$10(),
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[fts][delegate] init indexing ops",
                  ])),
              ),
              r("WAWebEnvironment").isWindows || this.$3.full(),
              this.$3.incremental(),
              this.$7.drainQueue(),
              Promise.resolve(!0)
            );
          }),
          (n.enqueue = async function (t) {
            (this.$16(t) ? await this.$17(t) : this.$4.push(t), this.$13());
          }),
          (n.$16 = function (t) {
            return (
              t.command.operation === "re-init" ||
              t.command.operation === "clear-init" ||
              t.command.operation === "start-indexer"
            );
          }),
          (n.$13 = function () {
            if (this.$1)
              for (; this.$4.length; ) {
                var e = this.$4.shift();
                this.$17(e);
              }
          }),
          (n.$17 = function (t) {
            var e = this,
              n,
              a = t.command,
              i = t.reqId;
            try {
              switch (a.operation) {
                case "start-indexer":
                  n = this.$15();
                  break;
                case "re-init":
                  n = this.$12();
                  break;
                case "clear-init":
                  n = this.$14();
                  break;
                case "run":
                  n = this.$3.full();
                  break;
                case "consume":
                  n = this.$3.incremental();
                  break;
                case "find": {
                  var l = a.query;
                  n = this.$3.search(l, a.queryOptions);
                  break;
                }
                case "purge": {
                  var s = a.ids;
                  n = this.$3.purge(s);
                  break;
                }
                case "purge-range": {
                  var u = a.chatId,
                    c = a.endRowId,
                    d = a.startRowId,
                    m = a.tsOfLastMessage;
                  n = this.$7.enqueue({
                    chatId: u,
                    tsOfLastMessage: m,
                    startRowId: d,
                    endRowId: c,
                  });
                  break;
                }
              }
              if (n != null)
                return n
                  .then(function (t) {
                    e.$18({ reqId: i, result: t, error: !1 });
                  })
                  .catch(function (t) {
                    var n = r("getErrorSafe")(t);
                    (e.$18({ reqId: i, result: !1, error: !0 }),
                      o("WALogger")
                        .ERROR(
                          g ||
                            (g = babelHelpers.taggedTemplateLiteralLoose([
                              "[fts][delegate] error while performing work ",
                              ", ",
                              "",
                            ])),
                          a.operation,
                          o("WAWebNormalizeStack").normalizeStack(n),
                        )
                        .tags("non-sad")
                        .sendLogs(
                          "[fts][delegate] error while performing work " +
                            a.operation,
                        ));
                  });
            } catch (e) {
              var p = r("getErrorSafe")(e);
              (o("WALogger")
                .ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[fts][delegate] error while scheduling work ",
                      "",
                    ])),
                  a.operation,
                )
                .sendLogs("[fts][delegate] error while scheduling work"),
                this.$18({ reqId: i, result: !1, error: !0 }));
            }
            return Promise.resolve();
          }),
          (n.$18 = function (t) {
            var e = t.error,
              n = t.reqId,
              r = t.result;
            y.postMessage({ reqId: n, result: r, error: e });
          }),
          t
        );
      })();
    l.default = C;
  },
  98,
);
