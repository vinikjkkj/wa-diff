__d(
  "WAWebMaybeInsertDebugPlaceholderWorker",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return function (t) {
        e.fireAndForget(
          "mainthread_callbacks",
          "maybeInsertDebugPlaceholder",
          t,
        );
      };
    }
    i.createMaybeInsertDebugPlaceholderWorker = e;
  },
  66,
);
