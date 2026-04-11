__d(
  "WAWebSocketBridgeApi",
  ["WAWebCmd", "WAWebCurrentUser", "WAWebEnvironment", "WAWebSocketModel"],
  function (t, n, r, o, a, i, l) {
    var e = {
      socketLogout: function (t) {
        var e = t.reason;
        r("WAWebEnvironment").isWindows && o("WAWebCurrentUser").isEmployee()
          ? o("WAWebCmd").Cmd.onUnexpectedLogoutModalFromBridge(e)
          : o("WAWebSocketModel").Socket.logout(e);
      },
      addStartingLogoutListener: function (t) {
        o("WAWebCmd").Cmd.on("starting_logout_from_bridge", t);
      },
      removeStartingLogoutListener: function (t) {
        o("WAWebCmd").Cmd.off("starting_logout_from_bridge", t);
      },
      triggerSocketStreamDisconnectedFromBridge: function () {
        o("WAWebCmd").Cmd.socketStreamDisconnectedFromBridge();
      },
      triggerOpenSocketStreamFromBridge: function () {
        o("WAWebCmd").Cmd.openSocketStreamFromBridge();
      },
      triggerLogoutFromBridge: function () {
        o("WAWebCmd").Cmd.onLogoutFromBridge();
      },
      triggerStartingLogoutFromBridge: function () {
        o("WAWebCmd").Cmd.onStartingLogoutFromBridge();
      },
      triggerTemporaryBanFromBridge: function (t) {
        o("WAWebCmd").Cmd.onTemporaryBanFromBridge(t);
      },
      triggerUnexpectedLogoutModalFromBridge: function (t) {
        var e = t.reason;
        o("WAWebCmd").Cmd.onUnexpectedLogoutModalFromBridge(e);
      },
      triggerInitialLoadReadyFromBridge: function () {
        o("WAWebCmd").Cmd.onInitialLoadReadyFromBridge();
      },
      triggerMainStreamModeReadyFromBridge: function () {
        o("WAWebCmd").Cmd.onMainStreamModeReadyFromBridge();
      },
      triggerServiceUnavailableFromBridge: function () {
        o("WAWebCmd").Cmd.onServiceUnavailableFromBridge();
      },
      triggerBrigadingStateChangeFromBridge: function (t) {
        var e = t.newState;
        o("WAWebCmd").Cmd.onBrigadingStateChangeFromBridge(e);
      },
      triggerOfflineDeliveryEndFromBridge: function () {
        o("WAWebCmd").Cmd.onOfflineDeliveryEndFromBridge();
      },
      triggerOfflineDeliveryStateResetFromBridge: function () {
        o("WAWebCmd").Cmd.onOfflineDeliveryStateResetFromBridge();
      },
      triggerOfflineProgressUpdateFromBridge: function () {
        o("WAWebCmd").Cmd.onOfflineProgressUpdateFromBridge();
      },
    };
    l.SocketBridgeApi = e;
  },
  98,
);
