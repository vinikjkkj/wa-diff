__d(
  "WAWebIdentityChangeApiWorker",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return {
        handleNewIdentity: function (n, r) {
          return e.sendAndReceive(
            "mainthread_identitychange",
            "handleNewIdentity",
            { deviceWid: n, offline: r },
          );
        },
        clearDeviceRecordForIdentityChange: function (n) {
          return e.sendAndReceive(
            "mainthread_identitychange",
            "clearDeviceRecordForIdentityChange",
            n,
          );
        },
      };
    }
    i.createIdentityChangeApiWorkerBridge = e;
  },
  66,
);
