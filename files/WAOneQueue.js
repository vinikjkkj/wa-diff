__d(
  "WAOneQueue",
  [
    "NativeSchedulerTickStrategy",
    "TaskScheduler",
    "TaskSchedulerPriority",
    "WAComms",
    "WAOfflineUtils",
    "WAPubSub",
    "WAResolvable",
    "WAShiftTimer",
    "WATagsLogger",
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
          var n = this;
          ((this.$1 = o("WAPubSub").simplePubSub()),
            (this.$2 = []),
            (this.$3 = []),
            (this.$7 = {}),
            (this.$8 = []),
            (this.$9 = 0),
            (this.$12 = []),
            (this.$13 = new (o("WAResolvable").Resolvable)()));
          var r = t.castAcks,
            a = t.context,
            i = t.danglingQueue,
            l = t.enqueuePriority,
            s = t.flushables,
            u = t.mode,
            c = t.pullMode;
          ((this.$14 = t.scheduler
            ? t.scheduler
            : R(
                t.schedulerName,
                t.promotionTimeoutMs,
                t.schedulerLifecycleListener,
              )),
            (this.$15 = l),
            (this.$16 = i),
            (this.$4 = u),
            (this.$11 = a),
            (this.$17 = r),
            (this.$12 = s),
            (this.$6 = c),
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
        var n = t.prototype;
        return (
          (n.$19 = function (t) {
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
          (n.subscribe = function (t) {
            return this.$1.subscribe(t);
          }),
          (n.getMode = function () {
            return this.$4;
          }),
          (n.handleStanza = function (t, n) {
            var e = this,
              r = this.$10;
            return (
              n.offline != null && this.$6.stanzaArrived(n.offline),
              this.$19({
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
              })
            );
          }),
          (n.handleOfflineStartStanza = function (t) {
            t.count !== 0 &&
              (this.$13.resolveWasCalled() &&
                (this.$13 = new (o("WAResolvable").Resolvable)()),
              (this.$4 = o("WAOfflineUtils").ServerRPCMode.OFFLINE_RESUME),
              this.$1.publish({ type: "offline-start", offlineStats: t }),
              (this.$9 = t.count),
              this.$5.onOrAfter(b),
              this.$6.offlineStart());
          }),
          (n.handleOfflineEndStanza = function (t) {
            var e = this;
            return this.$19({
              fn: function () {
                var n;
                return t != null && t !== e.$10
                  ? (v.LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "Offline queue end of a replaced connection",
                        ])),
                    ),
                    e.$18("endOfOQ"))
                  : (e.$5.cancel(),
                    e.$6.clear(),
                    e.$10 !==
                    ((n = o("WAComms").getComms()) == null
                      ? void 0
                      : n.socketId)
                      ? (v.LOG(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "Offline queue end received while the connection gets dropped",
                            ])),
                        ),
                        e.$18("endOfOQ"))
                      : (v.LOG(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "Offline queue end",
                            ])),
                        ),
                        e.$18("endOfOQ").then(function () {
                          ((e.$4 = o("WAOfflineUtils").ServerRPCMode.ONLINE),
                            e.$21(),
                            e.$13.resolve(),
                            e.$1.publish({ type: "offline-end" }));
                        })));
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
          (n.$21 = async function () {
            try {
              await this.$16.clear();
            } catch (e) {
              v.ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "Error while clearing the dangling queue: ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (n.waitForWAInfraOfflineSyncEnd = function () {
            return this.$13.promise;
          }),
          (n.newConnection = function () {
            var e;
            this.$10 =
              (e = o("WAComms").getComms()) == null ? void 0 : e.socketId;
          }),
          (n.connectionDropped = async function (t) {
            var e = this;
            (v.WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "Drop offline queue as per loosing connection",
                ])),
            ),
              (this.$10 = null),
              this.$6.clear(),
              await this.$19({
                name: "flush_on_connection_drop",
                fn: function () {
                  return e.$18();
                },
                priority: o("TaskSchedulerPriority").BLOCKING_PRIORITY,
              }),
              this.$1.publish(
                babelHelpers.extends({ type: "connection-lost" }, t),
              ));
          }),
          (n.$22 = function (t, n) {
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
          (n.$20 = function (t, n, r) {
            var e,
              o = this,
              a = n.offline,
              i = n.serverTs,
              l = n.tag;
            return (
              this.$22(a, i),
              v.LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "Processing stanza with tag ",
                    "",
                  ])),
                l,
              ),
              (this.$7[l] = ((e = this.$7[l]) != null ? e : 0) + 1),
              Promise.resolve(t(this.$11))
                .then(function (e) {
                  return (
                    v.LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "Processing stanza with tag ",
                          " is done",
                        ])),
                      l,
                    ),
                    L(e)
                      ? o.$2.push({ response: e, socketId: r })
                      : o.$2.push({ response: e, socketId: r }),
                    e
                  );
                })
                .then(function () {
                  return (a != null && o.$6.stanzaProcessed(), o.$23());
                })
            );
          }),
          (n.$23 = function () {
            return this.$4 === o("WAOfflineUtils").ServerRPCMode.OFFLINE_RESUME
              ? this.$6.shouldFlash()
                ? this.$18()
                : Promise.resolve()
              : this.$18();
          }),
          (n.$18 = function (t) {
            var e = this;
            v.LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "Flushing protocol queue",
                ])),
            );
            var n = 0;
            return (
              Object.entries(this.$7).forEach(function (e) {
                var t = e[0],
                  r = e[1];
                n += r;
              }),
              (this.$7 = {}),
              this.$12
                .reduce(function (n, r) {
                  return n.then(function () {
                    return r.flush(e.$11, v, e.$4, t);
                  });
                }, Promise.resolve())
                .then(function () {
                  return (
                    v.LOG(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "Acking",
                        ])),
                    ),
                    e.$24()
                  );
                })
                .finally(function () {
                  e.$4 === o("WAOfflineUtils").ServerRPCMode.OFFLINE_RESUME &&
                    e.$1.publish({ type: "offline-processed", count: n });
                })
            );
          }),
          (n.isPendingAcksEmpty = function () {
            return this.$2.length === 0 && this.$3.length === 0;
          }),
          (n.$24 = async function () {
            var e = [].concat(this.$3, this.$2);
            (v.LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "Cast stanzas ",
                  "",
                ])),
              e.length,
            ),
              (this.$2 = []),
              (this.$3 = []));
            try {
              await this.$17(e, this.$4);
            } catch (e) {
              var t = r("getErrorSafe")(e);
              throw (
                v.ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "Error while casting ack: ",
                      "",
                    ])),
                  t.toString(),
                ),
                t
              );
            }
            return Promise.resolve();
          }),
          (n.enqueue = function (t, n) {
            var e = this,
              r = n.afterInit,
              a = r === void 0 ? !1 : r,
              i = n.flush,
              l = n.flushReason,
              s = n.operationType,
              u = n.priority,
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
                  })(async function () {
                    var n = await t(e.$11);
                    return (i && (await e.$18(l)), n);
                  }),
                  priority: c,
                });
              };
            if (a && this.$4 !== o("WAOfflineUtils").ServerRPCMode.ONLINE) {
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
    function R(e, t, n) {
      var r = o("TaskScheduler").taskScheduler(
        e,
        {
          concurrency: 1,
          failOnTimeout: !0,
          promotionTimeoutMs: t,
          timeoutMs: 15e3,
        },
        o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy(),
      );
      return (r.setLifecycleListener(n), r);
    }
    function L(e) {
      return !(e === "NO_ACK" || e === "CLOSE_SOCKET");
    }
    l.WAOneQueue = S;
  },
  98,
);
