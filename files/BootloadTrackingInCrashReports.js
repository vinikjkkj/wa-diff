__d(
  "BootloadTrackingInCrashReports",
  [
    "BrowserCrashConfig",
    "FBLogger",
    "RSTLogForCrash",
    "getErrorSafe",
    "gkx",
    "requireWeak",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { isSystem: !0 };
    function s(e) {
      return e.components.join(",");
    }
    function u() {
      r("BrowserCrashConfig").SHOULD_CAPTURE_BOOTLOAD_DATA &&
        r("requireWeak")("BootloaderEvents", function (t) {
          try {
            (t.onBootloadStarted(function (t) {
              r("gkx")("4279")
                ? o("RSTLogForCrash").logSpanStart(s(t), "Bootload", e)
                : t.components.forEach(function (t) {
                    o("RSTLogForCrash").logSpanStart(t, "Bootload", e);
                  });
            }),
              t.onBootload(function (e) {
                r("gkx")("4279")
                  ? o("RSTLogForCrash").logSpanEndForKey(s(e))
                  : e.components.forEach(function (e) {
                      o("RSTLogForCrash").logSpanEndForKey(e);
                    });
              }),
              t.onBootloadError(function (e) {
                var t = e.bootloaderData;
                r("gkx")("4279")
                  ? o("RSTLogForCrash").logSpanEndForKey(s(t))
                  : t.components.forEach(function (e) {
                      o("RSTLogForCrash").logSpanEndForKey(e);
                    });
              }));
          } catch (e) {
            r("FBLogger")("log-for-crash")
              .catching(r("getErrorSafe")(e))
              .warn("Failed to init Bootload tracking in crash reports");
          }
        });
    }
    l.initBootloadTrackingInCrashReports = u;
  },
  98,
);
