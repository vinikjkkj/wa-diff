__d(
  "WAWebCrashAnnotations",
  ["WAWebEnvironment", "WAWebLogForCrash"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      o("WAWebLogForCrash").onLogForCrashReady(function () {
        s();
      });
    }
    function s() {
      var e = r("WAWebEnvironment").isWindows ? "hybrid" : "web";
      o("WAWebLogForCrash").logForCrash("subplatform", e);
    }
    l.initCrashAnnotations = e;
  },
  98,
);
