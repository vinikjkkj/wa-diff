__d(
  "WALockMap",
  ["WALock", "WAPromiseQueue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      e === void 0 && (e = -1);
      var t = new (o("WAPromiseQueue").PromiseQueueMap)(e);
      return o("WALock").makeLock(t);
    }
    l.makeLockMap = e;
  },
  98,
);
