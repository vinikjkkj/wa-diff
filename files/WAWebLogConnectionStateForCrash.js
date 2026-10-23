__d(
  "WAWebLogConnectionStateForCrash",
  [
    "WAWebLogForCrash",
    "WAWebSafeCrashAnnotation",
    "WAWebSocketModel",
    "WAWebStreamModel",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      o("WAWebLogForCrash").onLogForCrashReady(function () {
        (s(),
          o("WAWebSocketModel").Socket.on("change:state", s),
          o("WAWebSocketModel").Socket.on("change:stream", s),
          o("WAWebStreamModel").Stream.on("change:mode", s));
      });
    }
    function s() {
      o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "wa:conn",
        function () {
          return o("WAWebLogForCrash").logForCrash(
            "wa:conn",
            [
              o("WAWebSocketModel").Socket.state,
              o("WAWebSocketModel").Socket.stream,
              o("WAWebStreamModel").Stream.mode,
            ].join("/"),
          );
        },
      );
    }
    l.initConnectionStateCrashLogging = e;
  },
  98,
);
