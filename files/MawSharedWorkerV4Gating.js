__d(
  "MawSharedWorkerV4Gating",
  ["qex", "supportsModuleWorker", "supportsNativeWebLock"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("supportsNativeWebLock")() && r("supportsModuleWorker")(!0);
    }
    function s() {
      var t;
      return e() && (t = r("qex")._("2916")) != null ? t : !1;
    }
    l.isWorkerV4 = s;
  },
  98,
);
