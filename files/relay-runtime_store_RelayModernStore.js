__d(
  "relay-runtime/store/RelayModernStore",
  [
    "invariant",
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
      c = n(
        "relay-runtime/multi-actor-environment/ActorIdentifier",
      ).INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE,
      d = n(
        "relay-runtime/multi-actor-environment/ActorIdentifier",
      ).assertInternalActorIdentifier,
      m = n(
        "relay-runtime/store/live-resolvers/LiveResolverCache",
      ).LiveResolverCache,
      p = n(
        "relay-runtime/store/live-resolvers/LiveResolverCache",
      ).RELAY_RESOLVER_LIVE_STATE_SUBSCRIPTION_KEY,
      _ = n(
        "relay-runtime/store/live-resolvers/LiveResolverCache",
      ).getUpdatedDataIDs,
      f = (u = n("relay-runtime/store/RelayStoreUtils"))
        .FIELD_GRANULAR_NOTIFICATIONS_KEY,
      g = u.ROOT_ID,
      h = u.ROOT_TYPE,
      y = u.getFieldNotificationKey,
      C = 10,
      b = (function () {
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
            p;
          ((this.$31 = function () {
            r.$4 && (r.$4.next().done ? (r.$4 = null) : r.$5(r.$31));
          }),
            (this.$1 = 0),
            (this.$2 = 0),
            (this.$3 =
              (o = t == null ? void 0 : t.gcReleaseBufferSize) != null ? o : C),
            (this.$17 =
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
            (this.$8 = new Set()),
            (this.$9 = new Set()),
            (this.__log = (s = t == null ? void 0 : t.log) != null ? s : null),
            (this.$10 = t == null ? void 0 : t.queryCacheExpirationTime),
            (this.$11 =
              (u = t == null ? void 0 : t.operationLoader) != null ? u : null),
            (this.$12 = null),
            (this.$13 = e),
            (this.$15 = []),
            (this.$16 = new Map()),
            (this.$18 = !1),
            (this.$14 = new m(function () {
              return r.$27();
            }, this)),
            (this.$22 = t == null ? void 0 : t.resolverContext),
            (this.$19 = new (n("relay-runtime/store/RelayStoreSubscriptions"))(
              t == null ? void 0 : t.log,
              this.$14,
              this.$22,
            )),
            (this.$20 = new Set()),
            (this.$21 =
              (c = t == null ? void 0 : t.shouldProcessClientComponents) != null
                ? c
                : !1),
            (this.$24 =
              (d = t == null ? void 0 : t.treatMissingFieldsAsNull) != null
                ? d
                : !1),
            (this.$25 =
              (p = t == null ? void 0 : t.deferDeduplicatedFields) != null
                ? p
                : !1),
            (this.$23 = t == null ? void 0 : t.actorIdentifier),
            (this.$26 = null),
            v(this.$13));
        }
        var r = t.prototype;
        return (
          (r.getSource = function () {
            var e;
            return (e = this.$12) != null ? e : this.$13;
          }),
          (r.getOperationLoader = function () {
            return this.$11;
          }),
          (r.$27 = function () {
            var e;
            return (e = this.$12) != null ? e : this.$13;
          }),
          (r.getLiveResolverPromise = function (t) {
            return this.$14.getLiveResolverPromise(t);
          }),
          (r.batchLiveStateUpdates = function (t) {
            this.__log != null &&
              this.__log({ name: "liveresolver.batch.start" });
            try {
              this.$14.batchLiveStateUpdates(t);
            } finally {
              this.__log != null &&
                this.__log({ name: "liveresolver.batch.end" });
            }
          }),
          (r.experimental_batchUpdates = function (t) {
            if (this.$26 != null)
              throw new Error(
                "RelayModernStore: Cannot batch updates while already batching updates.",
              );
            var e = this.__log;
            e != null && e({ name: "store.batch.start" });
            var n = { sourceOperations: [], invalidateStore: !1 };
            this.$26 = n;
            try {
              t();
            } finally {
              ((this.$26 = null), this.notify(void 0, n.invalidateStore));
              for (var r of n.sourceOperations) this.$28(r);
              e != null &&
                e({
                  name: "store.batch.complete",
                  sourceOperations: n.sourceOperations,
                  invalidateStore: n.invalidateStore,
                });
            }
          }),
          (r.batchLiveStateUpdatesWithoutNotify = function (t) {
            this.__log != null &&
              this.__log({ name: "liveresolver.batch.start" });
            var e = !1;
            try {
              e = this.$14.batchLiveStateUpdatesWithoutNotify(t);
            } finally {
              this.__log != null &&
                this.__log({ name: "liveresolver.batch.end" });
            }
            return e;
          }),
          (r.check = function (t, r) {
            var e,
              o,
              a,
              i,
              l,
              s,
              u,
              m = t.root,
              p = this.$27(),
              _ = this.$7,
              f =
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
              g = this.$16.get(t.request.identifier),
              h = g != null ? g.epoch : null;
            if (_ != null && (h == null || h <= _)) return { status: "stale" };
            var y = (i = r == null ? void 0 : r.handlers) != null ? i : [],
              C =
                (l = r == null ? void 0 : r.getSourceForActor) != null
                  ? l
                  : function (e) {
                      return (d(e), p);
                    },
              b =
                (s = r == null ? void 0 : r.getTargetForActor) != null
                  ? s
                  : function (e) {
                      return (d(e), p);
                    },
              v = n("relay-runtime/store/DataChecker").check(
                C,
                b,
                (u = r == null ? void 0 : r.defaultActorIdentifier) != null
                  ? u
                  : c,
                m,
                y,
                this.$11,
                this.$6,
                this.$21,
                this.__log,
                f,
              );
            return R(v, h, g == null ? void 0 : g.fetchTime, this.$10);
          }),
          (r.retain = function (t) {
            var e = this,
              n = t.request.identifier,
              r = !1,
              o = function () {
                if (!r) {
                  r = !0;
                  var t = e.$16.get(n);
                  if (t != null && (t.refCount--, t.refCount === 0)) {
                    var o = e.$10,
                      a =
                        t.fetchTime != null &&
                        o != null &&
                        t.fetchTime <= Date.now() - o;
                    if (a) (e.$17 || e.$16.delete(n), e.scheduleGC());
                    else if ((e.$15.push(n), e.$15.length > e.$3)) {
                      var i = e.$15.shift();
                      (e.$17 || e.$16.delete(i), e.scheduleGC());
                    }
                  }
                }
              },
              a = this.$16.get(n);
            return (
              a != null
                ? (a.refCount === 0 &&
                    (this.$15 = this.$15.filter(function (e) {
                      return e !== n;
                    })),
                  (a.refCount += 1))
                : this.$16.set(n, {
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
                this.$14,
                this.$22,
              );
            return (
              e != null && e({ name: "store.lookup.end", selector: t }),
              o
            );
          }),
          (r.notify = function (t, r) {
            var e = this,
              o = this.$26;
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
                this.$20.size > 0) &&
                this.$14.invalidateDataIDs(this.$20));
            var i = this.getSource(),
              l = [];
            return (
              !n("relay-runtime/util/RelayFeatureFlags").OPTIMIZE_NOTIFY ||
              this.$20.size > 0
                ? this.$19.updateSubscriptions(i, this.$20, l, t)
                : this.$19.updateStaleSubscriptions(i, this.$20, l, t),
              n("relay-runtime/util/RelayFeatureFlags").OPTIMIZE_NOTIFY &&
                (this.$20.size > 0 ||
                  l.length > 0 ||
                  this.$9.size > 0 ||
                  r === !0 ||
                  this.$7 === this.$1) &&
                (this.$1++, r === !0 && (this.$7 = this.$1)),
              (!n("relay-runtime/util/RelayFeatureFlags").OPTIMIZE_NOTIFY ||
                this.$9.size > 0 ||
                r === !0) &&
                this.$8.forEach(function (t) {
                  e.$29(t, r === !0);
                }),
              t != null && this.$28(t),
              a != null &&
                a({
                  name: "store.notify.complete",
                  sourceOperation: t,
                  updatedRecordIDs: this.$20,
                  invalidatedRecordIDs: this.$9,
                  subscriptionsSize: this.$19.size(),
                  updatedOwners: l,
                }),
              this.$20.clear(),
              this.$9.clear(),
              l
            );
          }),
          (r.$28 = function (t) {
            var e = t.request.identifier,
              n = this.$16.get(e);
            if (n != null) ((n.epoch = this.$1), (n.fetchTime = Date.now()));
            else if (
              t.request.node.params.operationKind === "query" &&
              this.$3 > 0 &&
              this.$15.length < this.$3
            ) {
              var r = {
                operation: t,
                refCount: 0,
                epoch: this.$1,
                fetchTime: Date.now(),
              };
              (this.$15.push(e), this.$16.set(e, r));
            }
          }),
          (r.publish = function (t, n) {
            var e = this.$27();
            S(e, t, this.$1 + 1, n, this.$20, this.$9);
            var r = this.__log;
            r != null &&
              r({
                name: "store.publish",
                source: t,
                optimistic: e === this.$12,
              });
          }),
          (r.subscribe = function (t, n) {
            return this.$19.subscribe(t, n);
          }),
          (r.holdGC = function () {
            var e = this;
            (this.$4 && ((this.$4 = null), (this.$18 = !0)), this.$2++);
            var t = function () {
              e.$2 > 0 &&
                (e.$2--, e.$2 === 0 && e.$18 && (e.scheduleGC(), (e.$18 = !1)));
            };
            return { dispose: t };
          }),
          (r.toJSON = function () {
            return "RelayModernStore()";
          }),
          (r.getEpoch = function () {
            return this.$1;
          }),
          (r.__getUpdatedRecordIDs = function () {
            return this.$20;
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
                e.$8.delete(r);
              };
            return (this.$8.add(r), { dispose: o });
          }),
          (r.$29 = function (t, n) {
            var e = this,
              r = t.callback,
              o = t.invalidationState,
              a = o.dataIDs,
              i =
                n ||
                a.some(function (t) {
                  return e.$9.has(t);
                });
            i && r();
          }),
          (r.snapshot = function () {
            this.$12 == null || l(0, 19004);
            var e = this.__log;
            (e != null && e({ name: "store.snapshot" }),
              this.$19.snapshotSubscriptions(this.getSource()),
              this.$4 && ((this.$4 = null), (this.$18 = !0)),
              (this.$12 = n(
                "relay-runtime/store/RelayOptimisticRecordSource",
              ).create(this.getSource())));
          }),
          (r.restore = function () {
            var e = this.$12;
            e || l(0, 19005);
            var t = this.__log;
            t != null && t({ name: "store.restore" });
            var r = n(
              "relay-runtime/store/RelayOptimisticRecordSource",
            ).getOptimisticRecordIDs(e);
            (this.$14.unsubscribeFromLiveResolverRecords(r),
              (this.$12 = null),
              this.$18 && this.scheduleGC(),
              this.$19.restoreSubscriptions(),
              this.$14.invalidateResolverRecords(r));
          }),
          (r.scheduleGC = function () {
            if (this.$2 > 0) {
              this.$18 = !0;
              return;
            }
            this.$4 || ((this.$4 = this.$30()), this.$5(this.$31));
          }),
          (r.__gc = function () {
            if (this.$12 == null) for (var e = this.$30(); !e.next().done; );
          }),
          (r.$30 = function* () {
            if (!(this.$17 && this.$10 == null)) {
              var t = this.__log;
              e: for (;;) {
                t != null && t({ name: "store.gc.start" });
                var r = this.$1,
                  o = new Set();
                for (var a of this.$16.entries()) {
                  var i,
                    s,
                    u,
                    c = a[0],
                    d = a[1],
                    m = d.operation,
                    _ = d.refCount,
                    f = d.fetchTime;
                  if (this.$17) {
                    var g = this.$10;
                    g != null || l(0, 88990);
                    var h = f == null || f <= Date.now() - g,
                      y = h && _ === 0 && !this.$15.includes(c);
                    if (y) continue;
                  }
                  var C = m.root,
                    b =
                      (i =
                        (s =
                          m.request.node.operation.use_exec_time_resolvers) !=
                        null
                          ? s
                          : ((u =
                              m.request.node.operation
                                .exec_time_resolvers_enabled_provider) == null
                              ? void 0
                              : u.get()) === !0) != null
                        ? i
                        : !1;
                  if (
                    (n("relay-runtime/store/RelayReferenceMarker").mark(
                      this.$13,
                      C,
                      o,
                      this.$11,
                      this.$21,
                      b,
                    ),
                    yield,
                    r !== this.$1)
                  ) {
                    t != null && t({ name: "store.gc.interrupted" });
                    continue e;
                  }
                }
                for (
                  var v = this.$13.getRecordIDs(), S = 0;
                  S < v.length;
                  S++
                ) {
                  var R = v[S];
                  if (!o.has(R)) {
                    var L = this.$13.get(R);
                    if (L != null) {
                      var E = (
                        e || (e = n("relay-runtime/store/RelayModernRecord"))
                      ).getValue(L, p);
                      E != null && E();
                    }
                    (this.$13.remove(R), this.$17 && this.$16.delete(R));
                  }
                }
                t != null && t({ name: "store.gc.end", references: o });
                return;
              }
            }
          }),
          (r.__getNormalizationOptions = function (t) {
            return {
              path: t,
              getDataID: this.$6,
              log: this.__log,
              treatMissingFieldsAsNull: this.$24,
              deferDeduplicatedFields: this.$25,
              shouldProcessClientComponents: this.$21,
              actorIdentifier: this.$23,
            };
          }),
          (r.__notifyUpdatedSubscribers = function (t) {
            var e = _(t),
              n = this.$20;
            ((this.$20 = e), this.notify(), (this.$20 = n));
          }),
          t
        );
      })();
    function v(t) {
      if (!t.has(g)) {
        var r = (e || (e = n("relay-runtime/store/RelayModernRecord"))).create(
          g,
          h,
        );
        (n("relay-runtime/util/RelayFeatureFlags")
          .ENABLE_FIELD_GRANULAR_NOTIFICATIONS &&
          (e || (e = n("relay-runtime/store/RelayModernRecord"))).setValue(
            r,
            f,
            !0,
          ),
          t.set(g, r));
      }
    }
    function S(t, r, o, a, i, l) {
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
            (e || (e = n("relay-runtime/store/RelayModernRecord"))).getValue(
              p,
              f,
            ))
          )
            for (
              var _ = (
                  e || (e = n("relay-runtime/store/RelayModernRecord"))
                ).getFields(p),
                g = 0;
              g < _.length;
              g++
            ) {
              var h = _[g];
              h.startsWith("__") ||
                ((
                  e || (e = n("relay-runtime/store/RelayModernRecord"))
                ).hasFieldChanged(m, p, h) &&
                  i.add(y(c, h)));
            }
        } else
          d === null
            ? (t.delete(c), m !== null && i.add(c))
            : d && (t.set(c, d), i.add(c));
      }
    }
    function R(e, t, n, r) {
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
    a.exports = b;
  },
  null,
);
