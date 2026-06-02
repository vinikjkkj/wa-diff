__d(
  "WAWebFtsWorkerDelegate",
  [
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
          ((this.$4 = !1), this.$10());
        }
        var n = t.prototype;
        return (
          (n.$10 = function () {
            ((this.$1 = !1), (this.$2 = !1), (this.$5 = []));
          }),
          (n.$11 = async function (n) {
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
                ((this.$6 = new (r("WAWebFtsManifestWriter"))(t)),
                  (this.$7 = new (r("WAWebFtsManifestReader"))(t)),
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
                  await this.$6.setLatestVersion(
                    o("WAWebFtsVersionsInformation").LATEST_INDEXER_VERSION,
                    o("WAWebFtsVersionsInformation").LATEST_TOKENIZER_VERSION,
                  ),
                  r("WAWebEnvironment").isWindows
                    ? (this.$3 = new (r("WAFtsSQLiteIndexer"))({
                        messageSource: new (r("WAWebFtsV3MessageSource"))(n),
                        tableAdapter: new (r("WAFtsSQLiteTableAdapter"))(y),
                      }))
                    : (this.$3 = new (r("WAFtsQuickSwitchOrchestrator"))(
                        this.$7,
                        this.$6,
                        o("WAWebFtsVersionsInformation").createVersionsInfo(n),
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
                var a = r("getErrorSafe")(e),
                  i = !this.$9;
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
                    ((this.$9 = !0),
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[fts][delegate] deleting db (missing version), re-init",
                        ])),
                    ),
                    await r("WAWeb-dexie").delete(
                      o("WAWebFtsStorageConsts").DATABASE_NAME,
                    ),
                    await this.$12(),
                    await this.$13()));
              } finally {
                this.$2 = !1;
              }
              this.$14();
            }
          }),
          (n.$13 = async function () {
            return (this.$10(), await this.$11(this.$4), !0);
          }),
          (n.$12 = function () {
            return (
              (this.$1 = !1),
              (this.$2 = !1),
              o("WAWebFtsStorage").clearInitializePromise(),
              Promise.resolve(!0)
            );
          }),
          (n.$15 = function () {
            return (
              (this.$1 = !1),
              (this.$2 = !1),
              o("WAWebFtsStorage").clearInitializePromise(),
              o("WAWebModelStorageInitialize").clearInitializePromise(),
              Promise.resolve(!0)
            );
          }),
          (n.$16 = async function (t) {
            return (
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[fts][delegate] start indexer",
                  ])),
              ),
              (this.$4 = t),
              await this.$11(t),
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[fts][delegate] init indexing ops",
                  ])),
              ),
              r("WAWebEnvironment").isWindows || this.$3.full(),
              this.$3.incremental(),
              this.$8.drainQueue(),
              Promise.resolve(!0)
            );
          }),
          (n.enqueue = async function (t) {
            (this.$17(t) ? await this.$18(t) : this.$5.push(t), this.$14());
          }),
          (n.$17 = function (t) {
            return (
              t.command.operation === "re-init" ||
              t.command.operation === "clear-init" ||
              t.command.operation === "start-indexer"
            );
          }),
          (n.$14 = function () {
            if (this.$1)
              for (; this.$5.length; ) {
                var e = this.$5.shift();
                this.$18(e);
              }
          }),
          (n.$18 = function (t) {
            var e = this,
              n,
              a = t.command,
              i = t.reqId;
            try {
              switch (a.operation) {
                case "start-indexer":
                  n = this.$16(a.isMentionSearchEnabled);
                  break;
                case "re-init":
                  n = this.$13();
                  break;
                case "clear-init":
                  n = this.$15();
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
                  n = this.$8.enqueue({
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
                    e.$19({ reqId: i, result: t, error: !1 });
                  })
                  .catch(function (t) {
                    var n = r("getErrorSafe")(t);
                    (e.$19({ reqId: i, result: !1, error: !0 }),
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
                this.$19({ reqId: i, result: !1, error: !0 }));
            }
            return Promise.resolve();
          }),
          (n.$19 = function (t) {
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
