__d(
  "WAWebPushBridgeApi",
  ["WAWebBackgroundSyncAction", "WAWebSubscribePushManagerAction"],
  function (t, n, r, o, a, i, l) {
    var e = {
      updatePeriodicBackgroundSyncRegistration: function (t) {
        var e = t.forceUnregister;
        o("WAWebBackgroundSyncAction").updatePeriodicBackgroundSyncRegistration(
          e,
        );
      },
      updatePushManager: function () {
        o("WAWebSubscribePushManagerAction").updatePushManager();
      },
    };
    l.PushBridgeApi = e;
  },
  98,
);
