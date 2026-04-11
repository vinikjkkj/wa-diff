__d(
  "WAWebBackendEventBus",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebBackendEventBusTypes.flow",
    "WAWebBackendWorkerClient",
    "WAWebEventEmitter",
    "WAWebSocketConstants",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
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
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w = (function (t) {
        function n() {
          var e;
          return (
            (e = t.call(this) || this),
            (e.isMainStreamReadyMd = !1),
            (e.isOfflineDeliveryEnd = !1),
            (e.socketState = o("WAWebSocketConstants").SOCKET_STATE.UNLAUNCHED),
            o("WAWebBackendWorkerClient")
              .getBackendWorkerBridge()
              .then(function (t) {
                var n;
                (e.on(
                  (n = o("WAWebBackendEventBusTypes.flow")).BackendEvent
                    .APP_STATE_SYNC_COMPLETED,
                  function (e) {
                    t.fireAndForget(
                      "backendEventBusSync",
                      "onAppStateSyncCompleted",
                      { collectionDetails: e },
                    );
                  },
                ),
                  e.on(n.BackendEvent.LOGOUT, function () {
                    t.fireAndForget("backendEventBusSync", "onLogout");
                  }),
                  e.on(n.BackendEvent.REFRESH_QR, function () {
                    t.fireAndForget("backendEventBusSync", "onRefreshQR");
                  }),
                  e.on(n.BackendEvent.ON_INITIAL_CHAT_SYNCED, function () {
                    t.fireAndForget(
                      "backendEventBusSync",
                      "onInitialChatHistorySynced",
                    );
                  }),
                  e.on(
                    n.BackendEvent.ON_RECENT_CHAT_HISTORY_SYNCED,
                    function () {
                      t.fireAndForget(
                        "backendEventBusSync",
                        "onRecentChatHistorySynced",
                      );
                    },
                  ),
                  e.on(n.BackendEvent.ON_FULL_CHAT_HISTORY_SYNCED, function () {
                    t.fireAndForget(
                      "backendEventBusSync",
                      "onFullChatHistorySynced",
                    );
                  }),
                  e.on(n.BackendEvent.ON_CRITICAL_SYNC_DONE, function () {
                    t.fireAndForget(
                      "backendEventBusSync",
                      "onCriticalSyncDone",
                    );
                  }),
                  e.on(
                    n.BackendEvent.STORAGE_INITIALIZATION_ERROR,
                    function () {
                      t.fireAndForget(
                        "backendEventBusSync",
                        "onStorageInitializationError",
                      );
                    },
                  ),
                  e.on(n.BackendEvent.SOCKET_STREAM_DISCONNECTED, function () {
                    t.fireAndForget(
                      "backendEventBusSync",
                      "onSocketStreamDisconnected",
                    );
                  }),
                  e.on(n.BackendEvent.OPEN_SOCKET_STREAM, function () {
                    t.fireAndForget(
                      "backendEventBusSync",
                      "onOpenSocketStream",
                    );
                  }),
                  e.on(n.BackendEvent.RECONNECT_SOCKET, function () {
                    t.fireAndForget("backendEventBusSync", "onReconnectSocket");
                  }),
                  e.on(n.BackendEvent.SET_SOCKET_STATE, function (e) {
                    t.fireAndForget("backendEventBusSync", "onSetSocketState", {
                      state: e,
                    });
                  }),
                  e.on(n.BackendEvent.MAIN_STREAM_MODE_READY, function () {
                    t.fireAndForget(
                      "backendEventBusSync",
                      "onMainStreamModeReady",
                    );
                  }),
                  e.on(n.BackendEvent.OFFLINE_DELIVERY_END, function () {
                    t.fireAndForget(
                      "backendEventBusSync",
                      "onOfflineDeliveryEnd",
                    );
                  }),
                  e.on(
                    n.BackendEvent.OFFLINE_DELIVERY_STATE_RESET,
                    function () {
                      t.fireAndForget(
                        "backendEventBusSync",
                        "onOfflineDeliveryStateReset",
                      );
                    },
                  ),
                  e.on(n.BackendEvent.ON_AB_PROPS_UPDATE, function (e) {
                    t.fireAndForget(
                      "backendEventBusSync",
                      "onAbPropsUpdate",
                      e,
                    );
                  }),
                  e.on(n.BackendEvent.AB_PROPS_LOADED, function () {
                    t.fireAndForget("backendEventBusSync", "onAbPropsLoaded");
                  }),
                  t.fireAndForget("backendEventBusSync", "syncState", {
                    isMainStreamReadyMd: e.isMainStreamReadyMd,
                    isOfflineDeliveryEnd: e.isOfflineDeliveryEnd,
                    socketState: e.socketState,
                  }));
              }),
            e
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.onAppStateSyncCompleted = function (t) {
            return (
              this.on(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .APP_STATE_SYNC_COMPLETED,
                t,
              ),
              this
            );
          }),
          (a.onceAppStateSyncCompleted = function (t) {
            return (
              this.once(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .APP_STATE_SYNC_COMPLETED,
                t,
              ),
              this
            );
          }),
          (a.triggerAppStateSyncCompleted = function (n) {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "BackendEventBus: app_state_sync_completed",
                ])),
            ),
              this.trigger(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .APP_STATE_SYNC_COMPLETED,
                n,
              ),
              o("WAWebBackendApi").frontendFireAndForget(
                "triggerAppStateSyncCompletedFromBridge",
                {},
              ));
          }),
          (a.onLogout = function (t) {
            return (
              this.on(
                o("WAWebBackendEventBusTypes.flow").BackendEvent.LOGOUT,
                t,
              ),
              this
            );
          }),
          (a.triggerLogout = function () {
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "BackendEventBus: logout",
                ])),
            ),
              this.trigger(
                o("WAWebBackendEventBusTypes.flow").BackendEvent.LOGOUT,
              ),
              o("WAWebBackendApi").frontendFireAndForget(
                "triggerLogoutFromBridge",
                {},
              ));
          }),
          (a.triggerStartingLogout = function () {
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "BackendEventBus: starting_logout",
                ])),
            ),
              o("WAWebBackendApi").frontendFireAndForget(
                "triggerStartingLogoutFromBridge",
                {},
              ));
          }),
          (a.onRefreshQR = function (t) {
            return (
              this.on(
                o("WAWebBackendEventBusTypes.flow").BackendEvent.REFRESH_QR,
                t,
              ),
              this
            );
          }),
          (a.triggerRefreshQR = function () {
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "BackendEventBus: refresh_qr",
                ])),
            ),
              this.trigger(
                o("WAWebBackendEventBusTypes.flow").BackendEvent.REFRESH_QR,
              ));
          }),
          (a.onInitialChatHistorySynced = function (t) {
            return (
              this.on(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .ON_INITIAL_CHAT_SYNCED,
                t,
              ),
              this
            );
          }),
          (a.triggerInitialChatHistorySynced = function () {
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "BackendEventBus: on_initial_chat_synced",
                ])),
            ),
              this.trigger(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .ON_INITIAL_CHAT_SYNCED,
              ),
              o("WAWebBackendApi").frontendFireAndForget(
                "triggerInitialChatHistorySyncedFromBridge",
                {},
              ));
          }),
          (a.onRecentChatHistorySynced = function (t) {
            return (
              this.on(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .ON_RECENT_CHAT_HISTORY_SYNCED,
                t,
              ),
              this
            );
          }),
          (a.triggerRecentChatHistorySynced = function () {
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "BackendEventBus: on_recent_chat_history_synced",
                ])),
            ),
              this.trigger(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .ON_RECENT_CHAT_HISTORY_SYNCED,
              ));
          }),
          (a.onFullChatHistorySynced = function (t) {
            return (
              this.on(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .ON_FULL_CHAT_HISTORY_SYNCED,
                t,
              ),
              this
            );
          }),
          (a.triggerFullChatHistorySynced = function () {
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "BackendEventBus: on_full_chat_history_synced",
                ])),
            ),
              this.trigger(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .ON_FULL_CHAT_HISTORY_SYNCED,
              ));
          }),
          (a.onCriticalSyncDone = function (t) {
            return (
              this.on(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .ON_CRITICAL_SYNC_DONE,
                t,
              ),
              this
            );
          }),
          (a.triggerCriticalSyncDone = function () {
            (o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "BackendEventBus: on_critical_sync_done",
                ])),
            ),
              this.trigger(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .ON_CRITICAL_SYNC_DONE,
              ),
              o("WAWebBackendApi").frontendFireAndForget(
                "triggerCriticalSyncDoneFromBridge",
                {},
              ));
          }),
          (a.triggerHistorySyncChunkProcessed = function (t) {
            (o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "BackendEventBus: new_history_sync_chunk_processed",
                ])),
            ),
              o("WAWebBackendApi").frontendFireAndForget(
                "triggerHistorySyncChunkProcessedFromBridge",
                { chatsUpdated: Array.from(t) },
              ));
          }),
          (a.onStorageInitializationError = function (t) {
            return (
              this.on(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .STORAGE_INITIALIZATION_ERROR,
                t,
              ),
              this
            );
          }),
          (a.triggerStorageInitializationError = function (t) {
            (t != null
              ? o("WALogger")
                  .ERROR(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "BackendEventBus: storage_initialization_error",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("storage-initialization-error")
              : o("WALogger")
                  .ERROR(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "BackendEventBus: storage_initialization_error",
                      ])),
                  )
                  .sendLogs("storage-initialization-error-not-provided"),
              this.trigger(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .STORAGE_INITIALIZATION_ERROR,
              ));
          }),
          (a.onSocketStreamDisconnected = function (t) {
            return (
              this.on(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .SOCKET_STREAM_DISCONNECTED,
                t,
              ),
              this
            );
          }),
          (a.triggerSocketStreamDisconnected = function () {
            (o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "BackendEventBus: socket_stream_disconnected",
                ])),
            ),
              this.trigger(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .SOCKET_STREAM_DISCONNECTED,
              ),
              o("WAWebBackendApi").frontendFireAndForget(
                "triggerSocketStreamDisconnectedFromBridge",
                {},
              ));
          }),
          (a.onOpenSocketStream = function (t) {
            return (
              this.on(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .OPEN_SOCKET_STREAM,
                t,
              ),
              this
            );
          }),
          (a.triggerOpenSocketStream = function () {
            (o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "BackendEventBus: open_socket_stream",
                ])),
            ),
              this.trigger(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .OPEN_SOCKET_STREAM,
              ),
              o("WAWebBackendApi").frontendFireAndForget(
                "triggerOpenSocketStreamFromBridge",
                {},
              ));
          }),
          (a.onReconnectSocket = function (t) {
            return (
              this.on(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .RECONNECT_SOCKET,
                t,
              ),
              this
            );
          }),
          (a.triggerReconnectSocket = function () {
            (o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "BackendEventBus: reconnect_socket",
                ])),
            ),
              this.trigger(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .RECONNECT_SOCKET,
              ));
          }),
          (a.onSetSocketState = function (t) {
            return (
              this.on(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .SET_SOCKET_STATE,
                t,
              ),
              this
            );
          }),
          (a.triggerSetSocketState = function (t) {
            (o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "BackendEventBus: set_socket_state ",
                  "",
                ])),
              t,
            ),
              (this.socketState = t),
              this.trigger(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .SET_SOCKET_STATE,
                t,
              ));
          }),
          (a.triggerUpdateStatusPrivacySettings = function (t) {
            (o("WALogger").LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "BackendEventBus: update_status_privacy_settings",
                ])),
            ),
              o("WAWebBackendApi").frontendFireAndForget(
                "triggerUpdateStatusPrivacySettingsFromBridge",
                t,
              ));
          }),
          (a.triggerUpdateCrosspostAutoShareSettings = function (t) {
            (o("WALogger").LOG(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "BackendEventBus: update_crosspost_auto_share_settings",
                ])),
            ),
              o("WAWebBackendApi").frontendFireAndForget(
                "triggerUpdateCrosspostAutoShareSettingsFromBridge",
                t,
              ));
          }),
          (a.triggerTemporaryBan = function (t) {
            (o("WALogger").LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "BackendEventBus: account_temporarily_banned",
                ])),
            ),
              o("WAWebBackendApi").frontendFireAndForget(
                "triggerTemporaryBanFromBridge",
                t,
              ));
          }),
          (a.triggerAccountSyncForPrivacy = function (t) {
            (o("WALogger").LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "BackendEventBus: account_sync_for_privacy",
                ])),
            ),
              o("WAWebBackendApi").frontendFireAndForget(
                "triggerAccountSyncForPrivacyFromBridge",
                t,
              ));
          }),
          (a.triggerUnexpectedLogoutModal = function (t) {
            (o("WALogger").LOG(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "BackendEventBus: unexpected_logout_modal",
                ])),
            ),
              o("WAWebBackendApi").frontendFireAndForget(
                "triggerUnexpectedLogoutModalFromBridge",
                { reason: t },
              ));
          }),
          (a.triggerInitialLoadReady = function () {
            (o("WALogger").LOG(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
                  "BackendEventBus: initial_load_ready",
                ])),
            ),
              o("WAWebBackendApi").frontendFireAndForget(
                "triggerInitialLoadReadyFromBridge",
                {},
              ));
          }),
          (a.triggerServiceUnavailable = function () {
            (o("WALogger").LOG(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "BackendEventBus: service_unavailable_503",
                ])),
            ),
              o("WAWebBackendApi").frontendFireAndForget(
                "triggerServiceUnavailableFromBridge",
                {},
              ));
          }),
          (a.onMainStreamModeReady = function (t) {
            return (
              this.on(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .MAIN_STREAM_MODE_READY,
                t,
              ),
              this
            );
          }),
          (a.triggerMainStreamModeReady = function () {
            (o("WALogger").LOG(
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
                  "BackendEventBus: main_stream_mode_ready",
                ])),
            ),
              (this.isMainStreamReadyMd = !0),
              this.trigger(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .MAIN_STREAM_MODE_READY,
              ),
              o("WAWebBackendApi").frontendFireAndForget(
                "triggerMainStreamModeReadyFromBridge",
                {},
              ));
          }),
          (a.triggerOfflineProcessReady = function () {
            (o("WALogger").LOG(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "BackendEventBus: offline_process_ready",
                ])),
            ),
              this.trigger(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .OFFLINE_PROCESS_READY,
              ));
          }),
          (a.onOfflineDeliveryEnd = function (t) {
            return (
              this.on(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .OFFLINE_DELIVERY_END,
                t,
              ),
              this
            );
          }),
          (a.onceOfflineDeliveryEnd = function (t) {
            return (
              this.once(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .OFFLINE_DELIVERY_END,
                t,
              ),
              this
            );
          }),
          (a.triggerOfflineDeliveryEnd = function () {
            (o("WALogger").LOG(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
                  "BackendEventBus: offline_delivery_end",
                ])),
            ),
              (this.isOfflineDeliveryEnd = !0),
              this.trigger(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .OFFLINE_DELIVERY_END,
              ),
              o("WAWebBackendApi").frontendFireAndForget(
                "triggerOfflineDeliveryEndFromBridge",
                {},
              ));
          }),
          (a.onOfflineDeliveryStateReset = function (t) {
            return (
              this.on(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .OFFLINE_DELIVERY_STATE_RESET,
                t,
              ),
              this
            );
          }),
          (a.triggerOfflineDeliveryStateReset = function () {
            (o("WALogger").LOG(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "BackendEventBus: offline_delivery_state_reset",
                ])),
            ),
              (this.isOfflineDeliveryEnd = !1),
              this.trigger(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .OFFLINE_DELIVERY_STATE_RESET,
              ),
              o("WAWebBackendApi").frontendFireAndForget(
                "triggerOfflineDeliveryStateResetFromBridge",
                {},
              ));
          }),
          (a.onAbPropsUpdate = function (t) {
            return (
              this.on(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .ON_AB_PROPS_UPDATE,
                t,
              ),
              this
            );
          }),
          (a.triggerAbPropsUpdate = function (t) {
            (o("WALogger").LOG(
              N ||
                (N = babelHelpers.taggedTemplateLiteralLoose([
                  "BackendEventBus: on_ab_props_update",
                ])),
            ),
              this.trigger(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .ON_AB_PROPS_UPDATE,
                t,
              ),
              o("WAWebBackendApi").frontendFireAndForget(
                "triggerAbPropsUpdateFromBridge",
                t,
              ));
          }),
          (a.onAbPropsLoaded = function (t) {
            return (
              this.on(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .AB_PROPS_LOADED,
                t,
              ),
              this
            );
          }),
          (a.triggerAbPropsLoaded = function () {
            (o("WALogger").LOG(
              M ||
                (M = babelHelpers.taggedTemplateLiteralLoose([
                  "BackendEventBus: ab_props_loaded",
                ])),
            ),
              this.trigger(
                o("WAWebBackendEventBusTypes.flow").BackendEvent
                  .AB_PROPS_LOADED,
              ),
              o("WAWebBackendApi").frontendFireAndForget(
                "triggerAbPropsLoadedFromBridge",
              ));
          }),
          n
        );
      })(r("WAWebEventEmitter")),
      A = new w();
    ((l.BackendEvent = o("WAWebBackendEventBusTypes.flow").BackendEvent),
      (l.BackendEventBus = A));
  },
  98,
);
