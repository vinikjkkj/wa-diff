__d(
  "relay-runtime/multi-actor-environment/ActorSpecificEnvironment",
  [
    "relay-runtime/network/wrapNetworkWithLogObserver",
    "relay-runtime/store/RelayOperationTracker",
    "relay-runtime/store/RelayPublishQueue",
    "relay-runtime/store/StoreInspector",
    "relay-runtime/store/defaultGetDataID",
    "relay-runtime/util/registerEnvironmentWithDevTools",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = this;
        ((this.configName = e.configName),
          (this.actorIdentifier = e.actorIdentifier),
          (this.multiActorEnvironment = e.multiActorEnvironment),
          (this.__log = e.logFn),
          (this.relayFieldLogger = e.relayFieldLogger),
          (this.$3 = new (n("relay-runtime/store/RelayOperationTracker"))()),
          (this.$5 = e.store),
          (this.$2 = n("relay-runtime/network/wrapNetworkWithLogObserver")(
            this,
            e.network,
          )),
          (this.$4 = new (n("relay-runtime/store/RelayPublishQueue"))(
            e.store,
            e.handlerProvider,
            n("relay-runtime/store/defaultGetDataID"),
            e.missingFieldHandlers,
            this.__log,
          )),
          (this.$1 = e.defaultRenderPolicy),
          (this.options = { actorID: this.actorIdentifier }),
          (this["@@RelayModernEnvironment"] = !0),
          n("relay-runtime/util/registerEnvironmentWithDevTools")(this));
      }
      var t = e.prototype;
      return (
        (t.getPublishQueue = function () {
          return this.$4;
        }),
        (t.UNSTABLE_getDefaultRenderPolicy = function () {
          return this.$1;
        }),
        (t.applyMutation = function (t) {
          return this.multiActorEnvironment.applyMutation(this, t);
        }),
        (t.applyUpdate = function (t) {
          return this.multiActorEnvironment.applyUpdate(this, t);
        }),
        (t.revertUpdate = function (t) {
          return this.multiActorEnvironment.revertUpdate(this, t);
        }),
        (t.replaceUpdate = function (t, n) {
          return this.multiActorEnvironment.replaceUpdate(this, t, n);
        }),
        (t.check = function (t) {
          return this.multiActorEnvironment.check(this, t);
        }),
        (t.subscribe = function (t, n) {
          return this.multiActorEnvironment.subscribe(this, t, n);
        }),
        (t.retain = function (t) {
          return this.multiActorEnvironment.retain(this, t);
        }),
        (t.commitUpdate = function (t) {
          return this.multiActorEnvironment.commitUpdate(this, t);
        }),
        (t.commitPayload = function (t, n) {
          return this.multiActorEnvironment.commitPayload(this, t, n);
        }),
        (t.getNetwork = function () {
          return this.$2;
        }),
        (t.getStore = function () {
          return this.$5;
        }),
        (t.getOperationTracker = function () {
          return this.$3;
        }),
        (t.getScheduler = function () {
          return this.multiActorEnvironment.getScheduler();
        }),
        (t.lookup = function (t) {
          return this.multiActorEnvironment.lookup(this, t);
        }),
        (t.execute = function (t) {
          return this.multiActorEnvironment.execute(this, t);
        }),
        (t.executeSubscription = function (t) {
          return this.multiActorEnvironment.executeSubscription(this, t);
        }),
        (t.executeMutation = function (t) {
          return this.multiActorEnvironment.executeMutation(this, t);
        }),
        (t.executeWithSource = function (t) {
          return this.multiActorEnvironment.executeWithSource(this, t);
        }),
        (t.isRequestActive = function (t) {
          return this.multiActorEnvironment.isRequestActive(this, t);
        }),
        (t.isServer = function () {
          return this.multiActorEnvironment.isServer();
        }),
        e
      );
    })();
    a.exports = e;
  },
  null,
);
