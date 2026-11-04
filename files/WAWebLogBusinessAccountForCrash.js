__d(
  "WAWebLogBusinessAccountForCrash",
  [
    "WAWebAICrashAnnotationGate",
    "WAWebLogForCrash",
    "WAWebMobilePlatforms",
    "WAWebSafeCrashAnnotation",
    "WAWebStreamModel",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
        "wa:smb",
        function () {
          return o("WAWebLogForCrash").onLogForCrashReady(function () {
            return o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
              "wa:smb",
              function () {
                (s(), o("WAWebStreamModel").Stream.on("change:mode", s));
              },
            );
          });
        },
      );
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
    l.annotateCrashWithBusinessAccount = e;
  },
  98,
);
