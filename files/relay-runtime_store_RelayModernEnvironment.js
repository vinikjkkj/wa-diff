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
    "relay-runtime/store/RelayStoreUtils",
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
      u = n("relay-runtime/store/RelayStoreUtils").ROOT_TYPE,
      c = (function () {
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
            d,
            p = this,
            _;
          ((this.configName = e.configName),
            (this.$10 = e.treatMissingFieldsAsNull === !0),
            (this.$11 = e.deferDeduplicatedFields === !0));
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
                    },
                  );
          ((this.__log = (r = e.log) != null ? r : m),
            (this.relayFieldLogger =
              (o = e.relayFieldLogger) != null
                ? o
                : n("relay-runtime/store/defaultRelayFieldLogger")),
            (this.$1 =
              (a = e.UNSTABLE_defaultRenderPolicy) != null ? a : "partial"),
            (this.$2 = f),
            (this.$12 = new Map()),
            (this.$3 = n("relay-runtime/network/wrapNetworkWithLogObserver")(
              this,
              e.network,
            )),
            (this.$9 =
              (i = e.getDataID) != null
                ? i
                : n("relay-runtime/store/defaultGetDataID")),
            (this.$7 = (l = e.missingFieldHandlers) != null ? l : []),
            (this.$4 = new (n("relay-runtime/store/RelayPublishQueue"))(
              g,
              (s = e.handlerProvider) != null
                ? s
                : n("relay-runtime/handlers/RelayDefaultHandlerProvider"),
              this.$9,
              this.$7,
              this.__log,
            )),
            (this.$5 = (u = e.scheduler) != null ? u : null),
            (this.$6 = g),
            (this.options = e.options),
            (this.$13 = (c = e.isServer) != null ? c : !1),
            (this.$14 =
              (d = e.normalizeResponse) != null
                ? d
                : n("relay-runtime/store/normalizeResponse")),
            (this.__setNet = function (e) {
              return (p.$3 = n(
                "relay-runtime/network/wrapNetworkWithLogObserver",
              )(p, e));
            }),
            (this.$8 =
              (_ = e.operationTracker) != null
                ? _
                : new (n("relay-runtime/store/RelayOperationTracker"))()),
            n("relay-runtime/util/registerEnvironmentWithDevTools")(this));
        }
        var r = t.prototype;
        return (
          (r.getStore = function () {
            return this.$6;
          }),
          (r.getNetwork = function () {
            return this.$3;
          }),
          (r.getOperationTracker = function () {
            return this.$8;
          }),
          (r.getScheduler = function () {
            return this.$5;
          }),
          (r.isRequestActive = function (t) {
            var e = this.$12.get(t);
            return e === "active";
          }),
          (r.UNSTABLE_getDefaultRenderPolicy = function () {
            return this.$1;
          }),
          (r.applyUpdate = function (t) {
            var e = this,
              n = function () {
                e.$15(function () {
                  (e.$4.revertUpdate(t), e.$4.run());
                });
              };
            return (
              this.$15(function () {
                (e.$4.applyUpdate(t), e.$4.run());
              }),
              { dispose: n }
            );
          }),
          (r.revertUpdate = function (t) {
            var e = this;
            this.$15(function () {
              (e.$4.revertUpdate(t), e.$4.run());
            });
          }),
          (r.replaceUpdate = function (t, n) {
            var e = this;
            this.$15(function () {
              (e.$4.revertUpdate(t), e.$4.applyUpdate(n), e.$4.run());
            });
          }),
          (r.applyMutation = function (t) {
            var e = this.$16({
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
            return this.$7.length === 0 && !d(t)
              ? this.$6.check(t)
              : this.$17(t, this.$7);
          }),
          (r.commitPayload = function (t, r) {
            this.$16({
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
          (r.publishWithDeferredNotify = function (t, n) {
            var e = this.$14(
              n,
              t.root,
              u,
              {
                deferDeduplicatedFields: !1,
                getDataID: this.$9,
                log: this.__log,
                path: [],
                treatMissingFieldsAsNull: this.$10,
              },
              !1,
            );
            return this.$4.publishWithDeferredNotify(t, e);
          }),
          (r.commitUpdate = function (t) {
            var e = this;
            this.$15(function () {
              (e.$4.commitUpdate(t), e.$4.run());
            });
          }),
          (r.lookup = function (t) {
            return this.$6.lookup(t);
          }),
          (r.subscribe = function (t, n) {
            return this.$6.subscribe(t, n);
          }),
          (r.retain = function (t) {
            return this.$6.retain(t);
          }),
          (r.experimental_batchUpdates = function (t) {
            var e = this.$6.experimental_batchUpdates;
            (typeof e == "function" || l(0, 147783), e.call(this.$6, t));
          }),
          (r.isServer = function () {
            return this.$13;
          }),
          (r.$17 = function (r, o) {
            var t = this,
              a = n("relay-runtime/store/RelayRecordSource").create(),
              i = this.$6.getSource(),
              l = this.$6.check(r, {
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
                this.$15(function () {
                  (t.$4.commitSource(a), t.$4.run());
                }),
              l
            );
          }),
          (r.$15 = function (t) {
            var e = this.$5;
            e != null ? e.schedule(t) : t();
          }),
          (r.execute = function (t) {
            var e = this,
              n = t.operation;
            return this.$16({
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
                    {
                      checkOperation: function (n) {
                        return e.check(n);
                      },
                      parentOperation: n,
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
            return this.$16({
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
              this.$16({
                createSource: function () {
                  return e
                    .getNetwork()
                    .execute(
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
            return this.$16({
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
          (r.$16 = function (r) {
            var t = this,
              o = r.createSource,
              a = r.isClientPayload,
              i = r.operation,
              l = r.optimisticConfig,
              u = r.updater,
              c = this.$4,
              d = this.$6;
            return n("relay-runtime/network/RelayObservable").create(
              function (r) {
                var m = n("relay-runtime/store/OperationExecutor").execute({
                  actorIdentifier: e,
                  getDataID: t.$9,
                  getPublishQueue: function (t) {
                    return (s(t), c);
                  },
                  getStore: function (t) {
                    return (s(t), d);
                  },
                  isClientPayload: a,
                  log: t.__log,
                  normalizeResponse: t.$14,
                  operation: i,
                  operationExecutions: t.$12,
                  operationLoader: t.$2,
                  operationTracker: t.$8,
                  optimisticConfig: l,
                  scheduler: t.$5,
                  sink: r,
                  source: o(),
                  treatMissingFieldsAsNull: t.$10,
                  deferDeduplicatedFields: t.$11,
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
    function d(e) {
      return (
        e.root.node.kind === "Operation" &&
        e.root.node.clientAbstractTypes != null
      );
    }
    c.prototype["@@RelayModernEnvironment"] = !0;
    function m() {}
    a.exports = c;
  },
  null,
);
