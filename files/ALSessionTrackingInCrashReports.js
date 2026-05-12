__d(
  "ALSessionTrackingInCrashReports",
  [
    "BrowserCrashConfig",
    "FBLogger",
    "RSTLogForCrash",
    "getErrorSafe",
    "logForCrash",
    "requireWeak",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      r("BrowserCrashConfig").SHOULD_CAPTURE_AL_SESSION_DATA &&
        r("requireWeak")("hyperionUtil", function (e) {
          try {
            var t = e == null ? void 0 : e.ClientSessionID;
            t != null &&
              o("logForCrash").onLogForCrashReady(function () {
                o("RSTLogForCrash").logForCrash(
                  "AlBrowserSessionID",
                  t,
                  o("RSTLogForCrash").RSTLogMode.VALID_UNTIL_NEXT_WRITE,
                  { isSystem: !0 },
                );
              });
          } catch (e) {
            r("FBLogger")("log-for-crash")
              .catching(r("getErrorSafe")(e))
              .warn("Failed to init AL session tracking in crash reports");
          }
        });
    }
    l.initALSessionTrackingInCrashReports = e;
  },
  98,
);
