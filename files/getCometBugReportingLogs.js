__d(
  "getCometBugReportingLogs",
  ["FBLogger", "JSResourceForInteraction", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("JSResourceForInteraction")("DataCollector").__setRef(
      "getCometBugReportingLogs",
    );
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (!t) return "{}";
          var o = yield e.load();
          n != null &&
            Object.keys(n).forEach(function (e) {
              var t = n[e];
              o.addLog(t.fileName, t.logContent);
            });
          var a = yield o.collectFullAsyncLogs();
          return (
            r("FBLogger")("comet_bug_reporting")
              .addMetadata(
                "FBLOGGER",
                "RAW_DATA",
                JSON.stringify(o.getLogsStats()),
              )
              .info("Attachments to be uploaded"),
            a
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.default = s;
  },
  98,
);
