__d(
  "relay-runtime/store/RelayModernEnvironment",
  [
    "invariant",
    "relay-runtime/handlers/RelayDefaultHandlerProvider",
    "relay-runtime/multi-actor-environment/ActorIdentifier",
    "relay-runtime/network/RelayObservable",
    "relay-runtime/network/wrapNetworkWithLogObserver",
    "relay-runtime/store/OperationExecutor",
    "relay-runtime/store/RelayModernStore",
    "relay-runtime/store/RelayOperationTracker",
    "relay-runtime/store/RelayPublishQueue",
    "relay-runtime/store/RelayRecordSource",
    "relay-runtime/store/StoreInspector",
    "relay-runtime/store/defaultGetDataID",
    "relay-runtime/store/defaultRelayFieldLogger",
    "relay-runtime/store/normalizeResponse",
    "relay-runtime/util/registerEnvironmentWithDevTools",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n(
        "relay-runtime/multi-actor-environment/ActorIdentifier",
      ).INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE,
      s = n(
        "relay-runtime/multi-actor-environment/ActorIdentifier",
      ).assertInternalActorIdentifier,
      u = (function () {
        function t(e) {
          var t,
            r,
            o,
            a,
            i,
            l,
            s,
            u,
            c,
            m,
            p = this,
            _;
          ((this.configName = e.configName),
            (this.$11 = e.treatMissingFieldsAsNull === !0),
            (this.$12 = e.deferDeduplicatedFields === !0));
          var f = e.operationLoader,
            g =
              (t = e.store) != null
                ? t
                : new (n("relay-runtime/store/RelayModernStore"))(
                    new (n("relay-runtime/store/RelayRecordSource"))(),
                    {
                      getDataID: e.getDataID,
                      log: e.log,
                      operationLoader: e.operationLoader,
                      shouldProcessClientComponents:
                        e.shouldProcessClientComponents,
                    },
                  );
          ((this.__log = (r = e.log) != null ? r : d),
            (this.relayFieldLogger =
              (o = e.relayFieldLogger) != null
                ? o
                : n("relay-runtime/store/defaultRelayFieldLogger")),
            (this.$1 =
              (a = e.UNSTABLE_defaultRenderPolicy) != null ? a : "partial"),
            (this.$2 = f),
            (this.$13 = new Map()),
            (this.$4 = n("relay-runtime/network/wrapNetworkWithLogObserver")(
              this,
              e.network,
            )),
            (this.$10 =
              (i = e.getDataID) != null
                ? i
                : n("relay-runtime/store/defaultGetDataID")),
            (this.$8 = (l = e.missingFieldHandlers) != null ? l : []),
            (this.$5 = new (n("relay-runtime/store/RelayPublishQueue"))(
              g,
              (s = e.handlerProvider) != null
                ? s
                : n("relay-runtime/handlers/RelayDefaultHandlerProvider"),
              this.$10,
              this.$8,
              this.__log,
            )),
            (this.$6 = (u = e.scheduler) != null ? u : null),
            (this.$7 = g),
            (this.options = e.options),
            (this.$14 = (c = e.isServer) != null ? c : !1),
            (this.$15 =
              (m = e.normalizeResponse) != null
                ? m
                : n("relay-runtime/store/normalizeResponse")),
            (this.__setNet = function (e) {
              return (p.$4 = n(
                "relay-runtime/network/wrapNetworkWithLogObserver",
              )(p, e));
            }),
            (this.$9 =
              (_ = e.operationTracker) != null
                ? _
                : new (n("relay-runtime/store/RelayOperationTracker"))()),
            (this.$3 = e.shouldProcessClientComponents),
            n("relay-runtime/util/registerEnvironmentWithDevTools")(this));
        }
        var r = t.prototype;
        return (
          (r.getStore = function () {
            return this.$7;
          }),
          (r.getNetwork = function () {
            return this.$4;
          }),
          (r.getOperationTracker = function () {
            return this.$9;
          }),
          (r.getScheduler = function () {
            return this.$6;
          }),
          (r.isRequestActive = function (t) {
            var e = this.$13.get(t);
            return e === "active";
          }),
          (r.UNSTABLE_getDefaultRenderPolicy = function () {
            return this.$1;
          }),
          (r.applyUpdate = function (t) {
            var e = this,
              n = function () {
                e.$16(function () {
                  (e.$5.revertUpdate(t), e.$5.run());
                });
              };
            return (
              this.$16(function () {
                (e.$5.applyUpdate(t), e.$5.run());
              }),
              { dispose: n }
            );
          }),
          (r.revertUpdate = function (t) {
            var e = this;
            this.$16(function () {
              (e.$5.revertUpdate(t), e.$5.run());
            });
          }),
          (r.replaceUpdate = function (t, n) {
            var e = this;
            this.$16(function () {
              (e.$5.revertUpdate(t), e.$5.applyUpdate(n), e.$5.run());
            });
          }),
          (r.applyMutation = function (t) {
            var e = this.$17({
              createSource: function () {
                return n("relay-runtime/network/RelayObservable").create(
                  function (e) {},
                );
              },
              isClientPayload: !1,
              operation: t.operation,
              optimisticConfig: t,
              updater: null,
            }).subscribe({});
            return {
              dispose: function () {
                return e.unsubscribe();
              },
            };
          }),
          (r.check = function (t) {
            return this.$8.length === 0 && !c(t)
              ? this.$7.check(t)
              : this.$18(t, this.$8);
          }),
          (r.commitPayload = function (t, r) {
            this.$17({
              createSource: function () {
                return n("relay-runtime/network/RelayObservable").from({
                  data: r,
                });
              },
              isClientPayload: !0,
              operation: t,
              optimisticConfig: null,
              updater: null,
            }).subscribe({});
          }),
          (r.commitUpdate = function (t) {
            var e = this;
            this.$16(function () {
              (e.$5.commitUpdate(t), e.$5.run());
            });
          }),
          (r.lookup = function (t) {
            return this.$7.lookup(t);
          }),
          (r.subscribe = function (t, n) {
            return this.$7.subscribe(t, n);
          }),
          (r.retain = function (t) {
            return this.$7.retain(t);
          }),
          (r.experimental_batchUpdates = function (t) {
            var e = this.$7.experimental_batchUpdates;
            (typeof e == "function" || l(0, 147783), e.call(this.$7, t));
          }),
          (r.isServer = function () {
            return this.$14;
          }),
          (r.$18 = function (r, o) {
            var t = this,
              a = n("relay-runtime/store/RelayRecordSource").create(),
              i = this.$7.getSource(),
              l = this.$7.check(r, {
                defaultActorIdentifier: e,
                getSourceForActor: function (t) {
                  return (s(t), i);
                },
                getTargetForActor: function (t) {
                  return (s(t), a);
                },
                handlers: o,
              });
            return (
              a.size() > 0 &&
                this.$16(function () {
                  (t.$5.commitSource(a), t.$5.run());
                }),
              l
            );
          }),
          (r.$16 = function (t) {
            var e = this.$6;
            e != null ? e.schedule(t) : t();
          }),
          (r.execute = function (t) {
            var e = this,
              n = t.operation;
            return this.$17({
              createSource: function () {
                return e
                  .getNetwork()
                  .execute(
                    n.request.node.params,
                    n.request.variables,
                    n.request.cacheConfig || {},
                    null,
                    void 0,
                    void 0,
                    void 0,
                    function () {
                      return e.check(n);
                    },
                  );
              },
              isClientPayload: !1,
              operation: n,
              optimisticConfig: null,
              updater: null,
            });
          }),
          (r.executeSubscription = function (t) {
            var e = this,
              n = t.operation,
              r = t.updater;
            return this.$17({
              createSource: function () {
                return e
                  .getNetwork()
                  .execute(
                    n.request.node.params,
                    n.request.variables,
                    n.request.cacheConfig || {},
                    null,
                  );
              },
              isClientPayload: !1,
              operation: n,
              optimisticConfig: null,
              updater: r,
            });
          }),
          (r.executeMutation = function (t) {
            var e = this,
              n = t.operation,
              r = t.optimisticResponse,
              o = t.optimisticUpdater,
              a = t.updater,
              i = t.uploadables,
              l;
            return (
              (r || o) && (l = { operation: n, response: r, updater: o }),
              this.$17({
                createSource: function () {
                  return e.getNetwork().execute(
                    n.request.node.params,
                    n.request.variables,
                    babelHelpers.extends({}, n.request.cacheConfig, {
                      force: !0,
                    }),
                    i,
                  );
                },
                isClientPayload: !1,
                operation: n,
                optimisticConfig: l,
                updater: a,
              })
            );
          }),
          (r.executeWithSource = function (t) {
            var e = t.operation,
              n = t.source;
            return this.$17({
              createSource: function () {
                return n;
              },
              isClientPayload: !1,
              operation: e,
              optimisticConfig: null,
              updater: null,
            });
          }),
          (r.toJSON = function () {
            var e;
            return (
              "RelayModernEnvironment(" +
              ((e = this.configName) != null ? e : "") +
              ")"
            );
          }),
          (r.$17 = function (r) {
            var t = this,
              o = r.createSource,
              a = r.isClientPayload,
              i = r.operation,
              l = r.optimisticConfig,
              u = r.updater,
              c = this.$5,
              d = this.$7;
            return n("relay-runtime/network/RelayObservable").create(
              function (r) {
                var m = n("relay-runtime/store/OperationExecutor").execute({
                  actorIdentifier: e,
                  getDataID: t.$10,
                  getPublishQueue: function (t) {
                    return (s(t), c);
                  },
                  getStore: function (t) {
                    return (s(t), d);
                  },
                  isClientPayload: a,
                  log: t.__log,
                  normalizeResponse: t.$15,
                  operation: i,
                  operationExecutions: t.$13,
                  operationLoader: t.$2,
                  operationTracker: t.$9,
                  optimisticConfig: l,
                  scheduler: t.$6,
                  shouldProcessClientComponents: t.$3,
                  sink: r,
                  source: o(),
                  treatMissingFieldsAsNull: t.$11,
                  deferDeduplicatedFields: t.$12,
                  updater: u,
                });
                return function () {
                  return m.cancel();
                };
              },
            );
          }),
          t
        );
      })();
    function c(e) {
      return (
        e.root.node.kind === "Operation" &&
        e.root.node.clientAbstractTypes != null
      );
    }
    u.prototype["@@RelayModernEnvironment"] = !0;
    function d() {}
    a.exports = u;
  },
  null,
);
