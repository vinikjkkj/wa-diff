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
      f = function () {},
      g = function () {
        return (_ || (_ = n("Promise"))).resolve();
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
        var a = t.prototype;
        return (
          (a.__resetFullIndexingProgress = function () {
            ((this.__isFullIndexingPending = !1),
              (this.__fullIndexingProgress = -1));
          }),
          (a.__notifyProgress = function (t, n) {
            ((this.__fullIndexingProgress = t),
              this.__progressCallbacks.forEach(function (e) {
                try {
                  e(t, n);
                } catch (e) {}
              }),
              t === 1 && (this.__progressCallbacks = []));
          }),
          (a.__processBatch = function (t) {
            return (_ || (_ = n("Promise"))).reject(
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
            return (_ || (_ = n("Promise"))).reject(
              new (o("WACustomError").UnimplementedMethod)("purge"),
            );
          }),
          (a.purgeChat = function (t) {
            return (_ || (_ = n("Promise"))).reject(
              new (o("WACustomError").UnimplementedMethod)("purge"),
            );
          }),
          (a.purge__DEPRECATED_DO_NOT_USE = function (t, r, a) {
            return (_ || (_ = n("Promise"))).reject(
              new (o("WACustomError").UnimplementedMethod)("purge"),
            );
          }),
          (a.search = function (t, n) {
            return this.finder.find(t, n);
          }),
          (a.incremental = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, a) {
                var i = this;
                if ((t === void 0 && (t = g), this.isQueuedIndexingPending()))
                  return r("nullthrows")(this.__currentQueuedIndexingOp);
                var l = new (o("WAResolvable").Resolvable)(),
                  m = !0;
                try {
                  for (
                    this.__isProcessingBacklog = !0,
                      this.__currentQueuedIndexingOp = l.promise,
                      l.promise.finally(function () {
                        i.__isProcessingBacklog = !1;
                      }),
                      o("WALogger").LOG(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "FTS:Indexer:indexQueuedBatch: Starting new batch size : ",
                            "",
                          ])),
                        this.batchSize,
                      );
                    m;
                  ) {
                    if (
                      this.signaller != null &&
                      this.signaller.shouldTerminateAll()
                    ) {
                      m = !1;
                      break;
                    }
                    var p = this.scheduler;
                    if (p)
                      (a == null &&
                        o("WALogger").ERROR(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "FTS:Indexer:indexQueuedBatch: Priority is null",
                            ])),
                        ),
                        yield p.run(
                          n("asyncToGeneratorRuntime").asyncToGenerator(
                            function* () {
                              var e = yield i.messageSource.getBacklogged({
                                limit: i.batchSize,
                              });
                              if (e == null) {
                                m = !1;
                                return;
                              }
                              e.length !== 0 &&
                                (yield i.__processBatch(e),
                                o("WALogger").LOG(
                                  u ||
                                    (u =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "FTS:Indexer:indexQueuedBatch: Completed batch",
                                      ])),
                                ),
                                yield t(
                                  e.map(function (e) {
                                    return e.id;
                                  }),
                                ));
                            },
                          ),
                          {
                            name: "fts_incremental",
                            priority:
                              a != null
                                ? a
                                : o("TaskSchedulerPriority")
                                    .BACKGROUND_PRIORITY,
                          },
                        ).promise);
                    else {
                      var _ = yield this.messageSource.getBacklogged({
                        limit: this.batchSize,
                      });
                      if (_ == null) {
                        m = !1;
                        break;
                      }
                      _.length !== 0 &&
                        (yield this.__processBatch(_),
                        o("WALogger").LOG(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "FTS:Indexer:indexQueuedBatch: Completed batch",
                            ])),
                        ),
                        yield t(
                          _.map(function (e) {
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
                  return (l.reject(e), !1);
                }
                return (l.resolve(!0), !0);
              },
            );
            function a(e, n) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.full = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var a = this;
                if (
                  (e === void 0 && (e = f),
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
                      _ = !0;
                    s <= c && _;
                  ) {
                    var g = performance.now();
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
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
                              _ = !1;
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
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "Finished batch from entry ",
                          " of ",
                          ". (Took ",
                          " msec)",
                        ])),
                      s,
                      c,
                      v - g,
                    ),
                      d.push(v - g),
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
    l.default = h;
  },
  98,
);
