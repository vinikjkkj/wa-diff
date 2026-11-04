__d(
  "WAWebAICrashAnnotationGate",
  ["WAWebSafeCrashAnnotation", "justknobx"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        e,
        function () {
          return r("justknobx")._("7226") ? t() : void 0;
        },
      );
    }
    l.runAICrashAnnotation = e;
  },
  98,
);
