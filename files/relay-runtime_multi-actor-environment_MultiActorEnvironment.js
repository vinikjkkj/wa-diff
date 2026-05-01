__d(
  "relay-runtime/multi-actor-environment/MultiActorEnvironment",
  [
    "relay-runtime/handlers/RelayDefaultHandlerProvider",
    "relay-runtime/multi-actor-environment/ActorSpecificEnvironment",
    "relay-runtime/network/RelayObservable",
    "relay-runtime/store/OperationExecutor",
    "relay-runtime/store/RelayModernStore",
    "relay-runtime/store/RelayRecordSource",
    "relay-runtime/store/defaultGetDataID",
    "relay-runtime/store/defaultRelayFieldLogger",
    "relay-runtime/store/normalizeResponse",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t, r, o, a, i, s, u, c, d;
        ((this.$1 = new Map()),
          (this.$13 = e.operationLoader),
          (this.$3 = e.createNetworkForActor),
          (this.$15 = e.scheduler),
          (this.$6 =
            (t = e.getDataID) != null
              ? t
              : n("relay-runtime/store/defaultGetDataID")),
          (this.$7 = e.handlerProvider
            ? e.handlerProvider
            : n("relay-runtime/handlers/RelayDefaultHandlerProvider")),
          (this.$9 = (r = e.logFn) != null ? r : l),
          (this.$12 = new Map()),
          (this.$14 =
            (o = e.relayFieldLogger) != null
              ? o
              : n("relay-runtime/store/defaultRelayFieldLogger")),
          (this.$16 = e.shouldProcessClientComponents),
          (this.$17 = (a = e.treatMissingFieldsAsNull) != null ? a : !1),
          (this.$18 = (i = e.deferDeduplicatedFields) != null ? i : !1),
          (this.$8 = (s = e.isServer) != null ? s : !1),
          (this.$10 = (u = e.missingFieldHandlers) != null ? u : []),
          (this.$4 = e.createStoreForActor),
          (this.$2 = e.createConfigNameForActor),
          (this.$5 = (c = e.defaultRenderPolicy) != null ? c : "partial"),
          (this.$11 =
            (d = e.normalizeResponse) != null
              ? d
              : n("relay-runtime/store/normalizeResponse")));
      }
      var t = e.prototype;
      return (
        (t.forActor = function (t) {
          var e = this.$1.get(t);
          if (e == null) {
            var r = new (n(
              "relay-runtime/multi-actor-environment/ActorSpecificEnvironment",
            ))({
              configName: this.$2 ? this.$2(t) : null,
              actorIdentifier: t,
              multiActorEnvironment: this,
              logFn: this.$9,
              relayFieldLogger: this.$14,
              store:
                this.$4 != null
                  ? this.$4(t)
                  : new (n("relay-runtime/store/RelayModernStore"))(
                      n("relay-runtime/store/RelayRecordSource").create(),
                    ),
              network: this.$3(t),
              handlerProvider: this.$7,
              defaultRenderPolicy: this.$5,
              missingFieldHandlers: this.$10,
            });
            return (this.$1.set(t, r), r);
          } else return e;
        }),
        (t.check = function (t, r) {
          var e = this;
          return this.$10 == null || this.$10.length === 0
            ? t.getStore().check(r, {
                handlers: [],
                defaultActorIdentifier: t.actorIdentifier,
                getSourceForActor: function (n) {
                  return e.forActor(n).getStore().getSource();
                },
                getTargetForActor: function () {
                  return n("relay-runtime/store/RelayRecordSource").create();
                },
              })
            : this.$19(t, r, this.$10);
        }),
        (t.$19 = function (t, r, o) {
          var e = this,
            a = new Map([
              [
                t.actorIdentifier,
                n("relay-runtime/store/RelayRecordSource").create(),
              ],
            ]),
            i = t.getStore().check(r, {
              handlers: o,
              defaultActorIdentifier: t.actorIdentifier,
              getSourceForActor: function (n) {
                return e.forActor(n).getStore().getSource();
              },
              getTargetForActor: function (t) {
                var e = a.get(t);
                return (
                  e == null &&
                    ((e = n("relay-runtime/store/RelayRecordSource").create()),
                    a.set(t, e)),
                  e
                );
              },
            }),
            l = function () {
              var t = s[0],
                n = s[1];
              n.size() > 0 &&
                e.$20(function () {
                  var r = e.forActor(t).getPublishQueue();
                  (r.commitSource(n), r.run());
                });
            };
          for (var s of a) l();
          return i;
        }),
        (t.subscribe = function (t, n, r) {
          return t.getStore().subscribe(n, r);
        }),
        (t.retain = function (t, n) {
          return t.getStore().retain(n);
        }),
        (t.applyUpdate = function (t, n) {
          var e = this,
            r = t.getPublishQueue(),
            o = function () {
              e.$20(function () {
                (r.revertUpdate(n), r.run());
              });
            };
          return (
            this.$20(function () {
              (r.applyUpdate(n), r.run());
            }),
            { dispose: o }
          );
        }),
        (t.revertUpdate = function (t, n) {
          var e = t.getPublishQueue();
          this.$20(function () {
            (e.revertUpdate(n), e.run());
          });
        }),
        (t.replaceUpdate = function (t, n, r) {
          var e = t.getPublishQueue();
          this.$20(function () {
            (e.revertUpdate(n), e.applyUpdate(r), e.run());
          });
        }),
        (t.applyMutation = function (t, r) {
          var e = this.$21(t, {
            createSource: function () {
              return n("relay-runtime/network/RelayObservable").create(
                function (e) {},
              );
            },
            isClientPayload: !1,
            operation: r.operation,
            optimisticConfig: r,
            updater: null,
          }).subscribe({});
          return {
            dispose: function () {
              return e.unsubscribe();
            },
          };
        }),
        (t.commitUpdate = function (t, n) {
          var e = t.getPublishQueue();
          this.$20(function () {
            (e.commitUpdate(n), e.run());
          });
        }),
        (t.commitPayload = function (t, r, o) {
          this.$21(t, {
            createSource: function () {
              return n("relay-runtime/network/RelayObservable").from({
                data: o,
              });
            },
            isClientPayload: !0,
            operation: r,
            optimisticConfig: null,
            updater: null,
          }).subscribe({});
        }),
        (t.lookup = function (t, n) {
          return t.getStore().lookup(n);
        }),
        (t.execute = function (t, n) {
          var e = n.operation;
          return this.$21(t, {
            createSource: function () {
              return t
                .getNetwork()
                .execute(
                  e.request.node.params,
                  e.request.variables,
                  e.request.cacheConfig || {},
                  null,
                );
            },
            isClientPayload: !1,
            operation: e,
            optimisticConfig: null,
            updater: null,
          });
        }),
        (t.executeSubscription = function (t, n) {
          var e = n.operation,
            r = n.updater;
          return this.$21(t, {
            createSource: function () {
              return t
                .getNetwork()
                .execute(
                  e.request.node.params,
                  e.request.variables,
                  e.request.cacheConfig || {},
                  null,
                );
            },
            isClientPayload: !1,
            operation: e,
            optimisticConfig: null,
            updater: r,
          });
        }),
        (t.executeMutation = function (t, n) {
          var e = n.operation,
            r = n.optimisticResponse,
            o = n.optimisticUpdater,
            a = n.updater,
            i = n.uploadables,
            l;
          return (
            (r || o) && (l = { operation: e, response: r, updater: o }),
            this.$21(t, {
              createSource: function () {
                return t.getNetwork().execute(
                  e.request.node.params,
                  e.request.variables,
                  babelHelpers.extends({}, e.request.cacheConfig, {
                    force: !0,
                  }),
                  i,
                );
              },
              isClientPayload: !1,
              operation: e,
              optimisticConfig: l,
              updater: a,
            })
          );
        }),
        (t.executeWithSource = function (t, n) {
          return this.$21(t, {
            createSource: function () {
              return n.source;
            },
            isClientPayload: !1,
            operation: n.operation,
            optimisticConfig: null,
            updater: null,
          });
        }),
        (t.isRequestActive = function (t, n) {
          var e = this.$12.get(n);
          return e === "active";
        }),
        (t.isServer = function () {
          return this.$8;
        }),
        (t.$21 = function (t, r) {
          var e = this,
            o = r.createSource,
            a = r.isClientPayload,
            i = r.operation,
            l = r.optimisticConfig,
            s = r.updater;
          return n("relay-runtime/network/RelayObservable").create(
            function (r) {
              var u = n("relay-runtime/store/OperationExecutor").execute({
                actorIdentifier: t.actorIdentifier,
                getDataID: e.$6,
                isClientPayload: a,
                operation: i,
                operationExecutions: e.$12,
                operationLoader: e.$13,
                operationTracker: t.getOperationTracker(),
                optimisticConfig: l,
                getPublishQueue: function (n) {
                  return e.forActor(n).getPublishQueue();
                },
                scheduler: e.$15,
                shouldProcessClientComponents: e.$16,
                sink: r,
                source: o(),
                getStore: function (n) {
                  return e.forActor(n).getStore();
                },
                treatMissingFieldsAsNull: e.$17,
                deferDeduplicatedFields: e.$18,
                updater: s,
                log: e.$9,
                normalizeResponse: e.$11,
              });
              return function () {
                return u.cancel();
              };
            },
          );
        }),
        (t.$20 = function (t) {
          var e = this.$15;
          e != null ? e.schedule(t) : t();
        }),
        (t.commitMultiActorUpdate = function (t) {
          var e = function () {
            var e = n[0],
              r = n[1];
            r.commitUpdate(function (n) {
              t(e, r, n);
            });
          };
          for (var n of this.$1) e();
        }),
        (t.getScheduler = function () {
          return this.$15;
        }),
        e
      );
    })();
    function l() {}
    a.exports = e;
  },
  null,
);
