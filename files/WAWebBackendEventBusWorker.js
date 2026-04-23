__d(
  "WAWebBackendEventBusWorker",
  ["WAWebBackendApi", "WAWebSocketConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$2 = new Map()),
          (this.$3 = new Map()),
          (this.isMainStreamReadyMd = !1),
          (this.isOfflineDeliveryEnd = !1),
          (this.socketState = o(
            "WAWebSocketConstants",
          ).SOCKET_STATE.UNLAUNCHED),
          (this.$1 = e));
      }
      var t = e.prototype;
      return (
        (t.setState = function (t) {
          ((this.isMainStreamReadyMd = t.isMainStreamReadyMd),
            (this.isOfflineDeliveryEnd = t.isOfflineDeliveryEnd),
            (this.socketState = t.socketState));
        }),
        (t.$4 = function (t, n) {
          var e,
            r = (e = this.$2.get(t)) != null ? e : [];
          return (r.push(n), this.$2.set(t, r), this);
        }),
        (t.$5 = function (t, n) {
          var e,
            r = (e = this.$3.get(t)) != null ? e : [];
          return (r.push(n), this.$3.set(t, r), this);
        }),
        (t.$6 = function (t) {
          for (
            var e,
              n,
              r = (e = this.$2.get(t)) != null ? e : [],
              o = arguments.length,
              a = new Array(o > 1 ? o - 1 : 0),
              i = 1;
            i < o;
            i++
          )
            a[i - 1] = arguments[i];
          for (var l of r) l.apply(void 0, a);
          var s = (n = this.$3.get(t)) != null ? n : [];
          this.$3.set(t, []);
          for (var u of s) u.apply(void 0, a);
        }),
        (t.getBackendEventBusSyncHandler = function () {
          var e = this;
          return function (t) {
            for (
              var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
              o < n;
              o++
            )
              r[o - 1] = arguments[o];
            switch (t) {
              case "onMainStreamModeReady": {
                e.isMainStreamReadyMd = !0;
                break;
              }
              case "onOfflineDeliveryEnd": {
                e.isOfflineDeliveryEnd = !0;
                break;
              }
              case "onOfflineDeliveryStateReset": {
                e.isOfflineDeliveryEnd = !1;
                break;
              }
              case "onSetSocketState": {
                var a = r[0].state;
                e.socketState = a;
                break;
              }
            }
            e.$6.apply(e, [t].concat(r));
          };
        }),
        (t.onAppStateSyncCompleted = function (t) {
          return this.$4("onAppStateSyncCompleted", t);
        }),
        (t.onceAppStateSyncCompleted = function (t) {
          return this.$5("onAppStateSyncCompleted", t);
        }),
        (t.onLogout = function (t) {
          return this.$4("onLogout", t);
        }),
        (t.onRefreshQR = function (t) {
          return this.$4("onRefreshQR", t);
        }),
        (t.onInitialChatHistorySynced = function (t) {
          return this.$4("onInitialChatHistorySynced", t);
        }),
        (t.onRecentChatHistorySynced = function (t) {
          return this.$4("onRecentChatHistorySynced", t);
        }),
        (t.onFullChatHistorySynced = function (t) {
          return this.$4("onFullChatHistorySynced", t);
        }),
        (t.onCriticalSyncDone = function (t) {
          return this.$4("onCriticalSyncDone", t);
        }),
        (t.onStorageInitializationError = function (t) {
          return this.$4("onStorageInitializationError", t);
        }),
        (t.onSocketStreamDisconnected = function (t) {
          return this.$4("onSocketStreamDisconnected", t);
        }),
        (t.onOpenSocketStream = function (t) {
          return this.$4("onOpenSocketStream", t);
        }),
        (t.onReconnectSocket = function (t) {
          return this.$4("onReconnectSocket", t);
        }),
        (t.onSetSocketState = function (t) {
          return this.$4("onSetSocketState", t);
        }),
        (t.onMainStreamModeReady = function (t) {
          return this.$4("onMainStreamModeReady", t);
        }),
        (t.onOfflineDeliveryEnd = function (t) {
          return this.$4("onOfflineDeliveryEnd", t);
        }),
        (t.onceOfflineDeliveryEnd = function (t) {
          return this.$5("onOfflineDeliveryEnd", t);
        }),
        (t.onOfflineDeliveryStateReset = function (t) {
          return this.$4("onOfflineDeliveryStateReset", t);
        }),
        (t.onAbPropsUpdate = function (t) {
          return this.$4("onAbPropsUpdate", t);
        }),
        (t.onAbPropsLoaded = function (t) {
          return this.$4("onAbPropsLoaded", t);
        }),
        (t.triggerAppStateSyncCompleted = function (t) {
          this.$1.fireAndForget(
            "backendEventBus",
            "triggerAppStateSyncCompleted",
            { collectionDetails: t },
          );
        }),
        (t.triggerLogout = function () {
          this.$1.fireAndForget("backendEventBus", "triggerLogout", void 0);
        }),
        (t.triggerRefreshQR = function () {
          this.$1.fireAndForget("backendEventBus", "triggerRefreshQR", void 0);
        }),
        (t.triggerInitialChatHistorySynced = function () {
          this.$1.fireAndForget(
            "backendEventBus",
            "triggerInitialChatHistorySynced",
            void 0,
          );
        }),
        (t.triggerRecentChatHistorySynced = function () {
          this.$1.fireAndForget(
            "backendEventBus",
            "triggerRecentChatHistorySynced",
            void 0,
          );
        }),
        (t.triggerFullChatHistorySynced = function () {
          this.$1.fireAndForget(
            "backendEventBus",
            "triggerFullChatHistorySynced",
            void 0,
          );
        }),
        (t.triggerCriticalSyncDone = function () {
          this.$1.fireAndForget(
            "backendEventBus",
            "triggerCriticalSyncDone",
            void 0,
          );
        }),
        (t.triggerStorageInitializationError = function () {
          this.$1.fireAndForget(
            "backendEventBus",
            "triggerStorageInitializationError",
            void 0,
          );
        }),
        (t.triggerSocketStreamDisconnected = function () {
          this.$1.fireAndForget(
            "backendEventBus",
            "triggerSocketStreamDisconnected",
            void 0,
          );
        }),
        (t.triggerOpenSocketStream = function () {
          this.$1.fireAndForget(
            "backendEventBus",
            "triggerOpenSocketStream",
            void 0,
          );
        }),
        (t.triggerReconnectSocket = function () {
          this.$1.fireAndForget(
            "backendEventBus",
            "triggerReconnectSocket",
            void 0,
          );
        }),
        (t.triggerSetSocketState = function (t) {
          this.$1.fireAndForget("backendEventBus", "triggerSetSocketState", {
            state: t,
          });
        }),
        (t.triggerMainStreamModeReady = function () {
          this.$1.fireAndForget(
            "backendEventBus",
            "triggerMainStreamModeReady",
            void 0,
          );
        }),
        (t.triggerOfflineProcessReady = function () {
          this.$1.fireAndForget(
            "backendEventBus",
            "triggerOfflineProcessReady",
            void 0,
          );
        }),
        (t.triggerOfflineDeliveryEnd = function () {
          this.$1.fireAndForget(
            "backendEventBus",
            "triggerOfflineDeliveryEnd",
            void 0,
          );
        }),
        (t.triggerOfflineDeliveryStateReset = function () {
          this.$1.fireAndForget(
            "backendEventBus",
            "triggerOfflineDeliveryStateReset",
            void 0,
          );
        }),
        (t.triggerAbPropsUpdate = function (t) {
          this.$1.fireAndForget("backendEventBus", "triggerAbPropsUpdate", t);
        }),
        (t.triggerAbPropsLoaded = function () {
          this.$1.fireAndForget(
            "backendEventBus",
            "triggerAbPropsLoaded",
            void 0,
          );
        }),
        (t.triggerStartingLogout = function () {
          o("WAWebBackendApi").frontendFireAndForget(
            "triggerStartingLogoutFromBridge",
            {},
          );
        }),
        (t.triggerHistorySyncChunkProcessed = function (t) {
          o("WAWebBackendApi").frontendFireAndForget(
            "triggerHistorySyncChunkProcessedFromBridge",
            { chatsUpdated: Array.from(t) },
          );
        }),
        (t.triggerUpdateStatusPrivacySettings = function (t) {
          o("WAWebBackendApi").frontendFireAndForget(
            "triggerUpdateStatusPrivacySettingsFromBridge",
            t,
          );
        }),
        (t.triggerUpdateCrosspostAutoShareSettings = function (t) {
          o("WAWebBackendApi").frontendFireAndForget(
            "triggerUpdateCrosspostAutoShareSettingsFromBridge",
            t,
          );
        }),
        (t.triggerTemporaryBan = function (t) {
          o("WAWebBackendApi").frontendFireAndForget(
            "triggerTemporaryBanFromBridge",
            t,
          );
        }),
        (t.triggerAccountSyncForPrivacy = function (t) {
          o("WAWebBackendApi").frontendFireAndForget(
            "triggerAccountSyncForPrivacyFromBridge",
            t,
          );
        }),
        (t.triggerUnexpectedLogoutModal = function (t) {
          o("WAWebBackendApi").frontendFireAndForget(
            "triggerUnexpectedLogoutModalFromBridge",
            { reason: t },
          );
        }),
        (t.triggerInitialLoadReady = function () {
          o("WAWebBackendApi").frontendFireAndForget(
            "triggerInitialLoadReadyFromBridge",
            {},
          );
        }),
        (t.triggerServiceUnavailable = function () {
          o("WAWebBackendApi").frontendFireAndForget(
            "triggerServiceUnavailableFromBridge",
            {},
          );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
