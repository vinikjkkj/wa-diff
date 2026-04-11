__d(
  "WAWebMainThreadLogger",
  ["WAWebCrashlog", "WAWebLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      o("WAWebLogger").initializeWAWebLogger(o("WAWebCrashlog").sendLogs);
    }
    l.initializeWAWebMainThreadLogger = e;
  },
  98,
);
