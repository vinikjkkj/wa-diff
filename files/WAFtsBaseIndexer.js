__d(
  "WAFtsBaseIndexer",
  [
    "WACustomError",
    "WALogger",
    "WANullthrows",
    "WAResolvable",
    "WorkerSchedulerPriority",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = function () {},
      f = function () {
        return Promise.resolve();
      },
      g = (function () {
        function t(e, t, n, r, o) {
          (r === void 0 && (r = 2e3),
            (this.__progressCallbacks = []),
            (this.__isFullIndexingPending = !1),
            (this.__isProcessingBacklog = !1),
            (this.finder = e),
            (this.messageSource = t),
            (this.tableAdapter = n),
            (this.batchSize = r),
            (this.__currentFullIndexingOp = null),
            (this.__currentQueuedIndexingOp = null),
            (this.__fullIndexingProgress = -1),
            (this.scheduler = o));
        }
        var n = t.prototype;
        return (
          (n.__resetFullIndexingProgress = function () {
            ((this.__isFullIndexingPending = !1),
              (this.__fullIndexingProgress = -1));
          }),
          (n.__notifyProgress = function (t, n) {
            ((this.__fullIndexingProgress = t),
              this.__progressCallbacks.forEach(function (e) {
                try {
                  e(t, n);
                } catch (e) {}
              }),
              t === 1 && (this.__progressCallbacks = []));
          }),
          (n.__processBatch = function (t) {
            return Promise.reject(
              new (o("WACustomError").UnimplementedMethod)(
                "BaseIndexer.__processBatch",
              ),
            );
          }),
          (n.getIndexingProgress = function () {
            return this.__fullIndexingProgress;
          }),
          (n.isFullIndexingPending = function () {
            return this.__isFullIndexingPending;
          }),
          (n.isQueuedIndexingPending = function () {
            return this.__isProcessingBacklog;
          }),
          (n.purge = function (t) {
            return Promise.reject(
              new (o("WACustomError").UnimplementedMethod)("purge"),
            );
          }),
          (n.purgeChat = function (t) {
            return Promise.reject(
              new (o("WACustomError").UnimplementedMethod)("purge"),
            );
          }),
          (n.purge__DEPRECATED_DO_NOT_USE = function (t, n, r) {
            return Promise.reject(
              new (o("WACustomError").UnimplementedMethod)("purge"),
            );
          }),
          (n.search = function (t, n) {
            return this.finder.find(t, n);
          }),
          (n.incremental = async function (n, a) {
            var t = this;
            if ((n === void 0 && (n = f), this.isQueuedIndexingPending()))
              return r("WANullthrows")(this.__currentQueuedIndexingOp);
            var i = new (o("WAResolvable").Resolvable)(),
              l = !0;
            try {
              for (
                this.__isProcessingBacklog = !0,
                  this.__currentQueuedIndexingOp = i.promise,
                  i.promise.finally(function () {
                    t.__isProcessingBacklog = !1;
                  }),
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "FTS:Indexer:indexQueuedBatch: Starting new batch size : ",
                        "",
                      ])),
                    this.batchSize,
                  );
                l;
              ) {
                if (
                  this.signaller != null &&
                  this.signaller.shouldTerminateAll()
                ) {
                  l = !1;
                  break;
                }
                if (this.scheduler)
                  (a == null &&
                    o("WALogger").ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "FTS:Indexer:indexQueuedBatch: Priority is null",
                        ])),
                    ),
                    await this.scheduler.runTask({
                      name: "fts_incremental",
                      fn: async function () {
                        var e = await t.messageSource.getBacklogged({
                          limit: t.batchSize,
                        });
                        if (e == null) {
                          l = !1;
                          return;
                        }
                        e.length !== 0 &&
                          (await t.__processBatch(e),
                          o("WALogger").LOG(
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
                                "FTS:Indexer:indexQueuedBatch: Completed batch",
                              ])),
                          ),
                          await n(
                            e.map(function (e) {
                              return e.id;
                            }),
                          ));
                      },
                      priority:
                        a != null
                          ? a
                          : o("WorkerSchedulerPriority").BACKGROUND_PRIORITY,
                    }));
                else {
                  var m = await this.messageSource.getBacklogged({
                    limit: this.batchSize,
                  });
                  if (m == null) {
                    l = !1;
                    break;
                  }
                  m.length !== 0 &&
                    (await this.__processBatch(m),
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "FTS:Indexer:indexQueuedBatch: Completed batch",
                        ])),
                    ),
                    await n(
                      m.map(function (e) {
                        return e.id;
                      }),
                    ));
                }
              }
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "FTS:Indexer:indexQueuedBatch: Completed",
                  ])),
              );
            } catch (e) {
              return (i.reject(e), !1);
            }
            return (i.resolve(!0), !0);
          }),
          (n.full = async function (t, n) {
            var e = this;
            if (
              (t === void 0 && (t = _),
              this.__progressCallbacks.push(t),
              this.isFullIndexingPending())
            )
              return r("WANullthrows")(this.__currentFullIndexingOp);
            (this.__resetFullIndexingProgress(),
              (this.__isFullIndexingPending = !0));
            var a = new (o("WAResolvable").Resolvable)();
            ((this.__currentFullIndexingOp = a.promise),
              a.promise.finally(function () {
                return e.__resetFullIndexingProgress();
              }));
            try {
              for (
                var i = this.batchSize,
                  l = 0,
                  s = null,
                  u = await this.messageSource.size(),
                  c = [performance.now()],
                  d = !0;
                l <= u && d;
              ) {
                var f = performance.now();
                if (
                  (o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "Current message batch is from entry ",
                        " of ",
                        "...",
                      ])),
                    l,
                    u,
                  ),
                  this.scheduler)
                )
                  await this.scheduler.runTask({
                    name: "fts_full",
                    fn: async function () {
                      var t = await (n != null
                        ? e.messageSource.getAllAfterId(n, {
                            offset: l,
                            limit: i,
                            fromMessageId: s,
                          })
                        : e.messageSource.getAll({
                            offset: l,
                            limit: i,
                            fromMessageId: s,
                          }));
                      if (t == null || t.length === 0) {
                        d = !1;
                        return;
                      }
                      var r = t[t.length - 1];
                      ((s = r.id), await e.__processBatch(t));
                      var o = Math.min(1, (l + i) / u);
                      e.__notifyProgress(o, r.id);
                    },
                    priority: o("WorkerSchedulerPriority").BACKGROUND_PRIORITY,
                  });
                else {
                  var g = await (n != null
                    ? this.messageSource.getAllAfterId(n, {
                        offset: l,
                        limit: i,
                        fromMessageId: s,
                      })
                    : this.messageSource.getAll({
                        offset: l,
                        limit: i,
                        fromMessageId: s,
                      }));
                  if (g == null || g.length === 0) break;
                  var h = g[g.length - 1];
                  ((s = h.id), await this.__processBatch(g));
                  var y = Math.min(1, (l + i) / u);
                  this.__notifyProgress(y, h.id);
                }
                var C = performance.now();
                (o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "Finished batch from entry ",
                      " of ",
                      ". (Took ",
                      " msec)",
                    ])),
                  l,
                  u,
                  C - f,
                ),
                  c.push(C - f),
                  (l += i));
              }
              return (this.__notifyProgress(1), a.resolve(c), c);
            } catch (e) {
              throw (this.__resetFullIndexingProgress(), a.reject(e), e);
            }
          }),
          (n.setSignaller = function (t) {
            this.signaller = t;
          }),
          (n.getMessageSource = function () {
            return this.messageSource;
          }),
          (n.eraseIndex = function () {
            return this.tableAdapter.erase();
          }),
          t
        );
      })();
    l.default = g;
  },
  98,
);
