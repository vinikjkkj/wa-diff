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
          ((this.$33 = function () {
            r.$4 && (r.$4.next().done ? (r.$4 = null) : r.$5(r.$33));
          }),
            (this.$1 = 0),
            (this.$2 = 0),
            (this.$3 =
              (o = t == null ? void 0 : t.gcReleaseBufferSize) != null ? o : C),
            (this.$18 =
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
            (this.$14 = e),
            (this.$16 = []),
            (this.$17 = new Map()),
            (this.$19 = !1),
            (this.$15 = new m(function () {
              return r.$28();
            }, this)),
            (this.$23 = t == null ? void 0 : t.resolverContext),
            (this.$20 = new (n("relay-runtime/store/RelayStoreSubscriptions"))(
              t == null ? void 0 : t.log,
              this.$15,
              this.$23,
            )),
            (this.$21 = new Set()),
            (this.$22 =
              (c = t == null ? void 0 : t.shouldProcessClientComponents) != null
                ? c
                : !1),
            (this.$25 =
              (d = t == null ? void 0 : t.treatMissingFieldsAsNull) != null
                ? d
                : !1),
            (this.$26 =
              (p = t == null ? void 0 : t.deferDeduplicatedFields) != null
                ? p
                : !1),
            (this.$24 = t == null ? void 0 : t.actorIdentifier),
            (this.$27 = null),
            v(this.$14));
        }
        var r = t.prototype;
        return (
          (r.getSource = function () {
            var e;
            return (e = this.$13) != null ? e : this.$14;
          }),
          (r.getOperationLoader = function () {
            return this.$12;
          }),
          (r.$28 = function () {
            var e;
            return (e = this.$13) != null ? e : this.$14;
          }),
          (r.getLiveResolverPromise = function (t) {
            return this.$15.getLiveResolverPromise(t);
          }),
          (r.batchLiveStateUpdates = function (t) {
            this.__log != null &&
              this.__log({ name: "liveresolver.batch.start" });
            try {
              this.$15.batchLiveStateUpdates(t);
            } finally {
              this.__log != null &&
                this.__log({ name: "liveresolver.batch.end" });
            }
          }),
          (r.experimental_batchUpdates = function (t) {
            if (this.$27 != null)
              throw new Error(
                "RelayModernStore: Cannot batch updates while already batching updates.",
              );
            var e = this.__log;
            e != null && e({ name: "store.batch.start" });
            var n = { sourceOperations: [], invalidateStore: !1 };
            this.$27 = n;
            try {
              t();
            } finally {
              ((this.$27 = null), this.notify(void 0, n.invalidateStore));
              for (var r of n.sourceOperations) this.$29(r, this.$1, !1);
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
              e = this.$15.batchLiveStateUpdatesWithoutNotify(t);
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
              p = this.$28(),
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
              g = this.$17.get(t.request.identifier),
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
                this.$12,
                this.$6,
                this.$22,
                this.__log,
                f,
              );
            return R(v, h, g == null ? void 0 : g.fetchTime, this.$11);
          }),
          (r.retain = function (t) {
            var e = this,
              n = t.request.identifier,
              r = !1,
              o = function () {
                if (!r) {
                  r = !0;
                  var t = e.$17.get(n);
                  if (t != null && (t.refCount--, t.refCount === 0)) {
                    var o = e.$11,
                      a =
                        t.fetchTime != null &&
                        o != null &&
                        t.fetchTime <= Date.now() - o;
                    a ? (e.$18 || e.$17.delete(n), e.scheduleGC()) : e.$30(n);
                  }
                }
              },
              a = this.$17.get(n);
            return (
              a != null
                ? (a.refCount === 0 &&
                    (this.$16 = this.$16.filter(function (e) {
                      return e !== n;
                    })),
                  (a.refCount += 1))
                : this.$17.set(n, {
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
                this.$15,
                this.$23,
              );
            return (
              e != null && e({ name: "store.lookup.end", selector: t }),
              o
            );
          }),
          (r.notify = function (t, r) {
            var e = this,
              o = this.$27;
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
                this.$21.size > 0) &&
                this.$15.invalidateDataIDs(this.$21));
            var i = this.getSource(),
              l = [];
            return (
              !n("relay-runtime/util/RelayFeatureFlags").OPTIMIZE_NOTIFY ||
              this.$21.size > 0
                ? this.$20.updateSubscriptions(i, this.$21, l, t)
                : this.$20.updateStaleSubscriptions(i, this.$21, l, t),
              n("relay-runtime/util/RelayFeatureFlags").OPTIMIZE_NOTIFY &&
                (this.$21.size > 0 ||
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
                  e.$31(t, r === !0);
                }),
              t != null && this.$29(t, this.$1, !1),
              a != null &&
                a({
                  name: "store.notify.complete",
                  sourceOperation: t,
                  updatedRecordIDs: this.$21,
                  invalidatedRecordIDs: this.$10,
                  subscriptionsSize: this.$20.size(),
                  updatedOwners: l,
                }),
              this.$21.clear(),
              this.$10.clear(),
              (this.$8 = !1),
              l
            );
          }),
          (r.$29 = function (t, n, r) {
            var e = t.request.identifier,
              o = this.$17.get(e);
            if (o != null) ((o.epoch = n), (o.fetchTime = Date.now()));
            else if (
              t.request.node.params.operationKind === "query" &&
              this.$3 > 0 &&
              (r || this.$16.length < this.$3)
            ) {
              var a = {
                operation: t,
                refCount: 0,
                epoch: n,
                fetchTime: Date.now(),
              };
              (this.$17.set(e, a), this.$30(e));
            }
          }),
          (r.$30 = function (t) {
            if ((this.$16.push(t), this.$16.length > this.$3)) {
              var e = this.$16.shift();
              (e != null && !this.$18 && this.$17.delete(e), this.scheduleGC());
            }
          }),
          (r.publish = function (t, n) {
            var e = this.$28();
            S(e, t, this.$1 + 1, n, this.$21, this.$10);
            var r = this.__log;
            r != null &&
              r({
                name: "store.publish",
                source: t,
                optimistic: e === this.$13,
              });
          }),
          (r.publishWithDeferredNotify = function (t, n, r) {
            (this.publish(t, r), (this.$8 = !0), this.$29(n, this.$1 + 1, !0));
          }),
          (r.subscribe = function (t, n) {
            return this.$20.subscribe(t, n);
          }),
          (r.holdGC = function () {
            var e = this;
            (this.$4 && ((this.$4 = null), (this.$19 = !0)), this.$2++);
            var t = function () {
              e.$2 > 0 &&
                (e.$2--, e.$2 === 0 && e.$19 && (e.scheduleGC(), (e.$19 = !1)));
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
            return this.$21;
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
          (r.$31 = function (t, n) {
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
            this.$13 == null || l(0, 19004);
            var e = this.__log;
            (e != null && e({ name: "store.snapshot" }),
              this.$20.snapshotSubscriptions(this.getSource()),
              this.$4 && ((this.$4 = null), (this.$19 = !0)),
              (this.$13 = n(
                "relay-runtime/store/RelayOptimisticRecordSource",
              ).create(this.getSource())));
          }),
          (r.restore = function () {
            var e = this.$13;
            e || l(0, 19005);
            var t = this.__log;
            t != null && t({ name: "store.restore" });
            var r = n(
              "relay-runtime/store/RelayOptimisticRecordSource",
            ).getOptimisticRecordIDs(e);
            (this.$15.unsubscribeFromLiveResolverRecords(r),
              (this.$13 = null),
              this.$19 && this.scheduleGC(),
              this.$20.restoreSubscriptions(),
              this.$15.invalidateResolverRecords(r));
          }),
          (r.scheduleGC = function () {
            if (this.$2 > 0) {
              this.$19 = !0;
              return;
            }
            this.$4 || ((this.$4 = this.$32()), this.$5(this.$33));
          }),
          (r.__gc = function () {
            if (this.$13 == null) for (var e = this.$32(); !e.next().done; );
          }),
          (r.$32 = function* () {
            if (!(this.$18 && this.$11 == null)) {
              var t = this.__log;
              e: for (;;) {
                t != null && t({ name: "store.gc.start" });
                var r = this.$1,
                  o = new Set();
                for (var a of this.$17.entries()) {
                  var i,
                    s,
                    u,
                    c = a[0],
                    d = a[1],
                    m = d.operation,
                    _ = d.refCount,
                    f = d.fetchTime;
                  if (this.$18) {
                    var g = this.$11;
                    g != null || l(0, 88990);
                    var h = f == null || f <= Date.now() - g,
                      y = h && _ === 0 && !this.$16.includes(c);
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
                      this.$14,
                      C,
                      o,
                      this.$12,
                      this.$22,
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
                  var v = this.$14.getRecordIDs(), S = 0;
                  S < v.length;
                  S++
                ) {
                  var R = v[S];
                  if (!o.has(R)) {
                    var L = this.$14.get(R);
                    if (L != null) {
                      var E = (
                        e || (e = n("relay-runtime/store/RelayModernRecord"))
                      ).getValue(L, p);
                      E != null && E();
                    }
                    (this.$14.remove(R), this.$18 && this.$17.delete(R));
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
              treatMissingFieldsAsNull: this.$25,
              deferDeduplicatedFields: this.$26,
              shouldProcessClientComponents: this.$22,
              actorIdentifier: this.$24,
            };
          }),
          (r.__notifyUpdatedSubscribers = function (t) {
            var e = _(t),
              n = this.$21;
            ((this.$21 = e), this.notify(), (this.$21 = n));
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
