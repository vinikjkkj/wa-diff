__d(
  "WAFtsBaseIndexer",
  [
    "Promise",
    "TaskSchedulerPriority",
    "WACustomError",
    "WALogger",
    "WAResolvable",
    "asyncToGeneratorRuntime",
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
      f,
      g = function () {},
      h = function () {
        return (f || (f = n("Promise"))).resolve();
      },
      y = (function () {
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
        var a = t.prototype;
        return (
          (a.__resetFullIndexingProgress = function () {
            ((this.__isFullIndexingPending = !1),
              (this.__fullIndexingProgress = -1));
          }),
          (a.__notifyProgress = function (n, r) {
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
          (a.__processBatch = function (t) {
            return (f || (f = n("Promise"))).reject(
              new (o("WACustomError").UnimplementedMethod)(
                "BaseIndexer.__processBatch",
              ),
            );
          }),
          (a.getIndexingProgress = function () {
            return this.__fullIndexingProgress;
          }),
          (a.isFullIndexingPending = function () {
            return this.__isFullIndexingPending;
          }),
          (a.isQueuedIndexingPending = function () {
            return this.__isProcessingBacklog;
          }),
          (a.purge = function (t) {
            return (f || (f = n("Promise"))).reject(
              new (o("WACustomError").UnimplementedMethod)("purge"),
            );
          }),
          (a.purgeChat = function (t) {
            return (f || (f = n("Promise"))).reject(
              new (o("WACustomError").UnimplementedMethod)("purge"),
            );
          }),
          (a.purge__DEPRECATED_DO_NOT_USE = function (t, r, a) {
            return (f || (f = n("Promise"))).reject(
              new (o("WACustomError").UnimplementedMethod)("purge"),
            );
          }),
          (a.search = function (t, n) {
            return this.finder.find(t, n);
          }),
          (a.incremental = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var a = this;
                if ((e === void 0 && (e = h), this.isQueuedIndexingPending()))
                  return r("nullthrows")(this.__currentQueuedIndexingOp);
                var i = new (o("WAResolvable").Resolvable)(),
                  l = !0;
                try {
                  for (
                    this.__isProcessingBacklog = !0,
                      this.__currentQueuedIndexingOp = i.promise,
                      i.promise.finally(function () {
                        a.__isProcessingBacklog = !1;
                      }),
                      o("WALogger").LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
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
                    var p = this.scheduler;
                    if (p)
                      (t == null &&
                        o("WALogger").ERROR(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "FTS:Indexer:indexQueuedBatch: Priority is null",
                            ])),
                        ),
                        yield p.run(
                          n("asyncToGeneratorRuntime").asyncToGenerator(
                            function* () {
                              var t = yield a.messageSource.getBacklogged({
                                limit: a.batchSize,
                              });
                              if (t == null) {
                                l = !1;
                                return;
                              }
                              t.length !== 0 &&
                                (yield a.__processBatch(t),
                                o("WALogger").LOG(
                                  c ||
                                    (c =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "FTS:Indexer:indexQueuedBatch: Completed batch",
                                      ])),
                                ),
                                yield e(
                                  t.map(function (e) {
                                    return e.id;
                                  }),
                                ));
                            },
                          ),
                          {
                            name: "fts_incremental",
                            priority:
                              t != null
                                ? t
                                : o("TaskSchedulerPriority")
                                    .BACKGROUND_PRIORITY,
                          },
                        ).promise);
                    else {
                      var _ = yield this.messageSource.getBacklogged({
                        limit: this.batchSize,
                      });
                      if (_ == null) {
                        l = !1;
                        break;
                      }
                      _.length !== 0 &&
                        (yield this.__processBatch(_),
                        o("WALogger").LOG(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "FTS:Indexer:indexQueuedBatch: Completed batch",
                            ])),
                        ),
                        yield e(
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
                  return (i.reject(e), !1);
                }
                return (i.resolve(!0), !0);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.full = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var a = this;
                if (
                  (e === void 0 && (e = g),
                  this.__progressCallbacks.push(e),
                  this.isFullIndexingPending())
                )
                  return r("nullthrows")(this.__currentFullIndexingOp);
                (this.__resetFullIndexingProgress(),
                  (this.__isFullIndexingPending = !0));
                var i = new (o("WAResolvable").Resolvable)();
                ((this.__currentFullIndexingOp = i.promise),
                  i.promise.finally(function () {
                    return a.__resetFullIndexingProgress();
                  }));
                try {
                  for (
                    var l = this.batchSize,
                      s = 0,
                      u = null,
                      c = yield this.messageSource.size(),
                      d = [performance.now()],
                      m = !0;
                    s <= c && m;
                  ) {
                    var f = performance.now();
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "Current message batch is from entry ",
                          " of ",
                          "...",
                        ])),
                      s,
                      c,
                    );
                    var h = this.scheduler;
                    if (h)
                      yield h.run(
                        n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* () {
                            var e = yield t != null
                              ? a.messageSource.getAllAfterId(t, {
                                  offset: s,
                                  limit: l,
                                  fromMessageId: u,
                                })
                              : a.messageSource.getAll({
                                  offset: s,
                                  limit: l,
                                  fromMessageId: u,
                                });
                            if (e == null || e.length === 0) {
                              m = !1;
                              return;
                            }
                            var n = e[e.length - 1];
                            ((u = n.id), yield a.__processBatch(e));
                            var r = Math.min(1, (s + l) / c);
                            a.__notifyProgress(r, n.id);
                          },
                        ),
                        {
                          name: "fts_full",
                          priority: o("TaskSchedulerPriority")
                            .BACKGROUND_PRIORITY,
                        },
                      ).promise;
                    else {
                      var y = yield t != null
                        ? this.messageSource.getAllAfterId(t, {
                            offset: s,
                            limit: l,
                            fromMessageId: u,
                          })
                        : this.messageSource.getAll({
                            offset: s,
                            limit: l,
                            fromMessageId: u,
                          });
                      if (y == null || y.length === 0) break;
                      var C = y[y.length - 1];
                      ((u = C.id), yield this.__processBatch(y));
                      var b = Math.min(1, (s + l) / c);
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
                      s,
                      c,
                      v - f,
                    ),
                      d.push(v - f),
                      (s += l));
                  }
                  return (this.__notifyProgress(1), i.resolve(d), d);
                } catch (e) {
                  throw (this.__resetFullIndexingProgress(), i.reject(e), e);
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.setSignaller = function (t) {
            this.signaller = t;
          }),
          (a.getMessageSource = function () {
            return this.messageSource;
          }),
          (a.eraseIndex = function () {
            return this.tableAdapter.erase();
          }),
          t
        );
      })();
    l.default = y;
  },
  98,
);
