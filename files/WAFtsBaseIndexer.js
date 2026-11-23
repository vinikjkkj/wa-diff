__d(
  "WAFtsBaseIndexer",
  [
    "TaskSchedulerPriority",
    "WACustomError",
    "WALogger",
    "WAResolvable",
    "nullthrows",
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
      _,
      f = function () {},
      g = function () {
        return Promise.resolve();
      },
      h = (function () {
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
          (n.__notifyProgress = function (n, r) {
            ((this.__fullIndexingProgress = n),
              this.__progressCallbacks.forEach(function (t) {
                try {
                  var a = t(n, r);
                  a != null &&
                    a.catch(function (t) {
                      o("WALogger").ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "FTS:Indexer:__notifyProgress: Progress callback failed ",
                            "",
                          ])),
                        t,
                      );
                    });
                } catch (e) {}
              }),
              n === 1 && (this.__progressCallbacks = []));
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
          (n.incremental = async function (t, n) {
            var e = this;
            if ((t === void 0 && (t = g), this.isQueuedIndexingPending()))
              return r("nullthrows")(this.__currentQueuedIndexingOp);
            var a = new (o("WAResolvable").Resolvable)(),
              i = !0;
            try {
              for (
                this.__isProcessingBacklog = !0,
                  this.__currentQueuedIndexingOp = a.promise,
                  a.promise.finally(function () {
                    e.__isProcessingBacklog = !1;
                  }),
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "FTS:Indexer:indexQueuedBatch: Starting new batch size : ",
                        "",
                      ])),
                    this.batchSize,
                  );
                i;
              ) {
                var l;
                if (
                  this.signaller != null &&
                  this.signaller.shouldTerminateAll()
                ) {
                  i = !1;
                  break;
                }
                if (
                  (await ((l = this.signaller) == null ||
                  l.waitWhilePaused == null
                    ? void 0
                    : l.waitWhilePaused()),
                  this.signaller != null && this.signaller.shouldTerminateAll())
                ) {
                  i = !1;
                  break;
                }
                var p = this.scheduler;
                if (p)
                  (n == null &&
                    o("WALogger").ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "FTS:Indexer:indexQueuedBatch: Priority is null",
                        ])),
                    ),
                    await p.run(
                      async function () {
                        var n = await e.messageSource.getBacklogged({
                          limit: e.batchSize,
                        });
                        if (n == null) {
                          i = !1;
                          return;
                        }
                        n.length !== 0 &&
                          (await e.__processBatch(n),
                          o("WALogger").LOG(
                            c ||
                              (c = babelHelpers.taggedTemplateLiteralLoose([
                                "FTS:Indexer:indexQueuedBatch: Completed batch",
                              ])),
                          ),
                          await t(
                            n.map(function (e) {
                              return e.id;
                            }),
                          ));
                      },
                      {
                        name: "fts_incremental",
                        priority:
                          n != null
                            ? n
                            : o("TaskSchedulerPriority").BACKGROUND_PRIORITY,
                      },
                    ).promise);
                else {
                  var _ = await this.messageSource.getBacklogged({
                    limit: this.batchSize,
                  });
                  if (_ == null) {
                    i = !1;
                    break;
                  }
                  _.length !== 0 &&
                    (await this.__processBatch(_),
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "FTS:Indexer:indexQueuedBatch: Completed batch",
                        ])),
                    ),
                    await t(
                      _.map(function (e) {
                        return e.id;
                      }),
                    ));
                }
              }
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "FTS:Indexer:indexQueuedBatch: Completed",
                  ])),
              );
            } catch (e) {
              return (a.reject(e), !1);
            }
            return (a.resolve(!0), !0);
          }),
          (n.full = async function (t, n) {
            var e = this;
            if (
              (t === void 0 && (t = f),
              this.__progressCallbacks.push(t),
              this.isFullIndexingPending())
            )
              return r("nullthrows")(this.__currentFullIndexingOp);
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
                var m;
                if (
                  (this.signaller != null &&
                    this.signaller.shouldTerminateAll()) ||
                  (await ((m = this.signaller) == null ||
                  m.waitWhilePaused == null
                    ? void 0
                    : m.waitWhilePaused()),
                  this.signaller != null && this.signaller.shouldTerminateAll())
                )
                  return (a.resolve(c), c);
                var g = performance.now();
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "Current message batch is from entry ",
                      " of ",
                      "...",
                    ])),
                  l,
                  u,
                );
                var h = this.scheduler;
                if (h)
                  await h.run(
                    async function () {
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
                    {
                      name: "fts_full",
                      priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY,
                    },
                  ).promise;
                else {
                  var y = await (n != null
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
                  if (y == null || y.length === 0) break;
                  var C = y[y.length - 1];
                  ((s = C.id), await this.__processBatch(y));
                  var b = Math.min(1, (l + i) / u);
                  this.__notifyProgress(b, C.id);
                }
                var v = performance.now();
                (o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "Finished batch from entry ",
                      " of ",
                      ". (Took ",
                      " msec)",
                    ])),
                  l,
                  u,
                  v - g,
                ),
                  c.push(v - g),
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
    l.default = h;
  },
  98,
);
