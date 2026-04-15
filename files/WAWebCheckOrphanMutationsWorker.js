__d(
  "WAWebCheckOrphanMutationsWorker",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return function (t, n, r) {
        return e.sendAndReceive(
          "mainthread_callbacks",
          "checkOrphanMutations",
          { msgIds: t, chatIds: n, threadIds: r },
        );
      };
    }
    i.createCheckOrphanMutationsWorker = e;
  },
  66,
);
