__d(
  "WAWebUserPrefsScreenLockWorker",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return {
        getScreenLockEnabled: function () {
          return e.sendAndReceive(
            "mainthread_userPrefsScreenLock",
            "getScreenLockEnabled",
            void 0,
          );
        },
      };
    }
    i.createUserPrefsScreenLockWorkerBridge = e;
  },
  66,
);
