__d(
  "WAWebLogBusinessAccountForCrash",
  [
    "WAWebLogForCrash",
    "WAWebMobilePlatforms",
    "WAWebSafeCrashAnnotation",
    "WAWebStreamModel",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      o("WAWebLogForCrash").onLogForCrashReady(function () {
        (s(), o("WAWebStreamModel").Stream.on("change:mode", s));
      });
    }
    function s() {
      o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "wa:smb",
        function () {
          o("WAWebMobilePlatforms").isSMB() &&
            o("WAWebLogForCrash").logForCrash("wa:smb", 1);
        },
      );
    }
    l.initBusinessAccountCrashLogging = e;
  },
  98,
);
