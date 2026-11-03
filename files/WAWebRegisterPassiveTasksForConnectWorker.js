__d(
  "WAWebRegisterPassiveTasksForConnectWorker",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return {
        registerPassiveTasksForConnect: function () {
          return e.sendAndReceive(
            "mainthread_passiveMode",
            "registerPassiveTasksForConnect",
            void 0,
          );
        },
        shouldConnectAsPassiveMode: function () {
          return e.sendAndReceive(
            "mainthread_passiveMode",
            "shouldConnectAsPassiveMode",
            void 0,
          );
        },
      };
    }
    i.createRegisterPassiveTasksForConnectWorker = e;
  },
  66,
);
