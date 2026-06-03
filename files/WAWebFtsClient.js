__d(
  "WAWebFtsClient",
  [
    "Promise",
    "WALogger",
    "WANullthrows",
    "WAWebABProps",
    "WAWebAppTracker",
    "WAWebEnvironment",
    "WAWebFtsClientMessageIdResolver",
    "WAWebFtsGenRequestId",
    "WAWebFtsWorkerAdapter",
    "asyncToGeneratorRuntime",
    "cr:1274",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (e = n("cr:1274")) != null ? e : {},
      m = d.FtsSQLiteClient,
      p = (function () {
        function e() {
          this.$2 = new Map();
        }
        var t = e.prototype;
        return (
          (t.initialize = function () {
            var e = this;
            if (!this.$1) {
              var t = function (n) {
                  e.$3(n);
                },
                n = function (n) {
                  return e.$4(n);
                },
                r = o("WAWebFtsWorkerAdapter").getFtsWorker(t, n);
              this.$1 = r;
            }
          }),
          (t.$4 = function (t) {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[fts][client] worker error: ",
                  "",
                ])),
              t,
            );
          }),
          (t.$3 = function (t) {
            var e = t.reqId,
              n = this.$2.get(e);
            n &&
              (t.error
                ? (o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[fts][client] worker completed job ",
                        " with error",
                      ])),
                    n.command.operation,
                  ),
                  n.reject(r("err")("FTS worker error")))
                : n.resolve(t.result),
              this.$5(e));
          }),
          (t.startIndexer = function () {
            return (
              o("WAWebAppTracker").AppTracker.start(
                o("WAWebAppTracker").AppTrackerType.FTSIndex,
              ),
              this.$6({
                operation: "start-indexer",
                isMentionSearchEnabled:
                  o("WAWebABProps").getABPropConfigValue(
                    "wa_web_mention_search",
                  ) === !0,
              }).finally(function () {
                o("WAWebAppTracker").AppTracker.stop(
                  o("WAWebAppTracker").AppTrackerType.FTSIndex,
                );
              })
            );
          }),
          (t.indexFull = function (t) {
            return (
              o("WAWebAppTracker").AppTracker.start(
                o("WAWebAppTracker").AppTrackerType.FTSIndex,
              ),
              this.$6({ operation: "run" }).finally(function () {
                o("WAWebAppTracker").AppTracker.stop(
                  o("WAWebAppTracker").AppTrackerType.FTSIndex,
                );
              })
            );
          }),
          (t.index = function () {
            return (
              o("WAWebAppTracker").AppTracker.start(
                o("WAWebAppTracker").AppTrackerType.FTSIndex,
              ),
              this.$6({ operation: "consume" }).finally(function () {
                o("WAWebAppTracker").AppTracker.stop(
                  o("WAWebAppTracker").AppTrackerType.FTSIndex,
                );
              })
            );
          }),
          (t.purge = function (t) {
            return this.$6({ operation: "purge", ids: t });
          }),
          (t.purgeRange = function (t) {
            return this.$6(
              babelHelpers.extends({ operation: "purge-range" }, t),
            );
          }),
          (t.reInit = function () {
            return this.$6({ operation: "re-init" });
          }),
          (t.initExternalStorage = function () {
            return (c || (c = n("Promise"))).resolve();
          }),
          (t.destroyExternalStorage = function () {
            return (c || (c = n("Promise"))).resolve();
          }),
          (t.clearInitializationPromises = function () {
            return this.$6({ operation: "clear-init" });
          }),
          (t.search = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield this.$6({
                  operation: "find",
                  query: e,
                  queryOptions: t,
                });
                return this.$7(n);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.$7 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (Array.isArray(e) || typeof e == "boolean")
                  return { canceled: !1, eof: !0, status: 404, messages: [] };
                var t = yield o(
                    "WAWebFtsClientMessageIdResolver",
                  ).resolveMsgIds(e.messages),
                  n = t.resolved,
                  r = t.unresolved,
                  a = e.eof,
                  i = e.status;
                return (
                  r.length > 0 && this.purge(r),
                  { canceled: !1, eof: a, status: i, messages: n }
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.$6 = function (t) {
            var e = this;
            this.initialize();
            var o = r("WAWebFtsGenRequestId")();
            return new (c || (c = n("Promise")))(function (n, r) {
              var a = { command: t, reqId: o };
              (e.$2.set(o, { resolve: n, reject: r, command: t }), e.$8(a));
            }).finally(function () {
              e.$5(o);
            });
          }),
          (t.$5 = function (t) {
            this.$2.delete(t);
          }),
          (t.$8 = function (t) {
            r("WANullthrows")(this.$1).postMessage(t);
          }),
          e
        );
      })(),
      _ = m != null && r("WAWebEnvironment").isWindows ? new m() : new p();
    l.ftsClient = _;
  },
  98,
);
