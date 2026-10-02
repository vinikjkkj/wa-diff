__d(
  "WAOneQueue",
  [
    "MsgrSchedulerQPL",
    "NativeSchedulerTickStrategy",
    "Promise",
    "TaskScheduler",
    "TaskSchedulerPriority",
    "WACastStanzas",
    "WAComms",
    "WADanglingQueue",
    "WAGlobals",
    "WAOfflineUtils",
    "WAPubSub",
    "WAPullMode",
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
      C = 6e4,
      b = o("WATagsLogger").TAGS(["OneQueue"]),
      v = (function () {
        function t(t) {
          var n = this,
            r = t.cryptoManager,
            a = t.flushables,
            i = t.mode;
          ((this.$1 = o("WAPubSub").simplePubSub()),
            (this.$2 = []),
            (this.$3 = []),
            (this.$7 = {}),
            (this.$8 = []),
            (this.$9 = 0),
            (this.$12 = []),
            (this.$13 = new (o("WAResolvable").Resolvable)()));
          var l = o("TaskScheduler").taskScheduler(
            "wa",
            {
              concurrency: 1,
              failOnTimeout: !0,
              promotionTimeoutMs: 200,
              timeoutMs: 15e3,
            },
            o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy(),
          );
          (l.setLifecycleListener(
            o("MsgrSchedulerQPL").makeMsgrSchedulerQPLListener({
              defaultSamplingRate: 8e3,
            }),
          ),
            (this.$14 = l),
            (this.$4 = i),
            (this.$11 = r),
            (this.$12 = a),
            (this.$6 = new (o("WAPullMode").PullMode)()),
            (this.$5 = new (o("WAShiftTimer").ShiftTimer)(function () {
              n.$14
                .run(
                  function () {
                    return n.$15();
                  },
                  { name: "flush_by_timer" },
                )
                .promise.catch(function (t) {
                  b.ERROR(
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
          (a.$16 = function (t) {
            var e = t.fn,
              n = t.name,
              r = t.priority;
            return (
              b.LOG(
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
            return this.$16({
              fn: function () {
                return e.$17(t, n, r);
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
              this.$5.onOrAfter(C),
              this.$6.offlineStart());
          }),
          (a.handleOfflineEndStanza = function () {
            var e = this;
            return this.$16({
              fn: function () {
                var t;
                return (
                  e.$5.cancel(),
                  e.$6.clear(),
                  e.$10 !==
                  ((t = o("WAComms").getComms()) == null ? void 0 : t.socketId)
                    ? (b.LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Offline queue end received while the connection gets dropped",
                          ])),
                      ),
                      e.$15("endOfOQ"))
                    : (b.LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "Offline queue end",
                          ])),
                      ),
                      e.$15("endOfOQ").then(function () {
                        ((e.$4 = o("WAOfflineUtils").ServerRPCMode.ONLINE),
                          o("WADanglingQueue").danglingQueueClear(),
                          e.$13.resolve(),
                          e.$1.publish({ type: "offline-end" }));
                      }))
                );
              },
              name: "offline_end",
              priority: o("TaskSchedulerPriority").BLOCKING_PRIORITY,
            }).then(function () {
              var t = e.$8;
              ((e.$8 = []),
                t.forEach(function (e) {
                  return e();
                }));
            });
          }),
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
              (b.WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "Drop offline queue as per loosing connection",
                  ])),
              ),
                (this.$10 = null),
                this.$6.clear(),
                yield this.$16({
                  name: "flush_on_connection_drop",
                  fn: function () {
                    return e.$15();
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
          (a.$18 = function (t, n) {
            t != null &&
              (this.$1.publish({
                type: "offline-entity",
                serverTs: n,
                offline: t,
              }),
              this.$6.stanzaReceived(t),
              this.$5.cancel(),
              this.$5.onOrAfter(C));
          }),
          (a.$17 = function (t, r, o) {
            var e,
              a = this,
              i = r.offline,
              l = r.serverTs,
              s = r.tag;
            return (
              this.$18(i, l),
              b.LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "Processing stanza with tag ",
                    "",
                  ])),
                s,
              ),
              (this.$7[s] = ((e = this.$7[s]) != null ? e : 0) + 1),
              (y || (y = n("Promise")))
                .resolve(t(this.$11))
                .then(function (e) {
                  return (
                    b.LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "Processing stanza with tag ",
                          " is done",
                        ])),
                      s,
                    ),
                    S(e)
                      ? a.$2.push({ response: e, socketId: o })
                      : a.$2.push({ response: e, socketId: o }),
                    e
                  );
                })
                .then(function () {
                  return (i != null && a.$6.stanzaProcessed(), a.$19());
                })
            );
          }),
          (a.$19 = function () {
            return this.$4 === o("WAOfflineUtils").ServerRPCMode.OFFLINE_RESUME
              ? this.$6.shouldFlash()
                ? this.$15()
                : (y || (y = n("Promise"))).resolve()
              : this.$15();
          }),
          (a.$15 = function (t) {
            var e = this;
            b.LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                      return r.flush({ cryptoManager: e.$11 }, b, e.$4, t);
                    });
                  },
                  (y || (y = n("Promise"))).resolve(),
                )
                .then(function () {
                  return (
                    b.LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "Acking",
                        ])),
                    ),
                    e.$20()
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
          (a.$20 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = [].concat(this.$3, this.$2);
              (b.LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "Cast stanzas ",
                    "",
                  ])),
                e.length,
              ),
                (this.$2 = []),
                (this.$3 = []));
              try {
                yield o("WACastStanzas").castStanzasByCategories(e, {
                  send: !0,
                  store:
                    o("WAGlobals").getConfig().waDanglingQueue() &&
                    this.$4 ===
                      o("WAOfflineUtils").ServerRPCMode.OFFLINE_RESUME,
                });
              } catch (e) {
                var t = r("getErrorSafe")(e);
                throw (
                  b.ERROR(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "Error while casting ack: ",
                        "",
                      ])),
                    t.toString(),
                  ),
                  t
                );
              }
              return (y || (y = n("Promise"))).resolve();
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
              u = function () {
                return e.$16({
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
                      var n = yield t({ cryptoManager: e.$11 });
                      return (l && (yield e.$15()), n);
                    }),
                  ),
                  priority: o("TaskSchedulerPriority").BLOCKING_PRIORITY,
                });
              };
            if (i && this.$4 !== o("WAOfflineUtils").ServerRPCMode.ONLINE) {
              var c = new (o("WAResolvable").Resolvable)();
              return (
                this.$8.push(function () {
                  u()
                    .then(function (e) {
                      return c.resolve(e);
                    })
                    .catch(function (e) {
                      return c.reject(e);
                    });
                }),
                c.promise
              );
            }
            return u();
          }),
          t
        );
      })();
    function S(e) {
      return !(e === "NO_ACK" || e === "CLOSE_SOCKET");
    }
    l.WAOneQueue = v;
  },
  98,
);
