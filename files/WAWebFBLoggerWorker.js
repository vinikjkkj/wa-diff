__d(
  "WAWebFBLoggerWorker",
  ["WAWebLogger", "err"],
  function (t, n, r, o, a, i, l) {
    var e = ["error"],
      s = ["serializedError"];
    function u(t) {
      return function (n) {
        var o,
          a,
          i =
            (o = n.error) != null
              ? o
              : r("err")("synthesized for worker FBLogger blame"),
          l = n.error,
          s = babelHelpers.objectWithoutPropertiesLoose(n, e),
          u = {
            message: i.message,
            stack: (a = i.stack) != null ? a : "",
            name: i.name,
          };
        (i.name === "FBLogger" &&
          ((u.messageFormat = i.messageFormat),
          (u.messageParams = i.messageParams),
          (u.taalOpcodes = i.taalOpcodes)),
          t.sendAndReceive(
            "mainthread_fblogger",
            "logFBError",
            babelHelpers.extends({}, s, { serializedError: u }),
          ));
      };
    }
    function c(e) {
      var t,
        n,
        a,
        i = e.serializedError,
        l = babelHelpers.objectWithoutPropertiesLoose(e, s),
        u = r("err")(i.message);
      ((u.stack = i.stack),
        (u.name = i.name),
        (u.messageFormat = (t = i.messageFormat) != null ? t : u.messageFormat),
        (u.messageParams = (n = i.messageParams) != null ? n : u.messageParams),
        (u.taalOpcodes = (a = i.taalOpcodes) != null ? a : u.taalOpcodes),
        o("WAWebLogger").logToFBLoggerLocal(
          babelHelpers.extends({}, l, { error: u }),
        ));
    }
    ((l.createLogToFBLoggerWorker = u), (l.logFBErrorFromWorker = c));
  },
  98,
);
