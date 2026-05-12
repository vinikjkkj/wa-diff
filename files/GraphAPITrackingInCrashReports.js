__d(
  "GraphAPITrackingInCrashReports",
  [
    "BrowserCrashConfig",
    "FBLogger",
    "RSTLogForCrash",
    "getErrorSafe",
    "requireWeak",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { isSystem: !0 };
    function s() {
      r("BrowserCrashConfig").SHOULD_CAPTURE_GRAPH_API_DATA &&
        r("requireWeak")("GraphAPICore", function (t) {
          try {
            (t.addListener("start", function (t) {
              var n = t.method,
                r = t.name,
                a = t.source,
                i = u(a, n, r);
              o("RSTLogForCrash").logSpanStart(i, "graphAPI", e);
            }),
              t.addListener("error", function (e) {
                var t = e.method,
                  n = e.name,
                  r = e.source,
                  a = u(r, t, n);
                o("RSTLogForCrash").logSpanEndForKey(a);
              }),
              t.addListener("success", function (e) {
                var t = e.method,
                  n = e.name,
                  r = e.source,
                  a = u(r, t, n);
                o("RSTLogForCrash").logSpanEndForKey(a);
              }));
          } catch (e) {
            r("FBLogger")("log-for-crash")
              .catching(r("getErrorSafe")(e))
              .warn(
                "Failed to init graph API tracking in crash reports and RST",
              );
          }
        });
    }
    function u(e, t, n) {
      return (e != null ? e + "." : "") + t + "." + n;
    }
    l.initGraphAPITrackingInCrashReports = s;
  },
  98,
);
