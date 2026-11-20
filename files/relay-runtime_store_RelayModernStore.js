__d(
  "relay-runtime/store/RelayModernStore",
  [
    "invariant",
    "Promise",
    "relay-runtime/multi-actor-environment/ActorIdentifier",
    "relay-runtime/store/DataChecker",
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayOptimisticRecordSource",
    "relay-runtime/store/RelayReader",
    "relay-runtime/store/RelayReferenceMarker",
    "relay-runtime/store/RelayStoreSubscriptions",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/store/defaultGetDataID",
    "relay-runtime/store/live-resolvers/LiveResolverCache",
    "relay-runtime/util/RelayFeatureFlags",
    "relay-runtime/util/deepFreeze",
    "relay-runtime/util/resolveImmediate",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = n(
        "relay-runtime/multi-actor-environment/ActorIdentifier",
      ).INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE,
      m = n(
        "relay-runtime/multi-actor-environment/ActorIdentifier",
      ).assertInternalActorIdentifier,
      p = n(
        "relay-runtime/store/live-resolvers/LiveResolverCache",
      ).LiveResolverCache,
      _ = n(
        "relay-runtime/store/live-resolvers/LiveResolverCache",
      ).RELAY_RESOLVER_LIVE_STATE_SUBSCRIPTION_KEY,
      f = n(
        "relay-runtime/store/live-resolvers/LiveResolverCache",
      ).getUpdatedDataIDs,
      g = (c = n("relay-runtime/store/RelayStoreUtils"))
        .FIELD_GRANULAR_NOTIFICATIONS_KEY,
      h = c.ROOT_ID,
      y = c.ROOT_TYPE,
      C = c.getFieldNotificationKey,
      b = 10,
      v = (function () {
        function t(e, t) {
          var r = this,
            o,
            a,
            i,
            l,
            s,
            u,
            c,
            d,
            m;
          ((this.$35 = function () {
            var e = r.$4;
            if (e) {
              var t = !0;
              try {
                t = e.next().done === !0;
              } finally {
                r.$4 === e && (t ? (r.$4 = null) : r.$5(r.$35));
              }
            }
          }),
            (this.$1 = 0),
            (this.$2 = 0),
            (this.$3 =
              (o = t == null ? void 0 : t.gcReleaseBufferSize) != null ? o : b),
            (this.$19 =
              (a = t == null ? void 0 : t.shouldRetainWithinTTL_EXPERIMENTAL) !=
              null
                ? a
                : !1),
            (this.$4 = null),
            (this.$5 =
              (i = t == null ? void 0 : t.gcScheduler) != null
                ? i
                : n("relay-runtime/util/resolveImmediate")),
            (this.$6 =
              (l = t == null ? void 0 : t.getDataID) != null
                ? l
                : n("relay-runtime/store/defaultGetDataID")),
            (this.$7 = null),
            (this.$8 = !1),
            (this.$9 = new Set()),
            (this.$10 = new Set()),
            (this.__log = (s = t == null ? void 0 : t.log) != null ? s : null),
            (this.$11 = t == null ? void 0 : t.queryCacheExpirationTime),
            (this.$12 =
              (u = t == null ? void 0 : t.operationLoader) != null ? u : null),
            (this.$13 = null),
            (this.$14 = null),
            (this.$15 = e),
            (this.$17 = []),
            (this.$18 = new Map()),
            (this.$20 = !1),
            (this.$21 =
              (c =
                t == null
                  ? void 0
                  : t.shouldScheduleGCAfterPublish_EXPERIMENTAL) != null
                ? c
                : null),
            (this.$16 = new p(function () {
              return r.$30();
            }, this)),
            (this.$25 = t == null ? void 0 : t.resolverContext),
            (this.$22 = new (n("relay-runtime/store/RelayStoreSubscriptions"))(
              t == null ? void 0 : t.log,
              this.$16,
              this.$25,
            )),
            (this.$23 = new Set()),
            (this.$24 = new Set()),
            (this.$27 =
              (d = t == null ? void 0 : t.treatMissingFieldsAsNull) != null
                ? d
                : !1),
            (this.$28 =
              (m = t == null ? void 0 : t.deferDeduplicatedFields) != null
                ? m
                : !1),
            (this.$26 = t == null ? void 0 : t.actorIdentifier),
            (this.$29 = null),
            R(this.$15),
            n("relay-runtime/util/RelayFeatureFlags")
              .ENABLE_PERF_READER_MAP_ANCHOR &&
              n("relay-runtime/util/RelayFeatureFlags").ENABLE_PERF_READER &&
              n("relay-runtime/util/RelayFeatureFlags")
                .ENABLE_PERF_STORAGE_KEYS &&
              n("relay-runtime/store/RelayReader").keepReaderMapsAlive());
        }
        var r = t.prototype;
        return (
          (r.getSource = function () {
            var e;
            return (e = this.$14) != null ? e : this.$15;
          }),
          (r.getOperationLoader = function () {
            return this.$12;
          }),
          (r.__registerHandoffModules = function (t, n) {
            var e = this.$12;
            if (e != null) {
              var r = this.$13;
              (r == null && ((r = new WeakMap()), (this.$13 = r)),
                r.set(t, S(n, e)));
            }
          }),
          (r.$30 = function () {
            var e;
            return (e = this.$14) != null ? e : this.$15;
          }),
          (r.getLiveResolverPromise = function (t) {
            return this.$16.getLiveResolverPromise(t);
          }),
          (r.batchLiveStateUpdates = function (t) {
            this.__log != null &&
              this.__log({ name: "liveresolver.batch.start" });
            try {
              this.$16.batchLiveStateUpdates(t);
            } finally {
              this.__log != null &&
                this.__log({ name: "liveresolver.batch.end" });
            }
          }),
          (r.experimental_batchUpdates = function (t) {
            if (this.$29 != null)
              throw new Error(
                "RelayModernStore: Cannot batch updates while already batching updates.",
              );
            var e = this.__log;
            e != null && e({ name: "store.batch.start" });
            var n = { sourceOperations: [], invalidateStore: !1 };
            this.$29 = n;
            try {
              t();
            } finally {
              ((this.$29 = null), this.notify(void 0, n.invalidateStore));
              for (var r of n.sourceOperations) this.$31(r, this.$1, !1);
              e != null &&
                e({
                  name: "store.batch.complete",
                  sourceOperations: n.sourceOperations,
                  invalidateStore: n.invalidateStore,
                });
            }
          }),
          (r.check = function (t, r) {
            var e,
              o,
              a,
              i,
              l,
              s,
              u,
              c,
              p = t.root,
              _ = this.$30(),
              f = this.$7,
              g =
                (e =
                  (o = t.request.node.operation.use_exec_time_resolvers) != null
                    ? o
                    : ((a =
                        t.request.node.operation
                          .exec_time_resolvers_enabled_provider) == null
                        ? void 0
                        : a.get()) === !0) != null
                  ? e
                  : !1,
              h = this.$18.get(t.request.identifier),
              y = h != null ? h.epoch : null;
            if (f != null && (y == null || y <= f)) return { status: "stale" };
            var C = (i = r == null ? void 0 : r.handlers) != null ? i : [],
              b =
                (l = r == null ? void 0 : r.getSourceForActor) != null
                  ? l
                  : function (e) {
                      return (m(e), _);
                    },
              v =
                (s = r == null ? void 0 : r.getTargetForActor) != null
                  ? s
                  : function (e) {
                      return (m(e), _);
                    },
              S = n("relay-runtime/store/DataChecker").check(
                b,
                v,
                (u = r == null ? void 0 : r.defaultActorIdentifier) != null
                  ? u
                  : d,
                p,
                C,
                (c = r == null ? void 0 : r.operationLoader) != null
                  ? c
                  : this.$12,
                this.$6,
                this.__log,
                g,
              );
            return E(S, y, h == null ? void 0 : h.fetchTime, this.$11);
          }),
          (r.retain = function (t) {
            var e = this,
              n = t.request.identifier,
              r = !1,
              o = function () {
                if (!r) {
                  r = !0;
                  var t = e.$18.get(n);
                  if (t != null && (t.refCount--, t.refCount === 0)) {
                    var o = e.$11,
                      a =
                        t.fetchTime != null &&
                        o != null &&
                        t.fetchTime <= Date.now() - o;
                    a ? (e.$19 || e.$18.delete(n), e.scheduleGC()) : e.$32(n);
                  }
                }
              },
              a = this.$18.get(n);
            return (
              a != null
                ? (a.refCount === 0 &&
                    (this.$17 = this.$17.filter(function (e) {
                      return e !== n;
                    })),
                  (a.refCount += 1))
                : this.$18.set(n, {
                    operation: t,
                    refCount: 1,
                    epoch: null,
                    fetchTime: null,
                  }),
              { dispose: o }
            );
          }),
          (r.lookup = function (t) {
            var e = this.__log;
            e != null && e({ name: "store.lookup.start", selector: t });
            var r = this.getSource(),
              o = n("relay-runtime/store/RelayReader").read(
                r,
                t,
                e,
                this.$16,
                this.$25,
              );
            return (
              e != null && e({ name: "store.lookup.end", selector: t }),
              o
            );
          }),
          (r.__createSnapshotStore = function (n) {
            return new t(n, {
              actorIdentifier: this.$26,
              deferDeduplicatedFields: this.$28,
              getDataID: this.$6,
              log: this.__log,
              operationLoader: this.$12,
              resolverContext: this.$25,
              treatMissingFieldsAsNull: this.$27,
            });
          }),
          (r.__unsubscribeFromLiveResolvers = function () {
            this.$16.endLiveResolverSubscriptions();
          }),
          (r.notify = function (t, r) {
            var e = this,
              o = this.$29;
            if (o != null)
              return (
                t != null && o.sourceOperations.push(t),
                r === !0 && (o.invalidateStore = !0),
                []
              );
            var a = this.__log;
            (a != null && a({ name: "store.notify.start", sourceOperation: t }),
              n("relay-runtime/util/RelayFeatureFlags").OPTIMIZE_NOTIFY ||
                (this.$1++, r === !0 && (this.$7 = this.$1)),
              (!n("relay-runtime/util/RelayFeatureFlags").OPTIMIZE_NOTIFY ||
                this.$23.size > 0) &&
                this.$16.invalidateDataIDs(this.$23));
            var i = this.getSource(),
              l = [];
            (!n("relay-runtime/util/RelayFeatureFlags").OPTIMIZE_NOTIFY ||
            this.$23.size > 0
              ? this.$22.updateSubscriptions(i, this.$23, l, t)
              : this.$22.updateStaleSubscriptions(i, this.$23, l, t),
              n("relay-runtime/util/RelayFeatureFlags").OPTIMIZE_NOTIFY &&
                (this.$23.size > 0 ||
                  l.length > 0 ||
                  this.$10.size > 0 ||
                  r === !0 ||
                  this.$8 ||
                  this.$7 === this.$1) &&
                (this.$1++, r === !0 && (this.$7 = this.$1)),
              (!n("relay-runtime/util/RelayFeatureFlags").OPTIMIZE_NOTIFY ||
                this.$10.size > 0 ||
                r === !0) &&
                this.$9.forEach(function (t) {
                  e.$33(t, r === !0);
                }),
              t != null && this.$31(t, this.$1, !1),
              a != null &&
                a({
                  name: "store.notify.complete",
                  sourceOperation: t,
                  updatedRecordIDs: this.$23,
                  invalidatedRecordIDs: this.$10,
                  subscriptionsSize: this.$22.size(),
                  updatedOwners: l,
                }));
            var s = this.$24.size > 0 ? new Set(this.$23) : null;
            return (
              this.$23.clear(),
              this.$10.clear(),
              (this.$8 = !1),
              s != null &&
                this.$24.forEach(function (e) {
                  return e(s);
                }),
              l
            );
          }),
          (r.$31 = function (t, n, r) {
            var e = t.request.identifier,
              o = this.$18.get(e);
            if (o != null) ((o.epoch = n), (o.fetchTime = Date.now()));
            else if (
              t.request.node.params.operationKind === "query" &&
              this.$3 > 0 &&
              (r || this.$17.length < this.$3)
            ) {
              var a = {
                operation: t,
                refCount: 0,
                epoch: n,
                fetchTime: Date.now(),
              };
              (this.$18.set(e, a), this.$32(e));
            }
          }),
          (r.$32 = function (t) {
            if ((this.$17.push(t), this.$17.length > this.$3)) {
              var e = this.$17.shift();
              (e != null && !this.$19 && this.$18.delete(e), this.scheduleGC());
            }
          }),
          (r.publish = function (t, n) {
            var e,
              r = this.$30();
            L(r, t, this.$1 + 1, n, this.$23, this.$10);
            var o = this.__log;
            (o != null &&
              o({
                name: "store.publish",
                source: t,
                optimistic: r === this.$14,
              }),
              ((e = this.$21) == null ? void 0 : e.call(this)) === !0 &&
                this.scheduleGC());
          }),
          (r.publishWithDeferredNotify = function (t, n, r) {
            (this.publish(t, r), (this.$8 = !0), this.$31(n, this.$1 + 1, !0));
          }),
          (r.subscribe = function (t, n) {
            return this.$22.subscribe(t, n);
          }),
          (r.holdGC = function () {
            var e = this;
            (this.$4 && ((this.$4 = null), (this.$20 = !0)), this.$2++);
            var t = function () {
              e.$2 > 0 &&
                (e.$2--, e.$2 === 0 && e.$20 && (e.scheduleGC(), (e.$20 = !1)));
            };
            return { dispose: t };
          }),
          (r.toJSON = function () {
            return "RelayModernStore()";
          }),
          (r.getEpoch = function () {
            return this.$1;
          }),
          (r.observeUpdatedRecordIDs = function (t) {
            var e = this,
              n = function (n) {
                return t(n);
              };
            return (
              this.$24.add(n),
              {
                dispose: function () {
                  e.$24.delete(n);
                },
              }
            );
          }),
          (r.__getUpdatedRecordIDs = function () {
            return this.$23;
          }),
          (r.lookupInvalidationState = function (r) {
            var t = this,
              o = new Map();
            return (
              r.forEach(function (r) {
                var a,
                  i = t.getSource().get(r);
                o.set(
                  r,
                  (a = (
                    e || (e = n("relay-runtime/store/RelayModernRecord"))
                  ).getInvalidationEpoch(i)) != null
                    ? a
                    : null,
                );
              }),
              o.set("global", this.$7),
              { dataIDs: r, invalidations: o }
            );
          }),
          (r.checkInvalidationState = function (t) {
            var e = this.lookupInvalidationState(t.dataIDs),
              n = e.invalidations,
              r = t.invalidations;
            if (n.get("global") !== r.get("global")) return !0;
            for (var o of t.dataIDs) if (n.get(o) !== r.get(o)) return !0;
            return !1;
          }),
          (r.subscribeToInvalidationState = function (t, n) {
            var e = this,
              r = { callback: n, invalidationState: t },
              o = function () {
                e.$9.delete(r);
              };
            return (this.$9.add(r), { dispose: o });
          }),
          (r.$33 = function (t, n) {
            var e = this,
              r = t.callback,
              o = t.invalidationState,
              a = o.dataIDs,
              i =
                n ||
                a.some(function (t) {
                  return e.$10.has(t);
                });
            i && r();
          }),
          (r.snapshot = function () {
            this.$14 == null || l(0, 19004);
            var e = this.__log;
            (e != null && e({ name: "store.snapshot" }),
              this.$22.snapshotSubscriptions(this.getSource()),
              this.$4 && ((this.$4 = null), (this.$20 = !0)),
              (this.$14 = n(
                "relay-runtime/store/RelayOptimisticRecordSource",
              ).create(this.getSource())));
          }),
          (r.restore = function () {
            var e = this.$14;
            e || l(0, 19005);
            var t = this.__log;
            t != null && t({ name: "store.restore" });
            var r = n(
              "relay-runtime/store/RelayOptimisticRecordSource",
            ).getOptimisticRecordIDs(e);
            (this.$16.unsubscribeFromLiveResolverRecords(r),
              (this.$14 = null),
              this.$20 && this.scheduleGC(),
              this.$22.restoreSubscriptions(),
              this.$16.invalidateResolverRecords(r));
          }),
          (r.scheduleGC = function () {
            if (this.$2 > 0) {
              this.$20 = !0;
              return;
            }
            this.$4 || ((this.$4 = this.$34()), this.$5(this.$35));
          }),
          (r.__gc = function () {
            if (this.$14 == null)
              for (var e = this.$34(); e.next().done !== !0; );
          }),
          (r.$34 = function* () {
            if (!(this.$19 && this.$11 == null)) {
              var t = this.__log;
              e: for (;;) {
                t != null && t({ name: "store.gc.start" });
                var r = this.$1,
                  o = new Set();
                for (var a of this.$18.entries()) {
                  var i,
                    s,
                    u,
                    c,
                    d,
                    m = a[0],
                    p = a[1],
                    f = p.operation,
                    g = p.refCount,
                    h = p.fetchTime;
                  if (this.$19) {
                    var y = this.$11;
                    y != null || l(0, 88990);
                    var C = h == null || h <= Date.now() - y,
                      b = C && g === 0 && !this.$17.includes(m);
                    if (b) continue;
                  }
                  var v = f.root,
                    S =
                      (i =
                        (s =
                          f.request.node.operation.use_exec_time_resolvers) !=
                        null
                          ? s
                          : ((u =
                              f.request.node.operation
                                .exec_time_resolvers_enabled_provider) == null
                              ? void 0
                              : u.get()) === !0) != null
                        ? i
                        : !1;
                  if (
                    (n("relay-runtime/store/RelayReferenceMarker").mark(
                      this.$15,
                      v,
                      o,
                      (c =
                        (d = this.$13) == null ? void 0 : d.get(f.request)) !=
                        null
                        ? c
                        : this.$12,
                      S,
                    ),
                    yield,
                    r !== this.$1)
                  ) {
                    t != null && t({ name: "store.gc.interrupted" });
                    continue e;
                  }
                }
                for (
                  var L = this.$15.getRecordIDs(), E = 0;
                  E < L.length;
                  E++
                ) {
                  var k = L[E];
                  if (!o.has(k)) {
                    var I = this.$15.get(k);
                    if (I != null) {
                      var T = (
                        e || (e = n("relay-runtime/store/RelayModernRecord"))
                      ).getValue(I, _);
                      T != null && T();
                    }
                    (this.$15.remove(k), this.$19 && this.$18.delete(k));
                  }
                }
                (R(this.$15),
                  t != null && t({ name: "store.gc.end", references: o }));
                return;
              }
            }
          }),
          (r.__getNormalizationOptions = function (t) {
            return {
              path: t,
              getDataID: this.$6,
              log: this.__log,
              treatMissingFieldsAsNull: this.$27,
              deferDeduplicatedFields: this.$28,
              actorIdentifier: this.$26,
            };
          }),
          (r.__notifyUpdatedSubscribers = function (t) {
            var e = f(t),
              n = this.$23;
            ((this.$23 = e), this.notify(), (this.$23 = n));
          }),
          t
        );
      })();
    function S(e, t) {
      return {
        get: function (r) {
          var n;
          return (n = e.get(r)) != null ? n : t.get(r);
        },
        load: function (o) {
          return e.has(o)
            ? (u || (u = n("Promise"))).resolve(e.get(o))
            : t.load(o);
        },
      };
    }
    function R(t) {
      if (!t.has(h)) {
        var r = (e || (e = n("relay-runtime/store/RelayModernRecord"))).create(
          h,
          y,
        );
        (n("relay-runtime/util/RelayFeatureFlags")
          .ENABLE_FIELD_GRANULAR_NOTIFICATIONS &&
          (e || (e = n("relay-runtime/store/RelayModernRecord"))).setValue(
            r,
            g,
            !0,
          ),
          t.set(h, r));
      }
    }
    function L(t, r, o, a, i, l) {
      a &&
        a.forEach(function (a) {
          var i = t.get(a),
            s = r.get(a);
          if (s !== null) {
            var u;
            (i != null
              ? (u = (
                  e || (e = n("relay-runtime/store/RelayModernRecord"))
                ).clone(i))
              : (u =
                  s != null
                    ? (
                        e || (e = n("relay-runtime/store/RelayModernRecord"))
                      ).clone(s)
                    : null),
              u &&
                ((
                  e || (e = n("relay-runtime/store/RelayModernRecord"))
                ).setValue(
                  u,
                  n("relay-runtime/store/RelayStoreUtils").INVALIDATED_AT_KEY,
                  o,
                ),
                l.add(a),
                t.set(a, u)));
          }
        });
      for (var s = r.getRecordIDs(), u = 0; u < s.length; u++) {
        var c = s[u],
          d = r.get(c),
          m = t.get(c);
        if (d && m) {
          var p = (
            e || (e = n("relay-runtime/store/RelayModernRecord"))
          ).update(m, d);
          if (
            p !== m &&
            (i.add(c),
            t.set(c, p),
            (!n("relay-runtime/util/RelayFeatureFlags").ENABLE_PERF_PUBLISH ||
              n("relay-runtime/util/RelayFeatureFlags")
                .ENABLE_FIELD_GRANULAR_NOTIFICATIONS) &&
              (e || (e = n("relay-runtime/store/RelayModernRecord"))).getValue(
                p,
                g,
              ))
          )
            for (
              var _ = (
                  e || (e = n("relay-runtime/store/RelayModernRecord"))
                ).getFields(p),
                f = 0;
              f < _.length;
              f++
            ) {
              var h = _[f];
              h.startsWith("__") ||
                ((
                  e || (e = n("relay-runtime/store/RelayModernRecord"))
                ).hasFieldChanged(m, p, h) &&
                  i.add(C(c, h)));
            }
        } else
          d === null
            ? (t.delete(c), m !== null && i.add(c))
            : d && (t.set(c, d), i.add(c));
      }
    }
    function E(e, t, n, r) {
      var o = e.mostRecentlyInvalidatedAt,
        a = e.status;
      if (typeof o == "number" && (t == null || o > t))
        return { status: "stale" };
      if (a === "missing") return { status: "missing" };
      if (n != null && r != null) {
        var i = n <= Date.now() - r;
        if (i) return { status: "stale" };
      }
      return { status: "available", fetchTime: n != null ? n : null };
    }
    a.exports = v;
  },
  null,
);
