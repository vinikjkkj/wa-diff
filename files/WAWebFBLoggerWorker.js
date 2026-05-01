__d(
  "WAWebFBLoggerWorker",
  ["err"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return function (t) {
        var n,
          o =
            (n = t.error) != null
              ? n
              : r("err")("synthesized for worker FBLogger blame");
        e.sendAndReceive(
          "mainthread_fblogger",
          "logFBError",
          babelHelpers.extends({}, t, { error: o }),
        );
      };
    }
    l.createLogToFBLoggerWorker = e;
  },
  98,
);
