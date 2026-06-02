__d(
  "WebWorkerInitDeferred",
  ["BootloaderErrorLoggerUtil", "CometBootloaderErrorLoggerUtil", "cr:7429"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      e.blLoggingCavalryFields &&
        (n("cr:7429").initLogging(e.blLoggingCavalryFields),
        o("CometBootloaderErrorLoggerUtil").initLogging(
          e.blLoggingCavalryFields,
        ),
        o("BootloaderErrorLoggerUtil").initLogging(e.blLoggingCavalryFields));
    }
    l.initDeferred = e;
  },
  98,
);
