__d(
  "WAOneQueue",
  [
    "NativeSchedulerTickStrategy",
    "Promise",
    "TaskScheduler",
    "TaskSchedulerPriority",
    "WAComms",
    "WAOfflineUtils",
    "WAPubSub",
    "WAResolvable",
    "WAShiftTimer",
    "WATagsLogger",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
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
      g,
      h,
      y,
      C,
      b = 6e4,
      v = o("WATagsLogger").TAGS(["OneQueue"]),
      S = (function () {
        function t(t) {
          var n = this,
            r = t.castAcks,
            a = t.context,
            i = t.danglingQueue,
            l = t.enqueuePriority,
            s = t.flushables,
            u = t.mode,
            c = t.promotionTimeoutMs,
            d = t.pullMode,
            m = t.schedulerLifecycleListener,
            p = t.schedulerName;
          ((this.$1 = o("WAPubSub").simplePubSub()),
            (this.$2 = []),
            (this.$3 = []),
            (this.$7 = {}),
            (this.$8 = []),
            (this.$9 = 0),
            (this.$12 = []),
            (this.$13 = new (o("WAResolvable").Resolvable)()));
          var _ = o("TaskScheduler").taskScheduler(
            p,
            {
              concurrency: 1,
              failOnTimeout: !0,
              promotionTimeoutMs: c,
              timeoutMs: 15e3,
            },
            o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy(),
          );
          (_.setLifecycleListener(m),
            (this.$14 = _),
            (this.$15 = l),
            (this.$16 = i),
            (this.$4 = u),
            (this.$11 = a),
            (this.$17 = r),
            (this.$12 = s),
            (this.$6 = d),
            (this.$5 = new (o("WAShiftTimer").ShiftTimer)(function () {
              n.$14
                .run(
                  function () {
                    return n.$18();
                  },
                  { name: "flush_by_timer" },
                )
                .promise.catch(function (t) {
                  v.ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Error while processing flush_by_timer: ",
                        "",
                      ])),
                    t,
                  );
                });
            })));
        }
        var a = t.prototype;
        return (
          (a.$19 = function (t) {
            var e = t.fn,
              n = t.name,
              r = t.priority;
            return (
              v.LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Enqueuing ",
                    " offline: ",
                    "",
                  ])),
                n,
                this.$4 !== o("WAOfflineUtils").ServerRPCMode.ONLINE,
              ),
              this.$14.run(
                function () {
                  return e();
                },
                { name: n, priority: r },
              ).promise
            );
          }),
          (a.subscribe = function (t) {
            return this.$1.subscribe(t);
          }),
          (a.getMode = function () {
            return this.$4;
          }),
          (a.handleStanza = function (t, n) {
            var e = this,
              r = this.$10;
            return this.$19({
              fn: function () {
                return e.$20(t, n, r);
              },
              name: n.tag + "_process_stanza",
              priority:
                n.tag === "receipt" && n.offline == null
                  ? o("TaskSchedulerPriority").NORMAL_PRIORITY
                  : o("TaskSchedulerPriority").BLOCKING_PRIORITY,
            }).then(function () {
              return "NO_ACK";
            });
          }),
          (a.handleOfflineStartStanza = function (t) {
            t.count !== 0 &&
              (this.$13.resolveWasCalled() &&
                (this.$13 = new (o("WAResolvable").Resolvable)()),
              (this.$4 = o("WAOfflineUtils").ServerRPCMode.OFFLINE_RESUME),
              this.$1.publish({ type: "offline-start", offlineStats: t }),
              (this.$9 = t.count),
              this.$5.onOrAfter(b),
              this.$6.offlineStart());
          }),
          (a.handleOfflineEndStanza = function () {
            var e = this;
            return this.$19({
              fn: function () {
                var t;
                return (
                  e.$5.cancel(),
                  e.$6.clear(),
                  e.$10 !==
                  ((t = o("WAComms").getComms()) == null ? void 0 : t.socketId)
                    ? (v.LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Offline queue end received while the connection gets dropped",
                          ])),
                      ),
                      e.$18("endOfOQ"))
                    : (v.LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "Offline queue end",
                          ])),
                      ),
                      e.$18("endOfOQ").then(function () {
                        ((e.$4 = o("WAOfflineUtils").ServerRPCMode.ONLINE),
                          e.$21(),
                          e.$13.resolve(),
                          e.$1.publish({ type: "offline-end" }));
                      }))
                );
              },
              name: "offline_end",
              priority: this.$15,
            }).then(function () {
              var t = e.$8;
              ((e.$8 = []),
                t.forEach(function (e) {
                  return e();
                }));
            });
          }),
          (a.$21 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                yield this.$16.clear();
              } catch (e) {
                v.ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "Error while clearing the dangling queue: ",
                      "",
                    ])),
                  e,
                );
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.waitForWAInfraOfflineSyncEnd = function () {
            return this.$13.promise;
          }),
          (a.newConnection = function () {
            var e;
            this.$10 =
              (e = o("WAComms").getComms()) == null ? void 0 : e.socketId;
          }),
          (a.connectionDropped = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this;
              (v.WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "Drop offline queue as per loosing connection",
                  ])),
              ),
                (this.$10 = null),
                this.$6.clear(),
                yield this.$19({
                  name: "flush_on_connection_drop",
                  fn: function () {
                    return e.$18();
                  },
                  priority: o("TaskSchedulerPriority").BLOCKING_PRIORITY,
                }),
                this.$1.publish({ type: "connection-lost" }));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$22 = function (t, n) {
            t != null &&
              (this.$1.publish({
                type: "offline-entity",
                serverTs: n,
                offline: t,
              }),
              this.$6.stanzaReceived(t),
              this.$5.cancel(),
              this.$5.onOrAfter(b));
          }),
          (a.$20 = function (t, r, o) {
            var e,
              a = this,
              i = r.offline,
              l = r.serverTs,
              s = r.tag;
            return (
              this.$22(i, l),
              v.LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "Processing stanza with tag ",
                    "",
                  ])),
                s,
              ),
              (this.$7[s] = ((e = this.$7[s]) != null ? e : 0) + 1),
              (C || (C = n("Promise")))
                .resolve(t(this.$11))
                .then(function (e) {
                  return (
                    v.LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "Processing stanza with tag ",
                          " is done",
                        ])),
                      s,
                    ),
                    R(e)
                      ? a.$2.push({ response: e, socketId: o })
                      : a.$2.push({ response: e, socketId: o }),
                    e
                  );
                })
                .then(function () {
                  return (i != null && a.$6.stanzaProcessed(), a.$23());
                })
            );
          }),
          (a.$23 = function () {
            return this.$4 === o("WAOfflineUtils").ServerRPCMode.OFFLINE_RESUME
              ? this.$6.shouldFlash()
                ? this.$18()
                : (C || (C = n("Promise"))).resolve()
              : this.$18();
          }),
          (a.$18 = function (t) {
            var e = this;
            v.LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "Flushing protocol queue",
                ])),
            );
            var r = 0;
            return (
              Object.entries(this.$7).forEach(function (e) {
                var t = e[0],
                  n = e[1];
                r += n;
              }),
              (this.$7 = {}),
              this.$12
                .reduce(
                  function (n, r) {
                    return n.then(function () {
                      return r.flush(e.$11, v, e.$4, t);
                    });
                  },
                  (C || (C = n("Promise"))).resolve(),
                )
                .then(function () {
                  return (
                    v.LOG(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "Acking",
                        ])),
                    ),
                    e.$24()
                  );
                })
                .finally(function () {
                  e.$4 === o("WAOfflineUtils").ServerRPCMode.OFFLINE_RESUME &&
                    e.$1.publish({ type: "offline-processed", count: r });
                })
            );
          }),
          (a.isPendingAcksEmpty = function () {
            return this.$2.length === 0 && this.$3.length === 0;
          }),
          (a.$24 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = [].concat(this.$3, this.$2);
              (v.LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "Cast stanzas ",
                    "",
                  ])),
                e.length,
              ),
                (this.$2 = []),
                (this.$3 = []));
              try {
                yield this.$17(e, this.$4);
              } catch (e) {
                var t = r("getErrorSafe")(e);
                throw (
                  v.ERROR(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "Error while casting ack: ",
                        "",
                      ])),
                    t.toString(),
                  ),
                  t
                );
              }
              return (C || (C = n("Promise"))).resolve();
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.enqueue = function (t, r) {
            var e = this,
              a = r.afterInit,
              i = a === void 0 ? !1 : a,
              l = r.flush,
              s = r.operationType,
              u = r.priority,
              c = u === void 0 ? this.$15 : u,
              d = function () {
                return e.$19({
                  name: s,
                  fn: (function (e) {
                    function t() {
                      return e.apply(this, arguments);
                    }
                    return (
                      (t.toString = function () {
                        return e.toString();
                      }),
                      t
                    );
                  })(
                    n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                      var n = yield t(e.$11);
                      return (l && (yield e.$18()), n);
                    }),
                  ),
                  priority: c,
                });
              };
            if (i && this.$4 !== o("WAOfflineUtils").ServerRPCMode.ONLINE) {
              var m = new (o("WAResolvable").Resolvable)();
              return (
                this.$8.push(function () {
                  d()
                    .then(function (e) {
                      return m.resolve(e);
                    })
                    .catch(function (e) {
                      return m.reject(e);
                    });
                }),
                m.promise
              );
            }
            return d();
          }),
          t
        );
      })();
    function R(e) {
      return !(e === "NO_ACK" || e === "CLOSE_SOCKET");
    }
    l.WAOneQueue = S;
  },
  98,
);
