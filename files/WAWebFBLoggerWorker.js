__d(
  "WAWebFBLoggerWorker",
  ["err"],
  function (t, n, r, o, a, i, l) {
    var e = ["error"];
    function s(t) {
      return function (n) {
        var o,
          a,
          i =
            (o = n.error) != null
              ? o
              : r("err")("synthesized for worker FBLogger blame"),
          l = n.error,
          s = babelHelpers.objectWithoutPropertiesLoose(n, e);
        t.sendAndReceive(
          "mainthread_fblogger",
          "logFBError",
          babelHelpers.extends({}, s, {
            serializedError: {
              message: i.message,
              stack: (a = i.stack) != null ? a : "",
              name: i.name,
            },
          }),
        );
      };
    }
    l.createLogToFBLoggerWorker = s;
  },
  98,
);
